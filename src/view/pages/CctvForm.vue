<script setup>


</script>
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<template>
    <div class="card ">
        <!-- <h2>CCTV Video Retrieval Request Form</h2> -->

        <div class="grid grid-cols-12 gap-3">

            <div class="flex flex-col gap-4 col-span-12 lg:col-span-6 xl:col-span-6">
                <div class="flex flex-wrap gap-4">
                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="name2">From</label>
                        <InputText id="name2" type="text" />

                    </div>
                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="email2">Date</label>
                        <DatePicker v-model="date" dateFormat="M/dd/yy" />
                        <!-- <input type="date" class="input"> -->
                    </div>
                </div>
            </div>
            <div class="500 flex flex-col gap-4 col-span-12 lg:col-span-6 xl:col-span-6">
                <div class="flex flex-wrap gap-4">
                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="name2">To</label>
                        <InputText id="name2" type="text" />
                    </div>
                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="email2">Email</label>
                        <InputText id="name2" type="text" />
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</template>






<!-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<style scoped>

.card {
    background: white;
    box-shadow: 0px 2px 10px rgba(122, 122, 122, 0.192);
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;

    &:last-child {
        margin-bottom: 0;
    }
}

.input {
    background: transparent;
    border: 1px solid rgb(172, 172, 172);
    padding: 7px 10px;
    border-radius: 4px;
}
.input:focus {
    outline: none;
}

</style>

