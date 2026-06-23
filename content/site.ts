/**
 * Sitewide brand identity, contact details, founder bios, shared UI
 * strings, and per-page static copy. This is the first file to open when
 * updating text anywhere on the site — see README.md for the full guide.
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wsi-istanbul.vercel.app";

export const brand = {
  name: "Wedding Stories Istanbul",
  parentBrand: "Tavakoli Studio",
  logo: "/logo.png",
};

export const contact = {
  whatsappDisplay: "+90 501 696 77 77",
  /** Digits-only, used to build wa.me links. */
  whatsappDigits: "905016967777",
  instagramHandle: "@tavakolistudio",
  instagramUrl: "https://instagram.com/tavakolistudio",
  email: "tavakolipix@gmail.com",
};

export const founders = [
  {
    id: "mohammad",
    name: "Mohammad Tavakoli",
    role: {
      en: "Photographer & Filmmaker",
      fa: "عکاس و فیلم‌ساز",
      tr: "Fotoğrafçı & Film Yapımcısı",
    },
    bio: {
      en: "Mohammad is an Iranian photographer and filmmaker with more than 20 years of experience across photography, filmmaking and visual storytelling. Over two decades, his work has moved from journalistic image-making to the intimate, cinematic visual language that now defines Wedding Stories Istanbul. He approaches every wedding the way he would a film set — reading light, anticipating moments, and staying close enough to capture what's real without ever getting in the way of it.",
      fa: "محمد عکاس و فیلم‌ساز ایرانی با بیش از ۲۰ سال تجربه در عکاسی، فیلم‌سازی و روایت‌گری بصری است. در طول دو دهه، کار او از عکاسی خبری به سوی زبان بصری صمیمی و سینمایی‌ای حرکت کرده که امروز هویت Wedding Stories Istanbul را شکل می‌دهد. او به هر عروسی همان‌گونه نزدیک می‌شود که به یک پلاتوی فیلم‌برداری — نور را می‌خوانَد، لحظات را پیش‌بینی می‌کند و آن‌قدر نزدیک می‌ماند که واقعیت را ثبت کند، بدون آنکه هرگز مانع آن شود.",
      tr: "Mohammad, fotoğrafçılık, film yapımcılığı ve görsel hikaye anlatıcılığında 20 yılı aşkın deneyime sahip İranlı bir fotoğrafçı ve film yapımcısıdır. İki on yıl boyunca çalışmaları, gazetecilik tarzı görüntü üretiminden, bugün Wedding Stories Istanbul'u tanımlayan samimi ve sinematik görsel dile doğru evrildi. Her düğüne bir film setine yaklaştığı gibi yaklaşır — ışığı okur, anları önceden sezer ve gerçek olanı yakalayacak kadar yakın durup asla önüne geçmez.",
    },
    image: "/images/about/about-mohammad-tavakoli.svg",
  },
  {
    id: "mahtab",
    name: "Mahtab Bahrian",
    role: {
      en: "Creative Director & Writer",
      fa: "مدیر خلاق و نویسنده",
      tr: "Yaratıcı Direktör & Yazar",
    },
    bio: {
      en: "Mahtab is a creative director, writer and idea strategist with a strong narrative and artistic vision. She shapes the story behind every shoot long before a single frame is captured — from the mood and pacing of a wedding film to the words that accompany it. Her background in writing and ideation brings a layer of meaning to the studio's work that goes beyond the visual, turning each project into something closer to a short story than a photo set.",
      fa: "مهتاب مدیر خلاق، نویسنده و استراتژیست ایده با چشم‌اندازی روایی و هنری قوی است. او داستان پشت هر جلسه عکاسی را مدت‌ها پیش از ثبت اولین قاب شکل می‌دهد — از فضا و ریتم یک فیلم عروسی تا کلماتی که همراه آن می‌آیند. پیشینه او در نویسندگی و ایده‌پردازی، لایه‌ای از معنا به کار استودیو می‌افزاید که فراتر از تصویر است و هر پروژه را به چیزی نزدیک‌تر به یک داستان کوتاه تبدیل می‌کند تا یک ست عکاسی.",
      tr: "Mahtab, güçlü bir anlatı ve sanatsal vizyona sahip bir yaratıcı direktör, yazar ve fikir stratejistidir. Her çekimin ardındaki hikayeyi, ilk kare çekilmeden çok önce şekillendirir — bir düğün filminin atmosferinden ve temposundan, ona eşlik eden kelimelere kadar. Yazarlık ve fikir geliştirme geçmişi, stüdyonun çalışmalarına görselin ötesinde bir anlam katmanı ekler ve her projeyi bir fotoğraf setinden çok kısa bir hikayeye yaklaştırır.",
    },
    image: "/images/about/about-mahtab-bahrian.svg",
  },
];

