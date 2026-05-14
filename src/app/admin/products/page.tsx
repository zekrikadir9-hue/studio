
"use client"
import React, { useState, useEffect } from 'react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, Package, ImageIcon, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AdminProductsPage() {
  const db = useFirestore();
  const { toast } = useToast();
  const productsQuery = db ? collection(db, 'products') : null;
  const categoriesQuery = db ? collection(db, 'categories') : null;
  
  const { data: products, loading } = useCollection(productsQuery);
  const { data: categories } = useCollection(categoriesQuery);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatNumber = (num: number) => {
    if (!mounted) return num.toString();
    // Use a fixed locale to avoid hydration issues across environments
    return num.toLocaleString('en-US');
  };

  const handleSaveProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!db) return;

    const formData = new FormData(e.currentTarget);
    const productData = {
      name_ar: formData.get('name_ar'),
      name_fr: formData.get('name_fr'),
      description_ar: formData.get('description_ar'),
      description_fr: formData.get('description_fr'),
      price: Number(formData.get('price')),
      discountPrice: formData.get('discountPrice') ? Number(formData.get('discountPrice')) : null,
      category: formData.get('category'),
      imageUrl: formData.get('imageUrl') || 'https://picsum.photos/seed/new/800/1000',
      isNew: formData.get('isNew') === 'on',
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingProduct) {
        await updateDoc(doc(db, 'products', editingProduct.id), productData);
        toast({ title: "تم تحديث المنتج بنجاح" });
      } else {
        await addDoc(collection(db, 'products'), { ...productData, createdAt: serverTimestamp() });
        toast({ title: "تم إضافة المنتج بنجاح" });
      }
      setIsDialogOpen(false);
      setEditingProduct(null);
    } catch (error) {
      toast({ title: "خطأ في حفظ المنتج", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!db || !confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;
    try {
      await deleteDoc(doc(db, 'products', id));
      toast({ title: "تم حذف المنتج" });
    } catch (e) {
      toast({ title: "خطأ في الحذف", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8 text-right" dir="rtl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <Package className="w-8 h-8" /> إدارة المخزون
          </h1>
          <p className="text-muted-foreground">أضف وتحكم في منتجات ثيليلي التراثية.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-secondary text-white rounded-full px-6 h-12 font-bold shadow-lg hover:shadow-secondary/20 btn-hover-effect">
              <Plus className="w-5 h-5 ml-2" /> إضافة قطعة جديدة
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl bg-white rounded-3xl overflow-y-auto max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline text-right">
                {editingProduct ? 'تعديل المنتج' : 'إضافة قطعة تراثية جديدة'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSaveProduct} className="space-y-6 py-4 text-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>اسم المنتج (العربية)</Label>
                  <Input name="name_ar" defaultValue={editingProduct?.name_ar} required className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label>Nom du Produit (Français)</Label>
                  <Input name="name_fr" defaultValue={editingProduct?.name_fr} required className="rounded-xl h-12" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>الوصف (العربية)</Label>
                  <Textarea name="description_ar" defaultValue={editingProduct?.description_ar} className="rounded-xl min-h-[100px]" />
                </div>
                <div className="space-y-2">
                  <Label>Description (Français)</Label>
                  <Textarea name="description_fr" defaultValue={editingProduct?.description_fr} className="rounded-xl min-h-[100px]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>السعر (DA)</Label>
                  <Input name="price" type="number" defaultValue={editingProduct?.price} required className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label>سعر الخصم (اختياري)</Label>
                  <Input name="discountPrice" type="number" defaultValue={editingProduct?.discountPrice} className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label>الفئة</Label>
                  <Select name="category" defaultValue={editingProduct?.category}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="اختر الفئة" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories?.map((cat: any) => (
                        <SelectItem key={cat.id} value={cat.id}>{cat.name_ar}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>رابط الصورة</Label>
                <div className="flex gap-4">
                  <Input name="imageUrl" defaultValue={editingProduct?.imageUrl} placeholder="https://..." className="rounded-xl h-12 flex-1" />
                  {editingProduct?.imageUrl && (
                    <img src={editingProduct.imageUrl} className="w-12 h-12 rounded-lg object-cover border" alt="preview" />
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <Switch name="isNew" defaultChecked={editingProduct?.isNew} />
                <Label className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" /> تحديد كمنتج "جديد"
                </Label>
              </div>

              <Button type="submit" className="w-full h-14 text-xl font-bold rounded-xl bg-primary">
                {editingProduct ? 'تحديث البيانات' : 'حفظ المنتج في المتجر'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden shadow-xl border-none">
        <Table>
          <TableHeader className="bg-stone-50/50">
            <TableRow>
              <TableHead className="text-right">المنتج</TableHead>
              <TableHead className="text-right">الفئة</TableHead>
              <TableHead className="text-right">السعر</TableHead>
              <TableHead className="text-right">الحالة</TableHead>
              <TableHead className="text-left">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={5} className="text-center py-20 animate-pulse">جاري تحميل المنتجات...</TableCell></TableRow>
            ) : products?.map((product: any) => (
              <TableRow key={product.id} className="hover:bg-stone-50/30 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-4">
                    <img src={product.imageUrl} alt="" className="w-14 h-14 rounded-xl object-cover shadow-sm" />
                    <div>
                      <div className="font-bold text-primary">{product.name_ar}</div>
                      <div className="text-xs text-muted-foreground">{product.name_fr}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="bg-primary/5 px-3 py-1 rounded-full text-xs font-medium text-primary">
                    {product.category}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-primary">
                    {product.discountPrice ? (
                      <>
                        <span className="text-secondary">{formatNumber(product.discountPrice)} DA</span>
                        <span className="text-xs line-through text-muted-foreground mr-2">{formatNumber(product.price)}</span>
                      </>
                    ) : (
                      <span>{formatNumber(product.price)} DA</span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                   {product.isNew && <span className="bg-secondary/10 text-secondary text-[10px] font-black px-2 py-0.5 rounded uppercase">New</span>}
                </TableCell>
                <TableCell>
                   <div className="flex items-center justify-start gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-primary/5 rounded-full" onClick={() => { setEditingProduct(product); setIsDialogOpen(true); }}>
                        <Pencil className="w-4 h-4 text-primary" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-destructive/5 rounded-full text-destructive" onClick={() => handleDelete(product.id)}>
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
