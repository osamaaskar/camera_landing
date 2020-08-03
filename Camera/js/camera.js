var menu = ['01', '02', '03','04']
var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

});