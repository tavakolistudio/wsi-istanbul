import type { Service } from "./types";

/**
 * The 4 core services. `image` reuses an existing gallery asset (see
 * content/gallery.ts) rather than requiring dedicated service photography —
 * swap to a dedicated image any time by pointing it at a new path.
 */
export const services: Service[] = [
  {
    id: "wedding-photography",
    slug: "wedding-photography",
    title: { en: "Wedding Photography", fa: "عکاسی عروسی", tr: "Düğün Fotoğrafçılığı" },
    intro: {
      en: "Documentary-style coverage of your wedding day, woven with directed portraits — so every glance, vow and celebration is kept exactly as it felt.",
      fa: "پوشش مستندگونه از روز عروسی شما، در کنار پرتره‌های هدایت‌شده — تا هر نگاه، هر سوگند و هر جشن، دقیقاً همان‌طور که حس شد، برای همیشه ثبت شود.",
      tr: "Düğün gününüzün belgesel tarzı kareleri, yönlendirilmiş portrelerle birleşiyor — her bakış, her yemin ve her kutlama hissedildiği gibi kalsın diye.",
    },
    features: {
      en: [
        "Full-day or multi-day coverage",
        "Documentary moments + directed portraits",
        "Two photographers available for larger weddings",
        "Professionally edited, color-graded gallery",
        "Private online gallery for sharing & download",
      ],
      fa: [
        "پوشش تمام‌روز یا چندروزه",
        "لحظات مستند همراه با پرتره‌های هدایت‌شده",
        "امکان حضور دو عکاس برای عروسی‌های بزرگ‌تر",
        "گالری ویرایش‌شده و رنگ‌بندی حرفه‌ای",
        "گالری آنلاین خصوصی برای اشتراک‌گذاری و دانلود",
      ],
      tr: [
        "Tam gün veya çok günlü çekim",
        "Belgesel anlar + yönlendirilmiş portreler",
        "Büyük düğünler için iki fotoğrafçı seçeneği",
        "Profesyonel düzenlenmiş, renk düzeltmeli galeri",
        "Paylaşım ve indirme için özel online galeri",
      ],
    },
    image: "/images/services/service-wedding-photography.jpg",
    imageAlt: {
      en: "Bride and groom on a Bosphorus waterfront at golden hour in Istanbul",
      fa: "عروس و داماد در ساعت طلایی در کنار بسفر استانبول",
      tr: "İstanbul Boğazı kıyısında gün batımında gelin ve damat",
    },
    whatsappMessage: {
      en: "Hi! I'd love to ask about wedding photography packages and availability.",
      fa: "سلام! می‌خواستم درباره پکیج‌های عکاسی عروسی و زمان‌های خالی بپرسم.",
      tr: "Merhaba! Düğün fotoğrafçılığı paketleri ve uygunluk hakkında bilgi almak istiyorum.",
    },
  },
  {
    id: "wedding-film",
    slug: "wedding-film",
    title: { en: "Wedding Film", fa: "فیلم عروسی", tr: "Düğün Filmi" },
    intro: {
      en: "Cinematic films that move the way your day did — built from real sound, real moments, and a story arc instead of a highlight reel.",
      fa: "فیلم‌هایی سینمایی که همان‌طور حرکت می‌کنند که روز شما حرکت کرد — ساخته‌شده از صدای واقعی، لحظات واقعی و یک روایت کامل، نه فقط یک های‌لایت کوتاه.",
      tr: "Gününüzün hissettirdiği gibi akan sinematik filmler — gerçek sesler, gerçek anlar ve kısa bir özet değil, baştan sona bir hikaye.",
    },
    features: {
      en: [
        "Cinematic short film (4–8 minutes)",
        "Optional extended documentary cut",
        "Natural sound and on-location audio",
        "Drone footage where permitted",
        "Color-graded, broadcast-quality delivery",
      ],
      fa: [
        "فیلم کوتاه سینمایی (۴ تا ۸ دقیقه)",
        "نسخه مستند بلندتر به‌صورت اختیاری",
        "صدابرداری طبیعی و محیطی",
        "فیلم‌برداری هوایی در صورت امکان و اجازه",
        "تحویل با رنگ‌بندی حرفه‌ای و کیفیت بالا",
      ],
      tr: [
        "Sinematik kısa film (4-8 dakika)",
        "İsteğe bağlı uzun belgesel kurgu",
        "Doğal ses ve mekan kaydı",
        "İzin verilen yerlerde drone çekimi",
        "Renk düzeltmeli, yayın kalitesinde teslimat",
      ],
    },
    image: "/images/services/service-wedding-film.png",
    imageAlt: {
      en: "Wedding couple filmed near Sultanahmet's historic skyline in Istanbul",
      fa: "فیلم‌برداری از زوج عروسی نزدیک خط آسمان تاریخی سلطان‌احمد در استانبول",
      tr: "İstanbul Sultanahmet'in tarihi silüetinde filme çekilen düğün çifti",
    },
    whatsappMessage: {
      en: "Hi! I'd love to ask about wedding film packages and availability.",
      fa: "سلام! می‌خواستم درباره پکیج‌های فیلم عروسی و زمان‌های خالی بپرسم.",
      tr: "Merhaba! Düğün filmi paketleri ve uygunluk hakkında bilgi almak istiyorum.",
    },
  },
  {
    id: "pre-wedding-formality",
    slug: "pre-wedding-formality",
    title: {
      en: "Pre-Wedding / Formality Shoots",
      fa: "عکاسی پیش‌عروسی / فرمالیته",
      tr: "Pre-Wedding / Nişan Çekimi",
    },
    intro: {
      en: "A relaxed session before the wedding to capture your formality, engagement, or save-the-date images across Istanbul's most cinematic backdrops.",
      fa: "یک جلسه آرام پیش از عروسی، برای ثبت عکس‌های فرمالیته، نامزدی یا دعوت‌نامه، در زیباترین و سینمایی‌ترین نقاط استانبول.",
      tr: "Düğünden önce, İstanbul'un en sinematik dokularında nişan, davetiye veya save-the-date kareleriniz için sakin bir çekim.",
    },
    features: {
      en: [
        "Half-day session, 2–3 locations",
        "Wardrobe and location guidance",
        "Golden-hour scheduling for soft light",
        "Edited gallery within 7–10 days",
        "Ideal for invitations & save-the-dates",
      ],
      fa: [
        "جلسه نیم‌روزه در ۲ تا ۳ لوکیشن",
        "راهنمایی برای انتخاب لباس و لوکیشن",
        "زمان‌بندی در ساعات طلایی برای نوری ملایم",
        "تحویل گالری ویرایش‌شده در ۷ تا ۱۰ روز",
        "مناسب برای کارت دعوت و سیومیت‌دیت",
      ],
      tr: [
        "2-3 lokasyonda yarım gün çekim",
        "Kıyafet ve lokasyon yönlendirmesi",
        "Yumuşak ışık için gün batımı planlaması",
        "7-10 gün içinde düzenlenmiş galeri teslimi",
        "Davetiye ve save-the-date için ideal",
      ],
    },
    image: "/images/gallery/gallery-balat-pre-wedding-1.svg",
    imageAlt: {
      en: "Couple in formal attire among the colorful houses of Balat, Istanbul",
      fa: "زوجی با لباس فرمال در میان خانه‌های رنگی بالات استانبول",
      tr: "İstanbul Balat'ın renkli evleri arasında resmi kıyafetli çift",
    },
    whatsappMessage: {
      en: "Hi! I'd love to ask about a pre-wedding / formality shoot in Istanbul.",
      fa: "سلام! می‌خواستم درباره یک جلسه عکاسی پیش‌عروسی یا فرمالیته در استانبول بپرسم.",
      tr: "Merhaba! İstanbul'da bir pre-wedding / nişan çekimi hakkında bilgi almak istiyorum.",
    },
  },
  {
    id: "couple-sessions",
    slug: "couple-sessions",
    title: {
      en: "Couple Sessions in Istanbul",
      fa: "جلسه عکاسی کاپل در استانبول",
      tr: "İstanbul'da Çift Çekimi",
    },
    intro: {
      en: "No wedding required — a story-driven session for couples who want timeless portraits of this city and each other, on their own timeline.",
      fa: "بدون نیاز به عروسی — یک جلسه روایت‌محور برای زوج‌هایی که می‌خواهند پرتره‌هایی ماندگار از این شهر و از یکدیگر داشته باشند، در زمانی که خودشان انتخاب می‌کنند.",
      tr: "Düğün şartı yok — şehri ve birbirinizi zamansız bir şekilde ölümsüzleştirmek isteyen çiftler için, kendi zamanlamanızda, hikaye odaklı bir çekim.",
    },
    features: {
      en: [
        "1–2 hour or half-day sessions",
        "Flexible for anniversaries, proposals or travel",
        "Choice of Bosphorus, old-city or rooftop settings",
        "Quick-turnaround preview gallery",
      ],
      fa: [
        "جلسات ۱ تا ۲ ساعته یا نیم‌روزه",
        "مناسب برای سالگرد، پیشنهاد ازدواج یا سفر",
        "انتخاب از میان بسفر، شهر قدیمی یا روفتاپ",
        "گالری پیش‌نمایش با تحویل سریع",
      ],
      tr: [
        "1-2 saatlik veya yarım gün çekimler",
        "Yıldönümü, evlilik teklifi veya seyahatler için uygun",
        "Boğaz, tarihi yarımada veya çatı katı seçenekleri",
        "Hızlı teslim ön izleme galerisi",
      ],
    },
    image: "/images/gallery/gallery-galata-couple-1.svg",
    imageAlt: {
      en: "Couple walking near Galata Tower during a couple session in Istanbul",
      fa: "زوجی در حال قدم‌زدن نزدیک برج گالاتا در یک جلسه عکاسی کاپل در استانبول",
      tr: "İstanbul'da çift çekimi sırasında Galata Kulesi yakınında yürüyen çift",
    },
    whatsappMessage: {
      en: "Hi! I'd love to ask about booking a couple session in Istanbul.",
      fa: "سلام! می‌خواستم درباره رزرو یک جلسه عکاسی کاپل در استانبول بپرسم.",
      tr: "Merhaba! İstanbul'da bir çift çekimi rezervasyonu hakkında bilgi almak istiyorum.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
