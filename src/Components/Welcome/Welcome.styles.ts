import styled from 'styled-components'

import welcomeImage from './welcome.jpg'

export const WelcomeArea = styled.div`
    min-height: 100vh;
    background: url(${welcomeImage}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`