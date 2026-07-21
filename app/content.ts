import { type StaticImageData } from 'next/image';
import projectDashboardImage from '../assets/project/Dashboard Owner.jpg';
import flyPaperImage from '../assets/project/file_2024-06-01_04.49.33.png';
import chickenScanImage from '../assets/project/file_2024-06-01_04.50.40.png';
import cert01 from '../assets/sertifikat/Coursera SIIEEXK95VJ1_page-0001.jpg';
import cert02 from '../assets/sertifikat/Coursera UZJXQ81I09FB_page-0001.jpg';
import cert03 from '../assets/sertifikat/Coursera V8PPR7G6J6L7_page-0001.jpg';
import cert04 from '../assets/sertifikat/Coursera L5GWHY2S65F3_page-0001.jpg';
import cert05 from '../assets/sertifikat/Coursera NIBUU6LLFMPP_page-0001.jpg';
import cert06 from '../assets/sertifikat/Coursera Y5GPPKOQ0Z1V_page-0001.jpg';
import cert07 from '../assets/sertifikat/sertifikat_course_184_2958460_250624122158_page-0001.jpg';
import cert08 from '../assets/sertifikat/sertifikat_course_555_2958460_051024142545_page-0001.jpg';
import cert09 from '../assets/sertifikat/1IWZHZ4HW3EH_page-0001.jpg';
import cert10 from '../assets/sertifikat/Coursera 8MBBBV7YWK23_page-0001.jpg';
import cert11 from '../assets/sertifikat/sertifikat_course_86_2958460_010624022515_page-0001.jpg';
import fariedImage from '../assets/MOH_FARIED_AL_FARIZI.jpg';
import bangkitCert from '../assets/bangkit_2024_certificate.jpg';
import kasirSehatku from '../assets/kasir_sehatku.png';
import asistenPraktikumImage from '../assets/ST_asprak.png';
import cvehprafarmImage from '../assets/project/cvehprafarm.png';
import wkskImage from '../assets/project/wksk.png';
import wksk1Image from '../assets/project/wksk1.png';
import segdaunImage from '../assets/project/segdaun.png';
import segmentasiresultImage from '../assets/project/segmentasiresult.png';
import aichatbotkskImage from '../assets/project/aichatbotksk.png';
import chatbotkskImage from '../assets/project/chatbotksk.png';
import dataAnotasiDaunImage from '../assets/project/data_anotasi_daun.png';
import chicheckMainImage from '../assets/project/chicheck_main.png';
import chicheckSubImage from '../assets/project/chicheck_sub.png';
import tomkitsImage from '../assets/project/tomkits.png';
import comvisiotImage from '../assets/project/comvisiot.png';
import chckcvImage from '../assets/project/chckcv.png';

export type ProjectTrack = 'Semua' | 'All' | 'AI Engineer' | 'Data' | 'Software Development' | 'Game Development';

export type ProjectItem = {
  title: string;
  category: string;
  period: string;
  image: StaticImageData | StaticImageData[];
  tracks: ProjectTrack[];
  featured: boolean;
  outcome: string;
  summary: string;
  stack: string[];
  repoUrl?: string;
  repoLabel?: string;
  demoUrl?: string;
  demoLabel?: string;
  videoUrl?: string;
  highlights: string[];
};

export type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
  url: string;
  image: StaticImageData;
};

export const commonData = {
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/z1ee.e/' },
    { label: 'WhatsApp', href: 'https://wa.me/+6285236487807' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/moh-faried-al-farizi-0237b128b/' },
    { label: 'GitHub', href: 'https://github.com/ziee2' },
  ],
  stats: [
    { value: '3.90', labelId: 'IPK', labelEn: 'GPA' },
    { value: '3k+', labelId: 'Dataset dibersihkan', labelEn: 'Datasets cleaned' },
    { value: '98%', labelId: 'Akurasi terbaik', labelEn: 'Best accuracy' },
    { value: '400+', labelId: 'Jam pembelajaran', labelEn: 'Learning hours' },
  ],
  certificates: [
    { title: 'TensorFlow: Data and Deployment', issuer: 'Coursera', date: '2024', url: '#', image: cert01 },
    { title: 'DeepLearning.AI TensorFlow Developer', issuer: 'Coursera', date: '2024', url: '#', image: cert02 },
    { title: 'Machine Learning', issuer: 'Coursera', date: '2024', url: '#', image: cert03 },
    { title: 'TensorFlow: Advanced Techniques', issuer: 'Coursera', date: '2024', url: '#', image: cert04 },
    { title: 'Machine Learning Terapan', issuer: 'Dicoding', date: '2024', url: '#', image: cert05 },
    { title: 'Belajar Fundamental Deep Learning', issuer: 'Dicoding', date: '2024', url: '#', image: cert06 },
    { title: 'Build Better GANs', issuer: 'Coursera', date: '2024', url: '#', image: cert07 },
    { title: 'NLP with Classification and Vector Spaces', issuer: 'Coursera', date: '2024', url: '#', image: cert08 },
    { title: 'Crash Course on Python', issuer: 'Google', date: 'Sep 2024', url: 'https://coursera.org/verify/1IWZHZ4HW3EH', image: cert09 },
    { title: 'Using Python to Interact with the Operating System', issuer: 'Google', date: 'Sep 2024', url: 'https://coursera.org/verify/8MBBBV7YWK23', image: cert10 },
    { title: 'Memulai Pemrograman dengan Python', issuer: 'Dicoding', date: 'Jun 2024', url: 'https://dicoding.com/certificates/MRZMEYDJLPYQ', image: cert11 },
  ] as CertificateItem[]
};

