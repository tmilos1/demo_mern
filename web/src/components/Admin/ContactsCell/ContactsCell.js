import { Link, routes } from '@redwoodjs/router'

import Contacts from 'src/components/Admin/Contacts'

export const QUERY = gql`
  query CONTACTS {
    contacts {
      id
      name
      email
      message
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No contacts yet. '}
      <Link to={routes.adminNewContact()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ contacts }) => {
  return <Contacts contacts={contacts} />
}
