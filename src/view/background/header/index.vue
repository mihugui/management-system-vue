<template>
  <div>
    <el-menu class="header" mode="horizontal">
      <el-menu-item>
        <Search />
      </el-menu-item>
      <el-menu-item>
        <i class="iconfont icon-remind remind"></i>
      </el-menu-item>
      <el-menu-item>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <span class="sign-name">mhg</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Search from "@/components/HeaderSearch/index.vue";
export default {
  data() {
    return {
      searchContent: ""
    };
  },
  components: {
    Search
  }
};
</script>

<style scoped>
.sign-name {
  padding-left: 10px;
}

.remind {
  font-size: 30px;
}

.header {
  min-width: 452px;
  height: 59px;
  float: right;
  padding: 0;
  margin: 0;
}
</style>
