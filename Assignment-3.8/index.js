"use strict"

import fs from "fs/promises"

async function loadData () {
    const data = await fs.readFile("./users.json");
    return JSON.parse(data);
    console.log(JSON.parse(data));
}

async function run () {
    let data = await loadData();
    const operation = process.argv[2];
    const incomingData = process.argv[3];
}

run();