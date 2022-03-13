const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu .my-menu-button')





// [ ==================== toggleMyMenu ==================== ]
function toggleMyMenu(){
  //myMenu에 is-active 클래스 토글
  myMenu.classList.toggle('is-active')

  //myMenu가 is-acive일때
  if(myMenu.classList.contains('is-active')){
    //window 클릭시 발생하는 closeMyMenuOnClickingOutside 이벤트 실행
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
}


// [ ==================== closeMyMenuOnClickingOutside ==================== ]
function closeMyMenuOnClickingOutside(e){
  console.log('closeMyMenu 이벤트 발생')

  // e.target => 이벤트가 발생한 요소
  // myMenu.containis(e.target) => myMenu가 e.target을 포함하고 있는지 여부 (boolean 타입)
  // 즉 myMenu에서 이벤트 발생한게 아닐시
  if(! myMenu.contains(e.target)){
    //myMenu 의 is-active 클래스 제거
    myMenu.classList.remove('is-active')
    //window 클릭시 발생하는 closeMyMenuOnClickingOutside 이벤트 제거
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}



//myMenuButton클릭시 발생하는 toggleMyMenu 이벤트 실행
myMenuButton.addEventListener('click', toggleMyMenu)