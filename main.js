

$(document).ready(function () {
    var img_data = document.querySelector('.img_s');
    // img_data.style.width="350px";
    let data;

    let mobile_max_width = window.innerWidth;
    console.log(mobile_max_width);
    if (mobile_max_width >= 991) {
        img_data.style.width = "450px";
        data = 450+"px";
        console.log(img_data.style.width);
    } if (mobile_max_width <= 991) {
        img_data.style.width = "350px";
        data = 350+"px";
        console.log(img_data.style.width);
    }
    if (mobile_max_width <= 767) {
        img_data.style.width = "200px";
        img_data.style.height = "300px";
        data = 200+"px"
        console.log(img_data.style.width);
    }

    $('.show').click(function () {
        $('.img_s').show(1000);
        $('.show').addClass('active');
        $('.hide').removeClass('active');
        $('.pluse').removeClass('active');
        $('.minse').removeClass('active');
    })

    $('.hide').click(function () {
        $('.img_s').hide(1000);

        $('.hide').addClass('active');
        $('.show').removeClass('active');
        $('.pluse').removeClass('active');
        $('.minse').removeClass('active');
    })

    $('.minse').click(function () {

        if (img_data.style.width > 0+"px") {

            console.log(img_data.style.width);
            $('.img_s').css("width", "-=5px");
        }

        $('.minse').addClass('active');
        $('.show').removeClass('active');
        $('.pluse').removeClass('active');
        $('.hide').removeClass('active');
    })

    $('.pluse').click(function () {

        if (img_data.style.width <= data) {
            console.log(img_data.style.width);
            $('.img_s').css("width", "+=5px");
        }

        $('.pluse').addClass('active');
        $('.show').removeClass('active');
        $('.hide').removeClass('active');
        $('.minse').removeClass('active');
    })



});