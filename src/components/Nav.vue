<template>
  <div class="flex justify-between bg-blue-500 text-white p-5">
    <div>
      <p>Todo App</p>
    </div>
    <ul class="flex gap-8 justify-end pr-10">
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'SignUp' }">SignUp</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'LogIn' }">LogIn</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
