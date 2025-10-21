let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // ⏳ تغيير كل 3 ثواني
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides);

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const suggestionsList = document.getElementById('suggestions');

    // بيانات المنتجات
    const pages = [
        { name: "هاتف سامسونج s21", url: "s21.html" },
        { name: "هاتف ايفون 13 pro", url: "iphone.html" },
        { name: "هاتف شاومي نوت 11", url: "xiaomi.html" },
        { name: "لابتوب hp", url: "hp-laptop.html" },
        { name: "لابتوب Dell", url: "dell.html" },
        { name: "لابتوب macbook", url: "macbook.html" },
        { name: "سماعة Airpods", url: "airpods-details.html" },
        { name: "ساعة هواوي", url: "huawei-watch.html" },
        { name: "ساعة Galaxy Watch7", url: "galaxy-watch7.html" },
        { name: "سيارة Toyota Corolla 2025", url: "toyota.html" },
        { name: "سيارة BMW X5 2025", url: "bmw.html" },
        { name: "سيارة Hyundai Elantra", url: "tesla.html" },
        { name: "كرة قدم Adidas", url: "adidas-football.html" },
        { name: "تيشيرت Adidas", url: "adidas-tshirt.html" },
        { name: "أحذية Nike", url: "nike-shoes.html" },
        { name: "عطر Armani Code", url: "armani.html" },
        { name: "عطر Chanel No.5", url: "chanel.html" },
        { name: "عطر Dior Sauvage", url: "dior.html" },
        { name: "شاشة LG OLED", url: "lg-oled.html" },
        { name: "شاشة Samsung Crystal UHD", url: "samsung-tv.html" },
        { name: "شاشة Sony Bravia XR", url: "sony-bravia.html" },
        { name: "أحمر شفاه Dior", url: "dior-lipstick.html" },
        { name: "كريم أساس MAC", url: "mac-foundation.html" },
        { name: "ماسكارا Maybelline", url: "maybelline-mascara.html" },
        { name: "ثلاجة Samsung", url: "samsung-fridge.html" },
        { name: "غسالة LG", url: "lg-washer.html" },
        { name: "ميكروويف Panasonic", url: "panasonic-microwave.html" },
        { name: "Nintendo Switch", url: "nintendo-switch.html" },
        { name: "PlayStation 5", url: "ps5.html" },
        { name: "Xbox Series X", url: "xbox-series-x.html" },
    ];

    // دالة عرض الاقتراحات
    function showSuggestions(query) {
        suggestionsList.innerHTML = '';
        if (!query) {
            suggestionsList.style.display = 'none';
            return;
        }

        const filtered = pages.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length === 0) {
            suggestionsList.style.display = 'none';
            return;
        }

        filtered.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name;
            li.addEventListener('click', () => {
                window.location.href = item.url;
            });
            suggestionsList.appendChild(li);
        });

        suggestionsList.style.display = 'block';
    }

    // البحث أثناء الكتابة
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        showSuggestions(query);
    });

    // إخفاء الاقتراحات عند الضغط خارجها
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            suggestionsList.style.display = 'none';
        }
    });

    // البحث عند الضغط على زر البحث
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        const result = pages.find(item => item.name.toLowerCase().includes(query));
        
        if (result) {
            window.location.href = result.url;
        } else {
            alert('عذرًا، لم يتم العثور على المنتج.');
        }
    });

    // البحث عند الضغط على Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});
