<template>
  <div>
    角色管理
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$store
        .dispatch("user/list")
        .then(res => {
          console.log(res);
          this.list = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
