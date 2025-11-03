import React from "react";

const CarCard = ({ car }) => {
  return (
    <div>
      <a
        href="#"
        className="relative block rounded-tr-3xl border border-gray-100"
      >
        {/* Discount Badge */}
        <span className="absolute text-sm -top-px -right-px rounded-tr-2xl rounded-bl-2xl bg-rose-600 px-2 py-2 font-medium tracking-widest text-white uppercase">
          Save {car.discount}%
        </span>

        {/* Car Image */}
        <img
          src={car.img}
          alt={car.name}
          className="h-full max-h-44  w-full object-contain rounded-tr-3xl "
        />

        {/* Content */}
        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900 capitalize">
            {car.name}
          </strong>

          <ul className="flex gap-2 justify-center items-center my-3 text-lg font-medium">
            <li>{car.category}</li>
            <li>• {car.seats} Seats</li>
            <li>• {car.fuel}</li>
          </ul>

          <p className="mt-2 text-pretty text-gray-700">
            {car.about.substring(0, 80) + "..."}
          </p>

          {/* Price section */}
          <h2 className="mt-3 text-lg font-semibold">
            ₹{car.discountedPrice}
            <span className="text-xs">/- per day</span>
            <span className="text-gray-500 ml-4 line-through">
              ₹{car.price}
            </span>
          </h2>
        </div>
      </a>
    </div>
  );
};

export default CarCard;
