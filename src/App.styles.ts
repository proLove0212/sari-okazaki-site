import styled, { keyframes } from 'styled-components'

export const Title = styled.h2<{color: string;}>`
    margin: 0;
    padding-top: 2rem;
    text-align: center;
    font-size: 3rem;
    color: ${props => props.color};
`

export const SubTitle = styled.h4<{color: string;}>`
    font-size: 1rem;
    margin: 0;
    text-align: center;
    color: ${props => props.color};
`

export const zoomIn = keyframes`

    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }

`

export const zoomOut = keyframes`

    from {
        transform: scale(1.1);
    }

    to {
        transform: scale(1);
    }
`