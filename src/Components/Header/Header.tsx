import React from 'react'

import { MdClose } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from "./sari_logo.png"

//Styles
import { HeaderArea, Navbar, MobileNavbar, Anchor, NavLink, Cross, Logo, MobileLogo, Hamburger, Dummy } from "./Header.styles"

type Props = {
    menuOpen: boolean
    toggleMenu: () => void
    clicked: boolean
    atHomeScreen: boolean
    scrolled: boolean
    closeMenu: () => void;
}

const Header:React.FC<Props> = ( {menuOpen, toggleMenu, clicked, atHomeScreen, scrolled, closeMenu } ) => {

    return(
        <HeaderArea atHomeScreen={atHomeScreen} scrolled={scrolled}>
            <MobileNavbar backgroundColor="#242424">
                <Hamburger color="#F8F8F8" onClick={toggleMenu}><GiHamburgerMenu /></Hamburger>
                <Anchor href="/"><MobileLogo src={logo}></MobileLogo></Anchor>
                <Dummy></Dummy>
            </MobileNavbar>

            <Navbar backgroundColor="#242424" menuOpen={menuOpen} clicked={clicked}>
                <Cross color="#F8F8F8" onClick={toggleMenu}><MdClose/></Cross>
                <Anchor href="/" onClick={closeMenu}><Logo src={logo}></Logo></Anchor>
                <Anchor href="#profile" onClick={closeMenu}><NavLink textColor="#F8F8F8">プロフィール</NavLink></Anchor>
                <Anchor href="#performance" onClick={closeMenu}><NavLink textColor="#F8F8F8">演奏依頼</NavLink></Anchor>
                <Anchor href="#videos" onClick={closeMenu}><NavLink textColor="#F8F8F8">関連動画</NavLink></Anchor>
                <Anchor href="#lesson-title" onClick={closeMenu}><NavLink textColor="#F8F8F8">教室</NavLink></Anchor>
                <Anchor href="#contact" onClick={closeMenu}><NavLink textColor="#F8F8F8">お問い合わせ</NavLink></Anchor>
            </Navbar>
        </HeaderArea>
    )
}

export default Header