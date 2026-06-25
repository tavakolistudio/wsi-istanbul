import type { CrowdLevel, LocalizedText } from "./types";

/**
 * Content for the "Plan Your Shoot" wizard, ported from the Tavakoli Studio
 * planner (tavakolistudio.com/planner) and restyled to ISO Wedding's light
 * editorial palette. See components/planner/* for the UI.
 */

export type ProjectTypeId =
  | "wedding"
  | "couple"
  | "tourist"
  | "commercial"
  | "restaurant"
  | "real-estate"
  | "ai-advertising";

export type VisualStyleId =
  | "cinematic"
  | "luxury"
  | "romantic"
  | "editorial"
  | "documentary"
  | "minimal"
  | "social-media"
  | "drone";

export interface ProjectTypeOption {
  id: ProjectTypeId;
  icon: string;
  label: LocalizedText;
  description: LocalizedText;
}

export const projectTypeOptions: ProjectTypeOption[] = [
  {
    id: "wedding",
    icon: "💍",
    label: { en: "Wedding", fa: "عروسی", tr: "Düğün" },
    description: {
      en: "Full-day wedding photography & cinematic film",
      fa: "عکاسی و فیلم سینمایی عروسی، تمام روز",
      tr: "Tam gün düğün fotoğrafçılığı & sinematik film",
    },
  },
  {
    id: "couple",
    icon: "❤️",
    label: { en: "Engagement / Couple", fa: "نامزدی / زوج", tr: "Çift / Nişan" },
    description: {
      en: "Romantic couple & engagement sessions",
      fa: "جلسات رمانتیک کاپل و نامزدی",
      tr: "Romantik çift ve nişan çekimleri",
    },
  },
  {
    id: "tourist",
    icon: "📸",
    label: { en: "Tourist Photoshoot", fa: "عکاسی گردشگری", tr: "Turist Çekimi" },
    description: {
      en: "Premium Istanbul photography experience",
      fa: "تجربه عکاسی پریمیوم در استانبول",
      tr: "Premium İstanbul fotoğrafçılık deneyimi",
    },
  },
  {
    id: "commercial",
    icon: "🏢",
    label: { en: "Commercial Brand Shoot", fa: "عکاسی تجاری برند", tr: "Ticari Marka Çekimi" },
    description: {
      en: "Professional content for brands & businesses",
      fa: "محتوای حرفه‌ای برای برندها و کسب‌وکارها",
      tr: "Markalar ve işletmeler için profesyonel içerik",
    },
  },
  {
    id: "restaurant",
    icon: "🍽️",
    label: { en: "Restaurant / Business", fa: "رستوران / کسب‌وکار", tr: "Restoran / İşletme" },
    description: {
      en: "Food, interior and brand content",
      fa: "محتوای غذا، فضای داخلی و برند",
      tr: "Yemek, mekan ve marka içeriği",
    },
  },
  {
    id: "real-estate",
    icon: "🏡",
    label: { en: "Real Estate Video", fa: "ویدیوی املاک", tr: "Gayrimenkul Videosu" },
    description: {
      en: "Aerial & cinematic property showcase",
      fa: "نمایش هوایی و سینمایی ملک",
      tr: "Havadan ve sinematik mülk tanıtımı",
    },
  },
  {
    id: "ai-advertising",
    icon: "✨",
    label: { en: "AI Visual Advertising", fa: "تبلیغات تصویری هوش مصنوعی", tr: "Yapay Zeka Görsel Reklamcılık" },
    description: {
      en: "AI-powered campaign visuals & CGI content",
      fa: "ویژوال‌های کمپین مبتنی بر هوش مصنوعی و محتوای CGI",
      tr: "Yapay zeka destekli kampanya görselleri & CGI içeriği",
    },
  },
];

export interface StyleOption {
  id: VisualStyleId;
  label: LocalizedText;
  description: LocalizedText;
}

