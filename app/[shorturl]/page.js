import { redirect } from "next/navigation";

import { MongoClient } from "mongodb";


export default async function Page({ params }){
    const shorturl = (await params).shorturl;
    const uri = process.env.MONGODB_URI; 
    if (!uri) {
        throw new Error("Please add your MongoDB URI to the environment variables.");
    }

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db("nanolinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl })
    if(doc){
        redirect(doc.url);
    }else{
        redirect(`${NEXT_PUBLIC_HOST}`);
    }

}