let sections = document.querySelectorAll('section');
let nav_items = document.querySelectorAll('.nav_item');
let page_content = document.querySelector('.page_content');

function activeLink(nav_item) {
    nav_items.forEach((item) => item.classList.remove('selected'));
    nav_item.classList.add('selected');
}

nav_items.forEach((item) => {
    item.addEventListener('click', () => {
        activeLink(item);
    });
});

page_content.addEventListener('scroll', () => {
    let scrollY = page_content.scrollTop;
    // console.log('scrollY:', scrollY); // Check the value of scrollY

    sections.forEach((sec) => {
        let offset = sec.offsetTop - page_content.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Adjust the offset for greater tolerance
        offset -= 200;

        // console.log(`Section ${id} - Offset: ${offset}, Height: ${height}, scrollY: ${scrollY}`); // Section debugging

        if (scrollY >= offset && scrollY < offset + height) {
            let target = document.querySelector(`.nav_item[href='#${id}']`);
            
            //console.log(`Activating link for section: ${id}, target: ${target}`); // Debug link activation
            if (target) {
                activeLink(target);
            }
        }
    });
});


/* project card toggle hidden */

const cards = [];

// Agregar un evento de click al elemento de contenido
document.querySelectorAll('.project_card').forEach((card) => {
    const card_header = card.querySelector('.card_header');
    cards.push(card);

    card_header.addEventListener('click', () => toggleContentVisibility(card));
});


// Función para alternar la visibilidad del contenido
function toggleContentVisibility(clickedCard) {
    cards.forEach((card) => {
        if (card === clickedCard) {
            card.classList.toggle('visible');
        } else {
            card.classList.remove('visible');
            card.classList.add('hidden');
        }
    });
}