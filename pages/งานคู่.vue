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
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1621758194541_5f3e9426da29530012d87294_3E0B1AEE-225A-4975-B5E6-F35070812DE5.jpeg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620670196648_6094315911b00ac4c6b26cd6_B612_20210507_010310_683.jpg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620800674574_60627d0411b00a8244b23291_IMG_20210512_132226.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1621798794886_5f86cec7839e9362b20be1b7_B0BFCD61-7F25-4930-AF21-FE6838CC9870.jpeg"
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
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1622041137927_5f4147a04d47a9001246251e_1622041087605.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1620237039729_5f75aab814473e55e6a6cec2_133A4B48-8CC0-4810-A783-87C0F16D0AE5.jpeg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1621170296212_602ca7685ae6b166bfcaa0bd_1621169782223..jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1621922170396_5f68b1303d759ef7db272051_35893AEA-7E2E-43DF-B35C-4A7C4AC10259.jpeg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1611116271989_5f68b1303d759ef7db272051_06B26B5C-D1BB-49AD-8889-63B82FB3A63D.jpeg",
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
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1621758123202_5f3e9426da29530012d87294_A23E8FCC-C1F5-4335-8446-CADA3C47DE97.jpeg"
        },
        {
          id: "992",
          title1: "แพต💧นวดให้ก่อน💧",
          img1:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1621423926980_5ffbc138b6c79c2b342d737c_1621423620109.jpg",
          title2: "แHannah",
          img2:
            "https://storage.googleapis.com/flower-public/public/escort-post-images/max350/1621507670247_5f998e72494c774c02eeb1e3_5E9F1A7B-ED26-48A4-A0AA-F6A13CB2B13D.jpeg"
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
