const database = require("../db/connection");
const initialUsers = require("../db/test-data/user-data");
const seed = require("../db/seed");
const app = require("../app");
const request = require("supertest");

beforeEach(async () => {
  await seed(initialUsers);
});
afterAll(async () => {
  await database.client.close();
});

describe("/api/users", () => {
  test("gets all users - 440", () => {
    return request(app)
      .get("/api/users")
      .expect(404)
      .then(({ body }) => {
        expect(body.message).toBe("path not found");
      });
  });
  test("post new user users - 440", () => {
    return request(app)
      .post("/api/users")
      .expect(201)
      .send({
        username: "jay",
        name: "jay",
        currentWeek: [{ name: "banana", category: "fruit" }],
        badges: [{ name: "1 week", img_url: "aighdfjagdha.jpg" }],
        streak: { currentStreak: 1, highestStreak: 1 },
        userPlants: [
          { name: "brussels sprouts", category: "vegetables" },
          { name: "pumpkin seeds", category: "seeds" },
          { name: "peas", category: "vegetables" },
        ],
      })
      .then(({ body }) => {
        expect(body.username).toBe("jay");
      });
  });
});
