// ============================
// الرابط السري للدخول إلى لوحة البث
// ============================

function isAdminMode() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('admin') === 'true' || urlParams.get('broadcast') === 'open';
}

// إظهار لوحة البث فقط لو الرابط فيه الكود السري
if (isAdminMode()) {
    document.getElementById('broadcastPanel').style.display = 'flex';
    console.log('🔓 تم تفعيل وضع المطور - لوحة البث متاحة');
} else {
    document.getElementById('broadcastPanel').style.display = 'none';
    console.log('🔒 وضع المستخدم العادي - لوحة البث مخفية');
}

// ============================
// تشغيل وإخفاء بطاقة الترحيب
// ============================
const modal = document.getElementById("welcomeModal");
const closeBtn = document.getElementById("closeModalBtn");
closeBtn.addEventListener("click", () => modal.style.display = "none");

// ============================
// قاعدة بيانات الترانيم والألحان
// ============================
const hymns = [
    {
        id: 1,
        title: "اميرة العذاري -يوستينا سمير",
        category: "ترانيم القديسة دميانة",
        audio: "Audio/ST.Demiana/اميرة العذاري -يوستينا سمير.mp3"
    },
    {
        id: 2,
        title: "ترنيمة ست يا دميانة",
        category: "ترانيم القديسة دميانة",
        audio: "Audio/ST.Demiana/ترنيمة ست يا دميانة.mp3"
    }, 
    {
        id: 3,
        title: "تمجيد القديسة دميانة",
        category: "ترانيم القديسة دميانة",
        audio: "Audio/ST.Demiana/مديح جديد متكامل لتمجيد الشهيدة دميانه ــ كلمات الاكلريكي كرم لمعي موسي ــ أداء الشماس بولس ملاك.mp3"
    },
     {
        id: 4,
        title: "يا ست دميانة يا عايشة جوانا",
        category: "ترانيم القديسة دميانة",
        audio: "Audio/ST.Demiana/يا ست دميانة يا عايشة جوانا--Bekhit Fahim (256).mp3"
    }, 
    {
        id: 200,
        title: "ترنيمة دميانة في الأيقونة",
        category: "ترانيم القديسة دميانة",
        audio: "Audio/ST.Demiana/ترنيمة دميانة في الأيقونة من اقدم ترنيم دميانة كلمات وصوت جميل جدا ورائع جداً.mp3"
    },
    {
        id: 5,
        title: "جوة ديرك يا دميانة ",
        category: "ترانيم القديسة دميانة",
        audio: "Audio/ST.Demiana/جوة ديرك يا دميانة ــ ترنيمة للشهيدة دميانة.mp3"
    },
     {
        id: 6,
        title: "ترنيمة ع البراري دميانة _ ابونا انطونيوس ابراهيم عياد",
        category: "ترانيم القديسة دميانة",
        audio: "Audio/ST.Demiana/ترنيمة ع البراري دميانة _ ابونا انطونيوس ابراهيم عياد (256).mp3"
    },
     {
        id: 7,
        title: "ترنيمة حبة قش - كورال قلب داود - قناة كوچى القبطية الأرثوذكسية للأطفال",
        category: "ترانيم عيد الميلاد",
        audio: "Audio/Melad/ترنيمة حبة قش - كورال قلب داود - قناة كوچى القبطية الأرثوذكسية للأطفال.mp3"
    },
     {
        id: 8,
        title: "أنا أول كلامي - مديح برامون عيد الميلاد",
        category: "ترانيم عيد الميلاد",
        audio: "Audio/Melad/أنا أول كلامي - مديح برامون عيد الميلاد المجيد - ماري لميع مديح للعدرا مريم_ Mary Lamie 2023. العدرا.mp3"
    },
     {
        id: 9,
        title: "عيد ميلاد - ترنيمة لـ نعمة اسحق ",
        category: "ترانيم عيد الميلاد",
        audio: "Audio/Melad/عيد ميلاد - ترنيمة جديدة لـ نعمة اسحق _ Neama Issac - Eid Milad.mp3"
    },
     {
        id: 10,
        title: "ترنيمة قام حمل الله",
        category: "ترانيم عيد الميلاد",
        audio: "Audio/Melad/ترنيمة قام حمل الله - ترانيم الحياة الافضل _ ترانيم  _ BetterLife.mp3"
    },
    {
        id: 11,
        title: "مزود بسيط للميلاد المجيد-فريق اوميجا",
        category: "ترانيم عيد الميلاد",
        audio: "Audio/Melad/Omega Band I Mezwad Baset 1 I مزود بسيط ١ للميلاد المجيد I فريق اوميجا.mp3"
    },
    {
        id: 12,
        title: "ترنيمة مش قصة و خلاص - فريق المخلص",
        category: "ترانيم عيد الميلاد",
        audio: "Audio/Melad/ترنيمة مش قصة و خلاص - فريق المخلص - The savior team.mp3"
    },
    {
        id: 13,
        title: "جوليا-جايي يسوع",
        category: "ترانيم عيد الميلاد",
        audio: "Audio/Melad/JULIA JAYI YASOU3 جوليا-جايي يسوع.mp3"
    },
    {
        id: 14,
        title: "لحن ابتجيك ايفول لخوروس الكلية الاكليريكية بقيادة المعلم ابراهيم عياد - قداس عيد الميلاد المجيد 2019",
        category: "ألحان عيد الميلاد",
        audio: "Audio/alhanm/لحن ابتجيك ايفول لخوروس الكلية الاكليريكية بقيادة المعلم ابراهيم عياد - قداس عيد الميلاد المجيد 2019.mp3"
    },
    {
        id: 15,
        title: "لحن اى بارثينوس لعيد الميلاد للايبيذياكون اسامه لطفى",
        category: "ألحان عيد الميلاد",
        audio: "Audio/Alhanm/لحن اى بارثينوس لعيد الميلاد للايبيذياكون اسامه لطفى.mp3"
    },
    {
        id: 16,
        title: "مديح باكر عيد الميلاد المجيد _ نيافة الحبر الجليل الأنبا فيلوباتير",
        category: "ألحان عيد الميلاد",
        audio: "Audio/Alhanm/مديح باكر عيد الميلاد المجيد _ نيافة الحبر الجليل الأنبا فيلوباتير  (القمص ثاؤفيلس المحرقي سابقاً ).mp3"
    },
    {
        id: 17,
        title: "الهيتنيات من قداس عيد الميلاد المجيد",
        category: "ألحان عيد الميلاد",
        audio: "Audio/Alhanm/الهيتنيات من قداس عيد الميلاد المجيد ٢٠٢٠ من كاتدرائية ميلاد المسيح بالعاصمة الإدارية الجديدة.mp3"
    },
    {
        id: 18,
        title: "لحن ابينشويس لعيد الميلاد المجيد",
        category: "ألحان عيد الميلاد",
        audio: "Audio/Alhanm/لحن ابينشويس.mp3"
    },
    {
        id: 19,
        title: "ميدلي ألحان الميلاد - كورال مارافرام السرياني",
        category: "ألحان عيد الميلاد",
        audio: "Audio/Alhanm/ميدلي ألحان الميلاد - كورال مارافرام السرياني.mp3"
    },
    {
        id: 20,
        title: "لحن-بي-جين-ميسي",
        category: "ألحان عيد الميلاد",
        audio: "Audio/Alhanm/لحن-بي-جين-ميسي-ⲡⲓϫⲓⲛⲙⲓⲥⲓ-ومحير-ⲅⲉⲛⲉⲑⲗⲓⲟⲛ-جينثليون-لخورس-افا-انطوني-والمعلم-بولا-منير.mp3"
    },
    {
        id: 21,
        title: "ارباع الناقوس باكر عيد الميلاد بصوت خورس افا انطوني والمعلم بولا منير",
        category: "ألحان عيد الميلاد",
        audio: "https://voca.ro/15aV4sDc3fgG"
    },
    {
        id: 22,
        title: "لحن السبع طرائق بالهزات ( الطريقة الأولى ) للايبيذياكون اسامه لطفى",
        category: "ألحان عيد الميلاد",
        audio: "Audio/alhanm/لحن السبع طرائق بالهزات ( الطريقة الأولى ) للايبيذياكون اسامه لطفى.mp3"
    },
    {
        id: 23,
        title: "لحن السبع طرائق بالهزات  ( الطريقة الثانية ) للايبيذياكون اسامه لطفى",
        category: "ألحان عيد الميلاد",
        audio: "Audio/alhanm/لحن السبع طرائق بالهزات  ( الطريقة الثانية ) للايبيذياكون اسامه لطفى.mp3"
    },
    {
        id: 24,
        title: "مقدمة الذكصولوجيات الفرايحى _ طقس والحان عيد الميلاد",
        category: "ألحان عيد الميلاد",
        audio: "Audio/alhanm/مقدمة الذكصولوجيات الفرايحى _ طقس والحان عيد الميلاد.mp3"
    },

    {
        id: 26,
        title: "الذكصولوجية الاولى لعيد الميلاد المجيد",
        category: "ألحان عيد الميلاد",
        audio: "Audio/alhanm/الذكصولوجية الاولى لعيد الميلاد المجيد.mp3"
    },
    {
        id: 27,
        title: "كنيستنا على اسم فتاه",
        category: "ترانيم القديسة دميانة",
        audio: "Audio/ST.Demiana/كنيستنا على اسم فتاه من البوم دميانة يا غالية علينا للشماس بولس ملاك.mp3"
    },
    {
        id: 28,
        title: "نجم اشرق ف المشارق ✨ يوستينا سمير",
        category: "ألحان عيد الميلاد",
        audio: "Audio/alhanm/نجم اشرق ف المشارق ✨ يوستينا سمير - جديد ٢٠٢٤.mp3"
    },
    {
        id: 29,
        title: "ترنيمة علشان خاطر العدرا يارب كورال اغابى",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/ترنيمة علشان خاطر العدرا يارب كورال اغابى.mp3"
    },
{
        id: 30,
        title: "ترنيمة العشرة اوتار",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/العشرة اوتار.mp3"
    },
{
        id: 31,
        title: "خطرت حمامة في بيت زكريا بالكلمات - مديح توزيع شهر كيهك - قناة أغابي كامل",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/خطرت حمامة في بيت زكريا بالكلمات - مديح توزيع شهر كيهك - قناة أغابي كامل.mp3"
    },
{
        id: 32,
        title: "يا بختك يا إللي تتشفع بأم النور - يوستينا ظريف",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/يا بختك يا إللي تتشفع بأم النور - يوستينا ظريف - كورال مارإفرام السرياني.mp3"
    },
 {
        id: 33,
        title: "مديح لتمجيد السيدة العذراء مريم - السلام لك يا مريم يا أم الله القدوس",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/مديح لتمجيد السيدة العذراء مريم - السلام لك يا مريم يا أم الله القدوس.mp3"
    },
 {
        id: 34,
        title: "ترنيمة مريم يا إبنة يواقيم",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/ترنيمة مريم يا إبنة يواقيم                                   Hymns to the Virgin Mary.mp3"
    },
 {
        id: 35,
        title: "الناس لما شفوكي",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/الناس لما شفوكي.mp3"
    },
 {
        id: 36,
        title: "٢ أبريل - كورال مار إفرام السرياني - ماريا نظمي - يوستينا ظريف",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/٢ أبريل - كورال مار إفرام السرياني - ماريا نظمي - يوستينا ظريف.mp3"
    },
 {
        id: 37,
        title: "أمانة يا عدرا - مريم حلمي",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/أمانة يا عدرا - مريم حلمي _ AMANA YA ADRA - MARIAM HELMY.mp3"
 },
 {
        id: 38,
        title: "كيهكيات مديح ادام على الهوس الأول قال الرب لموسي من تسبحه كيهك",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/كيهكيات مديح ادام على الهوس الأول قال الرب لموسي من تسبحه كيهك.mp3"
    },
 {
        id: 39,
        title: "مرد الانجيل في شهر كيهك نحن نعطيك السلام",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/مرد الانجيل في شهر كيهك نحن نعطيك السلام.mp3"
    },
 {
        id: 40,
        title: "مديح العليقة التي رآها موسى النبي",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/مديح العليقة التي رآها موسى النبي.mp3"
    },
 {
        id: 41,
        title: "ترنيمة حلوة ليالي العدرا ❤️🥰 كورال مارإفرام السرياني اداء صوتي ابونا بقطر نسيم",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/ترنيمة حلوة ليالي العدرا ❤️🥰 كورال مارإفرام السرياني اداء صوتي ابونا بقطر نسيم  #قناة_الحرية.mp3"
    },
    {
        id: 42,
        title: "محلاكى يا مريم ( أبانوب مجدى )",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/محلاكى يا مريم ( أبانوب مجدى ).mp3"
    },
    {
        id: 43,
        title: "مـديـح يـاابنـة داود ( مدايح كيهك )",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/مـديـح يـاابنـة داود ( مدايح كيهك )   (Praise, O daughter of David (Mdaih Kiahk.mp3"
    },
    {
        id: 44,
        title: "التسبحة الكيهكية  مديحة   يا م ر ي م - الانبا يؤانس",
        category: "ترانيم للسيدة العذراء",
        audio: "Audio/K/التسبحة الكيهكية  مديحة   يا م ر ي م - الانبا يؤانس.mp3"
    },
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const container = document.getElementById("hymnsContainer");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// دالة عرض الترانيم في الصفحة
function displayHymns(list) {
    container.innerHTML = "";
    
    if (list.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b;">لا توجد ترانيم مطابقة للبحث أو القسم.</p>`;
        return;
    }

    list.forEach(hymn => {
        const isFav = favorites.includes(hymn.id);
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <h3>${hymn.title}</h3>
                    <span class="card-category">${hymn.category}</span>
                </div>
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${hymn.id})">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>

            <!-- المشغل المودرن المخصص -->
            <div class="custom-player" id="player-${hymn.id}">
                <audio src="${hymn.audio}" preload="metadata"></audio>
                <div class="player-controls">
                    <button class="play-pause-btn" onclick="togglePlay(${hymn.id})">
                        <i class="fa-solid fa-play"></i>
                    </button>
                    <div class="progress-container">
                        <input type="range" class="progress-bar" value="0" max="100">
                        <div class="time-info">
                            <span class="current-time">0:00</span>
                            <span class="duration">0:00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-footer">
                <button class="download-btn" onclick="downloadHymn('${hymn.audio}', '${hymn.title}')">
                    <i class="fa-solid fa-download"></i> تحميل
                </button>
            </div>
        `;
        
        container.appendChild(card);

        const playerCard = document.getElementById(`player-${hymn.id}`);
        const audioElement = playerCard.querySelector("audio");
        const progressBar = playerCard.querySelector(".progress-bar");
        const currentTimeEl = playerCard.querySelector(".current-time");
        const durationEl = playerCard.querySelector(".duration");

        audioElement.addEventListener("loadedmetadata", () => {
            durationEl.textContent = formatTime(audioElement.duration);
        });

        audioElement.addEventListener("timeupdate", () => {
            if (audioElement.duration) {
                const progressPercent = (audioElement.currentTime / audioElement.duration) * 100;
                progressBar.value = progressPercent;
                currentTimeEl.textContent = formatTime(audioElement.currentTime);
            }
        });

        progressBar.addEventListener("input", (e) => {
            const seekTime = (e.target.value / 100) * audioElement.duration;
            audioElement.currentTime = seekTime;
        });
    });
}

// دالة التحميل الفوري التلقائي (منع فتح التبويب الجديد)
async function downloadHymn(url, title) {
    try {
        // بنسحب الملف في الخلفية كـ بيانات (Blob)
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = `${title}.mp3`; // اسم الملف لما ينزل
        document.body.appendChild(a);
        a.click();
        
        // تنظيف الذاكرة بعد التحميل
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        // لو حصلت مشكلة بسبب حماية السيرفر، بنفتحه بالطريقة العادية احتياطي
        window.open(url, '_blank');
    }
}

// تشغيل وإيقاف الصوت
function togglePlay(id) {
    const playerCard = document.getElementById(`player-${id}`);
    const audioElement = playerCard.querySelector("audio");
    const playBtnIcon = playerCard.querySelector(".play-pause-btn i");

    document.querySelectorAll("audio").forEach(aud => {
        if (aud !== audioElement) {
            aud.pause();
            const otherCard = aud.closest(".custom-player");
            if (otherCard) {
                otherCard.querySelector(".play-pause-btn i").className = "fa-solid fa-play";
            }
        }
    });

    if (audioElement.paused) {
        audioElement.play();
        playBtnIcon.className = "fa-solid fa-pause";
    } else {
        audioElement.pause();
        playBtnIcon.className = "fa-solid fa-play";
    }

    audioElement.onended = () => {
        playBtnIcon.className = "fa-solid fa-play";
    };
}

// دالة المفضلة
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    filterCurrentView();
}

let currentPlaylist = "all";
let currentSearchTerm = "";

function filterCurrentView() {
    let result = hymns;
    if (currentPlaylist === "favorites") {
        result = result.filter(h => favorites.includes(h.id));
    } else if (currentPlaylist !== "all") {
        result = result.filter(h => h.category === currentPlaylist);
    }
    if (currentSearchTerm) {
        result = result.filter(h => h.title.toLowerCase().includes(currentSearchTerm));
    }
    displayHymns(result);
}

displayHymns(hymns);

// أزرار البلاي ليستس
const playlistButtons = document.querySelectorAll(".playlist-btn");
playlistButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        playlistButtons.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        currentPlaylist = e.target.getAttribute("data-playlist");
        filterCurrentView();
    });
});

// خانة البحث
const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value.toLowerCase().trim();
    filterCurrentView();
});

// ============================
// تشغيل الكل عشوائي (Shuffle Play) مع كل الميزات
// ============================

let shufflePlaylist = [];
let shuffleIndex = 0;
let isShufflePlaying = false;
let shuffleAudio = null;
let isLoopActive = false;
let shuffleTimeout = null;
let currentShuffleHymn = null;

const shuffleBtn = document.getElementById('shufflePlayBtn');
const shuffleCount = document.getElementById('shuffleCount');
const shuffleIcon = document.getElementById('shufflePlayIcon');
const loopBtn = document.getElementById('loopBtn');
const toastContainer = document.getElementById('toastContainer');

// ============================
// 1. Toast Notifications
// ============================
function showToast(icon, title, message, duration = 4000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close"><i class="fa-solid fa-xmark"></i></button>
    `;
    
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    });
    
    toastContainer.appendChild(toast);
    
    // إزالة الإشعار تلقائياً
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }
    }, duration);
}

