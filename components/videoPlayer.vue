<script lang="ts" setup>
  const props = defineProps({
    videoId: {
      type: Number,
      required: true,
    },
  });
</script>

<template>
  <iframe
    width="560"
    height="315"
    class="w-full h-full"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<style scoped></style>
