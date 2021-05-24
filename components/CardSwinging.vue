<template>
  <v-card nuxt :to="{ name: 'swinging-id', params: { id: '123' } }">
    <v-card-text>
      <v-row justify="center" align="center">
        <v-col cols="5" lg="5" align="center">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="sideline.img1"
          >
            <v-chip class="my-2">
              {{ sideline.title1 }}
            </v-chip>
          </v-img>
        </v-col>
        <v-col cols="2" lg="2" align="center">
          <v-chip color="primary">งานคู่</v-chip>
        </v-col>
        <v-col cols="5" lg="5" align="center">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="sideline.img2"
          >
            <v-chip class="my-2">
              {{ sideline.title2 }}
            </v-chip>
          </v-img>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["sideline"]
};
</script>

<style scoped></style>
