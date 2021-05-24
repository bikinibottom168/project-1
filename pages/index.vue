<template>
  <div>
    <div style="background-color: #5E4FAD;min-width: 100%; min-height: 50px" class="py-4">
      <v-container>
        <v-row align="center" justify="center" class="py-5">
          <v-col cols="12" lg="6">
            <v-text-field
              solo
              label="ค้นหาน้องๆ"
              rounded
              hint="ใส่ชื่อน้องที่ต้องการค้นหา"
              clearable
              flat
            ></v-text-field>
            <hr class="mb-3" />
            <v-btn color="success" to="/post-sideline/post" nuxt rounded>ลงงาน</v-btn>
            <v-btn color="secondary">เข้าสู่ระบบ</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="9">
          <span>โซนฮิต</span>
          <v-chip-group
            column
            mandatory
            center-active
            mobile-breakpoint="3"
            show-arrows
            active-class="primary--text"
          >
            <v-chip v-for="(zone,index) in zoneHot" :key="index">{{ zone.title }}</v-chip>
          </v-chip-group>
        </v-col>
        <v-col cols="12" sm="12" lg="12">
          <h1 class="mb-0 pb-0">ไซด์ไลน์</h1>
          <p class="mb-0 pb-0" color="secondary">ไซดไลน์ TOP STAR</p>
        </v-col>
        <v-col cols="6" sm="6" md="4" lg="2" v-for="(datas, index) in dataList" :key="index">
          <card-list :sideline="datas" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardList from "~/components/Card";

export default {
  components: {
    CardList
  },
  data() {
    return {
      zoneHot: [
        { id: 123, title: "รัชดา-ห้วยขวาง" },
        { id: 123, title: "ทองหล่อ" },
        { id: 123, title: "สีลม" },
        { id: 123, title: "ฝั่งธน" },
        { id: 123, title: "รังสิต" }
      ],
      dataList: [
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>