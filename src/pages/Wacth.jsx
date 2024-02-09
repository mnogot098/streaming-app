import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import im1 from "../assets/images/img1.jpeg";
import im2 from "../assets/images/img2.jpeg";
import im3 from "../assets/images/img3.png";
import im4 from "../assets/images/img4.webp";
import { Link } from "react-router-dom";

const Wacth = () => {
  return (
    <div className="shadow-lg text-white">
      <VideoPlayer />
      <div className="flex flex-col py-4">
        {/** Seaso episodes */}
        <div className="w-64">
          <label
            for="small"
            class="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Select season
          </label>
          <select
            id="small"
            class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-500 rounded-sm bg-gray-50  focus:border-black-500 dark:bg-gray-800  dark:placeholder-gray-400 dark:text-white"
          >
            <option selected>Season 1</option>
            <option value="s1">Season 2</option>
            <option value="s2">Season 3</option>
            <option value="s3">Season 4</option>
            <option value="s4">Season 5</option>
          </select>
        </div>
        {/** episodes */}
        <div className="grid grid-cols-8 my-4">
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
          <button className="bg-gray-700 px-4 py-2 mx-2 my-2 font-bold hover:bg-gray-800 ease-in-out duration-300">
            <Link>Episode1</Link>
          </button>
        </div>
        {/* Details of the video*/}
        <div className="p-4 bg-gray-800 flex">
          <div className="flex-1">
            <h3 className="text-xl font-bold py-2">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur laborum ipsa corrupti explicabo expedita veniam natus
              rerum? Ratione veritatis dicta sint quo ab explicabo? Est quasi
              numquam rem. Eveniet, atque!
            </p>
            <div className=" flex flex-rows gap-3 my-4 py-4">
              <span>32min</span>
              <span>08/02/2024</span>
              <span>Genre:Drama</span>
              <div className="flex gap-2">
                <span>7/10</span>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ded709"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <h3 className="text-xl font-bold my-4">Casting</h3>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center">
                <img src={im1} alt="" className="rounded-sm"/>
                <span>Actor 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wacth;
