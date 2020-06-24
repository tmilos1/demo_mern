import BlogLayout from 'src/layouts/BlogLayout'
import {Form, Label, TextField, TextAreaField, FieldError, Submit as button, useMutation} from '@redwoodjs/web'
import Button from 'react-bootstrap/Button';

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }

`

const ContactPage = () => {

  const [create] = useMutation(CREATE_CONTACT)

  const onSubmit = (data) => {
    create({variables: {input: data}})
    console.log(data);
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit}>
        <Label errorClassName="error" name="name" />
        <TextField name="name" validation={{required: true}} errorClassName="error"/>
        <FieldError name="name" />

        <Label errorClassName="error" name="email" />
        <TextField name="email" validation={{required: true}} errorClassName="error"/>
        <FieldError name="email" />

        <Label errorClassName="error" name="message" />
        <TextAreaField name="message" validation={{required: true}} errorClassName="error"/>
        <br />
        <FieldError name="message" />

        <br />
        <br />
        <button type="submit" className="btn btn-dark">Save</button>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