// ============================
// 2. تحديث عدد الترانيم والترنيمة القادمة
// ============================
function updateShuffleInfo() {
    let list = getCurrentList();
    shuffleCount.innerHTML = `<strong>${list.length}</strong> ترنيمة`;
}

function getCurrentList() {
    let list = hymns;
    if (currentPlaylist === 'favorites') {
        list = list.filter(h => favorites.includes(h.id));
    } else if (currentPlaylist !== 'all') {
        list = list.filter(h => h.category === currentPlaylist);
    }
    if (currentSearchTerm) {
        list = list.filter(h => h.title.toLowerCase().includes(currentSearchTerm));
    }
    return list;
}

// ============================
// 3. تشغيل الترنيمة التالية عشوائياً
// ============================
function playNextShuffle() {
    if (!shufflePlaylist.length) {
        stopShufflePlay();
        return;
    }

    // اختيار ترنيمة عشوائية مختلفة عن الحالية
    let randomIndex;
    if (shufflePlaylist.length === 1) {
        randomIndex = 0;
    } else {
        do {
            randomIndex = Math.floor(Math.random() * shufflePlaylist.length);
        } while (randomIndex === shuffleIndex);
    }
    
    shuffleIndex = randomIndex;
    const hymn = shufflePlaylist[shuffleIndex];
    currentShuffleHymn = hymn;
    
    // إيقاف أي صوت شغال حالياً
    document.querySelectorAll("audio").forEach(aud => {
        aud.pause();
        const card = aud.closest(".custom-player");
        if (card) {
            card.querySelector(".play-pause-btn i").className = "fa-solid fa-play";
        }
    });

    // تشغيل الترنيمة الجديدة
    const playerCard = document.getElementById(`player-${hymn.id}`);
    if (playerCard) {
        const audioElement = playerCard.querySelector("audio");
        const playBtnIcon = playerCard.querySelector(".play-pause-btn i");
        
        if (audioElement) {
            if (shuffleAudio && shuffleAudio !== audioElement) {
                shuffleAudio.pause();
            }
            
            shuffleAudio = audioElement;
            
            // محاولة تشغيل الصوت
            const playPromise = audioElement.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    playBtnIcon.className = "fa-solid fa-pause";
                }).catch(error => {
                    console.log('تشغيل الصوت فشل:', error);
                });
            }
            
            // إظهار إشعار بالترنيمة الجديدة
            showToast('🎵', 'جاري التشغيل', hymn.title, 3000);
            
            // تمييز البطاقة الحالية
            document.querySelectorAll('.card').forEach(c => {
                c.style.borderColor = '';
                c.style.boxShadow = '';
            });
            const card = playerCard.closest('.card');
            if (card) {
                card.style.borderColor = 'var(--gold)';
                card.style.boxShadow = '0 8px 40px rgba(212, 168, 67, 0.15)';
            }

            // تحديث الترنيمة القادمة
            updateShuffleInfo();

            // عند انتهاء الترنيمة
            audioElement.onended = () => {
                if (isLoopActive) {
                    // وضع التكرار: شغل نفس الترنيمة تاني
                    setTimeout(() => {
                        if (isShufflePlaying) {
                            playCurrentShuffle();
                        }
                    }, 500);
                } else {
                    // تشغيل الترنيمة التالية
                    setTimeout(() => {
                        if (isShufflePlaying) {
                            playNextShuffle();
                        }
                    }, 500);
                }
            };
        }
    }
}

