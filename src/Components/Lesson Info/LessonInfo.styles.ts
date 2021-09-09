import styled from 'styled-components'


export const LessonInfoArea = styled.div`
    padding: 2rem 10vw 4rem 10vw;
    background-color: #F8F8F8;
`

export const BigTopText = styled.h2`
    text-align: center;
    font-size: 2.5rem;
`

export const SmallTopText = styled.p<{emphasis: boolean}>`
    text-align: center;
    font-size: 1.1rem;
    color: ${props => props.emphasis ? "#D90D19" : "inherit"};
    font-weight: ${props => props.emphasis ? "600" : "inherit"};
`

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    justify-content: center;
    column-gap: 4rem;
`

export const LeftSide = styled.div`
    flex: 1;
    min-width: 250px;
`

export const RightSide = styled.div`
    flex: 1;
    min-width: 250px;
`

export const TextBox = styled.div`
    padding-bottom: 2rem;
`

export const Title = styled.p`
    font-weight: 600;
`

export const Text = styled.p<{ fontWeight?: string; color?: string;}>`
    margin: 0;
`

export const Map = styled.iframe`
    min-width: 100%;
    height: 15rem;
    border: none;
    @media (max-width: 350px) {
        width: 15rem;
    }
`