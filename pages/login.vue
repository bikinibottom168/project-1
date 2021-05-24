<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6" lg="4">
        <v-card ref="form">
          <v-card-title>ล็อคอิน</v-card-title>
          <v-card-text>
            <v-text-field
              ref="username"
              v-model="form.username"
              :rules="rulesUser"
              :error-messages="errorMessages"
              label="ชื่อผู้ใช้งาน"
              placeholder="Username"
              required
              outlined
            ></v-text-field>
            <v-text-field
              ref="password"
              v-model="form.password"
              :rules="[() => !!form.password || 'กรุณากรอกรหัสผ่าน']"
              label="รหัสผ่าน"
              placeholder="Password"
              required
              type="password"
              outlined
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-"></v-divider>
          <v-card-actions>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="success" block rounded="" @click="submit">
              ล็อคอิน
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        passwordConfirm: ""
      }
    };
  },
  computed: {
    rulesUser() {
      const rules = [];
      // Rule 1
      const rule1 = v => (v || "").indexOf(" ") < 0 || "ห้ามเว้นวรรค";
      rules.push(rule1);

      // Rule 2
      const rule2 = v => !!v || "" || "กรุณากรอกชื่อผู้ใช้";
      rules.push(rule2);

      return rules;
    },
    rulesPassword() {
      const rules = [];

      // Rule 1 Match Password
      const rule1 = v =>
        (!!v && v) === this.form.password || "รหัสผ่านไม่ตรงกัน";
      rules.push(rule1);

      return rules;
    }
  }
};
</script>

<style scoped></style>
