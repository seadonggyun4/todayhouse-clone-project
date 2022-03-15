const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector('.search-history-header button')
const deleteButtons = gnbSearchHistory.querySelectorAll('.delete-button')



function close(){
  //gnbSearchHistory의 is-active 클래스 제거
  gnbSearchHistory.classList.remove('is-active')
  //window 클릭시 동작하는 closeGnbSearchHistory 이벤트 제거
  window.removeEventListener('click',closeGnbSearchHistory)
}




// [ ==================== openGnbSearchHistory ==================== ]
function openGnbSearchHistory(){
  //gnbSearchHistoryList의 자식요소들의 길이가 0 일때(요소가 없을때)
  if(gnbSearchHistoryList.children.length === 0){
    //closeGnbSearchHistory 종료
    return
  }


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
    //close()함수 실행
    close()
  }

}

//gnbSearchInput focus시 openGnbSearchHistory이벤트 실행
gnbSearchInput.addEventListener('focus', openGnbSearchHistory)


// [ ==================== deleteAllSearchHistories ==================== ]
function deleteAllSearchHistoryItems(){
  // gnbSearchHistoryList 초기화
  gnbSearchHistoryList.innerHTML = ''
  //close()함수 실행
  close()
}

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)










// [ ==================== deleteSearchHistoryItem ==================== ]
function deleteSearchHistoryItem(e){
  const itemToDelete = this.parentNode
  // 이벤트의 전파를 막는다.
  e.stopPropagation()
  //removeChild() => removeChild는 ()내부에 있는 자식요소를 제거한다.
  gnbSearchHistoryList.removeChild(itemToDelete)

  if( gnbSearchHistoryList.children.length === 0 ){
    //close()함수 실행
    close()
  }
}


deleteButtons.forEach(function(deleteButton){
  deleteButton.addEventListener('click', deleteSearchHistoryItem)
})