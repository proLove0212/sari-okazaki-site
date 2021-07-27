import React from 'react'

//Styles
import { Title, SubTitle  } from '../../App.styles'
import { PerformanceArea, TextBox, Text, Button } from './Performance.styles'

const Performance = () => {
    return(
        <PerformanceArea id="performance">
            <Title color="inherit">演奏依頼</Title>
            <SubTitle color="inherit">Performance</SubTitle>
            <TextBox>
                <Text>
                    パーティーでのアトラクションやBGM、伝統楽器である三味線・箏の演奏依頼を承っております。インスタグラムでもDM、又は本ページのお問い合わせフォームよりお問い合わせください。
                </Text>
            </TextBox>
            <Button color="#F8F8F8">お問い合わせフォームへ</Button>
        </PerformanceArea>
    )
}

export default Performance