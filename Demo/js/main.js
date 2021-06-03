$(function () {
//    讲大图的图片地址存放在此
    var arrayImage = new Array(
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg"
    )
//    times  arrayImage[times]
    var times = 1;
    function chageImage() {
        if (times==6){
            times = 1;
        }
        $(".btn a").removeClass('active');
        $(".btn a:nth-child("+times+")").addClass('active');
        $(".imgs img").attr("src",arrayImage[times-1]);
        times++;
    }
    var interval = window.setInterval(function () {
        chageImage()
    },1000)

//    鼠标移入时，切换图片
    $(".btn a").each(function (index) {
        $(this).hover(function () {
            $(".btn a").removeClass('active');
            $(this).addClass('active');
            clearInterval(interval);
            $(".imgs img").attr("src",arrayImage[index]);
            times = index+1;
        },function () {
            Interval = window.setInterval(function () {
                chageImage()
            },3000)
        })
    })
})