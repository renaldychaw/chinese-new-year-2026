// Fortune messages for angpao - 88 keberuntungan (angka keberuntungan Cina)
const fortunes = [
    // Rezeki & Kekayaan (1-15)
    {
        text: "💰 Rezeki berlimpah akan mengalir ke hidup Anda tahun ini. Peluang bisnis baru menanti!",
        emojis: ["💰", "💵", "💴", "💶"]
    },
    {
        text: "💎 Investasi Anda akan memberikan keuntungan berlipat ganda. Waktu yang tepat untuk berani!",
        emojis: ["💎", "📈", "💰", "✨"]
    },
    {
        text: "🏦 Tabungan meningkat drastis. Stabilitas finansial sudah di depan mata!",
        emojis: ["🏦", "💵", "📊", "🎯"]
    },
    {
        text: "💸 Bonus tak terduga akan datang dari berbagai sumber. Bersiaplah menerima!",
        emojis: ["💸", "🎁", "💰", "🌟"]
    },
    {
        text: "🤑 Peluang penghasilan pasif terbuka lebar. Kekayaan finansial menanti Anda!",
        emojis: ["🤑", "💵", "🏆", "✨"]
    },
    {
        text: "💳 Hutang lunas, kredit meningkat. Kebebasan finansial semakin dekat!",
        emojis: ["💳", "✅", "🎊", "💫"]
    },
    {
        text: "🎰 Keberuntungan finansial luar biasa! Rejeki nomplok sudah menunggu!",
        emojis: ["🎰", "🍀", "💰", "🎉"]
    },
    {
        text: "💼 Kontrak menguntungkan dan kesepakatan bisnis sukses di tahun ini!",
        emojis: ["💼", "🤝", "📝", "⭐"]
    },
    {
        text: "🏅 Proyek besar berhasil dan profit melampaui target. Tahun penuh kemenangan!",
        emojis: ["🏅", "🎯", "💰", "🚀"]
    },
    {
        text: "💵 Gaji naik signifikan. Apresiasi finansial untuk kerja keras Anda!",
        emojis: ["💵", "📈", "🎊", "💪"]
    },
    {
        text: "🏪 Usaha berkembang pesat. Pelanggan setia semakin bertambah!",
        emojis: ["🏪", "📊", "👥", "✨"]
    },
    {
        text: "💰 Warisan atau hadiah besar tak terduga akan mengubah hidup Anda!",
        emojis: ["💰", "🎁", "😊", "🌟"]
    },
    {
        text: "🪙 Uang datang dari arah yang tidak pernah Anda bayangkan!",
        emojis: ["🪙", "💫", "🎊", "💰"]
    },
    {
        text: "💎 Aset berharga Anda meningkat nilainya. Investasi terbayar lunas!",
        emojis: ["💎", "📈", "🏆", "✨"]
    },
    {
        text: "🎯 Target finansial tercapai lebih cepat dari rencana. Mantap!",
        emojis: ["🎯", "✅", "💰", "🎉"]
    },

    // Cinta & Hubungan (16-30)
    {
        text: "❤️ Cinta sejati akan menemukan jalan ke hati Anda. Hubungan akan semakin harmonis.",
        emojis: ["❤️", "💕", "💖", "💝"]
    },
    {
        text: "💑 Pasangan hidup ideal akan muncul di tahun ini. Bersiaplah!",
        emojis: ["💑", "💘", "🌹", "✨"]
    },
    {
        text: "💍 Komitmen serius dalam hubungan. Pernikahan atau pertunangan di depan mata!",
        emojis: ["💍", "💒", "💐", "🎊"]
    },
    {
        text: "🌹 Romansa kembali berkobar dalam hubungan lama. Cinta makin mesra!",
        emojis: ["🌹", "❤️", "🔥", "💕"]
    },
    {
        text: "👨‍👩‍👧‍👦 Keluarga harmonis dan penuh kasih sayang. Ikatan semakin kuat!",
        emojis: ["👨‍👩‍👧‍👦", "❤️", "🏠", "😊"]
    },
    {
        text: "💝 Seseorang mengagumi Anda diam-diam. Cinta baru akan terungkap!",
        emojis: ["💝", "😍", "💘", "✨"]
    },
    {
        text: "🥰 Hubungan lama yang retak akan tersembuhkan. Rekonsiliasi indah menanti!",
        emojis: ["🥰", "🤝", "💖", "🌈"]
    },
    {
        text: "💞 Pertemuan takdir dengan belahan jiwa Anda sudah dekat!",
        emojis: ["💞", "⭐", "💫", "❤️"]
    },
    {
        text: "👫 Persahabatan berubah menjadi cinta yang indah. Hubungan spesial dimulai!",
        emojis: ["👫", "💕", "🌟", "😊"]
    },
    {
        text: "💐 Pujian dan perhatian dari orang terkasih membuat hati berbunga!",
        emojis: ["💐", "🌺", "❤️", "✨"]
    },
    {
        text: "🎁 Kejutan romantis dari pasangan. Tahun penuh sweet moment!",
        emojis: ["🎁", "💝", "😍", "🎉"]
    },
    {
        text: "🌙 Malam romantis dan kenangan indah tercipta bersama orang tersayang!",
        emojis: ["🌙", "⭐", "💕", "✨"]
    },
    {
        text: "💏 Komunikasi dalam hubungan semakin baik. Saling memahami dengan sempurna!",
        emojis: ["💏", "💬", "❤️", "🤝"]
    },
    {
        text: "🎀 Hadiah penuh cinta dari hati yang tulus akan Anda terima!",
        emojis: ["🎀", "💝", "😊", "💖"]
    },
    {
        text: "💗 Cinta keluarga dan teman semakin erat. Dikelilingi orang-orang yang peduli!",
        emojis: ["💗", "👨‍👩‍👧", "👥", "🌟"]
    },

    // Kesuksesan & Karir (31-45)
    {
        text: "🏆 Kesuksesan besar menanti di depan! Usaha keras Anda akan membuahkan hasil luar biasa.",
        emojis: ["🏆", "🎯", "⭐", "🌟"]
    },
    {
        text: "📈 Karir melesat naik! Promosi dan pengakuan dari atasan sudah di depan mata.",
        emojis: ["📈", "💼", "🎯", "🚀"]
    },
    {
        text: "🎖️ Penghargaan bergengsi untuk pencapaian luar biasa Anda!",
        emojis: ["🎖️", "🏅", "👏", "✨"]
    },
    {
        text: "💼 Tawaran pekerjaan impian datang. Karir cemerlang dimulai!",
        emojis: ["💼", "🌟", "🎯", "🚀"]
    },
    {
        text: "👔 Posisi kepemimpinan menanti Anda. Waktunya shine dan memimpin!",
        emojis: ["👔", "⭐", "💪", "🏆"]
    },
    {
        text: "🎓 Prestasi akademik atau profesional membanggakan. Sertifikasi penting didapat!",
        emojis: ["🎓", "📚", "🏆", "✨"]
    },
    {
        text: "🚀 Proyek ambisius berhasil gemilang. Reputasi profesional meningkat!",
        emojis: ["🚀", "⭐", "💼", "🎯"]
    },
    {
        text: "🌟 Bakat tersembunyi Anda diakui. Kesempatan emas terbuka lebar!",
        emojis: ["🌟", "💫", "🎭", "✨"]
    },
    {
        text: "🎯 Semua target kerja tercapai dengan sempurna. Boss impressed!",
        emojis: ["🎯", "✅", "👍", "🎊"]
    },
    {
        text: "💪 Kinerja luar biasa membuat Anda menjadi pegawai teladan!",
        emojis: ["💪", "🏆", "⭐", "🎉"]
    },
    {
        text: "🏅 Kompetisi besar dimenangkan. Anda juara sejati!",
        emojis: ["🏅", "🥇", "🎊", "✨"]
    },
    {
        text: "📊 Presentasi atau pitch Anda sukses total. Deal besar ditangan!",
        emojis: ["📊", "💼", "🤝", "🎯"]
    },
    {
        text: "🎪 Networking membawa peluang karir fantastis. Koneksi emas terjalin!",
        emojis: ["🎪", "🤝", "💼", "⭐"]
    },
    {
        text: "🔑 Kunci kesuksesan ada di tangan Anda. Tahun breakthrough!",
        emojis: ["🔑", "🚪", "✨", "🌟"]
    },
    {
        text: "⚡ Produktivitas maksimal. Output kerja Anda luar biasa mengesankan!",
        emojis: ["⚡", "💯", "🎯", "🚀"]
    },

    // Kebahagiaan & Keberuntungan (46-60)
    {
        text: "🌈 Kebahagiaan melimpah akan menyelimuti keluarga Anda sepanjang tahun.",
        emojis: ["🌈", "😊", "🎊", "🎉"]
    },
    {
        text: "🍀 Keberuntungan luar biasa! Segala hal akan berjalan sesuai rencana tahun ini.",
        emojis: ["🍀", "🎰", "🎲", "✨"]
    },
    {
        text: "😄 Senyuman tak pernah lepas dari wajah. Tahun penuh tawa dan kegembiraan!",
        emojis: ["😄", "😊", "🎉", "💫"]
    },
    {
        text: "🎉 Perayaan demi perayaan menanti. Tahun penuh moment bahagia!",
        emojis: ["🎉", "🎊", "🥳", "🎈"]
    },
    {
        text: "🌞 Energi positif mengalir setiap hari. Optimisme tinggi sepanjang tahun!",
        emojis: ["🌞", "✨", "😊", "🌟"]
    },
    {
        text: "🎁 Kejutan menyenangkan datang bertubi-tubi. Hadiah tak terduga menanti!",
        emojis: ["🎁", "🎀", "😍", "💫"]
    },
    {
        text: "🌸 Inner peace dan ketenangan jiwa tercapai. Hidup harmonis dimulai!",
        emojis: ["🌸", "🧘", "☮️", "✨"]
    },
    {
        text: "🎊 Mimpi-mimpi indah menjadi kenyataan. Tahun ajaib dimulai!",
        emojis: ["🎊", "⭐", "🌟", "💫"]
    },
    {
        text: "🥳 Liburan impian dan petualangan seru menanti. Bersenang-senanglah!",
        emojis: ["🥳", "✈️", "🌴", "😎"]
    },
    {
        text: "💫 Bintang keberuntungan bersinar terang untuk Anda!",
        emojis: ["💫", "⭐", "🌟", "✨"]
    },
    {
        text: "🎪 Hiburan dan kesenangan berlimpah. Enjoy every moment!",
        emojis: ["🎪", "🎭", "🎨", "🎉"]
    },
    {
        text: "🌺 Kehidupan sosial yang vibrant. Diundang ke berbagai acara menarik!",
        emojis: ["🌺", "🎉", "👥", "🥂"]
    },
    {
        text: "🎈 Mood selalu baik. Vibes positif menarik hal-hal baik!",
        emojis: ["🎈", "😊", "✨", "🌈"]
    },
    {
        text: "🌅 Setiap hari adalah hari yang indah. Grateful heart, happy life!",
        emojis: ["🌅", "🌄", "💖", "😊"]
    },
    {
        text: "🎵 Musik kehidupan Anda merdu dan harmonis. Dance through life!",
        emojis: ["🎵", "🎶", "💃", "✨"]
    },

    // Kesehatan & Vitalitas (61-70)
    {
        text: "💪 Kesehatan prima dan energi melimpah akan menyertai Anda. Tahun yang penuh vitalitas!",
        emojis: ["💪", "🏃", "🧘", "🌱"]
    },
    {
        text: "🏃 Stamina dan daya tahan tubuh meningkat drastis. Fit dan bugar!",
        emojis: ["🏃", "⚡", "💪", "✨"]
    },
    {
        text: "🥗 Gaya hidup sehat mudah dijalani. Berat badan ideal tercapai!",
        emojis: ["🥗", "🥑", "💚", "😊"]
    },
    {
        text: "🧘 Keseimbangan fisik dan mental sempurna. Mind-body harmony!",
        emojis: ["🧘", "☮️", "💆", "✨"]
    },
    {
        text: "😴 Kualitas tidur meningkat. Bangun segar dan penuh energi setiap hari!",
        emojis: ["😴", "🛌", "☀️", "💫"]
    },
    {
        text: "🌱 Regenerasi sel tubuh optimal. Awet muda dan bercahaya!",
        emojis: ["🌱", "✨", "🌟", "💫"]
    },
    {
        text: "🏋️ Strength training berhasil. Otot terbentuk sempurna!",
        emojis: ["🏋️", "💪", "🔥", "🎯"]
    },
    {
        text: "🚴 Aktivitas fisik jadi menyenangkan. Olahraga bukan lagi beban!",
        emojis: ["🚴", "🏃", "⚽", "😊"]
    },
    {
        text: "💚 Sistem imun kuat. Jarang sakit, selalu fit!",
        emojis: ["💚", "🛡️", "💪", "✨"]
    },
    {
        text: "🧘‍♀️ Stress hilang, tenang dan damai. Mental health on point!",
        emojis: ["🧘‍♀️", "😌", "☮️", "💆"]
    },

    // Pengetahuan & Kreativitas (71-80)
    {
        text: "🎓 Pengetahuan dan kebijaksanaan baru akan membuka pintu kesempatan tak terduga.",
        emojis: ["🎓", "📚", "🧠", "💡"]
    },
    {
        text: "📚 Buku atau kursus yang tepat mengubah mindset Anda. Growth mindset activated!",
        emojis: ["📚", "📖", "💡", "✨"]
    },
    {
        text: "🎨 Kreativitas Anda akan bersinar! Proyek artistik akan mendapat apresiasi tinggi.",
        emojis: ["🎨", "🎭", "🎪", "🌺"]
    },
    {
        text: "💡 Ide brilian datang bertubi-tubi. Innovation mode: ON!",
        emojis: ["💡", "⚡", "🧠", "✨"]
    },
    {
        text: "🖌️ Karya seni atau tulisan Anda viral dan dipuji banyak orang!",
        emojis: ["🖌️", "🎨", "📝", "🌟"]
    },
    {
        text: "🎭 Bakat terpendam terbuka. Waktu untuk ekspresikan diri!",
        emojis: ["🎭", "🎪", "⭐", "✨"]
    },
    {
        text: "📝 Proyek menulis atau blog sukses besar. Pembaca setia bertambah!",
        emojis: ["📝", "✍️", "📚", "🌟"]
    },
    {
        text: "🎼 Musik atau seni pertunjukan Anda menginspirasi banyak orang!",
        emojis: ["🎼", "🎵", "🎤", "⭐"]
    },
    {
        text: "🔬 Penelitian atau eksperimen berhasil. Penemuan penting tercapai!",
        emojis: ["🔬", "🧪", "💡", "🏆"]
    },
    {
        text: "🧠 Skill baru dikuasai dengan cepat. Learning capability maksimal!",
        emojis: ["🧠", "📚", "⚡", "✨"]
    },

    // Rumah & Properti (81-88)
    {
        text: "🏠 Rumah tangga harmonis dan penuh berkah. Investasi properti akan menguntungkan.",
        emojis: ["🏠", "🏡", "🔑", "✨"]
    },
    {
        text: "🏡 Rumah impian ditemukan dengan harga terbaik. Deal properti sukses!",
        emojis: ["🏡", "🔑", "💰", "🎊"]
    },
    {
        text: "🔑 Pindah ke tempat tinggal yang lebih baik. Upgrade lifestyle dimulai!",
        emojis: ["🔑", "🏠", "📦", "✨"]
    },
    {
        text: "🏗️ Renovasi rumah berjalan lancar. Hunian jadi makin nyaman!",
        emojis: ["🏗️", "🏠", "🔨", "😊"]
    },
    {
        text: "🛋️ Interior design sempurna. Rumah jadi instagramable dan cozy!",
        emojis: ["🛋️", "🏠", "✨", "📸"]
    },
    {
        text: "🌳 Lingkungan tetangga yang ramah dan supportif. Community goals!",
        emojis: ["🌳", "👥", "🏘️", "❤️"]
    },
    {
        text: "🔐 Keamanan rumah terjamin. Tinggal tenang dan nyaman!",
        emojis: ["🔐", "🏠", "🛡️", "😌"]
    },
    {
        text: "🌟 Rumah penuh energi positif dan berkah. Home sweet home!",
        emojis: ["🌟", "🏠", "❤️", "✨"]
    }
];

