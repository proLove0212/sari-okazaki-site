import React, { useState, useEffect, useRef } from 'react'

//Styles
import { FadeInSection } from '../../App.styles'
import { LessonTitleArea, TitleBox, InfoBox, BigTitle, SubTitle, TitleFlexContainer, InfoFlexContainer, Text, TextBox } from './LessonTitle.style'

const LessonTitle = () => {

    const [atScreen, setAtScreen] = useState(false)
    const fadeInElement = useRef() as React.MutableRefObject<HTMLInputElement>

    useEffect(() => {

        const { current } = fadeInElement

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setAtScreen(entry.isIntersecting))
        }, options)

        if (!atScreen) {
            observer.observe(current)
        }

        return () => {
            observer.unobserve(current)
        }
        
    }, [atScreen])

    return(
        <LessonTitleArea id="lesson-title">
            <FadeInSection ref={fadeInElement} atScreen={atScreen}>
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
            </FadeInSection>
            
            
        </LessonTitleArea>
    )
}

export default LessonTitle