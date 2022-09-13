export default function CartModal(){
    return(
        // <!-- cart modal -->
        <aside className="cart-modal">
            <h1 className="cart-title">장바구니에 상품을 담았습니다</h1>

            <div className="button-group">
            <a className="btn-48 btn-fill-primary" href="/">장바구니 보러가기</a>
            <button className="btn-48 btn-fill-secondary" type="button">확인</button>
            </div>
        </aside>
    )
}