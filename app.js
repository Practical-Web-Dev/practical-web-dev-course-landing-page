// ============================
// COURSE CONFIG (SWAP-AND-GO)
// ============================
const course_config = {
  course_title: "Complete Web Developer",
  eyebrow: "COURSE",
  course_subtitle: "Learn a high income skill that scales forever.",

  bullets: [
    "Train a real, in-demand skill that companies, clients, and businesses pay for — not theory you forget in a week",
    "Build 20+ real projects so you can confidently say: “Yes, I can actually do this”",
    "Create technical leverage that compounds for life — salary, freelance income, or your own digital empire"
  ],

  meta_hours: "40+",
  meta_lessons: "444",

  price: "$50",
  price_note: "one-time purchase",

  guarantee_note: "7-day no-BS refund policy.",
  refund_text: "Yes. 7 days. If it’s not for you, request a refund.",

  trust_text: "Built by Practical Web Dev. No hype. Just results and standards.",

  testimonials_title: "Real students. Real results.",
  testimonials_subtitle: "These are real messages from people actually building — not scrolling, not daydreaming.",

  testimonials: [
    {
      name: "@deananderson79",
      source: "YouTube comment",
      text:
        "Hey Nick! I just wanna say I started your full stack course and man it is amazing. I am honestly learning so much. I really like the way you teach JavaScript — you make it really simple for a beginner to understand. Hope to talk to you in the future buddy keep making this channel great!"
    },
    {
      name: "Nehemias Serrano",
      source: "Student email",
      text:
        "I canceled the monthly, thanks. Also, if this is prac web dev, I'm extremely enjoying your course. I just finished the CSS portion and before I go to Javascript, I am taking your advice and building my own site. Is there any chance I can send you the finished product to get feed back? I understand you're busy, so it would be when you have time of course. Thanks again for your class. It's pretty amazing."
    }
  ],

  details: [
    "“Instant access after purchase.”",
    "Watch on phone, tablet, or desktop",
    "High Quality HD Video"
  ],

  features: [
    "You’ll learn HTML, CSS, JavaScript, PHP, and MySQL the right way — from the ground up. No skipping fundamentals. No magic frameworks hiding what’s really happening. You’ll understand how the web actually works so you can adapt, debug, and build anything.",
    "You won’t just write code — you’ll think like a developer. How data flows. How systems talk to each other. How frontends connect to backends. The kind of understanding that lets you solve problems instead of Googling symptoms.",
    "This course is built around execution. You’ll build 20+ real projects from scratch, make mistakes, fix them, and ship working applications — so when it’s time to get paid, you’re calm, capable, and confident.",
    "You’ll learn how to structure projects cleanly, write readable code, and follow standards that scale. Not “just make it work” code — but code that other developers, clients, and employers respect."
  ],

  // put your Teachable checkout link here
  buy_url: "https://susscessandbrawn.teachable.com/purchase?product_id=6483352",

  hero_image: "img/complete-web-dev-thumbnail.webp",

  for_list: [
    "You want a real, bankable skill that increases your income through a 9–5, freelancing, or your own online business.",
    "You learn best by building, not watching theory videos that never translate into real work.",
    "You want to understand how websites and applications actually work end-to-end — so you’re never dependent on templates, no-code tools, or other developers."
  ],

  for_list_2: [
    "You want a real skill that can pay you consistently via a 9-5, freelance, or your own digital business.",
    "You’re ready to stop watching tutorials and actually build projects that make you competent and employable.",
    "You want leverage — a technical skill that can grow your income for years, not a short-term hustle."
  ],

  not_for_list: [
    "You’re looking for instant money without learning the fundamentals or doing the work.",
    "You want shortcuts, AI magic buttons, or “one weird trick” developer success.",
    "You’re not willing to build, break things, debug, and improve — because that’s how real developers are made."
  ],

  final_title: "Stop consuming. Start building.",
  final_subtitle: "You don’t need more information. You need a plan and standards.",
  final_note: "Instant access • lifetime access • start today",

  footer_note: "No fluff. No hype. Just execution.",
  footer_links: {
    terms: "https://successandbrawn.com/terms-of-service/",
    privacy: "https://successandbrawn.com/privacy-policy//",
    contact: "https://successandbrawn.com/contact/"
  }
};

// ============================
// DOM HELPERS
// ============================
function set_text(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function set_href(id, value) {
  const el = document.getElementById(id);
  if (el) el.setAttribute("href", value);
}

function set_src(id, value) {
  const el = document.getElementById(id);
  if (el) el.setAttribute("src", value);
}

function set_list(id, items) {
  const el = document.getElementById(id);
  if (!el || !Array.isArray(items)) return;
  el.innerHTML = "";
  items.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    el.appendChild(li);
  });
}

