<template>
  <el-menu :default-active="defaultActive" :collapse="isCollapse">
    <el-submenu v-for="(item, i) in menuData" :key="i" :index="i.toString()">
      <template slot="title">
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </template>
      <el-menu-item
        v-for="(itemChildren, iChildren) in item.children"
        :key="i + '-' + iChildren"
        :index="i + '-' + iChildren"
      >
        <router-link :to="'/background/' + item.path + '/' + itemChildren.path">
          {{ itemChildren.name }}
        </router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    },
    defaultActive: {
      type: String
    },
    menuData: {
      type: Array
    }
  }
};
</script>

<style></style>
