import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const apiDomain = process.env.API_DOMAIN || null;
async function getSearchResults(searchParams) {
  try {
    // Handle the case when the domain is not available yet
    if (!apiDomain) {
      return null;
    }
    const queryString = new URLSearchParams(searchParams).toString();
    const response = await fetch(
      `${apiDomain}/api/properties/search?${queryString}`
    );
    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

// {
//  params: {},
//  searchParams: { location: '11001', property_type: 'All' }
// }
const SearchResultsPage = async (params) => {
  const { searchParams } = params;
  const properties = await getSearchResults(searchParams);

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <PropertySearchForm />
        </div>
      </section>
      <section class="px-4 py-6">
        <div class="container-xl lg:container m-auto px-4 py-6">
          <Link
            href="/properties"
            className="flex items-center text-blue-500 hover:underline mb-3"
          >
            <FaArrowAltCircleLeft className="mr-2 mb-1" /> Back to properties
          </Link>
          <h1 className="text-2xl mb-4">Search Results</h1>
          {!properties || properties.length == 0 ? (
            <div>No Properties Found</div>
          ) : (
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <PropertyCard property={property} key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
