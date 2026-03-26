export type Lang = "en" | "ar";

export const navSectionIds = {
  executiveSummary: "executive-summary",
  scope: "scope",
  uiApproach: "ui-approach",
  options: "options",
  decision: "decision",
  timeline: "timeline",
  support: "support",
  nextSteps: "next-steps",
} as const;

export type NavSectionId = (typeof navSectionIds)[keyof typeof navSectionIds];

export const copy: Record<
  Lang,
  {
    brandName: string;
    proposalTitle: string;
    proposalSubtitle: string;

    nav: Record<
      | "executiveSummary"
      | "scope"
      | "uiApproach"
      | "options"
      | "decision"
      | "timeline"
      | "support"
      | "nextSteps",
      string
    >;

    heroCtaPrimary: string;
    heroCtaSecondary: string;

    sections: {
      executiveSummary: {
        title: string;
        bullets: string[];
      };
      scope: {
        title: string;
        intro: string;
        inventoryTemplatesVsContent: {
          title: string;
          points: string[];
        };
        currentPagesNote: string;
      };
      uiApproach: {
        title: string;
        mappingTitle: string;
        mappingPoints: string[];
        animationTitle: string;
        animationPoints: string[];
      };
      options: {
        title: string;
        description: string;
        optionA: {
          title: string;
          timeline: string;
          includes: string[];
          goodFor: string;
        };
        optionB: {
          title: string;
          timeline: string;
          includes: string[];
          goodFor: string;
        };
        optionC: {
          title: string;
          timeline: string;
          includes: string[];
          goodFor: string;
        };
      };
      decision: {
        title: string;
        lead: string;
        cmsProsTitle: string;
        cmsPros: string[];
        apisProsTitle: string;
        apisPros: string[];
      };
      timeline: {
        title: string;
        assumptions: string[];
        milestonesTitle: string;
        milestones: string[];
      };
      support: {
        title: string;
        packagesTitle: string;
        packages: {
          name: string;
          durationPlaceholder: string;
          details: string[];
        }[];
      };
      nextSteps: {
        title: string;
        detailsTitle: string;
        details: string[];
        cmsReadinessTitle: string;
        cmsReadiness: string[];
        decisionPrompt: string;
      };
    };
  }
