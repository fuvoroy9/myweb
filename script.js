// ==========================================
// ১. লাইভ ডিজিটাল ঘড়ি, তারিখ ও বার আপডেট করা
// ==========================================

function updateClock() {
    const now = new Date();
    
    document.getElementById('clock').innerText = now.toLocaleTimeString('bn-BD');
    document.getElementById('date').innerText = now.toLocaleDateString('bn-BD');

    const daysInBengali = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const currentDay = daysInBengali[now.getDay()];
    document.getElementById('day').innerText = currentDay;
}

setInterval(updateClock, 1000);
updateClock();

// ==========================================
// ২. ডার্ক/লাইট মোড টগল (Dark/Light Mode)
// ==========================================

const themeToggleBtn = document.getElementById('themeToggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // আইকন পরিবর্তন করা
    const icon = themeToggleBtn.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// ==========================================
// ৩. FAQ ড্রপডাউন (Accordion) হ্যান্ডেল করা
// ==========================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        
        // অন্য কোনো FAQ খোলা থাকলে বন্ধ করা
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // বর্তমান ক্লিক করা FAQ টগল করা
        faqItem.classList.toggle('active');
    });
});

// ==========================================
// ৪. ব্যাক টু টপ বাটন (Back to Top)
// ==========================================

const backToTopBtn = document.getElementById('backToTop');

// স্ক্রল করলে বাটন দৃশ্যমান হওয়া
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// বাটনে ক্লিক করলে মসৃণভাবে পেজের উপরে যাওয়া
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// ৫. কন্টাক্ট ফর্ম সাবমিট হ্যান্ডেল করা
// ==========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('ধন্যবাদ! আপনার মেসেজটি সফলভাবে গ্রহণ করা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
    contactForm.reset();
});