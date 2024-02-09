import React from "react";

const Home = () => {
  return (
    <div className="text-white w-full h-90 mt-16 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold py-4">
        Unlimited movies and series, and much more.
        </h1>
        <span className="text-2xl inline-block py-4">
          Où que vous soyez. Annulez à tout moment.
        </span>
        <p>
          Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
          abonner ou réactiver votre <br></br>abonnement.
        </p>
        <button className=" my-8 bg-red-600 px-6 py-2 rounded-sm flex mx-auto items-center gap-2 hover:bg-red-700 transition ease-in-out duration-500">
          <span className="text-2xl font-bold">Watch now</span>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
