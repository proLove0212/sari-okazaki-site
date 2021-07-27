import React from 'react'

import { GrClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from "./sari_logo.png"

//Styles
import { HeaderArea, Navbar, MobileNavbar, Anchor, NavLink, Cross, Logo, MobileLogo, Hamburger, Dummy } from "./Header.styles"

type Props = {
    menuOpen: boolean
    toggleMenu: () => void
    clicked: boolean
    onHomeScreen: boolean
    scrolled: boolean
}

const Header:React.FC<Props> = ( {menuOpen, toggleMenu, clicked, onHomeScreen, scrolled } ) => {

    return(
        <HeaderArea onHomeScreen={onHomeScreen} scrolled={scrolled}>
            <MobileNavbar backgroundColor="white">
                <Hamburger color="#323232" onClick={toggleMenu}><GiHamburgerMenu /></Hamburger>
                <Anchor href="/"><MobileLogo src={logo}></MobileLogo></Anchor>
                <Dummy></Dummy>
            </MobileNavbar>

            <Navbar backgroundColor="white" menuOpen={menuOpen} clicked={clicked}>
                <Cross color="#323232" onClick={toggleMenu}><GrClose/></Cross>
                <Anchor href="/"><Logo src={logo}></Logo></Anchor>
                <Anchor href="#profile"><NavLink textColor="#323232">プロフィール</NavLink></Anchor>
                <Anchor href="#performance"><NavLink textColor="#323232">演奏依頼</NavLink></Anchor>
                <Anchor href="#videos"><NavLink textColor="#323232">関連動画</NavLink></Anchor>
                <Anchor href="#lesson-title"><NavLink textColor="#323232">教室</NavLink></Anchor>
                <Anchor href="#contact"><NavLink textColor="#323232">お問い合わせ</NavLink></Anchor>
            </Navbar>
        </HeaderArea>
    )
}

export default Header