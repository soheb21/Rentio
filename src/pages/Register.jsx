import React from "react";

const Register = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className="h-full ">
            <h1 className="text-3xl font-semibold mb-6">Register</h1>

            <form className="max-w-md mx-auto my-12">
              <div className="grid md:grid-cols-2 md:gap-6">
                
                {/* FIRST NAME */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                    border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="absolute left-0 text-sm text-gray-500 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-teal-600 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>

                {/* LAST NAME */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                    border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="absolute left-0 text-sm text-gray-500 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-teal-600 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>

              {/* PHONE */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                  border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="absolute left-0 text-sm text-gray-500 duration-300 transform 
                  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-teal-600 
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                  peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>

              {/* EMAIL */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                  border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="absolute left-0 text-sm text-gray-500 duration-300 transform 
                  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-teal-600 
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                  peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              {/* PASSWORD */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                  border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="absolute left-0 text-sm text-gray-500 duration-300 transform 
                  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-teal-600 
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                  peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none
                focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Register
              </button>
            </form>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop"
              className="rounded w-full"
              alt="register banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
