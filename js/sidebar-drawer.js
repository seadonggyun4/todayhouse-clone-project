const drawerMenuButtonList = document.querySelectorAll('.sidebar-nav .drawer-menu-button')

// DrawerMenu 에 클래스 토글
function toggleDrawerMenu(){
  //drawerMenuButton을 감싸고 있는 drawer-menu 한테 is-open 을 추가해야한다.
  //this.parentNode 로 drawer-menu를 선택한다.
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach(function(drawerMenuButton){
  drawerMenuButton.addEventListener('click',toggleDrawerMenu)
})