import styled from 'styled-components'

import lessonTitleImage from './lesson_title.jpg'

const BREAKPOINT = "800px"

export const LessonTitleArea = styled.div`
    min-height: 100vh;
    background-color: #D90D19;
    background: url(${lessonTitleImage}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;

    @media (max-width: ${BREAKPOINT}) {
        background-image: none;
        background-color: #D90D19;
        min-height: 0;
    }
`
export const TitleFlexContainer = styled.div`
    width: 100%;
    display: flex;

    @media (max-width: ${BREAKPOINT}) {
        justify-content: center;
    }
`

export const TitleBox = styled.div`
    margin-left: auto;
    color: #F6F6F6;
    margin-top: 10vh;
    margin-right: 10vw;

    @media (max-width: ${BREAKPOINT}) {
        margin: 3rem 0 0 0;
    }
`

export const InfoBox = styled.div`
    color: #F6F6F6;
    margin-top: 4vh;
    margin-left: 10vw;
    font-size: 1.2rem;
    bottom: 10vh;

    @media (max-width: 900px) {
        margin-left: 5vw;
    }
    @media (max-width: ${BREAKPOINT}) {
        position: static;
        margin: 0;
        padding-bottom: 3rem;
    }
`
export const InfoFlexContainer = styled.div`
    display: flex;

    @media (max-width: ${BREAKPOINT}) {
        justify-content: center;
        margin-top: 2rem;
    }
`

export const BigTitle = styled.h2`
    font-size: 4rem;
    margin-top: 2rem;
    margin-bottom: 0;

    @media (max-width: ${BREAKPOINT}) {
        font-size: 3rem;
    }
`

export const SubTitle = styled.h4`
    font-size: 1rem;
    margin-top: 0;

    @media (max-width: ${BREAKPOINT}) {
        text-align: center;
        font-size: 0.9rem;
    }
`
export const TextBox = styled.div<{ text: string}>`
    position: relative;
    margin: 0 0 2rem 0;

    ::before {
        content: "${props => props.text}";
        position: absolute;
        top: -13px;
        left: -10px;
        background-color: #F6F6F6;
        color: #D90D19;
        padding: 0 0.55rem;
        border-radius: 100px;
    }
`

export const Text = styled.p`
    text-align: center;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 10px;
`