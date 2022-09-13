//images
import logo from '../assets/images/logo.svg'
import User1 from '../assets/images/img-user-01.jpg'
import { useEffect } from 'react'


export default function SideBar(){
    useEffect(() => {
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
    }, [])



    return(
        // <!-- ===== SideBar: Drawer ===== -->
        <aside className="sidebar sm-only">
            <header className="sidebar-header">
            <h1 className="logo">
                <a href="/"><img src={logo} alt="내일의 집" /></a>
            </h1>

            {/* <!-- NOTE: 로그인을 한 경우 --> */}
            <div className="sidebar-user">
                <a href="/">
                <div className="avatar-24">
                    <img src={User1} alt="user imges" />
                </div>
                <strong className="username">사달라밖에없는데뭘사야되는지누가좀알려줘</strong>
                </a>
            </div>

            {/* <!-- NOTE: 로그인을 안한 경우 --> */}
            {/* <!-- <div className="sidebar-auth">
                <a className="btn-outline btn-40" href="/">로그인</a>
                <a className="btn-fill-primary btn-40" href="/">회원가입</a>
                </div> --> */}
            </header>

            <nav className="sidebar-nav">
            <h2 className="visually-hidden">메뉴</h2>

            {/* <!-- // --> */}
            <div className="drawer-menu is-community">
                <button className="drawer-menu-button" type="button">
                <i className="ic-community" aria-hidden="true"></i>
                커뮤니티
                <i className="ic-chevron" aria-hidden="true"></i>
                </button>

                <div className="drawer-menu-content">
                <ul className="drawer-menu-list">
                    <li className="drawer-menu-item"><a href="/">홈</a></li>
                    <li className="drawer-menu-item"><a href="/">사진</a></li>
                    <li className="drawer-menu-item"><a href="/">집들이</a></li>
                    <li className="drawer-menu-item"><a href="/">노하우</a></li>
                    <li className="drawer-menu-item"><a href="/">전문가집들이</a></li>
                    <li className="drawer-menu-item"><a href="/">셀프가이드</a></li>
                    <li className="drawer-menu-item"><a href="/">질문과답변</a></li>
                    <li className="drawer-menu-item"><a href="/">이벤트</a></li>
                </ul>
                </div>
            </div>
            {/* <!-- // --> */}
            <div className="drawer-menu is-active is-open is-store">
                <button className="drawer-menu-button" type="button">
                <i className="ic-store" aria-hidden="true"></i>
                스토어
                <i className="ic-chevron" aria-hidden="true"></i>
                </button>

                <div className="drawer-menu-content">
                <ul className="drawer-menu-list">
                    <li className="drawer-menu-item"><a href="/">스토어</a></li>
                    <li className="drawer-menu-item"><a href="/">카테고리</a></li>
                    <li className="drawer-menu-item"><a href="/">신혼가구</a></li>
                    <li className="drawer-menu-item"><a href="/">베스트</a></li>
                    <li className="drawer-menu-item"><a href="/">오늘의딜</a></li>
                    <li className="drawer-menu-item"><a href="/">연휴특가</a></li>
                    <li className="drawer-menu-item"><a href="/">월동준비</a></li>
                    <li className="drawer-menu-item"><a href="/">프리미엄</a></li>
                    <li className="drawer-menu-item is-active">
                    <a href="/">
                        기획전
                        <i className="ic-new" lang="en" aria-label="New"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            {/* <!-- // --> */}
            <div className="drawer-menu is-expert">
                <button className="drawer-menu-button" type="button">
                <i className="ic-expert" aria-hidden="true"></i>
                인테리어시공
                <i className="ic-chevron" aria-hidden="true"></i>
                </button>

                <div className="drawer-menu-content">
                <ul className="drawer-menu-list">
                    <li className="drawer-menu-item"><a href="/">시공홈</a></li>
                    <li className="drawer-menu-item"><a href="/">시공스토어</a></li>
                </ul>
                </div>
            </div>

            {/* <!-- NOTE: 로그인을 한 경우 --> */}
            <div className="sidebar-user-menu">
                <ul className="user-menu-list">
                <li className="user-menu-item"><a href="/">마이페이지</a></li>
                <li className="user-menu-item"><a href="/">나의 쇼핑</a></li>
                <li className="user-menu-item"><a href="/">스크랩북</a></li>
                <li className="user-menu-item"><a href="/">알림</a></li>
                <li className="user-menu-item"><a href="/">이벤트</a></li>
                </ul>
            </div>
            </nav>
        </aside>
    )
}