import React, { useState, useRef, useEffect } from 'react'

import profile from './profile.jpg'

//Styles
import { ProfileArea, FlexContainer, ProfilePicture, TextArea, TextBox, Text, BiggerText, InfoTextBox, SubText } from './Profile.styles'
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
                        </InfoTextBox>
                        <TextBox>
                            <Text>1990年１２月２６日生まれ。大阪出身。大阪音楽大学邦楽専攻を卒業。</Text>
                            <Text>14歳より清元延菊笑、清元菊輔の両氏に師事し、２０歳で清元の師範免許を取得する。清元延菊笑璃として＜舞踊会の地方、祇園踊りの三味線方として活動する。NHKラジオ放送『邦楽のひととき』にも出演し、活動の幅を広げる。</Text>
                            <Text>日本古来の伝統楽器である三味線の音色を、古典の楽曲に限らずシャンソンやPops等の現代楽曲を取り入れた演奏活動も行っている。現在は、後進の指導にも力を入れている。</Text>
                            <Text>清元や長唄等の江戸の音曲と、地歌等の上方の音曲を両方学ぶことにより、幅広い邦楽の世界を醸し出す演奏家として活躍中。</Text>
                        </TextBox>
                    </TextArea>
                </FlexContainer>
            </FadeInSection>
        </ProfileArea>
    )
}

export default Profile