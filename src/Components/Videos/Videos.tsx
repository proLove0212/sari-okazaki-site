import React, { useState, useEffect, useRef } from 'react'

//Styled
import { Title, SubTitle, FadeInSection } from '../../App.styles'
import { VideoArea, FlexContainer, Video } from './Video.styles'

const Videos = () => {

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
        <VideoArea id="videos">
            <FadeInSection ref={fadeInElement} atScreen={atScreen}>
                <Title color="#242424">関連動画</Title>
                <SubTitle color="#242424">Video</SubTitle>
                <FlexContainer>
                    {/*<Video width="560" height="315" src="https://www.youtube.com/embed/9yszjIoIAyU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>*/}
                    <Video loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/iWhA8UcEQ7Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
                    <Video loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/OxLiPuR_wDQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
                </FlexContainer>
            </FadeInSection>
            
        </VideoArea>
    )
}

export default Videos