import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import carList from "../../data/carList.json";
import toast from "react-hot-toast";
import Modal from "../../components/Modal";

const CarDetails = () => {
  const user = true;
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const [pickDate, setPickDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [returnDate, setReturnDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleBooked = () => {
    toast.success("Car Booked");
    setShow(false);
  };

  const calculatePrice = () => {
    if (pickDate && returnDate) {
      const days = Math.max(
        1,
        Math.ceil(
          (new Date(returnDate) - new Date(pickDate)) / (1000 * 60 * 60 * 24)
        )
      );
      return days * carDetails?.discountedPrice;
    }
    return carDetails?.discountedPrice;
  };

  useEffect(() => {
    async function fetchCarDetails() {
      setLoading(true);

      try {
        const selectedCar = carList.find((car) => car.id === Number(id));

        if (!selectedCar) {
          toast.error("Car not found!");
        } else {
          setCarDetails(selectedCar);
        }
      } catch (error) {
        console.error("Car-Details Error", { error });
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }

    fetchCarDetails();
  }, [id]);

  if (loading) {
    return (
      <section className="py-16 flex justify-center items-center">
        <div className="animate-pulse text-xl font-semibold text-gray-600">
          Loading car details...
        </div>
      </section>
    );
  }

  if (!carDetails) return null;

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Car Image */}
        <div>
          <img
            src={carDetails.img}
            alt={carDetails.name}
            className="rounded-xl shadow-xl w-full"
          />
        </div>

        {/* Car Details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {carDetails.name} ({carDetails.year})
          </h2>

          <p className="text-gray-600 mt-2">{carDetails.about}</p>

          <ul className="mt-6 space-y-2 text-gray-800">
            <li>
              <strong>Category:</strong> {carDetails.category}
            </li>
            <li>
              <strong>Seats:</strong> {carDetails.seats}
            </li>
            <li>
              <strong>Fuel Type:</strong> {carDetails.fuel}
            </li>
            <li>
              <strong>Model:</strong> {carDetails.model}
            </li>
            <li>
              <strong>Mileage:</strong> {carDetails.mileage} km/l
            </li>
            <li>
              <strong>Transmission:</strong>{" "}
              {carDetails.transmission ? "Automatic" : "Manual"}
            </li>
          </ul>

          {/* Pricing */}
          <div className="mt-6">
            <p className="text-xl font-semibold">
              Price:{" "}
              <span className="text-green-600">
                ₹{carDetails.discountedPrice}{" "}
                <span className="text-xs">/- per day</span>
              </span>
              <span className="line-through text-red-500 ml-6">
                ₹{carDetails.price}
              </span>
            </p>

            <span className="text-sm inline-block mt-2 mb-8 bg-rose-600 px-3 py-1 rounded text-white font-semibold">
              Save {carDetails.discount}%
            </span>
          </div>

          {!user ? (
            <Link className="mt-8 w-full md:w-auto px-6 py-3 bg-teal-700 hover:bg-teal-900 transition text-white font-semibold rounded-lg">
              Please Login to Book this car
            </Link>
          ) : (
            <button
              onClick={() => setShow(!show)}
              className="mt-3 w-full md:w-auto px-6 py-3 bg-teal-700 hover:bg-teal-900 transition text-white font-semibold rounded-lg"
            >
              Book Now
            </button>
          )}
        </div>

        {/* Modal */}
        {show && (
          <Modal>
            <h2
              id="modalTitle"
              className="text-xl font-bold text-gray-900 sm:text-2xl"
            >
              {carDetails.name}
            </h2>

            <div className="mt-4 flex flex-col items-start gap-2 w-2xs">
              <label htmlFor="pick">Pick date</label>
              <input
                className="w-full px-3 py-2 outline-1 rounded-3xl"
                id="pick"
                type="date"
                value={pickDate}
                onChange={(e) => setPickDate(e.target.value)}
              />

              <label htmlFor="end">End date</label>
              <input
                className="w-full px-3 py-2 outline-1 rounded-3xl"
                id="end"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />

              <h1 className="text-xl mt-3 text-green-500 font-semibold">
                Grand Total: ₹{calculatePrice()}
              </h1>

              <p className="text-gray-500 font-light text-xs">
                Note: Please return before 10:am else extra charges apply
              </p>
            </div>

            <footer className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShow(!show)}
                className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={handleBooked}
                className="rounded bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
              >
                Done
              </button>
            </footer>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default CarDetails;
