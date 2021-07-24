import styled, { keyframes } from "styled-components"


const fadeIn = keyframes`
    from  {
        opacity: 0;
        transform: scale(0.9)
    }

    to {
        opacity: 1;
        transform: scale(1)
    }
`

export const BigPictureArea = styled.div`
    background-color: black;
    position: relative;
    
`

export const CarouselArea = styled.div<{currentImage: string; animationOn: boolean;}>`
    min-height: 100vh;
    background: url(${props => props.currentImage}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    animation: ${props => props.animationOn ? fadeIn : 'none'} 1s forwards;
`
const zoomIn = keyframes`

    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }

`

const zoomOut = keyframes`

    from {
        transform: scale(1.1);
    }

    to {
        transform: scale(1);
    }
`


export const LeftArrow = styled.div`
    font-size: 3rem;
    position: absolute;
    top: 50%;
    background-color: #F8F8F8;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    opacity: 0.8;
    animation: ${zoomOut} 0.3s forwards;
    &:hover {
        cursor: pointer;
        animation: ${zoomIn} 0.3s forwards;
    }
`

export const RightArrow = styled.div`
    font-size: 3rem;
    position: absolute;
    top: 50%;
    right: 0%;
    background-color: #F8F8F8;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    opacity: 0.8;
    animation: ${zoomOut} 0.3s forwards;
    &:hover {
        cursor: pointer;
        animation: ${zoomIn} 0.3s forwards;
    }
`