export const styleOptions: StyleOption[] = [
  {
    id: "cinematic",
    label: { en: "Cinematic", fa: "سینماتیک", tr: "Sinematik" },
    description: {
      en: "Film-grade color grading, dramatic light",
      fa: "رنگ‌بندی در سطح سینما، نور دراماتیک",
      tr: "Sinema kalitesinde renk düzenleme, dramatik ışık",
    },
  },
  {
    id: "luxury",
    label: { en: "Luxury", fa: "لاکچری", tr: "Lüks" },
    description: {
      en: "Rich tones, editorial elegance, premium finish",
      fa: "رنگ‌های غنی، ظرافت ادیتوریال، فینیش پریمیوم",
      tr: "Zengin tonlar, editoryal zarafet, premium görünüm",
    },
  },
  {
    id: "romantic",
    label: { en: "Romantic", fa: "رمانتیک", tr: "Romantik" },
    description: {
      en: "Soft light, warm tones, emotional storytelling",
      fa: "نور ملایم، رنگ‌های گرم، روایت احساسی",
      tr: "Yumuşak ışık, sıcak tonlar, duygusal anlatım",
    },
  },
  {
    id: "editorial",
    label: { en: "Editorial", fa: "ادیتوریال", tr: "Editoryal" },
    description: {
      en: "Magazine-ready, fashion-forward, bold",
      fa: "آماده برای مجله، رو به جلو در فشن، جسورانه",
      tr: "Dergiye hazır, modaya öncü, cesur",
    },
  },
  {
    id: "documentary",
    label: { en: "Documentary", fa: "مستند", tr: "Belgesel" },
    description: {
      en: "Natural, candid, storytelling-first",
      fa: "طبیعی، خودجوش، روایت‌محور",
      tr: "Doğal, samimi, hikaye odaklı",
    },
  },
  {
    id: "minimal",
    label: { en: "Minimal", fa: "مینیمال", tr: "Minimal" },
    description: {
      en: "Clean, simple, let the subject shine",
      fa: "ساده و تمیز، درخشش با خود سوژه است",
      tr: "Sade, temiz, öne çıkan konu",
    },
  },
  {
    id: "social-media",
    label: { en: "Social Media Reels", fa: "ریلز شبکه اجتماعی", tr: "Sosyal Medya Reels" },
    description: {
      en: "Vertical, engaging, platform-ready",
      fa: "عمودی، جذاب، آماده برای پلتفرم",
      tr: "Dikey, etkileyici, platforma hazır",
    },
  },
  {
    id: "drone",
    label: { en: "Drone / Aerial", fa: "هوایی / درون", tr: "Drone / Hava" },
    description: {
      en: "Sweeping aerial views, cinematic scale",
      fa: "نماهای هوایی گسترده، مقیاس سینمایی",
      tr: "Geniş hava manzaraları, sinematik ölçek",
    },
  },
];

/** Longer outfit-direction advice per style, shown in the Outfit Advisor step. */
export const styleOutfitAdvice: Record<VisualStyleId, LocalizedText> = {
  cinematic: {
    en: "Aim for timeless, structured pieces. Think film noir — dark coats, neutral tones, elegant silhouettes.",
    fa: "به سراغ قطعاتی بی‌زمان و ساختاریافته بروید. به سبک نوار فیلم فکر کنید — کت‌های تیره، رنگ‌های خنثی، سیلوئت‌های زیبا.",
    tr: "Zamansız, yapılandırılmış parçalar hedefleyin. Film noir — koyu paltolar, nötr tonlar, zarif silüetler.",
  },
  luxury: {
    en: "Full luxury styling. Evening gowns, tailored suits, statement accessories. Every detail counts.",
    fa: "استایل لوکس کامل. لباس‌های شب، کت‌وشلوار دوخته‌شده، اکسسوری‌های چشم‌گیر. هر جزئیاتی مهم است.",
    tr: "Tam lüks stil. Gece elbiseleri, dikişli takım elbiseler, dikkat çekici aksesuarlar. Her detay önemli.",
  },
  romantic: {
    en: "Flowy fabrics, soft pastels, lace details. Think dreamlike and ethereal.",
    fa: "پارچه‌های روان، رنگ‌های پاستل ملایم، جزئیات توری. رویایی و اثیری فکر کنید.",
    tr: "Akan kumaşlar, yumuşak pasteller, dantel detaylar. Rüya gibi ve eterik düşünün.",
  },
  editorial: {
    en: "Bold choices. Strong silhouettes, high-fashion pieces, unexpected combinations.",
    fa: "انتخاب‌های جسورانه. سیلوئت‌های قوی، قطعات مد روز، ترکیب‌های غیرمنتظره.",
    tr: "Cesur seçimler. Güçlü silüetler, yüksek moda parçalar, beklenmedik kombinasyonlar.",
  },
  documentary: {
    en: "Look like yourself, just polished. Natural, authentic — avoid costume-like outfits.",
    fa: "مثل خودتان باشید، فقط مرتب‌تر. طبیعی و اصیل — از لباس‌های تئاتری بپرهیزید.",
    tr: "Kendiniz gibi görünün, sadece daha bakımlı. Doğal, özgün — kostüm gibi kıyafetlerden kaçının.",
  },
  minimal: {
    en: "Clean lines, solid colors, premium basics. The less, the better.",
    fa: "خطوط تمیز، رنگ‌های یکدست، پایه‌های ممتاز. کمتر، بهتر.",
    tr: "Temiz çizgiler, düz renkler, premium temel parçalar. Ne kadar az, o kadar iyi.",
  },
  "social-media": {
    en: "Bright, eye-catching, Instagram-ready. Think trendy but tasteful.",
    fa: "روشن، چشم‌گیر، آماده برای اینستاگرام. ترندی اما زیبا فکر کنید.",
    tr: "Parlak, çekici, Instagram'a hazır. Trend ama zevkli düşünün.",
  },
  drone: {
    en: "Colors that stand out from above — avoid blending into the environment.",
    fa: "رنگ‌هایی که از بالا برجسته می‌شوند — از ترکیب با محیط اجتناب کنید.",
    tr: "Yukarıdan öne çıkan renkler — çevreyle karışmaktan kaçının.",
  },
};

