<script setup>
// Import router
  import { RouterView } from 'vue-router'
  
</script>

<template>
  <!-- Start menu -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0"><router-link to="/">
      <img
        style="width: 100px"
        src="../assets/swear-logo-black.png"
        alt="Element logo"
      /></router-link>
    </el-menu-item>
    <el-menu-item index="1">
      <router-link to="/models">
        <el-icon style="vertical-align: middle">
          <ElementPlus />
        </el-icon>
        <span style="vertical-align: middle"> Models </span>
      </router-link>
    </el-menu-item>

    <el-menu-item index="2">
      <router-link to="/orders">
      <el-icon style="vertical-align: middle">
        <User />
      </el-icon>
      <span style="vertical-align: middle"> Account </span>
      </router-link>
    </el-menu-item>

    <el-menu-item index="3">
      <router-link to="/cart">
      <el-icon style="vertical-align: middle">
        <ShoppingTrolley />
      </el-icon>
      <span style="vertical-align: middle"> Cart </span>
      </router-link>
    </el-menu-item>
  </el-menu>
  <router-view/>
  </template>

<style lang="scss" scoped>
  
  .el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
</style>
