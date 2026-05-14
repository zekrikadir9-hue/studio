# THILELI | ثيليلي - Amazigh Heritage Store 🏺✨

ثيليلي هو متجر إلكتروني فاخر متخصص في عرض وبيع المنتجات التراثية الأمازيغية الجزائرية بلمسة عصرية عالمية.

## 🚀 كيفية الرفع على Vercel (Deployment)

1. **GitHub**: ارفع الكود الخاص بك على مستودع (Repository) جديد في GitHub.
2. **Vercel Dashboard**: اذهب إلى [Vercel](https://vercel.com) وانقر على **New Project**.
3. **Import**: اختر المستودع الخاص بك.
4. **Environment Variables**: أضف المتغيرات التالية في قسم الإعدادات (يمكنك نسخها من ملف `.env`):

| Key | Description |
| :--- | :--- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | مفتاح API الخاص بـ Firebase |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | نطاق المصادقة |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | معرف مشروع Firebase |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | مخزن الملفات |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | معرف المرسل |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | معرف التطبيق |
| `GEMINI_API_KEY` | مفتاح الذكاء الاصطناعي (Gemini) |

5. **Deploy**: انقر على زر النشر. سيعمل الموقع تلقائياً.

## ✨ التقنيات المستخدمة
- **Next.js 15 (App Router)**: للأداء العالي وتجربة المستخدم السلسة.
- **Firebase Auth & Firestore**: لإدارة المستخدمين وقاعدة البيانات اللحظية.
- **Tailwind CSS & Shadcn UI**: لتصميم عصري، فخم، ومتجاوب بالكامل.
- **Genkit AI**: لنظام كشف الاحتيال الذكي (AI-Powered Fraud Detection).

---
تم التطوير بكل حب لتمثيل التراث الجزائري الأصيل. 🇩🇿👑
