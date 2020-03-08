<template>
  <div class="wrap-addr">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="收货人" label-width="120px">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="收货人电话" label-width="120px">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="收货地址" label-width="120px">
        <el-input v-model="form.street"></el-input>
      </el-form-item>
      <el-form-item label="邮政编码" label-width="120px">
        <el-input v-model="form.postCode"></el-input>
      </el-form-item>
      <el-form-item label-width="120px">
        <el-switch v-model="form.isDefault" active-text="设置为默认地址">
        </el-switch>
      </el-form-item>
      <el-form-item class="alignc">
        <el-button type="primary" @click="onSubmit">保存地址</el-button>
        <el-button @click="goback">取消</el-button>
      </el-form-item>
    </el-form>
    <modal :mdShow="ModalShow">
      <p slot="message">{{ ModalMsg }}</p>
    </modal>
  </div>
</template>

<script>
import Modal from "../components/Modal";

export default {
  data() {
    return {
      ModalShow: false,
      ModalMsg: "",
      type: "",
      form: {
        userName: "",
        street: "",
        tel: "",
        postCode: "",
        isDefault: true
      }
    };
  },
  mounted() {
    console.log(this.$route.query);
  },
  methods: {
    async onSubmit() {
      let that = this;
      let res = await this.$http.post(this.$api.Users.editAddr, {
        user_id: this.$store.state.userId,
        type: this.$route.query.type,
        ...this.form
      });
      this.ModalShow = res.state == 1 ? true : false;
      this.ModalMsg = res.state == 1 ? "保存成功" : "保存失败";
      setTimeout(() => {
        that.ModalShow = false;
      }, 1500);
    },
    goback() {
      this.$router.back();
    }
  },
  components: {
    Modal
  }
};
</script>

<style scoped lang="scss">
.wrap-addr {
  width: 40%;
  min-width: 200px;
  margin: 175px auto;
}
.alignc {
  text-align: center;
}
</style>
