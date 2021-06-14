<template>
  <v-col cols="12" lg="12" class="d-flex justify-space-between">
    <v-row>
      <v-col cols="12" lg="12" class="d-flex justify-space-between">
        <b align="start">การบ้าน</b>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" v-bind="attrs" v-on="on" outlined v-if="$auth.loggedIn">ลงการบ้าน</v-btn>
            <v-btn
              color="success"
              @click="alerts('ยังไม่ได้ล็อคอินค่ะ','error')"
              v-if="!$auth.loggedIn"
              outlined
            >ลงการบ้าน</v-btn>
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
                <v-subheader class="title">ลงการบ้าน {{ title_posts }}</v-subheader>
                <v-form>
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-text-field outlined label="หัวข้อการบ้าน" v-model="title"></v-text-field>
                      <v-textarea
                        outlined
                        label="ลายละเอียดการบ้าน"
                        class="mb-1 pb-0"
                        v-model="description"
                      ></v-textarea>
                      <small class="ml-4">ให้คะแนนน้อง</small>
                      <v-rating
                        class="ml-4 mt-1"
                        v-model="score"
                        dense
                        background-color="orange lighten-3"
                        color="orange"
                        medium
                      ></v-rating>
                    </v-col>
                  </v-row>
                  <v-row class="mb-5 mt-1 py-5">
                    <v-col cols="12" lg="6">
                      <upload-images
                        maxError="อัพโหลดไฟล์สูงสุด 10 รูป"
                        uploadMsg="อัพรูปการบ้าน"
                        fileError="อัพรูปไม่สำเร็จ"
                        clearAll="ลบทั้งหมด"
                        v-model="imagePreviewURL"
                        @change="handleImages"
                      ></upload-images>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-btn color="primary" block @click="submit">ส่งการบ้าน</v-btn>
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
        v-if="comments.length != 0"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <card-comment :comment="comment"></card-comment>
      </v-col>
      <v-col cols="12" lg="12" v-if="comments.length == 0" align="center">
        <p text>น้องยังไม่มีการบ้านค่ะพี่ ช่วยน้องรีวิวหน่อยนะคะ น้าาาาา</p>
      </v-col>
    </v-row>
    <v-snackbar v-model="alert.enable" top>
      {{ alert.text }}
      <template v-slot:action="{ attrs }">
        <v-btn :color="alert.color" text v-bind="attrs" @click="alert.enable = !alert.enable">Close</v-btn>
      </template>
    </v-snackbar>
  </v-col>
</template>

<script>
import UploadImages from "~/components/Upload";
import CardComment from "~/components/post/CardComment";

export default {
  name: "comment",
  props: ["comments", "post_id", "title_posts"],
  components: {
    UploadImages,
    CardComment
  },
  data() {
    return {
      imagePreviewURL: null,
      dialog: false,
      image: [],
      title: "",
      description: "",
      score: "",
      alert: {
        text: "",
        enable: false,
        color: ""
      }
    };
  },
  methods: {
    handleImages(files) {
      for (var i = 0; i < files.length; i++) {
        this.image.push(files[i]);
      }
    },
    alerts(data, color) {
      this.alert.text = data;
      this.alert.enable = true;
      this.alert.color = color;
    },
    submit() {
      console.log("score", this.score);
      let formData = new FormData();
      // formData.append("image", this.image);
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("score", this.score);
      formData.append("posts_id", this.post_id);
      for (var i = 0; i < this.image.length; i++) {
        formData.append("image[" + i + "]", this.image[i]);
      }
      const post = this.$axios
        .$post(`/api/v1/member/review`, formData)
        .then(res => {
          console.log(res);
          if (res.status == "ok") {
            // Add New Review
            // this.comments.push(res.data);
            this.image = [];
            this.title = "";
            this.description = "";
            this.score = "";
            this.dialog = !this.dialog;
            // // alert
            this.alert.text = "ลงการบ้านสำเร็จ";
            this.alert.enable = true;
            this.alert.color = "success";
          }
        })
        .catch(err => {
          // alert
          this.alert.text = "ผิดพลาด";
          this.alert.enable = true;
          this.alert.color = "error";
        });
    }
  }
};
</script>

<style></style>
