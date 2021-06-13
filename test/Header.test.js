import { render, screen, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import Vuetify from 'vuetify'
import Header from '@/components/Header'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

describe('Tests the Header view is rendered correctly on large screens', () => {
  it('Renders the Header and checks against a snapshot', async () => {
    const { asFragment } = await render(Header, options)
    expect(asFragment).toMatchSnapshot()
  })
  it('tests the nav bar buttons are present on the page', async () => {
    await render(Header, options)
    expect(screen.getByRole('button', { name: 'Designs' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Designs' })).toBeEnabled()
    expect(screen.getByRole('button', { name: 'Care' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Care' })).toBeEnabled()
    expect(screen.getByRole('button', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'About' })).toBeEnabled()
    expect(screen.getByRole('button', { name: 'Store' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Store' })).toBeEnabled()
  })
})

describe('Tests the Header view is rendered correctly on small screens', () => {
  it('tests the nav bar mobile menu is present when the screen width is small', async () => {
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 150
    })
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768
    })
    window.dispatchEvent(new Event('resize'))
    expect(window.innerHeight).toBe(150)
    expect(window.innerWidth).toBe(768)
    await render(Header, options)

    // nav bar buttons aren't present in the burger bar, it's a list
    expect(screen.queryByRole('button', { name: 'Designs' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Care' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'About' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Store' })).not.toBeInTheDocument()

    expect(screen.getByTestId('menu-bar-icon-button')).toBeInTheDocument()

    await userEvent.click(screen.getByTestId('menu-bar-icon-button'))

    await waitFor(() => {
      expect(screen.getByTestId('v-navigation-drawer')).toBeInTheDocument()
    })

    expect(screen.getByTestId('designs-mobile-menu-button').textContent).toStrictEqual('Designs')
    expect(screen.getByTestId('care-mobile-menu-button').textContent).toStrictEqual('Care')
    expect(screen.getByTestId('about-mobile-menu-button').textContent).toStrictEqual('About')
    expect(screen.getByTestId('store-mobile-menu-button').textContent).toStrictEqual('Store')
  })
})