// Create particle effects
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Track opened angpao
let openedAngpaoCount = 0;
let usedFortunes = [];
let musicPlaying = false;

// Start experience function - called when user clicks splash button
function startExperience() {
    const bgMusic = document.getElementById('bgMusic');
    const welcomeSplash = document.getElementById('welcomeSplash');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = musicToggle.querySelector('.music-icon');
    
    // Play music with user interaction (guaranteed to work)
    bgMusic.play().then(() => {
        musicPlaying = true;
        musicIcon.textContent = '🎵';
        musicToggle.classList.add('playing');
        
        // Hide splash screen
        welcomeSplash.classList.add('hidden');
        
        // Remove splash from DOM after animation
        setTimeout(() => {
            welcomeSplash.remove();
        }, 500);
        
        // Create welcome fireworks
        createWelcomeFireworks();
    }).catch(error => {
        console.error('Error playing music:', error);
        // Still hide splash even if music fails
        welcomeSplash.classList.add('hidden');
        setTimeout(() => {
            welcomeSplash.remove();
        }, 500);
    });
}

// Welcome fireworks on entry
function createWelcomeFireworks() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const colors = ['#FFD700', '#FF0000', '#FF6347', '#FFA500', '#FF1493'];
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.6;
            
            for (let j = 0; j < 30; j++) {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.left = x + 'px';
                firework.style.top = y + 'px';
                firework.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                const angle = (Math.PI * 2 * j) / 30;
                const velocity = 150 + Math.random() * 100;
                const xMove = Math.cos(angle) * velocity;
                const yMove = Math.sin(angle) * velocity;
                
                firework.style.setProperty('--x', xMove + 'px');
                firework.style.setProperty('--y', yMove + 'px');
                firework.style.animation = 'firework-explode 1.5s ease-out forwards';
                
                document.body.appendChild(firework);
                
                setTimeout(() => firework.remove(), 1500);
            }
        }, i * 400);
    }
}

