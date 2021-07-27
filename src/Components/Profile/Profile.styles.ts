import styled from 'styled-components'

export const ProfileArea = styled.div`
    padding: 2rem 10vw;
    background-color: #242424;
    
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

export const InfoTextBox = styled.div`
    color: #F8F8F8;
    margin-bottom: 2rem;
    border: solid 1px #F8F8F8;
    padding: 1rem;
    border-radius: 15px;
`


export const BiggerText = styled.p<{topMargin: boolean}>`
    font-size: 2rem;
    font-weight: 500;
    margin-top: ${props => props.topMargin ? "auto" : "0"};
    margin-bottom: 0;
    margin-left: 1rem;
`

export const Text = styled.p`
    color: #F8F8F8;
`

export const ListItem = styled.li`

`

export const SubText = styled.p`
    margin-top: 0;
    font-size: 0.8rem;
    margin-left: 1rem;
`

export const HorizontalRule = styled.hr`
    border: 0;
    height: 1px;
    background-color: #F8F8F8;
    width: 80%;
    margin: 1rem;
`