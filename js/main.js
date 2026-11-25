const mainSwiper = new Swiper(".mainvisual", {
  loop: true, // 마지막 슬라이드 다음에 처음으로
  speed: 800, // 넘어가는 속도(ms)
  autoplay: {
    delay: 4000, // 4초마다 자동 넘김
    disableOnInteraction: false, // 사용자가 넘긴 뒤에도 자동재생 유지
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  // effect: "fade", // 밀기 대신 페이드로 바꾸고 싶을 때
});