export interface BudgetItemOption {
  id: string;
  label: LocalizedText;
  priceRange: [number, number];
}

export const budgetItemOptions: BudgetItemOption[] = [
  {
    id: "photography",
    label: { en: "Photography Session", fa: "جلسه عکاسی", tr: "Fotoğraf Çekimi" },
    priceRange: [300, 600],
  },
  {
    id: "video",
    label: { en: "Cinematic Video", fa: "ویدیوی سینمایی", tr: "Sinematik Video" },
    priceRange: [400, 900],
  },
  {
    id: "drone",
    label: { en: "Drone / Aerial Footage", fa: "تصاویر هوایی / درون", tr: "Drone / Hava Görüntüsü" },
    priceRange: [200, 450],
  },
  {
    id: "reels",
    label: { en: "Social Media Reels", fa: "ریلز شبکه اجتماعی", tr: "Sosyal Medya Reels" },
    priceRange: [150, 300],
  },
  {
    id: "teaser",
    label: { en: "Same-Day Teaser Edit", fa: "تیزر همان‌روز", tr: "Aynı Gün Teaser Kurgu" },
    priceRange: [100, 200],
  },
  {
    id: "ai-preview",
    label: { en: "AI Visual Preview", fa: "پیش‌نمایش تصویری هوش مصنوعی", tr: "Yapay Zeka Görsel Önizleme" },
    priceRange: [50, 150],
  },
  {
    id: "extra-location",
    label: { en: "Extra Location (+1)", fa: "لوکیشن اضافه (+۱)", tr: "Ekstra Konum (+1)" },
    priceRange: [100, 200],
  },
  {
    id: "extra-hour",
    label: { en: "Extra Hour", fa: "ساعت اضافه", tr: "Ekstra Saat" },
    priceRange: [80, 150],
  },
];

export const crowdLabels: Record<CrowdLevel, LocalizedText> = {
  low: { en: "low crowd", fa: "شلوغی کم", tr: "az kalabalık" },
  medium: { en: "medium crowd", fa: "شلوغی متوسط", tr: "orta kalabalık" },
  high: { en: "high crowd", fa: "شلوغی زیاد", tr: "çok kalabalık" },
};

