import { render, screen, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import Footer from '@/components/Footer'
import Vuetify from 'vuetify'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

describe('tests the footer renders correctly on large screens', () => {
  it('Renders the Header and checks against a snapshot', async () => {
    const { asFragment } = await render(Footer, options)
    expect(asFragment).toMatchSnapshot()
  })
  it('tests the text and icons are present within the component', async () => {
    await render(Footer, options)
    expect(screen.getByTestId('footer-text-right').textContent).toContain(`© ${new Date().getFullYear()} made with  by Smudged Lines`)
    expect(screen.getByTestId('depop')).toBeInTheDocument()
    expect(screen.getByTestId('instagram')).toBeInTheDocument()
    await userEvent.hover(screen.getByTestId('depop'))
    await waitFor(() => {
      expect(screen.getByText('Visit our Depop Page')).toBeVisible()
    })
    await userEvent.hover(screen.getByTestId('instagram'))
    await waitFor(() => {
      expect(screen.getByText('Visit our Instagram Page')).toBeVisible()
    })
  })
})

describe('tests the footer renders correctly on small screens', () => {
  it('renders the footer and checks the appropriate tagline is rendered', async () => {
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
    await render(Footer, options)
    expect(screen.getByTestId('footer-text-right-mobile').textContent).toContain(`© ${new Date().getFullYear()} Smudged Lines`)
  })
})
