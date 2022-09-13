import Header from "./components/Header";
import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from './components/SideBar'
import SearchModal from './components/SearchModal'
import OrderFormModal from './components/OrderFormModal'
import CartModal from './components/CartModal'
import BookMark from './components/BookMark'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      {/* aside */}
      <SideBar />
      <SearchModal />
      <OrderFormModal />
      <CartModal />
      <BookMark />

      {/* overlay */}
      <div class="overlay" aria-hidden="true"></div>
    </>
  );
}

export default App;
