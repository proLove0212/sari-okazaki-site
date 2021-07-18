import styled from 'styled-components'

import welcomeImage from './welcome.jpg'
import welcomeImageMobile from './welcome_mobile3.jpg'

const BREAKPOINT_WIDTH = "400px"
const BREAKPOINT_HEIGHT = "700px"

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
        justify-content: center;
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
    @media (max-width: ${BREAKPOINT_WIDTH}) {
        padding: 0 0 0 0.7rem;
    }
    @media (max-height: ${BREAKPOINT_HEIGHT}) and (max-width: ${BREAKPOINT_WIDTH}) {
        font-size: 2rem;
        margin-top: 3rem;
        margin-bottom: 0;
    }
`

export const SmallerTitle = styled.h3`
    margin: 0;
    font-weight: lighter;
    font-size: 1.5rem;
    @media (max-width: ${BREAKPOINT_WIDTH}) {
        text-align: center;
    }
`