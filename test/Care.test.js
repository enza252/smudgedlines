import Vuetify from 'vuetify'
import { screen, render } from '@testing-library/vue'
import Care from '@/components/Care'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

describe('tests the care component renders correctly', () => {
  it('tests the component against the snapshot', async () => {
    const { asFragment } = await render(Care, options)
    expect(asFragment).toMatchSnapshot()
  })

  it('tests the care component contains the expected instructions', async () => {
    await render(Care, options)
    expect(screen.getByText('Care')).toBeInTheDocument()
    expect(screen.getByText('Machine Wash at 30 degrees celsius on a low spin, or hand wash in a bowl of warm water.')).toBeInTheDocument()
    expect(screen.getByText('Air dry our Tees on a washing line or near a warm radiator. Do not tumble dry - it\'s bad for the planet and will shrink our Tees!')).toBeInTheDocument()
  })

})
