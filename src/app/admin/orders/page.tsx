"use client"
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, ShieldAlert, CheckCircle2, ShieldEllipsis, MoreHorizontal } from 'lucide-react';
import { aiPoweredFraudDetection, blacklistCustomer } from '@/ai/flows/ai-powered-fraud-detection-flow';
import { useToast } from '@/hooks/use-toast';

export default function AdminOrdersPage() {
  const { toast } = useToast();
  const [analyzing, setAnalyzing] = useState<string | null>(null);
  
  const [orders, setOrders] = useState([
    { id: 'ORD-001', customer: 'Amine Kabyli', phone: '0555123456', amount: '25,000 DA', status: 'Pending', wilaya: 'Alger', risk: null },
    { id: 'ORD-002', customer: 'Sarah Ben', phone: '0777987654', amount: '8,500 DA', status: 'Pending', wilaya: 'Batna', risk: null },
    { id: 'ORD-003', customer: 'Lyes Oukaci', phone: '0666112233', amount: '45,000 DA', status: 'Processing', wilaya: 'Skikda', risk: null },
  ]);

  const runFraudCheck = async (orderId: string, phone: string) => {
    setAnalyzing(orderId);
    try {
      const result = await aiPoweredFraudDetection({
        orderId,
        customerPhoneNumber: phone,
        customerIpAddress: '192.168.1.' + Math.floor(Math.random() * 255),
        orderValue: 12000,
      });

      setOrders(prev => prev.map(o => o.id === orderId ? { ...o, risk: result } : o));
      
      if (result.isFraudulent) {
        toast({
          title: "High Risk Detected",
          description: `Order ${orderId} has a high fraud score of ${result.fraudScore}%`,
          variant: "destructive"
        });
      }
    } catch (error) {
       toast({ title: "Analysis Failed", description: "Could not connect to AI services.", variant: "destructive" });
    } finally {
      setAnalyzing(null);
    }
  };

  const signalCustomer = async (phone: string, reason: string) => {
    try {
      await blacklistCustomer({ customerPhoneNumber: phone, reason });
      toast({ title: "Customer Blacklisted", description: `Phone ${phone} was successfully signaled.` });
    } catch (e) {
      toast({ title: "Error", description: "Failed to blacklist customer.", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary">Manage Orders</h1>
          <p className="text-muted-foreground">Monitor sales and run anti-fraud assessments.</p>
        </div>
        <Button className="bg-secondary text-white rounded-full">Export CSV</Button>
      </div>

      <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-stone-50">
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Wilaya</TableHead>
              <TableHead>Risk Status</TableHead>
              <TableHead>AI Analysis</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-stone-50/50">
                <TableCell className="font-bold">{order.id}</TableCell>
                <TableCell>
                   <div className="font-medium">{order.customer}</div>
                   <div className="text-xs text-muted-foreground">{order.phone}</div>
                </TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.wilaya}</TableCell>
                <TableCell>
                  {order.risk ? (
                    <Badge variant={order.risk.isFraudulent ? "destructive" : "secondary"} className="gap-1">
                      {order.risk.isFraudulent ? <ShieldAlert className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                      {order.risk.fraudScore}% Risk
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-muted-foreground">Not Analyzed</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => runFraudCheck(order.id, order.phone)}
                    disabled={analyzing === order.id}
                    className="h-8 text-xs font-bold"
                  >
                    {analyzing === order.id ? <ShieldEllipsis className="w-3 h-3 animate-pulse" /> : "Run AI Scan"}
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                   <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" title="View details"><MoreHorizontal className="w-4 h-4" /></Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-destructive font-bold hover:bg-destructive/10"
                        onClick={() => signalCustomer(order.phone, "Suspicious activity flagged by admin.")}
                      >
                        Signal
                      </Button>
                   </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}