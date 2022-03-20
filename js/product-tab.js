const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')

//[==================== toggleActiveTab ====================] 
function toggleActiveTab(){
  const tabItem = this.parentNode

  if(currentActiveTab !== tabItem){
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  } 


}

// [==================== scrollToTabpanel ====================]
function scrollToTabpanel(){
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`) //id선택자
  console.log(tabPanel)

  //삼항연산자로 조건을 건다
  const scrollAmount = tabPanel.getBoundingClientRect().top - (window.innerWidth >= 768 ?  TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)
  
  window.scrollBy({
    top: scrollAmount , // viewport 에서 어느정도 떨어진 위치에 이동하고 싶은지
    behavior: 'smooth' // 이동시 부드럽게 이동
  })
}


productTabButtonList.forEach((button)=>{
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabpanel)
})


// =======================================================================================================================================================





// [ productTabPanelIdList => id값을 담은 배열 ]
const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation'
]

// [  productTabPanelList => id값을 통해 해당html 요소를 반환한 객체 생성 ]
const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  
  return tabPanel
})

// [  productTabPanelPositionMap => id:position 형태의 객체값을 담을 빈 객체 생성 ]
const productTabPanelPositionMap = {
  // id: position 형태
}


// [  detectTabPanelPosition() => productTabPanelPositionMap를  productTabPanelList객체에서 값을 뽑아내 업데이트 할 함수]
function detectTabPanelPosition(){
  productTabPanelList.forEach((panel) => {
    //id
    const id = panel.getAttribute('id')
    //y축 위치(window.scrollY + element.getBoundingClientRect().top)
    const position = window.scrollY + panel.getBoundingClientRect().top
    //productTabPanelPositionMap 에 업데이트
    productTabPanelPositionMap[id] = position

    
  })  
}

//웹 컨텐츠가 로드 될시 detectTabPanelPosition 함수 실행 
window.addEventListener('load', detectTabPanelPosition)

//웹 viewpot 의 사이즈가 resize detectTabPanelPosition 함수 실행 
window.addEventListener('resize', detectTabPanelPosition)