// تشغيل الترنيمة الحالية (للتكرار)
function playCurrentShuffle() {
    if (!currentShuffleHymn) {
        playNextShuffle();
        return;
    }
    
    const hymn = currentShuffleHymn;
    const playerCard = document.getElementById(`player-${hymn.id}`);
    if (playerCard) {
        const audioElement = playerCard.querySelector("audio");
        const playBtnIcon = playerCard.querySelector(".play-pause-btn i");
        
        if (audioElement) {
            audioElement.currentTime = 0;
            const playPromise = audioElement.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    playBtnIcon.className = "fa-solid fa-pause";
                }).catch(error => {
                    console.log('تشغيل الصوت فشل:', error);
                });
            }
            
            showToast('🔄', 'إعادة تشغيل', hymn.title, 2500);
        }
    }
}

// ============================
// 4. بدء وإيقاف التشغيل العشوائي
// ============================
function startShufflePlay() {
    let list = getCurrentList();

    if (list.length === 0) {
        showToast('⚠️', 'تنبيه', 'لا توجد ترانيم في القائمة الحالية!', 3000);
        return;
    }

    // حفظ القائمة في localStorage
    shufflePlaylist = [...list];
    shuffleIndex = Math.floor(Math.random() * shufflePlaylist.length);
    isShufflePlaying = true;
    
    // تحديث شكل الزرار
    shuffleBtn.classList.add('playing');
    shuffleIcon.className = 'fa-solid fa-pause';
    shuffleBtn.querySelector('span').textContent = 'إيقاف التشغيل العشوائي';
    
    // حفظ الحالة في localStorage
    saveShuffleState();
    
    // تشغيل أول ترنيمة
    playNextShuffle();
}

