import React from 'react'

import { MdClose} from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../Header/sari_logo.png'

//Styles
import { WelcomeArea } from './Welcome.styles'
import { TextBox, BigTitle, SmallerTitle, TextContainer, HeaderArea, Navbar, MobileNavbar, Anchor, NavLink, Cross, Logo, MobileLogo, Hamburger, Dummy } from './Welcome.styles'

type Props = {
    toggleMenu: () => void;
    menuOpen: boolean;
    clicked: boolean;
    closeMenu: () => void;
}
const Welcome:React.FC<Props> = ( {toggleMenu, menuOpen, clicked, closeMenu} ) => {
    return(
        <WelcomeArea>

            <HeaderArea>    
                <MobileNavbar backgroundColor="transparent">
                    <Hamburger color="#242424" onClick={toggleMenu}><GiHamburgerMenu /></Hamburger>
                    <Anchor href="/"><MobileLogo src={logo}></MobileLogo></Anchor>
                    <Dummy></Dummy>
                </MobileNavbar>

                <Navbar backgroundColor="transparent" menuOpen={menuOpen} clicked={clicked}>
                    <Cross color="#F8F8F8" onClick={toggleMenu}><MdClose/></Cross>
                    <Anchor href="/" onClick={closeMenu}><Logo src={logo}></Logo></Anchor>
                    <Anchor href="#profile" onClick={closeMenu}><NavLink textColor="#242424">プロフィール</NavLink></Anchor>
                    <Anchor href="#performance" onClick={closeMenu}><NavLink textColor="#242424">演奏依頼</NavLink></Anchor>
                    <Anchor href="#videos" onClick={closeMenu}><NavLink textColor="#242424">関連動画</NavLink></Anchor>
                    <Anchor href="#lesson-title" onClick={closeMenu}><NavLink textColor="#242424">教室</NavLink></Anchor>
                    <Anchor href="#contact" onClick={closeMenu}><NavLink textColor="#242424">お問い合わせ</NavLink></Anchor>
                </Navbar>
            </HeaderArea>


            <TextContainer>
                <TextBox>
                    <BigTitle>岡崎さり</BigTitle>
                    <SmallerTitle>三味線・箏</SmallerTitle>
                </TextBox>
            </TextContainer>

        </WelcomeArea>
    )
}

export default Welcome