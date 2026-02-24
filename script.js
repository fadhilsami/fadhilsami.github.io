// Data para penemu
const inventors = [
    {
        id: 1,
        name: "Thomas Alva Edison",
        country: "Amerika Serikat",
        invention: "Lampu Pijar",
        category: "elektro",
        image: "Thomas.jpg",
        bio: {
            birth: "11 Februari 1847",
            death: "18 Oktober 1931",
            background: "Thomas Alva Edison adalah penemu dan pengusaha Amerika yang mengembangkan banyak perangkat penting. Ia disebut sebagai penemu terbesar Amerika dengan 1.093 paten Amerika atas namanya, serta banyak paten di Inggris, Prancis, dan Jerman.",
            career: "Edison memulai kariernya sebagai operator telegraf, yang menginspirasinya untuk menciptakan perangkat-perangkat listrik. Ia mendirikan laboratorium penelitian industri pertama di dunia di Menlo Park, New Jersey, di mana banyak penemuannya dikembangkan.",
            inventionDetail: "Lampu pijar praktis pertama yang dapat bertahan lama dan tersedia secara komersial adalah salah satu penemuan terbesarnya. Ia juga mengembangkan sistem distribusi listrik untuk memberikan daya ke rumah dan bisnis.",
            impact: "Penemuan Edison, terutama lampu pijar dan sistem distribusi listrik, merevolusi kehidupan modern dengan memungkinkan aktivitas di malam hari dan mengubah industri. Ia juga berkontribusi pada pengembangan fonograf, kamera film, dan baterai alkali."
        }
    },
    {
        id: 2,
        name: "Nikola Tesla",
        country: "Austria-Hungaria (kini Kroasia)",
        invention: "Arus Bolak-Balik (AC)",
        category: "elektro",
        image: "Nikola.jpg",
        bio: {
            birth: "10 Juli 1856",
            death: "7 Januari 1943",
            background: "Nikola Tesla adalah seorang penemu, insinyur listrik, insinyur mesin, dan futuris berkebangsaan Serbia-Amerika. Ia dikenal karena kontribusinya terhadap desain sistem pasokan listrik arus bolak-balik (AC) modern.",
            career: "Tesla bekerja di Budapest Telephone Exchange dan Continental Edison Company sebelum beremigrasi ke Amerika Serikat pada tahun 1884. Ia kemudian bekerja sebentar dengan Thomas Edison sebelum berpisah karena perbedaan pendapat tentang arus listrik.",
            inventionDetail: "Tesla mengembangkan motor induksi AC, sistem distribusi daya AC, dan transformator Tesla yang digunakan dalam teknologi nirkabel. Ia juga mematenkan ratusan penemuan lainnya dalam berbagai bidang.",
            impact: "Sistem arus bolak-balik Tesla menjadi standar global untuk transmisi dan distribusi listrik. Karyanya menjadi dasar bagi banyak teknologi modern termasuk komunikasi nirkabel, radar, dan robotika."
        }
    },
    {
        id: 3,
        name: "Alexander Graham Bell",
        country: "Skotlandia / Amerika Serikat",
        invention: "Telepon",
        category: "elektro",
        image: "Alexander Graham Bell.jpg",
        bio: {
            birth: "3 Maret 1847",
            death: "2 Agustus 1922",
            background: "Alexander Graham Bell adalah seorang ilmuwan, penemu, dan insinyur yang dikreditkan dengan penemuan dan pengembangan telepon praktis pertama. Ia juga salah satu pendiri American Telephone and Telegraph Company (AT&T).",
            career: "Bell berasal dari keluarga yang tertarik pada masalah pendidikan untuk orang tuli. Pengetahuannya tentang suara dan musik membantunya bereksperimen dengan perangkat transmisi suara. Ia adalah profesor fisiologi vokal di Boston University.",
            inventionDetail: "Pada tahun 1876, Bell menerima paten untuk telepon elektromagnetiknya yang menggunakan arus bolak-balik untuk menghasilkan suara yang dapat dikenali. Ia juga melakukan pekerjaan penting dalam komunikasi optik, pesawat terbang, dan hidrofoil.",
            impact: "Penemuan telepon merevolusi komunikasi global dan menjadi dasar bagi industri telekomunikasi modern. Bell juga berkontribusi pada pengembangan rekaman suara, kedirgantaraan, dan pendidikan untuk tunarungu."
        }
    },
    {
        id: 4,
        name: "Marie Curie",
        country: "Polandia / Prancis",
        invention: "Radium dan Polonium",
        category: "sains",
        image: "Marie.jpg",
        bio: {
            birth: "7 November 1867",
            death: "4 Juli 1934",
            background: "Marie Curie adalah seorang fisikawan dan kimiawan Polandia-Prancis yang melakukan penelitian perintis tentang radioaktivitas. Ia adalah wanita pertama yang memenangkan Hadiah Nobel, dan orang pertama yang memenangkan dua Hadiah Nobel dalam dua bidang ilmiah yang berbeda.",
            career: "Curie adalah profesor wanita pertama di University of Paris. Ia mendirikan Curie Institutes di Paris dan Warsaw, yang hingga hari ini tetap menjadi pusat utama penelitian medis. Ia melakukan sebagian besar pekerjaannya bersama suaminya, Pierre Curie.",
            inventionDetail: "Curie menemukan dua unsur radioaktif: polonium dan radium. Ia juga mengembangkan teknik untuk mengisolasi isotop radioaktif dan menyelidiki penggunaan radioaktivitas dalam pengobatan.",
            impact: "Penelitian Curie membuka jalan bagi terapi radiasi dalam pengobatan kanker. Ia mendirikan dasar bagi ilmu nuklir modern dan radiofarmasi. Warisannya menginspirasi generasi ilmuwan wanita di seluruh dunia."
        }
    },
    {
        id: 5,
        name: "Leonardo da Vinci",
        country: "Italia",
        invention: "Konsep Helikopter & Mesin Terbang",
        category: "medis",
        image: "Leonardo.jpg",
        bio: {
            birth: "15 April 1452",
            death: "2 Mei 1519",
            background: "Leonardo da Vinci adalah seorang polimatik Italia dari zaman Renaisans yang aktif sebagai pelukis, pemahat, arsitek, ilmuwan, musisi, matematikawan, insinyur, penemu, anatomis, ahli geologi, ahli botani, dan penulis.",
            career: "Da Vinci magang di studio seniman ternama Andrea del Verrocchio di Florence. Ia kemudian bekerja untuk berbagai patron, termasuk Duke of Milan dan Raja Francis I dari Prancis. Ia menghabiskan tahun-tahun terakhirnya di Prancis.",
            inventionDetail: "Meskipun terkenal sebagai pelukis Mona Lisa dan The Last Supper, da Vinci juga merancang banyak penemuan visioner seperti mesin terbang, alat musik, pompa hidrolik, meriam revolusi, dan parasut.",
            impact: "Da Vinci adalah contoh utama dari 'manusia Renaisans' yang menggabungkan ilmu pengetahuan dan seni. Karya dan sketsanya memberikan wawasan tentang masa depan teknologi dan seni ratusan tahun sebelum realisasinya."
        }
    },
    {
        id: 6,
        name: "Louis Pasteur",
        country: "Prancis",
        invention: "Vaksinasi & Pasteurisasi",
        category: "medis",
        image: "Louis.jpg",
        bio: {
            birth: "27 Desember 1822",
            death: "28 September 1895",
            background: "Louis Pasteur adalah seorang ahli kimia dan mikrobiolog Prancis yang dikenal karena penemuannya tentang prinsip vaksinasi, fermentasi mikroba, dan pasteurisasi. Karyanya menyelamatkan jutaan nyawa melalui pengembangan vaksin dan proses keamanan pangan.",
            career: "Pasteur adalah direktur studi di École Normale Supérieure dan mendirikan Institut Pasteur di Paris pada tahun 1887. Ia menjabat sebagai direktur institut tersebut sampai kematiannya. Karyanya merevolusi kedokteran dan kesehatan masyarakat.",
            inventionDetail: "Pasteur mengembangkan vaksin pertama untuk rabies dan antraks. Ia juga menemukan proses pasteurisasi yang membunuh bakteri berbahaya dalam susu dan anggur. Penelitiannya membantah teori generasi spontan.",
            impact: "Pasteur dianggap sebagai bapak mikrobiologi modern. Penemuannya mendirikan dasar untuk imunologi dan pengobatan penyakit menular. Proses pasteurisasi masih digunakan di seluruh dunia untuk keamanan pangan."
        }
    }
];

