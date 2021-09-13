import React, { useState, useRef, useEffect } from 'react'

import profile from './profile.jpg'

//Styles
import { ProfileArea, FlexContainer, ProfilePicture, TextArea, TextBox, Text, BiggerText, InfoTextBox, ListItem, SubText, HorizontalRule, Ul } from './Profile.styles'
import { Title, SubTitle, FadeInSection } from '../../App.styles'

const Profile = () => {

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
        <ProfileArea id="profile">
            <FadeInSection ref={fadeInElement} atScreen={atScreen}>
                <Title color="#242424">プロフィール</Title>
                <SubTitle color="#242424">Profile</SubTitle>
            
                <FlexContainer>
                    <ProfilePicture src={profile}></ProfilePicture>
                    <TextArea>
                        <InfoTextBox>
                            <BiggerText topMargin={false}>岡崎紗璃</BiggerText>
                            <SubText>(おかざきさり)</SubText>
                            <BiggerText topMargin={true}>清元延菊笑璃</BiggerText>
                            <SubText>(きよもとのぶきくえみり)</SubText>
                            <HorizontalRule></HorizontalRule>
                            <Ul>
                                <ListItem>出身地：大阪</ListItem>
                                <ListItem>2019年度　大阪音楽大学音楽学部音楽学科声楽専攻　卒業</ListItem>
                                <ListItem>笑(Emi)三味線教室主宰</ListItem>
                            </Ul>
                        </InfoTextBox>
                        <TextBox>
                            <Text>14歳より清元 延菊笑師、清元菊輔師の両氏に師事し、20歳で清元の師範免許を取得する。清元 延菊笑璃として、舞踊会の地方、祇園踊り、北野踊りの三味線方として活動する。NHKラジオ放送「邦楽のひととき」等にも出演し、活動の幅を広げる。</Text>
                            <Text>日本古来の伝統楽器である三味線の音色を、古典の楽曲に限らず、JazzやPops等の現代楽曲にも取り入れた演奏活動と共に、後進の指導にも力を入れている。</Text>
                            <Text>清元や長唄等の江戸の音曲と、地歌等の上方の音曲を両方を学んだことにより、幅広い邦楽の世界を醸し出す演奏家として活躍中。</Text>
                        </TextBox>
                    </TextArea>
                </FlexContainer>
            </FadeInSection>
        </ProfileArea>
    )
}

export default Profile