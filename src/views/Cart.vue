<script setup>
  import { ref, onMounted , reactive} from 'vue';
  import { useRouter } from 'vue-router';
  import { getUserID, getToken } from '../utils/auth';

  const router = useRouter();
  const cartValues = ref({});
  const userData = reactive({
    values: []
  });

  onMounted(async () => {
    const response = await fetch(`https://eindopdracht-swear-api.onrender.com/api/v1/cart/user/${getUserID()}`);
    const data = await response.json();
    cartValues.value = data.data.cart;
    console.log(cartValues.value);

    getUserData();
  });

  const getUserData = async () => {
    try {
      const userID = getUserID();

      if (!userID) {
        console.error('User ID not found');
        return;
      }

      const response = await fetch(`https://eindopdracht-swear-api.onrender.com/api/v1/users/${getUserID()}`);

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

  // Submit order
  const submitOrder = async () => {
  try {
    // Extract sneakerConfig as a plain object if needed
    const sneakerConfig = JSON.parse(JSON.stringify(cartValues.value[0].sneakerConfig));

    // Ensure country is defined
    const country = userData.values.address.country || 'Unknown'; // Replace 'Unknown' with a default value or handle appropriately

    const order = {
      userId: getUserID(),
      sneakerConfig,
      status: 'pending',
      contactDetails: {
        firstname: userData.values.firstname,
        lastname: userData.values.lastname,
        email: userData.values.email,
        phone: userData.values.phone,
        address: {
          street: userData.values.address.street,
          city: userData.values.address.city,
          postalCode: userData.values.address.postalCode,
          country
        }
      }
    };

    console.log('Order Payload:', order);

    const response = await fetch('https://eindopdracht-swear-api.onrender.com/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getToken()
      },
      body: JSON.stringify(order)
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('API Error Response:', errorResponse);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Order Response:', data);

    // Delete cart
    const deleteResponse = await fetch(`https://eindopdracht-swear-api.onrender.com/api/v1/cart/${cartValues.value[0]._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });

    if (!deleteResponse.ok) {
      throw new Error('Failed to delete cart');
    }

    const deleteData = await deleteResponse.json();
    console.log('Cart Deletion Response:', deleteData);

    // Navigate to the Orders page
    router.push({ name: 'Orders' });
  } catch (error) {
    console.error('Error submitting the form:', error);
  }
};
</script>

<template>
  <h1>Cart</h1>

  <div v-if="cartValues && cartValues.length > 0">
    <el-descriptions
    title="Sneaker configuration"
    direction="vertical"
    border
    style="margin-top: 20px"
    column="3"
    >
      <el-descriptions-item
        :rowspan="2"
        :width="140"
        label="Photo"
        align="center"
      >
        <el-image
          style="width: 100px; height: 100px"
          src="../assets/sneaker-thumbnail.png"
        />
      </el-descriptions-item>

      <el-descriptions-item label="Shoesize">{{ cartValues[0].sneakerConfig.shoeSize }}</el-descriptions-item>

      <el-descriptions-item label="Color options">
        <el-tag size="small">{{ cartValues[0].sneakerConfig.colorOptions.laces }} laces</el-tag>
        <el-tag size="small">{{ cartValues[0].sneakerConfig.colorOptions.sole }} sole</el-tag>
        <el-tag size="small">{{ cartValues[0].sneakerConfig.colorOptions.upper }} upper</el-tag>
      </el-descriptions-item>

      <el-descriptions-item label="Material options">
        <el-tag size="small">{{ cartValues[0].sneakerConfig.materialOptions.laces }} laces</el-tag>
        <el-tag size="small">{{ cartValues[0].sneakerConfig.materialOptions.sole }} sole</el-tag>
        <el-tag size="small">{{ cartValues[0].sneakerConfig.materialOptions.upper }} upper</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Charms" >
        <el-tag size="small" v-for="charm in cartValues[0].sneakerConfig.charms">{{ charm }}</el-tag>
      </el-descriptions-item>
    </el-descriptions>

    <!-- Contact details -->
    <el-descriptions v-if="Object.keys(userData.values).length > 0"
      title="Contact details"
      direction="vertical"
      border
      style="margin-top: 20px"
      :column="4"
    >
      <el-descriptions-item label="Firstname">{{ userData.values && userData.values.firstname }}</el-descriptions-item>
      <el-descriptions-item label="Lastname">{{ userData.values && userData.values.lastname }}</el-descriptions-item>
      <el-descriptions-item label="Email">{{ userData.values && userData.values.email }}</el-descriptions-item>
      <el-descriptions-item label="Phone">{{ userData.values && userData.values.phone }}</el-descriptions-item>
      <el-descriptions-item label="Street & nummer">{{ userData.values && userData.values.address.street }}</el-descriptions-item>
      <el-descriptions-item label="City">{{ userData.values && userData.values.address.city }}</el-descriptions-item>
      <el-descriptions-item label="Postal code">{{ userData.values && userData.values.address.postalCode }}</el-descriptions-item>
      <el-descriptions-item label="Country">{{ userData.values && userData.values.address.country }}</el-descriptions-item>
    </el-descriptions>

    <!-- Order Now Button -->
    <el-button type="primary" @click="submitOrder" style="margin-top: 20px">Order Now</el-button>
  </div>
  
  <div v-else>
    <el-empty description="No items in cart" />
  </div>
</template>

<style lang="scss" scoped>

</style>
