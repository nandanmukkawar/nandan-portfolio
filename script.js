// --- Simple nav toggle for mobile ---
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("nav-open");
    });
  }
});

// --- i18n (multi-language) support ---

const translations = {
  en: {
    hero_kicker: "Salesforce • AI • RevOps",
    hero_title: "I help companies transform Salesforce into a smarter, AI-powered revenue engine.",
    hero_subtitle:
      "I’m <strong>Nandan Mukkawar</strong> — Salesforce & AI Consultant focused on automation, commercial operations, and CRM modernization. Open to roles in Bangkok and global freelance projects.",
    hero_cta_primary: "Book a Call",
    hero_cta_secondary: "View My Work",
    trusted_by:
      "Trusted by teams at <strong>Accenture</strong> and <strong>WillsCot</strong>, collaborating with stakeholders across sales, marketing, and commercial operations.",
    contact_intro:
      "Open to Salesforce consulting and AI + CRM roles in Bangkok, as well as global freelance and project-based engagements.",
    contact_location:
      "<strong>Location:</strong> Based in Pune, India • Open to relocation to Bangkok & remote work"
  },
  th: {
    hero_kicker: "Salesforce • AI • งานเชิงพาณิชย์",
    hero_title: "ผมช่วยให้บริษัทใช้ Salesforce เป็นเครื่องมือสร้างรายได้ที่ชาญฉลาดด้วย AI",
    hero_subtitle:
      "ผมคือ <strong>Nandan Mukkawar</strong> ที่ปรึกษา Salesforce และ AI โฟกัสด้านอัตโนมัติ การดำเนินงานเชิงพาณิชย์ และการพัฒนา CRM ให้ทันสมัย เปิดรับโอกาสทำงานที่กรุงเทพฯ และโปรเจกต์ฟรีแลนซ์ทั่วโลก",
    hero_cta_primary: "นัดคุย 30 นาที",
    hero_cta_secondary: "ดูผลงานของผม",
    trusted_by:
      "ได้รับความไว้วางใจจากทีมที่ <strong>Accenture</strong> และ <strong>WillsCot</strong> ทำงานร่วมกับผู้มีส่วนเกี่ยวข้องทั้งฝ่ายขาย การตลาด และการดำเนินงาน",
    contact_intro:
      "เปิดรับงานที่เกี่ยวกับ Salesforce, AI + CRM ในกรุงเทพฯ รวมถึงงานฟรีแลนซ์และโปรเจกต์จากต่างประเทศ",
    contact_location:
      "<strong>ที่ตั้ง:</strong> พักอยู่ที่ Pune, India • เปิดรับโอกาสย้ายมาทำงานที่กรุงเทพฯ และงานรีโมต"
  }
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) {
      el.innerHTML = translation;
    }
  });

  // toggle active state on language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // optionally update <html lang="...">
  document.documentElement.setAttribute("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // language buttons
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // default language
  setLanguage("en");

  // year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