// Data timeline penemuan
const timelineData = [
    { year: "1452", title: "Kelahiran Leonardo da Vinci", inventor: "Leonardo da Vinci", description: "Lahir di Vinci, Italia. Ia kemudian menjadi salah satu pemikir paling visioner dalam sejarah." },
    { year: "1847", title: "Kelahiran Thomas Edison & Alexander Graham Bell", inventor: "Edison & Bell", description: "Tahun kelahiran dua penemu besar: Thomas Edison (Amerika) dan Alexander Graham Bell (Skotlandia)." },
    { year: "1856", title: "Kelahiran Nikola Tesla", inventor: "Nikola Tesla", description: "Lahir di Smiljan, Kekaisaran Austria (kini Kroasia). Ia akan merevolusi sistem kelistrikan dunia." },
    { year: "1867", title: "Kelahiran Marie Curie", inventor: "Marie Curie", description: "Lahir di Warsaw, Polandia. Ia akan menjadi wanita pertama pemenang Hadiah Nobel dan penemu radium." },
    { year: "1876", title: "Telepon Dipatenkan", inventor: "Alexander Graham Bell", description: "Bell menerima paten untuk penemuan telepon, mengubah komunikasi manusia selamanya." },
    { year: "1879", title: "Lampu Pijar Dipraktikkan", inventor: "Thomas Edison", description: "Edison menciptakan lampu pijar praktis pertama yang dapat bertahan lama." },
    { year: "1888", title: "Motor AC Dipatenkan", inventor: "Nikola Tesla", description: "Tesla mematenkan motor induksi AC, mendorong adopsi arus bolak-balik secara luas." },
    { year: "1895", title: "Sinar-X Ditemukan", inventor: "Wilhelm Röntgen", description: "Penemuan sinar-X membuka era baru dalam diagnosis medis (meskipun bukan oleh penemu dalam daftar kami)." },
    { year: "1898", title: "Radium Ditemukan", inventor: "Marie Curie", description: "Curie menemukan unsur radioaktif radium dan polonium, memenangkan Hadiah Nobel pertamanya." },
    { year: "1928", title: "Penisilin Ditemukan", inventor: "Alexander Fleming", description: "Fleming menemukan penisilin, antibiotik pertama yang menyelamatkan jutaan nyawa." }
];

