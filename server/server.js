require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.get("/api/v1/stores", async (req, res) => {
  try{

    const stores = await db.query("SELECT * FROM stores");
    // products -> product reviews
    // store reviews
    res.status(200).json({
      status: "success",
      data: {
        stores: stores.rows
      }
    });

  }catch(err){console.log(err)}
});

app.get("/api/v1/stores/:id", async (req, res) => {
  try{

    const stores = await db.query("SELECT * FROM stores WHERE id=$1", [req.params.id]);
    console.log(stores.rows[0]);
    res.status(200).json({
      status: "success",
      data: {
        store: stores.rows[0]
      }
    });

  }catch(err){console.log(err)}
});

app.listen(port, () => {
  console.log(`Listening to port:${port}`);
});