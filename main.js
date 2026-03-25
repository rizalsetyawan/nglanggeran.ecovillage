/* ============================================================
   NGLANGGERAN ECO-VILLAGE — main.js
   ============================================================ */

/* ── TRANSLATIONS ── */
const translations = {
  en: {
    nav_concept:   "Concept",
    nav_about:     "Story",
    nav_villas:    "Villas",
    nav_amenities: "What's Here",
    nav_contact:   "Contact",

    hero_eyebrow: "Eco-Village · Yogyakarta, Indonesia",
    hero_sub:     "Six villas along the river in Nglanggeran — surrounded by plantations, open spaces, and the quiet rhythm of village life.",
    hero_cta:     "Inquire Now",

    concept_label: "Our Concept",
    concept_title: "Stay by the river, wake up to nature.",
    concept_body:  "Nglanggeran Eco-Village sits on the edge of a river in Gunung Kidul's highlands. We built the villas to fit the land — not the other way around. The river runs right through the property, and the surrounding plantations give the whole place its character.",
    concept_body2: "It's a place for gatherings, retreats, or just getting away from the city for a while. Simple as that.",

    about_label: "Our Story",
    about_title: "Started with a piece of land.",
    about_body1: "Nglanggeran Eco-Village started when a family in Gunung Kidul decided to do something with their riverside land. Instead of selling it off, they built a handful of villas — each one placed along the river, each one different. The idea was straightforward: give people a place to stay that actually feels like being somewhere.",
    about_body2: "The property sits among plantations — cacao, clove, fruit trees — with the river cutting through the middle. We kept the trees that were already here and built around them. The villas are spaced out so you've got privacy, but you're never far from the water.",
    about_body3: "Now it's become a spot people come back to — families, groups of friends, small retreats. The space works for gatherings, celebrations, or just a few quiet days. There's nothing fancy about it, but that's kind of the point.",

    stat1: "Riverfront villas",
    stat2: "River running through",
    stat3: "Reasons to come back",
    stat4: "City noise",

    am_label: "What's Here",
    am_title: "Simple things, done right.",
    am_sub:   "We don't try to be everything. Here's what we've got, and it's enough.",
    am1_title: "Riverfront Villas",
    am1_desc:  "Six villas spread along the river, each with its own layout and feel. You'll hear the water from your bed. Sleeps two to six guests per villa.",
    am2_title: "River Access",
    am2_desc:  "The river runs right through the property. Step out of your villa and you're there — good for a morning dip or just sitting by the water with a coffee.",
    am3_title: "Local Dining",
    am3_desc:  "Meals made with ingredients from the surrounding plantations and local markets. Nothing complicated — just honest Javanese food served on the terrace by the river.",
    am4_title: "Plantation Grounds",
    am4_desc:  "The property sits among cacao, clove, and fruit tree plantations. Walk through the gardens, pick a rambutan, or just enjoy the shade. It's all open to guests.",
    am5_title: "Multi-Purpose Space",
    am5_desc:  "A flexible open area for gatherings, small events, workshops, or team retreats. Bring your own agenda — we'll handle the space and the setup.",
    am6_title: "Village Life",
    am6_desc:  "Walk through the village, visit the local market, or chat with the neighbors. This isn't a resort — it's a real place, and that's what makes it interesting.",

    villas_label: "The Collection",
    villas_title: "Six villas, one river.",
    villas_sub:   "Each villa has its own character — different layout, different view — but they all share the same river and the same quiet.",
    villa1: "Villa Trembesi",
    villa2: "Villa Mahoni",
    villa3: "Villa Sengon",
    villa4: "Villa Sonokeling",
    villa5: "Villa Damar",
    villa6: "Villa Ulin",
    villa_book: "Book on Airbnb",

    bv1_detail: "Riverside · 4 guests",
    bv2_detail: "Riverside · 4 guests",
    bv3_detail: "Garden · 4 guests",
    bv4_detail: "Riverside · 4 guests",
    bv5_detail: "Riverside · 4 guests",
    bv6_detail: "Riverside · 4 guests",

    booking_label: "Reservations",
    booking_title: "Reserve your retreat.",
    booking_desc: "Select a villa and book directly through Airbnb, or send us an inquiry for personalised arrangements.",
    booking_or: "OR",
    booking_form_heading: "Send an Inquiry",
    form_name: "Full Name",
    form_email: "Email",
    form_phone: "Phone Number",
    form_villa: "Select Villa",
    form_villa_placeholder: "Choose a villa…",
    form_checkin: "Check-in",
    form_checkout: "Check-out",
    form_guests: "Guests",
    form_message: "Message",
    form_submit: "Send Inquiry",
    form_success: "Thank you! We'll respond within 24 hours.",

    quote: '"The best mornings start with the sound of the river."',

    exp_label: "What It's Like",
    exp_title: "Slow days, good company.",
    exp_body:  "No schedule, no program. Just the river, the gardens, and as much time as you want. Wake up when you feel like it, eat when you're hungry, explore when you're curious.",
    feat1: "Riverside villas with direct water access",
    feat2: "Plantation walks through cacao, clove, and fruit trees",
    feat3: "Multi-purpose space for events and gatherings",
    feat4: "Local Javanese meals on the terrace",
    feat5: "Village walks and local market visits",

    contact_label:          "Get in Touch",
    contact_title:          "Let's connect.",
    contact_body:           "Got questions about the villas, availability, or events? Reach out — we're happy to help.",
    contact_location_label: "Location",
    contact_location_value: "Karang Sari, Nglanggeran, Kec. Patuk, Kabupaten Gunung Kidul, Yogyakarta",
    contact_map_link:       "Come find us on the map →",
    contact_cs_label:       "Customer Service",
    contact_social_label:   "Social Media",
    copt_email_label: "Email us",
    copt_wa_label:    "WhatsApp",
    copt_ig_label:    "Instagram",
    copt_tiktok_label: "TikTok",

    footer_copy:    "© 2026 Nglanggeran Eco-Village. All rights reserved.",
    footer_terms:   "Terms & Service",
    footer_contact: "Contact",
    terms_title:    "Terms of Service",
  },

  id: {
    nav_concept:   "Konsep",
    nav_about:     "Cerita",
    nav_villas:    "Vila",
    nav_amenities: "Fasilitas",
    nav_contact:   "Kontak",

    hero_eyebrow: "Eco-Village · Yogyakarta, Indonesia",
    hero_sub:     "Enam vila di tepi sungai Nglanggeran — dikelilingi perkebunan, ruang terbuka, dan kehidupan desa yang tenang.",
    hero_cta:     "Hubungi Kami",

    concept_label: "Konsep Kami",
    concept_title: "Tinggal di tepi sungai, bangun bersama alam.",
    concept_body:  "Nglanggeran Eco-Village berada di tepi sungai di dataran tinggi Gunung Kidul. Vila-vila dibangun menyesuaikan lahan — bukan sebaliknya. Sungai mengalir tepat di tengah properti, dan perkebunan di sekitarnya memberi karakter tersendiri.",
    concept_body2: "Tempat untuk berkumpul, retreat, atau sekadar melepas penat dari kota. Sesederhana itu.",

    about_label: "Kisah Kami",
    about_title: "Bermula dari sebidang tanah.",
    about_body1: "Nglanggeran Eco-Village bermula saat sebuah keluarga di Gunung Kidul memutuskan untuk mengelola lahan mereka di tepi sungai. Alih-alih menjualnya, mereka membangun beberapa vila — masing-masing menghadap sungai, masing-masing berbeda. Idenya sederhana: beri orang tempat menginap yang benar-benar terasa seperti berada di suatu tempat.",
    about_body2: "Properti ini berada di antara perkebunan — kakao, cengkeh, pohon buah — dengan sungai membelah di tengahnya. Pohon-pohon yang sudah ada tetap dipertahankan dan vila dibangun mengelilinginya. Jaraknya cukup untuk privasi, tapi selalu dekat dengan air.",
    about_body3: "Sekarang tempat ini jadi langganan orang untuk kembali — keluarga, rombongan teman, retreat kecil. Ruangnya cocok untuk acara, perayaan, atau sekadar beberapa hari yang tenang. Tidak ada yang mewah, dan justru itu daya tariknya.",

    stat1: "Vila tepi sungai",
    stat2: "Sungai mengalir",
    stat3: "Alasan untuk kembali",
    stat4: "Kebisingan kota",

    am_label: "Apa Saja di Sini",
    am_title: "Hal sederhana, dilakukan dengan benar.",
    am_sub:   "Kami tidak berusaha jadi segalanya. Inilah yang kami punya, dan ini cukup.",
    am1_title: "Vila Tepi Sungai",
    am1_desc:  "Enam vila tersebar di sepanjang sungai, masing-masing dengan tata letak dan suasana sendiri. Suara air terdengar dari tempat tidur. Menampung dua hingga enam tamu per vila.",
    am2_title: "Akses Sungai",
    am2_desc:  "Sungai mengalir tepat di tengah properti. Keluar dari vila dan kamu sudah di sana — pas untuk berendam pagi atau sekadar duduk di tepi air dengan kopi.",
    am3_title: "Masakan Lokal",
    am3_desc:  "Makanan dari bahan perkebunan sekitar dan pasar lokal. Tidak ribet — masakan Jawa yang jujur, disajikan di teras tepi sungai.",
    am4_title: "Area Perkebunan",
    am4_desc:  "Properti ini dikelilingi perkebunan kakao, cengkeh, dan pohon buah. Jalan-jalan di kebun, petik rambutan, atau nikmati teduhnya. Semuanya terbuka untuk tamu.",
    am5_title: "Ruang Serbaguna",
    am5_desc:  "Area terbuka yang fleksibel untuk kumpul-kumpul, acara kecil, workshop, atau retreat tim. Bawa acaramu — kami yang urus tempatnya.",
    am6_title: "Kehidupan Desa",
    am6_desc:  "Jalan-jalan di desa, kunjungi pasar lokal, atau ngobrol dengan tetangga. Ini bukan resor — ini tempat nyata, dan itu yang bikin menarik.",

    villas_label: "Koleksi Vila",
    villas_title: "Enam vila, satu sungai.",
    villas_sub:   "Setiap vila punya karakternya sendiri — beda tata letak, beda pemandangan — tapi semuanya berbagi sungai dan ketenangan yang sama.",
    villa1: "Villa Trembesi",
    villa2: "Villa Mahoni",
    villa3: "Villa Sengon",
    villa4: "Villa Sonokeling",
    villa5: "Villa Damar",
    villa6: "Villa Ulin",
    villa_book: "Pesan di Airbnb",

    bv1_detail: "Tepi sungai · 4 tamu",
    bv2_detail: "Tepi sungai · 4 tamu",
    bv3_detail: "Taman · 4 tamu",
    bv4_detail: "Tepi sungai · 4 tamu",
    bv5_detail: "Tepi sungai · 4 tamu",
    bv6_detail: "Tepi sungai · 4 tamu",

    booking_label: "Reservasi",
    booking_title: "Pesan tempatmu.",
    booking_desc: "Pilih vila dan pesan langsung melalui Airbnb, atau kirim pertanyaan untuk pengaturan khusus.",
    booking_or: "ATAU",
    booking_form_heading: "Kirim Pertanyaan",
    form_name: "Nama Lengkap",
    form_email: "Email",
    form_phone: "Nomor Telepon",
    form_villa: "Pilih Vila",
    form_villa_placeholder: "Pilih vila…",
    form_checkin: "Check-in",
    form_checkout: "Check-out",
    form_guests: "Tamu",
    form_message: "Pesan",
    form_submit: "Kirim Pertanyaan",
    form_success: "Terima kasih! Kami akan merespons dalam 24 jam.",

    quote: '"Pagi terbaik dimulai dengan suara sungai."',

    exp_label: "Seperti Apa Rasanya",
    exp_title: "Hari santai, teman baik.",
    exp_body:  "Tidak ada jadwal, tidak ada program. Hanya sungai, kebun, dan waktu sebanyak yang kamu mau. Bangun sesukamu, makan saat lapar, jelajah saat penasaran.",
    feat1: "Vila tepi sungai dengan akses langsung ke air",
    feat2: "Jalan-jalan perkebunan kakao, cengkeh, dan buah",
    feat3: "Ruang serbaguna untuk acara dan kumpul-kumpul",
    feat4: "Masakan Jawa lokal di teras",
    feat5: "Jalan-jalan desa dan kunjungan pasar lokal",

    contact_label:          "Hubungi Kami",
    contact_title:          "Mari terhubung.",
    contact_body:           "Punya pertanyaan soal vila, ketersediaan, atau acara? Hubungi kami — kami senang membantu.",
    contact_location_label: "Lokasi",
    contact_location_value: "Karang Sari, Nglanggeran, Kec. Patuk, Kabupaten Gunung Kidul, Yogyakarta",
    contact_map_link:       "Temukan kami di peta →",
    contact_cs_label:       "Layanan Pelanggan",
    contact_social_label:   "Media Sosial",
    copt_email_label: "Kirim Email",
    copt_wa_label:    "WhatsApp",
    copt_ig_label:    "Instagram",
    copt_tiktok_label: "TikTok",

    footer_copy:    "© 2026 Nglanggeran Eco-Village. Seluruh hak cipta dilindungi.",
    footer_terms:   "Syarat & Ketentuan",
    footer_contact: "Kontak",
    terms_title:    "Syarat & Ketentuan",
  }
};

