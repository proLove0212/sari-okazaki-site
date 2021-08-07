import styled, { keyframes } from 'styled-components'

const BREAKPOINT = "700px"

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
const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`

export const HeaderArea = styled.header<{onHomeScreen: boolean; scrolled: boolean;}>`
    animation: ${props => !props.scrolled ? "none" : props.onHomeScreen ? fadeOut : fadeIn } 0.3s forwards;
    opacity: 0;
    position: relative;
    z-index: 9999;
`

export const Navbar = styled.div<{menuOpen: boolean; backgroundColor: string; clicked: boolean;}>`
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
    background-color: ${props => props.backgroundColor};
    padding-left: 3rem;

    @media (max-width: ${BREAKPOINT}) {
        transform: ${props => props.menuOpen ? "translateX(-110vw)": "none"};
        display: block;
        padding: 1rem;
        height: 100vh;
        justify-content: space-between;
        animation: ${props => props.clicked ? props.menuOpen ? closeMenu : openMenu : "none"} 1s forwards;
    }
`

export const MobileNavbar = styled.div<{backgroundColor: string}>`
    display: none;

    @media (max-width: ${BREAKPOINT}) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: fixed;
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
`

export const Cross = styled.p<{color: string;}>`
    font-size: 1.5rem;
    color: #F8F8F8;
    display: none;
    padding: 0.5rem 1rem;
    color: ${props => props.color};
    @media (max-width: ${BREAKPOINT}) {
        display: block;
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