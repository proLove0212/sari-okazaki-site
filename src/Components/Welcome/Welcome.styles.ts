import styled, { keyframes } from 'styled-components'

import welcomeImage from './welcome.jpg'
import welcomeImageMobile from './welcome_mobile3.jpg'

const BREAKPOINT_WIDTH = "450px"
const BREAKPOINT_HEIGHT = "700px"

const BREAKPOINT = "700px"

export const WelcomeArea = styled.div`
    display: flex;
    min-height: 100vh;
    background: url(${welcomeImage}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    @media (max-width: ${BREAKPOINT_WIDTH}) {
        background: url(${welcomeImageMobile}) no-repeat center center;
        background-size: 800px;
    }

    @media (max-height: ${BREAKPOINT_HEIGHT}) and (max-width: ${BREAKPOINT_WIDTH}) {
        background-size: 450px;
    }
`
export const TextBox = styled.div`
    padding: 15vh 0 0 10vw;
    @media (max-width: ${BREAKPOINT_WIDTH}) {
        padding: 10vh 0 0 0;
    }
`

export const BigTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding: 0 0 1rem 0;
    border-bottom: 1px solid #2F2F2F;
    display: inline-block;
    font-family: 'Klee One', cursive;
    @media (max-width: ${BREAKPOINT_WIDTH}) {
        padding: 0 0 0 0.7rem;
    }
    @media (max-height: ${BREAKPOINT_HEIGHT}) and (max-width: ${BREAKPOINT_WIDTH}) {
        font-size: 2.5rem;
        margin-top: 3rem;
        margin-bottom: 0;
    }
`

export const SmallerTitle = styled.h3`
    margin: 0;
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: 'Klee One', cursive;
    @media (max-width: ${BREAKPOINT_WIDTH}) {
        text-align: center;
    }
`

export const TextContainer = styled.div`
    @media (max-width: ${BREAKPOINT_WIDTH}) {
        display: flex;
        justify-content: center;
        width: 100vw;
    }
    
`

//Navbar

const openMenu = keyframes`
    from {
        transform: translateX(-110vw);
    }

    to {
        transform: translateX(0);
    }
`

const closeMenu = keyframes`
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-110vw);
    }
`

export const HeaderArea = styled.header`
    position: relative;
    z-index: 9999;
`

export const Navbar = styled.div<{menuOpen: boolean; backgroundColor: string; clicked: boolean;}>`
    display: flex;
    width: calc(100vw - 3rem);
    position: absolute;
    z-index: 9999;
    top: 0;
    background-color: ${props => props.backgroundColor};
    padding-left: 3rem;

    @media (max-width: ${BREAKPOINT}) {
        transform: ${props => props.menuOpen ? "translateX(-110vw)": "none"};
        background-color: #242424;
        position: fixed;
        display: block;
        padding: 1rem;
        height: 100vh;
        width: 100%;
        justify-content: space-between;
        animation: ${props => props.clicked ? props.menuOpen ? closeMenu : openMenu : "none"} 1s forwards;
    }
`

export const MobileNavbar = styled.div<{backgroundColor: string}>`
    display: none;

    @media (max-width: ${BREAKPOINT}) {
        display: flex;
        justify-content: space-between;
        width: 100vw;
        position: absolute;
        top: 0;
        background-color: ${props => props.backgroundColor};
    }
`

export const Anchor = styled.a`
    text-decoration: none;
`
export const Hamburger = styled.p<{color: string;}>`
    font-size: 1.3rem;
    padding: 0 1rem 0 1rem;
    margin: auto 0;
    color: ${props => props.color};
`

export const NavLink = styled.p<{textColor: string;}>`
    padding: 0.5rem 1rem;
    color: ${props => props.textColor};
    &:hover {
        text-decoration: underline;
    } 
    @media (max-width: ${BREAKPOINT}) {
        color: #F8F8F8;
    }
`

export const Cross = styled.p<{color: string;}>`
    font-size: 1.5rem;
    display: none;
    padding: 0.5rem 1rem;
    color: ${props => props.color};
    @media (max-width: ${BREAKPOINT}) {
        display: block;
        color: white;
    }
`

export const Logo = styled.img`
    display: block;
    height: 40px;
    padding: 0.7rem 1rem 1rem 1rem;
    @media (max-width: ${BREAKPOINT}) {
        display: none;
    }
    
`
export const MobileLogo = styled.img`
    height: 40px;
    padding: 0.7rem 1rem 1rem 1rem;
`

export const Dummy = styled.div`
    width: 40px;
    padding: 1rem;
`