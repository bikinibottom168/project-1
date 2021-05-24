<template>
  <v-card
    class="mx-auto"
    max-width="100%"
    height="100%"
    elevation="2"
    nuxt
    :to="{ name: 'sideline-id', params: { id: '123' }}"
  >
    <v-img class="white--text align-end" height="200px" :src="sideline.img">
      <v-card-title>
        <v-row align="center" justify="end">
          <v-btn small color="primary" class="text-body-1">฿ 1,300</v-btn>
        </v-row>
      </v-card-title>
    </v-img>
    <!-- <v-card-subtitle class="pb-0 mr-2">
      <v-row align="center" justify="end" class="text-left">รัชดา 17</v-row>
    </v-card-subtitle>-->
    <v-card-text class="d-block text--primary">
      <p class="text-body-1 pb-0 mb-0 text-truncate">{{ sideline.title }}</p>
      <p class="text-caption" color="text--success">หญิง</p>
      <v-chip small color="success">
        <v-avatar left class="green darken-4">28</v-avatar>คนกำลังดู
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["sideline"]
};
</script>

<style scoped>
</style>