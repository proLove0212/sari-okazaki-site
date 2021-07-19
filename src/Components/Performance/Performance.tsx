import React from 'react'

import image1 from "./performance1.jpg"
import image2 from './performance2.jpg'

//Styles
import { Title, SubTitle } from '../../App.styles'
import { PerformanceArea, TextBox, Text, FlexContainer, Image } from './Performance.styles'

const Performance = () => {
    return(
        <PerformanceArea>
            <Title color="inherit">演奏依頼</Title>
            <SubTitle color="inherit">Performance</SubTitle>
            <TextBox>
                <Text>
                    パーティーでのアトラクションやBGM、伝統楽器である三味線・箏の演奏依頼を承っております。インスタグラムでもDM、又は本ページのお問い合わせフォームよりお問い合わせください。
                </Text>
            </TextBox>
            <FlexContainer>
                <Image src={image1} alt="Concert"></Image>
                <Image src={image2} alt="Concert"></Image>
            </FlexContainer>
        </PerformanceArea>
    )
}

export default Performance