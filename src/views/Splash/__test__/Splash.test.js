import Vuetify from 'vuetify'
import { render, screen } from '@testing-library/vue'
import Splash from '@/views/Splash/Splash'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

describe('tests the Splash view renders', () => {
  it('performs a snapshot test', async () => {
    const { asFragment } = await render(Splash, options)
    expect(asFragment).toMatchSnapshot()
  })

  it('tests the smudged lines header and tagline is visible within the component', async () => {
    await render(Splash, options)
    expect(screen.getByText('Smudged Lines')).toBeInTheDocument()
    expect(screen.getByText('Smudged Lines')).toBeVisible()
    expect(screen.getByText('Handcrafted designs from locally sourced & produced fabric.')).toBeInTheDocument()
    expect(screen.getByText('Handcrafted designs from locally sourced & produced fabric.')).toBeVisible()
  })
})
