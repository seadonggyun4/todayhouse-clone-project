const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')


// [ ==================== openGnbSearchHistory ==================== ]
function openGnbSearchHistory(){
  //gnbSearchHistory에 is-active 클래스 생성
  gnbSearchHistory.classList.add('is-active')
  //gnbSearchHistory에 is-active 클래스 있을시에
  if(gnbSearchHistory.classList.contains('is-active')){
    //window 클릭시 동작하는 closeGnbSearchHistory이벤트 생성
    window.addEventListener('click', closeGnbSearchHistory)
  }
}


// [ ==================== closeGnbSearchHistory ==================== ]
function closeGnbSearchHistory(e){
  console.log('closeGnbSearchHistory')

  // 만약 gnbSearch가 아닌 요소에서 이벤트 발생시
  if(!gnbSearch.contains(e.target)){
    //gnbSearchHistory의 is-active 클래스 제거
    gnbSearchHistory.classList.remove('is-active')
    //window 클릭시 동작하는 closeGnbSearchHistory 이벤트 제거
    window.removeEventListener('click',closeGnbSearchHistory)
  }

}



//gnbSearchInput focus시 openGnbSearchHistory이벤트 실행
gnbSearchInput.addEventListener('focus', openGnbSearchHistory)


