<template>
    <div :class="`flex flex-col justify-between bg-white rounded-md p-6 shadow-lg border-t-4 border-primary-${color}`">
        <div>
            <h5 class="text-2xl font-bold text-blue-dark-grey mb-2">{{title}}</h5>
            <p class="text-blue-gray">{{description}}</p>
        </div>

        <div class="flex flex-row justify-end">
            <img :src="require(`~/assets/images/${image}.svg`)" class="w-15 mt-5">

        </div>
    </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      }
    }
  }
</script>