function stopShufflePlay() {
    isShufflePlaying = false;
    shuffleBtn.classList.remove('playing');
    shuffleIcon.className = 'fa-solid fa-play';
    shuffleBtn.querySelector('span').textContent = 'تشغيل الكل عشوائي';
    
    // إيقاف الصوت
    if (shuffleAudio) {
        shuffleAudio.pause();
        const card = shuffleAudio.closest('.custom-player');
        if (card) {
            card.querySelector(".play-pause-btn i").className = "fa-solid fa-play";
        }
        shuffleAudio = null;
    }
    
    // إزالة التمييز عن البطاقات
    document.querySelectorAll('.card').forEach(c => {
        c.style.borderColor = '';
        c.style.boxShadow = '';
    });
    
    // إلغاء التايم أوت
    if (shuffleTimeout) {
        clearTimeout(shuffleTimeout);
        shuffleTimeout = null;
    }
    
    currentShuffleHymn = null;
    updateShuffleInfo();
    
    // حفظ الحالة في localStorage
    saveShuffleState();
}

// ============================
// 5. زرار التكرار (Loop)
// ============================
loopBtn.addEventListener('click', () => {
    isLoopActive = !isLoopActive;
    loopBtn.classList.toggle('active');
    
    if (isLoopActive) {
        showToast('🔄', 'تفعيل التكرار', 'سيتم إعادة تشغيل كل ترنيمة', 2500);
        loopBtn.title = 'إلغاء التكرار';
    } else {
        showToast('⏹️', 'إلغاء التكرار', 'تم إلغاء وضع التكرار', 2000);
        loopBtn.title = 'تفعيل التكرار';
    }
    
    saveShuffleState();
});

