import React, { useState } from "react";
import Title from "../components/Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);

    formData.append("access_key", "4c736dd5-a371-4259-ba5a-b87cfa573604");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error(error.message || "Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contactUs"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Contact us"
        desc="We are a team of professionals who are passionate about what they do and dedicated to delivering exceptional results."
      />

      <motion.form
      initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, deplay: 0.4 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
        <div>
          <p className="mb-2 text-sm font-medium dark:text-gray-600">
            Your Name
          </p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person" />
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              className="w-full p-3 text-sm outline-none dark:text-white"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <p className="mb-2 text-sm font-medium dark:text-gray-600">
            Email Id
          </p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="email" />
            <input
              type="email"
              placeholder="john@example.com"
              name="email"
              className="w-full p-3 text-sm outline-none dark:text-white"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium dark:text-gray-600">Message</p>
          <textarea
            rows={8}
            placeholder="Write your message here..."
            name="message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer transition-all hover:scale-105 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Sending..." : "Submit"}
          {!isLoading && (
            <img src={assets.arrow_icon} alt="arrow" className="w-4" />
          )}
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
