/**
 * content.js
 * SINGLE SOURCE OF TRUTH for all text, images, links and structured data
 * used across the Nirmala M Halmandge Degree College Bhalki website.
 *
 * Every page reads from window.SITE. Edit values here to update the
 * entire site consistently.
 */

const SITE = {

  /* ============================================================
     CORE IDENTITY
  ============================================================ */
  meta: {
    name: "Nirmala M Halmandge Degree College",
    shortName: "NMH Degree College",
    place: "Bhalki",
    district: "Bidar",
    state: "Karnataka",
    tagline: "Arts, Science & Commerce — under one roof",
    affiliation: "Affiliated to a recognized University · Grant-in-Aid Institution",
    established: "Serving the villages around Bhalki for over two decades",
    addressLine1: "Humnabad Road, Ramteerth Wadi Road",
    addressLine2: "Bhalki, Bidar District, Karnataka – 585328",
    phone: "+91 96632 66837",
    phoneDisplay: "96632 66837",
    email: "eshwarrumma487@gmail.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21599.460732575255!2d77.20143221424138!3d18.03198481784912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcee100280727f3%3A0xdf7931d91e4b9836!2sNirmala%20Creative%20Studies%20PU%20College!5e0!3m2!1sen!2sin!4v1770637674635!5m2!1sen!2sin",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      youtube: "#"
    }
  },

  /* ============================================================
     LOGO / BRAND IMAGES
  ============================================================ */
  brand: {
    logo: "./images/logo.webp",
    favicon: "./images/logo.webp",
    footerLogo: "./images/logo.webp"
  },

  /* ============================================================
     TOP NOTICE-BOARD TICKER (signature element)
  ============================================================ */
  notices: [
    "Admissions open for B.Com & B.Sc — academic year 2026–27",
    "Library extended hours during examination season",
  ],

  /* ============================================================
     PRIMARY NAVIGATION (drives header + mobile menu on every page)
  ============================================================ */
  nav: [
    { label: "Home", href: "index.html" },
    {
      label: "About",
      href: "about.html",
      children: [
        { label: "About College", href: "about.html" },
        { label: "Principal Message", href: "principle-message.html" },
        { label: "Vision & Mission", href: "vision-mission.html" }
      ]
    },
    {
      label: "Courses Offered",
      href: "bechelorof-commerese.html",
      children: [
        { label: "Bachelor of Commerce (B.Com)", href: "bechelorof-commerese.html" },
        { label: "Bachelor of Science (B.Sc.)", href: "bechelorof-science.html" }
      ]
    },
    {
      label: "Faculty & Staff",
      href: "teaching_staff.html",
      children: [
        { label: "Teaching Staff", href: "teaching_staff.html" },
        { label: "Non-Teaching Staff", href: "nonteaching_staff.html" }
      ]
    },
    {
      label: "Departments",
      href: "becom.html",
      children: [
        { label: "B.Com.", href: "becom.html" },
        { label: "B.Sc.", href: "bsc.html" }
      ]
    },
    { label: "Facilities", href: "facilities.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Contact", href: "contact.html" }
  ],

  /* ============================================================
     FOOTER LINK COLUMNS
  ============================================================ */
  footer: {
    about: "Nirmala M. Halmandge Degree College, Bhalki is a grant-in-aid institution dedicated to accessible, value-based higher education for the rural and backward regions of Bidar district.",
    links: [
      { label: "Courses Offered", href: "bechelorof-commerese.html" },
      { label: "Departments", href: "becom.html" },
      { label: "Gallery", href: "gallery.html" },
      { label: "Facilities", href: "facilities.html" },
      { label: "About Us", href: "about.html" }
    ],
    company: [
      { label: "Principal Message", href: "principle-message.html" },
      { label: "Contact", href: "contact.html" },
      { label: "Teaching Staff", href: "teaching_staff.html" },
      { label: "Non-Teaching Staff", href: "nonteaching_staff.html" },
      { label: "Vision & Mission", href: "vision-mission.html" }
    ],
    copyright: "Copyright © 2026 Nirmala M Halmandge Degree College Bhalki. All Rights Reserved."
  },

  /* ============================================================
     HOMEPAGE
  ============================================================ */
  home: {
    hero: {
      eyebrow: "Bhalki · Bidar District · Karnataka",
      heading: "Welcome to Nirmala M Halmandge Degree College, Bhalkiiiiii",
      sub: "Quality higher education in Arts, Science and Commerce — reaching deserving students across nearly twenty-seven villages of rural Bidar.",
      ctaPrimary: { label: "View More", href: "about.html" },
      ctaSecondary: { label: "Get in Touch", href: "contact.html" },
      image: "./images/college.webp"
    },
    highlightCards: [
      {
        title: "Academics",
        text: "Highly qualified and experienced teaching and non-teaching staff guiding every student.",
        icon: "cap"
      },
      {
        title: "Programs",
        text: "Arts, Science and Commerce programs offered together under one roof.",
        icon: "book"
      },
      {
        title: "Discover More NMH",
        text: "Don't hesitate to ask — our office and faculty are always reachable for guidance.",
        icon: "chat"
      }
    ],
    welcome: {
      eyebrow: "Who we are",
      heading: "Welcome to Nirmala M. Halmandge Degree College, Bhalki",
      paragraphs: [
        "Nirmala M. Halmandge Degree College, Bhalki, Bidar is one of the well-established colleges dedicated to providing quality higher education under the guidance of its managing body. Inspired by the vision of delivering accessible and value-based education, the institution strives to uplift students, especially from rural and backward regions of Bidar district.",
        "The college works with the noble objective of empowering youth through education and creating opportunities for the common masses residing in rural areas. Under the able leadership and guidance of the management and academic heads, the institution continues to grow academically and socially.",
        "Now the College has grant-in-aid institution status and is affiliated to a recognized university. The college is located in the rural area of Bhalki, Bidar, and extends its jurisdiction to nearly twenty-seven nearby villages, providing higher education opportunities to deserving students from surrounding regions."
      ],
      image: "./images/college.webp"
    },
    principalTeaser: {
      eyebrow: "From the Principal's desk",
      heading: "Principal's Message",
      paragraphs: [
        "We feel proud to provide quality education by equipping our students with knowledge, skills, confidence, and a positive approach towards life, ensuring their overall development. Along with academic excellence, we strongly encourage participation in sports and cultural activities while upholding high values and ethics.",
        "I am proud to say that our students are performing excellently in academics, sports, and cultural activities, reflecting discipline, dedication, and strong moral values. The Management is highly supportive and committed to the holistic development of both students and faculty."
      ],
      signoff: "My good wishes to all.",
      cta: { label: "Read More", href: "principle-message.html" },
      image: "./images/men-avatar.webp"
    },
    aboutBanner: {
      heading: "Nirmala M Halmandge Degree College Bhalki — Choose the NMH Experience",
      paragraphs: [
        "Nirmala M. Halmandge Degree College, Bhalki, Bidar is one of the well-established colleges dedicated to providing quality higher education under the guidance of its managing body. Inspired by the vision of delivering accessible and value-based education, the institution strives to uplift students, especially from rural and backward regions of Bidar district.",
        "We are diverse, welcoming, accepting and passionate about being the best we can be. Join us to make your college experience unforgettable."
      ],
      image: "./images/banner1.webp"
    },
    coursesSection: {
      eyebrow: "Programs",
      heading: "Our Courses",
      sub: "A choice that makes the difference."
    },
    facilitiesSection: {
      eyebrow: "Campus Life",
      heading: "Our Facilities",
      sub: "We offer well-equipped, world-class facilities."
    },
    stats: [
      { value: "27+", label: "Villages served" },
      { value: "2", label: "Degree programs" },
      { value: "20+", label: "Years of service" },
      { value: "100%", label: "Grant-in-aid status" }
    ]
  },

  /* ============================================================
     ABOUT PAGE
  ============================================================ */
  about: {
    pageTitle: "About College",
    breadcrumb: "About",
    eyebrow: "Arts & Commerce College",
    heading: "About Nirmala M Halmandge Degree College, Bhalki",
    paragraphs: [
      "Nirmala M. Halmandge Degree College, Bhalki, Bidar is one of the well-established colleges dedicated to providing quality higher education under the guidance of its managing body. Inspired by the vision of delivering accessible and value-based education, the institution strives to uplift students, especially from rural and backward regions of Bidar district.",
      "The college works with the noble objective of empowering youth through education and creating opportunities for the common masses residing in rural areas. Under the able leadership and guidance of the management and academic heads, the institution continues to grow academically and socially.",
      "Now the College has grant-in-aid institution status and is affiliated to a recognized university. The college is located in the rural area of Bhalki, Bidar, and extends its jurisdiction to nearly twenty-seven nearby villages, providing higher education opportunities to deserving students from surrounding regions.",
      "Over the years, the institution has built a reputation for discipline, academic sincerity, and care for every student who walks through its doors — many of whom are first-generation college-goers from farming families in the surrounding villages."
    ],
    image: "./images/college.webp",
    secondaryImage: "./images/Computer-Lab-scaled.webp",
    highlights: [
      { title: "Grant-in-Aid Status", text: "Recognized and supported institution affiliated to a recognized university." },
      { title: "Rural Reach", text: "Serving deserving students from nearly 27 villages around Bhalki." },
      { title: "Holistic Growth", text: "Academics balanced with sports, culture, and values-based development." }
    ]
  },

  /* ============================================================
     PRINCIPAL MESSAGE PAGE
  ============================================================ */
  principal: {
    pageTitle: "Principal's Message",
    breadcrumb: "Principal Message",
    name: "Principal",
    role: "Nirmala M Halmandge Degree College, Bhalki",
    image: "./images/men-avatar.webp",
    paragraphs: [
      "We feel proud to provide quality education by equipping our students with knowledge, skills, confidence, and a positive approach towards life, ensuring their overall development. Along with academic excellence, we strongly encourage participation in sports and cultural activities while upholding high values and ethics.",
      "I am proud to say that our students are performing excellently in academics, sports, and cultural activities, reflecting discipline, dedication, and strong moral values. The Management is highly supportive and committed to the holistic development of both students and faculty.",
      "Our teachers are dedicated and sincere in nurturing young minds by imparting knowledge effectively. They play the dual role of facilitators and role models, guiding students toward success and responsible citizenship. The non-teaching staff members are equally devoted and work with complete commitment toward achieving our mission and institutional goals.",
      "Taking into account our academic achievements, infrastructure, co-curricular and extracurricular activities, and overall growth, we truly believe that nothing is impossible. This belief is the secret behind our success."
    ],
    signoff: "My good wishes to all."
  },

  /* ============================================================
     VISION & MISSION PAGE
  ============================================================ */
  visionMission: {
    pageTitle: "Vision & Mission",
    breadcrumb: "Vision & Mission",
    image: "./images/vm.png",
    vision: {
      heading: "Our Vision",
      text: "To be a center of excellence in higher education that empowers students from rural and underserved communities around Bhalki with knowledge, character, and confidence to shape their own futures and contribute meaningfully to society."
    },
    mission: {
      heading: "Our Mission",
      points: [
        "Provide accessible, value-based higher education to students from Bhalki and the surrounding 27 villages of Bidar district.",
        "Maintain high academic standards across Commerce and Science programs through dedicated, qualified faculty.",
        "Encourage holistic development through sports, cultural activities, and co-curricular programs alongside academics.",
        "Uphold discipline, ethics, and strong moral values as the foundation of every student's growth.",
        "Support first-generation learners and economically backward students in completing quality degree education.",
        "Continue to grow institutional infrastructure and academic offerings in service of the local community."
      ]
    },
    values: [
      { title: "Accessibility", text: "Education reaching every village within our jurisdiction, regardless of background." },
      { title: "Integrity", text: "Discipline and ethics woven into academics, sports, and campus life." },
      { title: "Excellence", text: "Consistent academic performance driven by dedicated teaching staff." },
      { title: "Community", text: "A college that grows together with the rural communities it serves." }
    ]
  },

  /* ============================================================
     COURSES — B.COM
  ============================================================ */
  bcom: {
    pageTitle: "Bachelor of Commerce (B.Com)",
    breadcrumb: "Courses Offered / B.Com",
    image: "./images/Bcom.webp",
    duration: "3 Years (6 Semesters)",
    eligibility: "Pass in 2nd PUC / 12th Standard (any stream) from a recognized board.",
    overview: "The Bachelor of Commerce (B.Com) program builds a strong foundation in accounting, finance, business law, taxation, and management principles. Designed to prepare students for careers in banking, accounting, taxation, and business administration, the course also lays the groundwork for further studies such as M.Com, CA, CS, and CMA.",
    highlights: [
      "Strong grounding in financial and cost accounting",
      "Practical exposure to taxation and business law",
      "Computer applications in business integrated into the curriculum",
      "Guidance for competitive exams and professional courses (CA/CS/CMA)",
      "Internship and project work in the final year"
    ],
    subjects: [
      "Financial Accounting", "Business Law", "Corporate Accounting",
      "Income Tax", "Business Statistics", "Banking & Insurance",
      "Cost Accounting", "Business Management", "Computer Applications in Business", "Auditing"
    ],
    careers: [
      "Bank & Insurance Sector", "Accounting & Taxation", "Government Examinations",
      "Higher Studies (M.Com, MBA)", "Professional Courses (CA, CS, CMA)", "Entrepreneurship"
    ]
  },

  /* ============================================================
     COURSES — B.SC
  ============================================================ */
  bsc: {
    pageTitle: "Bachelor of Science (B.Sc.)",
    breadcrumb: "Courses Offered / B.Sc.",
    image: "./images/Bsc.webp",
    duration: "3 Years (6 Semesters)",
    eligibility: "Pass in 2nd PUC / 12th Standard with Science subjects from a recognized board.",
    overview: "The Bachelor of Science (B.Sc.) program offers students a rigorous foundation in the physical and life sciences through structured theory and well-equipped laboratory work. The course nurtures analytical thinking and scientific temperament, preparing students for further academic research, teaching careers, and science-based employment.",
    highlights: [
      "Well-equipped Physics, Chemistry, and Biology / Mathematics laboratories",
      "Emphasis on practical, hands-on experimentation",
      "Foundation for higher studies (M.Sc., B.Ed, research)",
      "Faculty mentorship for competitive and entrance examinations",
      "Field visits and science exhibitions"
    ],
    subjects: [
      "Physics", "Chemistry", "Mathematics", "Botany", "Zoology",
      "Computer Science", "Electronics", "Environmental Science"
    ],
    careers: [
      "Higher Studies (M.Sc., Research)", "Teaching & Academia", "Laboratory & Technical Roles",
      "Government Science Examinations", "B.Ed & Education Sector", "IT & Computer Applications"
    ]
  },

  /* ============================================================
     TEACHING STAFF
  ============================================================ */
  teachingStaff: {
    pageTitle: "Teaching Staff",
    breadcrumb: "Faculty & Staff / Teaching Staff",
    intro: "Our teachers are dedicated and sincere in nurturing young minds by imparting knowledge effectively. They play the dual role of facilitators and role models, guiding students toward success and responsible citizenship.",
    members: [
      {  image: "./images/men-avatar.webp" },
      {  image: "./images/men-avatar.webp" },
      {  image: "./images/men-avatar.webp" },
      {  image: "./images/men-avatar.webp" },
   
    ]
  },

  /* ============================================================
     NON-TEACHING STAFF
  ============================================================ */
  nonTeachingStaff: {
    pageTitle: "Non-Teaching Staff",
    breadcrumb: "Faculty & Staff / Non-Teaching Staff",
    intro: "The non-teaching staff members are equally devoted and work with complete commitment toward achieving our mission and institutional goals — from office administration to library and laboratory support.",
    members: [
      {  image: "./images/men-avatar.webp" },
      {  image: "./images/men-avatar.webp" },
      {  image: "./images/men-avatar.webp" },
      {  image: "./images/men-avatar.webp" },
    ]
  },

  /* ============================================================
     DEPARTMENTS — B.COM
  ============================================================ */
  deptCommerce: {
    pageTitle: "Department of Commerce",
    breadcrumb: "Departments / B.Com",
    image: "./images/Bcom.webp",
    about: "The Department of Commerce is one of the founding departments of the college, offering the Bachelor of Commerce (B.Com) program. The department focuses on building strong fundamentals in accounting, finance, taxation, and business management, preparing students for both employment and higher studies.",
    objectives: [
      "Build a strong conceptual foundation in commerce and accounting",
      "Develop practical skills in taxation, auditing, and business law",
      "Encourage participation in commerce associations and seminars",
      "Prepare students for competitive examinations and professional courses"
    ],
    faculty: [
    {  image: "./images/men-avatar.webp" },
  {  image: "./images/men-avatar.webp" },
{  image: "./images/men-avatar.webp" },],

    facilities: [
      "Dedicated commerce classroom with audio-visual aids",
      "Commerce reference section in the library",
      "Computer lab access for business applications practice"
    ]
  },

  /* ============================================================
     DEPARTMENTS — B.SC
  ============================================================ */
  deptScience: {
    pageTitle: "Department of Science",
    breadcrumb: "Departments / B.Sc.",
    image: "./images/Bsc.webp",
    about: "The Department of Science offers the Bachelor of Science (B.Sc.) program with well-equipped laboratories in Physics, Chemistry, Botany, and Zoology. The department emphasizes hands-on experimentation alongside strong theoretical grounding, encouraging scientific curiosity in every student.",
    objectives: [
      "Provide hands-on laboratory training across all science combinations",
      "Cultivate scientific temperament and analytical thinking",
      "Encourage participation in science exhibitions and field studies",
      "Prepare students for higher studies and research opportunities"
    ],
    faculty: [
     {  image: "./images/men-avatar.webp" },
  {  image: "./images/men-avatar.webp" },
    ],
    facilities: [
      "Physics, Chemistry, Botany & Zoology laboratories",
      "Charts, models, and specimen collections for practical learning",
      "Regular field visits and science exhibitions"
    ]
  },

  /* ============================================================
     COURSES (shared cards used on Home + Courses pages)
  ============================================================ */
  courses: [
    {
      title: "Bachelor of Commerce (B.Com)",
      short: "Accounting, finance, taxation & business management.",
      image: "./images/Bcom.webp",
      href: "bechelorof-commerese.html"
    },
    {
      title: "Bachelor of Science (B.Sc.)",
      short: "Physics, Chemistry, Botany, Zoology & Mathematics.",
      image: "./images/Bsc.webp",
      href: "bechelorof-science.html"
    }
  ],

  /* ============================================================
     FACILITIES PAGE
  ============================================================ */
  facilities: {
    pageTitle: "Facilities",
    breadcrumb: "Facilities",
    intro: "We offer well-equipped, world-class facilities to support every aspect of student life — from rigorous lab work to sport, culture, and quiet study.",
    list: [
      {
        title: "Library",
        text: "A well-stocked library with textbooks, reference material, and a dedicated reading hall for quiet, focused study.",
        image: "./images/library.webp"
      },
      {
        title: "Science Laboratories",
        text: "Fully equipped Physics, Chemistry, Botany, and Zoology laboratories supporting hands-on, practical learning.",
        image: "./images/Scince.webp"
      },
      {
        title: "Computer Lab",
        text: "A dedicated computer lab supporting business applications, basic programming, and digital literacy for all students.",
        image: "./images/Computer-Lab-scaled.webp"
      },
      {
        title: "Spacious Classrooms",
        text: "Bright, ventilated, and spacious classrooms designed for comfortable learning throughout the academic year.",
        image: "./images/Spacious-Classrooms-1.webp"
      },
      {
        title: "Sports & Physical Education",
        text: "Dedicated grounds and equipment encouraging student participation in athletics, kabaddi, volleyball, and more.",
        image: "./images/Sports-Physical-Education.webp"
      },
      {
        title: "Cultural Activities",
        text: "Regular cultural events, competitions, and celebrations that nurture talent beyond the classroom.",
        image: "./images/Cultural-Activities.webp"
      }
    ]
  },

  /* ============================================================
     GALLERY PAGE
  ============================================================ */
  gallery: {
    pageTitle: "Gallery",
    breadcrumb: "Gallery",
    intro: "A glimpse of campus life — academics, sports, culture, and everyday moments at NMH Degree College, Bhalki.",
    categories: ["All", "Campus", "Events", "Sports", "Academics"],
    images: [
      { src: "./images/college.webp", category: "Campus", caption: "College main building" },
      { src: "./images/Computer-Lab-scaled.webp", category: "Academics", caption: "Classroom session" },
      { src: "./images/Cultural-Activities.webp", category: "Events", caption: "Annual day celebration" },
      { src: "./images/library.webp", category: "Sports", caption: "Annual sports meet" },
      { src: "./images/Scince.webp", category: "Academics", caption: "Science laboratory practical" },
      { src: "./images/Spacious-Classrooms-1.webp", category: "Campus", caption: "College library" },
      { src: "./images/Sports-Physical-Education.webp", category: "Events", caption: "Cultural program" },
      { src: "./images/Bcom.webp", category: "Sports", caption: "Inter-college tournament" },
      { src: "./images/Bsc.webp", category: "Campus", caption: "Campus grounds" },
      { src: "./images/banner1.webp", category: "Academics", caption: "Computer lab session" },
      { src: "./images/men-avatar.webp", category: "Events", caption: "Guest lecture" },
    ]
  },

  /* ============================================================
     CONTACT PAGE
  ============================================================ */
  contact: {
    pageTitle: "Contact Us",
    breadcrumb: "Contact",
    intro: "We'd love to hear from you. Reach out for admissions, academic queries, or general information.",
    officeHours: "Monday – Saturday, 10:00 AM – 5:00 PM",
    image: "./images/page-title-img.webp"
  }
};

// Expose globally for plain-script pages
window.SITE = SITE;
