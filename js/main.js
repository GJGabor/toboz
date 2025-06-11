document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const properties = document.querySelectorAll('.property');
    const descriptions = document.querySelectorAll('.description');
    const images = document.querySelectorAll('.image');

    const texts = {
        en: {
            title: "Flat for Sale",
            property1: "2 Bedrooms, 1 Bathroom, Living Room, Kitchen",
            description1: "A beautiful flat located in the heart of the city.",
            property2: "3 Bedrooms, 2 Bathrooms, Living Room, Kitchen",
            description2: "A spacious flat with a stunning view.",
        },
        hu: {
            title: "Eladó Lakás",
            property1: "2 Hálószoba, 1 Fürdőszoba, Nappali, Konyha",
            description1: "Egy gyönyörű lakás a város szívében.",
            property2: "3 Hálószoba, 2 Fürdőszoba, Nappali, Konyha",
            description2: "Egy tágas lakás lenyűgöző kilátással.",
        }
    };

    function updateLanguage(lang) {
        document.getElementById('title').innerText = texts[lang].title;
        properties[0].innerText = texts[lang].property1;
        descriptions[0].innerText = texts[lang].description1;
        properties[1].innerText = texts[lang].property2;
        descriptions[1].innerText = texts[lang].description2;
    }

    languageToggle.addEventListener('change', function() {
        const selectedLanguage = this.value;
        updateLanguage(selectedLanguage);
    });

    images.forEach(image => {
        image.addEventListener('click', function() {
            const enlargedImage = document.createElement('img');
            enlargedImage.src = this.src;
            enlargedImage.style.width = '80%';
            enlargedImage.style.height = 'auto';
            enlargedImage.style.position = 'fixed';
            enlargedImage.style.top = '50%';
            enlargedImage.style.left = '50%';
            enlargedImage.style.transform = 'translate(-50%, -50%)';
            enlargedImage.style.zIndex = '1000';
            enlargedImage.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
            enlargedImage.addEventListener('click', function() {
                document.body.removeChild(enlargedImage);
            });
            document.body.appendChild(enlargedImage);
        });
    });

    // Initialize with English language
    updateLanguage('en');
});