export const plannerCopy = {
  heroEyebrow: { en: "Plan Your Shoot", fa: "برنامه‌ریزی عکاسی", tr: "Çekim Planla" },
  heroTitle: {
    en: "Plan Your Cinematic Photoshoot in Istanbul",
    fa: "عکاسی سینماتیک خود را در استانبول برنامه‌ریزی کنید",
    tr: "İstanbul'da Sinematik Fotoğraf Çekiminizi Planlayın",
  },
  heroSubtitle: {
    en: "Choose your project, location, style and budget — then book a premium photography or film session with ISO Wedding.",
    fa: "پروژه، لوکیشن، سبک و بودجه خود را انتخاب کنید — سپس یک جلسه عکاسی یا فیلم‌برداری پریمیوم با ISO Wedding رزرو کنید.",
    tr: "Projenizi, konumunuzu, stilinizi ve bütçenizi seçin — ardından ISO Wedding ile premium bir fotoğraf veya film çekimi rezervasyonu yapın.",
  },
  stepLabels: {
    project: { en: "Project", fa: "پروژه", tr: "Proje" },
    location: { en: "Location", fa: "لوکیشن", tr: "Konum" },
    style: { en: "Style", fa: "سبک", tr: "Stil" },
    outfit: { en: "Outfit", fa: "لباس", tr: "Kıyafet" },
    budget: { en: "Budget", fa: "بودجه", tr: "Bütçe" },
  },
  stepOfFive: [
    { en: "Step 1 of 5", fa: "مرحله ۱ از ۵", tr: "Adım 1 / 5" },
    { en: "Step 2 of 5", fa: "مرحله ۲ از ۵", tr: "Adım 2 / 5" },
    { en: "Step 3 of 5", fa: "مرحله ۳ از ۵", tr: "Adım 3 / 5" },
    { en: "Step 4 of 5", fa: "مرحله ۴ از ۵", tr: "Adım 4 / 5" },
    { en: "Step 5 of 5", fa: "مرحله ۵ از ۵", tr: "Adım 5 / 5" },
  ] as LocalizedText[],
  back: { en: "Back", fa: "بازگشت", tr: "Geri" },
  next: { en: "Next", fa: "بعدی", tr: "İleri" },
  seePlan: { en: "See My Plan", fa: "مشاهده برنامه‌ام", tr: "Planımı Gör" },
  selected: { en: "Selected", fa: "انتخاب شد", tr: "Seçildi" },
  done: {
    title: { en: "Your plan is ready.", fa: "برنامه شما آماده است.", tr: "Planınız hazır." },
    bookWa: { en: "Book on WhatsApp", fa: "رزرو از واتساپ", tr: "WhatsApp ile Rezervasyon" },
    bookForm: { en: "Fill Booking Form", fa: "تکمیل فرم رزرو", tr: "Rezervasyon Formunu Doldur" },
    restart: { en: "Start Over", fa: "شروع مجدد", tr: "Yeniden Başla" },
  },
  step1: {
    title: { en: "What are we creating?", fa: "چه چیزی می‌سازیم؟", tr: "Ne yaratıyoruz?" },
    sub: {
      en: "Choose your project type to begin.",
      fa: "نوع پروژه خود را انتخاب کنید.",
      tr: "Proje türünüzü seçerek başlayın.",
    },
  },
  step2: {
    title: { en: "Choose your location", fa: "لوکیشن خود را انتخاب کنید", tr: "Konumunuzu seçin" },
    sub: {
      en: "Each location has a different mood, light and character.",
      fa: "هر لوکیشن سبک، نور و ویژگی متفاوتی دارد.",
      tr: "Her konumun farklı bir atmosferi, ışığı ve karakteri var.",
    },
  },
  step3: {
    title: {
      en: "What visual style speaks to you?",
      fa: "چه سبک بصری‌ای برای شما مناسب است؟",
      tr: "Hangi görsel stil size uygun?",
    },
    sub: {
      en: "This guides the lighting, editing and direction of your shoot.",
      fa: "این سبک نورپردازی، ویرایش و جهت عکاسی را تعیین می‌کند.",
      tr: "Bu, çekimin aydınlatmasına, düzenlemesine ve yönüne rehberlik eder.",
    },
  },
  step4: {
    title: { en: "Outfit Advisor", fa: "راهنمای لباس", tr: "Kıyafet Danışmanı" },
    sub: {
      en: "Personalized recommendations based on your location and style.",
      fa: "توصیه‌های شخصی بر اساس لوکیشن و سبک شما.",
      tr: "Konumunuza ve stilinize göre kişiselleştirilmiş öneriler.",
    },
    colorRec: { en: "Color Recommendation", fa: "توصیه رنگ", tr: "Renk Önerisi" },
    styleDir: { en: "Style Direction", fa: "راهنمای سبک", tr: "Stil Yönü" },
    avoidHeading: { en: "Avoid These", fa: "از این‌ها اجتناب کنید", tr: "Bunlardan Kaçının" },
    coupleHeading: { en: "Couple Coordination", fa: "هماهنگی زوج", tr: "Çift Koordinasyonu" },
    accessoriesHeading: { en: "Accessories", fa: "اکسسوری", tr: "Aksesuar" },
    avoidList: [
      {
        en: "Matching outfits that make you look like twins",
        fa: "لباس‌های یکسان که شما را مثل دوقلو نشان می‌دهند",
        tr: "Sizi ikiz gibi gösteren aynı kıyafetler",
      },
      {
        en: "Logos or graphic tees",
        fa: "لوگو یا تی‌شرت گرافیکی",
        tr: "Logo veya grafik tişörtler",
      },
      {
        en: "Overly bright neon colors",
        fa: "رنگ‌های نئون بیش از حد روشن",
        tr: "Aşırı parlak neon renkler",
      },
      {
        en: "Very short skirts in windy outdoor locations",
        fa: "دامن‌های خیلی کوتاه در مکان‌های بادی",
        tr: "Rüzgarlı açık mekanlarda çok kısa etekler",
      },
      {
        en: "All-black couple outfits in dark settings",
        fa: "لباس‌های زوجی تمام مشکی در محیط‌های تاریک",
        tr: "Karanlık ortamlarda tamamen siyah çift kıyafetleri",
      },
    ] as LocalizedText[],
    coupleList: [
      {
        en: "Coordinate colors, but don't match exactly",
        fa: "رنگ‌ها را هماهنگ کنید، اما دقیقاً یکسان نباشند",
        tr: "Renkleri koordine edin ama tam olarak aynı olmayın",
      },
      {
        en: "One person can wear a pattern if the other is solid",
        fa: "یک نفر می‌تواند طرح‌دار بپوشد اگر دیگری ساده باشد",
        tr: "Biri düz giyiniyorsa diğeri desen giyebilir",
      },
      {
        en: "Consider your location's backdrop colors",
        fa: "رنگ‌های پس‌زمینه لوکیشن را در نظر بگیرید",
        tr: "Konumun arka plan renklerini göz önünde bulundurun",
      },
      {
        en: "Comfort matters — if it's uncomfortable, it shows",
        fa: "راحتی اهمیت دارد — اگر ناراحت باشید، توی تصویر مشخص می‌شود",
        tr: "Konfor önemlidir — rahatsızsa, fotoğrafa yansır",
      },
    ] as LocalizedText[],
    accessoriesList: [
      {
        en: "Delicate gold jewelry reflects beautifully on camera",
        fa: "جواهرات طلای ظریف در دوربین به زیبایی می‌درخشد",
        tr: "İnce altın takılar kamerada güzel yansır",
      },
      {
        en: "Scarves / shawls add movement and elegance",
        fa: "روسری‌ها/شال‌ها حرکت و ظرافت می‌افزایند",
        tr: "Eşarplar/şallar hareket ve zarafet katar",
      },
      {
        en: "Hats work for casual and editorial styles",
        fa: "کلاه‌ها برای سبک‌های کژوال و ادیتوریال مناسب هستند",
        tr: "Şapkalar casual ve editorial stiller için çalışır",
      },
      {
        en: "Keep it minimal — less is more on camera",
        fa: "کمینه نگه دارید — جلوی دوربین کمتر بهتر است",
        tr: "Minimalist tutun — kamerada az daha iyidir",
      },
    ] as LocalizedText[],
  },
  step5: {
    title: { en: "Build your budget", fa: "بودجه خود را بسازید", tr: "Bütçenizi oluşturun" },
    sub: {
      en: "Select the services you're interested in. We'll show you an estimated range.",
      fa: "خدمات مورد نظر خود را انتخاب کنید. یک محدوده تخمینی نمایش داده می‌شود.",
      tr: "İlgilendiğiniz hizmetleri seçin. Size tahmini bir aralık göstereceğiz.",
    },
    range: { en: "Estimated Budget Range", fa: "محدوده بودجه تخمینی", tr: "Tahmini Bütçe Aralığı" },
    note: {
      en: "Final price depends on date, location, production needs and availability. This is an estimate to help you plan.",
      fa: "قیمت نهایی به تاریخ، لوکیشن، نیازهای تولید و دسترسی بستگی دارد. این یک تخمین برای کمک به برنامه‌ریزی شماست.",
      tr: "Son fiyat, tarihe, konuma, prodüksiyon ihtiyaçlarına ve uygunluğa bağlıdır. Bu, planlamanıza yardımcı olmak için bir tahmindir.",
    },
    empty: {
      en: "Select services above to see your estimated budget range.",
      fa: "برای مشاهده محدوده بودجه، خدمات بالا را انتخاب کنید.",
      tr: "Tahmini bütçe aralığınızı görmek için yukarıdaki hizmetleri seçin.",
    },
  },
  customLocation: {
    title: { en: "Custom Location", fa: "لوکیشن اختصاصی", tr: "Özel Konum" },
    description: {
      en: "Have a specific location in mind? We can scout and plan any location across Istanbul for your session.",
      fa: "لوکیشن خاصی در ذهن دارید؟ ما می‌توانیم هر مکانی در سراسر استانبول را برای جلسه شما بررسی و برنامه‌ریزی کنیم.",
      tr: "Aklınızda belirli bir yer mi var? Oturumunuz için İstanbul genelinde herhangi bir yeri keşfedip planlayabiliriz.",
    },
    outfitSuggestion: {
      en: "We'll advise after location scouting.",
      fa: "پس از بررسی لوکیشن، راهنمایی می‌کنیم.",
      tr: "Konum keşfinden sonra önereceğiz.",
    },
    estimatedDuration: { en: "Flexible", fa: "متغیر", tr: "Esnek" },
    bestTime: { en: "Depends on location", fa: "بسته به لوکیشن", tr: "Konuma bağlı" },
  },
};
