const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')

//toggleActiveTab
function toggleActiveTab(){
  const tabItem = this.parentNode

  if(currentActiveTab !== tabItem){
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  } 


}

//scrollToTabpanel
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