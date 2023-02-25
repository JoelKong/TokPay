import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "PATCH") {
    const { newBalance, id } = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection("users");
    const userData = await collection.findOne({ id: id });
    if (userData) {
      await collection.updateOne(
        { id: id },
        { $set: { currentBalance: newBalance } }
      );
      res.status(200).json({ message: "Top Up Successful!" });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  }
}

export default handler;
