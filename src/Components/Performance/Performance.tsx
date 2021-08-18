import React, { useState, useEffect, useRef } from 'react'

//Styles
import { Title, SubTitle, FadeInSection  } from '../../App.styles'
import { PerformanceArea, FlexContainer, TextBox, Text, Button, Anchor } from './Performance.styles'

const Performance = () => {

    const [onScreen, setOnScreen] = useState(false)
    const fadeInElement = useRef() as React.MutableRefObject<HTMLInputElement>

    useEffect(() => {

        const { current } = fadeInElement

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setOnScreen(entry.isIntersecting))
        }, options)

        if (!onScreen) {
            observer.observe(current)
        }

        return () => {
            observer.unobserve(current)
        }
        
    }, [onScreen])

    return(
        <PerformanceArea id="performance">
            <FadeInSection ref={fadeInElement} onScreen={onScreen}>
                <Title color="inherit">演奏依頼</Title>
                <SubTitle color="inherit">Performance</SubTitle>
                <FlexContainer>
                    <TextBox>
                        <Text>
                            パーティーでのアトラクションやBGM、伝統楽器である三味線・箏の演奏依頼を承っております。インスタグラムでもDM、又は本ページのお問い合わせフォームよりお問い合わせください。
                        </Text>
                    </TextBox>
                    <Anchor href="#contact"><Button color="#F8F8F8">お問い合わせフォームへ</Button></Anchor>
                </FlexContainer>
            </FadeInSection>
        </PerformanceArea>
    )
}

export default Performance