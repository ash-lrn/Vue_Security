<script setup>
import { ref } from 'vue'

const calendarOpen = ref(false)
const inboxOpen = ref(false)
const profileOpen = ref(false)
</script>




<template>
    <div class="flex items-center gap-4">
            <!-- Config buttons -->
            <!-- Uncomment these as needed -->
        <div class="lg:flex items-center gap-4 relative">

            <!-- Calendar Icon -->
            <div class="relative">
            <button 
                type="button" 
                class="layout-topbar-action text-lg hover:text-pink-500 transition"
                @mouseenter="calendarOpen = true" 
                @mouseleave="calendarOpen = false"
            >
                <i class="pi pi-calendar"></i>
            </button>

            <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
            >
                <div 
                v-if="calendarOpen" 
                class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-3 px-4 z-50"
                @mouseenter="calendarOpen = true"
                @mouseleave="calendarOpen = false"
                >
                <p class="text-sm text-gray-600">No upcoming events.</p>
                </div>
            </Transition>
            </div>

            <!-- Inbox Icon -->
            <div class="relative">
            <button 
                type="button" 
                class="layout-topbar-action text-lg hover:text-pink-500 transition"
                @mouseenter="inboxOpen = true" 
                @mouseleave="inboxOpen = false"
            >
                <i class="pi pi-inbox"></i>
            </button>

            <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
            >
                <div 
                v-if="inboxOpen" 
                class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-3 px-4 z-50"
                @mouseenter="inboxOpen = true"
                @mouseleave="inboxOpen = false"
                >
                <p class="text-sm text-gray-600">No new messages.</p>
                </div>
            </Transition>
            </div>

            <!-- User Profile Icon -->
            <div class="relative">
            <button 
                type="button" 
                class="layout-topbar-action text-lg hover:text-pink-500 transition"
                @mouseenter="profileOpen = true" 
                @mouseleave="profileOpen = false"
            >
                <i class="pi pi-user"></i>
            </button>

            <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
            >
                <div 
                v-if="profileOpen" 
                class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-3 px-4 z-50"
                @mouseenter="profileOpen = true"
                @mouseleave="profileOpen = false"
                >
                <div class="mb-3">
                    <p class="text-gray-800 text-md font-semibold">Ashley San Pedro</p>
                    <p class="text-gray-500 text-sm">Software Engineer</p>
                </div>

                <div class="space-y-2">
                    <button class="w-full text-left text-gray-700 hover:text-pink-500 transition">About Me</button>
                    <button class="w-full text-left text-gray-700 hover:text-pink-500 transition">Settings</button>
                    <button class="w-full text-left text-red-500 hover:text-red-600 transition">Logout</button>
                </div>
                </div>
            </Transition>
            </div>

        </div>
    </div>
</template>