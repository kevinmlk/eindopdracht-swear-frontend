<script setup>
  import { getUserID, getToken } from '../utils/auth';
  import { ref, onMounted, reactive } from 'vue';

  const userData = reactive({
    values: []
  });

  const getUserData = async () => {
    try {
      const userID = getUserID();
      const token = getToken();

      if (!userID) {
        console.error('User ID not found');
        return;
      }

      const response = await fetch(`http://localhost:3000/api/v1/users/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}` // Include token in Authorization header
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      userData.values = data.data.user;
      console.log(userData.values);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch user data on component mount
  onMounted(() => {
    getUserData();
  });
</script>

<template>
  <h1>Profile Settings</h1>
  <h2>User id: {{ userData.values._id }} </h2>
  
  <div v-if="userData.values">
    <p>Name: {{ userData.values.firstname }}</p>
    <p>Email: {{ userData.values.email }}</p>
  </div>
  <div v-else>
    <p>Loading user data...</p>
  </div>
</template>

<style lang="scss" scoped>

</style>
