import styled from 'styled-components'

export const ProfileArea = styled.div`
    padding: 2rem 10vw;
    background-color: #F8F8F8;
    
    @media(max-width: 500px) {
        padding: 2rem 3vw;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 4rem 2rem;
    column-gap: 5rem;
    row-gap: 2rem;
    
`

export const ProfilePicture = styled.img`
    flex: 1;
    min-width: 200px;
    border-radius: 15px;
    object-fit: cover;
`

export const TextArea = styled.div`
    flex: 2;
    min-width: 15rem;

`

export const TextBox = styled.div`

`

export const BiggerText = styled.p<{topMargin: boolean}>`
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: ${props => props.topMargin ? "auto" : "0"}
`

export const Text = styled.p`
    
`

export const HorizontalRule = styled.hr`
    border: none;
    margin: 2rem 0;
    height: 1px;
    background-color: #646363;
`