document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://i.etsystatic.com/15020412/r/il/455abc/2328156575/il_570xN.2328156575_4m7l.jpg',
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
