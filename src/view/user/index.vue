<template>
  <div>
    用户管理
  </div>
</template>

<script>
export default {
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$store
        .dispatch("user/list")
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
