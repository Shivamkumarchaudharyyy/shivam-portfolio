
// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

// SELECT ALL REVEAL ELEMENTS

document.querySelectorAll(".reveal").forEach((element) => {

    observer.observe(element);

});
