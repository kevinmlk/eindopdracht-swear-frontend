<script setup>
  // Import navigation component
  import Navigation from './components/Navigation.vue'

  // Import router
  import { RouterView } from 'vue-router'
</script>

<template>
  <!-- Start Container -->
  <el-container>
    <!-- Start Header -->
    <el-header>
      <!-- Start Navigation -->
      <Navigation />
      <RouterView />
    </el-header>

    

    <!-- Start Footer -->
    <el-footer>

    </el-footer>
    <!-- End Footer -->
  </el-container>
</template>

<style lang="scss" scoped>
  video {
    width: 100%;
    height: 700px;
    object-fit: cover;
    object-position: 50% 50%;
  }
</style>
