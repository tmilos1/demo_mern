import { render } from '@redwoodjs/testing'

import MainNavbar from './MainNavbar'

describe('MainNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainNavbar />)
    }).not.toThrow()
  })
})
