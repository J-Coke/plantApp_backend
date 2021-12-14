const plantImgData = [
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
		name: "buckwheat",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/8b5/8b5a6b07ccd8d3f2050b78a2554b14f7.jpg",
	},
	{
		name: "popcorn",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/dd5/dd51dd3656053985cf1c47ca5c75c4db.jpg",
	},
	{
		name: "hominy corn",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/eb5/eb5e11afb9f697720b2de2e0e0e27d8d.jpg",
	},
	{
		name: "millet",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/66d/66d7359fb24a51ab5fce4b647b0c9170.jpg",
	},
	{
		name: "quinoa",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/b62/b622239a214b3bd9f63c8e93e6e9cde6.jpg",
	},
	{
		name: "rice",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg",
	},
	{
		name: "sorghum",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/09a/09afe65ff05564d743841c5fab417837.jpg",
	},
	{
		name: "spelt",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/444/4447177f55469aafd3a7656bf06315b2.jpg",
	},
	{
		name: "teff",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/823/823f0a28584afe06675767e5d8f69538.jpg",
	},
	{
		name: "wheat",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/a7c/a7c2e43c57873e2f60795e3bb560ffcd.png",
	},
	{
		name: "bulgur wheat",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/efd/efdae488ee5023e28e7f128e61b261f7.jpg",
	},
	{
		name: "semolina",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/78f/78fef871275ab078606ea747e446150e.jpg",
	},
	{
		name: "pasta",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg",
	},
	{
		name: "couscous",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/b27/b273b8089a4447e46e66d20423b386cb.jpg",
	},
	{
		name: "wild rice",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/1bc/1bcfd41e4d9869c95647b8040069408c.jpg",
	},
	{
		name: "granola",
		category: "grain",
		img_url:
			"https://www.edamam.com/food-img/c1d/c1ddb4084dd26bd5fa47e01bb49ed6a8.jpg",
	},
	{
		name: "artichoke",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/8f8/8f80887cee9e2455b7f8a162c2615758.jpg",
	},
	{
		name: "asparagus",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/159/159dec8bbcabf7ed641a57b40a2d2eb9.jpg",
	},
	{
		name: "avocado",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg",
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
		name: "brussels sprouts",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/28a/28a88a795cd97a3b3b28b65eb8bff5aa.jpg",
	},
	{
		name: "burdock root",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/c22/c221d02b69b9aae97da7f9c2007b7292.jpg",
	},
	{
		name: "green cabbage",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/cb1/cb1411c925c19de26620e63cb90d0e14.jpg",
	},
	{
		name: "red cabbage",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/222/2227613966b545ff65df7c8c4b311fc1.jpg",
	},
	{
		name: "savoy cabbage",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/29b/29bb6909e03f31b43bf7417e74e7981a.jpg",
	},
	{
		name: "calabash",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/1ef/1ef6b4dc274560002e316f8f17ab4ecd.jpg",
	},
	{
		name: "capers",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/627/627582f390a350d98c367f89c3a943fe.jpg",
	},
	{
		name: "carrot",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg",
	},
	{
		name: "cassava",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/a3e/a3e1d2a45a123ff2393a75a20dc75d2b.jpg",
	},
	{
		name: "cauliflower",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/ca2/ca217d31067dffd35ce1215e7f336bd8.jpg",
	},
	{
		name: "celery",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg",
	},
	{
		name: "celeriac",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/167/167f411e6b0e5e8a71545002d6d8a5b1.jpg",
	},
	{
		name: "chayote",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/9fc/9fc1d63a6f67dce1b67476c455921cb1.jpg",
	},
	{
		name: "kai-lan",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/8e9/8e9c5417fa012e5ca068fddc5f8d3d6c.jpg",
	},
	{
		name: "baby corn",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/eb5/eb5e11afb9f697720b2de2e0e0e27d8d.jpg",
	},
	{
		name: "cucumber",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg",
	},
	{
		name: "gherkin",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/80b/80bbb69df0a5a3e70feeb880a39b37f5.jpeg",
	},
	{
		name: "daikon radish",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/a9a/a9af5113b79c90f1ca9d4eb981e24931.jpg",
	},
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
		name: "fennel",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/038/038c19f86af781e925c97991e17b90ed.jpeg",
	},
	{
		name: "fiddlehead",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/0f6/0f695f58234d748014ef340eba94d8a5.jpg",
	},
	{
		name: "galangal",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg",
	},
	{
		name: "garlic",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
	},
	{
		name: "ginger",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg",
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
		name: "dandelion greens",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/def/def986438306ee887bda2f2373b11e10.jpg",
	},
	{
		name: "kale",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/8e9/8e9c5417fa012e5ca068fddc5f8d3d6c.jpg",
	},
	{
		name: "kohlrabi greens",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/84f/84ff0e574a029445c7bcc8b180506c61.jpg",
	},
	{
		name: "mustard greens",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/b58/b5871d62fbd5b6fdbe2f10b12e8a3a72.jpg",
	},
	{
		name: "rapini",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/52a/52a2e62a7e6ca0963d1cab1f7cbc06f1.jpg",
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
		name: "hearts of palm",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/dd8/dd84c7e7bcb19f68e4568d196d1638dc.jpg",
	},
	{
		name: "horseradish",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/cfb/cfbb3295c89c973ba65040aa2d137f29.png",
	},
	{
		name: "sunchokes",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/944/94446a41b3cdf10e23f82a55d9981f36.jpg",
	},
	{
		name: "kohlrabi",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/84f/84ff0e574a029445c7bcc8b180506c61.jpg",
	},
	{
		name: "leeks",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg",
	},
	{
		name: "lemongrass",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/a6e/a6ef38b461759334bbdc4d25ca678ad1.jpg",
	},
	{
		name: "butterhead lettuce",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg",
	},
	{
		name: "iceberg lettuce",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/3c0/3c00c5ba27678b2f8e1c58b342bd98c7.jpg",
	},
	{
		name: "green leaf lettuce",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg",
	},
	{
		name: "red leaf lettuce",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/da0/da0805be6053c9671a35a3d244e3f0c0.jpeg",
	},
	{
		name: "romaine lettuce",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/79e/79e8dd0ee229cbc32171ec362ce93a37.jpg",
	},
	{
		name: "lotus root",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/9b0/9b03c81a190f660283a375d050f55258.jpg",
	},
	{
		name: "chantrelle mushrooms",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg",
	},
	{
		name: "baby bella mushrooms",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg",
	},
	{
		name: "enoki mushrooms",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/9ca/9ca290f99e83bda414d69133e87e34b3.jpeg",
	},
	{
		name: "miatake mushrooms",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg",
	},
	{
		name: "morel mushrooms",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/9a0/9a09b0330ec3ac82c969df18a1802077.jpg",
	},
	{
		name: "oyster mushrooms",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/b6a/b6a2846f097ac730b512b3c998abbe7f.jpg",
	},
	{
		name: "porcini mushrooms",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/17a/17a9ef54308a434004be9ba16c0eea03.jpg",
	},
	{
		name: "royal trumpet mushrooms",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg",
	},
	{
		name: "shiitake mushrooms",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/e1e/e1e021cc92b36fa5d19571c2a331d53b.jpg",
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
	{
		name: "nopales",
		category: "vegetables",
		img_url:
			"https://www.edamam.com/food-img/ebf/ebfadacc00ba6065bee9ab28c9fb2882.jpg",
	},
	{
		name: "fox nut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/e29/e2985d3585a6950c276e204ba7ba9b2e.jpg",
	},
	{
		name: "guinea peanut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg",
	},
	{
		name: "hazelnut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/136/13615074edcc12bf37a30987ebfec6dc.jpg",
	},
	{
		name: "pecan",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/42f/42ff4c36d4d0b4e8069604c97af1cfef.jpg",
	},
	{
		name: "kola nut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/e29/e2985d3585a6950c276e204ba7ba9b2e.jpg",
	},
	{
		name: "macadamia nut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/7bc/7bc36d19e1e81c206f309a3ca16f295b.jpg",
	},
	{
		name: "malabar almond",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg",
	},
	{
		name: "malabar chestnut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/c50/c504cfb40bafb475c594efe93bfe9bf4.jpg",
	},
	{
		name: "peanut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg",
	},
	{
		name: "pine nut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/52f/52fa29cb9d1ab6502f137a98c8a63f09.jpg",
	},
	{
		name: "pistachio",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/1ed/1eda10468a9c3df61f8208fe156e832d.jpg",
	},
	{
		name: "soy nuts",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/256/256fd1b62b3bfdc76f565f58b30a98fd.jpg",
	},
	{
		name: "trail mix",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/a04/a041a3ab45281a77f3dddfc9b5e7bd2a.jpg",
	},
	{
		name: "paradise nut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/e29/e2985d3585a6950c276e204ba7ba9b2e.jpg",
	},
	{
		name: "shea nut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/e29/e2985d3585a6950c276e204ba7ba9b2e.jpg",
	},
	{
		name: "walnut",
		category: "nuts",
		img_url:
			"https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg",
	},
	{
		name: "watermelon",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/e83/e83c09ce97ecd44e00b8c561ab682202.jpg",
	},
	{
		name: "allspice",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg",
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
	{
		name: "borage",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/dca/dca77bc65f676ca1700a8051e09e7e88.jpeg",
	},
	{
		name: "caraway",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/0fe/0fe42839f38dd9755609410f05d93c5d.jpg",
	},
	{
		name: "cardamom",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/39d/39d4bfdf9dad662e89ae7bcb933c0def.jpg",
	},
	{
		name: "cayenne pepper",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg",
	},
	{
		name: "chervil",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg",
	},
	{
		name: "chili",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg",
	},
	{
		name: "chives",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg",
	},
	{
		name: "cinnamon",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg",
	},
	{
		name: "cloves",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg",
	},
	{
		name: "cumin",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg",
	},
	{
		name: "dandelion",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/def/def986438306ee887bda2f2373b11e10.jpg",
	},
	{
		name: "dill",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/874/8740aacb8e1a348cd5eead1f0bb552d4.jpg",
	},
	{
		name: "ginger",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg",
	},
	{
		name: "lavender",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/a36/a36eea912c621522f8cd795316c883a5.jpg",
	},
	{
		name: "mace",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/b2e/b2e5c81c35c308e65df16a92c4db3bff.jpg",
	},
	{
		name: "marjoram",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/47f/47f75ecad128851ba407efd51c73eb47.jpg",
	},
	{
		name: "nutmeg",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg",
	},
	{
		name: "mint",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg",
	},
	{
		name: "allspice",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg",
	},
	{
		name: "rosemary",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg",
	},
	{
		name: "saffron",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/b7c/b7c71604d7d5e7f54ac461079e6fe175.jpg",
	},
	{
		name: "sage",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/509/50984580e9aad4b4ddd5b7ed45a64bf4.jpg",
	},
	{
		name: "tamarind",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/dde/dded3ea24aeb0014358a92d524065b80.jpg",
	},
	{
		name: "acai",
		category: "fruit",
		img_url:
			"https://www.edamam.com/food-img/4ec/4eccea2a663123185b5306f7a08301f2.jpg",
	},
	{
		name: "red apple",
		category: "fruit",
		img_url:
			"https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg",
	},
	{
		name: "green apple",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/288/288a6646dd6bb05a482f4405bf6e2861.jpg",
	},
	{
		name: "apricot",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/a54/a549ea1264a8b797190a4678581d64ae.jpg",
	},
	{
		name: "blueberry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png",
	},
	{
		name: "blackberry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/b49/b49683595ad4c4565d1bfe05348ef6eb.jpg",
	},
	{
		name: "black cherry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/34b/34b23d901752b022d6ab1ee6f9ed0b74.jpg",
	},
	{
		name: "barberry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/0f5/0f5548fa5ce0f685dbb5d0885e284751.jpg",
	},
	{
		name: "banana",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg",
	},
	{
		name: "breadfruit",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/fc8/fc88fe970696e28d6d3960e4cc304407.jpg",
	},
	{
		name: "boysenberry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/018/018c6efc425fd5ad150e6e5297522707.jpg",
	},
	{
		name: "clementine",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/4b0/4b0e7d9985b55a58513f61cd02a5003c.jpg",
	},
	{
		name: "cherry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/34b/34b23d901752b022d6ab1ee6f9ed0b74.jpg",
	},
	{
		name: "canary melon",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/b1b/b1b603c35a63d662e3359d4e55b31653.jpg",
	},
	{
		name: "cantaloupe melon",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/b1b/b1b603c35a63d662e3359d4e55b31653.jpg",
	},
	{
		name: "cranberry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/945/94511bef5e26f15bb6eac8e950ac79a9.jpg",
	},
	{
		name: "currants",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/b54/b5425d9ead1af7393c9e6dbe326d6391.jpg",
	},
	{
		name: "date",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/051/05168bdd7c88ca141e28c49ccf5a04a9.jpg",
	},
	{
		name: "durian",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/d16/d168a2b8c1ec86cae993aaa3a35d2ba8.jpg",
	},
	{
		name: "fig",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/3ce/3ce7b15338ac4ecb9a043df83ea6f9d4.jpg",
	},
	{
		name: "gooseberry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/cbb/cbb4efa460bde19aa8c01515212d568a.jpg",
	},
	{
		name: "guava",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/5dc/5dc0781443bf7171d6a9efd7d2e88fe5.jpg",
	},
	{
		name: "grapefruit",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/ac6/ac6139365343036d75bd5999cca5145f.jpg",
	},
	{
		name: "grape",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/ca5/ca55ac74deb991d159942c65777115df.jpg",
	},
	{
		name: "jackfruit",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/b65/b65cedc011466d5bcce2f9a440d1d301.JPG",
	},
	{
		name: "kiwi fruit",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/dba/dbabbf58b6a43c9b65014f4c789d4409.jpg",
	},
	{
		name: "lemon",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg",
	},
	{
		name: "lime",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg",
	},
	{
		name: "mango",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/6e0/6e04857756d0876f14bfc035ff238e0b.png",
	},
	{
		name: "mandarin",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/f82/f82193abe21e23c1562bb5340f74e336.jpg",
	},
	{
		name: "melon",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/b1b/b1b603c35a63d662e3359d4e55b31653.jpg",
	},
	{
		name: "nectarine",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/0c3/0c3d5dcefa8b5314e8af3df4dc89f4c6.jpg",
	},
	{
		name: "orange",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg",
	},
	{
		name: "pineapple",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/2da/2da6f2397ab64ed185c082edebc4dd7c.jpg",
	},
	{
		name: "passion fruit",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/393/393e886951f47632fedd2852531af6d2.jpg",
	},
	{
		name: "papaya",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/ceb/ceb26874332d3523d92d79d44fa836ca.jpg",
	},
	{
		name: "pomegranate",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/342/342903acce5f863b7683cff3644931a8.jpg",
	},
	{
		name: "pear",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg",
	},
	{
		name: "plum",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/171/171e0c6dd5bc1090a0f574722f3c09b6.jpg",
	},
	{
		name: "peach",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/437/4378245cfab2121c9e6eb9e3c3dc9ac8.jpg",
	},
	{
		name: "raspberry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg",
	},
	{
		name: "star fruit",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/800/800f2ce645428deb822bb648d8d57464.jpg",
	},
	{
		name: "strawberry",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg",
	},
	{
		name: "tangerine",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/f82/f82193abe21e23c1562bb5340f74e336.jpg",
	},
	{
		name: "watermelon",
		category: "fruits",
		img_url:
			"https://www.edamam.com/food-img/e83/e83c09ce97ecd44e00b8c561ab682202.jpg",
	},
	{
		name: "tarragon",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/22f/22f8945d157d8b759c30e6738639991b.jpg",
	},
	{
		name: "thyme",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg",
	},
	{
		name: "turmeric",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg",
	},
	{
		name: "vanilla",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg",
	},
	{
		name: "wild garlic",
		category: "herbs-and-spices",
		img_url:
			"https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
	},
	{
		name: "pumpkin seed",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/fbd/fbd8c30b003fa93777ffaa2bcdd58db0.jpg",
	},
	{
		name: "sesame seed",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg",
	},
	{
		name: "sunflower seed",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/c03/c035107b6716331396e91f7c2c0f2a04.jpg",
	},
	{
		name: "watermelon seed",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/e83/e83c09ce97ecd44e00b8c561ab682202.jpg",
	},
	{
		name: "chia seeds",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/bcc/bcc6e6bf3175772ad00b414636467257.jpg",
	},
	{
		name: "flaxseed",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/e9b/e9bd9cc62d0dbe0753911e295a0ba0ca.jpg",
	},
	{
		name: "hemp seeds",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/c46/c4672a27d36e9c3925cb82e4385e852f.jpg",
	},
	{
		name: "kalonji seeds",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg",
	},
	{
		name: "milk thistle seeds",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
	},
	{
		name: "mustard seeds",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg",
	},
	{
		name: "mixed seeds",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/4c1/4c17b28b3eef86d2f9584324666352f8.jpg",
	},
	{
		name: "pumpkin seed",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/fbd/fbd8c30b003fa93777ffaa2bcdd58db0.jpg",
	},
	{
		name: "poppy seed",
		category: "seeds",
		img_url:
			"https://www.edamam.com/food-img/d77/d77cd71e23db9610e70878e3e8d75f4e.jpg",
	},
];

module.exports = plantData;
