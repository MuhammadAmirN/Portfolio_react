// =============================================================
//  EDIT FILE INI UNTUK MENGUBAH SEMUA ISI PORTFOLIO & CV
//  (Ganti teks placeholder di bawah dengan data Anda sendiri)
// =============================================================

export const profile = {
  name: 'Nama Lengkap Anda',
  // Role utama yang ditampilkan di hero (boleh beberapa, akan dianimasikan bergantian)
  roles: ['Frontend Developer', 'UI/UX Designer', 'Full-Stack Enthusiast'],
  tagline:
    'Mahasiswa yang antusias membangun antarmuka web yang indah, cepat, dan ramah pengguna.',
  about:
    'Halo! Saya seorang mahasiswa yang sedang mencari kesempatan magang di bidang Frontend / UI/UX. Saya suka mengubah ide menjadi produk digital yang rapi dan bermanfaat. Saya terbiasa dengan React, Tailwind CSS, dan desain di Figma, serta selalu bersemangat mempelajari teknologi baru.',
  location: 'Surakarta, Indonesia',
  email: 'email.anda@example.com',
  phone: '+62 8xx-xxxx-xxxx',
  // Path foto profil di folder /public. Ganti dengan foto Anda (mis. /profile.jpg)
  avatar: '',
  // Status ketersediaan
  available: true,
}

export const socials = [
  { name: 'GitHub', url: 'https://github.com/username', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/username', icon: 'instagram' },
  { name: 'Email', url: 'mailto:email.anda@example.com', icon: 'mail' },
]

// Kelompok skill. Tambah/kurangi sesuai kemampuan Anda.
export const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'UI/UX Design',
    items: ['Figma', 'Wireframing', 'Prototyping', 'Design System', 'User Research'],
  },
  {
    category: 'Tools & Lainnya',
    items: ['Git & GitHub', 'VS Code', 'Node.js', 'REST API', 'Responsive Design'],
  },
]

// Proyek yang ditampilkan (diambil dari repository GitHub Anda).
// `image` boleh kosong (akan pakai gradient placeholder otomatis).
export const projects = [
  {
    title: 'Dashboard IoT - Bandul Matematis',
    description:
      'Dashboard untuk proyek IoT "alat praktikum bandul matematis berbasis IoT". Menampilkan dan mengelola data sensor menggunakan Laravel dengan database MySQL.',
    tags: ['Laravel', 'MySQL', 'IoT', 'Dashboard'],
    image: '',
    demo: '',
    repo: 'https://github.com/MuhammadAmirN/Dashboard_IoT',
    featured: true,
  },
  {
    title: 'Sistem Laundry (Laravel)',
    description:
      'Sistem manajemen laundry berbasis Laravel dengan fitur CRUD, manajemen role pengguna, dan laporan keuangan.',
    tags: ['Laravel', 'MySQL', 'CRUD', 'Auth'],
    image: '',
    demo: '',
    repo: 'https://github.com/MuhammadAmirN/loundry_mataram-laravel',
    featured: true,
  },
  {
    title: 'Enkripsi Data Hybrid (RSA + AES)',
    description:
      'Implementasi kriptografi hybrid yang mengombinasikan algoritma RSA dan AES untuk enkripsi data yang lebih aman.',
    tags: ['Python', 'Cryptography', 'RSA', 'AES'],
    image: '',
    demo: '',
    repo: 'https://github.com/MuhammadAmirN/membuat-enkripsi-data',
    featured: true,
  },
  {
    title: 'Reservasi Cafe',
    description:
      'Aplikasi web reservasi meja cafe menggunakan PHP untuk mempermudah pelanggan melakukan pemesanan tempat.',
    tags: ['PHP', 'MySQL', 'Web'],
    image: '',
    demo: '',
    repo: 'https://github.com/MuhammadAmirN/reservasi_cafe',
    featured: false,
  },
  {
    title: 'Pemesanan Tiket Bola',
    description:
      'Aplikasi pemesanan tiket pertandingan sepak bola dengan Python, mencakup booking, jadwal event, dan pembayaran.',
    tags: ['Python', 'Booking', 'Payment'],
    image: '',
    demo: '',
    repo: 'https://github.com/MuhammadAmirN/pemesanan_tiket_bola',
    featured: false,
  },
  {
    title: 'Manajemen Data Mahasiswa',
    description:
      'Aplikasi manajemen data mahasiswa/siswa menggunakan Flask dengan database SQLite (operasi CRUD lengkap).',
    tags: ['Python', 'Flask', 'SQLite', 'CRUD'],
    image: '',
    demo: '',
    repo: 'https://github.com/MuhammadAmirN/MANAJEMEN-DATA-MAHASISWA-MENGGUNAKAN-FLASK-DAN-SQlite',
    featured: false,
  },
  {
    title: 'Pemesanan Laundry',
    description:
      'Aplikasi pemesanan laundry berbasis Python dengan fitur penilaian (kualitas, layanan, harga, waktu) dan perhitungan total pembayaran otomatis.',
    tags: ['Python', 'CLI', 'Payment'],
    image: '',
    demo: '',
    repo: 'https://github.com/MuhammadAmirN/pemesanan-loundry',
    featured: false,
  },
  {
    title: 'WhatsApp Bot',
    description:
      'Bot WhatsApp otomatis yang dibangun menggunakan Node.js dan JavaScript.',
    tags: ['Node.js', 'JavaScript', 'Automation'],
    image: '',
    demo: '',
    repo: 'https://github.com/MuhammadAmirN/botWA',
    featured: false,
  },
  {
    title: 'Landing Page (HTML & CSS)',
    description:
      'Latihan membangun landing page responsif menggunakan HTML dan CSS murni dengan fokus pada layout dan styling.',
    tags: ['HTML', 'CSS', 'Responsive'],
    image: '',
    demo: '',
    repo: 'https://github.com/MuhammadAmirN/landing-pages',
    featured: false,
  },
]

