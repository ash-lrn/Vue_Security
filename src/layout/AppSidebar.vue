<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SidebarItem from './SidebarItem.vue'

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
      <SidebarItem link="/" icon="pi pi-home" label="Dashboard"/>
    </div>

    <!-- UI Components Section -->
    <div class="mt-6">
      <h2 class="text-xs font-bold text-gray-400 uppercase mb-4">UI Components</h2>
      <div class="space-y-1">
        <SidebarItem link="/about" icon="pi pi-image" label="Form Layout" />
        <SidebarItem link="/input" icon="pi pi-check-square" label="Input" />
        <SidebarItem link="/button" icon="pi pi-mobile" label="Button" />
        <!-- Add more menu items similarly -->
      </div>
    </div>

    <!-- Pages Section -->
    <div class="mt-6">
      <h2 class="text-xs font-bold text-gray-400 uppercase mb-4">Pages</h2>
      <div class="space-y-1">
        <SidebarItem link="/landing" icon="pi pi-globe" label="Landing" />
        

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
            <SidebarItem link="/login" icon="pi pi-sign-in" label="Login" />
            <SidebarItem link="/error" icon="pi pi-times-circle" label="Error" />
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
    
        <SidebarItem link="/access-denied" icon="pi pi-lock" label="Access Denied" />
      </div>
    </div>
  </aside>
</template>
