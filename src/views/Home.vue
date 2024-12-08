<script setup>
  import ModelsList from '../components/ModelsList.vue'
</script>

<template>
  <el-main>
    <section id="header-section">
      <h1>Join us on this exciting journey as we explore, educate and evolve together. </h1>
      <!-- Start Header Video -->
      <div class="header-video">
        <video autoplay loop muted class="--el-box-shadow-light">
          <source src="./../assets/video-header-swear.mp4" type="video/mp4">
        </video>
      </div>
      <!-- End Header Video -->
    </section>

    <section id="models-section">
      <h1>Models</h1>
      <!-- Start Models List -->
      <ModelsList />
      
      <!-- See all models button -->
      <el-button type="primary" @click="$router.push({ name: 'Models' })">See all models</el-button>
    </section>

  </el-main>
</template>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
  video {
    width: 100%;
    height: 600px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 8px;
  }

  // Center button
  #models-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    .el-button {
      margin-top: 24px;
    }
  }
</style>
