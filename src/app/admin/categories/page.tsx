
"use client"
import React, { useState } from 'react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, LayoutGrid, ImageIcon, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminCategoriesPage() {
  const db = useFirestore();
  const { toast } = useToast();
  const categoriesQuery = db ? collection(db, 'categories') : null;
  const { data: categories, loading } = useCollection(categoriesQuery);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!db) return;

    const formData = new FormData(e.currentTarget);
    const data = {
      name_ar: formData.get('name_ar'),
      name_fr: formData.get('name_fr'),
      icon: formData.get('icon') || 'LayoutGrid',
      imageUrl: formData.get('imageUrl') || 'https://picsum.photos/seed/cat/600/800',
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingCategory) {
        await updateDoc(doc(db, 'categories', editingCategory.id), data);
        toast({ title: "تم تحديث القسم بنجاح" });
      } else {
        await addDoc(collection(db, 'categories'), { ...data, createdAt: serverTimestamp() });
        toast({ title: "تم إضافة القسم بنجاح" });
      }
      setIsDialogOpen(false);
      setEditingCategory(null);
    } catch (error) {
      toast({ title: "خطأ في الحفظ", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!db || !confirm("هل تريد حذف هذا القسم؟ سيؤثر هذا على عرض المنتجات المرتبطة به.")) return;
    try {
      await deleteDoc(doc(db, 'categories', id));
      toast({ title: "تم حذف القسم" });
    } catch (e) {
      toast({ title: "خطأ في الحذف", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8 text-right" dir="rtl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <LayoutGrid className="w-8 h-8" /> إدارة الأقسام
          </h1>
          <p className="text-muted-foreground">نظم متجرك بجمال وبساطة.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-secondary text-white rounded-full px-6 h-12 font-bold shadow-lg btn-hover-effect">
              <Plus className="w-5 h-5 ml-2" /> إضافة قسم جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white rounded-[2rem] max-w-md p-8">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline text-right">
                {editingCategory ? 'تعديل القسم' : 'إضافة قسم جديد'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-6 py-4 text-right">
              <div className="space-y-2">
                <Label>الاسم (العربية)</Label>
                <Input name="name_ar" defaultValue={editingCategory?.name_ar} required className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label>Nom (Français)</Label>
                <Input name="name_fr" defaultValue={editingCategory?.name_fr} required className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label>رابط صورة الغلاف (جذابة)</Label>
                <Input name="imageUrl" defaultValue={editingCategory?.imageUrl} placeholder="https://..." className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label>اسم الأيقونة (Lucide)</Label>
                <Input name="icon" defaultValue={editingCategory?.icon} placeholder="Gem, ShoppingBag, Eye..." className="rounded-xl h-12" />
              </div>
              <Button type="submit" className="w-full h-14 text-xl font-bold rounded-xl bg-primary mt-4">
                حفظ القسم
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-20 animate-pulse text-primary font-bold">جاري تحميل الأقسام...</div>
        ) : categories?.map((cat: any) => (
          <div key={cat.id} className="group relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-100 bg-white">
            <img src={cat.imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
               <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-2xl font-headline font-bold">{cat.name_ar}</h3>
                    <p className="text-white/60 text-sm">{cat.name_fr}</p>
                  </div>
                  <div className="flex gap-2">
                     <Button variant="secondary" size="icon" className="rounded-full h-10 w-10" onClick={() => { setEditingCategory(cat); setIsDialogOpen(true); }}>
                        <Pencil className="w-4 h-4" />
                     </Button>
                     <Button variant="destructive" size="icon" className="rounded-full h-10 w-10" onClick={() => handleDelete(cat.id)}>
                        <Trash2 className="w-4 h-4" />
                     </Button>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
