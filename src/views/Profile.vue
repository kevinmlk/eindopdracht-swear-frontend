<script setup>
  import { ref, onMounted } from 'vue';
  // import jwt_decode from 'jwt-decode';

  // Reactive property to hold user data
  const userData = ref(null);

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const getUserID = () => {
    const token = getToken();
    if (token) {
      // Assuming the user ID is stored in the token as a claim with the key "sub"
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      return decodedToken.sub;
    }
    return null;
  };

  const getUserData = async () => {
    try {
      const userID = getUserID();

      if (!userID) {
        console.error('User ID not found');
        return;
      }

      const response = await fetch(`http://localhost:3000/api/v1/users/${userID}`, {
        headers: {
          Authorization: `Bearer ${getToken()}` // Include token in Authorization header
        }
      });

      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      userData.value = data.data;
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  // // Fetch user data on component mount
  // onMounted(() => {
  //   getUserData();
  // });
</script>

<template>
  <h1>Profile Settings</h1>
  <!-- <div v-if="userData">
    <p>Name: {{ userData.name }}</p>
    <p>Email: {{ userData.email }}</p>
  </div>
  <div v-else>
    <p>Loading user data...</p>
  </div> -->
</template>

<style lang="scss" scoped>

</style>
