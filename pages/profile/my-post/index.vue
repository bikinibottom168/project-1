<template>
  <v-container>
    <h1>เด็กในสังกัด</h1>
    <v-divider class="mb-4"></v-divider>
    <v-row>
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="2"
        v-for="(datas, index) in dataList"
        :key="index"
      >
        <card-list :sideline="datas" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardList from "~/components/profile/Card";
export default {
  components: {
    CardList
  },
  data() {
    return {
      dataList: [
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "Exp: 15/05/21 5:00"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "Exp: 15/05/21 5:00"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "Exp: 15/05/21 5:00"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "Exp: 15/05/21 5:00"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "Exp: 15/05/21 5:00"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "แพต💧นวดให้ก่อน💧",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620823396480_5f13005f0f0f0400198bc3f8_5A24496E-5599-4624-976F-F0FA8FCE4600.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "โบกี้",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620030928046_5f180e31fe515100192f8505_IMG-20210503-WA0060.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Hannah",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg",
          exp: "หมดอายุ"
        },
        {
          title: "Nabi",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620916224671_609d2fedd10bb7d7694f99db_353D622C-CACF-4218-A49F-D564682EF062.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "Nene",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620862025673_609c626ac69d595766d7ac15_44D641E3-6AA1-4349-8C01-2C6230BC7153.jpeg",
          exp: "หมดอายุ"
        },
        {
          title: "น้องพิมพ์พลอย MN",
          img:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620705719169_5eadb5124d7bb800287c46f2_FaceApp_1620705331387.jpg",
          exp: "หมดอายุ"
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
