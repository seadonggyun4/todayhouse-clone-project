export default function BookMark(){
    return(
        // <!-- Bookmark Toasts -->
        // <!-- 북마크 추가 -->
        <>
            <aside className="bookmark-toast">
            <h1 className="bookmark-title">스크랩했습니다.</h1>
            <button className="close-button" type="button" aria-label="닫기">
                <i className="ic-close" aria-hidden="true"></i>
            </button>
            <div className="button-group">
                <a className="btn-32 btn-outline" href="/">스크랩북 보기</a>
                <button className="btn-32 btn-fill-primary" type="button">폴더에 담기</button>
            </div>
            </aside>
            {/* <!-- 북마크 해제 -->
            <!-- <aside className="bookmark-toast">
              <h1 className="bookmark-title">스크랩북에서 삭제했습니다</h1>
              <button className="close-button" type="button" aria-label="닫기">
                <i className="ic-close" aria-hidden="true"></i>
              </button>
            </aside> --> */}
        </>
    )
}