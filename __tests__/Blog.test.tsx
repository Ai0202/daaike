import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from '../pages/blog'
it('Should render page title', () => {
  render(<Blog />)
  expect(screen.getByText('ブログページ')).toBeInTheDocument()
})
