import { rest } from 'msw'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test'
import Products from '.'

// Mocked product list
const productsMockedData = [
    {
        id: '1',
        name: 'Apples',
        picture: '',
    },
    {
        id: '2',
        name: 'Oranges',
        picture: '',
    },
]

// Simulating api call
const server = setupServer(
    rest.get('http://localhost:8000/products', (req, res, ctx) => {
        return res(ctx.json({ productList: productsMockedData }))
    })
)

// Control server events
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// Then check the page render
it('Should display products names after loader is removed', async () => {
    render(<Products />)

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    expect(screen.getByText('Apples')).toBeInTheDocument()
    expect(screen.getByText('Oranges')).toBeInTheDocument()
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})
