import Card from '.'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
    test('Should render title and image inside the card', async () => {
        render(
            <ThemeProvider>
                <Card
                    title='Fresh title'
                    picture='/picture.png'
                />
            </ThemeProvider>
        )
        const cardPicture = screen.getByRole('img')
        // case-insensitive search
        const cardTitle = screen.getByText(/Fresh title/i)

        expect(cardPicture.src).toBe('http://localhost/picture.png')
        expect(cardTitle.textContent).toBe('Fresh title')
    })
})
