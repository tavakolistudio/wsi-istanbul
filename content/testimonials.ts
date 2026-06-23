import type { Testimonial } from "./types";

/**
 * Placeholder testimonials covering the core audience segments (Iranian
 * couples local & travelling, Turkish couples, international couples).
 * Replace with real client quotes once available — names are not
 * translated since they're proper nouns.
 */
export const testimonials: Testimonial[] = [
  {
    id: "sara-arman",
    names: "Sara & Arman",
    origin: { en: "Iranian couple, living in Istanbul", fa: "زوج ایرانی، ساکن استانبول", tr: "İranlı çift, İstanbul'da yaşıyor" },
    quote: {
      en: "Mohammad and Mahtab didn't just photograph our wedding — they understood our story before we even told it. Every photo feels like us.",
      fa: "محمد و مهتاب فقط عروسی ما را عکاسی نکردند — آن‌ها داستان ما را حتی پیش از آن‌که تعریفش کنیم، فهمیدند. هر عکس دقیقاً شبیه خودمان است.",
      tr: "Mohammad ve Mahtab düğünümüzü sadece fotoğraflamadı — biz anlatmadan önce hikayemizi anladılar. Her kare tam olarak bize benziyor.",
    },
    initials: "S&A",
  },
  {
    id: "niloofar-pouya",
    names: "Niloofar & Pouya",
    origin: { en: "Iranian couple, traveled from Tehran", fa: "زوج ایرانی، سفرکرده از تهران", tr: "İranlı çift, Tahran'dan geldi" },
    quote: {
      en: "We flew in from Tehran for three days and they planned everything around our schedule. The film still makes us cry — happily.",
      fa: "ما برای سه روز از تهران به استانبول پرواز کردیم و آن‌ها همه‌چیز را بر اساس زمان ما برنامه‌ریزی کردند. فیلم هنوز هم ما را به گریه می‌اندازد — از خوشحالی.",
      tr: "Tahran'dan üç günlüğüne uçtuk ve her şeyi bizim programımıza göre planladılar. Film hâlâ bizi ağlatıyor — mutluluktan.",
    },
    initials: "N&P",
  },
  {
    id: "elif-kaan",
    names: "Elif & Kaan",
    origin: { en: "Turkish couple, Istanbul", fa: "زوج ترک، استانبول", tr: "Türk çift, İstanbul" },
    quote: {
      en: "As locals, we thought we knew every corner of this city. They showed us Istanbul in a completely different light — literally.",
      fa: "ما به‌عنوان اهل این شهر، فکر می‌کردیم همه‌جای آن را می‌شناسیم. اما آن‌ها استانبول را در نوری کاملاً متفاوت به ما نشان دادند — به معنای واقعی کلمه.",
      tr: "Yerli olarak şehrin her köşesini bildiğimizi düşünüyorduk. Bize İstanbul'u tamamen farklı bir ışıkta gösterdiler — kelimenin tam anlamıyla.",
    },
    initials: "E&K",
  },
  {
    id: "laura-james",
    names: "Laura & James",
    origin: { en: "Couple from London, United Kingdom", fa: "زوجی از لندن، انگلستان", tr: "Londra, İngiltere'den çift" },
    quote: {
      en: "We considered shooting our pre-wedding in three different cities. Istanbul — and this team — won by far. Effortless from booking to delivery.",
      fa: "ما برای عکاسی پره‌وداد بین سه شهر مختلف مردد بودیم. استانبول — و این تیم — با فاصله زیادی برنده شد. از رزرو تا تحویل، همه‌چیز بی‌دردسر بود.",
      tr: "Pre-wedding çekimimiz için üç farklı şehri değerlendirdik. İstanbul — ve bu ekip — açık farkla kazandı. Rezervasyondan teslimata kadar her şey sorunsuzdu.",
    },
    initials: "L&J",
  },
  {
    id: "hediyeh-sam",
    names: "Hediyeh & Sam",
    origin: {
      en: "Couple session, anniversary trip to Istanbul",
      fa: "جلسه عکاسی کاپل، سفر سالگرد به استانبول",
      tr: "Çift çekimi, İstanbul'a yıldönümü gezisi",
    },
    quote: {
      en: "We didn't have a wedding to photograph — just our fifth anniversary. They treated it with the same care as a full wedding day.",
      fa: "ما عروسی‌ای برای عکاسی نداشتیم — فقط پنجمین سالگرد ازدواجمان بود. اما آن‌ها با همان دقت یک روز عروسی کامل با ما رفتار کردند.",
      tr: "Fotoğraflanacak bir düğünümüz yoktu — sadece beşinci evlilik yıldönümümüzdü. Bize tam bir düğün günü kadar özen gösterdiler.",
    },
    initials: "H&S",
  },
];
