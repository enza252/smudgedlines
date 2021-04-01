import Index from '@/views/Index'
import { screen, render } from '@testing-library/vue'

const options = {
  routes: [],
}

describe('tests the index page renders', () => {
  test('tests the correct text is shown on the page', async () => {
    await render(Index, options)
    expect(screen.getByText('Index.vue')).toBeInTheDocument()
  })
})
