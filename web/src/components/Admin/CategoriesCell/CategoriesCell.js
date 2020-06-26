import { Link, routes } from '@redwoodjs/router'

import Categories from 'src/components/Admin/Categories'

export const QUERY = gql`
  query CATEGORIES {
    categories {
      id
      name
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
      {'No categories yet. '}
      <Link to={routes.adminNewCategory()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ categories }) => {
  return <Categories categories={categories} />
}
