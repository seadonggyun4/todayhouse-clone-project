const searchModal = document.querySelector('.search-modal')
const searchOverlay = document.querySelector('.overlay')
const searchButton = document.querySelector('.gnb-icon-button.is-search')
//searchModal태그요소 내부 범위에서만 탐색한뒤 searchModalCloseButton를 찾아낸다.
const searchModalCloseButton = searchModal.querySelector('.btn-ghost.btn-40')


// searchModal 오픈
function openSearchModal(){
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}

searchButton.addEventListener('click',openSearchModal)


// SearchModal 닫기
function closeSearchModal(){
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}

searchModalCloseButton.addEventListener('click',closeSearchModal)