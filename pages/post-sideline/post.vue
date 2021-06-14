<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              ลงงานกับ Teddek ทำยังไง?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>1. ลงข้อมูลตามขั้นตอน</p>
              <p>2. อัพรูปภาพที่ใช้ลงงาน (รูปแรกที่อัพขึ้นจะใช้เป็นภาพปก)</p>
              <p>3. ติดต่อแอดมินทางไลน์ เพื่อชำระเงินค่าลงงาน</p>
              <p>4. หลังจากชำระแล้ว แจ้งแอดมินเพื่ออนุมัติงาน</p>
              <b>น้องๆคนไหนลงงานไม่เป็น ติดต่อแอดมินเพื่อช่วยลงงานให้</b>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              ลงงานไม่เป็น ?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              น้องๆคนไหนลงงานไม่เป็น ติดต่อแอดมินเพื่อช่วยลงงานให้</b>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <!-- <p class="error--text title">*โปรดอ่านก่อน*</p>
        ขั้นตอนการลงงาน
        <h3>ไลน์แอดมิน @dkdkdko</h3>-->
      </v-col>

      <v-col cols="12" lg="8">
        <v-stepper v-model="step" vertical>
          <!-- Step 1 -->
          <v-stepper-step :complete="step > 1" step="1">
            ใส่ข้อมูลน้องๆ
            <small>ลายละเอียดงานและราคางาน</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-row>
              <v-col cols="12" lg="12">
                <v-alert v-if="check.errorStep == 1" type="error" :value="true">{{ check.text }}</v-alert>
            <v-text-field
              dense
              ref="title"
              type="string"
              outlined
              label="ชื่อใช้รับงาน (จำเป็นต้องกรอก)"
              v-model="form.title"
              requiredx
              :success="form.title.length != 0"
              :rules="[
                () => !!form.title || 'โปรดใส่ชื่อใช้รับงาน'
              ]"
            ></v-text-field>
            <v-text-field
              ref="price"
              prepend-inner-icon="attach_money"
              dense
              type="number"
              outlined
              label="ราคางาน (จำเป็นต้องกรอก)"
              placeholder="ตัวอย่าง 1500"
              required
              v-model="form.price"
              min="3"
              max="6"
              :success="form.price.length != 0"
              :rules="[
                () => !!form.title || 'โปรดใส่ราคางาน'
              ]"
            ></v-text-field>

            <v-text-field
              ref="line"
              prepend-inner-icon="call"
              dense
              type="string"
              outlined
              label="ไลน์ติดต่องาน (จำเป็นต้องกรอก)"
              required
              v-model="form.line"
              min="3"
              max="20"
              :success="form.line.length != 0"
              :rules="[
                () => !!form.title || 'โปรดใส่ข้อมูลติดต่อ'
              ]"
            ></v-text-field>

            <v-textarea
              ref="description"
              dense
              outlined
              block
              label="ลายละเอียดน้องๆ"
              v-model="form.description"
              required
              :success="form.description.length != 0"
              :rules="[
                () => !!form.title || 'โปรดใส่ข้อมูล'
              ]"
            ></v-textarea>
            <v-select
              ref="sex"
              prepend-inner-icon
              dense
              outlined
              :items="sex"
              :item-text="sex"
              :item-value="sex"
              label="เพศ"
              v-model="form.sex"
              required
              :success="form.sex.length != 0"
              :rules="[
                () => !!form.title || 'โปรดเลือกเพศ'
              ]"
            ></v-select>

            <v-select
              ref="location"
              prepend-inner-icon
              dense
              outlined
              :items="location"
              :item-text="location"
              :item-value="location"
              label="โซนรับงาน"
              v-model="form.location"
              required
              :success="form.location.length != 0"
            ></v-select>

            <small class="ml-8 error--text">จำเป็นต้องกรอก ลูกค้าจะหาง่ายขึ้น</small>
            <v-text-field
              ref="zone"
              dense
              outlined
              block
              label="สถานที่รับงาน                                                                       "
              v-model="form.zone"

              required
              :success="form.zone.length != 0"
              :rules="[
                () => !!form.zone || 'โปรดใส่ข้อมูล'
              ]"
            ></v-text-field>

            <v-btn color="primary" @click="submitStep1" block>ถัดไป</v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>
          <!-- Step 2 -->
          <v-stepper-step :complete="step > 2" step="2">ลายละเอียดเพิ่มเติม</v-stepper-step>
          <v-stepper-content step="2">
            <v-text-field
              ref="age"
              dense
              type="number"
              outlined
              label="อายุ"
              placeholder="ตัวอย่าง 30"
              required
              v-model="form.age"
              min="3"
              max="6"
              :success="form.age.length != 0"

            ></v-text-field>
            <v-text-field
              ref="height"
              dense
              type="number"
              outlin ed
                  ฝฝlabel="ส่วนสูง"
              placeholder="ตัวอย่าง 160"
              required
              v-model="form.height"
              min="3"
              max="6"
              :success="form.height.length != 0"

            ></v-text-field>
            <v-text-field
              ref="weight"
              dense
              type="number"
              outlined
              label="น้ำหนัก"
              placeholder="ตัวอย่าง 50"
              required
              v-model="form.weight"
              min="3"
              max="6"
              :success="form.weight.length != 0"

            ></v-text-field>

            <v-text-field
              ref="chest"
              dense
              type="number"
              outlined
              label="อก"
              placeholder="ตัวอย่าง 36"
              required
              v-model="form.chest"
              min="3"
              max="6"
              :success="form.chest.length != 0"

            ></v-text-field>
            <v-text-field
              ref="waist"
              dense
              type="number"
              outlined
              label="เอว"
              placeholder="ตัวอย่าง 25"
              required
              v-model="form.waist"
              min="3"
              max="6"
              :success="form.waist.length != 0"

            ></v-text-field>
            <v-text-field
              ref="hip"
              dense
              type="number"
              outlined
              label="สะโพก"
              placeholder="ตัวอย่าง 36"
              required
              v-model="form.hip"
              min="3"
              max="6"
              :success="form.hip.length != 0"

            ></v-text-field>

            <p>Service ให้บริการ</p>
            <v-chip-group v-model="form.selectjob" column multiple active-class="success--text">
              <v-chip
                filter
                outlined
                v-for="item in jobsCando"
                :key="item"
                :value="item"
                class="error--text"
                append-icon="close"
              >{{ item }}</v-chip>
            </v-chip-group>
            <v-btn color="primary" @click="step = 3">ถัดไป</v-btn>
            <v-btn color="primary" outlined @click="step = 1" small>ย้อนกลับ</v-btn>
          </v-stepper-content>
          <!-- Step 3 -->
          <v-stepper-step :complete="step > 3" step="3">
            รูปภาพ
            <small>รูปสำหรับใช้รับงาน</small>
          </v-stepper-step>
          <v-stepper-content step="3">
            <p>ภาพแรกจะแสดงเป็นภาพปก</p>
            <upload-images
              uploadMsg="ลงรูปที่ใช้รับงาน"
              fileError="อัพรูปไม่สำเร็จ"
              clearAll="ลบทั้งหมด"
              class="mb-4"
            ></upload-images>
            <v-btn color="primary" @click="step = 4">ถัดไป</v-btn>
            <v-btn color="primary" outlined @click="step = 2" small>ย้อนกลับ</v-btn>
          </v-stepper-content>
          <!-- Step 4 -->
          <v-stepper-step :complete="step > 4" step="4">
            เลือกแพ็คเกจ
            <small>แพ็คเกจและราคา</small>
          </v-stepper-step>
          <v-stepper-content step="4">
            <p>เลือกราคาแพ็คเกจ</p>
            <v-radio-group v-model="form.package">
              <v-radio v-for="list in packages" :key="list.price" :label="list.title" :value="0"></v-radio>
            </v-radio-group>
            <v-btn color="primary" @click="step = 5">ถัดไป</v-btn>
            <v-btn color="primary" outlined @click="step = 3" small>ย้อนกลับ</v-btn>
          </v-stepper-content>
          <!-- Step 5 -->
          <v-stepper-step :complete="step > 5" step="5">
            สำเร็จ
            <small>ลงงานสำเร็จ</small>
          </v-stepper-step>
          <v-stepper-content step="5" align="center">
            <p>โปรดติดต่อแอดมินเพื่อแจ้งชำระเงิน</p>
            <v-icon size="128" color="success">check_circle_outline</v-icon>
            <a
              href="https://google.com/"
              target="_blank"
              style="text-decoration: none;"
              class="blue--text"
            >
              <p>ไลน์แอดมิน: @koniiaw</p>
            </a>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import UploadImages from "~/components/Upload";
