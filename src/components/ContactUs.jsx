import React, { useState } from "react";
import "../css/tailwind.css";
import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    orgstn: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    orgstn: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // handleInput method
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handling form submit & form validations
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validation for required fields
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!formData.orgstn.trim()) {
      formErrors.orgstn = "Organization Name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email ID is required";
    }
    if (!formData.phoneno.trim()) {
      formErrors.phoneno = "Contact Number is required";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    // Validation for name, organization name, and message
    const stringRegex = /^[a-zA-Z\s]*$/;
    if (!stringRegex.test(formData.name.trim())) {
      formErrors.name = "Invalid Name";
    }
    if (!stringRegex.test(formData.orgstn.trim())) {
      formErrors.orgstn = "Invalid Organization Name";
    }
    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      formErrors.email = "Invalid Email";
    }
    // Validation for phone number
    const phoneRegex = /^\d{1,10}$/;
    if (!phoneRegex.test(formData.phoneno.trim())) {
      formErrors.phoneno = "Invalid Phone Number";
    }

    setErrors(formErrors);

    // Submit the form if no errors
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission here

      console.log("Fields cleared");
      setSuccessMessage("Form Data Successfully Submitted!'");

      setTimeout(() => {
        console.log("Form submitted successfully:", formData);

        setSuccessMessage(""); // Clearing the success message
        setFormData({
          name: "",
          orgstn: "",
          email: "",
          phoneno: "",
          message: "",
        });
      }, 5000);
    }
  };

  return (
    <>
      <div className="wrapper">
        {/* ===================Header=================== */}
        <header className="header">
          <div className="header-container">
            <img src="src/assets/website-logo.svg" alt="logo" />
          </div>
        </header>
        {/* ==================Contact-Form================== */}
        <section
          className="form-container 
         bg-[#fff] shadow-[0px_0px_30px_0px_#0000001A] "
        >
          {/* ==================Container================== */}
          <div className="form-inner-container flex justify-between">
            {/* ================left-form================ */}
            <div className="w-full xl:w-[40%]">
              <h4 className="text-[25px] md:text-[35px]  form-heading font-bold">
                Got any questions?
              </h4>
              <p className="text-[15px] md:text-[18px] font-medium">
                Let’s discuss it over a cup of coffee.
              </p>
            </div>
            {/* ================right-form================ */}
            <div className="w-full flex-grow xl:w-[60%] ">
              <form action="" onSubmit={handleFormSubmit}>
                <div className="user-data flex flex-col">
                  <div className="user-data-inner relative flex">
                    <div className="w-[270px] md:w-1/2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="peer user-input"
                        placeholder="john"
                      />
                      <label
                        for="name"
                        name="name"
                        className="user-data-label peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Name
                      </label>
                      {errors.name && (
                        <span className="text-red-500">{errors.name}</span>
                      )}
                    </div>
                    <div className="w-[270px] md:w-1/2">
                      <input
                        id="orgstn"
                        name="orgstn"
                        type="text"
                        value={formData.orgstn}
                        onChange={handleInputChange}
                        className="peer user-input"
                        placeholder="john"
                      />
                      <label
                        for="orgstn"
                        name="orgstn"
                        className="user-data-label1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Organisation Name
                      </label>
                      {errors.orgstn && (
                        <span className="text-red-500">{errors.orgstn}</span>
                      )}
                    </div>
                  </div>
                  <div className="user-data-inner relative flex">
                    <div className="w-[270px] md:w-1/2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="peer user-input"
                        placeholder="john"
                      />
                      <label
                        for="email"
                        name="email"
                        className="user-data-label peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email ID
                      </label>
                      {errors.email && (
                        <span className="text-red-500">{errors.email}</span>
                      )}
                    </div>
                    <div className="w-[270px] md:w-1/2">
                      <input
                        id="phoneno"
                        name="phoneno"
                        type="number"
                        value={formData.phoneno}
                        onChange={handleInputChange}
                        className="peer user-input"
                        placeholder="john"
                      />
                      <label
                        for="phoneno"
                        name="phoneno"
                        className="user-data-label1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Contact Number
                      </label>
                      {errors.phoneno && (
                        <span className="text-red-500">{errors.phoneno}</span>
                      )}
                    </div>
                  </div>
                  <div className="user-data-inner relative flex  justify-between gap-[1rem]">
                    <div className="flex items-center w-[270px] md:w-1/2">
                      <textarea
                        id="message"
                        name="message"
                        type="text"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="john"
                        className="peer user-textarea-input placeholder-transparent"
                      ></textarea>
                      <label
                        for="message"
                        name="message"
                        className="user-textarea-label 
                        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Message
                      </label>
                      {errors.message && (
                        <span className="text-red-500">{errors.message}</span>
                      )}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-end  md:w-1/2">
                      <button
                        type="submit"
                        className="bg-[#00ADEE] text-white pl-[30px] pr-[30px] py-[13px] rounded-[50px] submit-btn"
                      >
                        Submit <FaArrowRight className="inline-block w-[rem]" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {successMessage && (
                <p className="success-label">{successMessage}</p>
              )}
            </div>
          </div>
        </section>

        {/* ================Map================ */}
        <section className="map-banner-img w-[100%] h-[638px] relative ">
          <div className="map-address-main">
            <div
              className="map-address bg-gradient-to-b from-blue-900 to-indigo-900 
               shadow-[0px_0px_30px_0px_#0000001A] p-[50px] text-white
            rounded-[10px] flex flex-col gap-[1rem]"
            >
              <h5 className="font-semibold text-[27px]">OnestopNDT</h5>
              <p className="font-medium text-[16px]">
                PAP/R/406 Rabale MIDC Near Dol Electric Company Rabale MIDC,
                Navi Mumbai - 400701.
              </p>
              <p className="font-medium text-[16px]">
                Landline - 022 4131 0099
              </p>
              <div className="flex gap-[10px] items-center">
                <img
                  loading="lazy"
                  src="src/assets/google-map-icon.svg"
                  alt="map-img"
                />
                <p className="">Google map Link</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================Banners================ */}
        <section className="service-banners ">
          <div className="relative">
            <img
              loading="lazy"
              className="block sm:hidden"
              width="170px"
              height="170px"
              src="src/assets/mobile-banner-1.png"
              alt="mobile-banner-1-img"
            />
            <img
              loading="lazy"
              className="hidden sm:block"
              width="170px"
              height="170px"
              src="src/assets/banner-1.png"
              alt="mobile-banner-1-imgbanner-1-img"
            />
            <h5 className="text-[14px] absolute top-[60%] left-[15%] text-white text-center py-2">
              Companies
            </h5>
          </div>
          <div className="relative">
            <img
              loading="lazy"
              className="block sm:hidden"
              width="170px"
              height="170px"
              src="src/assets/mobile-banner-2.png"
              alt="mobile-banner-2-img"
            />
            <img
              loading="lazy"
              className="hidden sm:block"
              width="170px"
              height="170px"
              src="src/assets/banner-2.png"
              alt="banner-2-img"
            />
            <h5 className="text-[14px] absolute top-[60%] left-[35%] text-white text-center py-2">
              Jobs
            </h5>
          </div>
          <div className="relative">
            <img
              loading="lazy"
              className="block sm:hidden"
              width="170px"
              height="170px"
              src="src/assets/mobile-banner-3.png"
              alt="mobile-banner-3-img"
            />
            <img
              loading="lazy"
              className="hidden sm:block"
              width="170px"
              height="170px"
              src="src/assets/banner-3.png"
              alt="banner-3-img"
            />
            <h5 className="text-[14px] absolute top-[60%] left-[35%] text-white text-center py-2">
              Articles
            </h5>
          </div>
          <div className="relative">
            <img
              loading="lazy"
              className="block sm:hidden"
              width="170px"
              height="170px"
              src="src/assets/mobile-banner-4.png"
              alt="mobile-banner-4-img"
            />
            <img
              loading="lazy"
              className="hidden sm:block"
              width="170px"
              height="170px"
              src="src/assets/banner-4.png"
              alt="banner-4-img"
            />
            <h5 className="text-[14px] absolute top-[60%] left-[30%] text-white text-center py-2">
              Webinars
            </h5>
          </div>
          <div className="relative">
            <img
              loading="lazy"
              className="block sm:hidden"
              width="170px"
              height="170px"
              src="src/assets/mobile-banner-5.png"
              alt="mobile-banner-5-img"
            />
            <img
              loading="lazy"
              className="hidden sm:block"
              width="170px"
              height="170px"
              src="src/assets/banner-5.png"
              alt="banner-5-img"
            />
            <h5 className="text-[14px] absolute top-[60%] left-[35%] text-white text-center py-2">
              Forums
            </h5>
          </div>
          <div className="relative">
            <img
              loading="lazy"
              className="block sm:hidden"
              width="170px"
              height="170px"
              src="src/assets/mobile-banner-6.png"
              alt="mobile-banner-6-img"
            />
            <img
              loading="lazy"
              className="hidden sm:block"
              width="170px"
              height="170px"
              src="src/assets/banner-6.png"
              alt="banner-6-img"
            />
            <h5 className="leading-[17.07px] text-[14px] absolute top-[60%] left-[7%] text-white text-center py-2">
              Application Notes
            </h5>
          </div>
        </section>

        {/* ================footer================ */}

        <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 pl-[135px] pr-[135px] pt-[70px] pb-[30px] text-white flex flex-col gap-[50px]">
          <div className="flex items-end justify-end self-end">
            <img src="src/assets/footer-logo.png" alt="footer-logo" />
          </div>
          <div className="footer-bottom">
            <p className="border-b border-white"></p>
            <p className="mt-[30px]">What is One Stop NDT?</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactUs;
