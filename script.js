// ==========================================
// ১. লাইভ ডিজিটাল ঘড়ি, তারিখ ও বার আপডেট করা
// ==========================================

// সময়, তারিখ এবং বার আপডেট করার ফাংশন
function updateClock() {
    // বর্তমান ডেট ও টাইম অবজেক্ট তৈরি
    const now = new Date();
    
    // সময়কে বাংলা ফরম্যাটে রূপান্তর করে 'clock' আইডি-তে বসানো
    document.getElementById('clock').innerText = now.toLocaleTimeString('bn-BD');
    
    // তারিখকে বাংলা ফরম্যাটে রূপান্তর করে 'date' আইডি-তে বসানো
    document.getElementById('date').innerText = now.toLocaleDateString('bn-BD');

    // ৭ দিনের বাংলা নামসমূহের অ্যারে
    const daysInBengali = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    
    // বর্তমান বার বের করে 'day' আইডি-তে বসানো
    const currentDay = daysInBengali[now.getDay()];
    document.getElementById('day').innerText = currentDay;
}

// প্রতি ১০০০ মিলিসেকেন্ডে (১ সেকেন্ডে) updateClock ফাংশনটি স্বয়ংক্রিয়ভাবে রান হবে
setInterval(updateClock, 1000);

// পেজ লোড হওয়ার সাথে সাথে প্রথমবার সময় ও বার দেখানোর জন্য ফাংশনটি কল করা হলো
updateClock();


// ==========================================
// ২. কন্টাক্ট ফর্ম সাবমিট হ্যান্ডেল করা
// ==========================================

// এইচটিএমএল থেকে কন্টাক্ট ফর্মটি ধরা হলো
const contactForm = document.getElementById('contactForm');

// ফর্মে 'submit' ইভেন্ট লিসেনার যুক্ত করা হলো
contactForm.addEventListener('submit', function(event) {
    // পেজ যেন রিফ্রেশ না হয় তার জন্য ডিফল্ট বিহেভিয়ার বন্ধ করা হলো
    event.preventDefault();
    
    // ব্যবহারকারীকে ধন্যবাদ জানিয়ে একটি নোটিফিকেশন দেখানো হলো
    alert('ধন্যবাদ! আপনার মেসেজটি সফলভাবে গ্রহণ করা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
    
    // মেসেজ পাঠানোর পর ফর্মের সব ইনপুট ফিল্ড খালি করা হলো
    contactForm.reset();
});