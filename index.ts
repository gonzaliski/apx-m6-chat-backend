import { rtdb } from "./db";
import { json } from "body-parser";
import * as cors from "cors";
//import {v4  as uuidv4} from "uuid"
var express = require("express");
const port = 3000;
var app = express();

app.use(json());
app.use(cors());

app.post("/chatroom", function (req, res) {
  const id = 1234;
  const chatroomRef = rtdb.ref("/chatrooms/" + id);
  chatroomRef.set(
    {
      participants: { participant: "yo" },
    },
    () => {
      res.json({
        id,
      });
    }
  );
});

app.post("/messages", function (req, res) {
  const id = 1234;
  const chatroomRef = rtdb.ref("/chatrooms/" + id + "/messages");
  console.log(req.body);
  
  chatroomRef.push(req.body, () => res.json("todo ok"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
