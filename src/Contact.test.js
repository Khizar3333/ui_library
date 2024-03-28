import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from './components/Contact'

describe('Contact component', () => {
  it('renders the contact form with labels and inputs', () => {
    render(<Contact />)

    // Name input
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('type', 'text')

    // Email input
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email')

    // Message textarea
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('renders the submit button', () => {
    render(<Contact />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent(/submit/i)
  })

  // Write more tests to target specific functionalities

})
