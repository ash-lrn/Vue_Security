<script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  const props = defineProps({
    icon: String,
    label: String,
    link: String,
  })

const route = useRoute()

const isActive = computed(() => route.path === props.link)
  
  const open = ref(false)
  const toggle = () => {
    open.value = !open.value
  }
</script>
  
<template>
    <RouterLink :to="link" class="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition"
                :class="{ 'text-pink-400': isActive }">
        <i :class="icon"></i>
        <span class="">{{ label }}</span>
    </RouterLink>
</template>
