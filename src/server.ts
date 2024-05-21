import mongoose from "mongoose";
import app from "./App";
const port = 5000;

async function main() {
  try {
    // await mongoose.connect(config.database_url as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