// Initialize music settings on page load
document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    // Set volume to comfortable level
    bgMusic.volume = 0.3;
    
    // Note: Music will start when user clicks the splash button
    // This ensures compliance with browser autoplay policies
});

// Toggle background music
function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = musicToggle.querySelector('.music-icon');
    
    if (musicPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🔇';
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play();
        musicIcon.textContent = '🎵';
        musicToggle.classList.add('playing');
    }
    
    musicPlaying = !musicPlaying;
}

// Flip angpao card and show fortune
function flipAngpao(wrapperElement, index) {
    // Check if already flipped
    if (wrapperElement.classList.contains('flipped')) {
        return;
    }
    
    // Get random fortune (ensure no duplicates in current session)
    let randomFortune;
    do {
        randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    } while (usedFortunes.some(f => f.text === randomFortune.text));
    
    usedFortunes.push(randomFortune);
    
    // Create sparkle effect before flip
    createSparkleEffect(wrapperElement);
    
    // Populate the back of the card with fortune (without emojis)
    const backContent = wrapperElement.querySelector('.fortune-card-content');
    const textCard = backContent.querySelector('.fortune-text-card');
    
    textCard.textContent = randomFortune.text;
    
    // Flip the card
    setTimeout(() => {
        wrapperElement.classList.add('flipped');
        openedAngpaoCount++;
        
        // Play flip sound effect
        createFlipEffect(wrapperElement);
        
        // Check if all 3 are opened
        if (openedAngpaoCount === 3) {
            setTimeout(() => {
                showCelebration();
                // Show reset button
                document.querySelector('.reset-all-button').style.display = 'inline-flex';
                // Hide action hint
                document.querySelector('.action-hint').style.display = 'none';
            }, 1000);
        }
    }, 100);
}

