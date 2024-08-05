document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        // Add more image paths here
    ];

    const galleryDiv = document.getElementById('gallery');

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Nicholas Cage';
        img.className = 'gallery-image';
        galleryDiv.appendChild(img);
    });
});
