import React from "react";

const Home = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto  max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        {/* TEXT SECTION */}
        <div className="max-w-fit">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Drive your dream car with
            <strong className="text-teal-600"> Rentio </strong>
          </h1>

          <p className="mt-5   text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Rent premium and affordable cars in just a few clicks. Whether it’s
            a weekend trip or a business ride, Rentio gives you easy booking,
            transparent pricing, and the best car rental experience — fast,
            flexible, and hassle-free.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
              href="#"
            >
              Get Started
            </a>
            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* ✅ SVG illustration directly here */}
        {/* ✅ Better Car SVG Illustration */}
        <div className="flex justify-center mt-10 md:mt-0">
          <svg
            width="500"
            height="350"
            viewBox="0 0 900 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="paint0" x1="0" y1="0" x2="900" y2="0">
                <stop offset="0%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>

            {/* Car body */}
            <path
              d="M150 320 C180 250 260 190 380 190 H600 C720 190 780 260 810 320 L840 390 C850 420 830 450 800 450 H140 C110 450 90 420 100 390 L150 320Z"
              fill="url(#paint0)"
            />

            {/* Windows */}
            <path
              d="M380 200 H580 C620 200 640 240 650 270 L660 300 H350 L360 270 C370 240 350 200 380 200Z"
              fill="white"
              opacity="0.9"
            />

            {/* Wheels */}
            <circle
              cx="300"
              cy="450"
              r="70"
              fill="white"
              stroke="#1f2937"
              strokeWidth="15"
            />
            <circle cx="300" cy="450" r="35" fill="#1f2937" />

            <circle
              cx="680"
              cy="450"
              r="70"
              fill="white"
              stroke="#1f2937"
              strokeWidth="15"
            />
            <circle cx="680" cy="450" r="35" fill="#1f2937" />

            {/* Road */}
            <rect x="0" y="510" width="900" height="12" rx="6" fill="#e5e7eb" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
