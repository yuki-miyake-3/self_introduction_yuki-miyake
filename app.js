$(function() {
$('#autoplay1').slick({
  slidesToShow: 3,
  // スライドのエリアに画像がいくつ表示されるかを指定
  slidesToScroll: 1,
  // 一度にスライドする数
 autoplay: true,
   // 自動再生。trueで自動再生される。
 autoplaySpeed: 2000,
  // 自動再生で切り替えをする時間
  dots: true
　
  
});
});

$(function() {
$('#autoplay2').slick({
  
  centerMode: true,
  // 表示中の画像を中央へ
//  centerPadding: '50px',
  // 中央のpadding 左右のチラ見せ度
  slidesToShow: 3,
  
  dots: true,
  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
//        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
//        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});
});

