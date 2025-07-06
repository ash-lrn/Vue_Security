<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const authOpen = ref(false)

const openDropdown = ref(null)  // holds string like 'auth' or null

const toggleDropdown = (name) => {
  openDropdown.value = openDropdown.value === name ? null : name
}
</script>

<template>
  <aside class="h-full w-64 bg-white border-r border-gray-200 p-5 overflow-y-auto shadow-sm">
    <!-- Home Section -->
    <div>
      <h2 class="text-xs font-bold text-gray-400 uppercase mb-4">Home</h2>
      <RouterLink to="/" class="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition">
        <i class="pi pi-home"></i>
        <span class="text-md font-extralight">Dashboard</span>
      </RouterLink>
    </div>

    <!-- UI Components Section -->
    <div class="mt-6">
      <h2 class="text-xs font-bold text-gray-400 uppercase mb-4">UI Components</h2>
      <div class="space-y-1">
        <RouterLink to="/about" class="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-gray-700  transition">
          <i class="pi pi-image"></i>
          <span>Form Layout</span>
        </RouterLink>
        <RouterLink to="/input" class="flex items-center gap-3 text-green-600 py-2 px-3 rounded-lg hover:bg-green-50 transition">
          <i class="pi pi-check-square"></i>
          <span>Input</span>
        </RouterLink>
        <RouterLink to="/button" class="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition">
          <i class="pi pi-mobile"></i>
          <span>Button</span>
        </RouterLink>
        <!-- Add more menu items similarly -->
      </div>
    </div>

    <!-- Pages Section -->
    <div class="mt-6">
      <h2 class="text-xs font-bold text-gray-400 uppercase mb-4">Pages</h2>
      <div class="space-y-1">
        <RouterLink to="/landing" class="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition">
          <i class="pi pi-globe"></i>
          <span>Landing</span>
        </RouterLink>

        <!-- Auth collapsible -->
  <button 
    @click="toggleDropdown('auth')" 
    class="w-full flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition"
  >
    <i class="pi pi-user"></i>
    <span>Auth</span>
    <i
      :class="[
        'pi pi-chevron-down ml-auto transition-transform duration-300',
        openDropdown === 'auth' ? '-rotate-180' : 'rotate-0'
      ]"
    ></i>
  </button>

  <Transition
    enter-active-class="transition-all duration-300 ease-in-out"
    enter-from-class="max-h-0 opacity-0"
    enter-to-class="max-h-40 opacity-100"
    leave-active-class="transition-all duration-200 ease-in-out"
    leave-from-class="max-h-40 opacity-100"
    leave-to-class="max-h-0 opacity-0"
  >
    <div v-if="openDropdown === 'auth'" class="ml-7 space-y-1">
      <RouterLink to="/login" class="flex items-center gap-2 text-gray-600 py-1 px-2 rounded hover:bg-gray-100 transition">
        <i class="pi pi-sign-in"></i>
        <span>Login</span>
      </RouterLink>
      <RouterLink to="/error" class="flex items-center gap-2 text-gray-600 py-1 px-2 rounded hover:bg-gray-100 transition">
        <i class="pi pi-times-circle"></i>
        <span>Error</span>
      </RouterLink>
    </div>
  </Transition>

  <!-- Add another dropdown button if you want — same pattern -->
  <button 
    @click="toggleDropdown('another')" 
    class="w-full flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition"
  >
    <i class="pi pi-cog"></i>
    <span>Settings</span>
    <i
      :class="[
        'pi pi-chevron-down ml-auto transition-transform duration-300',
        openDropdown === 'another' ? '-rotate-180' : 'rotate-0'
      ]"
    ></i>
  </button>

  <Transition
    enter-active-class="transition-all duration-300 ease-in-out"
    enter-from-class="max-h-0 opacity-0"
    enter-to-class="max-h-40 opacity-100"
    leave-active-class="transition-all duration-200 ease-in-out"
    leave-from-class="max-h-40 opacity-100"
    leave-to-class="max-h-0 opacity-0"
  >
    <div v-if="openDropdown === 'another'" class="ml-7 space-y-1">
      <RouterLink to="/profile" class="flex items-center gap-2 text-gray-600 py-1 px-2 rounded hover:bg-gray-100 transition">
        <i class="pi pi-user-edit"></i>
        <span>Profile</span>
      </RouterLink>
      <RouterLink to="/logout" class="flex items-center gap-2 text-gray-600 py-1 px-2 rounded hover:bg-gray-100 transition">
        <i class="pi pi-sign-out"></i>
        <span>Logout</span>
      </RouterLink>
    </div>
  </Transition>
    

        <RouterLink to="/access-denied" class="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition">
          <i class="pi pi-lock"></i>
          <span>Access Denied</span>
        </RouterLink>
      </div>
    </div>
  </aside>
</template>
