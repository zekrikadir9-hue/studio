
"use client"
import React, { useState } from 'react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, LayoutGrid, ImageIcon } from 'lucide-react';
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
        toast({ title: "Category Updated" });
      } else {
        await addDoc(collection(db, 'categories'), { ...data, createdAt: serverTimestamp() });
        toast({ title: "Category Added" });
      }
      setIsDialogOpen(false);
      setEditingCategory(null);
    } catch (error) {
      toast({ title: "Error saving category", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!db || !confirm("Are you sure?")) return;
    try {
      await deleteDoc(doc(db, 'categories', id));
      toast({ title: "Category Deleted" });
    } catch (e) {
      toast({ title: "Error deleting", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <LayoutGrid className="w-8 h-8" /> Manage Categories
          </h1>
          <p className="text-muted-foreground">Organize your store sections with beautiful visuals.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-secondary text-white rounded-full px-6 h-12 font-bold shadow-lg btn-hover-effect">
              <Plus className="w-5 h-5 ml-2" /> Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white rounded-3xl max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline">{editingCategory ? 'Edit Category' : 'New Category'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-6 py-4">
              <div className="space-y-2">
                <Label>Name (Arabic)</Label>
                <Input name="name_ar" defaultValue={editingCategory?.name_ar} required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Name (French)</Label>
                <Input name="name_fr" defaultValue={editingCategory?.name_fr} required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Image URL (Attractive Visual)</Label>
                <Input name="imageUrl" defaultValue={editingCategory?.imageUrl} placeholder="https://..." className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Icon Name (Lucide)</Label>
                <Input name="icon" defaultValue={editingCategory?.icon} placeholder="Gem, ShoppingBag, etc." className="rounded-xl" />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-bold rounded-xl bg-primary">
                Save Category
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <Table>
          <TableHeader className="bg-stone-50">
            <TableRow>
              <TableHead>Preview</TableHead>
              <TableHead>Arabic Name</TableHead>
              <TableHead>French Name</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={4} className="text-center py-10">Loading...</TableCell></TableRow>
            ) : categories?.map((cat: any) => (
              <TableRow key={cat.id}>
                <TableCell>
                  <div className="w-16 h-12 rounded-lg overflow-hidden relative">
                    <img src={cat.imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                </TableCell>
                <TableCell className="font-bold">{cat.name_ar}</TableCell>
                <TableCell>{cat.name_fr}</TableCell>
                <TableCell className="text-right">
                   <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => { setEditingCategory(cat); setIsDialogOpen(true); }}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(cat.id)}>
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
