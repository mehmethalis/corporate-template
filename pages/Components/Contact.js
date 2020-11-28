import { Grid, Row, Col,Form, FormGroup, FormControl,Schema, ControlLabel, HelpBlock ,Button,ButtonToolbar} from 'rsuite';
import { Image } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';

const Contact=()=>{
    const [formValue, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(formValue.name ==='' || formValue.email ==='' || formValue.phone ==='' || formValue.message ===''){
            console.log(' form can not send ');
        }else{

            const data = {
                service_id: process.env.EMAIL_SERVICE_ID,
                template_id: process.env.EMAIL_TEMPLATE_ID_ID,
                user_id: process.env.EMAIL_USER_ID_ID,
                template_params: {
                    'name': `${formValue.name}`,
                    'email': `${formValue.email}`,
                    'phone':`${formValue.phone}`,
                    'message':`${formValue.message}`
                }
            };
            axios.post('https://api.emailjs.com/api/v1.0/email/send', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json'
            })
                .then(function (response) {
                    console.log(response);
                    setValue({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    })
                })
                .catch(function (error) {
                    console.log(error);

                });

        }

    }

    const { StringType, NumberType } = Schema.Types;

    const model = Schema.Model({

        name: StringType()
            .isRequired('Bu alan gerekli.'),
        email: StringType()
            .isEmail('Lütfen geçerli bir email adresi girin.')
            .isRequired('Bu alan gerekli.'),
        phone:NumberType()
            .isRequired('Bu alan gerekli.'),
        message:StringType()
            .isRequired('Bu alan gerekli.')
    });


    return(
        <Grid id='contact' fluid className="grid-contact">
            <h2>İletişim</h2>
            <Row className="show-grid">
                <Col className="contact-img" xs={24} md={12}>
                    <Image
                        src="/contact.png"
                    />
                </Col>
                <Col className="contact-form" xs={24} md={12}>
                    <Form fluid model={model}
                          id={'contact'}
                          onChange={formValue => {
                              setValue(formValue);
                          }}
                          formValue={formValue}

                    >
                        <FormGroup>
                            <ControlLabel>Adınız ve Soyadınız</ControlLabel>
                            <FormControl  name="name" />
                            <HelpBlock>Gerekli</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>E-Posta</ControlLabel>
                            <FormControl name="email" type="email" />
                            <HelpBlock>Gerekli</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Telefon</ControlLabel>
                            <FormControl name="phone" type="tel" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Mesajınız</ControlLabel>
                            <FormControl rows={5} name="message" componentClass="textarea" />
                            <HelpBlock>Gerekli</HelpBlock>

                        </FormGroup>
                        <FormGroup className='submit'>
                            <ButtonToolbar>
                                <Button onClick={handleSubmit} className='send-button' appearance="ghost">Gönder <i className="far fa-paper-plane"/></Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Grid>
    )
}

export default Contact;