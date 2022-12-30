import express from "express";

export const router = express.Router();

router.get("/", (request, response) => {

    response.send("Your express app is running");
});

router.get("/search", (request, response) => {
    const {q} = request.query;

    response.send(`results for ${q}`)
})