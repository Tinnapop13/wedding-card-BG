<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
    <div class="h-[100vh] w-[100vw] bg-slate-200 flex justify-center items-center">
        <div class="h-2/4 w-1/2 bg-white shadow-xl flex justify-center items-center">
            <div @click="router.push({ path: '/home' })" class="h-32 w-32 hover:scale-110 transition-all">
                <img src="/src/assets/pic/wax.png">
            </div>
        </div>
    </div>
</template>
<style scoped></style>