function updateClock() {
    const now = new Date();
    const offset = 0; 
    const brasiliaTime = new Date(now.getTime() + offset * 60 * 60 * 1000);

    const hours = brasiliaTime.getHours();
    const minutes = brasiliaTime.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    document.getElementById('clock').textContent = `${formattedHours}:${formattedMinutes} ${period}`;
}

setInterval(updateClock, 1000);


updateClock();

let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let servicesTitle = document.getElementById('carrousel-subtitle');
let textCarrouselUp = document.getElementById('p-up');
let textCarrouselDown = document.getElementById('p-down');
let image = document.getElementById('img-carrousel');

const carrouselItems = [
    {
        servicesTitle: "WEB DEVELOPMENT",
        textCarrouselUp: "VIKARO is a web development agency focused on transforming innovative ideas into robust digital solutions. With a team of qualified specialists, we offer services ranging from intuitive interface design to the implementation of complex systems, always aiming for technical excellence and customer satisfaction.",
        textCarrouselDown: "Using the latest technologies and agile methodologies, we ensure the delivery of projects on time and within budget. Our mission is to strengthen companies online presence, increasing their visibility and driving business growth with effective and customized digital solutions.",
        image: 'carrousel-img.png'
    },
    {
        servicesTitle: "PROFESSIONAL DESIGN",
        textCarrouselUp: "In addition to web development, VIKARO is also a web design agency dedicated to creating unique and impactful digital experiences. Our team of talented designers works with precision and creativity to develop visual interfaces that not only attract but also engage users. We offer a full range of design services, from creating visual identities to building responsive websites, always focusing on usability and aesthetics.",
        textCarrouselDown: "Utilizing the latest design trends and advanced tools, we ensure that each project is unique and reflects the client's brand essence. Our goal is to help companies stand out in the digital market by providing designs that not only impress but also offer an exceptional user experience. At VIKARO, design is more than appearance; it's about creating meaningful connections between brands and their audiences, helping companies strengthen their visual identities and connect more deeply with their customers.",
        image: 'back-carrousel-2.png'
    }, 
    {
        servicesTitle: "SOCIAL MEDIA",
        textCarrouselUp: "At VIKARO, we also specialize in social media management, understanding that a strong social media presence is crucial for modern businesses. Our team crafts tailored social media strategies to enhance brand visibility and engage with target audiences effectively. From creating compelling content to managing social media campaigns, we focus on driving interaction and building a loyal online community around your brand.",
        textCarrouselDown: "We leverage data-driven insights and industry best practices to optimize social media performance and ensure that your brand’s voice resonates across various platforms. By staying ahead of trends and employing strategic approaches, we help businesses foster meaningful connections with their audiences, amplify their message, and ultimately, achieve their marketing goals. At VIKARO, we are committed to transforming social media into a powerful tool for growth and brand success.",
        image: 'back-carrousel-3.png'
    }
];

let currentIndex = 0;

function updateContent(index) {
    // Adiciona a classe 'hidden' para ocultar os elementos
    servicesTitle.classList.add('hidden');
    textCarrouselUp.classList.add('hidden');
    textCarrouselDown.classList.add('hidden');
    image.classList.add('hidden');

    setTimeout(() => {
        // Atualiza o conteúdo
        servicesTitle.textContent = carrouselItems[index].servicesTitle;
        textCarrouselUp.textContent = carrouselItems[index].textCarrouselUp;
        textCarrouselDown.textContent = carrouselItems[index].textCarrouselDown;
        image.style.backgroundImage = `url(../img/${carrouselItems[index].image})`;

        // Remove a classe 'hidden' para mostrar os elementos com a nova informação
        servicesTitle.classList.remove('hidden');
        textCarrouselUp.classList.remove('hidden');
        textCarrouselDown.classList.remove('hidden');
        image.classList.remove('hidden');
    }, 500); // Tempo de espera deve ser igual à duração da transição
}

arrowRight.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % carrouselItems.length;
    updateContent(currentIndex);
});

arrowLeft.addEventListener('click', function() {
    if (currentIndex === 0) {
        currentIndex = carrouselItems.length - 1;
    } else {
        currentIndex = (currentIndex - 1) % carrouselItems.length;
    }
    updateContent(currentIndex);
});



