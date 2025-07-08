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
  <aside class="h-full w-64 bg-white p-5 rounded-xl overflow-y-auto shadow">
    <!-- Home Section -->
    <div>
      <h2 class="text-xs font-bold text-gray-400 uppercase mb-4">Home</h2>
      <SidebarItem link="/" icon="pi pi-home" label="Dashboard"/>
    </div>

    <div class="mt-6">
      <h2 class="text-xs font-bold text-gray-400 uppercase mb-4">CCTV</h2>
      <div class="space-y-1">
        <SidebarItem link="/cform" icon="pi pi-image" label="CCTV Form" />
        <SidebarItem link="/input" icon="pi pi-inbox" label="Records" />
        <SidebarItem link="/button" icon="pi pi-mobile" label="Button" />
        <SidebarItem link="/landingpage" icon="pi pi-image" label="Landing Page" />
      </div>
    </div>

    <div class="mt-6">
      <h2 class="text-xs font-bold text-gray-400 uppercase mb-4">Key Monitoring</h2>
      <div class="space-y-1">
        <SidebarItem link="/landing" icon="pi pi-globe" label="Landing" />
        

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
            <SidebarItem link="/profile" icon="pi pi-user-edit" label="Profile" />
            <SidebarItem link="/logout" icon="pi pi-sign-out" label="Logout" />
          </div>
        </Transition>
    
        <SidebarItem link="/access-denied" icon="pi pi-lock" label="Access Denied" />
      </div>
    </div>
  </aside>
</template>
