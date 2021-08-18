import styled from 'styled-components'

import performanceImage from './performance.jpg'

import { zoomIn, zoomOut } from '../../App.styles'

export const PerformanceArea = styled.div`
    background: url(${performanceImage}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding: 4rem 10vw 8rem 10vw;
    color: #F8F8F8;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TextBox = styled.div`
    text-align: center;
    padding: 2rem 0;
`

export const Text = styled.p`

`

export const Button = styled.button<{ color?: string; backgroundColor?: string;}>`
    all: initial;
    font-family: inherit;
    color: ${props => props.color};
    border: solid 1px;
    padding: 1em;
    border-radius: 15px;
    animation: ${zoomOut} 0.3s forwards;
    &:hover {
        animation: ${zoomIn} 0.3s forwards;
        cursor: pointer;
    }
    
`

export const Anchor = styled.a`
    all: unset;
`