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

export const Navbar = styled.div<{menuOpen: boolean; backgroundColor: string; clicked: boolean;}>`
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: ${props => props.backgroundColor};
    z-index: 100;
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
    z-index: 100;

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
    padding: 0.2rem 1rem 0 1rem;
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
    padding: 1rem;
    @media (max-width: ${BREAKPOINT}) {
        display: none;
    }
`
export const MobileLogo = styled.img`
    height: 40px;
    padding: 1rem;
`

export const Dummy = styled.div`
    width: 40px;
    padding: 1rem;
`