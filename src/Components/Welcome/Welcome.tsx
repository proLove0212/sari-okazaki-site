import React from 'react'

//Styles
import { WelcomeArea } from './Welcome.styles'
import { TextBox, BigTitle, SmallerTitle } from './Welcome.styles'

const Welcome = () => {
    return(
        <WelcomeArea>
            <TextBox>
                <BigTitle>岡崎さり</BigTitle>
                <SmallerTitle>三味線・箏</SmallerTitle>
            </TextBox>
        </WelcomeArea>
    )
}

export default Welcome