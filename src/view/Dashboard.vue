// src/views/HomeView.vue
<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import StatsWidget from '../components/dashboard/StatsWidget.vue';
import DialogComponent from '../components/DialogComponent.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Fluid from 'primevue/fluid';

// State variables
const showDialog = ref(false)
const showDetails = ref(false);
const selectedData = ref(null);
const dialogHeader = ref('');

// Example data (replace this with your actual data)
const data = {
  name: 'Ashley San Pedro',
  department: 'Engineering',
  position: 'Software Developer'
};

// Methods
const showData = (rowData) => {
  dialogHeader.value = 'Show Details';
  selectedData.value = rowData;
  showDetails.value = true;
};

</script>

<template>
  <div class="home grid grid-cols-12  gap-3">

    <StatsWidget />

    <button @click="showDialog = true" class="w-full text-sm gap-1 flex items-center text-gray-700 py-2 border border-gray-50 px-3 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition">
      <i class="pi pi-eye"></i>
      <span>Show</span>
    </button>

    <DialogComponent v-model:isOpen="showDialog" title="Confirm Action" >
      <p>Are you sure you want to proceed with this action?</p>

      <template #footer>
        <button @click="showDialog = false" class="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
        <button @click="confirmAction" class="px-3 py-1 rounded bg-pink-300 text-white hover:bg-pink-400">Confirm</button>
      </template>
    </DialogComponent>


    <Button 
      label="Show" 
      icon="pi pi-eye" 
      class="p-button-sm p-button-text !text-gray-500 hover:border hover:!border-black ml-2" 
      @click="showData(data)" 
    />

    <Dialog v-model:visible="showDetails" :header="dialogHeader" modal>
      <div v-if="selectedData" class="space-y-4 p-4">
        <div>
          <p class="text-sm text-gray-500">Name</p>
          <p class="text-lg font-semibold text-gray-300">{{ selectedData.name }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Department</p>
          <p class="text-lg font-semibold text-gray-300">{{ selectedData.department }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Position</p>
          <p class="text-lg font-semibold text-gray-300">{{ selectedData.position }}</p>
        </div>
      </div>

      <div v-else class="p-4 text-center text-gray-400">
        <p>No data available.</p>
      </div>
    </Dialog>
  </div>

  
</template>

<style scoped>

</style>

