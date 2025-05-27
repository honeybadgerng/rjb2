import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add validation logic if needed

    // Redirect to the academy index page after submission
    navigate("/academy");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded dark:text-black"
    >
      <h2 className="text-2xl font-bold mb-4 font-mokoto">Registration Form</h2>
      <div className="mb-4">
        <label className="block mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="border p-2 w-full "
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
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
        <label className="block mb-2">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
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
      <div className="mb-4">
        <label className="block mb-2">Educational Qualification</label>
        <input
          type="text"
          name="educationalQualification"
          value={formData.educationalQualification}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Portfolio Link (LinkedIn, GitHub, Behance, etc.)
        </label>
        <input
          type="url"
          name="portfolioLink"
          value={formData.portfolioLink}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
