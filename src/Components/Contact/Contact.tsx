import React, { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com';

//Styles
import { Title, SubTitle, FadeInSection } from '../../App.styles'
import { ContactArea, BigText, Text, FlexContainer, Form, FormArea, Input, Label, TextArea, InputArea, Button } from './Contact.styles'


const Contact = () => {

    function sendEmail(e: any) {
        e.preventDefault();
    
        emailjs.sendForm('service_oecmsbq', 'template_42ikxuj', e.target, 'user_9EtEh0xOJ964JtXdN23UQ')
          .then((result) => {
              alert("メッセージは送信されました。")
              console.log(result.text)
          }, (error) => {
              alert("エラーが発生しました。 " + error.text)
              console.log(error.text)
          })
    }

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
        <ContactArea id="contact">
            <FadeInSection ref={fadeInElement} atScreen={atScreen}>
                <Title color="#242424">お問い合わせ</Title>
                <SubTitle color="#242424">Contact</SubTitle>
            
                <BigText paddingLeft="2rem">連絡先</BigText>
                <Text><b>電話 :</b> 080 5349 6075</Text>
                <p><b>メール：</b> sari.kiku.emiri@gmail.com</p>

                <FormArea>
                    <BigText paddingLeft="0">連絡フォーム</BigText>
                    <Form className="contact-form" onSubmit={sendEmail}>

                        <FlexContainer>
                            <Input type="hidden" name="contact_number" />

                            <InputArea>
                            <Label>お名前</Label>
                            <Input type="text" name="user_name" required />
                            </InputArea>

                            <InputArea>
                            <Label>メールアドレス</Label>
                            <Input type="email" name="user_email" required/>
                            </InputArea>
                        </FlexContainer>

                        <InputArea>
                            <Label>お問い合わせ内容</Label>
                            <TextArea name="message" required />
                        </InputArea>

                        <Button color="#242424" type="submit" value="送信" />
                    </Form>
                </FormArea>
            </FadeInSection>
        </ContactArea>
        
    )
}

export default Contact