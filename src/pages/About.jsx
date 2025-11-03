import React from "react";
import CountUp from "react-countup";

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===== FIRST SECTION (TEXT + IMAGE) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* TEXT CONTENT */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Why Choose <span className="text-teal-600">Rentio?</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Rentio makes car rentals simple, affordable, and quick. No hidden
              fees, no unnecessary paperwork — just choose your car and drive.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you're planning a vacation or a business trip, Rentio
              ensures comfort and reliability with top-quality vehicles and
              excellent support.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-teal-700"
            >
              Contact Us
            </a>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2670&auto=format&fit=crop"
              alt="Car Rental"
              className="rounded-2xl shadow-lg w-full max-h-[380px] object-cover"
            />
          </div>
        </div>

        {/* ===== COUNTER SECTION (NEW) ===== */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-teal-600">
              <CountUp end={1200} duration={2} />+
            </h3>
            <p className="mt-2 text-gray-600 text-sm">Satisfied Customers</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-teal-600">
              <CountUp end={150} duration={2} />+
            </h3>
            <p className="mt-2 text-gray-600 text-sm">Cars Available</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-teal-600">
              <CountUp end={10} duration={2} />+
            </h3>
            <p className="mt-2 text-gray-600 text-sm">Years of Experience</p>
          </div>
        </div>

        {/* ===== SECOND SECTION (MISSION + VISION) — KEPT AS YOU REQUESTED ===== */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to offer seamless mobility solutions that provide
              comfort and convenience to every customer. We aim to make renting
              a car just as enjoyable as driving one.
            </p>

            <h2 className="mt-10 text-3xl font-semibold text-gray-900">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We aspire to become the most trusted car rental brand, known for
              excellent service quality, affordability, and reliability.
            </p>
          </div>

          {/* IMAGE BLOCK REMAINS — NOT REMOVED */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=2670&auto=format&fit=crop"
              alt="Our Mission"
              className="rounded-2xl shadow-lg w-full max-h-[380px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
