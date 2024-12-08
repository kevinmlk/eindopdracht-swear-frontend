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

  <div v-if="userData.values">
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      status-icon
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      v-if="Object.keys(userData.values).length > 0"
    >
      <!-- Firstname -->
      <el-form-item label="Firstname" prop="firstname">
        <el-input id="firstname" v-model="userData.values.firstname" type="text" />
      </el-form-item>
      <!-- Lastname -->
      <el-form-item label="Lastname" prop="lastname">
        <el-input id="lastname" v-model="userData.values.lastname" type="text" />
      </el-form-item>
      <!-- Username -->
      <el-form-item label="Username" prop="username">
        <el-input id="username" v-model="userData.values.username" type="text" />
      </el-form-item>
      <!-- Email -->
      <el-form-item label="Email" prop="email">
        <el-input id="email" v-model="userData.values.email" type="text" />
      </el-form-item>
      <!-- Phone -->
      <el-form-item label="Phone" prop="phone">
        <el-input id="phone" v-model="userData.values.phone" type="text" />
      </el-form-item>
      
      <!-- Password -->
      <el-form-item label="New password" prop="password">
        <el-input id="password" v-model="userData.values.password" type="password"  />
      </el-form-item>

      <!-- Role -->
      <el-form-item v-if="userData.values.role === 'admin'" label="Role" prop="role">
        <el-input id="role" v-model="userData.values.role" type="text" />
      </el-form-item>

      <!-- Street -->
      <el-form-item label="Street" prop="street">
        <el-input id="street" v-model="userData.values.address.street" type="text" />
      </el-form-item>
      <!-- City -->
      <el-form-item label="City" prop="city">
        <el-input id="city" v-model="userData.values.address.city" type="text" />
      </el-form-item>
      <!-- Postalcode -->
      <el-form-item label="Postalcode" prop="postalCode">
        <el-input id="postalCode" v-model="userData.values.address.postalCode" type="text" />
      </el-form-item>
      <!-- Country -->
      <el-form-item label="Country" prop="country">
          <el-select v-model="userData.values.address.country" placeholder="userData.values.address.country">
            <el-option label="Belgium" value="Belgium" />
            <el-option label="Luxembourg" value="Luxembourg" />
            <el-option label="Netherlands" value="Netherlands" />
          </el-select>
        </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="">
          Edit profile
        </el-button>
        
      </el-form-item>
    </el-form>
  </div>
  
  <div v-else>
    <p>Loading user data...</p>
  </div>
</template>

<style lang="scss" scoped>

</style>
