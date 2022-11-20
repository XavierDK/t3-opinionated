import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Button />)
    expect(screen.getByTestId('content')).toBeInTheDocument()
    expect(screen.getByTestId('content')).toHaveTextContent('Button')
  })
})
