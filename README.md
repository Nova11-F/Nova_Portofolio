::: {align="center"}
# ✨ NOVA --- PERSONAL PORTFOLIO

### *Modern Personal Portfolio Website*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind
CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Motion](https://img.shields.io/badge/Motion-Animations-FF5C5C?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

Website portofolio pribadi yang dirancang untuk menampilkan profil,
keterampilan, pengalaman, sertifikat, dan proyek melalui antarmuka
modern, responsif, serta interaktif.

[🌐 **Live Demo**](https://nova11.my.id) · [📂 **GitHub
Repository**](https://github.com/Nova11-F/Nova_Portofolio)
:::

------------------------------------------------------------------------

## 📖 Tentang Proyek

**Nova Personal Portfolio** merupakan website portofolio pribadi yang
dikembangkan menggunakan **React, Tailwind CSS, dan JavaScript**.
Website ini menjadi media untuk memperkenalkan profil, perjalanan
akademik dan profesional, kemampuan teknis, serta berbagai proyek yang
telah dikerjakan.

Mengusung pendekatan visual **minimalis dengan sentuhan Neobrutalism**,
website ini menggabungkan tampilan yang tegas, komponen yang konsisten,
dan interaksi yang ringan untuk memberikan pengalaman menjelajah yang
menarik.

Website ini juga dilengkapi dengan dukungan dua bahasa, yaitu **Bahasa
Indonesia** dan **English**, sehingga informasi dapat diakses oleh
pengunjung dengan preferensi bahasa yang berbeda.

## ✨ Fitur Utama

**👤 Personal Profile**

-   Menampilkan pengenalan diri dan informasi profil.
-   Menyajikan fokus pengembangan serta latar belakang akademik.
-   Menampilkan ringkasan pengalaman profesional dan organisasi.

**🧰 Skills & Technologies**

-   Menampilkan keterampilan teknis berdasarkan teknologi yang dikuasai.
-   Menggunakan ikon dan identitas visual setiap teknologi.
-   Menyusun informasi skill agar mudah dipindai oleh pengunjung.

**💻 Project Showcase**

-   Menampilkan kumpulan proyek yang pernah dikembangkan.
-   Menyediakan deskripsi, kategori, dan teknologi yang digunakan pada
    setiap proyek.
-   Mengarahkan pengunjung ke repository atau halaman proyek terkait.

**🏅 Certificates**

-   Menampilkan sertifikat dan pencapaian pembelajaran.
-   Menyediakan tampilan detail sertifikat melalui modal.
-   Mengelompokkan informasi sertifikasi agar lebih mudah ditelusuri.

**📚 Experience**

-   Menampilkan pengalaman profesional, akademik, dan organisasi.
-   Menyajikan informasi aktivitas serta tanggung jawab secara
    terstruktur.

**📬 Contact**

-   Menyediakan informasi dan tautan untuk terhubung.
-   Mengarahkan pengunjung ke platform profesional dan media sosial.

**🌐 Multilingual Support**

-   Mendukung Bahasa Indonesia dan English.
-   Memungkinkan pengunjung mengganti bahasa melalui kontrol pada
    navigasi.
-   Mengelola teks antarmuka menggunakan sistem context dan data
    terjemahan.

**🌓 Theme Preference**

-   Menyediakan tampilan Light Mode dan Dark Mode.
-   Menyesuaikan warna komponen berdasarkan tema aktif.
-   Menjaga konsistensi tampilan pada berbagai bagian website.

**🎬 Interactive UI & Animation**

-   Menggunakan animasi saat elemen memasuki area tampilan.
-   Menghadirkan transisi pada interaksi komponen dan navigasi.
-   Menggunakan efek hover untuk memberikan umpan balik visual.
-   Menjaga animasi tetap ringan agar tidak mengganggu kenyamanan
    membaca.

**📱 Responsive Web Design**

Website dirancang agar dapat digunakan pada berbagai ukuran layar.

-   **Desktop**: memanfaatkan ruang layar untuk menampilkan layout dan
    informasi secara optimal.
-   **Tablet**: menyesuaikan susunan komponen dengan ruang yang
    tersedia.
-   **Mobile**: menyusun ulang navigasi, kartu, dan konten agar tetap
    nyaman diakses.

Responsivitas diterapkan menggunakan utility class Tailwind CSS dan
pengaturan layout sesuai kebutuhan setiap breakpoint.

## 🛠️ Teknologi yang Digunakan

-   **React**: membangun antarmuka berbasis komponen dan mengelola
    tampilan aplikasi.
-   **Vite**: menyediakan development server dan proses build yang
    cepat.
-   **Tailwind CSS**: membangun layout, styling, dan responsive design
    menggunakan utility classes.
-   **JavaScript (ES6+)**: mengelola logika aplikasi, interaksi, dan
    data konten.
-   **Motion**: menangani animasi antarmuka dan transisi elemen.
-   **Framer Motion**: mendukung kebutuhan animasi komponen.
-   **Lucide React**: menyediakan ikon antarmuka.
-   **React Icons**: menyediakan koleksi ikon teknologi dan layanan.
-   **Vercel**: platform deployment website.

## 📁 Struktur Proyek

Struktur utama repository disusun berdasarkan pemisahan komponen,
halaman, data, dan aset agar kode lebih mudah dikelola.

``` text
Nova_Portofolio/
├── public/                     # Aset statis
├── src/
│   ├── assets/                 # Gambar dan aset yang digunakan aplikasi
│   ├── components/
│   │   ├── layout/             # Navbar, announcement bar, dan layout
│   │   ├── sections/           # Bagian utama halaman portfolio
│   │   └── ui/                 # Komponen UI yang dapat digunakan kembali
│   ├── context/                # Context aplikasi, termasuk pengaturan bahasa
│   ├── data/                   # Data proyek, skill, dan konten portfolio
│   ├── pages/                  # Komponen halaman
│   ├── App.jsx                 # Komponen utama aplikasi
│   └── main.jsx                # Entry point aplikasi
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> Struktur di atas merupakan gambaran direktori utama. Nama atau susunan
> file dapat berubah mengikuti pengembangan proyek.

## 💻 Cara Menjalankan Proyek

Pastikan perangkat telah memiliki **Node.js** dan **npm** sebelum
menjalankan aplikasi.

### Prasyarat

-   [Node.js](https://nodejs.org/)
-   npm (termasuk dalam instalasi Node.js)
-   [Git](https://git-scm.com/)

### Instalasi

1.  Clone repository:

    ``` bash
    git clone https://github.com/Nova11-F/Nova_Portofolio.git
    ```

2.  Masuk ke direktori proyek:

    ``` bash
    cd Nova_Portofolio
    ```

3.  Instal seluruh dependencies:

    ``` bash
    npm install
    ```

4.  Jalankan development server:

    ``` bash
    npm run dev
    ```

5.  Buka alamat lokal yang ditampilkan pada terminal. Secara default,
    Vite menggunakan:

    ``` text
    http://localhost:5173
    ```

## ⚙️ Available Scripts

  Perintah            Deskripsi
  ------------------- --------------------------------------------------
  `npm run dev`       Menjalankan development server.
  `npm run build`     Membuat production build ke direktori `dist`.
  `npm run preview`   Menjalankan preview dari hasil production build.
  `npm run lint`      Memeriksa kualitas kode menggunakan ESLint.

## 🎨 Design & Development

Beberapa pendekatan yang digunakan dalam pengembangan website:

-   **Component-Based Architecture**: membagi antarmuka menjadi komponen
    yang modular dan dapat digunakan kembali.
-   **Reusable UI Components**: menjaga konsistensi tampilan melalui
    komponen seperti Card, Button, dan Section Header.
-   **Context API**: mengelola preferensi bahasa dan state lintas
    komponen.
-   **Data-Driven Content**: memisahkan data proyek dan teknologi dari
    komponen tampilan.
-   **Responsive Layout**: menyesuaikan susunan elemen berdasarkan
    ukuran layar.
-   **Consistent Design System**: menggunakan palet warna, tipografi,
    border, dan shadow yang konsisten.
-   **Interactive Experience**: menerapkan transisi dan animasi untuk
    memperjelas respons antarmuka.

## 🚀 Deployment

Website ini dipublikasikan menggunakan **Vercel**.

🌐 **Live Website:** <https://nova11.my.id>

Untuk melakukan deployment pada akun Vercel sendiri:

1.  Import repository GitHub ke [Vercel](https://vercel.com/).
2.  Pilih framework preset **Vite**.
3.  Gunakan perintah build `npm run build`.
4.  Atur output directory menjadi `dist`.
5.  Jalankan deployment.

Setelah repository terhubung, Vercel dapat melakukan deployment ulang
ketika perubahan terbaru dikirim ke branch yang dikonfigurasi.

## 🎯 Tujuan Proyek

Website ini dikembangkan sebagai media untuk:

-   Membangun personal branding di bidang teknologi dan pengembangan
    perangkat lunak.
-   Mendokumentasikan perjalanan belajar dan pengembangan proyek.
-   Menampilkan kemampuan teknis melalui implementasi proyek nyata.
-   Mempraktikkan pengembangan frontend menggunakan React dan Tailwind
    CSS.
-   Menerapkan konsep reusable components dan pengelolaan state.
-   Meningkatkan pemahaman mengenai responsive design, UI/UX, dan
    animasi antarmuka.

## 🔄 Pengembangan Selanjutnya

Beberapa aspek yang dapat terus disempurnakan:

-   Optimasi performa dan ukuran aset.
-   Peningkatan aksesibilitas dan navigasi keyboard.
-   Penyempurnaan SEO dan metadata halaman.
-   Penambahan proyek, pengalaman, serta sertifikat terbaru.
-   Penyempurnaan animasi dengan mempertimbangkan preferensi
    `prefers-reduced-motion`.

## 📜 Lisensi

Repository ini merupakan proyek portofolio pribadi. Belum ada lisensi
open-source yang ditetapkan. Silakan hubungi pemilik repository sebelum
menggunakan, menyalin, atau mendistribusikan kembali bagian dari proyek
ini.

::: {align="center"}

------------------------------------------------------------------------

### ⭐ Terima kasih telah mengunjungi repository ini!

Jika tertarik dengan proyek atau ingin berkolaborasi, silakan kunjungi
profil dan hubungi saya melalui tautan berikut.

[**GitHub --- Nova11-F**](https://github.com/Nova11-F) · [**Personal
Portfolio**](https://nova11.my.id)

*Designed & Developed by Nova11-F*
:::

