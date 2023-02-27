import Footer from '.'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
  it('Should render and change theme from light to dark mode', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Change light mode: ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Change light mode: 🌙')
  })
})
