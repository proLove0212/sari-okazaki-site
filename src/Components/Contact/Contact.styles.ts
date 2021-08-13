import styled from 'styled-components'

import { zoomIn, zoomOut } from '../../App.styles'

const BREAKPOINT = "400px"

export const ContactArea = styled.div`
    padding: 3rem 10vw 1rem 10vw;
    background-color: #242424;
    color: #F8F8F8;
`

export const BigText = styled.p<{ paddingLeft: string; }>`
    padding-left: ${props => props.paddingLeft};
    font-size: 2rem;
    font-weight: 600;

    @media (max-width: ${BREAKPOINT}) {
        padding-left: 0;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
`

export const Text = styled.p`
    padding-left: 2rem;
    font-size: 1.1rem;

    @media (max-width: ${BREAKPOINT}) {
        padding-left: 0;
    }
`

export const FormArea = styled.div`
    border: solid 1px;
    padding: 0 2rem 2rem 2rem;
    margin: 4rem 0;
    border-radius: 15px;
`

export const Form = styled.form`
    
`

export const Input = styled.input`
    display: block;
    height: 2rem;
    width: calc(100% - 2rem);
    background-color: #F8F8F8;
    border: none;
    margin-top: 0.5rem;
    border-radius: 15px;
    padding: 0 1rem;
`

export const InputArea = styled.div`
    flex: 1;
    padding: 1rem 0;
    min-width: 12rem;
`

export const Button = styled.input<{ color: string; }>`
    all: initial;
    font-family: inherit;
    width: calc(100% - 1em);
    max-width: 15rem;
    text-align: center;
    color: ${props => props.color};
    border: solid 1px;
    margin-top: 1rem;
    padding: 0.5em;
    border-radius: 15px;
    animation: ${zoomOut} 0.3s forwards;
    &:hover {
        animation: ${zoomIn} 0.3s forwards;
        cursor: pointer;
    }
`

export const Label = styled.label`

`

export const TextArea = styled.textarea`
    display: block;
    width: calc(100% - 2rem);
    height: 5rem;
    margin-top: 0.5rem;
    border-radius: 15px;
    padding: 1rem;
`
