<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <Transition name="scale">
          <div 
            v-if="isOpen"
            class="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-lg"
          >
            <!-- Header -->
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold">{{ title }}</h2>
              <button @click="close" class="text-gray-500 hover:text-black dark:hover:text-white">
                <i class="pi pi-times"></i>
              </button>
            </div>

            <!-- Body -->
            <div class="text-gray-700 dark:text-gray-200">
              <slot />
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer" class="mt-6 flex justify-end gap-2">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  title: {
    type: String,
    default: 'Dialog'
  }
})

const emits = defineEmits(['update:isOpen'])

function close() {
  emits('update:isOpen', false)
}
</script>

<style scoped>
/* Fade transition for backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scale transition for dialog */
.scale-enter-active,
.scale-leave-active {
  transition: all 250ms ease;
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.scale-enter-to {
  opacity: 1;
  transform: scale(1);
}

.scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>