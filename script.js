document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
        // Add more image URLs here
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
