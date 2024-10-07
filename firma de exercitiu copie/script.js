document.addEventListener("DOMContentLoaded", function() {
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = localStorage.getItem('language') || 'ro';

    // Texte în română și engleză
    const translations = {
        ro: {
            home: 'Acasă',
            products: 'Produse',
            contact: 'Contact',
            location: 'Unde ne găsești?',
            welcomeMessage: 'Bine ai venit la F.E. MK TECH!',
            introText: 'Oferim cele mai bune soluții de aparatură de birotică pentru biroul tău. Descoperă produsele noastre din categoriile Calculatoare & Laptopuri, Monitoare, Echipamente Periferice, Papetărie și Consumabile. Serviciile noastre sunt dedicate pentru a satisface nevoile tale profesionale.'
        },
        en: {
            home: 'Home',
            products: 'Products',
            contact: 'Contact',
            location: 'Where to find us?',
            welcomeMessage: 'Welcome to F.E. MK TECH!',
            introText: 'We offer the best office equipment solutions for your workspace. Discover our products in the categories Computers & Laptops, Monitors, Peripheral Equipment, Stationery, and Consumables. Our services are dedicated to meeting your professional needs.'
        }
    };

    function updateTextContent(language) {
        document.querySelectorAll('.nav-link').forEach(link => {
            const key = link.getAttribute('data-key');
            link.textContent = translations[language][key];
        });

        // Schimbă mesajul de bun venit și textul de introducere pe pagina principală
        if (window.location.pathname === '/index.html') {
            document.querySelector('h1').textContent = translations[language].welcomeMessage;
            document.querySelector('p').textContent = translations[language].introText;
        }
    }

    function toggleLanguage() {
        currentLanguage = (currentLanguage === 'ro') ? 'en' : 'ro';
        localStorage.setItem('language', currentLanguage);
        updateTextContent(currentLanguage);
    }

    languageToggle.addEventListener('click', toggleLanguage);

    // Inițializează textul paginii în funcție de limba curentă
    updateTextContent(currentLanguage);
});
