import React from 'react'

//Styled
import { Title, SubTitle } from '../../App.styles'
import { VideoArea, FlexContainer, Video } from './Video.styles'

const Videos = () => {
    return(
        <VideoArea>
            <Title color="#F8F8F8">関連動画</Title>
            <SubTitle color="#F8F8F8">Video</SubTitle>
            <FlexContainer>
                {/*<Video width="560" height="315" src="https://www.youtube.com/embed/9yszjIoIAyU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>*/}
                <Video width="560" height="315" src="https://www.youtube.com/embed/iWhA8UcEQ7Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
                <Video width="560" height="315" src="https://www.youtube.com/embed/OxLiPuR_wDQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
            </FlexContainer>
            
        </VideoArea>
    )
}

export default Videos