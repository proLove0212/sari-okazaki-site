import styled from 'styled-components'

export const Title = styled.h2<{color: string;}>`
    margin: 0;
    padding-top: 2rem;
    text-align: center;
    font-size: 2rem;
    color: ${props => props.color};
`

export const SubTitle = styled.h4<{color: string;}>`
    margin: 0;
    text-align: center;
    color: ${props => props.color};
`