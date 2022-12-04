"use strict"

import fs from "fs/promises"

async function loadData () {
    const data = await fs.readFile("./users.json");
    return JSON.parse(data);
}

async function run () {
    let data = await loadData();
    const operation = process.argv[2];
    const incomingData = process.argv[3];

    if (operation === "add"){
        addUser(data, incomingData);
    }
    if (operation === "delete"){
        data = deleteUser(data, incomingData)
    }

    await saveData(data);
}

function addUser(data, newUser) {
    const newId = data.reduce((a, c) => Math.max(a, c.id), 0) +1;
    data.push({id: newId, name: newUser});
}

function deleteUser(data, removeId){
    return data.filter((user) => user.id !== parseInt(removeId));
}

function saveData(data) {
    return fs.writeFile("./users.json", JSON.stringify(data));
}

run();