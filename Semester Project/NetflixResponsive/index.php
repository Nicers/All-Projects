<?php require('include/header.php'); ?>


<div
          class="h-full w-full flex flex-col justify-center py-10 my-5 md:py-5"
        >
          <div class="text-white mx-auto flex flex-col gap-7 items-center">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
              Unlimited movies, TV shows, and more
            </h1>
            <p class="text-2xl lg:text-3xl text-center">
              Watch anywhere. Cancel anytime.
            </p>
            <p class="text-xl lg:text-2xl text-center">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div
              class="flex sm:flex-row flex-col justify-center items-center gap-3 w-full"
            >
              <input
                type="email"
                placeholder="Email address"
                required="Email is required"
                class="outline-offset-4 text-lg font-normal outline-gray-100 bg-black px-3 sm:w-[23rem] w-[100%] rounded h-[4rem] border focus:border-0"
              />
              <button
                class="bg-red-600 hover:bg-red-700 duration-500 text-3xl font-semibold rounded h-[4rem] w-[13rem]"
              >
                Get Started <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- ***** ABOUT ***** -->
<section
      class="flex flex-col lg:flex-row w-[100%] px-5 lg:px-40 py-16 bg-black text-white border-b-8 border-[#3e3d3d]"
    >
      <div
        class="lg:basis-[50%] basis-[100%] flex flex-col justify-center gap-7 text-center lg:text-start"
      >
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Enjoy on your TV
        </h1>
        <p class="text-xl lg:text-2xl">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div class="lg:basis-[50%] basis-[100%]">
        <img src="netflix_images/tv.png" class="w-full h-full" alt="" />
      </div>
    </section>


    <!-- **** Download *** -->
    <section
      class="flex flex-col-reverse lg:flex-row w-[100%] px-5 lg:px-40 py-16 bg-black text-white border-b-8 border-[#3e3d3d]"
    >
      <div
        class="lg:basis-[50%] basis-[100%] flex justify-center items-end relative"
      >
        <img
          src="netflix_images/mobile.jpg"
          class="w-full h-full mb-20 lg:mb-0"
          alt=""
        />
        <div
          class="border-[2px] rounded-[10px] border-[gray] flex items-center gap-4 min-w-[15rem] w-[60%] lg:w-fit p-3 mb-0 lg:mb-6 lg:h-fit absolute bg-black"
        >
          <div>
            <img
              src="netflix_images/boxshot.png"
              class="w-fit h-[5.5rem]"
              alt=""
            />
          </div>
          <div class="flex justify-between items-center w-full gap-3 pe-3">
            <div class="flex flex-col justify-center">
              <p class="text-lg text-white font-medium">Stranger Things</p>
              <p class="text-[blue]">Downloading...</p>
            </div>
            <p
              class="w-[40px] h-[40px] cursor-pointer rounded-full border-2 border-[blue] text-white flex justify-center items-center"
            >
              <i class="fa-solid fa-download text-2xl"></i>
            </p>
          </div>
        </div>
      </div>
      <div
        class="lg:basis-[50%] basis-[100%] flex flex-col justify-center gap-7 text-center lg:text-start"
      >
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Download your shows to watch offline
        </h1>
        <p class="text-2xl lg:text-3xl">
          Save your favorites easily and always have something to watch.
        </p>
      </div>
    </section>


    <!-- **** WATCH *** -->
    <section
      class="flex flex-col lg:flex-row gap-10 w-[100%] px-5 lg:px-40 py-16 bg-black text-white border-b-8 border-[#3e3d3d]"
    >
      <div
        class="lg:basis-[50%] basis-[100%] flex flex-col justify-center gap-7 text-center lg:text-start"
      >
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Watch everywhere
        </h1>
        <p class="text-2xl lg:text-3xl">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div class="lg:basis-[50%] basis-[100%]">
        <img
          src="netflix_images/watch.jpg"
          class="w-full h-full rounded object-center"
          alt=""
        />
      </div>
    </section>


    <!-- **** PROFILE *** -->
    <section
      class="flex flex-col-reverse lg:flex-row w-[100%] gap-10 px-5 lg:px-40 py-16 bg-black text-white border-b-8 border-[#3e3d3d]"
    >
      <div class="lg:basis-[50%] basis-[100%]">
        <img
          src="netflix_images/kid.png"
          class="w-full h-full rounded object-center"
          alt=""
        />
      </div>
      <div
        class="lg:basis-[50%] basis-[100%] flex flex-col justify-center gap-7 text-center lg:text-start"
      >
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Create profile for kids
        </h1>
        <p class="text-2xl lg:text-3xl">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
    </section>


    <!-- **** QUESTION *** -->
    <section
      class="w-[100%] px-5 sm:px-5 lg:px-40 py-16 bg-black text-white border-b-8 border-[#3e3d3d]"
    >
      <div>
        <h1 class="text-6xl font-bold text-center leading-[4.5rem] mb-14">
          Frequently Asked Questions
        </h1>
        <table class="w-full text-2xl text-white" id="question">
          <tr>
            <td class="fullQuestion">
              <div
                onclick="showAnswer(0)"
                id="iconnn"
                class="mb-1 bg-[#353434] hover:bg-[#4a4848] duration-500 cursor-pointer flex justify-between items-center px-5 py-7"
              >
                <p>What is Netflix?</p>
                <i class="fa-solid fa-add"></i>
              </div>
            </td>
          </tr>
          <tr class="w-full">
            <td class="fullQuestion">
              <div
                onclick="showAnswer(1)"
                class="mt-2 mb-1 bg-[#353434] hover:bg-[#4a4848] duration-500 cursor-pointer flex justify-between items-center px-5 py-7"
              >
                <p>How much does Netflix cost?</p>
                <i class="fa-solid fa-add"></i>
              </div>
            </td>
          </tr>
          <tr class="w-full">
            <td class="fullQuestion">
              <div
                onclick="showAnswer(2)"
                class="mt-2 mb-1 bg-[#353434] hover:bg-[#4a4848] duration-500 cursor-pointer flex justify-between items-center px-5 py-7"
              >
                <p>Where can I watch?</p>
                <i class="fa-solid fa-add"></i>
              </div>
            </td>
          </tr>
          <tr class="w-full">
            <td class="fullQuestion">
              <div
                onclick="showAnswer(3)"
                class="mt-2 mb-1 bg-[#353434] hover:bg-[#4a4848] duration-500 cursor-pointer flex justify-between items-center px-5 py-7"
              >
                <p>How do I cancel?</p>
                <i class="fa-solid fa-add"></i>
              </div>
            </td>
          </tr>
          <tr class="w-full">
            <td class="fullQuestion">
              <div
                onclick="showAnswer(4)"
                class="mt-2 mb-1 bg-[#353434] hover:bg-[#4a4848] duration-500 cursor-pointer flex justify-between items-center px-5 py-7"
              >
                <p>What can I watch on Netflix?</p>
                <i class="fa-solid fa-add"></i>
              </div>
            </td>
          </tr>
          <tr class="w-full">
            <td class="fullQuestion">
              <div
                onclick="showAnswer(5)"
                class="mt-2 mb-1 bg-[#353434] hover:bg-[#4a4848] duration-500 cursor-pointer flex justify-between items-center px-5 py-7"
              >
                <p>Is Netflix good for kids?</p>
                <i class="fa-solid fa-add"></i>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="h-full w-full flex flex-col justify-center mt-12">
        <div class="text-white mx-auto flex flex-col gap-7 items-center">
          <p class="text-xl lg:text-2xl text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div
            class="flex sm:flex-row flex-col justify-center items-center gap-3 w-full"
          >
            <input
              type="email"
              placeholder="Email address"
              required="Email is required"
              class="outline-offset-4 text-lg font-normal outline-gray-100 bg-black px-3 sm:w-[23rem] w-[100%] rounded h-[4rem] border focus:border-0"
            />
            <button
              class="bg-red-600 hover:bg-red-700 duration-500 text-3xl font-semibold rounded h-[4rem] w-[13rem]"
            >
              Get Started <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    
<?php require('include/footer.php'); ?>