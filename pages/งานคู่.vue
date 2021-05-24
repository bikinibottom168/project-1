<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="12" lg="12">
          <h1 class="mb-0 pb-0">ไซด์ไลน์สวิงกิ้ง</h1>
          <p class="mb-0 pb-0" color="secondary">จับคู่สวิงกิ้ง</p>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          v-for="(datas, index) in dataList"
          :key="index"
        >
          <card-list :sideline="datas" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardList from "~/components/CardSwinging";

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
      ],
      dataList: [
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620560906666_5f034c750c4548001835f82a_S__19595274.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1615529309814_5f034c750c4548001835f82a_1.jpg"
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
