import { render, screen } from '@testing-library/vue'
import Vuetify from 'vuetify'
import Header from '@/components/Header'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

describe('Tests the Header view is rendered correctly', () => {
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

  it('tests the nav bar mobile menu is present when the screen width is small', () => {
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 150
    })

    window.dispatchEvent(new Event('resize'))
    expect(window.innerHeight).toBe(150)
    expect(screen.queryByRole('button', { name: 'Designs' })).not.toBeInTheDocument()
  })
})
