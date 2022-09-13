import { useEffect } from "react"

export default function SearchModal(){
    useEffect(() => {
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
    }, [])



    return(
        // <!-- ===== SearchBar: Drawer ===== -->
        <aside className="search-modal lg-hidden">
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
                {/* <!-- header --> */}
                <header className="search-modal-header">
                    <h1 className="visually-hidden">검색창</h1>
                    <div className="search-modal-form">
                    <div className="input-group">
                        <i className="ic-search" aria-hidden="true"></i>
                        <input className="form-input" type="text" placeholder="스토어 검색" />
                    </div>
                    <button className="btn-ghost btn-40" type="button">취소</button>
                    </div>
                </header>
                {/* <!-- section --> */}
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
                            소파는 어디서 어떻게 구매하고 어떤사이지의 소파가
                            좋을까요?
                        </button>
                        <button className="delete-button" type="button">
                            <i className="ic-close" aria-label="검색어 삭제"></i>
                        </button>
                        </li>
                        <li className="search-history-item">
                        <button className="word-button" type="button">러그</button>
                        <button className="delete-button" type="button">
                            <i className="ic-close" aria-label="검색어 삭제"></i>
                        </button>
                        </li>
                        <li className="search-history-item">
                        <button className="word-button" type="button">의자</button>
                        <button className="delete-button" type="button">
                            <i className="ic-close" aria-label="검색어 삭제"></i>
                        </button>
                        </li>
                    </ol>
                    </div>
                    {/* <!-- NOTE: 최근 검색어가 존재하지 않을 경우 --> */}
                    {/* <!-- <div className="search-history-content">
                        <p className="placeholder">최근 검색한 내역이 없습니다.</p>
                    </div> --> */}
                </section>
                </div>
            </div>
            </div>
        </aside>
    )
}