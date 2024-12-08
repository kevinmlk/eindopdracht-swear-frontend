<script setup>
  // Import navigation component
  import Navigation from './components/Navigation.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <!-- Start Container -->
  <el-container>
    <!-- Start Header -->
    <el-header>
      <!-- Start Navigation -->
      <Navigation />
    </el-header>

    <!-- Start Footer -->
    <el-footer>
      <Footer />
    </el-footer>
    <!-- End Footer -->
  </el-container>
</template>

<style lang="scss" scoped>

</style>
