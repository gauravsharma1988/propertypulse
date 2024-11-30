import PropertyCard from "@/components/PropertyCard";

const apiDomain = process.env.API_DOMAIN || null;

// function:fetchProperties fetches properties using api
async function fetchProperties() {
  try {
    // Handle the case when the domain is not available yet
    if (!apiDomain) {
      return [];
    }
    const response = await fetch(`${apiDomain}/api/properties`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new error("Failed to fetch Properties");
    }

    const proprtiesData = await response.json();
    //console.log(proprtiesData);
    return proprtiesData;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const PropertiesPage = async () => {
  const properties = await fetchProperties();
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        {properties.length == 0 ? (
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
  );
};

export default PropertiesPage;