/* ── TERMS CONTENT ── */
const termsContent = {
  en: `
    <h3>1. Acceptance of Terms</h3>
    <p>By accessing or using the Nglanggeran Eco-Village website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
    <h3>2. Reservations & Bookings</h3>
    <p>All villa reservations are subject to availability. A booking is only confirmed upon receipt of written confirmation from Nglanggeran Eco-Village.</p>
    <ul>
      <li>A deposit of 50% of the total stay is required to confirm a reservation.</li>
      <li>The remaining balance is due 14 days before arrival.</li>
      <li>Prices are quoted in Indonesian Rupiah (IDR) and are subject to applicable taxes.</li>
    </ul>
    <h3>3. Cancellation Policy</h3>
    <p>Our cancellation policy is as follows:</p>
    <ul>
      <li>Cancellations 30 or more days before arrival: full refund of deposit.</li>
      <li>Cancellations 15–29 days before arrival: 50% refund of deposit.</li>
      <li>Cancellations fewer than 14 days before arrival: no refund.</li>
    </ul>
    <p>We strongly recommend travel insurance to protect against unforeseen circumstances.</p>
    <h3>4. Guest Conduct & Ecological Responsibility</h3>
    <p>Nglanggeran Eco-Village is a living ecosystem. All guests are expected to:</p>
    <ul>
      <li>Respect the natural environment, wildlife, and vegetation at all times.</li>
      <li>Follow all guidelines provided by staff regarding forest trails and conservation zones.</li>
      <li>Refrain from removing any plants, animals, stones, or natural objects from the property.</li>
      <li>Observe quiet hours between 10:00 PM and 7:00 AM.</li>
    </ul>
    <h3>5. Liability</h3>
    <p>Nglanggeran Eco-Village shall not be held liable for any personal injury, loss, or damage to property during your stay, except in cases of proven gross negligence on our part. Guests participate in all nature activities at their own risk.</p>
    <h3>6. Privacy</h3>
    <p>Personal information shared with us through inquiries or bookings is used solely for reservation management and communication. We do not share your data with third parties without your consent.</p>
    <h3>7. Intellectual Property</h3>
    <p>All photography, written content, and branding on this website are the property of Nglanggeran Eco-Village. Reproduction without written permission is prohibited.</p>
    <h3>8. Changes to Terms</h3>
    <p>We reserve the right to update these Terms at any time. Continued use of our services following any changes constitutes acceptance of the revised Terms.</p>
    <h3>9. Contact</h3>
    <p>For questions regarding these Terms, please contact us at <strong>info.econglanggeran@gmail.com</strong> or via WhatsApp at 0859-7516-7695.</p>
  `,
  id: `
    <h3>1. Penerimaan Syarat</h3>
    <p>Dengan mengakses atau menggunakan situs web dan layanan Nglanggeran Eco-Village, Anda menyetujui untuk terikat oleh Syarat & Ketentuan ini.</p>
    <h3>2. Reservasi & Pemesanan</h3>
    <p>Semua reservasi vila tergantung pada ketersediaan. Pemesanan hanya dikonfirmasi setelah menerima konfirmasi tertulis dari Nglanggeran Eco-Village.</p>
    <ul>
      <li>Deposit sebesar 50% dari total menginap diperlukan untuk mengonfirmasi reservasi.</li>
      <li>Sisa saldo jatuh tempo 14 hari sebelum kedatangan.</li>
      <li>Harga dikutip dalam Rupiah Indonesia (IDR) dan tunduk pada pajak yang berlaku.</li>
    </ul>
    <h3>3. Kebijakan Pembatalan</h3>
    <p>Kebijakan pembatalan kami adalah sebagai berikut:</p>
    <ul>
      <li>Pembatalan 30 hari atau lebih sebelum kedatangan: pengembalian deposit penuh.</li>
      <li>Pembatalan 15–29 hari sebelum kedatangan: pengembalian 50% dari deposit.</li>
      <li>Pembatalan kurang dari 14 hari sebelum kedatangan: tidak ada pengembalian dana.</li>
    </ul>
    <p>Kami sangat menyarankan asuransi perjalanan untuk melindungi dari keadaan tak terduga.</p>
    <h3>4. Perilaku Tamu & Tanggung Jawab Ekologis</h3>
    <p>Nglanggeran Eco-Village adalah ekosistem yang hidup. Semua tamu diharapkan untuk:</p>
    <ul>
      <li>Menghormati lingkungan alam, satwa liar, dan vegetasi setiap saat.</li>
      <li>Mengikuti semua panduan staf mengenai jalur hutan dan zona konservasi.</li>
      <li>Tidak mengambil tanaman, hewan, batu, atau benda alami apa pun dari properti.</li>
      <li>Mengamati jam tenang antara pukul 22.00 dan 07.00.</li>
    </ul>
    <h3>5. Tanggung Jawab</h3>
    <p>Nglanggeran Eco-Village tidak bertanggung jawab atas cedera pribadi, kehilangan, atau kerusakan properti selama menginap, kecuali kelalaian berat yang terbukti di pihak kami. Tamu berpartisipasi dalam semua kegiatan alam atas risiko mereka sendiri.</p>
    <h3>6. Privasi</h3>
    <p>Informasi pribadi yang dibagikan melalui pertanyaan atau pemesanan hanya digunakan untuk manajemen reservasi dan komunikasi. Kami tidak membagikan data Anda kepada pihak ketiga tanpa persetujuan Anda.</p>
    <h3>7. Kekayaan Intelektual</h3>
    <p>Semua fotografi, konten tertulis, dan merek di situs web ini adalah milik Nglanggeran Eco-Village. Reproduksi tanpa izin tertulis dilarang.</p>
    <h3>8. Perubahan Syarat</h3>
    <p>Kami berhak memperbarui Syarat ini kapan saja. Penggunaan layanan kami yang berkelanjutan setelah perubahan merupakan penerimaan atas Syarat yang direvisi.</p>
    <h3>9. Kontak</h3>
    <p>Untuk pertanyaan, silakan hubungi kami di <strong>info.econglanggeran@gmail.com</strong> atau melalui WhatsApp di 0859-7516-7695.</p>
  `
};

