const database = require("../db/connection");
const data = require("../db/test-data/index");
const seed = require("../db/seed");
const app = require("../app");
const request = require("supertest");

beforeEach(async () => {
  await seed(data);
});
afterAll(async () => {
  await database.client.close();
});

describe("errors for whole app", () => {
  test("returns 404 when passed a path which does not exist", () => {
    return request(app)
      .get("/sjhfjgsjgfjsg")
      .expect(404)
      .then(({ body }) => {
        expect(body.message).toBe("path not found");
      });
  });
});

describe("/api/users", () => {
  describe("post request", () => {
    test("post new user users - 201", () => {
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
          expect(body.badges).toEqual([
            { name: "1 week", img_url: "aighdfjagdha.jpg" },
          ]);
          expect(body).toHaveProperty("name");
          expect(typeof body.streak).toBe("object");
          expect(body.currentWeek).toHaveLength(1);
        });
    });
    test("post request does not work with objects in the wrong format - returns a 400", () => {});
  });
});

describe("/api/plants", () => {
  describe("GET request", () => {
    test("status 200: returns an array of all plants", () => {
      return request(app)
        .get("/api/plants")
        .expect(200)
        .then(({ body }) => {
          expect(body.plants).toHaveLength(10);
          body.plants.forEach((plant) => {
            expect(plant).toEqual(
              expect.objectContaining({
                name: expect.any(String),
                category: expect.any(String),
              })
            );
          });
        });
    });
    test("status 404: responds with a message path not found", () => {
      return request(app)
        .get("/api/not_a_path")
        .expect(404)
        .then(({ body }) => {
          expect(body.message).toBe("path not found");
        });
    });
  });
});
