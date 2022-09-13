import { useEffect } from 'react'

//images
import logo from '../../assets/images/logo.svg'
import userImage from '../../assets/images/img-user-01.jpg'




export default function Gnb(){
    useEffect(() => {
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
    },[])


    return(
    // <!-- ===== GNB:Global Nabigation Bar ===== -->
    <div className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb-wrapper">
              <div className="gnb-left">
                <h1 className="logo">
                  <a href="/">
                    <img src={logo} alt="내일의 집" />
                  </a>
                </h1>

                <nav className="gnb-nav sm-hidden">
                  <h2 className="visually-hidden">메뉴</h2>
                  <ul className="gnb-nav-list">
                    <li className="gnb-nav-item"><a href="/">커뮤니티</a></li>
                    <li className="gnb-nav-item is-active">
                      <a href="/">스토어</a>
                    </li>
                    <li className="gnb-nav-item"><a href="/">인테리어시공</a></li>
                  </ul>
                </nav>

                <button className="gnb-icon-button is-menu sm-only" type="button" aria-label="메뉴 열기 버튼">
                  <i className="ic-menu"></i>
                </button>
              </div>

              <div className="gnb-right">
                {/* <!-- 검색창 --> */}
                <div className="gnb-search lg-only">
                  <div className="input-group">
                    <i className="ic-search" aria-hidden="true"></i>
                    <input className="form-input" type="text" placeholder="스토어 검색" />
                  </div>

                  <section className="search-history">
                    <header className="search-history-header">
                      <h2 className="title">최근 검색어</h2>
                      <button type="button">전체 삭제</button>
                    </header>

                    {/* <!-- NOTE: 최근 검색어가 존재할 경우 --> */}
                    <div className="search-history-content">
                      <ol className="search-history-list">
                        <li className="search-history-item">
                          <button className="word-button" type="button">
                            소파는 어디서 어떻게 구매하고 어떤 사이즈 의
                            소파가 좋을까요?
                          </button>
                          <button className="delete-button" type="button">
                            <i className="ic-close" aria-label="검색어 삭제"></i>
                          </button>
                        </li>
                        <li className="search-history-item">
                          <button className="word-button" type="button">
                            러그
                          </button>
                          <button className="delete-button" type="button">
                            <i className="ic-close" aria-label="검색어 삭제"></i>
                          </button>
                        </li>
                        <li className="search-history-item">
                          <button className="word-button" type="button">
                            의자
                          </button>
                          <button className="delete-button" type="button">
                            <i className="ic-close" aria-label="검색어 삭제"></i>
                          </button>
                        </li>
                      </ol>
                    </div>
                  </section>
                </div>

                {/* <!-- NOTE: 로그인을 했을 경우 --> */}
                <div className="button-group">
                  <button className="gnb-icon-button is-search lg-hidden" type="button" aria-label="검색창 열기 버튼">
                    <i className="ic-search"></i>
                  </button>

                  <a className="gnb-icon-button sm-hidden" href="/" aria-label="스크랩북 페이지 로 이동">
                    <i className="ic-bookmark"></i>
                  </a>

                  <a className="gnb-icon-button sm-hidden" href="/" aria-label="내소식 페이지 로 이동">
                    <i className="ic-bell"></i>
                    <strong className="badge">5</strong>
                  </a>

                  <a className="gnb-icon-button is-cart" href="/" aria-label="장바구니 페이지 로 이동">
                    <i className="ic-cart"></i>
                    <strong className="badge">999</strong>
                  </a>
                  {/* <!-- 마이메뉴 --> */}
                  <div className="my-menu sm-hidden">
                    <button className="my-menu-button" type="button" aria-label="마이메뉴 열기 버튼">
                      <img src={userImage} alt="유저 이미지" />
                    </button>

                    <div className="my-menu-content">
                      <ul className="my-menu-list">
                        <li className="my-menu-item">
                          <a href="/">마이페이지</a>
                        </li>
                        <li className="my-menu-item">
                          <a href="/">나의 쇼핑</a>
                        </li>
                        <li className="my-menu-item"><a href="/">이벤트</a></li>
                        <li className="my-menu-item">
                          <button type="button">로그아웃</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- NOTE: 로그인을 하지 않은 경우 --> */}
                {/* <!-- <div className="button-group">
              <button
                className="gnb-icon-button is-search lg-hidden"
                type="button"
                aria-label="검색창 열기 버튼"
              >
                <i className="ic-search"></i>
              </button>
              
              <a
                className="gnb-icon-button is-cart"
                href="/"
                aria-label="장바구니 페이지 로 이동"
              >
                <i className="ic-cart"></i>
              </a>

              <div className="gnb-auth sm-hidden">
                <a href="/">로그인</a>
                <a href="/">회원가입</a>
              </div>
            </div> --> */}

                <button className="btn-fill-primary btn-40 sm-hidden" type="button">
                  글쓰기
                  <i className="ic-chevron" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
