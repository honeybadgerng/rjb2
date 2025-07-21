import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ClientRegistration() {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-2">
          Get Started with RJB World
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below to let us know how we can serve your business.
        </p>

        <form
          action="https://formsubmit.co/rjbxclusive@gmail.com"
          method="POST"
          className="space-y-6 bg-white p-6 rounded-xl shadow"
        >
          {/* Hidden Config */}
          <input
            type="hidden"
            name="_subject"
            value="New Client Registration - RJB World"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://www.rjbworld.org/client-registration/Thank-you-client"
          />

          {/* Business Name */}
          <div>
            <label className="block font-semibold mb-1">
              Business/Organization Name *
            </label>
            <input
              type="text"
              name="Business Name"
              required
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="e.g. Mediplus Pharmacy"
            />
          </div>

          {/* Business Type */}
          <div>
            <label className="block font-semibold mb-1">
              Type of Business *
            </label>
            <select
              name="Business Type"
              required
              className="w-full border border-gray-300 p-3 rounded"
            >
              <option value="">Select Type</option>
              <option>Hospital / Clinic</option>
              <option>Restaurant / Lounge</option>
              <option>School / Academy</option>
              <option>Retail / Online Store</option>
              <option>Real Estate / Property</option>
              <option>Other</option>
            </select>
          </div>

          {/* Services Interested In */}
          <div>
            <label className="block font-semibold mb-1">
              Service of Interest *
            </label>
            <select
              name="Interested Service"
              required
              className="w-full border border-gray-300 p-3 rounded"
            >
              <option value="">Select a Service</option>
              <option>Mobile App</option>
              <option>Website</option>
              <option>Appointment Booking Tool</option>
              <option>ERP System</option>
              <option>Multiple Services</option>
            </select>
          </div>

          {/* Contact Name */}
          <div>
            <label className="block font-semibold mb-1">Contact Person *</label>
            <input
              type="text"
              name="Contact Name"
              required
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your full name"
            />
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Phone Number *</label>
              <input
                type="tel"
                name="Phone Number"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="Email"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">City/Town *</label>
              <input
                type="text"
                name="City"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">State *</label>
              <select
                name="State"
                required
                className="w-full border border-gray-300 p-3 rounded"
              >
                <option value="">Select State</option>
                <option>Lagos</option>
                <option>Ogun</option>
                <option>Abuja</option>
                <option>Oyo</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Agent Referral Code */}
          <div>
            <label className="block font-semibold mb-1">
              Referral Agent Name or Coupon (optional)
            </label>
            <input
              type="text"
              name="Referral Agent"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="e.g. Jane from Mushin"
            />
          </div>

          {/* Message or Additional Notes */}
          <div>
            <label className="block font-semibold mb-1">
              Additional Information / Notes
            </label>
            <textarea
              name="Notes"
              rows={4}
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Let us know any specific needs or custom request..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/80 transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