> = {
  en: {
    brandName: "AIMS",
    proposalTitle: "Website Redesign Proposal",
    proposalSubtitle:
      "Arabic + English (RTL) Next.js proposal, based on the Invena-style template while keeping AIMS identity.",

    nav: {
      executiveSummary: "Executive Summary",
      scope: "Scope & Page Inventory",
      uiApproach: "UI/UX Approach",
      options: "Implementation Options",
      decision: "CMS vs APIs Decision",
      timeline: "Timeline & Assumptions",
      support: "Support Packages",
      nextSteps: "Client Inputs & Next Steps",
    },

    heroCtaPrimary: "Review Options (A/B/C)",
    heroCtaSecondary: "See Timeline & Support",

    sections: {
      executiveSummary: {
        title: "What we will deliver",
        bullets: [
          "A modern landing page and full content set for the AIMS website (Home + all content pages), redesigned with a consistent Invena-style layout and smooth UX.",
          "A bilingual experience: English + Arabic, with proper RTL direction and print/PDF-ready layout.",
          "Three delivery scenarios depending on how the content editing is handled: CMS (Strapi) or Custom APIs + Admin UI.",
        ],
      },
      scope: {
        title: "Current scope (25 pages total)",
        intro:
          "The current website contains a landing page plus multiple content pages. To estimate accurately, we group pages by template and treat “content entries” as data.",
        inventoryTemplatesVsContent: {
          title: "Templates vs content entries",
          points: [
            "1 unique landing page (Home).",
            "Core info pages (About, Certifications, Careers, Contact) as unique templates.",
            "Service and division pages as reusable templates.",
            "Partner pages as one shared partner template with different data (13 partners).",
          ],
        },
        currentPagesNote:
          "Estimated work below assumes design + development of templates, then CMS/API integration for content.",
      },
      uiApproach: {
        title: "How the new design will look & feel",
        mappingTitle: "Invena layout mapped to AIMS identity",
        mappingPoints: [
          "Hero + introduction sections, company mission/message, and key differentiators.",
          "Services and divisions presented in cards/grids matching the template sections.",
          "Team/leadership and testimonials sections (structured for CMS editing).",
          "Projects/partners showcase sections and a consistent contact CTA.",
        ],
        animationTitle: "Animations and interaction",
        animationPoints: [
          "Smooth entrance animations and section reveals using Framer Motion.",
          "Responsive layout tuned for mobile/tablet (RTL-safe alignment).",
          "Consistent component spacing, typography scale, and gradients based on the reference project.",
        ],
      },
      options: {
        title: "Choose your delivery option",
        description:
          "All options include the same redesigned UI (landing + pages) and bilingual/RTL delivery. The difference is how content editing is implemented.",
        optionA: {
          title: "Option A (Recommended baseline): CMS-ready frontend",
          timeline: "~35–40 days",
          includes: [
            "Next.js/React frontend with the new layout for all pages.",
            "Integration-ready data model (frontend consumes CMS-like API shape).",
            "Bilingual copy support (English + Arabic RTL) and print/PDF-ready styling.",
          ],
          goodFor:
            "When the client already has a CMS ready (or content editing handled by the client team).",
        },
        optionB: {
          title: "Option B: Frontend + Strapi CMS (self-hosted)",
          timeline: "~50–60 days",
          includes: [
            "Option A deliverables.",
            "Strapi setup: content types, media library, roles/permissions, and admin UI.",
            "Frontend wiring: CMS data -> pages (services, divisions, partners, pages, etc.).",
            "End-to-end testing (admin edit -> published page).",
          ],
          goodFor:
            "When the client wants to manage content immediately with a proven CMS experience.",
        },
        optionC: {
          title: "Option C: Frontend + Custom APIs + Admin UI",
          timeline: "~85–100 days",
          includes: [
            "Option A deliverables.",
            "Custom backend APIs (CRUD + media upload) and an admin dashboard UI.",
            "Auth/authorization and validation tailored to AIMS workflows.",
            "Additional testing and documentation of the custom admin/APIs.",
          ],
          goodFor:
            "When the client has special editing/business rules that a CMS cannot cover (rare).",
        },
      },
      decision: {
        title: "CMS vs custom APIs (simple decision guide)",
        lead:
          "For a corporate website like AIMS, CMS is typically the best balance of speed, security, and maintenance.",
        cmsProsTitle: "Why CMS is usually the best choice",
        cmsPros: [
          "Faster delivery and lower cost versus building admin screens + APIs from scratch.",
          "A polished admin UI (roles, permissions, rich content fields, media library).",
          "Better security posture (mature product) and easier future changes.",
        ],
        apisProsTitle: "When custom APIs can make sense",
        apisPros: [
          "If AIMS needs a very specific workflow (custom approval, complex rules, deep integrations).",
          "If content editing must integrate with internal systems in a non-standard way.",
          "If the client is fully prepared to run and maintain the backend long-term.",
        ],
      },
      timeline: {
        title: "Timeline, assumptions, and your workload",
        assumptions: [
          "Estimated timeline assumes your daily work is up to 2 hours/day on focused tasks.",
          "Timeline assumes the design is approved early and content structure is confirmed.",
          "If CMS/API is not ready (or content migration is required), add time for setup and migration.",
        ],
        milestonesTitle: "Typical milestone flow",
        milestones: [
          "Design system adaptation (colors, typography, layout structure) + responsive/RTL rules.",
          "Shared components: header/navigation, footer, cards/sections, and animation patterns.",
          "Landing page + core templates implemented first, then reusable templates for services/divisions/partners.",
          "CMS (Strapi) or API integration, including media handling and content preview.",
          "QA: responsive checks, RTL checks, and “admin edit -> page render” validation.",
        ],
      },
      support: {
        title: "Launch support packages",
        packagesTitle: "Support is included to reduce risk after go-live.",
        packages: [
          {
            name: "Package 1: Launch Fix Support",
            durationPlaceholder: "Duration: 14 days",
            details: [
              "Bug fixes related to the delivered pages and CMS/API integration.",
              "Small CSS/spacing adjustments if required after initial client review.",
            ],
          },
          {
            name: "Package 2: CMS Training",
            durationPlaceholder: "Duration: 2 sessions",
            details: [
              "Training for how to edit: Pages, Services, Divisions, Partners, Team, Testimonials, and Media.",
              "Hand-over checklist and admin usage guide.",
            ],
          },
          {
            name: "Package 3: Optional Maintenance",
            durationPlaceholder: "Duration: 3 months",
            details: [
              "Updates and improvements for new sections or minor changes requested by AIMS.",
              "Security dependency updates when needed (based on client policy).",
            ],
          },
        ],
      },
      nextSteps: {
        title: "Client inputs & decision time",
        detailsTitle: "To start efficiently, we need:",
        details: [
          "AIMS branding assets: logo(s), brand colors (or approval to use an initial palette), fonts if any.",
          "Content source: existing text/images for landing + each page (services/divisions/partners/team/testimonials).",
          "Partner list (13 partners) with their short descriptions (or CSV/Excel).",
          "Confirmation of CMS content structure (or approval to define it in Option B).",
          "Contact form requirements (fields + email recipients + spam protection preference).",
        ],
        cmsReadinessTitle: "CMS readiness assumption (for Option A timing)",
        cmsReadiness: [
          "CMS already exists and exposes an API / content model that matches the frontend expectations.",
          "Or the client team provides a stable staging API for content at the beginning of development.",
        ],
        decisionPrompt:
          "Choose Option A, B, or C based on how quickly you need to start editing content and how much custom logic AIMS requires.",
      },
    },
  },
  ar: {
    brandName: "AIMS",
    proposalTitle: "اقتراح إعادة تصميم الموقع",
    proposalSubtitle:
      "اقتراح Next.js ثنائي اللغة (العربية RTL + الإنجليزية) مبني على هيكل Invena مع الحفاظ على هوية AIMS.",

    nav: {
      executiveSummary: "ملخص تنفيذي",
      scope: "نطاق العمل وتجميع الصفحات",
      uiApproach: "نهج الواجهة وتجربة المستخدم",
      options: "خيارات التنفيذ",
      decision: "قرار CMS مقابل APIs",
      timeline: "الجدول الزمني والافتراضات",
      support: "باكجات الدعم",
      nextSteps: "مساهمات العميل والخطوات القادمة",
    },

    heroCtaPrimary: "مراجعة الخيارات (A/B/C)",
    heroCtaSecondary: "عرض الجدول والدعم",

    sections: {
      executiveSummary: {
        title: "ماذا سنُسلِّم؟",
        bullets: [
          "صفحة هبوط حديثة + كامل صفحات موقع AIMS (الصفحة الرئيسية + باقي الصفحات)، بتصميم موحّد مستوحى من Invena وتجربة استخدام سلسة.",
          "تجربة ثنائية اللغة: العربية والإنجليزية مع دعم RTL الصحيح.",
          "3 سيناريوهات للتسليم حسب طريقة إدارة المحتوى (CMS مثل Strapi أو APIs مخصصة + لوحة تحكم).",
        ],
      },
      scope: {
        title: "النطاق الحالي (25 صفحة تقريباً)",
        intro:
          "الموقع الحالي يحتوي على صفحة هبوط إضافةً إلى صفحات متعددة. لتقدير الزمن بدقة، نقوم بتجميع الصفحات حسب القالب، ونعتبر “بيانات المحتوى” عناصر قابلة للتعبئة.",
        inventoryTemplatesVsContent: {
          title: "قوالب مقابل عناصر محتوى",
          points: [
            "قالب فريد لصفحة الهبوط (الرئيسية).",
            "صفحات معلومات أساسية (عن AIMS، الشهادات، الوظائف، تواصل معنا) بقوالب فريدة.",
            "صفحات الخدمات والأقسام بقوالب قابلة لإعادة الاستخدام.",
            "صفحات الشركاء بقالب واحد مشترك مع اختلاف البيانات (13 شريك).",
          ],
        },
        currentPagesNote:
          "التقديرات أدناه تفترض تصميم + تطوير القوالب، ثم ربط إدارة المحتوى عبر CMS أو APIs.",
      },
      uiApproach: {
        title: "شكل وتجربة التصميم الجديد",
        mappingTitle: "مطابقة هيكل Invena مع هوية AIMS",
        mappingPoints: [
          "Hero + أقسام المقدمة، رسالة/مهمة الشركة، ومناطق إبراز نقاط التميّز.",
          "عرض الخدمات والأقسام عبر كروت/شبكات بنفس منطق أقسام القالب.",
          "أقسام الفريق/الإدارة والشهادات (مصممة لتكون قابلة للتعديل عبر CMS).",
          "أقسام المشاريع/الشركاء وCTA موحد للتواصل.",
        ],
        animationTitle: "الرسوم والتفاعل",
        animationPoints: [
          "حركات دخول سلسة وكشف للأقسام باستخدام Framer Motion.",
          "تصميم متجاوب للجوال/اللوحي مع محاذاة آمنة للـ RTL.",
          "مسافات وأحجام خطوط ثابتة وتدرجات لونية مستوحاة من المشروع المرجعي.",
        ],
      },
      options: {
        title: "اختر خيار التنفيذ",
        description:
          "جميع الخيارات تتضمن نفس واجهة التصميم المُعاد (صفحة الهبوط + الصفحات) + ثنائية اللغة وRTL. الفرق الأساسي هو طريقة إدارة المحتوى.",
        optionA: {
          title: "الخيار A (مقترح كبداية): Frontend جاهز لـ CMS",
          timeline: "~35–40 يوم",
          includes: [
            "واجهة Next.js/React الجديدة لكل الصفحات.",
            "نموذج بيانات Frontend جاهز للتكامل مع CMS (شكل API مطابق لتوقعات الواجهة).",
            "دعم ثنائي اللغة (English + Arabic RTL).",
          ],
          goodFor:
            "عندما يكون لدى العميل CMS جاهز بالفعل (أو فريق العميل يتولى إدارة المحتوى).",
        },
        optionB: {
          title: "الخيار B: Frontend + CMS Strapi (استضافة ذاتية)",
          timeline: "~50–60 يوم",
          includes: [
            "كل ما في الخيار A.",
            "إعداد Strapi: أنواع المحتوى، مكتبة الوسائط، الصلاحيات، ولوحة الإدارة.",
            "ربط Frontend مع CMS: عرض البيانات على الصفحات (الخدمات، الأقسام، الشركاء،… إلخ).",
            "اختبارات شاملة (تعديل من لوحة الإدارة -> ظهور على الصفحات).",
          ],
          goodFor:
            "عندما يرغب العميل في البدء بإدارة المحتوى فوراً عبر CMS جاهز وبشكل احترافي.",
        },
        optionC: {
          title: "الخيار C: Frontend + APIs مخصصة + لوحة تحكم",
          timeline: "~85–100 يوم",
          includes: [
            "كل ما في الخيار A.",
            "Backend مخصص: APIs للـ CRUD + رفع الوسائط + لوحة تحكم Admin UI.",
            "Authentication وAuthorization مع التحقق وفق احتياجات AIMS.",
            "اختبارات إضافية وتوثيق الـ APIs ولوحة التحكم.",
          ],
          goodFor:
            "عندما تكون لدى AIMS قواعد تحرير/تدفق عمل خاصة لا يمكن لـ CMS تغطيتها (حالة نادرة).",
        },
      },
      decision: {
        title: "CMS مقابل APIs مخصصة (دليل قرار بسيط)",
        lead:
          "لموقع مؤسسي مثل AIMS، غالباً CMS هو أفضل توازن بين السرعة والأمان وسهولة الصيانة.",
        cmsProsTitle: "لماذا CMS غالباً هو الأفضل؟",
        cmsPros: [
          "زمن تطوير أقل وتكلفة أقل مقارنة ببناء Admin UI و APIs من الصفر.",
          "لوحة إدارة جاهزة (صلاحيات، حقول تحرير غنية، مكتبة وسائط).",
          "أمان أفضل مع منتج ناضج، وسهولة تعديل/تطوير لاحقاً.",
        ],
        apisProsTitle: "متى تكون APIs المخصصة مناسبة؟",
        apisPros: [
          "عندما تحتاج AIMS سير عمل محدد جداً (اعتماد/موافقات، قواعد معقدة، أو تكاملات عميقة).",
          "عندما يلزم ربط تحرير المحتوى بأنظمة داخلية بطريقة غير قياسية.",
          "عندما يكون العميل مستعد لتشغيل وصيانة الـ backend على المدى الطويل.",
        ],
      },
      timeline: {
        title: "الجدول الزمني والافتراضات الخاصة بالعمل",
        assumptions: [
          "التقديرات تفترض عملك اليومي حتى ساعتين/يوم مع تركيز على المهام المطلوبة.",
          "نفرض موافقة مبكرة على التصميم وتأكيد هيكل المحتوى.",
          "إذا لم يكن الـ CMS/API جاهزاً (أو توجد هجرة محتوى)، فسنضيف وقتاً لإعداد وربط المحتوى.",
        ],
        milestonesTitle: "سير عمل نموذجي (Milestones)",
        milestones: [
          "تكييف نظام التصميم (الألوان، الخطوط، هيكل الصفحة) وضبط قواعد RTL والاستجابة.",
          "بناء مكونات مشتركة: الهيدر/التنقل، الفوتر، الكروت/الأقسام، وأنماط الحركات.",
          "تنفيذ Landing + القوالب الأساسية أولاً، ثم القوالب القابلة لإعادة الاستخدام للخدمات/الأقسام/الشركاء.",
          "ربط CMS (Strapi) أو APIs، مع التعامل مع الوسائط ومعاينة المحتوى.",
          "اختبارات QA: تحقق RTL والمتجاوبية والتحقق من “تعديل الإدمن -> ظهور على الصفحة”.",
        ],
      },
      support: {
        title: "باكجات دعم ما بعد الإطلاق",
        packagesTitle: "نضيف دعم لتقليل المخاطر بعد go-live.",
        packages: [
          {
            name: "باكيدج 1: دعم إصلاحات الإطلاق",
            durationPlaceholder: "المدة: 14 يوم",
            details: [
              "إصلاح الأخطاء المتعلقة بالصفحات والتكامل مع CMS/API.",
              "تعديلات بسيطة في المسافات/الـ CSS عند مراجعة أولية من العميل.",
            ],
          },
          {
            name: "باكيدج 2: تدريب CMS",
            durationPlaceholder: "المدة: جلستان",
            details: [
              "شرح كيفية تعديل: الصفحات، الخدمات، الأقسام، الشركاء، الفريق، الشهادات، والوسائط.",
              "قائمة تسليم + دليل استخدام لوحة الإدارة.",
            ],
          },
          {
            name: "باكيدج 3: صيانة اختيارية",
            durationPlaceholder: "المدة: 3 أشهر",
            details: [
              "تحديثات وتحسينات للأقسام الجديدة أو تعديلات طفيفة حسب طلب AIMS.",
              "تحديثات تبعيات/اعتمادات بشكل آمن عند الحاجة (حسب سياسة العميل).",
            ],
          },
        ],
      },
      nextSteps: {
        title: "مساهمات العميل والخطوات القادمة",
        detailsTitle: "مدخلات اختيارية لتسريع البدء:",
        details: [
          "مواد الهوية: شعار/شعارات، ألوان العلامة (أو موافقة على لوحة ألوان أولية)، وأي خطوط إضافية.",
          "مصدر المحتوى: النصوص/الصور الحالية للصفحة الرئيسية + كل صفحة (الخدمات/الأقسام/الشركاء/الفريق/الشهادات).",
          "قائمة الشركاء (13 شريك) مع وصف مختصر لكل شريك (أو ملف Excel/CSV).",
          "تأكيد هيكل المحتوى داخل الـ CMS (أو موافقة لتعريفه في الخيار B).",
          "متطلبات نموذج التواصل: الحقول، مستلمين البريد، وتفضيل حماية من السبام.",
        ],
        cmsReadinessTitle: "افتراض جاهزية الـ CMS (لتقدير الخيار A)",
        cmsReadiness: [
          "يوجد CMS جاهز بالفعل ويعرض API / نموذج محتوى مطابق لتوقعات الواجهة.",
          "أو فريق العميل يوفّر API ثابت للاختبار في بداية التطوير.",
        ],
        decisionPrompt:
          "اختر الخيار A أو B أو C حسب الوقت المطلوب لبدء تعديل المحتوى والدرجة المطلوبة من منطق خاص داخلية لدى AIMS.",
      },
    },
  },
};

