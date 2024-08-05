document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://i.etsystatic.com/15020412/r/il/455abc/2328156575/il_570xN.2328156575_4m7l.jpg',
        'https://pbs.twimg.com/media/BYk0HoNCcAAsZVs?format=png&name=small',
        'https://ih1.redbubble.net/image.4692247109.2389/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg',
        'https://imgix.ranker.com/user_node_img/50016/1000309222/original/birdhair-cage-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375'
        // Add more image URLs here
    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById('carouselImage');

    const updateImage = () => {
        carouselImage.src = images[currentIndex];
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    };

    setInterval(nextImage, 3000); // Change image every 3 seconds

    updateImage();
});
