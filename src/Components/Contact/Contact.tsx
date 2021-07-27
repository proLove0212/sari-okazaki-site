import React from 'react'
import emailjs from 'emailjs-com';

//Styles
import { Title, SubTitle } from '../../App.styles'
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

    return(
        <ContactArea id="contact">
            <Title color="#F8F8F8">お問い合わせ</Title>
            <SubTitle color="#F8F8F8">Contact</SubTitle>

            <BigText paddingLeft="2rem">連絡先</BigText>
            <Text>電話 : 080 5349 6075</Text>
            <Text>メール：sari.kiku.emiri@gmail.com</Text>

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

                    <Button color="#F8F8F8" type="submit" value="送信" />
                </Form>
            </FormArea>
        </ContactArea>
        
    )
}

export default Contact