// ============================
// 6. حفظ واستعادة الحالة من localStorage
// ============================
function saveShuffleState() {
    try {
        const state = {
            isShufflePlaying,
            isLoopActive,
            shuffleIndex,
            currentShuffleHymn: currentShuffleHymn ? currentShuffleHymn.id : null,
            shufflePlaylistIds: shufflePlaylist.map(h => h.id),
            playlist: currentPlaylist,
            searchTerm: currentSearchTerm
        };
        localStorage.setItem('shuffleState', JSON.stringify(state));
    } catch (e) {
        console.log('فشل حفظ الحالة:', e);
    }
}

function restoreShuffleState() {
    try {
        const saved = localStorage.getItem('shuffleState');
        if (!saved) return false;
        
        const state = JSON.parse(saved);
        
        // التحقق من صحة البيانات
        if (!state.isShufflePlaying) return false;
        
        // التحقق من نفس الفلتر والبحث
        if (state.playlist !== currentPlaylist || state.searchTerm !== currentSearchTerm) {
            return false;
        }
        
        // استعادة القائمة
        const currentList = getCurrentList();
        const restoredList = currentList.filter(h => state.shufflePlaylistIds.includes(h.id));
        
        if (restoredList.length === 0) return false;
        
        shufflePlaylist = restoredList;
        isShufflePlaying = true;
        isLoopActive = state.isLoopActive || false;
        
        // استعادة الترنيمة الحالية
        if (state.currentShuffleHymn) {
            const hymn = shufflePlaylist.find(h => h.id === state.currentShuffleHymn);
            if (hymn) {
                currentShuffleHymn = hymn;
                shuffleIndex = shufflePlaylist.indexOf(hymn);
            } else {
                shuffleIndex = 0;
                currentShuffleHymn = shufflePlaylist[0];
            }
        } else {
            shuffleIndex = 0;
            currentShuffleHymn = shufflePlaylist[0];
        }
        
        // تحديث الواجهة
        shuffleBtn.classList.add('playing');
        shuffleIcon.className = 'fa-solid fa-pause';
        shuffleBtn.querySelector('span').textContent = 'إيقاف التشغيل العشوائي';
        
        if (isLoopActive) {
            loopBtn.classList.add('active');
            loopBtn.title = 'إلغاء التكرار';
        }
        
        updateShuffleInfo();
        
        // تشغيل الترنيمة الحالية
        setTimeout(() => {
            if (currentShuffleHymn) {
                const playerCard = document.getElementById(`player-${currentShuffleHymn.id}`);
                if (playerCard) {
                    const audioElement = playerCard.querySelector("audio");
                    if (audioElement) {
                        shuffleAudio = audioElement;
                        const playBtnIcon = playerCard.querySelector(".play-pause-btn i");
                        
                        audioElement.play().then(() => {
                            playBtnIcon.className = "fa-solid fa-pause";
                            
                            // تمييز البطاقة
                            document.querySelectorAll('.card').forEach(c => {
                                c.style.borderColor = '';
                                c.style.boxShadow = '';
                            });
                            const card = playerCard.closest('.card');
                            if (card) {
                                card.style.borderColor = 'var(--gold)';
                                card.style.boxShadow = '0 8px 40px rgba(212, 168, 67, 0.15)';
                            }
                            
                            showToast('🔄', 'استعادة التشغيل', currentShuffleHymn.title, 3000);
                            
                            // إعادة ربط حدث النهاية
                            audioElement.onended = () => {
                                if (isLoopActive) {
                                    setTimeout(() => {
                                        if (isShufflePlaying) {
                                            playCurrentShuffle();
                                        }
                                    }, 500);
                                } else {
                                    setTimeout(() => {
                                        if (isShufflePlaying) {
                                            playNextShuffle();
                                        }
                                    }, 500);
                                }
                            };
                        }).catch(() => {
                            // لو فشل التشغيل، شغل التالية
                            playNextShuffle();
                        });
                    }
                }
            }
        }, 300);
        
        return true;
    } catch (e) {
        console.log('فشل استعادة الحالة:', e);
        return false;
    }
}

