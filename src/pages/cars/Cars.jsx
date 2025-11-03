import React, { useState } from "react";
import carList from "../../data/carList.json";
import CarCard from "../../components/CarCard";
import { Link } from "react-router";

const Cars = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-12 text-center">
          Available Cars
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carList &&
            carList.length > 0 &&
            carList.map((car) => (
              <Link
                to={`/cars/${car.id}`}
                key={car.id}
                style={{ textDecoration: "none" }}
              >
                <CarCard car={car} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
