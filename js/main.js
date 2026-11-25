const mainSwiper = new Swiper(".mainvisual", {
  loop: true, // 마지막 슬라이드 다음에 처음으로
  speed: 800, // 넘어가는 속도(ms)
  effect: "fade",
  autoplay: {
    delay: 4000, // 4초마다 자동 넘김
    disableOnInteraction: false, // 사용자가 넘긴 뒤에도 자동재생 유지
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".btn-prev",
    nextEl: ".btn-next",
  },
});
const pauseBtn = document.querySelector(".btn-pause");
const pauseIcon = pauseBtn.querySelector("span");

pauseBtn.addEventListener("click", () => {
  if (mainSwiper.autoplay.running) {
    mainSwiper.autoplay.stop(); // 멈춤
    pauseIcon.textContent = "play_arrow"; // 아이콘을 재생 모양으로
    pauseBtn.setAttribute("aria-label", "재생");
  } else {
    mainSwiper.autoplay.start(); // 다시 재생
    pauseIcon.textContent = "pause";
    pauseBtn.setAttribute("aria-label", "일시정지");
  }
});