/** Short, generic strings reused across multiple pages/components. */
export const ui = {
  viewGallery: { en: "View Gallery", fa: "مشاهده گالری", tr: "Galeriyi Görüntüle" },
  checkAvailability: {
    en: "Check Availability on WhatsApp",
    fa: "بررسی زمان‌های خالی در واتساپ",
    tr: "WhatsApp'tan Uygunluk Sorun",
  },
  sendMessage: { en: "Send a Message", fa: "ارسال پیام", tr: "Mesaj Gönderin" },
  learnMore: { en: "Learn More", fa: "بیشتر بدانید", tr: "Daha Fazla Bilgi" },
  readMore: { en: "Read More", fa: "ادامه مطلب", tr: "Devamını Oku" },
  bookOnWhatsapp: { en: "Book on WhatsApp", fa: "رزرو در واتساپ", tr: "WhatsApp'tan Rezervasyon" },
  backToHome: { en: "Back to Home", fa: "بازگشت به خانه", tr: "Ana Sayfaya Dön" },
  allLabel: { en: "All", fa: "همه", tr: "Tümü" },
};

export const pages = {
  home: {
    seo: {
      title: {
        en: "Wedding Photographer & Videographer in Istanbul | Wedding Stories Istanbul",
        fa: "عکاس و فیلم‌بردار عروسی در استانبول | Wedding Stories Istanbul",
        tr: "İstanbul'da Düğün Fotoğrafçısı & Videografı | Wedding Stories Istanbul",
      },
      description: {
        en: "Premium wedding photography, wedding films, pre-wedding and couple shoots in Istanbul. Cinematic storytelling by Wedding Stories Istanbul.",
        fa: "عکاسی، فیلم‌برداری عروسی، عکاسی پره‌وداد و جلسات کاپل پریمیوم در استانبول. روایت‌گری سینمایی توسط Wedding Stories Istanbul.",
        tr: "İstanbul'da premium düğün fotoğrafçılığı, düğün filmleri, pre-wedding ve çift çekimleri. Wedding Stories Istanbul'dan sinematik hikaye anlatımı.",
      },
    },
    hero: {
      eyebrow: {
        en: "Istanbul Wedding Photography & Film",
        fa: "عکاسی و فیلم‌برداری عروسی در استانبول",
        tr: "İstanbul'da Düğün Fotoğrafçılığı & Filmi",
      },
      headline: {
        en: "Your Wedding Story, Framed in Istanbul",
        fa: "داستان عروسی شما، در قاب استانبول",
        tr: "Düğün Hikayeniz, İstanbul'da Kareleniyor",
      },
      subtitle: {
        en: "Cinematic wedding photography and films for couples who want timeless memories in one of the world's most beautiful cities.",
        fa: "عکاسی و فیلم‌برداری سینمایی عروسی برای زوج‌هایی که می‌خواهند خاطره‌ای ماندگار از یکی از زیباترین شهرهای جهان داشته باشند.",
        tr: "Dünyanın en güzel şehirlerinden birinde zamansız anılar isteyen çiftler için sinematik düğün fotoğrafçılığı ve filmleri.",
      },
      ctaPrimary: { en: "View Gallery", fa: "مشاهده گالری", tr: "Galeriyi Görüntüle" },
      ctaSecondary: {
        en: "Check Availability on WhatsApp",
        fa: "بررسی زمان‌های خالی در واتساپ",
        tr: "WhatsApp'tan Uygunluk Sorun",
      },
    },
    galleryPreview: {
      eyebrow: { en: "Featured Work", fa: "نمونه کارها", tr: "Seçkin Çalışmalar" },
      heading: { en: "A Glimpse Into Our Stories", fa: "نگاهی به داستان‌های ما", tr: "Hikayelerimizden Bir Kesit" },
      subtitle: {
        en: "A small selection from real weddings, pre-wedding sessions and couple shoots across Istanbul.",
        fa: "گزیده‌ای کوچک از عروسی‌های واقعی، جلسات پره‌وداد و عکاسی‌های کاپل در سراسر استانبول.",
        tr: "İstanbul'un dört bir yanından gerçek düğünler, pre-wedding çekimleri ve çift fotoğraflarından küçük bir seçki.",
      },
      cta: { en: "View Full Gallery", fa: "مشاهده گالری کامل", tr: "Tüm Galeriyi Görüntüle" },
    },
    aboutPreview: {
      eyebrow: { en: "The Storytellers", fa: "راویان داستان", tr: "Hikaye Anlatıcıları" },
      heading: { en: "Mohammad & Mahtab", fa: "محمد و مهتاب", tr: "Mohammad & Mahtab" },
      body: {
        en: "A photographer and filmmaker with over 20 years behind the lens, and a creative director who shapes every story before it's ever photographed. Together, they run Wedding Stories Istanbul from the city they call home.",
        fa: "عکاس و فیلم‌سازی با بیش از ۲۰ سال تجربه پشت دوربین، در کنار مدیر خلاقی که پیش از ثبت هر قاب، داستان آن را شکل می‌دهد. آن‌ها این استودیو را از شهری که خانه‌شان می‌نامند، اداره می‌کنند.",
        tr: "Lensin ardında 20 yılı aşkın deneyime sahip bir fotoğrafçı ve film yapımcısı, ve her kare çekilmeden önce hikayeyi şekillendiren bir yaratıcı direktör. Wedding Stories Istanbul'u, ev dedikleri şehirden birlikte yönetiyorlar.",
      },
      cta: { en: "More About Us", fa: "بیشتر درباره ما", tr: "Hakkımızda Daha Fazla" },
    },
    servicesSection: {
      eyebrow: { en: "What We Offer", fa: "خدمات ما", tr: "Sunduklarımız" },
      heading: {
        en: "Wedding Photography & Film in Istanbul",
        fa: "عکاسی و فیلم عروسی در استانبول",
        tr: "İstanbul'da Düğün Fotoğrafçılığı & Filmi",
      },
      subtitle: {
        en: "Four ways to tell your story, each shaped around how you actually want to spend your day.",
        fa: "چهار شیوه برای روایت داستان شما، هرکدام متناسب با نحوه‌ای که واقعاً می‌خواهید روزتان را تجربه کنید.",
        tr: "Hikayenizi anlatmanın dört farklı yolu; her biri gününüzü gerçekten nasıl yaşamak istediğinize göre şekilleniyor.",
      },
    },
    whyChooseUs: {
      eyebrow: { en: "Why Couples Choose Us", fa: "چرا زوج‌ها ما را انتخاب می‌کنند", tr: "Çiftler Neden Bizi Seçiyor" },
      heading: { en: "Crafted With Intention", fa: "ساخته‌شده با نیت و دقت", tr: "Özenle Tasarlandı" },
      items: [
        {
          title: { en: "20+ Years of Storytelling", fa: "بیش از ۲۰ سال روایت‌گری بصری", tr: "20+ Yıllık Görsel Hikaye Anlatıcılığı" },
          body: {
            en: "Two decades behind the camera and behind the story, across photography and film.",
            fa: "دو دهه تجربه پشت دوربین و پشت داستان، در عکاسی و فیلم.",
            tr: "Hem kameranın hem de hikayenin ardında iki on yıllık deneyim, fotoğraf ve film boyunca.",
          },
        },
        {
          title: { en: "Photography & Film, One Vision", fa: "عکاسی و فیلم، با یک نگاه واحد", tr: "Fotoğraf ve Film, Tek Bir Vizyon" },
          body: {
            en: "A unified cinematic approach, so your stills and your film feel like they belong together.",
            fa: "رویکردی یکپارچه و سینمایی، تا عکس‌ها و فیلم شما حس کنند که به یک دنیا تعلق دارند.",
            tr: "Bütünlüklü sinematik bir yaklaşım; fotoğraflarınız ve filminiz birbirine ait hissettirir.",
          },
        },
        {
          title: { en: "Farsi, Turkish & English", fa: "فارسی، ترکی و انگلیسی", tr: "Farsça, Türkçe & İngilizce" },
          body: {
            en: "Effortless communication for couples from Iran, Turkey, or anywhere else in the world.",
            fa: "ارتباطی ساده و بی‌دردسر برای زوج‌هایی از ایران، ترکیه یا هر نقطه دیگری از جهان.",
            tr: "İran'dan, Türkiye'den veya dünyanın herhangi bir yerinden çiftler için zahmetsiz iletişim.",
          },
        },
        {
          title: { en: "Istanbul, Truly Known", fa: "شناختی واقعی از استانبول", tr: "İstanbul'u Gerçekten Tanımak" },
          body: {
            en: "Locations chosen for light and meaning, not just for looking good in a feed.",
            fa: "لوکیشن‌هایی که برای نور و معنا انتخاب شده‌اند، نه فقط برای زیبایی در یک پست اینستاگرام.",
            tr: "Sadece güzel görünmek için değil, ışık ve anlam için seçilmiş lokasyonlar.",
          },
        },
        {
          title: { en: "Personal, Not Templated", fa: "شخصی، نه کلیشه‌ای", tr: "Şablona Değil, Kişiye Özel" },
          body: {
            en: "Every shoot is shaped around the couple living it — never a copy-paste package.",
            fa: "هر جلسه عکاسی متناسب با همان زوجی که آن را زندگی می‌کند شکل می‌گیرد — هیچ پکیج کپی‌شده‌ای وجود ندارد.",
            tr: "Her çekim, onu yaşayan çifte göre şekillenir — kopyala-yapıştır bir paket asla.",
          },
        },
        {
          title: { en: "Easy for Travelling Couples", fa: "آسان برای زوج‌های مسافر", tr: "Seyahat Eden Çiftler İçin Kolaylık" },
          body: {
            en: "Clear planning and scheduling support for couples arriving from abroad.",
            fa: "برنامه‌ریزی شفاف و پشتیبانی زمان‌بندی برای زوج‌هایی که از خارج از کشور سفر می‌کنند.",
            tr: "Yurt dışından gelen çiftler için açık planlama ve zamanlama desteği.",
          },
        },
      ],
    },
    locationsPreview: {
      eyebrow: { en: "Set the Scene", fa: "صحنه را بچینید", tr: "Sahneyi Hazırlayın" },
      heading: { en: "Istanbul as Your Backdrop", fa: "استانبول، پس‌زمینه داستان شما", tr: "Arka Planınız: İstanbul" },
      subtitle: {
        en: "From Bosphorus shorelines to centuries-old streets — explore the city's most cinematic corners.",
        fa: "از سواحل بسفر تا کوچه‌های قرن‌ها قدیمی — سینمایی‌ترین گوشه‌های شهر را کشف کنید.",
        tr: "Boğaz kıyılarından yüzyıllık sokaklara — şehrin en sinematik köşelerini keşfedin.",
      },
      cta: { en: "Explore All Locations", fa: "مشاهده همه لوکیشن‌ها", tr: "Tüm Lokasyonları Keşfedin" },
    },
    testimonials: {
      eyebrow: { en: "Kind Words", fa: "نظرات عزیزان ما", tr: "Güzel Sözler" },
      heading: { en: "Stories, As Told By Our Couples", fa: "داستان‌ها، به روایت زوج‌های ما", tr: "Çiftlerimizin Anlatımıyla Hikayeler" },
    },
    finalCta: {
      heading: { en: "Let's Tell Your Story", fa: "بیایید داستان شما را روایت کنیم", tr: "Hikayenizi Anlatalım" },
      subtitle: {
        en: "Dates fill quickly in peak season — reach out and let's talk about your day.",
        fa: "در فصل اوج، تاریخ‌ها سریع پر می‌شوند — همین حالا تماس بگیرید تا درباره روزتان گفت‌وگو کنیم.",
        tr: "Yoğun sezonda tarihler hızla doluyor — bize ulaşın, gününüzü konuşalım.",
      },
      ctaPrimary: {
        en: "Check Availability on WhatsApp",
        fa: "بررسی زمان‌های خالی در واتساپ",
        tr: "WhatsApp'tan Uygunluk Sorun",
      },
      ctaSecondary: { en: "Send a Message", fa: "ارسال پیام", tr: "Mesaj Gönderin" },
    },
  },
  about: {
    seo: {
      title: {
        en: "About Mohammad & Mahtab | Wedding Stories Istanbul",
        fa: "درباره محمد و مهتاب | Wedding Stories Istanbul",
        tr: "Mohammad & Mahtab Hakkında | Wedding Stories Istanbul",
      },
      description: {
        en: "Meet the photographer, filmmaker and creative director behind Wedding Stories Istanbul — a Tavakoli Studio brand based in Istanbul.",
        fa: "با عکاس، فیلم‌ساز و مدیر خلاقی پشت Wedding Stories Istanbul آشنا شوید — برندی از Tavakoli Studio، مستقر در استانبول.",
        tr: "Wedding Stories Istanbul'un arkasındaki fotoğrafçı, film yapımcısı ve yaratıcı direktörle tanışın — İstanbul merkezli bir Tavakoli Studio markası.",
      },
    },
    hero: {
      eyebrow: { en: "Our Story", fa: "داستان ما", tr: "Hikayemiz" },
      heading: { en: "The People Behind Your Story", fa: "افرادی که پشت داستان شما هستند", tr: "Hikayenizin Arkasındaki İsimler" },
      subtitle: {
        en: "Two storytellers, one shared obsession with how light, place and emotion come together.",
        fa: "دو روایت‌گر، با یک دلبستگی مشترک به نحوه‌ی در هم تنیدن نور، مکان و احساس.",
        tr: "Işığın, mekanın ve duygunun nasıl bir araya geldiğine dair ortak bir tutkuya sahip iki hikaye anlatıcısı.",
      },
    },
    philosophy: {
      heading: { en: "Our Philosophy", fa: "فلسفه ما", tr: "Felsefemiz" },
      body: {
        en: "We believe a wedding film or photograph should feel like a memory, not a performance. Our approach is documentary at heart and cinematic in execution — we observe closely, direct gently, and let the story lead. Every couple, every culture and every celebration we work with shapes how we tell that particular story; nothing here is templated.",
        fa: "ما باور داریم یک فیلم یا عکس عروسی باید حس یک خاطره را داشته باشد، نه یک اجرای نمایشی. رویکرد ما در ریشه مستند و در اجرا سینمایی است — از نزدیک مشاهده می‌کنیم، به‌آرامی هدایت می‌کنیم و اجازه می‌دهیم داستان خودش پیش برود. هر زوج، هر فرهنگ و هر جشنی که با آن همکاری می‌کنیم، نحوه روایت آن داستان خاص را شکل می‌دهد؛ هیچ‌چیز در اینجا کلیشه‌ای نیست.",
        tr: "Bir düğün filminin veya fotoğrafının bir performans gibi değil, bir anı gibi hissettirmesi gerektiğine inanıyoruz. Yaklaşımımız özünde belgesel, uygulamada sinematiktir — yakından gözlemler, nazikçe yönlendirir ve hikayenin öncülük etmesine izin veririz. Birlikte çalıştığımız her çift, her kültür ve her kutlama, o hikayenin nasıl anlatılacağını şekillendirir; burada hiçbir şey şablona dayanmaz.",
      },
    },
    brandStory: {
      heading: { en: "Why Wedding Stories Istanbul", fa: "چرا Wedding Stories Istanbul", tr: "Wedding Stories Istanbul Neden Var" },
      body: {
        en: "Wedding Stories Istanbul began as a focused expression of something Mohammad and Mahtab were already doing through Tavakoli Studio: telling love stories, cinematically, in one of the most visually rich cities in the world. Based in Istanbul, the studio was created specifically for couples — Iranian couples living in or travelling to Turkey, Turkish couples, and international couples — who want their wedding, pre-wedding or couple session told with the same care as a film, not just documented like an event.",
        fa: "Wedding Stories Istanbul به‌عنوان تجلی متمرکزی از کاری آغاز شد که محمد و مهتاب پیش‌تر از طریق Tavakoli Studio انجام می‌دادند: روایت داستان‌های عاشقانه، به‌شکل سینمایی، در یکی از شهرهای از نظر بصری غنی جهان. این استودیو، مستقر در استانبول، مخصوصاً برای زوج‌هایی ساخته شده — زوج‌های ایرانی ساکن یا مسافر به ترکیه، زوج‌های ترک و زوج‌های بین‌المللی — که می‌خواهند عروسی، پره‌وداد یا جلسه کاپل‌شان با همان دقتی روایت شود که یک فیلم دارد، نه صرفاً ثبت شود مثل یک رویداد.",
        tr: "Wedding Stories Istanbul, Mohammad ve Mahtab'ın Tavakoli Studio aracılığıyla zaten yaptıkları bir şeyin odaklanmış bir ifadesi olarak doğdu: dünyanın görsel açıdan en zengin şehirlerinden birinde, aşk hikayelerini sinematik bir şekilde anlatmak. İstanbul merkezli stüdyo, özellikle çiftler için kuruldu — Türkiye'de yaşayan veya Türkiye'ye gelen İranlı çiftler, Türk çiftler ve uluslararası çiftler — düğünlerinin, pre-wedding çekimlerinin veya çift seanslarının sadece bir etkinlik gibi belgelenmesini değil, bir film kadar özenle anlatılmasını isteyenler için.",
      },
    },
    closing: {
      heading: { en: "A Premium, Story-Driven Approach", fa: "رویکردی پریمیوم و داستان‌محور", tr: "Premium, Hikaye Odaklı Bir Yaklaşım" },
      body: {
        en: "From the first message to the final film, every step is built around storytelling rather than templates: a real planning conversation, locations chosen with intention, and a final gallery or film that feels like your story — because it is.",
        fa: "از اولین پیام تا فیلم نهایی، هر مرحله بر پایه روایت‌گری شکل گرفته، نه بر اساس قالب‌های از پیش تعیین‌شده: گفت‌وگویی واقعی برای برنامه‌ریزی، لوکیشن‌هایی انتخاب‌شده با نیت، و گالری یا فیلمی نهایی که حس داستان خودِ شما را دارد — چون واقعاً داستان شماست.",
        tr: "İlk mesajdan son filme kadar her adım, şablonlar üzerine değil hikaye anlatıcılığı üzerine kuruludur: gerçek bir planlama görüşmesi, özenle seçilmiş lokasyonlar ve sizin hikayeniz gibi hissettiren bir galeri veya film — çünkü öyle.",
      },
    },
  },
  services: {
    seo: {
      title: {
        en: "Wedding Photography & Film Services in Istanbul | Wedding Stories Istanbul",
        fa: "خدمات عکاسی و فیلم عروسی در استانبول | Wedding Stories Istanbul",
        tr: "İstanbul Düğün Fotoğrafçılığı & Film Hizmetleri | Wedding Stories Istanbul",
      },
      description: {
        en: "Wedding photography, wedding films, pre-wedding/formality shoots and couple sessions in Istanbul — four ways to tell your story.",
        fa: "عکاسی عروسی، فیلم عروسی، عکاسی پره‌وداد و جلسات کاپل در استانبول — چهار شیوه برای روایت داستان شما.",
        tr: "İstanbul'da düğün fotoğrafçılığı, düğün filmi, pre-wedding/nişan çekimi ve çift çekimleri — hikayenizi anlatmanın dört yolu.",
      },
    },
    hero: {
      eyebrow: { en: "What We Offer", fa: "خدمات ما", tr: "Sunduklarımız" },
      heading: { en: "Services", fa: "خدمات", tr: "Hizmetler" },
      subtitle: {
        en: "Four ways to work with us, each built around how you want your story told.",
        fa: "چهار شیوه همکاری با ما، هرکدام متناسب با نحوه‌ای که می‌خواهید داستانتان روایت شود.",
        tr: "Bizimle çalışmanın dört yolu; her biri hikayenizin nasıl anlatılmasını istediğinize göre kurulu.",
      },
    },
  },
  gallery: {
    seo: {
      title: {
        en: "Wedding & Couple Photography Gallery in Istanbul | Wedding Stories Istanbul",
        fa: "گالری عکاسی عروسی و کاپل در استانبول | Wedding Stories Istanbul",
        tr: "İstanbul Düğün & Çift Fotoğrafçılığı Galerisi | Wedding Stories Istanbul",
      },
      description: {
        en: "Browse wedding, pre-wedding, couple session and Istanbul city photography from Wedding Stories Istanbul.",
        fa: "گالری عکاسی عروسی، پره‌وداد، جلسات کاپل و عکاسی شهری استانبول را در Wedding Stories Istanbul مشاهده کنید.",
        tr: "Wedding Stories Istanbul'dan düğün, pre-wedding, çift çekimi ve İstanbul şehir fotoğraflarına göz atın.",
      },
    },
    hero: {
      eyebrow: { en: "Portfolio", fa: "نمونه کارها", tr: "Portföy" },
      heading: { en: "Gallery", fa: "گالری", tr: "Galeri" },
      subtitle: {
        en: "A curated look at weddings, pre-wedding sessions, couple shoots and the city that frames them all.",
        fa: "نگاهی منتخب به عروسی‌ها، جلسات پره‌وداد، عکاسی‌های کاپل و شهری که همه آن‌ها را در قاب می‌گیرد.",
        tr: "Düğünlere, pre-wedding çekimlerine, çift fotoğraflarına ve hepsini kareleyen şehre özenle seçilmiş bir bakış.",
      },
    },
    filters: {
      all: { en: "All", fa: "همه", tr: "Tümü" },
      wedding: { en: "Wedding", fa: "عروسی", tr: "Düğün" },
      "pre-wedding": { en: "Pre-Wedding", fa: "پره‌وداد", tr: "Pre-Wedding" },
      "couple-session": { en: "Couple Session", fa: "جلسه کاپل", tr: "Çift Çekimi" },
      "istanbul-city": { en: "Istanbul City Shoots", fa: "عکاسی شهری استانبول", tr: "İstanbul Şehir Çekimleri" },
    },
  },
  locations: {
    seo: {
      title: {
        en: "Best Istanbul Wedding & Couple Photoshoot Locations | Wedding Stories Istanbul",
        fa: "بهترین لوکیشن‌های عکاسی عروسی و کاپل در استانبول | Wedding Stories Istanbul",
        tr: "En İyi İstanbul Düğün & Çift Çekimi Lokasyonları | Wedding Stories Istanbul",
      },
      description: {
        en: "Galata, Bosphorus, Ortaköy, Balat, Sultanahmet and more — explore the best Istanbul locations for wedding, pre-wedding and couple photography.",
        fa: "گالاتا، بسفر، اورتاکوی، بالات، سلطان‌احمد و بیشتر — بهترین لوکیشن‌های استانبول برای عکاسی عروسی، پره‌وداد و کاپل را کشف کنید.",
        tr: "Galata, Boğaz, Ortaköy, Balat, Sultanahmet ve daha fazlası — düğün, pre-wedding ve çift fotoğrafçılığı için en iyi İstanbul lokasyonlarını keşfedin.",
      },
    },
    hero: {
      eyebrow: { en: "Istanbul", fa: "استانبول", tr: "İstanbul" },
      heading: { en: "Istanbul Locations", fa: "لوکیشن‌های استانبول", tr: "İstanbul Lokasyonları" },
      subtitle: {
        en: "Eight of our favorite corners of the city for wedding, pre-wedding and couple photography — each with its own light, mood and story.",
        fa: "هشت مورد از مکان‌های مورد علاقه ما برای عکاسی عروسی، پره‌وداد و کاپل در شهر — هرکدام با نور، حس‌وحال و داستان خاص خودش.",
        tr: "Düğün, pre-wedding ve çift fotoğrafçılığı için en sevdiğimiz sekiz köşe — her biri kendi ışığı, atmosferi ve hikayesiyle.",
      },
    },
  },
  contact: {
    seo: {
      title: {
        en: "Contact Us | Wedding Stories Istanbul",
        fa: "تماس با ما | Wedding Stories Istanbul",
        tr: "İletişim | Wedding Stories Istanbul",
      },
      description: {
        en: "Get in touch about wedding photography, wedding films, pre-wedding or couple sessions in Istanbul — reply within 24 hours.",
        fa: "برای عکاسی عروسی، فیلم عروسی، جلسات پره‌وداد یا کاپل در استانبول با ما در ارتباط باشید — پاسخ در کمتر از ۲۴ ساعت.",
        tr: "İstanbul'da düğün fotoğrafçılığı, düğün filmi, pre-wedding veya çift çekimi için bizimle iletişime geçin — 24 saat içinde yanıt.",
      },
    },
    hero: {
      eyebrow: { en: "Get in Touch", fa: "ارتباط با ما", tr: "Bize Ulaşın" },
      heading: { en: "Let's Talk About Your Day", fa: "بیایید درباره روزتان صحبت کنیم", tr: "Gününüzü Konuşalım" },
      subtitle: {
        en: "Tell us a little about your plans and we'll reply with availability, pricing and next steps — usually within 24 hours.",
        fa: "کمی درباره برنامه‌هایتان به ما بگویید تا با زمان‌های خالی، قیمت‌گذاری و مراحل بعدی پاسخ دهیم — معمولاً در کمتر از ۲۴ ساعت.",
        tr: "Planlarınızdan kısaca bahsedin, size uygunluk, fiyatlandırma ve sonraki adımlarla ilgili dönelim — genellikle 24 saat içinde.",
      },
    },
    form: {
      name: { en: "Full Name", fa: "نام کامل", tr: "Ad Soyad" },
      email: { en: "Email Address", fa: "آدرس ایمیل", tr: "E-posta Adresi" },
      whatsapp: { en: "WhatsApp Number", fa: "شماره واتساپ", tr: "WhatsApp Numarası" },
      shootType: { en: "Shoot Type", fa: "نوع جلسه عکاسی", tr: "Çekim Türü" },
      preferredDate: { en: "Preferred Date", fa: "تاریخ ترجیحی", tr: "Tercih Edilen Tarih" },
      message: { en: "Tell Us About Your Day", fa: "کمی درباره روزتان بگویید", tr: "Bize Gününüzden Bahsedin" },
      submit: { en: "Send Message", fa: "ارسال پیام", tr: "Mesaj Gönder" },
      sending: { en: "Sending...", fa: "در حال ارسال...", tr: "Gönderiliyor..." },
      shootTypeOptions: [
        { en: "Wedding Photography", fa: "عکاسی عروسی", tr: "Düğün Fotoğrafçılığı" },
        { en: "Wedding Film", fa: "فیلم عروسی", tr: "Düğün Filmi" },
        { en: "Pre-Wedding / Formality", fa: "پره‌وداد / فرمالیته", tr: "Pre-Wedding / Nişan" },
        { en: "Couple Session", fa: "جلسه کاپل", tr: "Çift Çekimi" },
        { en: "Other", fa: "سایر", tr: "Diğer" },
      ],
      requiredError: {
        en: "This field is required.",
        fa: "این فیلد الزامی است.",
        tr: "Bu alan zorunludur.",
      },
      emailError: {
        en: "Please enter a valid email address.",
        fa: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
        tr: "Lütfen geçerli bir e-posta adresi girin.",
      },
    },
    success: {
      heading: { en: "Thank You", fa: "متشکریم", tr: "Teşekkürler" },
      body: {
        en: "Your message has been received. We'll get back to you on WhatsApp or email within 24 hours.",
        fa: "پیام شما با موفقیت دریافت شد. ما در کمتر از ۲۴ ساعت از طریق واتساپ یا ایمیل با شما تماس می‌گیریم.",
        tr: "Mesajınız alındı. 24 saat içinde WhatsApp veya e-posta yoluyla size dönüş yapacağız.",
      },
    },
    whatsappCta: { en: "Message Us on WhatsApp", fa: "پیام در واتساپ", tr: "WhatsApp'tan Mesaj Gönder" },
    instagramCta: { en: "Follow Us on Instagram", fa: "دنبال کردن در اینستاگرام", tr: "Instagram'da Takip Edin" },
    defaultWhatsappMessage: {
      en: "Hi! I'd love to know more about wedding photography and availability in Istanbul.",
      fa: "سلام! می‌خواستم درباره عکاسی عروسی و زمان‌های خالی در استانبول بیشتر بدانم.",
      tr: "Merhaba! İstanbul'da düğün fotoğrafçılığı ve uygunluk hakkında daha fazla bilgi almak istiyorum.",
    },
  },
  blog: {
    seo: {
      title: {
        en: "Journal | Wedding Stories Istanbul",
        fa: "ژورنال | Wedding Stories Istanbul",
        tr: "Blog | Wedding Stories Istanbul",
      },
      description: {
        en: "Stories, behind-the-scenes notes and wedding inspiration from Istanbul — coming soon.",
        fa: "داستان‌ها، یادداشت‌های پشت‌صحنه و ایده‌های عروسی از استانبول — به‌زودی.",
        tr: "İstanbul'dan hikayeler, perde arkası notları ve düğün ilhamı — çok yakında.",
      },
    },
    hero: {
      eyebrow: { en: "Journal", fa: "ژورنال", tr: "Blog" },
      heading: { en: "New Stories Are on Their Way", fa: "داستان‌های تازه در راه‌اند", tr: "Yeni Hikayeler Yolda" },
      subtitle: {
        en: "We're preparing journal entries from real weddings, location guides and behind-the-scenes notes. Check back soon, or follow us on Instagram for updates in the meantime.",
        fa: "ما در حال آماده‌سازی یادداشت‌های ژورنال از عروسی‌های واقعی، راهنمای لوکیشن‌ها و یادداشت‌های پشت‌صحنه هستیم. به‌زودی دوباره سر بزنید، یا در همین حین ما را در اینستاگرام دنبال کنید.",
        tr: "Gerçek düğünlerden notlar, lokasyon rehberleri ve perde arkası içerikler hazırlıyoruz. Yakında tekrar uğrayın, ya da bu süreçte bizi Instagram'da takip edin.",
      },
    },
  },
};

