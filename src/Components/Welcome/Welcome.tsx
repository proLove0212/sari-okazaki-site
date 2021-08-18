import React, { useState, useEffect, useRef } from 'react'

import { MdClose} from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../Header/sari_logo.png'

//Styles
import { FadeInSection } from '../../App.styles'
import { WelcomeArea, TextBox, BigTitle, SmallerTitle, TextContainer, HeaderArea, Navbar, MobileNavbar, Anchor, NavLink, Cross, Logo, MobileLogo, Hamburger, Dummy } from './Welcome.styles'

type Props = {
    toggleMenu: () => void;
    menuOpen: boolean;
    clicked: boolean;
    closeMenu: () => void;
}

const Welcome:React.FC<Props> = ( {toggleMenu, menuOpen, clicked, closeMenu} ) => {

    const [atScreen, setAtScreen] = useState(false)
    const fadeInElement = useRef() as React.MutableRefObject<HTMLInputElement>

    useEffect(() => {

        const { current } = fadeInElement

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setAtScreen(entry.isIntersecting))
        }, options)

        if (!atScreen) {
            observer.observe(current)
        }

        return () => {
            observer.unobserve(current)
        }
        
    }, [atScreen])

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

            <FadeInSection ref={fadeInElement} atScreen={atScreen}>
                <TextContainer>
                    <TextBox>
                        <BigTitle>岡崎さり</BigTitle>
                        <SmallerTitle>三味線・箏</SmallerTitle>
                    </TextBox>
                </TextContainer>
            </FadeInSection>

        </WelcomeArea>
    )
}

export default Welcome