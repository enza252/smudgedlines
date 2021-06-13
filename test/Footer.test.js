import { render, screen } from '@testing-library/vue'
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
  it('tests the icons are present within the component', async () => {
    await render(Footer, options)
    expect(screen.getByTestId('footer-text-right').textContent).toContain(`© ${new Date().getFullYear()} made with  by Smudged Lines`)
  })
})
