<template>
  <div>
    <v-app-bar app>
      <nuxt-link :to="{ name: 'index' }">
        <v-img
          class="mx-2"
          src="https://coolors.co/assets/img/logo.svg"
          max-height="120"
          max-width="120"
          contain
        ></v-img>
      </nuxt-link>
      <v-spacer />

      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
            rounded
            min-width="35%"
          >
            <v-icon>search</v-icon>
            <b class="text-body-1">เลือกโซน</b>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <p>ค้นหาน้องๆไซด์ไลน์</p>
          </v-card-title>
          <v-card-text class="d-flex justify-space-between">
            <v-row>
              <v-col cols="12">
                <v-form>
                  <p class="black--text ml-5 pl-2 caption">ค้นหาชื่อ</p>
                  <v-text-field
                    outlined
                    label="ค้นหาชื่อไซดไลน์"
                    rounded
                    clearable
                  ></v-text-field>
                  <v-divider class="mb-4"></v-divider>
                  <p class="ml-5 pl-2 caption black--text">เลือกโซน</p>
                  <v-select
                    rounded
                    outlined
                    label="โซน"
                    v-model="zone"
                    :items="zoneHot"
                    item-text="title"
                  ></v-select>

                  <p class="black--text mb-1 ml-5 pl-2 caption">รูปร่าง</p>
                  <v-btn-toggle
                    class="ml-5"
                    mandatory
                    v-model="text"
                    tile
                    color="deep-purple accent-3"
                    group
                  >
                    <v-btn value="left">ทั้งหมด</v-btn>

                    <v-btn value="center">ผอม</v-btn>

                    <v-btn value="right">อวบ</v-btn>
                  </v-btn-toggle>
                  <p class="black--text ml-5 pl-2 mb-1 mt-5 caption">เพศ</p>
                  <v-btn-toggle
                    class="ml-5"
                    mandatory
                    v-model="text"
                    tile
                    color="deep-purple accent-3"
                    group
                  >
                    <v-btn value="left">ทั้งหมด</v-btn>

                    <v-btn value="center">หญิง</v-btn>

                    <v-btn value="right">สาวสอง</v-btn>
                  </v-btn-toggle>
                </v-form>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="py-5">
            <v-spacer></v-spacer>
            <v-btn block color="primary" rounded @click="dialog = false"
              >ค้นหาเลย</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-spacer></v-spacer>
      <v-badge
        bordered
        bottom
        offset-x="20"
        offset-y="20"
        color="primary"
        content="6"
      >
        <v-btn class="mx-2" fab outlined small color="secondary">
          <v-icon>notifications</v-icon>
        </v-btn>
      </v-badge>
      <v-badge ordered bottom offset-x="20" offset-y="20" color="primary">
        <v-btn class="mx-2" fab outlined small color="secondary">
          <v-icon>person</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        body: "0",
        zone: ""
      },
      searchText: "",
      sheet: false,
      zoneHot: [
        { id: 123, title: "ทั้งหมด" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "ทองหล่อ" },
        { id: 123, title: "สีลม" },
        { id: 123, title: "ฝั่งธน" },
        { id: 123, title: "รังสิต" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "รัชดา-ห้วยขวาง" }
      ]
    };
  }
};
</script>

<style>
.v-input__slot {
  transform: scale(0.9);
}
</style>
