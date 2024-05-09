document.addEventListener("DOMContentLoaded", function () {
    const progressDone1 = document.querySelector('.progress-done1');
    const progressDone2 = document.querySelector('.progress-done2');
    const progressDone3 = document.querySelector('.progress-done3');

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(progressDone1, {
        scrollTrigger: {
            trigger: progressDone1,
            toggleActions: 'play pause resume reverse'
        },
        opacity: 1,
        width: progressDone1.getAttribute('data-done') + '%'
        
    },
        
         gsap.to(progressDone2, {
             scrollTrigger: {
                 trigger: progressDone2,
                 toggleActions: 'play pause resume reverse'
             },
             opacity: 1,
             width: progressDone2.getAttribute('data-done') + '%'

         }),
        gsap.to(progressDone3, {
            scrollTrigger: {
                trigger: progressDone3,
                toggleActions: 'play pause resume reverse'
            },
            opacity: 1,
            width: progressDone3.getAttribute('data-done') + '%'

        }),
)});

// const animateProgress2 = setTimeout(() => {
//     progress2.style.opacity = 1;
//     progress2.style.width = progress2.getAttribute('data-done') + '%';
// }, 500);
// const animateProgress3 = setTimeout(() => {
//     progress3.style.opacity = 1;
//     progress3.style.width = progress3.getAttribute('data-done') + '%';
// }, 500);

// setTimeout(() => {
//     progress4.style.opacity = 1;
//     progress4.style.width = progress4.getAttribute('data-done') + '%';
// }, 500)
// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".progress-done1", {
//     animateProgress1,
//     ScrollTrigger: ".progress-done1"
// });
// gsap.to(".progress-done2", { animateProgress1 });
// gsap.to(".progress-done13", { animateProgress1 });