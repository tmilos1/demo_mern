import Form from 'react-bootstrap/Form'

const FormField = (props) => {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} name={props.name} ref={props.registerFunc({ required: props.required })}
        isInvalid={!!props.errors[props.name]} />

        {props.required && props.errors[props.name] && (
          <Form.Control.Feedback type="invalid">
          {props.label} is required.
          </Form.Control.Feedback>
        )}
    </Form.Group>
  )
}

export default FormField
