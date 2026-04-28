
const languages = {
    tr: {
        
        title: "Merhaba, ben Sude Naz Öztoprak!&nbsp;👋",
        hero: "Samsun Üniversitesi'nde <strong>Yazılım Mühendisliği</strong> 2. sınıf öğrencisiyim. Gündelik hayatı ve problemleri gözlemlemeyi; bu sorunlara kod ile yenilikçi çözümler üretip sistemleri iyileştirmeyi seviyorum. Benim için yazılım, sadece bir araç değil; hayatı daha verimli hale getirme biçimi.",
        body: "Yazılım dünyasının ötesinde; fizyolojiye ve doğanın kusursuz mekaniğine hayran, uzay teknolojilerine ve roketlere meraklı biriyim. Yeniliklerin peşinden gitmeyi, yeni yerler keşfetmeyi ve zekice kurgulanmış bir esprinin ardındaki o kıvrak zekayı seviyorum. Kelimelerin gücüne, doğru terminolojiye ve kelimelerin kökenlerini (etimolojisini) araştırarak aralarındaki bağları keşfetmeye özel bir ilgi duyuyorum.",
        footer: "Ekran başından uzaklaştığımda ise gitarımın tellerinde ve müziğin matematiğinde dinleniyorum."
    },
    en: {
        title: "Hi, I'm Sude Naz Öztoprak!👋",
        hero: "I am a sophomore <strong>Software Engineering</strong> student at Samsun University. I love observing everyday challenges and creating innovative solutions through code; for me, improving systems and making life more efficient is a true passion.",
        body: "Beyond the screen, I am captivated by physiology and the perfect mechanics of nature, with a deep fascination for space technologies and rocketry. I thrive on innovation, discovering new places, and I truly appreciate the sharp intellect behind a well-crafted joke. I value the power of words, precise terminology, and I have a special interest in exploring etymology to discover the deep-rooted connections between languages.",
        footer: "When I’m not developing software, I find my balance in the mathematics of music and the strings of my guitar."
    }
};


const contentArea = document.getElementById('content-area');
const btnTr = document.getElementById('btn-tr');
const btnEn = document.getElementById('btn-en');

/**
 * İçeriği seçilen dile göre günceller.
 * @param {string} lang - 'tr' veya 'en'
 */
function updateContent(lang) {
    if (!contentArea || !languages[lang]) return;

    const data = languages[lang];
    
    
    contentArea.innerHTML = `
        <h1>${data.title}</h1>
        <p class="hero-text">${data.hero}</p>
        <p>${data.body}</p>
        <p>${data.footer}</p>
    `;

    
    btnTr?.classList.toggle('active', lang === 'tr');
    btnEn?.classList.toggle('active', lang === 'en');
    
    
    document.documentElement.lang = lang;
}


btnTr?.addEventListener('click', () => updateContent('tr'));
btnEn?.addEventListener('click', () => updateContent('en'));


document.addEventListener('DOMContentLoaded', () => {
    updateContent('tr');
});