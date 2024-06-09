<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Netflix Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    />
  </head>

  <body class="overflow-x-hidden m-0 p-0">


    <!-- **** HOME PAGE *** -->
    <section
      class="w-[100%] h-auto lg:h-[100vh] bg-[url('netflix_images/bg.jpg')] bg-center bg-cover border-b-8 border-[#3e3d3d]"
    >
      <div class="bg-[rgba(0,0,0,0.5)] h-full w-[100%] px-5 lg:px-40">
        <header
          class="h-fit w-full mx-auto flex justify-between items-center pt-4"
        >
          <h1 class="text-red-600 text-5xl font-bold">NETFLIX</h1>
          <div class="flex gap-[1rem]">
          <a href="form.php"
            class="bg-red-600 hover:bg-red-700 duration-500 font-semibold text-white h-fit px-4 py-2 rounded"
            >
            Register
          </a>
          <a href="list.php"
            class="bg-red-600 hover:bg-red-700 duration-500 font-semibold text-white h-fit px-4 py-2 rounded"
            >
          List
          </a>
          </div>
        </header>
        