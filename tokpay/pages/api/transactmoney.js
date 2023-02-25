import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "PATCH") {
    let amountDeducted = 0;
    const { id, email, currentBalance } = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection("users");
    const userData = await collection.findOne({ id: id });
    if (userData) {
      for (let i = 0; i < email.length; i++) {
        await collection.findOneAndUpdate(
          { email: email[i].email },
          { $inc: { currentBalance: parseInt(email[i].amount) } }
        );
        amountDeducted += parseInt(email[i].amount);
      }
      const deductedAccount = await collection.findOneAndUpdate(
        { id: id },
        { $inc: { currentBalance: -amountDeducted } },
        { returnDocument: "after" }
      );

      client.close();

      res.status(200).json({
        message: "Successfully Sent!",
        currentBalance: deductedAccount.value.currentBalance,
      });
    } else {
      res.status(402).json({
        message: "User Not Found!",
      });
    }
  }
}

export default handler;
