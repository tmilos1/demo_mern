import { useState } from 'react'

import BlogLayout from 'src/layouts/BlogLayout'
import { useMutation } from '@redwoodjs/web'
import { useForm } from "react-hook-form"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'

import FormField from 'src/components/FormField'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }

`

const ContactPage = () => {

  const [create] = useMutation(CREATE_CONTACT)
  const [isSent, setSent] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    setSent(true)
  }

  return (
    <BlogLayout>
      <Row>
        <Col md={6}>
          <Card style={{ "marginTop": "50px" }}>
            <Card.Header>
              <h1>Contact Us</h1>
              <p>
                Enter your details to receive callback from us
              </p>
            </Card.Header>
            <Card.Body>
              {isSent ?
                (
                  <>
                    <p>
                    We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
                    </p>
                    <p>
                    Have a great day!
                    </p>
                  </>
                )
              : (
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormField type="text" name="name" label="Name" required="true" registerFunc={register} errors={errors} />
                    <FormField type="email" name="email" label="Email" required="true" registerFunc={register} errors={errors} />

                    <Form.Group>
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows="3" name="message" ref={register({ required: true })}
                        isInvalid={!!errors.message} />

                      {errors.message && (
                        <Form.Control.Feedback type="invalid">
                          Message is required.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <br />
                    <br />
                    <FormGroup>
                      <button type="submit" className="btn btn-dark">Save</button>
                    </FormGroup>

                  </Form>
                )
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </BlogLayout>
  )
}

export default ContactPage
