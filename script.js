// Destacar sección activa
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

// Animación al cargar la página
window.addEventListener("load", () => {
    const title = document.querySelector(".title");
    title.style.transform = "translateY(0)";
    title.style.opacity = "1";
});


// Carrusel para proyectos
const projectsContainer = document.querySelector(".projects-container");
let scrollAmount = 0;

function scrollProjects(direction) {
    if (direction === "left") {
        projectsContainer.scrollBy({ left: -300, behavior: "smooth" });
    } else {
        projectsContainer.scrollBy({ left: 300, behavior: "smooth" });
    }
}

// Botones para desplazar el carrusel
const leftButton = document.createElement("button");
const rightButton = document.createElement("button");

leftButton.textContent = "<";
rightButton.textContent = ">";

leftButton.classList.add("carousel-button");
rightButton.classList.add("carousel-button");

projectsContainer.parentElement.appendChild(leftButton);
projectsContainer.parentElement.appendChild(rightButton);

leftButton.addEventListener("click", () => scrollProjects("left"));
rightButton.addEventListener("click", () => scrollProjects("right"));
