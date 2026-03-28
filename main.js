/* ============================================================
   NGLANGGERAN ECO-VILLAGE — main.js
   ============================================================ */

/* ── TRANSLATIONS ── */
const translations = {
  en: {
    nav_concept: "Concept",
    nav_about: "The Ambience",
    nav_villas: "Villas",
    nav_amenities: "Amenities",
    nav_experience: "What It's Like",
    nav_booking: "Reservation",
    nav_contact: "Contact",

    hero_eyebrow: "Eco-Village · Yogyakarta, Indonesia",
    hero_sub: "Nglanggeran Eco-Village offers a splendid getaway from the hustle and bustle of hypermodern, materialistic city life that gives no meaning and purpose in our existence.",
    hero_cta: "Inquire Now",

    concept_label: "Our Concept",
    concept_title: "Listen closely to the river and awaken the soul in you",
    concept_body: "Nglanggeran Eco-Village sits on the edge of Pentung River in Pathuk, Gunung Kidul, which is only 45 minutes away from the City of Yogyakarta. We offer 10 rustic designed, wooden villas that would surely inspire your creativity and bring you to your wildest imagination about beauty.",
    concept_body2: "It is a tranquil place for an authentic and true experience of living in a Javanese village. Bring your friends, family, relatives and business associates for a meeting, gathering, reunion, team building, party, wedding, or simply to hangout and enjoy a cup of coffee and a decent conversation.",

    about_title: "The Ambience",
    about_body1: "Nglanggeran Eco-Village resides on a coral hill surrounded by a splendidly rich biodiversity such as teakwood trees (tectona grandis), chaya or tree spinach (cnidoscolus aconitifolius), butterfly peas (clitoria ternatea), amaryllis bulbs, etc.",
    about_body2: "Nestled in the prehistoric village of Nglanggeran, the Eco-Village gives the aura of a hidden gem or even a forgotten paradise, where a river flows beneath.",

    stat1: "Riverfront villas",
    stat2: "River running through",
    stat3: "Reasons to come back",
    stat4: "City noise",

    villas_label: "The Collection",
    villas_title: "Ten villas, <em>one community</em>",
    villas_sub: "There are ten villas for rent in the Nglanggeran Eco-Village, which are mostly made from old, recycled teakwood. Three types of villas are available for guests: A-Frames, Javanese traditional Limasan and Gladak houses. Altogether, they form a community that blend harmoniously with the natural setting of the village.",

    villa1: "Villa Trembesi",
    villa2: "Villa Mahoni",
    villa3: "Villa Sengon",
    villa4: "Villa Sonokeling",
    villa5: "Villa Damar",
    villa6: "Villa Ulin",
    villa7: "Villa Jati",
    villa8: "Villa Glugu",
    villa_book: "Book on Airbnb",
    villa_upcoming: "Upcoming on Airbnb",

    quote: "“Each morning begins with the cheerful chirping of the birds and the sound of the gushing river”",

    videos_label: "Visual Stories",
    videos_title: "Experience <em>in motion</em>",
    videos_sub: "A glimpse into the rhythm of life at the Nglanggeran Eco-Village, where blissfulness couples with a sense of contentment.",
    vid1_caption: "The River Path",
    vid2_caption: "The Cafe",
    vid3_caption: "Villa Review",
    vid4_caption: "The Community",

    am_label: "What's Here",
    am_title: "Simplicity is Key to Happiness",
    am_sub: "Live simply, so others can simply live.",
    am1_title: "Riverfront Villas",
    am1_desc: "All the wooden villas face the Pentung River, where huge boulders lay amid the slow current of the water.",
    am2_title: "River Access",
    am2_desc: "Step outside, take a dip and rejuvenate yourself. Feel the gentle warmth of the river passing through your feet as you play in the river.",
    am3_title: "Local Dining",
    am3_desc: "Food and beverages can be served at your terrace villa or the Eco-Café.",
    am4_title: "Eco-Sophy Lane",
    am4_desc: "Walk around the Eco-Village and venture into the Eco-sophy Lane. Reflect and contemplate on what’s truly important in life.",
    am5_title: "Amphitheater",
    am5_desc: "A multi-purpose amphitheater is provided either for outdoor classrooms or as a place for guests to congregate.",
    am6_title: "Village Life",
    am6_desc: "Interact with the friendly local villagers, who would normally walk pass the Eco-Village to find grass for their cattle or to catch fish in the river.",

    exp_label: "What It's Like",
    exp_title: "Slow Living Leads to Meaningful Life",
    exp_body: "Turn off your cell phones for a change. Rest and relax. Smell the flowers and touch the trees. Get through the day by unloading your problems. Activities may include:",
    feat1: "Walking around the Eco-Village",
    feat2: "See the nearby beautiful rock formation called the “Song Canting”",
    feat3: "Plant seeds and distribute some flowers",
    feat4: "Enjoy a cup of butterfly pea tea (teh telang)",
    feat5: "Hug some trees",
    feat6: "Catch fish in the river",
    feat7: "See the butterflies swarming the Chaya trees",
    feat8: "Play some archery (with management supervision)",

    booking_label: "Reservations",
    booking_title: "Reserve your <em>retreat</em>",
    booking_desc: "Select a villa and book directly through Airbnb, or send us an inquiry for personalised arrangements.",
    bv1_detail: "Riverside · 4 - 15 guests",
    bv2_detail: "Riverside · 4 - 20 guests",
    bv3_detail: "Garden · 6 guests",
    bv4_detail: "Riverside · 6 guests",
    bv5_detail: "Riverside · 6 guests",
    bv6_detail: "Riverside · 6 guests",
    bv7_detail: "Riverside · 6 guests",
    bv8_detail: "Garden · 6 guests",
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
    form_message: "Message <span class=\"optional\">(optional)</span>",
    form_submit: "Send Inquiry",
    form_success: "Thank you! We'll respond within 24 hours.",

    contact_label: "Get in Touch",
    contact_title: "Let's <em>connect</em>",
    contact_body: "Got questions about the villas, availability, or events? Reach out — we're happy to help.",
    contact_location_label: "Location",
    contact_location_value: "Karang Sari, Nglanggeran, Kec. Patuk,<br>Kabupaten Gunung Kidul, Yogyakarta",
    contact_map_link: "<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" viewBox=\"0 0 24 24\" style=\"width:1em;height:1em;vertical-align:middle;margin-right:.4em\"><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg>Come find us on the map →",
    contact_cs_label: "Customer Service",
    contact_social_label: "Social Media",
    copt_email_label: "Email us",
    copt_wa_label: "WhatsApp",
    copt_ig_label: "Instagram",
    copt_tiktok_label: "TikTok",

    footer_copy: "© 2026 Nglanggeran Eco-Village. All rights reserved.",
    footer_terms: "Terms & Service",
    footer_contact: "Contact",
    terms_title: "Terms of Service",
  },

  id: {
    nav_concept: "Konsep",
    nav_about: "Suasana",
    nav_villas: "Vila",
    nav_amenities: "Fasilitas",
    nav_experience: "Seperti Apa Rasanya",
    nav_booking: "Reservasi",
    nav_contact: "Kontak",

    hero_eyebrow: "Eco-Village · Yogyakarta, Indonesia",
    hero_sub: "Nglanggeran Eco-Village menawarkan liburan yang luar biasa dari hiruk pikuk kehidupan kota yang hipermodern dan materialistis yang tidak memberikan makna dan tujuan dalam keberadaan kita.",
    hero_cta: "Hubungi Kami",

    concept_label: "Konsep Kami",
    concept_title: "Dengarkan dengan saksama suara sungai dan bangkitkan jiwa di dalam diri Anda",
    concept_body: "Nglanggeran Eco-Village terletak di tepi Sungai Pentung di Pathuk, Gunung Kidul, yang hanya berjarak 45 menit dari Kota Yogyakarta. Kami menawarkan 10 vila kayu berdesain pedesaan yang pastinya akan menginspirasi kreativitas dan membawa imajinasi terliar Anda tentang keindahan.",
    concept_body2: "Tempat yang tenang untuk pengalaman otentik dan nyata tentang kehidupan desa di Jawa. Bawa teman, keluarga, kerabat, dan rekan bisnis Anda untuk rapat, gathering, reuni, team building, pesta, pernikahan, atau sekadar berkumpul menikmati secangkir kopi dan percakapan yang menyenangkan.",

    about_title: "Suasana",
    about_body1: "Nglanggeran Eco-Village berada di bukit karang yang dikelilingi oleh keanekaragaman hayati yang sangat kaya seperti pohon jati (tectona grandis), chaya atau bayam pohon (cnidoscolus aconitifolius), kembang telang (clitoria ternatea), umbi amarilis, dll.",
    about_body2: "Terletak di desa prasejarah Nglanggeran, Eco-Village memancarkan aura permata tersembunyi atau bahkan surga yang terlupakan, di mana sebuah sungai mengalir di bawahnya.",

    stat1: "Vila tepi sungai",
    stat2: "Sungai mengalir",
    stat3: "Alasan untuk kembali",
    stat4: "Kebisingan kota",

    villas_label: "Koleksi Vila",
    villas_title: "Sepuluh vila, <em>satu komunitas</em>",
    villas_sub: "Terdapat sepuluh vila yang disewakan di Nglanggeran Eco-Village, sebagian besar terbuat dari kayu jati tua daur ulang. Tiga jenis vila yang tersedia: Tipe A-Frame, Limasan tradisional Jawa, dan Gladak. Semuanya membentuk komunitas yang selaras dengan suasana alam desa.",

    villa1: "Villa Trembesi",
    villa2: "Villa Mahoni",
    villa3: "Villa Sengon",
    villa4: "Villa Sonokeling",
    villa5: "Villa Damar",
    villa6: "Villa Ulin",
    villa7: "Villa Jati",
    villa8: "Villa Glugu",
    villa_book: "Pesan di Airbnb",
    villa_upcoming: "Segera di Airbnb",

    quote: "“Setiap pagi dimulai dengan kicauan riang burung-burung dan suara deras air sungai”",

    videos_label: "Cerita Visual",
    videos_title: "Pengalaman <em>yang bergerak</em>",
    videos_sub: "Sekilas tentang ritme kehidupan di Nglanggeran Eco-Village, tempat kebahagiaan menyatu dengan rasa kepuasan.",
    vid1_caption: "Jalan Sungai",
    vid2_caption: "Kafe",
    vid3_caption: "Ulasan Vila",
    vid4_caption: "Komunitas",

    am_label: "Apa Saja di Sini",
    am_title: "Kesederhanaan adalah Kunci Kebahagiaan",
    am_sub: "Hiduplah sederhana, agar orang lain juga bisa hidup.",
    am1_title: "Vila Tepi Sungai",
    am1_desc: "Semua vila kayu menghadap Sungai Pentung, tempat batu-batu besar terhampar di tengah arus air yang lambat.",
    am2_title: "Akses Sungai",
    am2_desc: "Langkah keluar, berendam dan segarkan dirimu. Rasakan kehangatan ombak sungai mengalir di kakimu.",
    am3_title: "Makan di Tempat",
    am3_desc: "Makanan dan minuman dapat disajikan di teras vila Anda atau di Eco-Café.",
    am4_title: "Jalur Eco-Sophy",
    am4_desc: "Berjalanlah mengelilingi Eco-Village dan masuklah ke Jalur Eco-sophy. Merenung dan berefleksi tentang yang benar-benar penting dalam hidup.",
    am5_title: "Amfiteater",
    am5_desc: "Amfiteater serbaguna disediakan, dapat digunakan sebagai ruang kelas luar atau tempat tamu berkumpul.",
    am6_title: "Kehidupan Desa",
    am6_desc: "Berinteraksi dengan warga sekitar yang setiap harinya lewat untuk mencari rumput sapi atau menangkap ikan di sungai.",

    exp_label: "Seperti Apa Rasanya",
    exp_title: "Gaya Hidup Lambat ke Kehidupan yang Bermakna",
    exp_body: "Matikan sejenak handphone Anda. Istirahat. Cium bau bunga dan sentuh pohon-pohon. Lepaskan semua masalah Anda dari hari yang lalu. Aktivitas dapat meliputi:",
    feat1: "Berjalan-jalan di area Eco-Village",
    feat2: "Melihat formasi batu cantik “Song Canting”",
    feat3: "Menanam bibit dan menyebarkan bunga",
    feat4: "Nikmati secangkir teh kembang telang",
    feat5: "Peluk beberapa pohon",
    feat6: "Tangkap ikan di sungai",
    feat7: "Saksikan kupu-kupu yang mengerubungi pohon Chaya",
    feat8: "Lakukan panahan (dengan arahan manajemen)",

    booking_label: "Reservasi",
    booking_title: "Pesan <em>liburanmu</em>",
    booking_desc: "Pilih vila dan pesan langsung melalui Airbnb, atau kirim pertanyaan untuk pengaturan khusus.",
    bv1_detail: "Tepi sungai · 4 - 15 tamu",
    bv2_detail: "Tepi sungai · 4 - 20 tamu",
    bv3_detail: "Taman · 6 tamu",
    bv4_detail: "Tepi sungai · 6 tamu",
    bv5_detail: "Tepi sungai · 6 tamu",
    bv6_detail: "Tepi sungai · 6 tamu",
    bv7_detail: "Tepi sungai · 6 tamu",
    bv8_detail: "Taman · 6 tamu",
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
    form_message: "Pesan <span class=\"optional\">(opsional)</span>",
    form_submit: "Kirim Pertanyaan",
    form_success: "Terima kasih! Kami akan merespons dalam 24 jam.",

    contact_label: "Hubungi Kami",
    contact_title: "Mari <em>terhubung</em>",
    contact_body: "Punya pertanyaan soal vila, ketersediaan, atau acara? Hubungi kami — kami senang membantu.",
    contact_location_label: "Lokasi",
    contact_location_value: "Karang Sari, Nglanggeran, Kec. Patuk,<br>Kabupaten Gunung Kidul, Yogyakarta",
    contact_map_link: "<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" viewBox=\"0 0 24 24\" style=\"width:1em;height:1em;vertical-align:middle;margin-right:.4em\"><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg>Temukan kami di peta →",
    contact_cs_label: "Layanan Pelanggan",
    contact_social_label: "Media Sosial",
    copt_email_label: "Kirim Email",
    copt_wa_label: "WhatsApp",
    copt_ig_label: "Instagram",
    copt_tiktok_label: "TikTok",

    footer_copy: "© 2026 Nglanggeran Eco-Village. Hak cipta dilindungi.",
    footer_terms: "Syarat & Ketentuan",
    footer_contact: "Kontak",
    terms_title: "Syarat & Ketentuan"
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
const deviceLang = (navigator.language || '').toLowerCase().startsWith('id') ? 'id' : 'en';
let currentLang = deviceLang;

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.innerHTML = t[k];
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
const html = document.documentElement;
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');
const mq = window.matchMedia('(prefers-color-scheme: dark)');
let currentTheme = mq.matches ? 'dark' : 'light';

function applyTheme(t) {
  currentTheme = t;
  html.setAttribute('data-theme', t);
  iconSun.style.display = t === 'dark' ? 'block' : 'none';
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
const formSuccess = document.getElementById('formSuccess');

function getFormData() {
  return {
    name: document.getElementById('bkName').value,
    email: document.getElementById('bkEmail').value,
    phone: document.getElementById('bkPhone').value,
    villa: document.getElementById('bkVilla').value,
    checkin: document.getElementById('bkCheckin').value,
    checkout: document.getElementById('bkCheckout').value,
    guests: document.getElementById('bkGuests').value,
    message: document.getElementById('bkMessage').value
  };
}

function showSuccess() {
  bookingForm.style.display = 'none';
  document.querySelector('.booking-form-heading').style.display = 'none';
  formSuccess.classList.add('show');
}

// Email via Formsubmit.co
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
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
document.getElementById('termsModal').addEventListener('click', function (e) {
  if (e.target === this) closeTerms();
});

/* ── VILLA SLIDER ── */
(function () {
  const track = document.getElementById('villaTrack');
  if (!track) return;

  const viewport = track.closest('.villa-slider-viewport');
  const cards = Array.from(track.querySelectorAll('.villa-card'));
  const prevBtn = document.getElementById('villaPrev');
  const nextBtn = document.getElementById('villaNext');
  const dotsWrap = document.getElementById('villaDots');
  const bgWrap = document.getElementById('villaSliderBg');   // blur bg container
  const bgImg = document.getElementById('villaSliderBgImg'); // initial bg <img>

  const GAP_PX = 32;   // must match CSS gap (2rem @ 16px = 32px)
  let PER_PAGE = 3;
  let totalPages = 0;
  let currentPage = 0;
  let animating = false;

  /* ─────────────────────────────────────────────
     Ambient blur background crossfade
     ─────────────────────────────────────────────
     Strategy: keep TWO <img> tags in bgWrap.
     The "current" one is visible; when page
     changes we create/update the "next" one,
     fade it in, then remove the old one.
  ───────────────────────────────────────────── */
  let activeBgImg = bgImg; // the currently visible bg image

  function crossfadeBg(newSrc) {
    if (!bgWrap || !newSrc) return;
    if (activeBgImg && newSrc === activeBgImg.getAttribute('src')) return;

    // Ensure the background is visible
    bgWrap.classList.add('bg-ready');

    // Create a new image node
    const next = document.createElement('img');
    next.src = newSrc;
    next.setAttribute('aria-hidden', 'true');
    next.style.cssText = `
      position:absolute; inset:0; width:100%; height:100%;
      object-fit:cover; object-position:center;
      filter:blur(60px) saturate(1.3) brightness(0.55);
      transform:scale(1.12);
      opacity:0;
      transition:opacity 1.1s cubic-bezier(.42,0,.58,1), transform 1.4s cubic-bezier(.42,0,.58,1);
      will-change:opacity,transform;
    `;

    // Append new image to container
    bgWrap.appendChild(next);

    // Trigger: fade new in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        next.style.opacity = '1';
        next.style.transform = 'scale(1)';
      });
    });

    // Store old image reference before updating
    const old = activeBgImg;
    activeBgImg = next;

    // Clean up old image after transition completes
    if (old && old.parentNode) {
      setTimeout(() => {
        if (old.parentNode) old.parentNode.removeChild(old);
      }, 1400);
    }
  }

  /* ─────────────────────────────────────────────
     Measure card widths from current viewport
  ───────────────────────────────────────────── */
  function getPerPage() {
    return viewport.offsetWidth < 600 ? 1 : (viewport.offsetWidth < 920 ? 2 : 3);
  }

  function measure() {
    PER_PAGE = getPerPage();
    totalPages = Math.ceil(cards.length / PER_PAGE);

    const vw = viewport.offsetWidth;
    const cardW = (vw - GAP_PX * (PER_PAGE - 1)) / PER_PAGE;

    cards.forEach(c => {
      c.style.width = cardW + 'px';
      c.style.flexShrink = '0';
      c.style.marginLeft = '0';
    });

    const remainder = cards.length % PER_PAGE;
    if (remainder > 0 && remainder < PER_PAGE) {
      const emptySpace = (PER_PAGE - remainder) * (cardW + GAP_PX);
      const firstCardOfLastPage = cards[cards.length - remainder];
      firstCardOfLastPage.style.marginLeft = (emptySpace / 2) + 'px';
    }

    // Snap to current page without animation
    const pageW = vw + GAP_PX;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${currentPage * pageW}px)`;
    requestAnimationFrame(() => {
      track.style.transition = 'transform .85s cubic-bezier(.77, 0, .18, 1)';
    });
  }

  /* ─────────────────────────────────────────────
     Build / rebuild pagination dots
  ───────────────────────────────────────────── */
  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Page ${i + 1} of ${totalPages}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  /* ─────────────────────────────────────────────
     Staggered card entrance
  ───────────────────────────────────────────── */
  function animateIn(page) {
    const start = page * PER_PAGE;
    const end = Math.min(start + PER_PAGE, cards.length);

    // Hide all cards on this page first (instant reset)
    for (let i = start; i < end; i++) {
      cards[i].style.transition = 'none';
      cards[i].classList.remove('card-visible');
    }

    // Re-enable transitions and stagger each card
    requestAnimationFrame(() => {
      for (let i = start; i < end; i++) {
        const delay = 60 + (i - start) * 110;   // 60ms, 170ms, 280ms
        ; (function (card, ms) {
          setTimeout(() => {
            card.style.transition = 'opacity .55s var(--ease), transform .55s var(--ease)';
            card.classList.add('card-visible');
          }, ms);
        })(cards[i], delay);
      }
    });
  }

  /* ─────────────────────────────────────────────
     Navigate to page
  ───────────────────────────────────────────── */
  function goTo(page) {
    if (animating) return;
    if (page < 0 || page >= totalPages) return;
    if (page === currentPage) return;

    animating = true;
    currentPage = page;

    const vw = viewport.offsetWidth;
    const pageW = vw + GAP_PX;
    track.style.transform = `translateX(-${currentPage * pageW}px)`;

    // Stagger cards on the new page
    animateIn(currentPage);

    // Crossfade ambient background to the first card of this page
    const firstCard = cards[currentPage * PER_PAGE];
    const imgSrc = firstCard ? firstCard.dataset.img : null;
    crossfadeBg(imgSrc);

    // Update arrow states
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage >= totalPages - 1;

    // Update dots
    dotsWrap.querySelectorAll('.slider-dot').forEach((d, i) =>
      d.classList.toggle('active', i === currentPage)
    );

    setTimeout(() => { animating = false; }, 900);
  }

  /* ─────────────────────────────────────────────
     Event listeners
  ───────────────────────────────────────────── */
  prevBtn.addEventListener('click', () => goTo(currentPage - 1));
  nextBtn.addEventListener('click', () => goTo(currentPage + 1));

  // Resize: re-measure, rebuild dots, re-snap
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const prevPerPage = PER_PAGE;
      measure();
      if (prevPerPage !== PER_PAGE) {
        // Page size changed — clamp and rebuild
        currentPage = Math.min(currentPage, Math.ceil(cards.length / PER_PAGE) - 1);
        buildDots();
        animateIn(currentPage);
      }
    }, 150);
  });

  /* ─────────────────────────────────────────────
     Init
  ───────────────────────────────────────────── */
  measure();
  buildDots();
  animateIn(0);
  prevBtn.disabled = true;
  nextBtn.disabled = totalPages <= 1;

  // Activate initial ambient background
  if (bgWrap && cards.length > 0) {
    const firstCardImg = cards[0].dataset.img;
    if (firstCardImg) {
      const initImg = bgWrap.querySelector('img');
      if (initImg) initImg.src = firstCardImg;
    }
    bgWrap.classList.add('bg-ready');
  }
})();



/* ── VIDEO MODAL ── */
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

const cvPlayBtn = document.getElementById('cvPlayBtn');
const cvCurrentTime = document.getElementById('cvCurrentTime');
const cvDuration = document.getElementById('cvDuration');
const cvProgress = document.getElementById('cvProgress');
const cvMuteBtn = document.getElementById('cvMuteBtn');
const cvVolume = document.getElementById('cvVolume');
const cvZoomOutBtn = document.getElementById('cvZoomOutBtn');

function formatTime(seconds) {
  const m = Math.floor(seconds / 60) || 0;
  const s = Math.floor(seconds % 60) || 0;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function updatePlayIcon() {
  if (!cvPlayBtn) return;
  const playIcon = cvPlayBtn.querySelector('.icon-play');
  const pauseIcon = cvPlayBtn.querySelector('.icon-pause');
  if (modalVideo.paused) {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  } else {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  }
}

function updateVolumeIcon() {
  if (!cvMuteBtn) return;
  const volOn = cvMuteBtn.querySelector('.icon-vol-on');
  const volOff = cvMuteBtn.querySelector('.icon-vol-off');
  if (modalVideo.muted || modalVideo.volume === 0) {
    volOn.style.display = 'none';
    volOff.style.display = 'block';
  } else {
    volOn.style.display = 'block';
    volOff.style.display = 'none';
  }
}

if (modalVideo) {
  if (cvPlayBtn) {
    cvPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      modalVideo.paused ? modalVideo.play() : modalVideo.pause();
    });
  }

  modalVideo.addEventListener('click', (e) => {
    e.stopPropagation();
    modalVideo.paused ? modalVideo.play() : modalVideo.pause();
  });

  modalVideo.addEventListener('play', updatePlayIcon);
  modalVideo.addEventListener('pause', updatePlayIcon);

  modalVideo.addEventListener('loadedmetadata', () => {
    if (cvDuration) cvDuration.textContent = formatTime(modalVideo.duration);
  });

  modalVideo.addEventListener('timeupdate', () => {
    if (cvCurrentTime) cvCurrentTime.textContent = formatTime(modalVideo.currentTime);
    if (cvProgress && modalVideo.duration) {
      cvProgress.value = (modalVideo.currentTime / modalVideo.duration) * 100;
    }
  });

  if (cvProgress) {
    cvProgress.addEventListener('input', (e) => {
      const time = (e.target.value / 100) * modalVideo.duration;
      modalVideo.currentTime = time;
    });
  }

  if (cvMuteBtn) {
    cvMuteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      modalVideo.muted = !modalVideo.muted;
      if (!modalVideo.muted && modalVideo.volume === 0) modalVideo.volume = 0.5;
      if (cvVolume) cvVolume.value = modalVideo.muted ? 0 : modalVideo.volume;
      updateVolumeIcon();
    });
  }

  if (cvVolume) {
    cvVolume.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      modalVideo.volume = val;
      modalVideo.muted = val === 0;
      updateVolumeIcon();
    });
  }

  modalVideo.addEventListener('volumechange', updateVolumeIcon);

  if (cvZoomOutBtn) {
    cvZoomOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeVideoModal();
    });
  }
}

function openVideoModal(src) {
  if (!videoModal || !modalVideo) return;

  // Pause any currently playing inline videos
  document.querySelectorAll('.video-item video').forEach(v => {
    if (!v.paused) {
      v.pause();
      v.muted = true;
      const item = v.closest('.video-item');
      if (item) item.classList.remove('playing');

      const playIcon = item?.querySelector('.icon-play');
      const pauseIcon = item?.querySelector('.icon-pause');
      if (playIcon) playIcon.style.display = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
    }
  });

  modalVideo.src = src;

  modalVideo.volume = 1;
  modalVideo.muted = false;
  if (cvVolume) cvVolume.value = 1;
  updateVolumeIcon();
  if (cvProgress) cvProgress.value = 0;
  if (cvCurrentTime) cvCurrentTime.textContent = '0:00';

  videoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalVideo.play().catch(() => {
    modalVideo.muted = true;
    modalVideo.play();
    updateVolumeIcon();
  });
}

function closeVideoModal() {
  if (!videoModal || !modalVideo) return;
  videoModal.classList.remove('open');
  document.body.style.overflow = '';
  modalVideo.pause();
  setTimeout(() => { modalVideo.src = ''; }, 400);
}



if (videoModal) {
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal || e.target.id === 'videoModalContent') closeVideoModal();
  });
}

document.querySelectorAll('.video-item').forEach(item => {
  const video = item.querySelector('video');
  const src = video.getAttribute('src');
  const playBtn = item.querySelector('.video-play-btn');
  const zoomBtn = item.querySelector('.video-zoom-btn');

  function togglePlay(e) {
    if (e) e.stopPropagation();
    if (video.paused) {
      document.querySelectorAll('.video-item video').forEach(v => {
        if (v !== video) { v.pause(); v.muted = true; v.closest('.video-item').classList.remove('playing'); }
      });
      video.muted = false;
      video.play();
      item.classList.add('playing');
    } else {
      video.pause();
      video.muted = true;
      item.classList.remove('playing');
    }
  }

  function handleZoomClick(e) {
    if (e) e.stopPropagation();
    openVideoModal(src);
  }

  if (playBtn) playBtn.addEventListener('click', togglePlay);
  if (zoomBtn) zoomBtn.addEventListener('click', handleZoomClick);
  item.addEventListener('click', togglePlay);
});
