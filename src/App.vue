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
      <!-- End Navigation -->

      <!-- Start Header Video -->
      <div class="header-video">
        <video autoplay loop muted>
          <source src="./assets/video-header-swear.mp4" type="video/mp4">
        </video>
      </div>
      <!-- End Header Video -->
    </el-header>
    <!-- End Header -->

    <!-- Start Main -->
    <el-main>

    </el-main>
    <!-- End Main -->
  </el-container>
</template>

<style scoped>

</style>
