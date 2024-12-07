import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Main } from './index'

describe('Main component', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /oi/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
