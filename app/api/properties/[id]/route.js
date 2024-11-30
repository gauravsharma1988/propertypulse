import connectDB from "@/lib/db";
import Property from "@/models/Property";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    // first connect to DB
    await connectDB();
    const id = (await params).id;
    // fetch property
    const property = await Property.findById({ _id: id });
    if (!property) return new Response("Property Not Found", { status: 404 });

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong: " + error, { status: 500 });
  }

  //
};
