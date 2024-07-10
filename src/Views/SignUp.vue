<template>
  <div class="h-full bg-slate-300 py-20">
    <form class="flex flex-col w-96 mx-auto my-0">
      <h1 class="text-4xl pb-12">Sign Up</h1>
      <label for="userName">User Name</label>
      <input class="rounded-md py-2" name="userName" />
      <label for="password">Password</label>
      <input class="rounded-md py-2" name="password" />
      <div>
        <button
          class="mt-10 py-3 px-5 text-bold bg-black rounded-lg text-white hover:bg-blue-400"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
