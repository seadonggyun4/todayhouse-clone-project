const productCarousel = tns({
  container: '.product-carousel .slider-list', //케러샐화 시킬 요소들
  controls: false,
  navContainer: '.product-carousel .thumbnail-list', // 케러셀 요소를 컨트롤할 요소들
  navAsThumbnails: true,
  arrowKeys: true, //화살표로 움직이기
  autoplay: true, //자동재생
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true, //마우스 드래그로 움직일수 있는가.
  preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
  autoplayTimeout: 5000, //자동재생 시간
  //   items: 3,
  //   slideBy: 'page',
})

const userGallery = tns({
  container: '.user-gallery .slider-list',
  controls: false,
  gutter: 4, // 이미지의 간격
  edgePadding: 16, // 사진 양 옆에 padding 값 부여
  loop: false, //캐러셀 루프 설정
  arrowKeys: true, //화살표로 움직이기
  mouseDrag: true, //마우스 드래그로 움직일수 있는가.
  preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
  responsive: {
    // 캐러셀을 반응형으로 디자인 할수있다.
    768: {
      gutter: 6,
      controls: true,
      edgePadding: 75,
    },
  },
})
