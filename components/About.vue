<template>
  <v-container class="pa-6">
    <v-row class="ml-1">
      <h1 id="about-header">About</h1>
    </v-row>
    <v-row>
      <v-sheet min-width="100%" color="accent" class="pa-6" rounded elevation="10">
        <v-row>
          <v-col cols="12">
            <h2>
              Hello world, we’re Smudged Lines. It’s a pleasure to meet you!
            </h2>
            <br/>
            <v-card rounded="10" elevation="6">

              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <h4>
                      So, who are we?
                    </h4>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    We’re a new sustainable clothing business shaking up the world of fashion through bespoke patterned T-shirts that are both eco-friendly and uber unique, specially designed to make you stand out from the crowd.
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    Our digital shop came to life in 2020 but Smudged Lines is no newcomer to the sewing game. The mastermind behind SL is Leicester local Rose, who has been creating t-shirts for over 2 decades. Rose is a passionate seamstress, with over 40 years’ experience.
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    Going public with her designs was a big decision but worthwhile, as Rose’s primary mission in life is to make people happy. Nothing brings her greater joy than seeing her creations out and about.
                  </v-list-item-content>
                </v-list-item>
              </v-list>

            </v-card>
            <br/>
            <v-card rounded elevation="6">

              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <h4>
                      Our mission:
                    </h4>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    Keeping it green - We’re taking steps towards our end-goal, of becoming a zero-waste business. This is reflected through our  packaging which is 100% plastic-free. We are also on the hunt for ways to make our manufacturing process more green and energy efficient.
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    Supporting small – We’re all about small businesses (as one ourselves). So, we choose to source our fabric from local manufacturers and vendors.
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    1 more (handcrafted with care?)
                  </v-list-item-content>
                </v-list-item>
              </v-list>

            </v-card>
            <br/>
            <v-card rounded elevation="6">

              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <h4>
                      Where to find us:
                    </h4>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    We're currently listed on depop but feel free to message us on Instagram or mail@smudgedlines.co for direct orders via bank transfer.
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    Keep your eye peeled, our web store is coming soon…
                  </v-list-item-content>
                </v-list-item>
              </v-list>

            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
  },
  name: 'About',
  data () {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper libero urna, vel accumsan enim ultricies in. Quisque augue purus, interdum nec lacinia vitae, pharetra at mi. Curabitur vitae condimentum dolor, non hendrerit neque. Aenean commodo cursus turpis vitae euismod. Duis eget tortor quis leo cursus sodales. Sed maximus neque est, id convallis quam semper non. Aliquam sit amet metus tempor, tincidunt diam sed, convallis ligula. Phasellus non ligula egestas, luctus lacus et, accumsan mauris. In hac habitasse platea dictumst. Donec malesuada ullamcorper fringilla. Suspendisse pharetra tempus facilisis. Nam ut scelerisque libero, vitae cursus odio. Phasellus lobortis vehicula maximus. Mauris lobortis in ligula accumsan egestas. Praesent ut magna sed ante dignissim mattis sit amet in ipsum.'
    }
  }
})
</script>
