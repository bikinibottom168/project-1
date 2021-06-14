<template>
  <nuxt-link :to="{ name: 'swinging-id', params: { id: '123' } }">
    <v-sheet color="white" elevation="1" height="100%" width="100%">
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          lg="12"
          align="center"
          class="d-flex justify-space-between"
        >
          <v-img
            class="white--text align-end"
            height="250"
            contain
            :src="sideline.img1"
          >
            <v-chip class="my-2">
              {{ sideline.title1 }}
            </v-chip>
          </v-img>
          <v-img
            class="white--text align-end"
            height="250"
            contain
            :src="sideline.img2"
          >
            <v-chip class="my-2">
              {{ sideline.title2 }}
            </v-chip>
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="12" align="center" justify="center">
          <v-btn color="primary">฿ 2,000</v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </nuxt-link>
</template>

<script>
export default {
  props: ["sideline"]
};
</script>

<style scoped></style>