// ============================
// 7. أحداث الزرار الرئيسي
// ============================
shuffleBtn.addEventListener('click', () => {
    if (isShufflePlaying) {
        stopShufflePlay();
    } else {
        startShufflePlay();
    }
});

// ============================
// 8. تحديث المعلومات عند تغيير الفلاتر
// ============================
// نعدل الدوال الحالية عشان تحدث المعلومات
const originalFilterCurrentView = filterCurrentView;
filterCurrentView = function() {
    originalFilterCurrentView();
    updateShuffleInfo();
    if (isShufflePlaying) {
        // التحقق من صحة القائمة
        const currentList = getCurrentList();
        const validIds = currentList.map(h => h.id);
        shufflePlaylist = shufflePlaylist.filter(h => validIds.includes(h.id));
        
        if (shufflePlaylist.length === 0) {
            stopShufflePlay();
        } else {
            saveShuffleState();
        }
    }
};

// تعديل حدث البحث
searchBox.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value.toLowerCase().trim();
    filterCurrentView();
    if (isShufflePlaying) {
        const currentList = getCurrentList();
        const validIds = currentList.map(h => h.id);
        shufflePlaylist = shufflePlaylist.filter(h => validIds.includes(h.id));
        
        if (shufflePlaylist.length === 0) {
            stopShufflePlay();
        } else {
            saveShuffleState();
        }
    }
});

// تعديل أزرار البلاي ليست
playlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (isShufflePlaying) {
            stopShufflePlay();
        }
    });
});

// ============================
// 9. تهيئة الصفحة
// ============================
updateShuffleInfo();

// محاولة استعادة الحالة المحفوظة
const restored = restoreShuffleState();
if (!restored) {
    // لو ما فيهاش حالة، نضبط القيم الافتراضية
    isLoopActive = false;
    loopBtn.classList.remove('active');
    loopBtn.title = 'تفعيل التكرار';
}

// حفظ الحالة عند إغلاق الصفحة
window.addEventListener('beforeunload', () => {
    if (isShufflePlaying) {
        saveShuffleState();
    } else {
        localStorage.removeItem('shuffleState');
    }
});

// ============================
// البث المباشر للمستخدمين (محمي بكلمة سر)
// ============================
const ADMIN_PASSWORD = '10919811';
let isLoggedIn = false;
let broadcastHistory = JSON.parse(localStorage.getItem('broadcastHistory')) || [];

const toggleBroadcastBtn = document.getElementById('toggleBroadcastBtn');
const broadcastLogin = document.getElementById('broadcastLogin');
const broadcastContent = document.getElementById('broadcastContent');
const broadcastPassword = document.getElementById('broadcastPassword');
const broadcastLoginBtn = document.getElementById('broadcastLoginBtn');
const loginError = document.getElementById('loginError');
const broadcastLogoutBtn = document.getElementById('broadcastLogoutBtn');
const sendBroadcastBtn = document.getElementById('sendBroadcastBtn');
const clearBroadcastBtn = document.getElementById('clearBroadcastBtn');
const broadcastType = document.getElementById('broadcastType');
const broadcastTitle = document.getElementById('broadcastTitle');
const broadcastMessage = document.getElementById('broadcastMessage');
const broadcastDuration = document.getElementById('broadcastDuration');
const broadcastHistoryList = document.getElementById('broadcastHistoryList');
const activeUsersCount = document.getElementById('activeUsersCount');

// تسجيل الدخول
function handleLogin() {
    const password = broadcastPassword.value.trim();
    if (password === ADMIN_PASSWORD) {
        isLoggedIn = true;
        loginError.style.display = 'none';
        broadcastLogin.style.display = 'none';
        sessionStorage.setItem('broadcastLoggedIn', 'true');
        broadcastContent.style.display = 'block';
        toggleBroadcastBtn.querySelector('span').textContent = 'إخفاء اللوحة';
        toggleBroadcastBtn.querySelector('i').className = 'fa-solid fa-chevron-down';
        showToast('🔓', 'تم الدخول', 'مرحباً بك في لوحة البث المباشر', 3000);
        updateBroadcastHistory();
        updateActiveUsers();
    } else {
        loginError.style.display = 'block';
        broadcastPassword.value = '';
        broadcastPassword.focus();
    }
}

broadcastLoginBtn.addEventListener('click', handleLogin);
broadcastPassword.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleLogin();
});

// تبديل لوحة البث
toggleBroadcastBtn.addEventListener('click', () => {
    if (isLoggedIn) {
        if (broadcastContent.style.display === 'block') {
            broadcastContent.style.display = 'none';
            toggleBroadcastBtn.querySelector('span').textContent = '📡 لوحة البث';
            toggleBroadcastBtn.querySelector('i').className = 'fa-solid fa-broadcast';
        } else {
            broadcastContent.style.display = 'block';
            toggleBroadcastBtn.querySelector('span').textContent = 'إخفاء اللوحة';
            toggleBroadcastBtn.querySelector('i').className = 'fa-solid fa-chevron-down';
            updateBroadcastHistory();
            updateActiveUsers();
        }
    } else {
        broadcastLogin.style.display = 'block';
        broadcastContent.style.display = 'none';
        broadcastPassword.value = '';
        loginError.style.display = 'none';
        broadcastPassword.focus();
    }
});

