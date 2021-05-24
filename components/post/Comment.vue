<template>
  <v-col cols="12" lg="12" class="d-flex justify-space-between">
    <v-row>
      <v-col cols="12" lg="12" class="d-flex justify-space-between">
        <b align="start">การบ้าน</b>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" v-bind="attrs" v-on="on" outlined
              >ลงการบ้าน</v-btn
            >
          </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>ส่งการบ้าน</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <!-- <v-btn dark text @click="dialog = false">ส่ง</v-btn> -->
              </v-toolbar-items>
            </v-toolbar>
            <v-form></v-form>
            <v-divider></v-divider>
            <v-list three-line subheader>
              <v-container>
                <v-subheader class="title">ลงการบ้าน น้ำพริก</v-subheader>
                <v-form>
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-textarea
                        outlined
                        label="ลายละเอียดการบ้าน"
                        class="mb-1 pb-0"
                      ></v-textarea>
                      <small class="ml-4">ให้คะแนนน้อง</small>
                      <v-rating
                        class="ml-4 mt-1"
                        v-model="rating"
                        dense
                        background-color="orange lighten-3"
                        color="orange"
                        medium
                      ></v-rating>
                    </v-col>
                  </v-row>
                  <!-- <v-row>
                    <v-col
                      v-for="(imgUrl, index) in imagePreviewURL"
                      :key="index"
                      class="d-flex child-flex"
                      cols="1"
                    >
                      <v-img
                        :src="imgUrl"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-col>
                  </v-row>-->
                  <!-- <v-file-input
                    class="mt-4"
                    multiple
                    accept="image/*"
                    prepend-inner-icon="mdi-camera"
                    placeholder="เลือกรูปภาพ"
                    prepend-icon
                    outlined
                    show-size
                    @change="onFileChange"
                  ></v-file-input>-->
                  <v-row class="mb-5 mt-1 py-5">
                    <v-col cols="12" lg="6">
                      <upload-images
                        max="15"
                        maxError="อัพโหลดไฟล์สูงสุด 15 รูป"
                        uploadMsg="อัพรูปการบ้าน"
                        fileError="อัพรูปไม่สำเร็จ"
                        clearAll="ลบทั้งหมด"
                      ></upload-images>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-btn color="primary" block>ส่งการบ้าน</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-list>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col
        cols="12"
        lg="12"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <card-comment :comment="comment"></card-comment>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import UploadImages from "~/components/Upload";
import CardComment from "~/components/post/CardComment";

export default {
  name: "comment",
  props: ["comments"],
  components: {
    UploadImages,
    CardComment
  },
  data() {
    return {
      dialog: false,
      imagePreviewURL: []
    };
  },
  methods: {
    onFileChange(file) {
      // const input = this.$refs.fileInput;
      this.imagePreviewURL = [];
      for (let img of file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imagePreviewURL.push(e.target.result);
        };
        reader.readAsDataURL(img);
      }
    }
  }
};
</script>

<style></style>
