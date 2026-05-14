# THILELI | ثيليلي - Amazigh Heritage Store 🏺✨

ثيليلي هو متجر إلكتروني فاخر متخصص في عرض وبيع المنتجات التراثية الأمازيغية الجزائرية بلمسة عصرية عالمية.

## 🚀 كيفية الرفع على Vercel (Deployment)

1. **GitHub**: ارفع الكود الخاص بك على مستودع (Repository) جديد في GitHub.
2. **Vercel Dashboard**: اذهب إلى [Vercel](https://vercel.com) وانقر على **New Project**.
3. **Import**: اختر المستودع الخاص بك.
4. **Environment Variables**: أضف المتغيرات التالية في قسم الإعدادات:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `GEMINI_API_KEY` (الخاص بـ Genkit AI)
5. **Deploy**: انقر على زر النشر. سيعمل الموقع تلقائياً.

## ✨ التقنيات
- Next.js 15
- Firebase Auth & Firestore
- Tailwind CSS & Shadcn UI
- Genkit AI (Fraud Detection)

---
تم التطوير بكل حب لتمثيل التراث الجزائري الأصيل. 🇩🇿👑
