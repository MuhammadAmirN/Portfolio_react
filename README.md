# Portfolio Pribadi 🚀

Website portfolio + CV pribadi untuk melamar magang **Frontend / UI-UX / Full-Stack**.
Dibangun dengan **React + Vite + Tailwind CSS** dan **Framer Motion** (animasi), lengkap dengan
mode gelap/terang, desain responsif, dan halaman CV yang bisa di-_download_ sebagai PDF.

## ✨ Fitur

- **Hero** dengan animasi role bergantian & status "tersedia untuk magang"
- **Tentang Saya**, **Skill**, dan **Proyek** (kartu proyek dengan tag, demo & link kode)
- **Form Kontak** (mengirim via email) + link sosial media
- **Halaman CV** (`/cv`) yang rapi dan bisa diunduh jadi PDF (tombol _Download PDF_ → simpan sebagai PDF)
- **Dark / Light mode** (tersimpan otomatis)
- **Responsif** di HP, tablet, dan desktop

## 🛠️ Menjalankan di komputer

```bash
npm install      # install dependency
npm run dev      # jalankan mode development (buka http://localhost:5173)
npm run build    # build untuk produksi (output ke folder dist/)
npm run preview  # preview hasil build
npm run lint     # cek kualitas kode
```

## ✏️ Cara mengganti isi (PALING PENTING)

Semua teks, data diri, skill, proyek, dan isi CV ada di **satu file**:

```
src/data/portfolioData.js
```

Buka file itu, ganti teks placeholder (nama, email, sekolah, proyek, dll.) dengan data Anda.
Tidak perlu menyentuh kode komponen lainnya.

### Mengganti foto profil

1. Simpan foto Anda di folder `public/` (misal `public/profile.jpg`).
2. Di `src/data/portfolioData.js`, ubah `avatar: ''` menjadi `avatar: '/profile.jpg'`.

Jika `avatar` dibiarkan kosong, akan tampil inisial nama Anda secara otomatis.

## 🌐 Deploy gratis (untuk portfolio)

Pilih salah satu (semua gratis):

- **Vercel** — import repo ini, framework otomatis terdeteksi (Vite). Sudah ada `vercel.json` untuk routing.
- **Netlify** — build command `npm run build`, publish directory `dist`. Sudah ada `public/_redirects`.
- **GitHub Pages** — jalankan `npm run build`, lalu publish folder `dist/`.

## 📂 Struktur singkat

```
src/
├─ data/portfolioData.js   ← EDIT DI SINI (semua konten)
├─ components/             ← Navbar, Hero, About, Skills, Projects, Contact, Footer
├─ pages/                  ← Home.jsx, CV.jsx
├─ hooks/useTheme.js       ← logika dark/light mode
└─ App.jsx                 ← routing
```

---

Dibuat dengan ❤️ menggunakan React & Tailwind CSS.
