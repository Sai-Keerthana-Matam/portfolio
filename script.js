const elements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .timeline-item, .creative-card, .gallery-item"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach((element) => {

    observer.observe(element);

});