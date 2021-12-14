const userData = [
	{
		username: "georgia123",
		name: "georgia",
		joined: new Date("2020-01-15"),
		currentWeek: [
			{
				name: "amaranth",
				category: "grain",
				img_url:
					"https://www.edamam.com/food-img/2b8/2b880b44167e0703ff224849c173f3f1.jpg",
			},
			{
				name: "barley",
				category: "grain",
				img_url:
					"https://www.edamam.com/food-img/9b1/9b1add099acc71e8e7a31be0729b6936.jpg",
			},
		],
		badges: [
			{
				name: "1 week",
				img_url: "https://i.postimg.cc/gkBBf7bN/aubergine-badge.png",
				grey_url: "https://i.postimg.cc/RVRy0rn5/grey-aubergine-badge.png",
				description: "you have eaten 30 different plants in a week",
			},
		],
		streak: { currentStreak: 1, highestStreak: 1 },
		userPlants: [
			{
				name: "amaranth",
				category: "grain",
				img_url:
					"https://www.edamam.com/food-img/2b8/2b880b44167e0703ff224849c173f3f1.jpg",
			},
			{
				name: "barley",
				category: "grain",
				img_url:
					"https://www.edamam.com/food-img/9b1/9b1add099acc71e8e7a31be0729b6936.jpg",
			},
			{
				name: "spinach",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg",
			},
			{
				name: "swiss chard",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/80c/80ced8c49f8aa2fa87384353f481c902.jpg",
			},
			{
				name: "turnip greens",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/8ba/8ba0608e98babf3edf32520ee8efeb73.jpg",
			},
			{
				name: "anise",
				category: "herbs-and-spices",
				img_url:
					"https://www.edamam.com/food-img/bea/bea10bb0afae1e498edadf0aa1be805e.jpg",
			},
			{
				name: "basil",
				category: "herbs-and-spices",
				img_url:
					"https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg",
			},
		],
	},
	{
		username: "holly34",
		name: "holly",
		joined: new Date("2021-06-25"),
		currentWeek: [
			{ name: "brussels sprouts", category: "vegetables" },
			{ name: "pumpkin seeds", category: "seeds" },
			{ name: "peas", category: "vegetables" },
			{ name: "squash", category: "vegetables" },
			{ name: "quinoa", category: "grains" },
			{ name: "kale", category: "vegetables" },
			{ name: "green beans", catgeory: "vegetables" },
			{ name: "chia seeds", category: "seeds" },
			{ name: "orange", category: "fruits" },
			{ name: "tangerine", category: "fruits" },
			{ name: "carrot", category: "vegetables" },
		],
		badges: [
			{
				name: "1 week",
				img_url: "https://i.postimg.cc/gkBBf7bN/aubergine-badge.png",
				grey_url: "https://i.postimg.cc/RVRy0rn5/grey-aubergine-badge.png",
				description: "you have eaten 30 different plants in a week",
			},
			{
				name: "2 weeks",
				img_url: "https://i.postimg.cc/HsQ9tPsr/banana-badge.png",
				grey_url: "https://i.postimg.cc/YSJyPMTg/grey-banana-badge.png",
				description:
					"you have eaten 30 different plants for two straight weeks",
			},
			{
				name: "30 different plants",
				img_url: "https://i.postimg.cc/XJGwBsz7/broccoli-badge.png",
				grey_url: "https://i.postimg.cc/DwNCW7vD/grey-broccoli-badge.png",
				description: "you have eaten 30 different types of plant",
			},
		],
		streak: { currentStreak: 1, highestStreak: 2 },
		userPlants: [
			{
				name: "amaranth",
				category: "grain",
				img_url:
					"https://www.edamam.com/food-img/2b8/2b880b44167e0703ff224849c173f3f1.jpg",
			},
			{
				name: "bamboo shoots",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/c81/c81c850fa60169a14023a73bc28cb3ff.jpg",
			},
			{
				name: "beetroot",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/ec3/ec3d96cdf3b58183c1aad01875b93805.jpg",
			},
			{
				name: "bell pepper",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg",
			},
			{
				name: "bok choi",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/12f/12f9b47f4f87062491bce23963c2ad43.jpg",
			},
			{
				name: "broccoli",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/3e4/3e47317a3dd54dc911b9c44122285df1.jpg",
			},
			{
				name: "grape leaves",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/84c/84c607901e4070f48a0f37ee892cef90.jpg",
			},
			{
				name: "grean beans",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/891/89135f10639878a2360e6a33c9af3d91.jpg",
			},
			{
				name: "string beans",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/891/89135f10639878a2360e6a33c9af3d91.jpg",
			},
			{
				name: "wax beans",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/233/233793455d56f7bc4e9884dc23ee1b8a.jpeg",
			},
			{
				name: "amaranth leaves",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/863/86354c81e237ea4e580d05559068b1c8.jpg",
			},
			{
				name: "beet greens",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/171/1712d20a8205484ef4afd59cf246164f.jpg",
			},
			{
				name: "collard greens",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/d4f/d4ff5cab2328d9674cc46fc50cdfb17c.jpg",
			},
			{
				name: "kale",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/8e9/8e9c5417fa012e5ca068fddc5f8d3d6c.jpg",
			},
		],
	},
	{
		username: "james",
		name: "james",
		joined: new Date("2021-09-21"),
		currentWeek: [
			{
				name: "edamame",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/325/325e012901331f9860df07f755adf197.jpg",
			},
			{
				name: "aubergine",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/da5/da5978d61b89a363147a6d13c36e3b54.jpg",
			},
			{
				name: "elephant garlic",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
			},
			{
				name: "endive",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/684/6842d6cae4c640e786fd5b5ec374c292.jpg",
			},
		],
		badges: [
			{
				name: "1 week",
				img_url: "https://i.postimg.cc/gkBBf7bN/aubergine-badge.png",
				grey_url: "https://i.postimg.cc/RVRy0rn5/grey-aubergine-badge.png",
				description: "you have eaten 30 different plants in a week",
			},
			{
				name: "2 weeks",
				img_url: "https://i.postimg.cc/HsQ9tPsr/banana-badge.png",
				grey_url: "https://i.postimg.cc/YSJyPMTg/grey-banana-badge.png",
				description:
					"you have eaten 30 different plants for two straight weeks",
			},
		],
		streak: { currentStreak: 1, highestStreak: 2 },
		userPlants: [
			{
				name: "edamame",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/325/325e012901331f9860df07f755adf197.jpg",
			},
			{
				name: "aubergine",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/da5/da5978d61b89a363147a6d13c36e3b54.jpg",
			},
			{
				name: "elephant garlic",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
			},
			{
				name: "endive",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/684/6842d6cae4c640e786fd5b5ec374c292.jpg",
			},
			{
				name: "truffles",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/f64/f64e69138d71645a31a4721b6421e6e6.jpg",
			},
			{
				name: "white button mushrooms",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg",
			},
			{
				name: "chestnut mushrooms",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg",
			},
			{
				name: "portobello mushrooms",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/245/2457f8850f43817dfeb967825467ef1e.jpg",
			},
			{
				name: "napa cabbage",
				category: "vegetables",
				img_url:
					"https://www.edamam.com/food-img/12f/12f9b47f4f87062491bce23963c2ad43.jpg",
			},
		],
	},
];

module.exports = userData;
