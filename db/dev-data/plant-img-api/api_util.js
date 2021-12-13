const axios = require("axios").default;
const foodData = require("./plant-data");
const getItem = (item) => {
	return axios
		.get(
			`https://api.edamam.com/api/food-database/v2/parser?app_id=2f129a9d&app_key=aa15fc73ac63d0d17d7184bbdc498f83&ingr=${item}&nutrition-type=cooking`
		)
		.then((res) => {
			return res.data;
			// console.log(dataReceived.parsed[0].food.image);
		})
		.catch((err) => {
			console.log(err);
		});
};

const getPlantImages = (plantData) => {
	const assets = [];
	const apiCall = foodData.map((food) => {
		getItem(food.name)
			.then((res) => {
				food.img_url = res.parsed[0].food.image;
				console.log(foodData);
			})
			.catch((err) => {
				assets.push({ name: food, image: "error" });
			});
	});
	return { apiCall, assets };
};

getPlantImages();
