import React from 'react'
import emailjs from 'emailjs-com';

//Styles
import { Title, SubTitle } from '../../App.styles'
import { ContactArea, BigText, Text, FlexContainer, Form, Input, Label, TextArea, InputArea, Button } from './Contact.styles'

const Contact = () => {

    function sendEmail(e: any) {
        e.preventDefault();
    
        emailjs.sendForm('service_oecmsbq', 'template_42ikxuj', e.target, 'user_9EtEh0xOJ964JtXdN23UQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
      }

    return(
        <ContactArea>
            <Title color="#2F2F2F">お問い合わせ</Title>
            <SubTitle color="#2F2F2F">Contact</SubTitle>

            <BigText>連絡先</BigText>
            <Text>電話 : 080 5349 6075</Text>
            <Text>メール：sari.kiku.emiri@gmail.com</Text>
            <br />
            <BigText>連絡フォーム</BigText>
            <Form className="contact-form" onSubmit={sendEmail}>
                
                <FlexContainer>
                    <Input type="hidden" name="contact_number" />

                    <InputArea>
                    <Label>お名前</Label>
                    <Input type="text" name="user_name" />
                    </InputArea>

                    <InputArea>
                    <Label>メールアドレス</Label>
                    <Input type="email" name="user_email" />
                    </InputArea>
                </FlexContainer>

                <InputArea>
                    <Label>お問い合わせ内容</Label>
                    <TextArea name="message" />
                </InputArea>
                
                <Button type="submit" value="送信" />
            </Form>
        </ContactArea>
        
    )
}

export default Contact