import React from 'react'

//Styles
import { LessonTitleArea } from './LessonTitle.style'
import { TitleBox, InfoBox, BigTitle, SubTitle, TitleFlexContainer, InfoFlexContainer, Text, TextBox } from './LessonTitle.style'

const LessonTitle = () => {
    return(
        <LessonTitleArea id="lesson-title">
            <TitleFlexContainer>
                <TitleBox>
                    <BigTitle>三味線教室</BigTitle>
                    <SubTitle>Shamisen Lessons</SubTitle>
                </TitleBox>
            </TitleFlexContainer>

            <InfoFlexContainer>
                <InfoBox>
                    <TextBox text="1">
                        <Text>楽器がなくても大丈夫</Text>
                    </TextBox>

                    <TextBox text="2">
                        <Text>椅子でのお稽古も可</Text>
                    </TextBox>

                    <TextBox text="3">
                        <Text>まずは無料体験お稽古に</Text>
                    </TextBox>

                    <TextBox text="4">
                        <Text>三味線・箏</Text>
                    </TextBox>
                </InfoBox>
            </InfoFlexContainer>
            
            
        </LessonTitleArea>
    )
}

export default LessonTitle