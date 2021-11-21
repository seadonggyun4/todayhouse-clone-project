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

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  controls:false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list', // 케러셀 요소를 컨트롤할 요소들
  gutter: 4, // 캐러셀 이미지와 이미지 간의 간격
  edgePadding: 16, // 사진 양 옆에 padding 값 부여(캐러셀의 영역이 줄어든다)
  loop: false, //캐러셀 루프 설정
  arrowKeys: true, //화살표로 움직이기
  mouseDrag: true, //마우스 드래그로 움직일수 있는가.
  preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list', // 케러셀 요소를 컨트롤할 요소들
  gutter: 6, // 캐러셀 이미지와 이미지 간의 간격
  edgePadding: 75, // 사진 양 옆에 padding 값 부여(캐러셀의 영역이 줄어든다)
  loop: false, //캐러셀 루프 설정
  arrowKeys: true, //화살표로 움직이기
  mouseDrag: true, //마우스 드래그로 움직일수 있는가.
  preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
})
