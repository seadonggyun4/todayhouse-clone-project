import Gallery from './main/Gallery'
import ProdctTab from './main/ProductTab'
import MainContent from './main/MainContainer'
import OrderCta from './main/OrderCta'



export default function Main(){
    return(
        <main className="product-show">
            <Gallery />
            <ProdctTab />
            <MainContent />
            <OrderCta /> 
        </main>
    )
}