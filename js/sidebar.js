const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

// 사이드바 오픈
function openSidebar (){
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

// 사이드바 클로즈
function closeSidebar(){
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarMenuButton.addEventListener('click', openSidebar)


sidebarOverlay.addEventListener('click', closeSidebar)