// تسجيل الخروج
broadcastLogoutBtn.addEventListener('click', () => {
    if (confirm('هل تريد تسجيل الخروج من لوحة البث؟')) {
        isLoggedIn = false;
        sessionStorage.removeItem('broadcastLoggedIn');
        broadcastContent.style.display = 'none';
        broadcastLogin.style.display = 'none';
        toggleBroadcastBtn.querySelector('span').textContent = '📡 لوحة البث';
        toggleBroadcastBtn.querySelector('i').className = 'fa-solid fa-broadcast';
        showToast('🔒', 'تم الخروج', 'تم تسجيل الخروج من لوحة البث', 2000);
    }
});

// تحديث عدد المستخدمين
function updateActiveUsers() {
    let users = JSON.parse(localStorage.getItem('activeUsers')) || [];
    const now = Date.now();
    users = users.filter(u => (now - u.lastSeen) < 30000);
    localStorage.setItem('activeUsers', JSON.stringify(users));
    activeUsersCount.innerHTML = `👥 <strong>${users.length}</strong> مستخدم`;
}

setInterval(updateActiveUsers, 10000);
updateActiveUsers();

// إرسال إشعار للجميع
sendBroadcastBtn.addEventListener('click', () => {
    if (!isLoggedIn) {
        showToast('🔒', 'غير مصرح', 'يجب تسجيل الدخول أولاً', 3000);
        return;
    }
    
    const type = broadcastType.value;
    const title = broadcastTitle.value.trim();
    const message = broadcastMessage.value.trim();
    const duration = parseInt(broadcastDuration.value) || 8;

    if (!title || !message) {
        showToast('⚠️', 'تنبيه', 'يرجى كتابة العنوان ونص الرسالة', 3000);
        return;
    }

    const notification = {
        id: Date.now(),
        type: type,
        title: title,
        message: message,
        duration: duration,
        timestamp: new Date().toLocaleString('ar-EG'),
        sender: 'المطور'
    };

    broadcastHistory.unshift(notification);
    if (broadcastHistory.length > 50) broadcastHistory = broadcastHistory.slice(0, 50);
    localStorage.setItem('broadcastHistory', JSON.stringify(broadcastHistory));
    updateBroadcastHistory();

    localStorage.setItem('broadcastNotification', JSON.stringify(notification));
    showToast('📡', 'تم الإرسال!', `تم إرسال "${title}" لجميع المستخدمين`, 3000);

    broadcastTitle.value = '';
    broadcastMessage.value = '';
    showNotification(notification);
});

// استقبال الإشعارات
function checkForBroadcast() {
    const stored = localStorage.getItem('broadcastNotification');
    if (!stored) return;

    try {
        const notification = JSON.parse(stored);
        const lastShown = localStorage.getItem('lastBroadcastId');
        if (lastShown === String(notification.id)) return;

        showNotification(notification);
        localStorage.setItem('lastBroadcastId', String(notification.id));
        
        setTimeout(() => {
            const current = localStorage.getItem('broadcastNotification');
            if (current) {
                const currentNotif = JSON.parse(current);
                if (currentNotif.id === notification.id) {
                    localStorage.removeItem('broadcastNotification');
                }
            }
        }, 60000);
    } catch (e) {
        console.log('خطأ في قراءة الإشعار:', e);
    }
}

