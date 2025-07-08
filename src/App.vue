

<template>
  <!-- <main id="app">
    <nav>
      <router-link to="/" class="text-red-500 hover:text-blue-400">Home</router-link> |
      <router-link to="/about" class="text-red-500 hover:text-blue-400">About</router-link>
    </nav>
    <router-view/>
  </main> -->

    <main class="layout-wrapper flex flex-col h-screen">
        <app-topbar @toggle-sidebar="toggleSidebar"></app-topbar>

        <div
        class="grid flex-1 overflow-hidden p-3.5 transition-all duration-300 space-x-3"
        :style="{
          gridTemplateColumns: sidebarOpen ? '16rem 1fr' : '0rem 1fr'
        }"
      >
        <!-- Sidebar -->
        <div class="overflow-hidden transition-all duration-300 rounded-xl shadow">
          <app-sidebar />
        </div>

        <!-- Main content -->
        <div class="overflow-y-auto transition-all duration-300 text-black ">
          <router-view />
        </div>
      </div>
        
      <Toast />

    </main>
</template>


<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import AppTopbar from './layout/AppTopbar.vue';
import AppSidebar from './layout/AppSidebar.vue';
import Toast from 'primevue/toast'

const sidebarOpen = ref(true)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

</script>





<style scoped>


</style>
