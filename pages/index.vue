

<template>
  <div class="container mx-auto">
    <div class="flex flex-col w-100 p-10">
      <div class="flex flex-col w-100 items-center text-center my-10">
        <h2 class="text-3xl text-blue-gray font-extralight mb-5">Reliable, efficient delivery</h2>
        <h1 class="text-3xl text-blue-dark-grey font-semibold mb-5">Powered by technology</h1>
        <h3 class="text-lg text-blue-gray">Our Artificial Intelligence powered tools use million of project data points to ensure that your project is successful</h3>
      </div>
      <div class="flex flex-col space-y-8">
        <FeatureCard title="Supervisor" description="Monitors activity to identify project roadblocks" image="icon-supervisor" color="cyan"/>
        <FeatureCard title="Team builder" description="Scans our talent network to create the optimal team for your project" image="icon-team-builder" color="red"/>
        <FeatureCard title="Karma" description="Regularly evaluates our talent to ensure quality" image="icon-karma" color="orange"/>
        <FeatureCard title="Calculator" description="Uses data from past projects to provide better delivery estimates" image="icon-calculator" color="blue"/>
      </div>
    </div>
  </div>
</template>