// DOM Elements
const penemuGrid = document.getElementById('penemuGrid');
const biografiDetail = document.getElementById('biografiDetail');
const biografiContainer = document.querySelector('.biografi-container');
const timelineContainer = document.getElementById('timelineContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const themeToggleBtn = document.getElementById('themeToggleBtn');

// Fungsi untuk toggle dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Update icon
    const icon = themeToggleBtn.querySelector('i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Cek preferensi tema tersimpan
function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = themeToggleBtn.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Fungsi untuk merender kartu penemu
function renderInventorCards(filter = 'all') {
    penemuGrid.innerHTML = '';
    
    const filteredInventors = filter === 'all' 
        ? inventors 
        : inventors.filter(inventor => inventor.category === filter);
    
    filteredInventors.forEach(inventor => {
        const card = document.createElement('div');
        card.className = 'penemu-card';
        card.setAttribute('data-category', inventor.category);
        
        card.innerHTML = `
            <div class="card-img">
                <img src="${inventor.image}" alt="${inventor.name}">
            </div>
            <div class="card-content">
                <h3>${inventor.name}</h3>
                <span class="country">${inventor.country}</span>
                <p class="invention">Penemuan: ${inventor.invention}</p>
                <button class="btn view-bio-btn" data-id="${inventor.id}">Baca Biografi</button>
            </div>
        `;
        
        penemuGrid.appendChild(card);
    });
    
    // Tambahkan event listener untuk tombol biografi
    document.querySelectorAll('.view-bio-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const inventorId = parseInt(this.getAttribute('data-id'));
            showBiography(inventorId);
        });
    });
}

// Fungsi untuk menampilkan biografi detail
function showBiography(inventorId) {
    const inventor = inventors.find(inv => inv.id === inventorId);
    if (!inventor) return;
    
    // Sembunyikan section lain dan tampilkan biografi detail
    document.querySelector('.penemu-section').style.display = 'none';
    document.querySelector('.timeline-section').style.display = 'none';
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    
    // Tampilkan biografi detail
    biografiDetail.classList.add('active');
    
    // Isi konten biografi
    biografiContainer.innerHTML = `
        <button class="btn back-btn" id="backToInventors">
            <i class="fas fa-arrow-left"></i> Kembali ke Daftar Penemu
        </button>
        
        <div class="biografi-header">
            <div class="biografi-img">
                <img src="${inventor.image}" alt="${inventor.name}">
            </div>
            <div class="biografi-info">
                <h2>${inventor.name}</h2>
                <span class="country">${inventor.country}</span>
                <p class="invention">Penemuan: ${inventor.invention}</p>
            </div>
        </div>

        <div class="biografi-content">
            <h3>Latar Belakang</h3>
            <p>${inventor.bio.background}</p>

            <h3>Karier</h3>
            <p>${inventor.bio.career}</p>

            <h3>Detail Penemuan</h3>
            <p>${inventor.bio.inventionDetail}</p>

            <h3>Dampak</h3>
            <p>${inventor.bio.impact}</p>
        </div>
    ` ;
    
    // Tambahkan event listener untuk tombol kembali
    document.getElementById('backToInventors').addEventListener('click', function() {
        biografiDetail.classList.remove('active');
        document.querySelector('.penemu-section').style.display = 'block';
        document.querySelector('.timeline-section').style.display = 'block';
        document.querySelector('.hero').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
    });
}

// Fungsi untuk merender timeline
function renderTimeline() {
    timelineContainer.innerHTML = '';

    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p class="inventor">${item.inventor}</p>
                <p>${item.description}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);

        // Tambahkan animasi dengan delay
        setTimeout(() => {
            timelineItem.classList.add('visible');
        }, index * 200);
    });
}

// Inisialisasi halaman
document.addEventListener('DOMContentLoaded', function() {
    renderInventorCards();
    renderTimeline();

    // Event listener untuk tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderInventorCards(filter);
        });
    });

    // Event listener untuk menu mobile
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Event listener untuk toggle tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
        checkTheme();
    }
});
