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

export const InfoTextBox = styled.div`
    color: #242424;
    margin-bottom: 2rem;
    padding: 1rem 1rem 1rem 0;

`


export const BiggerText = styled.p<{topMargin: boolean}>`
    font-size: 2rem;
    font-weight: 500;
    margin-top: ${props => props.topMargin ? "auto" : "0"};
    margin-bottom: 0;
`

export const Text = styled.p`
    color: #242424;
`

export const Ul = styled.ul`
    padding-left: 0;
`

export const ListItem = styled.li`
    list-style-type: none;
    margin-bottom: 0.5rem;
    font-weight: bolder;
`

export const SubText = styled.p`
    margin-top: 0;
    font-size: 0.8rem;
`

export const HorizontalRule = styled.hr`
    border: 0;
    height: 1px;
    background-color: #242424;
    width: 80%;
    margin: 1rem;
`