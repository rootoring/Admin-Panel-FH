<template>
  <div style="position: relative;">
    <Header/>
      <div style="display: flex;">
        <Menu/>
        <Nuxt />
      </div>
    <MobilMenu/> 
  </div>

</template>

<script>

export default {
  components: {
    Header: () => import("@/components/Header"),
    Menu:() => import('@/components/Menu'),
    MobilMenu:() => import('@/components/MobilMenu')
  }
}
</script>