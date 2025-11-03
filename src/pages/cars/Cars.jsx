import React from "react";

const Cars = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <h1 className="text-3xl font-semibold mb-12 text-center">Available Cars</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="h-40 rounded-lg bg-gray-200 flex items-center justify-center font-semibold">
            Car - 1
          </div>
          <div className="h-40 rounded-lg bg-gray-200 flex items-center justify-center font-semibold">
            Car - 2
          </div>
          <div className="h-40 rounded-lg bg-gray-200 flex items-center justify-center font-semibold">
            Car - 3
          </div>
          <div className="h-40 rounded-lg bg-gray-200 flex items-center justify-center font-semibold">
            Car - 4
          </div>
          <div className="h-40 rounded-lg bg-gray-200 flex items-center justify-center font-semibold">
            Car - 5
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cars;
