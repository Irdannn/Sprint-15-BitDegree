"use strict";

import express from "express";
import { router } from "./router/route.js";
const app = express();

app.use(router);

const PORT = 3000;


app.listen (PORT, () => {
    console.log(`Server listening to port ${PORT}`);
});