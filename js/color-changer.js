'use strict';

window.onload = function() {
    let indicator = 0;

    const firstBackgroundGroup = ["#bba7dd", "#29A9DF", "#d9dd92"];
    const secondBackgroundGroup = ["#eed9ff", "#6DD8FF", "#ffffc3"];
    const thirdBackgroundGroup = ["#8a78ab", "#0078ab", "#a7ab63"];

    let firstBackgroundHandler = [
        document.querySelector('.header'),
        document.querySelector('.contact')
    ];

    let secondBackgroundHandler = [
        ...document.querySelectorAll('.navbar__element'),
        document.querySelector('.contact__submit'),
    ];

    let thirdBackgroundHandler = [
        ...document.querySelectorAll('.portfolio__item'),
        ...document.querySelectorAll('.aboutme__card'),
        document.querySelector('.navbar'),
        document.querySelector('.aboutme__content'),
        document.querySelector('.footer')
    ];

    setInterval(
        () => {
                firstBackgroundHandler.forEach((item) => {
                    item.style.transition = "background-color 2s ease";
                    item.style.backgroundColor = firstBackgroundGroup[indicator];
                });
                secondBackgroundHandler.forEach((item) => {
                    item.style.transition = "background-color 2s ease";
                    item.style.backgroundColor = secondBackgroundGroup[indicator];
                });
                thirdBackgroundHandler.forEach((item) => {
                    item.style.transition = "background-color 2s ease";
                    item.style.backgroundColor = thirdBackgroundGroup[indicator];
                });

                if(indicator == firstBackgroundGroup.length) indicator = 0;
                else indicator++;
            },
        4000);
};