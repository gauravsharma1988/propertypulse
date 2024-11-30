"use client";
import { useRouter } from "next/navigation"; // added in new app dir. --  for old pages way we used to use next/router

const PropertySearchForm = () => {
  const router = useRouter();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    const { location, property_type } = ev.target.elements;
    if (location.value == "" && property_type.value == "All") {
      router.push(`/properties`);
      return;
    }
    router.push(
      `/properties/search-results?location=${location.value}&property_type=${property_type.value}`
    ); // stack push allows back button
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
    >
      <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
        <label htmlFor="location" className="sr-only">
          Location
        </label>
        <input
          type="text"
          name="location"
          placeholder="Enter Location (City, State, Zip, etc"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="w-full md:w-2/5 md:pl-2">
        <label htmlFor="property-type" className="sr-only">
          Property Type
        </label>
        <select
          name="property_type"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="Condo">Condo</option>
          <option value="House">House</option>
          <option value="Cabin Or Cottage">Cabin or Cottage</option>
          <option value="Loft">Loft</option>
          <option value="Room">Room</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default PropertySearchForm;
