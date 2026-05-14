
"use client"
import React, { useState } from 'react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminProductsPage() {
  const db = useFirestore();
  const { toast } = useToast();
  const productsQuery = db ? collection(db, 'products') : null;
  const { data: products, loading } = useCollection(productsQuery);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const handleSaveProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!db) return;

    const formData = new FormData(e.currentTarget);
    const productData = {
      name_ar: formData.get('name_ar'),
      name_fr: formData.get('name_fr'),
      price: Number(formData.get('price')),
      category: formData.get('category'),
      imageUrl: formData.get('imageUrl') || 'https://picsum.photos/seed/new/800/1000',
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingProduct) {
        await updateDoc(doc(db, 'products', editingProduct.id), productData);
        toast({ title: "Product Updated" });
      } else {
        await addDoc(collection(db, 'products'), { ...productData, createdAt: serverTimestamp() });
        toast({ title: "Product Added" });
      }
      setIsDialogOpen(false);
      setEditingProduct(null);
    } catch (error) {
      toast({ title: "Error saving product", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!db || !confirm("Are you sure?")) return;
    try {
      await deleteDoc(doc(db, 'products', id));
      toast({ title: "Product Deleted" });
    } catch (e) {
      toast({ title: "Error deleting", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <Package className="w-8 h-8" /> Manage Inventory
          </h1>
          <p className="text-muted-foreground">Add and organize your Amazigh products.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-secondary text-white rounded-full px-6 h-12 font-bold shadow-lg hover:shadow-secondary/20 btn-hover-effect">
              <Plus className="w-5 h-5 ml-2" /> Add New Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-white rounded-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline">{editingProduct ? 'Edit Product' : 'Add New Heritage Piece'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSaveProduct} className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name (Arabic)</Label>
                  <Input name="name_ar" defaultValue={editingProduct?.name_ar} required className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Name (French)</Label>
                  <Input name="name_fr" defaultValue={editingProduct?.name_fr} required className="rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Price (DA)</Label>
                  <Input name="price" type="number" defaultValue={editingProduct?.price} required className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Input name="category" defaultValue={editingProduct?.category} required className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Image URL</Label>
                <Input name="imageUrl" defaultValue={editingProduct?.imageUrl} placeholder="https://..." className="rounded-xl" />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-bold rounded-xl bg-primary">
                {editingProduct ? 'Update Product' : 'Save Product'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <Table>
          <TableHeader className="bg-stone-50">
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={5} className="text-center py-10 animate-pulse">Loading products...</TableCell></TableRow>
            ) : products?.map((product: any) => (
              <TableRow key={product.id} className="hover:bg-stone-50/50">
                <TableCell>
                  <img src={product.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover" />
                </TableCell>
                <TableCell className="font-bold">
                  <div>{product.name_ar}</div>
                  <div className="text-xs text-muted-foreground">{product.name_fr}</div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="font-bold text-primary">{product.price.toLocaleString()} DA</TableCell>
                <TableCell className="text-right">
                   <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => { setEditingProduct(product); setIsDialogOpen(true); }}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(product.id)}>
                        <Trash2 className="w-4 h-4" />
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
