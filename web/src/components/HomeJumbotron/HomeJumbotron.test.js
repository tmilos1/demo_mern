import { render } from '@redwoodjs/testing'

import HomeJumbotron from './HomeJumbotron'

describe('HomeJumbotron', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeJumbotron />)
    }).not.toThrow()
  })
})
