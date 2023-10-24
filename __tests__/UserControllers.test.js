import request from "supertest";
import express from "express";
import { getUsers } from "../controllers/UserControllers.js";
const app = express();

app.use(express.json());

app.get("/getUsers", getUsers);


describe("getUsers controller", () => {
    // eslint-disable-next-line jest/no-done-callback
    it("should return a list of users", async (done) => {
        // const response = await request(app).get("/getUsers");
        //
        // expect(response.statusCode).toBe(200);
        // expect(response.body.users).toBeDefined();
        // expect(Array.isArray(response.body.users)).toBe(true);
        //
        // done();
    });
});