import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CONTACT_MUTATION = gql`
  mutation DeleteContactMutation($id: Int!) {
    deleteContact(id: $id) {
      id
    }
  }
`

const Contact = ({ contact }) => {
  const { addMessage } = useFlash()
  const [deleteContact] = useMutation(DELETE_CONTACT_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminContacts())
      addMessage('Contact deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete contact ' + id + '?')) {
      deleteContact({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Contact {contact.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{contact.id}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{contact.name}</td>
            </tr>
            <tr>
              <th>email</th>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <th>message</th>
              <td>{contact.message}</td>
            </tr>
            <tr>
              <th>createdAt</th>
              <td>{contact.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditContact({ id: contact.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(contact.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Contact