// Reset all angpao cards
function resetAllAngpao() {
    const allWrappers = document.querySelectorAll('.angpao-wrapper');
    
    allWrappers.forEach((wrapper, index) => {
        setTimeout(() => {
            wrapper.classList.remove('flipped');
        }, index * 200);
    });
    
    // Reset counters
    openedAngpaoCount = 0;
    usedFortunes = [];
    
    // Hide reset button, show hint
    document.querySelector('.reset-all-button').style.display = 'none';
    document.querySelector('.action-hint').style.display = 'block';
}

// Create sparkle effect on card
function createSparkleEffect(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.fontSize = '1.5rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            
            document.body.appendChild(sparkle);
            
            const angle = (Math.PI * 2 * i) / 15;
            const distance = 80 + Math.random() * 40;
            const endX = x + Math.cos(angle) * distance;
            const endY = y + Math.sin(angle) * distance;
            
            sparkle.animate([
                { 
                    left: x + 'px', 
                    top: y + 'px',
                    opacity: 1,
                    transform: 'scale(0) rotate(0deg)'
                },
                { 
                    left: endX + 'px', 
                    top: endY + 'px',
                    opacity: 0,
                    transform: 'scale(1.5) rotate(360deg)'
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 30);
    }
}

// Create flip effect
function createFlipEffect(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Create golden circle pulse
    const pulse = document.createElement('div');
    pulse.style.position = 'fixed';
    pulse.style.left = x + 'px';
    pulse.style.top = y + 'px';
    pulse.style.width = '50px';
    pulse.style.height = '50px';
    pulse.style.transform = 'translate(-50%, -50%)';
    pulse.style.border = '3px solid #FFD700';
    pulse.style.borderRadius = '50%';
    pulse.style.pointerEvents = 'none';
    pulse.style.zIndex = '9999';
    
    document.body.appendChild(pulse);
    
    pulse.animate([
        { 
            width: '50px',
            height: '50px',
            opacity: 1
        },
        { 
            width: '200px',
            height: '200px',
            opacity: 0
        }
    ], {
        duration: 600,
        easing: 'ease-out'
    });
    
    setTimeout(() => pulse.remove(), 600);
}

// Show celebration when all 3 opened
function showCelebration() {
    // Massive confetti
    createMassiveConfetti();
    
    // Show congratulations message
    const message = document.createElement('div');
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
            color: #8B0000;
            padding: 2rem 3rem;
            border-radius: 20px;
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            border: 4px solid #8B0000;
            animation: celebration-pop 0.5s ease-out;
        ">
            🎊 3 KEBERUNTUNGAN TERBUKA! 🎊<br>
            <span style="font-size: 1.2rem; display: block; margin-top: 1rem;">
                万事如意 - Semua keinginan tercapai!
            </span>
        </div>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => message.remove(), 3000);
}

