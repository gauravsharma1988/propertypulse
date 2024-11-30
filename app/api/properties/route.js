import connectDB from "@/lib/db";
import Property from "@/models/Property";

// GET /api/properties/
export const GET = async (request) => {
  try {
    // first connect to DB
    await connectDB();
    // fetch property
    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong: " + error, { status: 500 });
  }

  //
};

export const POST = async () => {
  return new Response("Hello From POST Property API", { status: 200 });
};
