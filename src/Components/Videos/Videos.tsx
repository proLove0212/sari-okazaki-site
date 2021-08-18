import React, { useState, useEffect, useRef } from 'react'

//Styled
import { Title, SubTitle, FadeInSection } from '../../App.styles'
import { VideoArea, FlexContainer, Video } from './Video.styles'

const Videos = () => {

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
        <VideoArea id="videos">
            <FadeInSection ref={fadeInElement} onScreen={onScreen}>
                <Title color="#2F2F2F">関連動画</Title>
                <SubTitle color="#2F2F2F">Video</SubTitle>
                <FlexContainer>
                    {/*<Video width="560" height="315" src="https://www.youtube.com/embed/9yszjIoIAyU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>*/}
                    <Video width="560" height="315" src="https://www.youtube.com/embed/iWhA8UcEQ7Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
                    <Video width="560" height="315" src="https://www.youtube.com/embed/OxLiPuR_wDQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
                </FlexContainer>
            </FadeInSection>
            
        </VideoArea>
    )
}

export default Videos