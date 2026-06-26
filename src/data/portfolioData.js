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

// Proyek yang ditampilkan. Ganti dengan proyek Anda sendiri.
// `image` boleh kosong (akan pakai gradient placeholder otomatis).
export const projects = [
  {
    title: 'Aplikasi To-Do List',
    description:
      'Aplikasi manajemen tugas dengan fitur tambah, edit, hapus, dan filter. Dibuat untuk melatih state management di React.',
    tags: ['React', 'Tailwind CSS', 'LocalStorage'],
    image: '',
    demo: 'https://example.com',
    repo: 'https://github.com/username/todo-app',
    featured: true,
  },
  {
    title: 'Landing Page Produk',
    description:
      'Landing page responsif untuk produk fiktif, fokus pada desain modern, animasi halus, dan konversi.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    image: '',
    demo: 'https://example.com',
    repo: 'https://github.com/username/landing-page',
    featured: true,
  },
  {
    title: 'Dashboard Cuaca',
    description:
      'Dashboard yang menampilkan data cuaca real-time dari API publik, lengkap dengan pencarian kota dan grafik.',
    tags: ['React', 'REST API', 'Chart'],
    image: '',
    demo: 'https://example.com',
    repo: 'https://github.com/username/weather-dashboard',
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