// Create massive confetti
function createMassiveConfetti() {
    const colors = ['#FFD700', '#FF0000', '#FF6347', '#FFA500', '#FF1493', '#32CD32'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '12px';
            confetti.style.height = '12px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-20px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            
            document.body.appendChild(confetti);
            
            confetti.animate([
                { 
                    top: '-20px',
                    opacity: 1,
                    transform: 'rotate(0deg)'
                },
                { 
                    top: window.innerHeight + 20 + 'px',
                    opacity: 0,
                    transform: 'rotate(720deg)'
                }
            ], {
                duration: 3000 + Math.random() * 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 15);
    }
}

// Old closeModal function - not needed but keep for compatibility
function closeModal() {
    // No longer used
}

// Remove old modal-related code
// Modal functionality replaced with flip cards

// Create fireworks effect
function createFireworks() {
    const numberOfBursts = 8;
    
    for (let i = 0; i < numberOfBursts; i++) {
        setTimeout(() => {
            const colors = ['#FF0000', '#FFD700', '#FF4500', '#FFA500', '#FF6347', '#FF1493', '#00FF00', '#00FFFF'];
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.6;
            
            // Create main burst
            for (let j = 0; j < 40; j++) {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.left = x + 'px';
                firework.style.top = y + 'px';
                firework.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                const angle = (Math.PI * 2 * j) / 40;
                const velocity = 150 + Math.random() * 100;
                const xMove = Math.cos(angle) * velocity;
                const yMove = Math.sin(angle) * velocity;
                
                firework.style.setProperty('--x', xMove + 'px');
                firework.style.setProperty('--y', yMove + 'px');
                firework.style.animation = 'firework-explode 1.5s ease-out forwards';
                
                document.body.appendChild(firework);
                
                setTimeout(() => firework.remove(), 1500);
            }
            
            // Create trails
            createFireworkTrail(x, y);
        }, i * 400);
    }
}

// Create firework trail effect
function createFireworkTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = x + 'px';
    trail.style.bottom = '0';
    trail.style.width = '4px';
    trail.style.height = '0';
    trail.style.background = 'linear-gradient(to top, #FFD700, transparent)';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9998';
    
    document.body.appendChild(trail);
    
    trail.animate([
        { height: '0', bottom: '0' },
        { height: (window.innerHeight - y) + 'px', bottom: (window.innerHeight - y) + 'px' }
    ], {
        duration: 800,
        easing: 'ease-out'
    });
    
    setTimeout(() => trail.remove(), 800);
}

