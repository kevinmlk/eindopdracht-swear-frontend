<script setup>
  // Import navigation component
  import Navigation from './components/Navigation.vue'
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

</style>
