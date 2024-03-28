import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from './components/Hero'
import Button from './components/Button' // Assuming Button component is tested separately

describe('Hero component', () => {
  it('renders the title and description text', () => {
    render(<Hero />)

    // Title
    expect(screen.getByText(/welcome to the linkedin group for develop/i)).toBeInTheDocument()

    // Description
    expect(screen.getByText(/lorem ipsum dolor sit amet consectetur adipisicing elit/i)).toBeInTheDocument()
  })

  it('renders the Button component with correct text', () => {
    render(<Hero />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent(/read more/i)
  })

  // Consider adding a test for image rendering if functionality is relevant
})
