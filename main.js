/* ============================================================
   NGLANGGERAN ECO-VILLAGE — main.js
   ============================================================ */

/* ── TRANSLATIONS ── */
const translations = {
  en: {
    nav_concept:   "Concept",
    nav_about:     "Story",
    nav_villas:    "Villas",
    nav_amenities: "Amenities",
    nav_contact:   "Contact",

    hero_eyebrow: "Eco-Village · Yogyakarta, Indonesia",
    hero_sub:     "A private collection of sustainable villas where architecture dissolves into nature — designed for those who seek stillness.",
    hero_cta:     "Inquire Now",

    concept_label: "Our Philosophy",
    concept_title: "Where ecology meets living.",
    concept_body:  "Nglanggeran Eco-Village is built on the belief that luxury and ecological responsibility are not in conflict. Each villa is sited to preserve the existing forest canopy, powered by renewable energy, and constructed with materials harvested from sustainable sources.",
    concept_body2: "We call it conscious dwelling — a way of being in a place that gives back more than it takes.",

    about_label: "Our Story",
    about_title: "Born from a love of land.",
    about_body1: "Nglanggeran Eco-Village began not as a development project, but as a question: what if a place could be built that healed the land it stood on? In 2018, a family of conservationists and architects walked 42 hectares of secondary forest in the highlands and made a quiet decision — to restore rather than clear, to integrate rather than impose.",
    about_body2: "Over four years, the forest was carefully studied. Trees were mapped, water sources traced, wildlife corridors preserved. The six villas were positioned only after the land had spoken — sited where the canopy was thinnest, where a building could stand without a single mature tree felled.",
    about_body3: "Today, Nglanggeran Eco-Village is home to over 140 documented bird species, three endemic orchid varieties, and a small community of people who share a conviction: that the finest human experiences happen at the edge of wilderness — because of it, not in spite of it.",

    stat1: "Hectares of forest",
    stat2: "Private villas",
    stat3: "Bird species recorded",
    stat4: "Trees felled to build",

    am_label: "Amenities",
    am_title: "Everything you need, nothing you don't.",
    am_sub:   "Each amenity at Nglanggeran Eco-Village is considered — selected not for abundance, but for meaning. What you find here has been chosen because it belongs here.",
    am1_title: "Forest Villas",
    am1_desc:  "Six architecturally distinct residences, each sleeping two to six guests. Every villa features floor-to-ceiling openings that erase the boundary between interior and canopy.",
    am2_title: "Private Infinity Pool",
    am2_desc:  "Each villa has its own private pool, cantilevered over the valley. Heated by solar thermal panels, fed by rainwater harvested on-site, and open to the sky at all hours.",
    am3_title: "Garden-to-Table Dining",
    am3_desc:  "Our resident chef harvests daily from a two-hectare organic garden. Meals are served at your villa, at the communal long table, or deep in the forest.",
    am4_title: "Wellness & Spa",
    am4_desc:  "An open-air spa pavilion tucked into the hillside offers traditional Javanese massage, forest sound baths, breathwork, and daily yoga at dawn in the bamboo clearing.",
    am5_title: "Off-Grid Systems",
    am5_desc:  "A 120kW solar array powers the entire estate. Rainwater catchment meets 80% of daily water needs. Composting, biogas, and a zero-landfill policy complete the loop.",
    am6_title: "Nature Experiences",
    am6_desc:  "Guided dawn birdwatching, night-forest walks, river swimming, natural dyeing workshops, and a children's ecology program with a local conservation biologist.",

    villas_label: "The Collection",
    villas_title: "Three villas, one forest.",
    villas_sub:   "Each residence is distinct — in form, orientation, and character — yet unified by a shared commitment to the landscape.",
    villa1: "Villa Trembesi",
    villa2: "Villa Mahoni",
    villa3: "Villa Sengon",
    villa_book: "Book on Airbnb",

    bv1_detail: "Forest retreat · 4 guests",
    bv2_detail: "Forest villa · 4 guests",
    bv3_detail: "Garden villa · 4 guests",

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

    quote: '"To live among trees is to remember what silence feels like."',

    exp_label: "Life Here",
    exp_title: "Every day, intentional.",
    exp_body:  "Nglanggeran Eco-Village is more than a place to stay — it is a way of inhabiting time. Mornings begin with mist over the canopy. Evenings end in stillness.",
    feat1: "Private infinity pool overlooking the valley",
    feat2: "Farm-to-table organic dining, grown on-site",
    feat3: "Solar energy and rainwater harvesting systems",
    feat4: "Forest bathing, yoga, and guided nature walks",
    feat5: "Wildlife corridors and conservation programs",

    contact_label:          "Get in Touch",
    contact_title:          "Begin your stay.",
    contact_body:           "We welcome inquiries for villa reservations, ownership, and private events. Our team responds within 24 hours.",
    contact_location_label: "Location",
    contact_location_value: "Karang Sari, Nglanggeran, Kec. Patuk, Kabupaten Gunung Kidul, Yogyakarta",
    copt_email_label: "Email us",
    copt_wa_label:    "WhatsApp",
    copt_ig_label:    "Instagram",

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
    hero_sub:     "Koleksi privat vila berkelanjutan di mana arsitektur menyatu dengan alam — dirancang bagi mereka yang merindukan ketenangan.",
    hero_cta:     "Hubungi Kami",

    concept_label: "Filosofi Kami",
    concept_title: "Di mana ekologi bertemu kehidupan.",
    concept_body:  "Nglanggeran Eco-Village dibangun atas keyakinan bahwa kemewahan dan tanggung jawab ekologis bukanlah hal yang bertentangan. Setiap vila ditempatkan untuk menjaga kanopi hutan yang ada, ditenagai energi terbarukan, dan dibangun dari material yang bersumber secara berkelanjutan.",
    concept_body2: "Kami menyebutnya hunian sadar — cara berada di suatu tempat yang memberi lebih banyak dari yang diambil.",

    about_label: "Kisah Kami",
    about_title: "Lahir dari kecintaan pada alam.",
    about_body1: "Nglanggeran Eco-Village tidak dimulai sebagai proyek pembangunan, melainkan dari sebuah pertanyaan: mungkinkah membangun sebuah tempat yang menyembuhkan lahan yang ia pijak? Pada 2018, sebuah keluarga konservasionis dan arsitek menjelajahi 42 hektare hutan sekunder di dataran tinggi dan membuat keputusan diam-diam — untuk memulihkan, bukan membuka; untuk menyatu, bukan memaksakan.",
    about_body2: "Selama empat tahun, hutan dipelajari dengan saksama. Pohon-pohon dipetakan, sumber air ditelusuri, koridor satwa liar dijaga. Enam vila baru ditempatkan setelah lahan berbicara — diletakkan di mana kanopi paling tipis, di mana tidak satu pun pohon dewasa perlu ditebang.",
    about_body3: "Kini, Nglanggeran Eco-Village adalah rumah bagi lebih dari 140 spesies burung yang terdokumentasi, tiga varietas anggrek endemik, dan komunitas kecil yang percaya bahwa pengalaman manusia paling berharga terjadi di tepi alam liar — bukan meski ada alam, melainkan karena alam.",

    stat1: "Hektare hutan",
    stat2: "Vila privat",
    stat3: "Spesies burung tercatat",
    stat4: "Pohon yang ditebang",

    am_label: "Fasilitas",
    am_title: "Semua yang dibutuhkan, tidak lebih.",
    am_sub:   "Setiap fasilitas di Nglanggeran Eco-Village dipertimbangkan dengan matang — dipilih bukan untuk kelimpahan, melainkan untuk makna.",
    am1_title: "Vila Hutan",
    am1_desc:  "Enam hunian dengan arsitektur berbeda, masing-masing menampung dua hingga enam tamu. Setiap vila memiliki bukaan lantai-ke-langit-langit yang menghapus batas antara interior dan kanopi.",
    am2_title: "Kolam Renang Infinity Privat",
    am2_desc:  "Setiap vila memiliki kolam renang privatnya sendiri, menjorok di atas lembah. Dipanaskan oleh panel surya termal, diisi air hujan yang dipanen di lokasi, dan terbuka ke langit sepanjang waktu.",
    am3_title: "Santap dari Kebun ke Meja",
    am3_desc:  "Koki kami memanen setiap hari dari kebun organik seluas dua hektare. Hidangan disajikan di vila Anda, di meja panjang komunal, atau jauh di dalam hutan.",
    am4_title: "Wellness & Spa",
    am4_desc:  "Paviliun spa terbuka yang tersembunyi di lereng bukit menawarkan pijat tradisional Jawa, mandi suara hutan, sesi pernapasan, dan yoga harian saat fajar di rumpun bambu.",
    am5_title: "Sistem Off-Grid",
    am5_desc:  "Panel surya 120kW menyuplai seluruh kawasan. Penampungan air hujan memenuhi 80% kebutuhan air harian. Pengomposan, biogas, dan kebijakan nol-sampah melengkapi siklus ini.",
    am6_title: "Pengalaman Alam",
    am6_desc:  "Pengamatan burung di fajar, jalan malam di hutan, berenang di sungai, lokakarya pewarnaan alami, dan program ekologi anak-anak bersama ahli biologi konservasi lokal.",

    villas_label: "Koleksi Vila",
    villas_title: "Tiga vila, satu hutan.",
    villas_sub:   "Setiap hunian memiliki keunikannya sendiri — dalam bentuk, orientasi, dan karakter — namun dipersatukan oleh komitmen terhadap lanskap.",
    villa1: "Vila Trembesi",
    villa2: "Vila Mahoni",
    villa3: "Vila Sengon",
    villa_book: "Pesan di Airbnb",

    bv1_detail: "Retreat hutan · 4 tamu",
    bv2_detail: "Vila hutan · 4 tamu",
    bv3_detail: "Vila taman · 4 tamu",

    booking_label: "Reservasi",
    booking_title: "Pesan tempat Anda.",
    booking_desc: "Pilih vila dan pesan langsung melalui Airbnb, atau kirimkan pertanyaan untuk pengaturan khusus.",
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

    quote: '"Hidup di antara pepohonan adalah mengenang kembali seperti apa rasanya kesunyian."',

    exp_label: "Kehidupan di Sini",
    exp_title: "Setiap hari, penuh makna.",
    exp_body:  "Nglanggeran Eco-Village bukan sekadar tempat menginap — ini adalah cara menghuni waktu. Pagi hari dimulai dengan kabut di atas kanopi. Malam hari berakhir dalam keheningan.",
    feat1: "Kolam renang infinity privat menghadap lembah",
    feat2: "Santap organik dari ladang sendiri",
    feat3: "Energi surya dan sistem pemanenan air hujan",
    feat4: "Mandi hutan, yoga, dan jalan alam terpandu",
    feat5: "Koridor satwa liar dan program konservasi",

    contact_label:          "Hubungi Kami",
    contact_title:          "Mulai perjalanan Anda.",
    contact_body:           "Kami menerima pertanyaan untuk reservasi vila, kepemilikan, dan acara privat. Tim kami merespons dalam 24 jam.",
    contact_location_label: "Lokasi",
    contact_location_value: "Karang Sari, Nglanggeran, Kec. Patuk, Kabupaten Gunung Kidul, Yogyakarta",
    copt_email_label: "Kirim Email",
    copt_wa_label:    "WhatsApp",
    copt_ig_label:    "Instagram",

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
    <p>For questions regarding these Terms, please contact us at <strong>rizalrtaf@gmail.com</strong> or via WhatsApp at +62 882 2131 9965.</p>
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
    <p>Untuk pertanyaan, silakan hubungi kami di <strong>rizalrtaf@gmail.com</strong> atau melalui WhatsApp di +62 882 2131 9965.</p>
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
