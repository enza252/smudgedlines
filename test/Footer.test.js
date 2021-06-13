import { render, screen, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import Footer from '@/components/Footer'
import Vuetify from 'vuetify'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

describe('tests the footer renders correctly', () => {
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
