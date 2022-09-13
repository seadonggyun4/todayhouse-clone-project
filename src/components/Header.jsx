import Gnb from './header/Gnb'
import Lnb from './header/Lnb'

export default function Header(){
    return(
        <header className="global-header">
            <Gnb />
            <Lnb />
        </header>
    )
}