function set_testimonials(id, items) {
  const el = document.getElementById(id);
  if (!el || !Array.isArray(items)) return;

  el.innerHTML = "";

  items.forEach(function (t) {
    const card = document.createElement("div");
    card.className = "testimonial-card";

    const p = document.createElement("p");
    p.className = "testimonial-text";
    p.textContent = t.text || "";

    const meta = document.createElement("div");
    meta.className = "testimonial-meta";

    const name = document.createElement("p");
    name.className = "testimonial-name";
    name.textContent = t.name || "";

    const source = document.createElement("p");
    source.className = "testimonial-source";
    source.textContent = t.source || "";

    meta.appendChild(name);
    meta.appendChild(source);

    card.appendChild(p);
    card.appendChild(meta);

    el.appendChild(card);
  });
}

// ============================
// APPLY CONFIG
// ============================
(function apply_config() {
  // title
  document.title = course_config.course_title + " | Success & Brawn";

  set_text("course_title", course_config.course_title);
  set_text("eyebrow", course_config.eyebrow);
  set_text("course_subtitle", course_config.course_subtitle);

  set_text("bullet_1", course_config.bullets[0] || "");
  set_text("bullet_2", course_config.bullets[1] || "");
  set_text("bullet_3", course_config.bullets[2] || "");

  set_text("meta_hours", course_config.meta_hours);
  set_text("meta_lessons", course_config.meta_lessons);

  set_text("price", course_config.price);
  set_text("price_note", course_config.price_note);

  set_text("mobile_price", course_config.price);
  set_text("mobile_price_note", course_config.price_note);

  set_text("guarantee_note", course_config.guarantee_note);
  set_text("refund_text", course_config.refund_text);
  set_text("trust_text", course_config.trust_text);

  set_text("testimonials_title", course_config.testimonials_title || "");
  set_text("testimonials_subtitle", course_config.testimonials_subtitle || "");
  set_testimonials("testimonials_grid", course_config.testimonials);

  set_text("detail_1", course_config.details[0] || "");
  set_text("detail_2", course_config.details[1] || "");
  set_text("detail_3", course_config.details[2] || "");

  set_text("feature_1", course_config.features[0] || "");
  set_text("feature_2", course_config.features[1] || "");
  set_text("feature_3", course_config.features[2] || "");
  set_text("feature_4", course_config.features[3] || "");

  set_src("hero_image", course_config.hero_image);

  set_list("for_list", course_config.for_list);
  set_list("for_list_2", course_config.for_list_2);
  set_list("not_for_list", course_config.not_for_list);

  set_text("final_title", course_config.final_title);
  set_text("final_subtitle", course_config.final_subtitle);
  set_text("final_note", course_config.final_note);

  set_text("footer_note", course_config.footer_note);

  set_href("footer_terms", course_config.footer_links.terms);
  set_href("footer_privacy", course_config.footer_links.privacy);
  set_href("footer_contact", course_config.footer_links.contact);

  // CTAs
  const buy = course_config.buy_url;
  set_href("nav_buy_btn", buy);
  set_href("hero_buy_btn", buy);
  set_href("card_buy_btn", buy);
  set_href("mid_buy_btn", buy);
  set_href("final_buy_btn", buy);
  set_href("mobile_buy_btn", buy);

  // year
  set_text("year", String(new Date().getFullYear()));
})();

// ============================
// ACCORDION (CURRICULUM + FAQ)
// ============================
function wire_accordion(container_id) {
  const container = document.getElementById(container_id);
  if (!container) return;

  const items = container.querySelectorAll(".accordion-item");
  items.forEach(function (item) {
    const btn = item.querySelector(".accordion-btn");
    if (!btn) return;

    btn.addEventListener("click", function () {
      item.classList.toggle("is-open");
    });
  });
}

wire_accordion("accordion");
wire_accordion("faq_accordion");

// ============================
// MOBILE STICKY CTA SHOW/HIDE
// Show after user scrolls past hero
// ============================
(function sticky_cta_logic() {
  const sticky = document.getElementById("mobile-sticky-cta");
  const hero = document.querySelector(".hero");
  if (!sticky || !hero) return;

  function toggle_sticky() {
    const hero_bottom = hero.getBoundingClientRect().bottom;
    if (hero_bottom < 0) {
      sticky.style.display = "block";
    } else {
      sticky.style.display = "";
    }
  }

  document.addEventListener("scroll", toggle_sticky, { passive: true });
  toggle_sticky();
})();
