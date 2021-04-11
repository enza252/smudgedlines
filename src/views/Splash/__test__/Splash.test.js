import Vuetify from 'vuetify'
import { render, screen } from '@testing-library/vue'
import Splash from '@/views/Splash/Splash'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

const tagLine = 'Handcrafted designs from locally sourced & produced fabric.'
const header = 'Smudged Lines'

describe('tests the Splash view renders', () => {
  it('performs a snapshot test', async () => {
    const { asFragment } = await render(Splash, options)
    expect(asFragment).toMatchSnapshot()
  })

  it('tests the smudged lines header and tagline is visible within the component', async () => {
    await render(Splash, options)
    expect(screen.getByText(header)).toBeInTheDocument()
    expect(screen.getByText(header)).toBeVisible()
    expect(screen.getByText(tagLine)).toBeInTheDocument()
    expect(screen.getByText(tagLine)).toBeVisible()
  })
})