function showNotification(notification) {
    const area = document.getElementById('notificationArea');
    
    const oldNotifs = area.querySelectorAll('.notif');
    oldNotifs.forEach(n => {
        n.classList.add('hiding');
        setTimeout(() => n.remove(), 400);
    });

    const notifDiv = document.createElement('div');
    notifDiv.className = `notif notif-${notification.type}`;
    
    const icons = {
        info: '📘', success: '✅', warning: '⚠️',
        danger: '🚨', celebration: '🎉', prayer: '🙏'
    };

    notifDiv.innerHTML = `
        <span class="notif-icon">${icons[notification.type] || '📢'}</span>
        <div class="notif-content">
            <div class="notif-title">${notification.title}</div>
            <div class="notif-message">${notification.message}</div>
        </div>
        <button class="notif-close" onclick="this.closest('.notif').classList.add('hiding'); setTimeout(() => this.closest('.notif').remove(), 400);">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

    area.appendChild(notifDiv);

    const duration = (notification.duration || 8) * 1000;
    setTimeout(() => {
        if (notifDiv.parentElement) {
            notifDiv.classList.add('hiding');
            setTimeout(() => notifDiv.remove(), 400);
        }
    }, duration);
}

function updateBroadcastHistory() {
    if (broadcastHistory.length === 0) {
        broadcastHistoryList.innerHTML = `<p style="color: var(--text-light); text-align: center; padding: 20px;">لا توجد إشعارات</p>`;
        return;
    }

    const icons = {
        info: '📘', success: '✅', warning: '⚠️',
        danger: '🚨', celebration: '🎉', prayer: '🙏'
    };

    broadcastHistoryList.innerHTML = broadcastHistory.map(item => `
        <div class="history-item">
            <span>${icons[item.type] || '📢'} ${item.title}</span>
            <span class="h-badge ${item.type}">${item.type}</span>
            <span class="h-time">${item.timestamp}</span>
        </div>
    `).join('');
}

clearBroadcastBtn.addEventListener('click', () => {
    if (!isLoggedIn) {
        showToast('🔒', 'غير مصرح', 'يجب تسجيل الدخول أولاً', 3000);
        return;
    }
    if (confirm('هل أنت متأكد من مسح سجل الإشعارات بالكامل؟')) {
        broadcastHistory = [];
        localStorage.removeItem('broadcastHistory');
        localStorage.removeItem('broadcastNotification');
        localStorage.removeItem('lastBroadcastId');
        updateBroadcastHistory();
        showToast('🗑️', 'تم المسح', 'تم مسح سجل الإشعارات بالكامل', 3000);
    }
});

// مراقبة الإشعارات
setInterval(checkForBroadcast, 3000);
setTimeout(checkForBroadcast, 500);

window.addEventListener('storage', (e) => {
    if (e.key === 'broadcastNotification') checkForBroadcast();
});

// التحقق من حالة الدخول
if (sessionStorage.getItem('broadcastLoggedIn') === 'true') {
    isLoggedIn = true;
}
// ============================
// إيقاف التشغيل التلقائي عند تحميل الصفحة
// ============================
// منع أي صوت من التشغيل تلقائياً عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // إيقاف جميع عناصر الصوت
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    
    // إعادة ضبط أزرار التشغيل
    document.querySelectorAll('.play-pause-btn i').forEach(icon => {
        icon.className = 'fa-solid fa-play';
    });
    
    // إزالة التمييز عن البطاقات
    document.querySelectorAll('.card').forEach(c => {
        c.style.borderColor = '';
        c.style.boxShadow = '';
    });
    
    console.log('🔇 تم إيقاف التشغيل التلقائي');
});

// منع استعادة الحالة المحفوظة (إلغاء restore)
// نمنع الدالة من التشغيل التلقائي
const originalRestore = restoreShuffleState;
restoreShuffleState = function() {
    // نمنعها من تشغيل الصوت
    try {
        const saved = localStorage.getItem('shuffleState');
        if (!saved) return false;
        
        const state = JSON.parse(saved);
        if (!state.isShufflePlaying) return false;
        if (state.playlist !== currentPlaylist || state.searchTerm !== currentSearchTerm) {
            return false;
        }
        
        const currentList = getCurrentList();
        const restoredList = currentList.filter(h => state.shufflePlaylistIds.includes(h.id));
        if (restoredList.length === 0) return false;
        
        shufflePlaylist = restoredList;
        isShufflePlaying = true;
        isLoopActive = state.isLoopActive || false;
        
        if (state.currentShuffleHymn) {
            const hymn = shufflePlaylist.find(h => h.id === state.currentShuffleHymn);
            if (hymn) {
                currentShuffleHymn = hymn;
                shuffleIndex = shufflePlaylist.indexOf(hymn);
            } else {
                shuffleIndex = 0;
                currentShuffleHymn = shufflePlaylist[0];
            }
        } else {
            shuffleIndex = 0;
            currentShuffleHymn = shufflePlaylist[0];
        }
        
        shuffleBtn.classList.add('playing');
        shuffleIcon.className = 'fa-solid fa-pause';
        shuffleBtn.querySelector('span').textContent = 'إيقاف التشغيل العشوائي';
        
        if (isLoopActive) {
            loopBtn.classList.add('active');
            loopBtn.title = 'إلغاء التكرار';
        }
        
        updateShuffleInfo();
        
        // ❌ منع التشغيل التلقائي هنا
        console.log('📌 تم استعادة الحالة ولكن بدون تشغيل تلقائي');
        showToast('⏸️', 'تم الاستعادة', 'تم استعادة وضع التشغيل العشوائي - اضغط تشغيل للمتابعة', 3000);
        
        return true;
    } catch (e) {
        console.log('فشل استعادة الحالة:', e);
        return false;
    }
};
// ============================
// الفووتر (Footer) - وظائف
// ============================

// 1. تحديث عدد الترانيم في الفووتر
function updateFooterStats() {
    const totalHymns = hymns.filter(h => h.title && h.audio).length;
    document.getElementById('totalHymnsCount').textContent = totalHymns;
    
    const totalFavs = favorites.length;
    document.getElementById('totalFavoritesCount').textContent = totalFavs;
    
    // عدد الزوار (محاكاة)
    let visitors = localStorage.getItem('visitorCount');
    if (!visitors) {
        visitors = Math.floor(Math.random() * 100) + 50;
        localStorage.setItem('visitorCount', visitors);
    }
    document.getElementById('totalUsersCount').textContent = visitors;
}

// تحديث الإحصائيات عند تحميل الصفحة وعند تغيير المفضلة
updateFooterStats();

// تحديث عند تغيير المفضلة
const originalToggleFavorite = toggleFavorite;
toggleFavorite = function(id) {
    originalToggleFavorite(id);
    updateFooterStats();
};

// 2. زر العودة للأعلى (Back to Top)
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 3. روابط سريعة - التمرير للقسم المطلوب
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const text = link.textContent.trim();
        
        // البحث عن التصنيف المطلوب
        let targetPlaylist = 'all';
        if (text.includes('القديسة دميانة')) {
            targetPlaylist = 'ترانيم القديسة دميانة';
        } else if (text.includes('عيد الميلاد') && text.includes('ترانيم')) {
            targetPlaylist = 'ترانيم عيد الميلاد';
        } else if (text.includes('ألحان')) {
            targetPlaylist = 'ألحان عيد الميلاد';
        } else if (text.includes('المفضلة')) {
            targetPlaylist = 'favorites';
        }
        
        // تفعيل التصنيف
        playlistButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-playlist') === targetPlaylist) {
                btn.classList.add('active');
                btn.click();
            }
        });
        
        // التمرير للترانيم
        document.getElementById('hymnsContainer').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

console.log('🕊️ الفووتر جاهز - Ευλογείτε | سبحوه');