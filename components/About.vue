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
              Pleasure to meet you, we’re Smudged Lines!
            </h2>
            <br/>
            <v-card rounded="10" elevation="6">

              <v-list-item>
                <v-list-item-content>
                  <h4>
                    Who are we:
                  </h4>
                </v-list-item-content>
              </v-list-item>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    We're a new eco-friendly T-Shirt business that’s shaking up the world of fashion through bespoke clothing, that's designed to make you stand out.</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    Run by Leicester local, Rose, a sewing expert who has been creating clothing for over 4 decades.
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
                    Keeping it green - We’re taking steps towards our end-goal of becoming a zero-waste business. This is reflected through our packaging which is 100% plastic-free. We are also on the hunt for ways to make our manufacturing process more green and energy efficient.                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    Supporting small – We’re all about small businesses (as one ourselves). So, we choose to source fabric from local manufacturers and vendors.                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    Handcrafted with care - We're all about quality. Our master seamstress, Rose, has been sewing for over fourty years                  </v-list-item-content>
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
                    We're currently listed on depop but feel free to message us on Instagram or for direct orders via bank transfer, email us &nbsp;<a href="mailto:mail@smudgedlines.co" style="flex: none !important; color: white !important">mail@smudgedlines.co</a>
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
  name: 'About',
})
</script>
<style>
.v-list-item__content {
  font-size: 18px;
}
h4 {
  font-size: 24px;
}
</style>
