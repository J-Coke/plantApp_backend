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
	test("GET /api returns a json object with all available endpoints", () => {
		return request(app)
			.get("/api")
			.expect(200)
			.then(({ body }) => {
				expect(body).toHaveProperty("endpoints");
				expect(body.endpoints).toHaveProperty("GET");
				expect(body.endpoints).toHaveProperty("PATCH");
				expect(body.endpoints).toHaveProperty("POST");
			});
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

describe("/api/users", () => {
	describe("/api/users/:username/badges post requests", () => {
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
		test("returns 400 when invalid input", () => {
			return request(app)
				.post("/api/users")
				.send({
					wrong: "wrong",
					oops: "oops",
					notRight: [],
					incomplete: [],
					incorrect: {},
					null: [],
				})
				.expect(400)
				.then(({ body }) => {
					expect(body.message).toBe("Invalid Request");
				});
		});
		test("returns 400 when the values of the passed object are of the incorrect type", () => {
			return request(app)
				.post("/api/users")
				.expect(400)
				.send({
					username: ["array", "array"],
					name: { object: "object" },
					currentWeek: "string",
					badges: "another string",
					streak: ["another", "array"],
					userPlants: "stringstring",
				})
				.then(({ body }) => {
					expect(body.message).toBe("Invalid Request");
				});
		});
		test("returns 400 when the username already exists", () => {
			return request(app)
				.post("/api/users")
				.expect(400)
				.send({
					username: "georgia123",
					name: "georgia",
					currentWeek: [{ name: "pineapple", category: "fruit" }],
					badges: [],
					streak: { currentStreak: 0, highestStreak: 0 },
					userPlants: [],
				});
		});
	});
	describe("api/users patch tests", () => {
		describe("patch new badge tests", () => {
			test("patches a new badge into the given user's badge array", () => {
				return request(app)
					.patch("/api/users/georgia123/badges")
					.expect(201)
					.send({ name: "60 plants", img_url: "ksdhfhs.jpg" })
					.then(({ body }) => {
						expect(body.badges).toEqual([
							{ name: "1 week", img_url: "aighdfjagdha.jpg" },
							{ name: "60 plants", img_url: "ksdhfhs.jpg" },
						]);
					});
			});
			test("returns 404 when passed a username which does not exist", () => {
				return request(app)
					.patch("/api/users/notausername/badges")
					.expect(404)
					.send({ name: "60 plants", img_url: "ksdhfhs.jpg" })
					.then(({ body }) => {
						expect(body.message).toBe("path not found");
					});
			});
			test("returns 404 when passed an invalid path", () => {
				return request(app)
					.patch("/api/wrong/wrong/wrong")
					.expect(404)
					.send({ name: "60 plants", img_url: "ksdhfhs.jpg" })
					.then(({ body }) => {
						expect(body.message).toBe("path not found");
					});
			});
		});
		describe("patch new plant tests", () => {
			test("returns 201 and posts a new plant to the userPlants array", () => {
				return request(app)
					.patch("/api/users/georgia123/plants")
					.expect(201)
					.send({ name: "pumpkin", category: "vegetable" })
					.then(({ body }) => {
						expect(body.userPlants).toEqual([
							{ name: "brussels sprouts", category: "vegetables" },
							{ name: "pumpkin seeds", category: "seeds" },
							{ name: "peas", category: "vegetables" },
							{ name: "squash", category: "vegetables" },
							{ name: "quinoa", category: "grains" },
							{ name: "kale", category: "vegetables" },
							{ name: "green beans", category: "vegetables" },
							{ name: "chia seeds", category: "seeds" },
							{ name: "orange", category: "fruits" },
							{ name: "tangerine", category: "fruits" },
							{ name: "carrot", category: "vegetables" },
							{ name: "pumpkin", category: "vegetable" },
						]);
					});
			});
			test("returns 400 when passed a new plant in the incorrect format", () => {
				return request(app)
					.patch("/api/users/georgia123/plants")
					.expect(400)
					.send({ incorrect: "format" })
					.then(({ body }) => {
						expect(body.message).toBe("Invalid Request");
					});
			});
			test("returns 404 when passed a username which does not exist", () => {
				return request(app)
					.patch("/api/notausername/plants")
					.expect(404)
					.send({ name: "carrot", category: "vegetable" })
					.then(({ body }) => {
						expect(body.message).toBe("path not found");
					});
			});
		});
		describe("PATCH /api/users/:username/streak", () => {
			test("status 200, increments the streak when passed with incStreak: true, and returns the updated streak object ", () => {
				return request(app)
					.patch("/api/users/georgia123/streak")
					.send({ incStreak: true })
					.expect(200)
					.then(({ body }) => {
						expect(body.streak).toEqual({
							currentStreak: 2,
							highestStreak: 2,
						});
					});
			});
			test("status 200, resets the streak to 0 when passed with incStreak: false, and returns the updated streak object ", () => {
				return request(app)
					.patch("/api/users/georgia123/streak")
					.send({ incStreak: false })
					.expect(200)
					.then(({ body }) => {
						expect(body.streak).toEqual({
							currentStreak: 0,
							highestStreak: 1,
						});
					});
			});
			test("status 400, returns Invalid Request message when body does not include incStreak", () => {
				return request(app)
					.patch("/api/users/georgia123/streak")
					.send({ "not-a-valid-body": true })
					.expect(400)
					.then(({ body }) => {
						expect(body.message).toBe("Invalid Request");
					});
			});
			test("status 400, returns Invalid Request message when incStreak value is not valid", () => {
				return request(app)
					.patch("/api/users/georgia123/streak")
					.send({ incStreak: "not_a_valid_value" })
					.expect(({ body }) => {
						expect(body.message).toBe("Invalid Request");
					});
			});
			test("status 404, returns path not found when passed a username that is not found", () => {
				return request(app)
					.patch("/api/users/not-a-username/streak")
					.send({ incStreak: true })
					.expect(404)
					.then(({ body }) => {
						expect(body.message).toBe("path not found");
					});
			});
		});
	});
	describe("api/users get tests", () => {
		describe("GET /api/users/:username", () => {
			test("status 200, returns the user object", () => {
				return request(app)
					.get("/api/users/georgia123")
					.expect(200)
					.then(({ body }) => {
						expect(typeof body.user).toBe("object");
						expect(body.user.username).toBe("georgia123");
						expect(body.user.name).toBe("georgia");
						expect(body.user.currentWeek).toEqual([
							{ name: "banana", category: "fruit" },
							{ name: "peas", category: "vegetable" },
						]);
						expect(body.user.badges).toEqual([
							{ name: "1 week", img_url: "aighdfjagdha.jpg" },
						]);
						expect(body.user.streak).toEqual({
							currentStreak: 1,
							highestStreak: 1,
						});
						expect(body.user.userPlants).toEqual([
							{ name: "brussels sprouts", category: "vegetables" },
							{ name: "pumpkin seeds", category: "seeds" },
							{ name: "peas", category: "vegetables" },
							{ name: "squash", category: "vegetables" },
							{ name: "quinoa", category: "grains" },
							{ name: "kale", category: "vegetables" },
							{ name: "green beans", category: "vegetables" },
							{ name: "chia seeds", category: "seeds" },
							{ name: "orange", category: "fruits" },
							{ name: "tangerine", category: "fruits" },
							{ name: "carrot", category: "vegetables" },
						]);
					});
			});
			test("status 404, returns path not found when passed a username not found", () => {
				return request(app)
					.get("/api/users/not-a-username")
					.expect(404)
					.then(({ body }) => {
						expect(body.message).toBe("path not found");
					});
			});
		});
	});
});

describe("badge endpoints tests", () => {
	describe("GET /api/badges", () => {
		test("status 200, returns an array of all badges", () => {
			return request(app)
				.get("/api/badges")
				.expect(200)
				.then(({ body }) => {
					expect(body.badges).toHaveLength(6);
					body.badges.forEach((badge) => {
						expect(badge).toEqual(
							expect.objectContaining({
								name: expect.any(String),
								img_url: expect.any(String),
							})
						);
					});
				});
		});
		test("status 404, returns message path not found", () => {
			return request(app)
				.get("/api/not_a_path")
				.expect(404)
				.then(({ body }) => {
					expect(body.message).toBe("path not found");
				});
		});
	});
});
