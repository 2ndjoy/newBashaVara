import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";
import { Link } from "react-router-dom";

function FilterBox() {
  const { user, loading } = useContext(AuthContext);
  const [dataa, setData] = useState([]);
  const initialFormData = {
    location: "",
    size: "",
  };

  const imagUrl =
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    // console.log(data);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <div
      className="text-white"
      style={{
        backgroundImage: `linear-gradient( rgba(2, 41, 88, 6),rgba(75, 69, 69, 0.3)), url(${imagUrl})`,
        padding: "4vw",
        backgroundSize: "cover", // Adjust backgroundSize as needed
        backgroundRepeat: "no-repeat", // Adjust backgroundRepeat as needed
        backgroundPosition: "center", // Adjust backgroundPosition as needed
        width: "100%",
        height: "70%", // Set an appropriate height for the container
      }}
    >
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Location */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-slate-100-700 font-bold mb-2"
          >
            <p className="text-white">Location</p>
          </label>
          <select
            name="location"
            value={formData.location}
            required
            onChange={handleChange}
            className="shadow text-black appearance-none border rounded w-full py-2 px-3 text-slate-100-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a location</option>
            <option value="sylhet">Sylhet</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="barishal">Barishal</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="khulna">Khulna</option>
          </select>
        </div>

        {/* Size */}
        {/* Size */}
        <div className="mb-4">
          <label
            htmlFor="size"
            className="block text-slate-100-700 font-bold mb-2"
          >
            <p className="text-white">Apartment Size</p>
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="shadow text-black appearance-none border rounded w-full py-2 px-3 text-slate-100-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default FilterBox;