/* ── LANGUAGE ── */
const deviceLang   = (navigator.language || '').toLowerCase().startsWith('id') ? 'id' : 'en';
let   currentLang  = deviceLang;

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.documentElement.lang = lang;
  document.getElementById('langBtn').textContent = lang === 'en' ? 'ID' : 'EN';
  document.getElementById('termsBody').innerHTML = termsContent[lang];
}

document.getElementById('langBtn').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  applyLang(currentLang);
});

applyLang(currentLang);

/* ── THEME ── */
const html     = document.documentElement;
const iconSun  = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');
const mq       = window.matchMedia('(prefers-color-scheme: dark)');
let   currentTheme = mq.matches ? 'dark' : 'light';

function applyTheme(t) {
  currentTheme = t;
  html.setAttribute('data-theme', t);
  iconSun.style.display  = t === 'dark'  ? 'block' : 'none';
  iconMoon.style.display = t === 'light' ? 'block' : 'none';
}

applyTheme(currentTheme);
document.getElementById('themeBtn').addEventListener('click', () => applyTheme(currentTheme === 'light' ? 'dark' : 'light'));
mq.addEventListener('change', e => applyTheme(e.matches ? 'dark' : 'light'));

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── BOOKING FORM ── */
const bookingForm = document.getElementById('bookingForm');
const formSuccess  = document.getElementById('formSuccess');

function getFormData() {
  return {
    name:     document.getElementById('bkName').value,
    email:    document.getElementById('bkEmail').value,
    phone:    document.getElementById('bkPhone').value,
    villa:    document.getElementById('bkVilla').value,
    checkin:  document.getElementById('bkCheckin').value,
    checkout: document.getElementById('bkCheckout').value,
    guests:   document.getElementById('bkGuests').value,
    message:  document.getElementById('bkMessage').value
  };
}

function showSuccess() {
  bookingForm.style.display = 'none';
  document.querySelector('.booking-form-heading').style.display = 'none';
  formSuccess.classList.add('show');
}

// Email via Formsubmit.co
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(bookingForm);
    fetch(bookingForm.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(() => showSuccess())
      .catch(() => showSuccess());
  });
}

/* ── TERMS MODAL ── */
function openTerms() {
  document.getElementById('termsModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeTerms() {
  document.getElementById('termsModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal when clicking the backdrop
document.getElementById('termsModal').addEventListener('click', function(e) {
  if (e.target === this) closeTerms();
});