// Initialize particles
createParticles();

// Auto fireworks on scroll
let hasTriggeredFireworks = false;
window.addEventListener('scroll', () => {
    if (!hasTriggeredFireworks && window.scrollY > 200) {
        createFireworks();
        hasTriggeredFireworks = true;
    }
});

// Lanterns stay in place - parallax removed for better UX

// Add sparkle effect on feature card hover
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.textContent = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.fontSize = '1.5rem';
                
                const rect = card.getBoundingClientRect();
                sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                
                document.body.appendChild(sparkle);
                
                sparkle.animate([
                    { 
                        opacity: 0,
                        transform: 'translateY(0) scale(0) rotate(0deg)' 
                    },
                    { 
                        opacity: 1,
                        transform: 'translateY(-30px) scale(1) rotate(180deg)' 
                    },
                    { 
                        opacity: 0,
                        transform: 'translateY(-60px) scale(0) rotate(360deg)' 
                    }
                ], {
                    duration: 1000,
                    easing: 'ease-out'
                });
                
                setTimeout(() => sparkle.remove(), 1000);
            }, i * 80);
        }
    });
});

// Easter egg: Secret combination for massive fireworks
let secretCode = [];
const SECRET_SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', (e) => {
    secretCode.push(e.key);
    secretCode = secretCode.slice(-6);
    
    if (JSON.stringify(secretCode) === JSON.stringify(SECRET_SEQUENCE)) {
        // Massive fireworks!
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createFireworks(), i * 300);
        }
        
        // Show special message
        const message = document.createElement('div');
        message.textContent = '🎆 MEGA FIREWORKS ACTIVATED! 🎆';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.fontSize = '3rem';
        message.style.color = '#FFD700';
        message.style.fontWeight = 'bold';
        message.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        message.style.zIndex = '10000';
        message.style.pointerEvents = 'none';
        
        document.body.appendChild(message);
        
        setTimeout(() => message.remove(), 3000);
        
        secretCode = [];
    }
});

// Console easter egg
console.log(`
%c🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊
   SELAMAT TAHUN BARU IMLEK 2026
        TAHUN KUDA API
          恭喜发财
      Gong Xi Fa Cai!
🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊

🎮 Easter Eggs:
   1. Klik setiap angpao untuk keberuntungan
   2. Ketik: ↑ ↑ ↓ ↓ ← → untuk mega fireworks!
`, 'color: #FFD700; font-size: 14px; font-weight: bold;');
