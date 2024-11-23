import { MongoClient } from "mongodb";

export async function POST(request) {
    const uri = process.env.MONGODB_URI; // Your MongoDB connection URI
    if (!uri) {
        throw new Error("Please add your MongoDB URI to the environment variables.");
    }

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        // Connect to the database
        await client.connect();
        const db = client.db("nanolinks");
        const collection = db.collection("url");

        // Parse request body
        const body = await request.json();
        const { url, shortUrl } = body;

        // Validate input
        if (!url || !shortUrl) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: true,
                    message: "Invalid input!",
                }),
                { status: 400 }
            );
        }

        // Check if the short URL already exists
        const doc = await collection.findOne({ shorturl: shortUrl });
        if (doc) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: true,
                    message: "Short URL already exists!",
                }),
                { status: 409 }
            );
        }

        // Insert the new short URL mapping
        await collection.insertOne({
            url,
            shorturl: shortUrl,
        });

        return new Response(
            JSON.stringify({
                success: true,
                error: false,
                message: "URL Generated Successfully",
            }),
            { status: 201 }
        );
    } catch (error) {
        console.error("Error in database operation:", error);
        return new Response(
            JSON.stringify({
                success: false,
                error: true,
                message: "Internal Server Error",
            }),
            { status: 500 }
        );
    } finally {
        // Ensure the client is closed
        await client.close();
    }
}
