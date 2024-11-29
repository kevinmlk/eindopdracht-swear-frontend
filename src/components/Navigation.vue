<script setup>
  
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
    <el-menu-item index="0">
      <img
        style="width: 100px"
        src="../assets/swear-logo-black.png"
        alt="Element logo"
      />
    </el-menu-item>
    <el-menu-item index="1">
      <el-icon style="vertical-align: middle">
        <ElementPlus />
      </el-icon>
      <span style="vertical-align: middle"> Models </span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon style="vertical-align: middle">
        <User />
      </el-icon>
      <span style="vertical-align: middle"> Account </span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon style="vertical-align: middle">
        <ShoppingTrolley />
      </el-icon>
      <span style="vertical-align: middle"> Cart </span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
  .el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
</style>
