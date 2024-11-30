import connectDB from "@/lib/db";
import Property from "@/models/Property";

// GET /api/properties/search?location=....
export const GET = async (request, { params }) => {
  try {
    const searchParamsObj = request.nextUrl.searchParams; // type URLSearchParams so get will work
    const location = searchParamsObj.get("location");
    const property_type = searchParamsObj.get("property_type");

    // first connect to DB
    await connectDB();

    // create search query
    //db.products.find( { sku: { $regex: /^ABC/i } } ) .. i = insensitive
    // Create a regex pattern for location search
    const locationPattern = new RegExp(location, "i"); // i = insensitive
    //console.log(locationPattern.toString());    // if location=NeyWork ---> /new york/i --> location LIKE new york
    // --> will match the string in field anywhere(start /^ , end /$, between)

    // make a regex pattern to search inside many fields

    let whereQuery = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { "location.street": locationPattern },
        { "location.city": locationPattern },
        { "location.state": locationPattern },
        { "location.zipcode": locationPattern },
      ],
    };

    if (property_type !== "All") {
      const typePattern = new RegExp(property_type, "i");
      whereQuery.type = typePattern;
    }

    // search properties
    const properties = await Property.find(whereQuery);
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong: " + error, { status: 500 });
  }
};

/*
await MyModel.find({ name: 'john', age: 18 })
// find all documents named john and at least 18
await MyModel.find({ name: 'john', age: { $gte: 18 } })
// find all documents named john and either 40 or 50 of age
await MyModel.find({ name: 'john', $or: [{age: 40}, {age: 50}] })
// executes, name LIKE john(or JOHN, JOhn  ....) and only selecting the "name" and "friends" fields
await MyModel.find({ name: /john/i }, 'name friends')

*/
