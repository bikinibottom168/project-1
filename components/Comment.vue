<template>
  <v-row>
    <v-col cols="12" lg="12">
      <b class="text-subtitle1">ส่งการบ้าน (2)</b>
      <v-form action>
        <v-textarea counter auto-grow solo filled label="เขียนการบ้าน.."></v-textarea>

        <div class="text-right">
          <v-btn color="success">ส่งการบ้าน</v-btn>
        </div>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    submit() {
      const formData = new FormData();
      formData.append("file", fileList[0].blob);
      fetch
        .post(url, formData)
        .then(() => {})
        .catch(() => {});
    }
  }
};
</script>

