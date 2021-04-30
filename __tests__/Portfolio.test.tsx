import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from '../pages/portfolio'
it('Should render page title', () => {
  render(<Portfolio />)
  expect(screen.getByText('ポートフォリオページ')).toBeInTheDocument()
})
