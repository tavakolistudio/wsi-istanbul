import type { GalleryItem } from "./types";

/**
 * 10 placeholder gallery items. To add a new one: push a new object with a
 * unique `id`, drop the real photo at the given `image` path (see
 * /public/images/gallery), and fill in title/alt per locale.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "wedding-bosphorus-1",
    title: { en: "A Vow by the Bosphorus", fa: "پیمانی در کنار بسفر", tr: "Boğaz Kıyısında Bir Yemin" },
    category: "wedding",
    image: "/images/gallery/gallery-bosphorus-wedding-1.svg",
    alt: {
      en: "Bride and groom embracing on the Bosphorus shoreline at sunset",
      fa: "در آغوش گرفتن عروس و داماد در ساحل بسفر هنگام غروب",
      tr: "Gün batımında Boğaz kıyısında sarılan gelin ve damat",
    },
    location: { en: "Bosphorus Shoreline", fa: "ساحل بسفر", tr: "Boğaz Kıyısı" },
  },
  {
    id: "wedding-ortakoy-1",
    title: { en: "Golden Hour at Ortaköy", fa: "ساعت طلایی در اورتاکوی", tr: "Ortaköy'de Gün Batımı" },
    category: "wedding",
    image: "/images/gallery/gallery-ortakoy-wedding-1.svg",
    alt: {
      en: "Wedding couple posing in front of Ortaköy Mosque and the Bosphorus Bridge",
      fa: "ژست زوج عروسی مقابل مسجد اورتاکوی و پل بسفر",
      tr: "Ortaköy Camii ve Boğaz Köprüsü önünde poz veren düğün çifti",
    },
    location: { en: "Ortaköy", fa: "اورتاکوی", tr: "Ortaköy" },
  },
  {
    id: "wedding-sultanahmet-1",
    title: { en: "Timeless in Sultanahmet", fa: "لحظه‌ای ماندگار در سلطان‌احمد", tr: "Sultanahmet'te Zamansız Bir An" },
    category: "wedding",
    image: "/images/gallery/gallery-sultanahmet-wedding-1.svg",
    alt: {
      en: "Wedding portrait with the domes of Sultanahmet in the background",
      fa: "پرتره عروسی با گنبدهای سلطان‌احمد در پس‌زمینه",
      tr: "Arka planda Sultanahmet kubbeleriyle düğün portresi",
    },
    location: { en: "Sultanahmet", fa: "سلطان‌احمد", tr: "Sultanahmet" },
  },
  {
    id: "pre-wedding-galata-1",
    title: { en: "Old Streets, New Beginnings", fa: "خیابان‌های قدیمی، آغازی نو", tr: "Eski Sokaklar, Yeni Bir Başlangıç" },
    category: "pre-wedding",
    image: "/images/gallery/gallery-galata-pre-wedding-1.svg",
    alt: {
      en: "Couple in formal wear walking through the cobblestone streets near Galata Tower",
      fa: "زوجی با لباس فرمال در حال قدم‌زدن در کوچه‌های سنگ‌فرش نزدیک برج گالاتا",
      tr: "Galata Kulesi yakınındaki taş döşeli sokaklarda yürüyen resmi kıyafetli çift",
    },
    location: { en: "Galata", fa: "گالاتا", tr: "Galata" },
  },
  {
    id: "pre-wedding-balat-1",
    title: { en: "Colors of Balat", fa: "رنگ‌های بالات", tr: "Balat'ın Renkleri" },
    category: "pre-wedding",
    image: "/images/gallery/gallery-balat-pre-wedding-1.svg",
    alt: {
      en: "Formality portrait in front of the colorful historic houses of Balat",
      fa: "پرتره فرمالیته مقابل خانه‌های رنگی و تاریخی بالات",
      tr: "Balat'ın renkli tarihi evleri önünde resmi portre",
    },
    location: { en: "Balat", fa: "بالات", tr: "Balat" },
  },
  {
    id: "pre-wedding-pierreloti-1",
    title: { en: "Dusk at Pierre Loti", fa: "غروب در پیرلوتی", tr: "Pierre Loti'de Akşam" },
    category: "pre-wedding",
    image: "/images/gallery/gallery-pierreloti-pre-wedding-1.svg",
    alt: {
      en: "Couple silhouetted at Pierre Loti Hill overlooking the Golden Horn at dusk",
      fa: "سایه زوج در تپه پیرلوتی با چشم‌اندازی از شاخ طلایی هنگام غروب",
      tr: "Alacakaranlıkta Haliç manzaralı Pierre Loti Tepesi'nde silüet çift",
    },
    location: { en: "Pierre Loti Hill", fa: "تپه پیرلوتی", tr: "Pierre Loti Tepesi" },
  },
  {
    id: "couple-galata-1",
    title: { en: "Afternoon at Galata Tower", fa: "بعدازظهری در برج گالاتا", tr: "Galata Kulesi'nde Bir Öğleden Sonra" },
    category: "couple-session",
    image: "/images/gallery/gallery-galata-couple-1.svg",
    alt: {
      en: "Couple laughing together near Galata Tower during a couple session",
      fa: "خندیدن زوج در کنار هم نزدیک برج گالاتا در یک جلسه عکاسی کاپل",
      tr: "Çift çekimi sırasında Galata Kulesi yakınında birlikte gülen çift",
    },
    location: { en: "Galata", fa: "گالاتا", tr: "Galata" },
  },
  {
    id: "couple-bosphorus-1",
    title: { en: "Just the Two of Us, Bosphorus", fa: "فقط ما دو نفر، بسفر", tr: "Sadece İkimiz, Boğaz" },
    category: "couple-session",
    image: "/images/gallery/gallery-bosphorus-couple-1.svg",
    alt: {
      en: "Couple sitting together by the Bosphorus during golden hour",
      fa: "نشستن زوج در کنار هم در ساعت طلایی کنار بسفر",
      tr: "Gün batımında Boğaz kenarında birlikte oturan çift",
    },
    location: { en: "Bosphorus", fa: "بسفر", tr: "Boğaz" },
  },
  {
    id: "city-karakoy-1",
    title: { en: "Karaköy at Blue Hour", fa: "کاراکوی در ساعت آبی", tr: "Mavi Saatte Karaköy" },
    category: "istanbul-city",
    image: "/images/gallery/gallery-karakoy-city-1.svg",
    alt: {
      en: "Cinematic street view of Karaköy's waterfront at blue hour",
      fa: "نمای سینمایی خیابان‌های ساحلی کاراکوی در ساعت آبی",
      tr: "Mavi saatte Karaköy sahilinin sinematik sokak görüntüsü",
    },
    location: { en: "Karaköy", fa: "کاراکوی", tr: "Karaköy" },
  },
  {
    id: "city-rooftop-1",
    title: { en: "Istanbul Skyline From Above", fa: "خط آسمان استانبول از بالا", tr: "Yukarıdan İstanbul Manzarası" },
    category: "istanbul-city",
    image: "/images/gallery/gallery-rooftop-city-1.svg",
    alt: {
      en: "Rooftop view over Istanbul's skyline at twilight, used for luxury rooftop sessions",
      fa: "نمایی از روفتاپ بر فراز خط آسمان استانبول در گرگ‌ومیش، مناسب جلسات لوکس روفتاپ",
      tr: "Lüks çatı katı çekimleri için alacakaranlıkta İstanbul silüetinin çatı katından görünümü",
    },
    location: { en: "Rooftop, Istanbul", fa: "روفتاپ، استانبول", tr: "Çatı Katı, İstanbul" },
  },
];

export const galleryCategories = ["wedding", "pre-wedding", "couple-session", "istanbul-city"] as const;