export const dict = {
  id: {
    nav: [
      { id: 'about', label: 'Tentang' },
      { id: 'experience', label: 'Pengalaman' },
      { id: 'projects', label: 'Proyek' },
      { id: 'skills', label: 'Keahlian' },
      { id: 'certificates', label: 'Sertifikat' },
    ],
    hero: {
      badge: 'Portofolio AI Premium',
      title: 'Membangun sistem AI praktis untuk masalah dunia nyata.',
      desc: 'Lulusan Ilmu Komputer dari Universitas Jember dengan fokus pada Computer Vision, NLP, data cleansing, dan deployment model.',
      exploreBtn: 'Jelajahi Proyek',
      proofBtn: 'Lihat Sertifikat',
      downloadCV: 'Unduh CV',
      profileSnapshot: 'Profil singkat',
      profileSubtitle: 'Fokus AI dengan kedalaman proyek nyata',
      currentDirection: 'Fokus saat ini',
      currentDirectionDesc: 'pada computer vision, NLP, pipeline data, dan deployment siap pakai.',
      stats: [
        { value: '38', label: 'Sertifikasi Keahlian' },
        { value: '10+', label: 'Proyek Utama (AI & Data)' },
        { value: 'Python', label: 'Ekosistem Utama' },
        { value: 'TensorFlow', label: 'Framework Deep Learning' },
      ],
    },
    valueProps: [
      'End-to-End Development: Mampu membangun model AI dari tahap riset hingga deployment ke tahap produksi.',
      'Computer Vision & NLP: Berpengalaman menangani ekstraksi data gambar, deteksi objek, dan pemrosesan bahasa.',
      'Data-Driven Approach: Merancang arsitektur sistem yang didasarkan pada analisis data dan kebutuhan bisnis nyata.',
      'Full-Stack Integration: Mampu mengintegrasikan model AI ke dalam aplikasi web (API, Dashboard) agar siap pakai.',
    ],
    sections: {
      about: {
        title: 'Tentang Saya',
        copy: 'Fresh graduate dengan spesialisasi di bidang Kecerdasan Buatan (AI), khususnya Computer Vision dan Natural Language Processing (NLP). Berpengalaman dalam membangun solusi inovatif secara end-to-end, mulai dari pengembangan model machine learning (TensorFlow, PyTorch), analisis data dengan Python, hingga deployment model sebagai REST API menggunakan Flask, FastAPI, dan Docker. Terbiasa bekerja secara sistematis dan terorganisir, siap berkontribusi dalam tim yang dinamis untuk mengembangkan produk AI dan memecahkan tantangan nyata di industri.',
        bgTitle: 'Edukasi & Pencapaian',
        bgSchool: 'Universitas Jember',
        bgLogo: 'https://upload.wikimedia.org/wikipedia/id/3/3a/Logo_Universitas_Jember.png',
        bgPeriod: '2021 - Sekarang',
        bgGpa: '3.90 / 4.00',
        bgDegree: 'Sarjana Komputer (S.Kom)',
        bgThesis: 'Skripsi: Perbandingan performa ResNet50V2, EfficientNetB4, dan DenseNet201 pada Mask R-CNN untuk segmentasi penyakit karat daun apel.',
        achTitle: 'Pencapaian',
        achSubtitle: 'Kompetitif, praktis, dan berbasis proyek',
        achDesc: 'Finalis Lomba Inovasi Digital Mahasiswa, Juara 3 Pengembangan Laos oleh UKM Linux & Open Source, dan Graduate Distinction dari Bangkit Academy.'
      },
      experience: {
        title: 'Pengalaman',
        copy: 'Rekam jejak perjalanan karier profesional saya, dari pengalaman akademis hingga berkontribusi langsung pada proyek industri nyata.',
        items: [
          {
            period: 'Februari - April 2026',
            title: 'Software Development',
            org: 'Freelance',
            image: kasirSehatku,
            focus: 'Full-Stack Web Development & AI Integration',
            impact: 'Meningkatkan otomatisasi operasional apotek melalui sistem POS berbasis web yang terintegrasi dengan AI.',
            summary: 'Merancang dan membangun aplikasi web secara mandiri dari nol (Full-Stack), mengelola seluruh siklus pengembangan mulai dari antarmuka pengguna (Front-End) hingga sistem server dan basis data (Back-End). Membangun sistem kasir (POS) dan manajemen inventaris apotek berbasis web, mengintegrasikan fitur Artificial Intelligence (AI) khusus untuk meningkatkan otomatisasi operasional, serta dilengkapi sistem hak akses dan manajemen shift karyawan.',
            tools: ['Full-Stack', 'Web App', 'AI Integration', 'POS', 'Laravel'],
            highlights: [
              'Merancang dan membangun aplikasi web secara mandiri dari nol (Full-Stack).',
              'Mengelola seluruh siklus pengembangan (Front-End hingga Back-End).',
              'Membangun sistem kasir (POS) dan manajemen inventaris apotek.',
              'Mengintegrasikan fitur Artificial Intelligence (AI) untuk otomatisasi operasional.'
            ]
          },
          {
            period: 'Sep - Des 2025',
            title: 'Asisten Praktikum',
            org: 'Lab. AI Universitas Jember',
            image: asistenPraktikumImage,
            focus: 'Asisten Praktikum Kelas Computer Vision dan Data Visualization',
            impact: 'Membantu mahasiswa memahami computer vision, visualisasi, dan implementasi deep learning melalui sesi panduan dan umpan balik tugas.',
            summary: 'Memandu sesi lab untuk Computer Vision dan Visualisasi Data menggunakan Python, OpenCV, TensorFlow, dan library visualisasi. Menyiapkan materi, mendemonstrasikan teknik, dan mengevaluasi tugas terkait pemrosesan gambar dan deep learning.',
            tools: ['Python', 'OpenCV', 'TensorFlow'],
            highlights: [
              'Memandu sesi praktikum untuk 40+ mahasiswa mengenai Computer Vision dan Visualisasi Data.',
              'Menyusun materi praktikum berbasis Python, OpenCV, dan library visualisasi terkini.',
              'Mendemonstrasikan teknik deep learning dan mengevaluasi implementasi mahasiswa.',
              'Membantu penyelesaian error pada model TensorFlow yang dibangun oleh mahasiswa.'
            ],
            demoUrl: 'https://unej.ac.id'
          },
          {
            period: 'Feb - Jun 2025',
            title: 'Data Scientist Intern',
            org: 'Social Economic Accelerator Lab (SEAL)',
            image: fariedImage,
            focus: 'Data engineering dan cleansing',
            impact: 'Meningkatkan konsistensi dataset di 3.000+ data pemerintah dan mengurangi masalah penggabungan melalui alur pencocokan semantik.',
            summary: 'Membangun modul pembersihan otomatis untuk 3.000+ dataset pemerintah, menggunakan Sentence-BERT dan kesamaan TF-IDF untuk pencocokan data regional, dan mengonfigurasi pipeline ETL dengan Apache NiFi dan Airflow.',
            tools: ['Sentence-BERT', 'TF-IDF', 'Airflow'],
            highlights: [
              'Membangun modul pembersihan data otomatis untuk 3000+ dataset pemerintahan.',
              'Menggunakan arsitektur Sentence-BERT dan TF-IDF untuk mencocokkan kemiripan data regional.',
              'Mengkonfigurasi alur ETL (Extract, Transform, Load) menggunakan Apache NiFi.',
              'Mengorkestrasi pipeline pemrosesan data dengan Apache Airflow.'
            ],
            demoUrl: 'https://seal.or.id'
          },
          {
            period: 'Sep - Des 2024',
            title: 'Student Machine Learning',
            org: 'Bangkit Academy 2022 by Google, GoTo, Traveloka',
            image: bangkitCert,
            focus: 'Applied ML dan deployment',
            impact: 'Membangun solusi pertanian berbasis model dengan akurasi terukur dan pengakuan formal melalui sertifikasi dan kelulusan dengan predikat.',
            summary: 'Membangun TomKits untuk deteksi penyakit tomat menggunakan EfficientNet dengan akurasi 98% dan mendapatkan TensorFlow Developer Professional Certificate serta Graduate Distinction.',
            tools: ['EfficientNet', 'Flask', 'REST API'],
            highlights: [
              'Lulus dengan predikat Distinction (Top Graduate) dari program Bangkit Academy.',
              'Melatih model EfficientNet untuk deteksi penyakit tomat dengan akurasi 98%.',
              'Mendeploy model ke dalam REST API menggunakan Flask.',
              'Mendapatkan sertifikasi TensorFlow Developer Professional.'
            ],
            repoUrl: 'https://github.com/TomKits'
          }
        ]
      },
      projects: {
        title: 'Proyek Unggulan',
        copy: 'Kumpulan portofolio proyek AI, Computer Vision, dan Web Development yang telah saya kembangkan dari tahap perancangan hingga siap digunakan.',
        tracks: ['Semua', 'AI Engineer', 'Data', 'Software Development', 'Game Development'] as ProjectTrack[],
        showingParams: (count: number, track: string) => `Menampilkan ${count} proyek di kategori ${track === 'Semua' ? 'semua area' : track}.`,
        showMore: 'Lihat selengkapnya',
        hideMore: 'Sembunyikan proyek lain',
        seeMore: 'Lihat selengkapnya',
        detail: 'Detail',
        seeDetail: 'Lihat detail',
        close: 'Tutup',
        highlights: 'Highlight Proyek',
        seeGithub: 'Lihat GitHub',
        seeDemo: 'Lihat Demo',
        items: [
          {
            title: 'AI Assistant Chatbot for Pharmacy POS',
            category: 'LLM · RAG · NLP',
            period: 'Apr 2026',
            image: [aichatbotkskImage, chatbotkskImage],
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: true,
            outcome: 'Menambahkan dukungan pencarian semantik dan rekomendasi obat untuk alur kerja apotek.',
            summary: 'Chatbot RAG (retrieval-augmented generation) hybrid dengan LangChain, FAISS, LLM lokal via Ollama, pencarian semantik Sentence-BERT, dan integrasi FastAPI untuk rekomendasi pengobatan.',
            stack: ['LangChain', 'FAISS', 'Ollama'],
            demoUrl: 'https://huggingface.co/spaces/fariedalfarizi/kasirsehatku-chatbot',
            highlights: ['RAG pipeline untuk data obat', 'Pencarian semantik dengan Sentence-BERT', 'Integrasi FastAPI ke alur POS'],
          },
          {
            title: 'Kasir-Sehatku',
            summary: 'Aplikasi kasir apotek berbasis web untuk mengelola transaksi dan inventaris obat.',
            image: [kasirSehatku, wkskImage, wksk1Image],
            category: 'Web App',
            period: 'Mar 2026',
            tracks: ['Software Development'] as ProjectTrack[],
            featured: true,
            outcome: 'Mempermudah pencatatan transaksi harian dan manajemen stok obat secara efisien.',
            stack: ['Laravel', 'PHP', 'MySQL'],
            demoUrl: 'http://kasir-sehatku.com/',
            demoLabel: 'Kunjungi Website',
            highlights: ['Manajemen stok dan inventaris obat', 'Pencatatan transaksi kasir harian', 'Dibangun menggunakan framework Laravel'],
          },
          {
            title: 'AI Public Speaking Coach',
            category: 'Computer Vision · Speech · NLP',
            period: 'Nov 2025',
            image: flyPaperImage,
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: true,
            outcome: 'Mengubah sinyal multimodal menjadi umpan balik yang dapat ditindaklanjuti untuk performa berbicara.',
            summary: 'Sistem AI multi-modal menggunakan MediaPipe, YOLO, BERT, Wav2Vec2, dan Silero VAD untuk menganalisis postur, artikulasi, kata pengisi, tempo, dan relevansi topik.',
            stack: ['MediaPipe', 'YOLO', 'BERT'],
            repoUrl: 'https://github.com/ziee2/AI-Public-Speaking_-SWARA',
            demoUrl: 'https://huggingface.co/Cyberlace',
            demoLabel: 'Hugging Face',
            highlights: ['Analisis pose dan gesture real-time', 'Evaluasi suara dan tempo bicara', 'Rekomendasi yang langsung bisa ditindaklanjuti'],
          },
          {
            title: 'ChiCheck',
            category: 'Computer Vision · Web App',
            period: 'Mei 2024',
            image: [chicheckMainImage, chicheckSubImage, chckcvImage],
            tracks: ['Software Development', 'AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Chicken Manure Scan Application: Aplikasi website untuk scanning penyakit ayam melalui feses, serta pendataan manajemen seperti pakan dan riwayat penyakit.',
            summary: 'Chicken Manure Scan Application: Aplikasi pendeteksi penyakit melalui pemindaian feses menggunakan model CNN (EfficientNetB3), dilengkapi fitur manajemen pencatatan pakan dan riwayat penyakit secara terpadu.',
            stack: ['EfficientNetB3', 'Flask', 'Laravel', 'React'],
            repoUrl: 'https://github.com/ziee2/ChiCheck-WEB',
            highlights: ['Model klasifikasi penyakit berdasarkan gambar feses', 'Sistem pendataan riwayat dan manajemen pakan', 'Integrasi API antara model machine learning dan website'],
          },
          {
            title: 'Anotasi Instance Segmentation Daun Apel',
            summary: 'Anotasi dataset instance segmentation penyakit rust pada daun apel dengan total 142 gambar (101 training, 41 evaluasi) yang mencakup kelas daun, rust, buah apel, dan background.',
            image: [dataAnotasiDaunImage, segdaunImage, segmentasiresultImage],
            category: 'Data Annotation',
            period: 'Des 2025',
            tracks: ['Data'] as ProjectTrack[],
            featured: false,
            outcome: 'Terdapat total 39 anotasi buah apel, 445 anotasi daun, dan 869 anotasi rust.',
            stack: ['Data Labeling', 'Roboflow', 'CVAT', 'Instance Segmentation'],
            repoUrl: 'https://app.roboflow.com/segmentasi-penyakit-daun-apel/segmentasi-penyakit-daun-apel-kl49q/browse?queryText=&pageSize=50&startingIndex=0&browseQuery=true',
            repoLabel: 'Roboflow Dataset',
            highlights: ['Membuat anotasi poligon untuk segmentasi penyakit karat daun (rust)', 'Dataset dibagi menjadi 101 gambar training dan 41 gambar evaluasi', 'Menghasilkan 869 instance rust, 445 daun, dan 39 apel', 'Memasukkan background sebagai kelas tambahan untuk meningkatkan ketahanan model'],
          },
          {
            title: 'FlyPaper',
            summary: 'Proyek game endless runner.',
            image: flyPaperImage,
            category: 'Game Development',
            period: 'Des 2023',
            tracks: ['Game Development'] as ProjectTrack[],
            featured: false,
            outcome: 'Menunjukkan eksekusi produk di luar AI melalui build interaktif yang dipoles.',
            stack: ['Unity', 'Game Design'],
            repoUrl: 'https://github.com/Bee3-Team/Bee3',
            highlights: ['Game loop endless runner', 'Iterasi gameplay berbasis feedback', 'Eksekusi produk dari ide ke prototipe'],
          },
          {
            title: 'I-Care',
            summary: 'Proyek Express.js dan Socket.io untuk pembuatan bot kustom.',
            image: chickenScanImage,
            category: 'Web App',
            period: 'Des 2023',
            tracks: ['Software Development'] as ProjectTrack[],
            featured: false,
            outcome: 'Mendemonstrasikan rekayasa web realtime dan orkestrasi layanan.',
            stack: ['Express.js', 'Socket.io'],
            repoUrl: 'https://github.com/Vins2106/zhat.cf',
            highlights: ['Komunikasi real-time berbasis Socket.io', 'Integrasi bot service dengan Node.js', 'Arsitektur backend modular'],
          },
          {
            title: 'Apple Leaf Rust Disease Segmentation',
            summary: 'Computer vision segmentasi penyakit rust pada daun menggunakan Mask R-CNN dengan 3 backbone (ResNet50V2, EfficientNetB4, DenseNet201) dan anotasi data.',
            image: [segdaunImage, segmentasiresultImage],
            category: 'Computer Vision',
            period: 'Des 2025',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Membandingkan performa 3 backbone pada arsitektur Mask R-CNN untuk segmentasi gambar daun secara presisi.',
            stack: ['Mask R-CNN', 'ResNet50V2', 'EfficientNetB4', 'DenseNet201'],
            highlights: ['Anotasi data citra penyakit karat pada daun', 'Pelatihan model Mask R-CNN dengan 3 backbone berbeda', 'Evaluasi performa segmentasi instance'],
          },
          {
            title: 'Computer Vision & IoT (Snack & Mouse Detection)',
            summary: 'Personal project mendeteksi objek menggunakan YOLO dan mengintegrasikannya dengan Arduino Uno.',
            image: comvisiotImage,
            category: 'Computer Vision · IoT',
            period: 'Feb 2026',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Mengotomatisasi respon perangkat keras (lampu berkedip lambat/cepat) berdasarkan deteksi objek dari kamera.',
            stack: ['YOLO', 'Arduino Uno', 'Python'],
            videoUrl: 'https://www.youtube.com/embed/vOM4ZAMoyPs',
            highlights: ['Deteksi objek real-time dengan YOLO', 'Integrasi hardware menggunakan serial Arduino', 'Sistem respon otomatis berbasis plug in/plug off'],
          },
          {
            title: 'Product Review Sentiment Analysis',
            summary: 'Proyek analisis sentimen pada ulasan aplikasi Shopee dari Play Store menggunakan model deep learning.',
            image: flyPaperImage,
            category: 'NLP · Deep Learning',
            period: 'Mei 2025',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Melakukan klasifikasi sentimen menggunakan pendekatan GRU, LSTM, dan CNN.',
            stack: ['GRU', 'LSTM', 'CNN', 'Web Scraping'],
            repoUrl: 'https://github.com/ziee2/Dicoding---BFDL---Sentimen-Analysis',
            highlights: ['Web scraping ulasan aplikasi Shopee di Play Store', 'Pemrosesan bahasa alami (NLP) untuk teks bahasa Indonesia', 'Evaluasi performa klasifikasi GRU, LSTM, dan CNN'],
          },
          {
            title: 'Anime Recommendation System',
            summary: 'Membangun mesin rekomendasi anime menggunakan pendekatan collaborative filtering (user-based & item-based).',
            image: projectDashboardImage,
            category: 'Machine Learning',
            period: 'Apr 2025',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Memberikan rekomendasi anime terpersonalisasi berdasarkan kemiripan pola kesukaan pengguna.',
            stack: ['Collaborative Filtering', 'Python', 'Pandas'],
            repoUrl: 'https://github.com/ziee2/Dicoding_MLT_Submission2',
            highlights: ['Implementasi user-based collaborative filtering', 'Implementasi item-based collaborative filtering', 'Analisis matriks kemiripan untuk rekomendasi'],
          },
          {
            title: 'CV EHPRA FARM',
            summary: 'Website company profile untuk CV EHPRA Farm yang dibangun menggunakan HTML dan CSS.',
            image: cvehprafarmImage,
            category: 'Web Development',
            period: 'Feb 2026',
            tracks: ['Software Development'] as ProjectTrack[],
            featured: false,
            outcome: 'Menyediakan profil digital yang interaktif dan responsif untuk keperluan bisnis perusahaan.',
            stack: ['HTML', 'CSS'],
            repoUrl: 'https://github.com/ziee2/EHPRA-Farm',
            demoUrl: 'http://cvehprafarm.com/',
            demoLabel: 'Kunjungi Website',
            highlights: ['Desain antarmuka responsif', 'Pengembangan murni menggunakan HTML dan CSS', 'Struktur website yang SEO-friendly'],
          },
          {
            title: 'TomKits',
            summary: 'Aplikasi Computer Vision berbasis Machine Learning untuk mendeteksi penyakit tomat melalui daun serta mengevaluasi kualitas dan kematangannya. Dilengkapi dengan solusi penyakit dan rekomendasi perawatan.',
            image: tomkitsImage,
            category: 'Computer Vision',
            period: 'Nov - Des 2024',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Terkait dengan Bangkit Academy (Google, GoTo, Traveloka). Membantu petani mendeteksi penyakit tomat dan mengecek kematangan.',
            stack: ['Machine Learning', 'Computer Vision', 'Bangkit Academy'],
            repoUrl: 'https://github.com/TomKits',
            repoLabel: 'GitHub',
            highlights: ['Deteksi penyakit tomat dari daun', 'Evaluasi kualitas dan kematangan tomat', 'Proyek terkait Bangkit Academy'],
          }
        ]
      },
      skills: {
        title: 'Keahlian',
        copy: 'Keterampilan teknis dan perangkat utama yang saya kuasai untuk mengolah data, melatih model AI, hingga mendeploy aplikasi.',
        groups: [
          { title: 'AI / ML', items: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'Hugging Face', 'LLM', 'RAG', 'Flask', 'FastAPI'] },
          { title: 'Data', items: ['SQL', 'MySQL', 'PostgreSQL', 'ETL', 'Apache NiFi', 'Airflow', 'Web Scraping', 'Kaggle', 'Roboflow'] },
          { title: 'Web / Deployment', items: ['PHP', 'JavaScript', 'Laravel', 'Docker', 'REST API', 'Git', 'Agile collaboration'] },
        ]
      },
      certificates: {
        title: 'Sertifikat',
        copy: 'Bukti nyata dari komitmen saya untuk terus belajar dan memvalidasi keahlian di bidang kecerdasan buatan serta pengembangan perangkat lunak.',
      },
      closing: {
        note: 'Closing Note',
        title: '"Hope is not a strategy, but it is the fuel that keeps every great strategy alive."',
        desc: 'Terus belajar, berinovasi, dan membangun solusi yang bermakna. Karena masa depan tidak hanya direncanakan, tapi diciptakan lewat kerja keras hari ini.'
      }
    }
  },
  en: {
    nav: [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'certificates', label: 'Certificates' },
    ],
    hero: {
      badge: 'Premium AI Portfolio',
      title: 'Building practical AI systems for real-world problems.',
      desc: 'Computer Science graduate from University of Jember focusing on Computer Vision, NLP, data cleansing, and model deployment.',
      exploreBtn: 'Explore Projects',
      proofBtn: 'View Evidence',
      downloadCV: 'Download CV',
      profileSnapshot: 'Profile snapshot',
      profileSubtitle: 'AI focus with real project depth',
      currentDirection: 'Current direction',
      currentDirectionDesc: 'with a focus on computer vision, NLP, data pipelines, and product-ready deployment.',
      stats: [
        { value: '38', label: 'Skill Certifications' },
        { value: '10+', label: 'Major Projects (AI & Data)' },
        { value: 'Python', label: 'Primary Ecosystem' },
        { value: 'TensorFlow', label: 'Deep Learning Framework' },
      ],
    },
    valueProps: [
      'End-to-End Development: Capable of building AI models from the research phase to production deployment.',
      'Computer Vision & NLP: Experienced in image data extraction, object detection, and natural language processing.',
      'Data-Driven Approach: Architecting solutions based on comprehensive data analysis and real business needs.',
      'Full-Stack Integration: Seamlessly integrating AI models into web applications (APIs, Dashboards) for immediate use.',
    ],
    sections: {
      about: {
        title: 'About Me',
        copy: 'A fresh graduate, specializing in Artificial Intelligence (AI), specifically Computer Vision and Natural Language Processing (NLP). Experienced in building end-to-end innovative solutions, ranging from machine learning model development (TensorFlow, PyTorch) and data analysis with Python, to deploying models as REST APIs using Flask, FastAPI, and Docker. Accustomed to working systematically and in an organized manner, ready to contribute in dynamic teams to develop AI products and solve real-world industry challenges.',
        bgTitle: 'Education & Achievements',
        bgSchool: 'University of Jember',
        bgLogo: 'https://upload.wikimedia.org/wikipedia/id/3/3a/Logo_Universitas_Jember.png',
        bgPeriod: '2021 - Present',
        bgGpa: '3.90 / 4.00',
        bgDegree: 'Computer Science (S.Kom)',
        bgThesis: 'Thesis: Performance comparison of ResNet50V2, EfficientNetB4, and DenseNet201 in Mask R-CNN for rust disease segmentation in apple leaves.',
        achTitle: 'Achievements',
        achSubtitle: 'Competitive, practical, and project-driven',
        achDesc: 'Finalist of the Student Digital Innovation Competition, 3rd place in Laos development by UKM Linux & Open Source, and Graduate Distinction from Bangkit Academy.'
      },
      experience: {
        title: 'Experience',
        copy: 'A track record of my professional journey, from academic roles to making direct contributions to real-world industry projects.',
        items: [
          {
            period: 'February - April 2026',
            title: 'Software Development',
            org: 'Freelance',
            image: kasirSehatku,
            focus: 'Full-Stack Web Development & AI Integration',
            impact: 'Improved pharmacy operational automation through an AI-integrated web-based POS system.',
            summary: 'Designed and built a web application independently from scratch (Full-Stack), managing the entire development cycle from the user interface (Front-End) to the server system and database (Back-End). Built a web-based point-of-sale (POS) and pharmacy inventory management system, integrating specific Artificial Intelligence (AI) features to enhance operational automation, complete with access rights and employee shift management systems.',
            tools: ['Full-Stack', 'Web App', 'AI Integration', 'POS'],
            highlights: [
              'Designed and built a full-stack web application independently from scratch.',
              'Managed the entire development cycle from Front-End to Back-End.',
              'Built a web-based POS and pharmacy inventory management system.',
              'Integrated custom Artificial Intelligence (AI) features for operational automation.',
              'Implemented role-based access control and employee shift management.'
            ]
          },
          {
            period: 'Sep - Dec 2025',
            title: 'Teaching Assistant',
            org: 'Lab. AI University of Jember',
            image: asistenPraktikumImage,
            focus: 'AI education and lab support',
            impact: 'Helped students understand computer vision, visualization, and deep learning implementation through guided sessions and assignment feedback.',
            summary: 'Guided lab sessions for Computer Vision and Data Visualization using Python, OpenCV, TensorFlow, and visualization libraries. Prepared materials, demonstrated techniques, and evaluated assignments around image processing and deep learning.',
            tools: ['Computer Vision', 'Data Visualization', 'Python', 'OpenCV', 'TensorFlow', 'Matplotlib'],
            highlights: [
              'Guided lab sessions for 50+ students on Computer Vision and Data Visualization.',
              'Prepared lab materials based on Python, OpenCV, and modern visualization libraries.',
              'Demonstrated deep learning techniques and evaluated student implementations.',
              'Assisted in troubleshooting TensorFlow models built by students.'
            ],
            demoUrl: 'https://unej.ac.id'
          },
          {
            period: 'Feb - Jun 2025',
            title: 'Data Scientist Intern',
            org: 'Social Economic Accelerator Lab (SEAL)',
            image: fariedImage,
            focus: 'Data engineering and cleansing',
            impact: 'Improved dataset consistency across 3,000+ government records and reduced merge issues through semantic matching workflows.',
            summary: 'Built an automated cleansing module for 3,000+ government datasets, used Sentence-BERT and TF-IDF similarity for regional data matching, and configured ETL pipelines with Apache NiFi and Airflow.',
            tools: ['Sentence-BERT', 'TF-IDF', 'Airflow'],
            highlights: [
              'Built an automated data cleansing module for 3000+ government datasets.',
              'Utilized Sentence-BERT and TF-IDF architectures to match regional data similarities.',
              'Configured ETL (Extract, Transform, Load) pipelines using Apache NiFi.',
              'Orchestrated data processing pipelines with Apache Airflow.'
            ],
            demoUrl: 'https://seal.or.id'
          },
          {
            period: 'Sep - Dec 2024',
            title: 'Student Machine Learning',
            org: 'Bangkit Academy 2024',
            image: bangkitCert,
            focus: 'Applied ML and deployment',
            impact: 'Built a model-driven agriculture solution with measurable accuracy and formal recognition through certification and graduate distinction.',
            summary: 'Built TomKits for tomato disease detection using EfficientNet with 98% accuracy and earned TensorFlow Developer Professional Certificate plus Graduate Distinction.',
            tools: ['EfficientNet', 'Flask', 'REST API'],
            highlights: [
              'Graduated with Distinction (Top Graduate) from the Bangkit Academy program.',
              'Trained an EfficientNet model for tomato disease detection with 98% accuracy.',
              'Deployed the model into a REST API using Flask.',
              'Earned TensorFlow Developer Professional certification.'
            ],
            repoUrl: 'https://github.com/TomKits'
          }
        ]
      },
      projects: {
        title: 'Featured Projects',
        copy: 'A curated showcase of AI, Computer Vision, and Web Development projects I have built from early research to production-ready solutions.',
        tracks: ['All', 'AI Engineer', 'Data', 'Software Development', 'Game Development'] as ProjectTrack[],
        showingParams: (count: number, track: string) => `Showing ${count} projects in ${track === 'All' ? 'all areas' : track}.`,
        showMore: 'View more',
        hideMore: 'Hide other projects',
        seeMore: 'View more',
        detail: 'Detail',
        seeDetail: 'View details',
        close: 'Close',
        highlights: 'Project Highlights',
        seeGithub: 'View GitHub',
        seeDemo: 'View Demo',
        items: [
          {
            title: 'AI Assistant Chatbot for Pharmacy POS',
            category: 'LLM · RAG · NLP',
            period: 'Apr 2026',
            image: [aichatbotkskImage, chatbotkskImage],
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: true,
            outcome: 'Added semantic retrieval and medication recommendation support for a pharmacy workflow.',
            summary: 'Hybrid retrieval-augmented generation chatbot with LangChain, FAISS, local LLM via Ollama, Sentence-BERT semantic search, and FastAPI integration for medication recommendations.',
            stack: ['LangChain', 'FAISS', 'Ollama'],
            demoUrl: 'https://huggingface.co/spaces/fariedalfarizi/kasirsehatku-chatbot',
            highlights: ['RAG pipeline for medication data', 'Semantic search with Sentence-BERT', 'FastAPI integration into POS flow'],
          },
          {
            title: 'Kasir-Sehatku',
            summary: 'Web-based pharmacy cashier application to manage transactions and medicine inventory.',
            image: [kasirSehatku, wkskImage, wksk1Image],
            category: 'Web App',
            period: 'Mar 2026',
            tracks: ['Software Development'] as ProjectTrack[],
            featured: true,
            outcome: 'Simplified daily transaction recording and medicine stock management efficiently.',
            stack: ['Laravel', 'PHP', 'MySQL'],
            demoUrl: 'http://kasir-sehatku.com/',
            demoLabel: 'Visit Website',
            highlights: ['Medicine stock and inventory management', 'Daily cashier transaction recording', 'Built using the Laravel framework'],
          },
          {
            title: 'AI Public Speaking Coach',
            category: 'Computer Vision · Speech · NLP',
            period: 'Nov 2025',
            image: flyPaperImage,
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: true,
            outcome: 'Turned multimodal signals into actionable feedback for speaking performance.',
            summary: 'Multi-modal AI system using MediaPipe, YOLO, BERT, Wav2Vec2, and Silero VAD to analyze posture, articulation, filler words, tempo, and topic relevance.',
            stack: ['MediaPipe', 'YOLO', 'BERT'],
            repoUrl: 'https://github.com/ziee2/AI-Public-Speaking_-SWARA',
            demoUrl: 'https://huggingface.co/Cyberlace',
            demoLabel: 'Hugging Face',
            highlights: ['Real-time pose and gesture analysis', 'Voice and speaking tempo evaluation', 'Actionable recommendations'],
          },
          {
            title: 'ChiCheck',
            category: 'Computer Vision · Web App',
            period: 'May 2024',
            image: [chicheckMainImage, chicheckSubImage, chckcvImage],
            tracks: ['Software Development', 'AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Chicken Manure Scan Application: A website application for scanning chicken diseases via manure, and management logging such as feed and disease history.',
            summary: 'Chicken Manure Scan Application: A disease detection app via manure scanning using a CNN model (EfficientNetB3), complete with integrated management features for feed tracking and disease history.',
            stack: ['EfficientNetB3', 'Flask', 'Laravel', 'React'],
            repoUrl: 'https://github.com/ziee2/ChiCheck-WEB',
            highlights: ['Disease classification model based on manure images', 'History logging and feed management system', 'API integration between machine learning model and website'],
          },
          {
            title: 'Apple Leaf Rust Instance Segmentation Annotation',
            summary: 'Instance segmentation dataset annotation for apple leaf rust disease totaling 142 images (101 training, 41 evaluation) covering leaf, rust, apple, and background classes.',
            image: [dataAnotasiDaunImage, segdaunImage, segmentasiresultImage],
            category: 'Data Annotation',
            period: 'Dec 2025',
            tracks: ['Data'] as ProjectTrack[],
            featured: false,
            outcome: 'Generated a total of 39 apple, 445 leaf, and 869 rust instance annotations.',
            stack: ['Data Labeling', 'Roboflow', 'CVAT', 'Instance Segmentation'],
            repoUrl: 'https://app.roboflow.com/segmentasi-penyakit-daun-apel/segmentasi-penyakit-daun-apel-kl49q/browse?queryText=&pageSize=50&startingIndex=0&browseQuery=true',
            repoLabel: 'Roboflow Dataset',
            highlights: ['Created polygon annotations for apple leaf rust segmentation', 'Split the dataset into 101 training and 41 evaluation images', 'Labeled 869 rust instances, 445 leaves, and 39 apples', 'Included background as an explicit class to improve model robustness'],
          },
          {
            title: 'FlyPaper',
            summary: 'Endless runner game project.',
            image: flyPaperImage,
            category: 'Game Development',
            period: 'Dec 2023',
            tracks: ['Game Development'] as ProjectTrack[],
            featured: false,
            outcome: 'Shows product execution beyond AI through a polished interactive build.',
            stack: ['Unity', 'Game Design'],
            repoUrl: 'https://github.com/Bee3-Team/Bee3',
            highlights: ['Endless runner game loop', 'Feedback-driven gameplay iteration', 'Product execution from idea to prototype'],
          },
          {
            title: 'I-Care',
            summary: 'Express.js and Socket.io project for custom bot creation.',
            image: chickenScanImage,
            category: 'Web App',
            period: 'Dec 2023',
            tracks: ['Software Development'] as ProjectTrack[],
            featured: false,
            outcome: 'Demonstrates realtime web engineering and service orchestration.',
            stack: ['Express.js', 'Socket.io'],
            repoUrl: 'https://github.com/Vins2106/zhat.cf',
            highlights: ['Real-time communication using Socket.io', 'Bot service integration with Node.js', 'Modular backend architecture'],
          },
          {
            title: 'Apple Leaf Rust Disease Segmentation',
            summary: 'Computer vision rust disease segmentation on leaves using Mask R-CNN with 3 backbones (ResNet50V2, EfficientNetB4, DenseNet201) and custom data annotation.',
            image: [segdaunImage, segmentasiresultImage],
            category: 'Computer Vision',
            period: 'Dec 2025',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Compared the performance of 3 backbones in Mask R-CNN architecture for precise leaf image segmentation.',
            stack: ['Mask R-CNN', 'ResNet50V2', 'EfficientNetB4', 'DenseNet201'],
            highlights: ['Annotated rust disease images on leaves', 'Trained Mask R-CNN models with 3 different backbones', 'Evaluated instance segmentation performance'],
          },
          {
            title: 'Computer Vision & IoT (Snack & Mouse Detection)',
            summary: 'Personal project detecting objects using YOLO and integrating with Arduino Uno.',
            image: comvisiotImage,
            category: 'Computer Vision · IoT',
            period: 'Feb 2026',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Automated hardware responses (slow/fast blinking LED) based on camera object detection.',
            stack: ['YOLO', 'Arduino Uno', 'Python'],
            videoUrl: 'https://www.youtube.com/embed/vOM4ZAMoyPs',
            highlights: ['Real-time object detection with YOLO', 'Hardware integration via Arduino serial', 'Automated response system based on plug in/plug off logic'],
          },
          {
            title: 'Product Review Sentiment Analysis',
            summary: 'Sentiment analysis project on Shopee app reviews from the Play Store using deep learning models.',
            image: flyPaperImage,
            category: 'NLP · Deep Learning',
            period: 'May 2025',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Performed sentiment classification using GRU, LSTM, and CNN approaches.',
            stack: ['GRU', 'LSTM', 'CNN', 'Web Scraping'],
            repoUrl: 'https://github.com/ziee2/Dicoding---BFDL---Sentimen-Analysis',
            highlights: ['Web scraped Shopee app reviews from Play Store', 'Natural Language Processing (NLP) for Indonesian text', 'Evaluated GRU, LSTM, and CNN classification performance'],
          },
          {
            title: 'Anime Recommendation System',
            summary: 'Built an anime recommendation engine using collaborative filtering approaches (user-based & item-based).',
            image: projectDashboardImage,
            category: 'Machine Learning',
            period: 'Apr 2025',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Provided personalized anime recommendations based on user preference patterns.',
            stack: ['Collaborative Filtering', 'Python', 'Pandas'],
            repoUrl: 'https://github.com/ziee2/Dicoding_MLT_Submission2',
            highlights: ['Implemented user-based collaborative filtering', 'Implemented item-based collaborative filtering', 'Analyzed similarity matrices for recommendations'],
          },
          {
            title: 'CV EHPRA FARM',
            summary: 'Company profile website for CV EHPRA Farm built using HTML and CSS.',
            image: cvehprafarmImage,
            category: 'Web Development',
            period: 'Feb 2026',
            tracks: ['Software Development'] as ProjectTrack[],
            featured: false,
            outcome: 'Provided an interactive and responsive digital profile for the company’s business needs.',
            stack: ['HTML', 'CSS'],
            repoUrl: 'https://github.com/ziee2/EHPRA-Farm',
            demoUrl: 'http://cvehprafarm.com/',
            demoLabel: 'Visit Website',
            highlights: ['Responsive interface design', 'Pure development using HTML and CSS', 'SEO-friendly website structure'],
          },
          {
            title: 'TomKits',
            summary: 'A Machine Learning-based Computer Vision application to detect tomato diseases via leaves and evaluate tomato quality and ripeness. Includes disease solutions and practical plant care recommendations.',
            image: tomkitsImage,
            category: 'Computer Vision',
            period: 'Nov - Dec 2024',
            tracks: ['AI Engineer'] as ProjectTrack[],
            featured: false,
            outcome: 'Associated with Bangkit Academy (Google, GoTo, Traveloka). Helps farmers detect tomato diseases and evaluate ripeness.',
            stack: ['Machine Learning', 'Computer Vision', 'Bangkit Academy'],
            repoUrl: 'https://github.com/TomKits',
            repoLabel: 'GitHub',
            highlights: ['Tomato disease detection from leaves', 'Evaluation of tomato quality and ripeness', 'Associated with Bangkit Academy'],
          }
        ]
      },
      skills: {
        title: 'Skills',
        copy: 'The core technical skills and toolsets I leverage to process data, train AI models, and deploy applications.',
        groups: [
          { title: 'AI / ML', items: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'Hugging Face', 'LLM', 'RAG', 'Flask', 'FastAPI'] },
          { title: 'Data', items: ['SQL', 'MySQL', 'PostgreSQL', 'ETL', 'Apache NiFi', 'Airflow', 'Web Scraping', 'Kaggle', 'Roboflow'] },
          { title: 'Web / Deployment', items: ['PHP', 'JavaScript', 'Laravel', 'Docker', 'REST API', 'Git', 'Agile collaboration'] },
        ]
      },
      certificates: {
        title: 'Certificates',
        copy: 'Tangible proof of my commitment to continuous learning and validating my expertise in artificial intelligence and software engineering.',
      },
      closing: {
        note: 'Closing Note',
        title: '"Hope is not a strategy, but it is the fuel that keeps every great strategy alive."',
        desc: 'Keep learning, innovating, and building meaningful solutions. Because the future is not just planned, it is created through hard work today.'
      }
    }
  }
};
