import { Popover } from "@headlessui/react"
import menuOpenIcon from "../../assets/menu-buguer-open.svg"
import { ButtonClose } from "../ButtonClose/index"
import logoMobileImg from   '../../assets/logo-mobile.svg'
import { useState } from "react"
import './style.css'
import { Link } from "react-router-dom"

export function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Popover className="md:hidden">
            <Popover.Button>
                    <img src={menuOpenIcon} alt="Abrir Menu"/> 
            </Popover.Button>

            <Popover.Panel as="nav" className="fixed z-[1000] scroll-none bg-backgrond left-0 top-0 bottom-0 right-0 h-screen w-screen">
                <header className="flex relative z-20 justify-between items-center w-full max-w-[918px] mx-auto px-[26px] pt-9 pb-[26px]">
                    <a href="/">
                        <img src={logoMobileImg} alt="Logo" className="flex md:hidden h-[32.78px] w-[171px] " />
                    </a>
                    <ButtonClose/>
                </header>
                <ul className="menu flex flex-col">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/Recompensas">Recompensas</Link>
                    </li>
                    <li>
                        <Link to="/lojas">Gift Card</Link>
                    </li>
                    <li>
                        <Link to="/Lojas">Lojas</Link>
                    </li>
                </ul>
            </Popover.Panel>
        </Popover>
    )
}

