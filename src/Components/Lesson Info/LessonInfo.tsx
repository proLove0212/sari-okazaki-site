import React from 'react'

//Styles

import { LessonInfoArea, BigTopText, SmallTopText, FlexContainer, LeftSide, RightSide, TextBox, Title, Text } from './LessonInfo.styles'

const LessonInfo = () => {
    return(
        <LessonInfoArea>
            <BigTopText>幸せ、笑顔あふれる楽しい教室</BigTopText>
            <SmallTopText>三味線の粋な世界に触れてみませんか? 『笑三味線教室」では、初心者から専門的に習いたい方まで対応しております。 古典的な奏法の基礎をベースに幅広い邦楽曲の演奏ができるようにレッスンします。</SmallTopText>

            <FlexContainer>
                <LeftSide>
                    <TextBox>
                        <Title>お稽古日 / 時間</Title>
                        <Text>水曜日16時〜　木曜日16時〜　土・日曜日13時〜</Text>
                        <Text>その他の日時は応相談</Text>
                    </TextBox>
                </LeftSide>
                <RightSide>

                </RightSide>
            </FlexContainer>
        </LessonInfoArea>
    )
}

export default LessonInfo