export const footer = {
  description: {
    en: "Premium wedding photography and films in Istanbul, by Tavakoli Studio.",
    fa: "عکاسی و فیلم‌برداری پریمیوم عروسی در استانبول، با امضای Tavakoli Studio.",
    tr: "İstanbul'da premium düğün fotoğrafçılığı ve filmleri, Tavakoli Studio imzasıyla.",
  },
  quickLinksHeading: { en: "Quick Links", fa: "لینک‌های سریع", tr: "Hızlı Bağlantılar" },
  contactHeading: { en: "Get in Touch", fa: "ارتباط با ما", tr: "İletişim" },
  languageHeading: { en: "Language", fa: "زبان", tr: "Dil" },
  copyright: {
    en: "Wedding Stories Istanbul — by Tavakoli Studio. All rights reserved.",
    fa: "Wedding Stories Istanbul — با امضای Tavakoli Studio. تمامی حقوق محفوظ است.",
    tr: "Wedding Stories Istanbul — Tavakoli Studio imzasıyla. Tüm hakları saklıdır.",
  },
  poweredBy: {
    label: { en: "Powered by", fa: "قدرت گرفته از", tr: "Destekleyen" },
    name: "TAVAKOLISTUDIO",
    url: "https://tavakolistudio.vercel.app/en",
  },
};
