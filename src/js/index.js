require(["js/config.js"], () => {
    require(["swiper","header", "footer"], (swi,) => {
        class index {
            constructor() {
                this.useSwiper();
            }
            useSwiper() {
                new swi(".swiper-container", {
                    autoplay: true, //可选选项，自动滑动
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            }
        }
        return new index();
    });
});
