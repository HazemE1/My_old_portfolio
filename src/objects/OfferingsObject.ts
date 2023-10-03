export interface Offering extends OfferingItem {
  priceCalcuationAction: string;
  description: string;
  img: string;
  categories: OfferingCatergories[];
}

export interface OfferingItem {
  name: string;
  price: number;
  id: string;
  categoryId: string;
}

export interface OfferingCatergories {
  id: string;
  name: string;
  items: OfferingItem[];
}

export const Offerings: Offering[] = [
  {
    categoryId: "1",
    id: "1",
    name: "Hemsida utveckling",
    img: "https://marketingwebsites.ca/wp-content/uploads/2021/07/build-website.jpg",
    price: 15000,
    priceCalcuationAction: "web-development",
    description:
      "Vår passion är att omvandla din digitala vision till verklighet. Med vår skräddarsydda webbutvecklingstjänst är ditt online-närvaro inte bara en plattform – det är en kraftfull motor för att nå dina affärsmål.\n\nVarför välja vår webbutvecklingstjänst?\n\n- Målinriktad design: Varje webbplats vi skapar är unik och skräddarsydd för att reflektera din varumärkesidentitet och nå din målgrupp. Vi är mästare på att kombinera estetiskt tilltalande design med användarvänlighet.\n\n- Responsivt gränssnitt: Vi förstår vikten av att vara tillgänglig på alla enheter. Därför säkerställer vi att din webbplats fungerar felfritt på datorer, surfplattor och smartphones, vilket ger en sömlös användarupplevelse.\n\n- Teknisk expertis: Vårt team består av erfarna utvecklare som är på toppen av den senaste tekniken. Oavsett om du behöver en enkel webbplats eller en komplex e-handelsplattform, har vi kunskapen och färdigheterna att leverera.\n\n- Säkerhet: Vi tar säkerhet på allvar. Genom att implementera de senaste säkerhetsåtgärderna ser vi till att din webbplats är skyddad mot potentiella hot och hackare.\n\n- Kundfokuserad support: Vår kundtjänst är oöverträffad. Vi är alltid här för att hjälpa dig, svara på frågor och lösa eventuella problem som kan uppstå.\n\nDin digitala framtid börjar här. Låt oss ta din online-närvaro till nästa nivå. Oavsett om du är en nystartad företagare eller ett etablerat företag som vill förnya din webbplats, är vi här för att hjälpa dig. Kontakta oss idag för att börja resan mot en imponerande och framgångsrik webbplats.",
    categories: [
      {
        id: "1", // Added id for Webshop
        name: "Webshop",
        items: [
          {
            id: "1", // Added id for Skapa ny
            name: "Skapa ny",
            price: 1200,
            categoryId: "1", // Added categoryId for Skapa ny
          },
          {
            id: "2", // Added id for Fyll med produkter (Pris per produkt)
            name: "Fyll med produkter (Pris per produkt)",
            price: 20,
            categoryId: "1", // Added categoryId for Fyll med produkter (Pris per produkt)
          },
        ],
      },
      {
        id: "2", // Added id for Betalningsmetoder
        name: "Betalningsmetoder",
        items: [
          {
            id: "3", // Added id for Klarna
            name: "Klarna",
            price: 600,
            categoryId: "2", // Added categoryId for Klarna
          },
          {
            id: "4", // Added id for Swish
            name: "Swish",
            price: 500,
            categoryId: "2", // Added categoryId for Swish
          },
          {
            id: "5", // Added id for Kort
            name: "Stripe",
            price: 500,
            categoryId: "2", // Added categoryId for Kort
          },
        ],
      },
      {
        id: "3", // Added id for Bokningssystem
        name: "Bokningssystem",
        items: [
          {
            id: "6", // Added id for Skapa ny bokningsystem
            name: "Skapa ny bokningsystem",
            price: 1200,
            categoryId: "3", // Added categoryId for Skapa ny bokningsystem
          },
          {
            id: "7", // Added id for Designa sidan
            name: "Designa sidan",
            price: 800,
            categoryId: "3", // Added categoryId for Designa sidan
          },
        ],
      },
      {
        id: "4", // Added id for Sidor
        name: "Sidor",
        items: [
          {
            id: "12", // Added id for Framsida
            name: "Framsida",
            price: 300,
            categoryId: "4", // Added categoryId for Framsida
          },
          {
            id: "13", // Added id for Om oss-sida
            name: "Om oss-sida",
            price: 300,
            categoryId: "4", // Added categoryId for Om oss-sida
          },
          {
            id: "14", // Added id for Bloggsida
            name: "Bloggsida",
            price: 5000,
            categoryId: "4", // Added categoryId for Bloggsida
          },
          {
            id: "15", // Added id for Kontakt oss sida
            name: "Kontakt oss sida",
            price: 300,
            categoryId: "4", // Added categoryId for Kontakt oss sida
          },
          {
            id: "16", // Added id for Hitta oss sida
            name: "Hitta oss sida",
            price: 300,
            categoryId: "4", // Added categoryId for Hitta oss sida
          },
          {
            id: "17", // Added id for Designa Sida (Pris / sida)
            name: "Designa Sida (Pris / sida)",
            price: 800,
            categoryId: "4", // Added categoryId for Designa Sida (Pris / sida)
          },
          {
            id: "18", // Added id for Sida för integritetspolicy
            name: "Sida för integritetspolicy",
            price: 300,
            categoryId: "4", // Added categoryId for Sida för integritetspolicy
          },
          {
            id: "19", // Added id for Sida för användarvillkor
            name: "Sida för användarvillkor",
            price: 300,
            categoryId: "4", // Added categoryId for Sida för användarvillkor
          },
        ],
      },
      {
        id: "5", // Added id for Framsida
        name: "Framsida",
        items: [
          {
            id: "20", // Added id for Skapa en landing sida
            name: "Skapa en landing sida",
            price: 250,
            categoryId: "5", // Added categoryId for Skapa en landing sida
          },
          {
            id: "21", // Added id for Skapa sektion (Pris / Sektion)
            name: "Skapa sektion (Pris / Sektion)",
            price: 250,
            categoryId: "5", // Added categoryId for Skapa sektion (Pris / Sektion)
          },
          {
            id: "22", // Added id for Designa Sida
            name: "Designa Sida",
            price: 800,
            categoryId: "5", // Added categoryId for Designa Sida
          },
          {
            id: "23", // Added id for Designa sektion (Pris / Sektion)
            name: "Designa sektion (Pris / Sektion)",
            price: 250,
            categoryId: "5", // Added categoryId for Designa sektion (Pris / Sektion)
          },
        ],
      },
    ],
  },
  {
    id: "6", // Added id for App utveckling
    name: "App utveckling",
    img: "https://i.imgur.com/bkpoLgY.png",
    price: 40000,
    priceCalcuationAction: "web-development",
    description:
      "Vår passion är att omvandla din digitala vision till verklighet inom apputveckling. Vi skapar anpassade och kraftfulla appar som hjälper ditt företag att sticka ut på marknaden.\n\nVarför välja vår apputvecklingstjänst?\n\n- Skräddarsydd funktionalitet: Vi designar och utvecklar appar som är unika för dina behov och affärsmål. Vårt mål är att skapa en app som engagerar och imponerar på dina användare.\n\n- Plattformsoberoende: Vårt team är erfaret inom att utveckla appar för olika plattformar, inklusive iOS och Android. Vi kan hjälpa dig att nå en bred publik.\n\n- Användarvänlighet: Vi sätter användarupplevelsen i fokus. Våra appar är enkla att använda och ger en sömlös navigering för användarna.\n\n- Teknisk expertis: Vi är experter på den senaste apputvecklingstekniken och kan leverera appar med hög prestanda och säkerhet.\n\n- Support och underhåll: Vår support är tillgänglig för att hjälpa dig med eventuella frågor eller problem som kan uppstå med din app.\n\nOm du vill ta din digitala närvaro till nästa nivå med en imponerande app, är vi här för att hjälpa dig. Kontakta oss idag för att komma igång med din apputveckling.",
    categories: [
      {
        id: "7", // Added id for App Design
        name: "App Design",
        items: [
          {
            id: "24", // Added id for UI/UX Design
            name: "UI/UX Design",
            price: 3000,
          },
          {
            id: "25", // Added id for App Prototyping
            name: "App Prototyping",
            price: 1500,
          },
        ],
      },
      {
        id: "8", // Added id for App Development
        name: "App Development",
        items: [
          {
            id: "26", // Added id for iOS App Development
            name: "iOS App Development",
            price: 20000,
          },
          {
            id: "27", // Added id for Android App Development
            name: "Android App Development",
            price: 20000,
          },
          {
            id: "28", // Added id for Cross-platform App Development
            name: "Cross-platform App Development",
            price: 25000,
          },
        ],
      },
      {
        id: "9", // Added id for App Testing
        name: "App Testing",
        items: [
          {
            id: "29", // Added id for Functional Testing
            name: "Functional Testing",
            price: 1000,
          },
          {
            id: "30", // Added id for Usability Testing
            name: "Usability Testing",
            price: 1500,
          },
        ],
      },
      {
        id: "10", // Added id for App Deployment
        name: "App Deployment",
        items: [
          {
            id: "31", // Added id for App Store Submission
            name: "App Store Submission",
            price: 1000,
          },
          {
            id: "32", // Added id for Google Play Submission
            name: "Google Play Submission",
            price: 1000,
            categoryId:"10"
          },
        ],
      },
    ],
  }
  {
    
    name: "SEO Optimering",
    img: "https://cdn-icons-png.flaticon.com/512/5902/5902216.png",
    price: 5000,
    priceCalcuationAction: "seo-optimization",
    description:
      "Vi är experter på att förbättra din webbplatsens synlighet och ranking på sökmotorer som Google. Med vår SEO-optimeringstjänst kan vi hjälpa dig att öka din webbplatsens organiska trafik och nå dina affärsmål.\n\nVarför välja vår SEO-optimeringstjänst?\n\n- Sökmotoranalys: Vi genomför en grundlig analys av din webbplats och din målgrupp för att skapa en skräddarsydd SEO-strategi.\n\n- Nyckelordsoptimering: Vi identifierar relevanta nyckelord och optimerar din webbplats för att ranka högre på dessa söktermer.\n\n- On-Page Optimering: Vi optimerar din webbplatsens innehåll, meta-beskrivningar och sidhastighet för bättre prestanda.\n\n- Off-Page Optimering: Vi bygger högkvalitativa länkar och skapar en stark online-närvaro för din webbplats.\n\n- Konkurrensanalys: Vi håller koll på dina konkurrenter och anpassar vår strategi för att hålla dig före.\n\nOm du vill öka din webbplatsens synlighet och dra nytta av organisk trafik, är vi här för att hjälpa dig. Kontakta oss idag för att komma igång med din SEO-optimering.",
    categories: [
      {
        name: "Nyckelordsanalys",
        items: [
          {
            name: "Nyckelordsforskning",
            price: 1000,
          },
          {
            name: "Konkurrensanalys",
            price: 800,
          },
        ],
      },
      {
        name: "On-Page Optimering",
        items: [
          {
            name: "Meta-tag Optimering",
            price: 600,
          },
          {
            name: "Innehållsoptimering",
            price: 1200,
          },
        ],
      },
      {
        name: "Off-Page Optimering",
        items: [
          {
            name: "Länkbyggande",
            price: 1500,
          },
          {
            name: "Sociala Medier Marknadsföring",
            price: 1200,
          },
        ],
      },
      {
        name: "Rapportering och Uppföljning",
        items: [
          {
            name: "Månadsrapporter",
            price: 500,
          },
          {
            name: "Uppföljning av resultat",
            price: 700,
          },
        ],
      },
    ],
  },
  {
    name: "Hemsida tillägg",
    img: "https://cdn-icons-png.flaticon.com/512/2684/2684625.png",
    price: 7000,
    priceCalcuationAction: "web-development",
    description:
      "Vi erbjuder ett brett utbud av tilläggstjänster för din webbplats för att förbättra dess funktionalitet och användbarhet. Oavsett om du behöver extra funktioner eller vill förbättra din webbplatsens prestanda, är vi här för att hjälpa dig.\n\nVarför välja våra tilläggstjänster?\n\n- Anpassade funktioner: Vi kan skapa anpassade funktioner och moduler som passar perfekt för din webbplats och dina behov.\n\n- Integrationer: Vi kan integrera tredjepartsverktyg och API:er för att förbättra din webbplatsens funktionalitet, inklusive betalningsgateways, sociala medier och mer.\n\n- Prestandaoptimering: Vi kan optimera din webbplats för snabbare laddning och bättre användarupplevelse.\n\n- Säkerhet: Vi implementerar säkerhetsåtgärder för att skydda din webbplats mot hot och säkerhetssårbarheter.\n\n- Support: Vårt team är tillgängligt för att svara på dina frågor och hjälpa dig med eventuella problem.\n\nKontakta oss idag för att utforska våra tilläggstjänster och ta din webbplats till nästa nivå.",
    categories: [
      {
        name: "Anpassade Funktioner",
        items: [
          {
            name: "Skapa anpassade funktioner",
            price: 1500,
          },
          {
            name: "Integrera tredjepartsverktyg",
            price: 1000,
          },
        ],
      },
      {
        name: "Prestandaoptimering",
        items: [
          {
            name: "Laddningstidsoptimering",
            price: 800,
          },
          {
            name: "Cachningssystem",
            price: 1200,
          },
        ],
      },
      {
        name: "Säkerhet och Skydd",
        items: [
          {
            name: "Säkerhetsåtgärder",
            price: 600,
          },
          {
            name: "Säkerhetsuppdateringar",
            price: 500,
          },
        ],
      },
    ],
  },
];
  