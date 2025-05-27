import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    selectedCourse: "",
    skillLevel: "",
    learningGoal: "",
    educationalQualification: "",
    portfolioLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add custom validation or form submission logic here

    navigate("/academy");
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 bg-white shadow-md rounded dark:text-black"
      >
        <h2 className="text-2xl font-bold mb-4 font-mokoto">
          Registration Form
        </h2>

        {/** Input fields */}
        {[
          {
            label: "First Name",
            name: "firstName",
            type: "text",
            required: true,
          },
          {
            label: "Last Name",
            name: "lastName",
            type: "text",
            required: true,
          },
          { label: "Middle Name", name: "middleName", type: "text" },
          { label: "Email", name: "email", type: "email", required: true },
          {
            label: "Phone Number",
            name: "phoneNumber",
            type: "tel",
            required: true,
          },
          {
            label: "Date of Birth",
            name: "dateOfBirth",
            type: "date",
            required: true,
          },
          {
            label: "Educational Qualification",
            name: "educationalQualification",
            type: "text",
            required: true,
          },
          {
            label: "Portfolio Link (LinkedIn, GitHub, Behance, etc.)",
            name: "portfolioLink",
            type: "url",
          },
        ].map(({ label, name, type, required }) => (
          <div className="mb-4" key={name}>
            <label className="block mb-2">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required={required}
              className="border p-2 w-full"
            />
          </div>
        ))}

        {/** Dropdowns */}
        <div className="mb-4">
          <label className="block mb-2">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Selected Course</label>
          <select
            name="selectedCourse"
            value={formData.selectedCourse}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          >
            <option value="">Select Course</option>
            <option value="react-native">React Native</option>
            <option value="html-css">HTML & CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="flutter">Flutter</option>
            <option value="ai">AI</option>
            <option value="machine-learning">Machine Learning</option>
            <option value="figma">Figma</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Skill Level</label>
          <select
            name="skillLevel"
            value={formData.skillLevel}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          >
            <option value="">Select Skill Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Learning Goal</label>
          <select
            name="learningGoal"
            value={formData.learningGoal}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          >
            <option value="">Select Learning Goal</option>
            <option value="build-an-app">Build an App</option>
            <option value="get-a-job">Get a Job</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      <Footer />
    </>
  );
};

export default RegistrationForm;
