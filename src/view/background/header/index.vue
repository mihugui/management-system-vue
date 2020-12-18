<template>
  <div>
    <el-row>
      <el-col :span="12"><div>123</div></el-col>
      <el-col :span="12">
        <el-menu mode="horizontal">
          <el-menu-item>
            <el-input
              placeholder="请输入搜索内容"
              suffix-icon="iconfont icon-search search"
              v-model="searchContent"
            >
            </el-input>
          </el-menu-item>
          <el-menu-item>
            <i class="iconfont icon-remind"></i>
          </el-menu-item>
          <el-menu-item>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </el-menu-item>
          <el-menu-item>
            <span>mhg</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: ""
    };
  }
};
</script>

<style scope></style>