export default {
  components: {
    UploadImages,
    Treeselect
  },
  data() {
    return {
      form: {
        title: "",
        price: "",
        description: "",
        sex: "",
        weight: "",
        height: "",
        chest: "",
        hip: "",
        waist: "",
        age: "",
        line: "",
        location: "",
        zone: "",
        selectjob: [
          "ด็อกกี้",
          "อมสด",
          "เลียไข่",
          "ท่า69",
          "จูบแลกลิ้นได้",
          "เลียน้องสาว",
          "อาบน้ำด้วยกัน"
        ],
        image: null,
        package: 0
      },
      check: {
        errorStep: 0,
        text: ""
      },
      step: 1 ,
      sex: ["หญิง", "สาวสองไม่แปลง", "สาวสองแปลงแล้ว"],
      packages: [{ title: "ลงฟรี 30 วัน", price: "0" }],
      jobsCando: [
        "ด็อกกี้",
        "อมสด",
        "เลียไข่",
        "ท่า69",
        "จูบแลกลิ้นได้",
        "เลียน้องสาว",
        "นวดผ่อนคลาย",
        "นวด B2B",
        "อาบน้ำด้วยกัน",
        "แตกหน้า แตกปาก แตกตัวได้",
        "เอาร่องนมได้",
        "เล่นยา",
        "เมา",
        "โม,ฉีด,ฝังมุก"
      ],
      options: [
        {
          id: "bkk-center",
          label: "กรุงเทพ-กลาง",
          children: [
            {
              id: "12",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "13",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "14",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "15",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "16",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "17",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "18",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "aa",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "aa",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "aa",
              label: "รัชดา-ห้วยขวาง"
            },
            {
              id: "aa",
              label: "รัชดา-ห้วยขวาง"
            }
          ]
        },
        {
          id: "a",
          label: "a",
          children: [
            {
              id: "aa",
              label: "aa"
            },
            {
              id: "ab",
              label: "ab"
            }
          ]
        },
        {
          id: "a",
          label: "a",
          children: [
            {
              id: "aa",
              label: "aa"
            },
            {
              id: "ab",
              label: "ab"
            }
          ]
        }
      ]
    };
  },
  watch: {
    selectjob: function() {
      console.log(this.selectjob);
    }
  },
  methods: {
    submitStep1() {
      this.formHasErrors = false;

      Object.keys(this.forms).forEach(f => {
        if (!this.forms[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });

      if (
        this.form.title != "" &&
        this.form.price != "" &&
        this.form.description != "" &&
        this.form.sex != "" &&
        this.form.line != ""
      ) {
        this.step = 2;
      }
    }
  },
  computed: {
    forms() {
      return {
        title: this.form.title,
        price: this.form.price,
        description: this.form.description,
        sex: this.form.sex,
        line: this.form.line
      };
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 1200px;
}
.v-stepper:not(.v-stepper--vertical) .v-stepper__label {
  display: block;
}
@media only screen and (max-width: 959px) {
  .v-stepper:not(.v-stepper--vertical) .v-stepper__label {
    display: block;
  }
}
</style>
