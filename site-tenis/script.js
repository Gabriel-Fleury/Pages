const shoes = [ 
    {id: 1, image: "1.png"},
    {id: 2, image: "1.png"},
    {id: 3, image: "1.png"},
    {id: 4, image: "1.png"}
];

const mainImage = document.querySelector('.shoe-image');
const icons = document.querySelectorAll('.icon');

function updateImage(shoeId) {
    const selectedShoe = shoes.find(shoe => shoe.id === shoeId);
    mainImage.src = selectedShoe.image;

    icons.forEach(icon => icon.classList.remove('active'));

    document.querySelector(`[data-shoe="${shoeId}"]`).classList.add('active');

}

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const shoeId = parseInt(icon.getAttribute( 'data-shoe'));
        updateImage(shoeId);
    });
});

updateImage(1);