// ====== DATA CV ======
export const cv = {
  summary:
    'Mahasiswa Teknik Informatika yang fokus pada pengembangan Frontend dan UI/UX. Memiliki dasar yang kuat di React dan Tailwind CSS, serta pengalaman membuat beberapa proyek pribadi. Mencari kesempatan magang untuk berkontribusi dan berkembang dalam tim produk.',

  education: [
    {
      school: 'Universitas Duta Bangsa Surakarta',
      degree: 'S1 Teknik Informatika',
      period: '2022 — Sekarang',
      detail: 'IPK: 3.xx / 4.00 (opsional). Mata kuliah relevan: Pemrograman Web, Basis Data, IMK.',
    },
    {
      school: 'SMA/SMK Anda',
      degree: 'Jurusan Anda',
      period: '2019 — 2022',
      detail: '',
    },
  ],

  experience: [
    {
      role: 'Anggota / Pengurus Organisasi',
      company: 'Nama Organisasi / UKM Kampus',
      period: '2023 — Sekarang',
      points: [
        'Contoh: Mendesain materi publikasi acara menggunakan Figma & Canva.',
        'Contoh: Berkolaborasi dalam tim untuk menyelenggarakan kegiatan kampus.',
      ],
    },
    {
      role: 'Freelance / Proyek Pribadi',
      company: 'Mandiri',
      period: '2023 — Sekarang',
      points: [
        'Contoh: Membangun beberapa website statis untuk latihan dan klien kecil.',
        'Contoh: Menerapkan desain responsif dan praktik kode yang bersih.',
      ],
    },
  ],

  certifications: [
    { name: 'Nama Sertifikat / Kursus', issuer: 'Penerbit (mis. Dicoding)', year: '2024' },
    { name: 'Nama Sertifikat lainnya', issuer: 'Penerbit', year: '2023' },
  ],

  languages: [
    { name: 'Bahasa Indonesia', level: 'Native' },
    { name: 'Bahasa Inggris', level: 'Intermediate' },
  ],
}
