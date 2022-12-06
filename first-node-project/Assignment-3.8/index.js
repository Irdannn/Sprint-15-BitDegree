"use strict"

import fs from "fs/promises"

async function loadData () {
    const data = await fs.readFile("./users.json");
    return JSON.parse(data);
    console.log(JSON.parse(data));
}

loadData();
