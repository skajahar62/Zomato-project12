const fs = require("fs");

const restaurant = [];
const images = ["First","second","third","fourth","fifth","sixth","seventh","Eigth","nine","tenth"];

const rest_name = [
  "Arsalan",
  "Peter Cat",
  "Oh! Calcutta",
  "6 Ballygunge Place",
  "Flurys",
  "Aminia",
  "Mocambo",
  "Bar-B-Q",
  "Kewpie’s Kitchen",
  "Saffron",
  "Bohemian",
  "Koshe Kosha",
  "Chowman",
  "Mainland China",
  "Tung Fong",
  "Oudh 1590",
  "Royal Indian Restaurant",
  "Marco Polo",
  "Spice Kraft",
  "PaPaYa"
];

const foodTypes = [
  "Italian","Chinese","Mexican","Indian","Japanese",
  "Mediterranean","Thai","American","French","Korean"
];

const kolkataLocations = [
  "Park Street","Salt Lake Sector V","Howrah Bridge","Esplanade",
  "New Town","Gariahat","Dum Dum","Behala","Tollygunge","Sealdah"
];

for (let i = 0; i < 100; i++) {
  const obj = {
    image: images[Math.floor(Math.random() * images.length)],
    name: rest_name[Math.floor(Math.random() * rest_name.length)],
    rating: Math.floor(Math.random() * 5 + 1),
    food_type: foodTypes[Math.floor(Math.random() * foodTypes.length)],
    Price_for_two: Math.floor(Math.random() * 2401 + 100),
    location: kolkataLocations[Math.floor(Math.random() * kolkataLocations.length)],
    Distance_from_Customer_house: (Math.random() * 10 + 1).toFixed(1),
    offers: Math.floor(Math.random() * 30),
    alcohol: Math.random() > 0.7,
    Restaurant_open_time: Math.floor(Math.random() * 24),
  };

  obj.Restaurant_close_time = (obj.Restaurant_open_time + 12) % 24;
  restaurant.push(obj);
}

// 🔹 Convert to JSON
const jsonData = JSON.stringify(restaurant, null, 2);

// 🔹 Save to file
fs.writeFileSync("arrayData.json", jsonData, "utf-8");

console.log("✅ arrayData.json file created successfully!");
