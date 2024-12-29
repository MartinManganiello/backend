db = db.getSiblingDB('mydatabase');

db.users.insertMany([
    {
        _id: ObjectId("6768677ae97dd906d0fe6911"),
        username: "LionelMessi",
        password: "$2b$10$pP.FUJy2/LdwhxIpjvJVMOiNuL8xfXMPssc.K5CrV5TGIMLlODIsO",
        email: "lionelmessi@gmail.com",
        birthDate: new Date("1987-06-24"),
        isAdmin: true,
        isEnabled: true
    },
    {   _id: ObjectId("6760cda08d2c64cf9ffe6912"),
        username: "EnzoFernandez",
        password: "$2b$10$pP.FUJy2/LdwhxIpjvJVMOiNuL8xfXMPssc.K5CrV5TGIMLlODIsO",
        email: "enzofernandez@gmail.com",
        birthDate: new Date("2001-01-17"),
        isAdmin: false,
        isEnabled: true
    }
]);

db.movies.insertMany([
    {
        id: "a476c850-7204-4e82-9929-85b5b79d42d8",
        _id: ObjectId("675f4f96a0d3c5a66cfe6914"),
        title: "Titanic",
        description: "Titanic es una película de 1997 que narra la historia de amor entre Jack Dawson y Rose DeWitt Bukater, dos jóvenes que se conocen a bordo del RMS Titanic en su viaje inaugural en 1912. La película está protagonizada por Kate Winslet y Leonardo DiCaprio.",
        gender: "Romance",
        image: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQXUpVhfnjzY01pU1p4ta9hEhQ3gGsCooCyJ3M890P9UwzPG_yJW2EzvdnYta43RX8u",
        publishDate: new Date("1997-03-16"),
        ratings: []
    },
    {
        id: "d0750444-707d-4063-bc9f-b085f310300e",
        _id: ObjectId("675f4f96a0d3c5a66cfe6913"),
        title: "Armagedon",
        description: "La película trata sobre un grupo de perforadores de plataformas petrolíferas que son enviados por la NASA a un enorme asteroide que amenaza el planeta Tierra con la idea de taladrar su superficie y poder destruirlo con una bomba nuclear.",
        gender: "Ciencia ficción",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Armageddon-poster06.jpg",
        publishDate: new Date("1998-07-01"),
        ratings: []
    }
]);

db.ratings.insertMany([
    {   
        _id: ObjectId("6760cda08d2c64cf9ffe6911"),
        id: "ac801fc4-85be-412c-8f52-cf262acc5d6f",
        stars: 5,
        movie: ObjectId("675f4f96a0d3c5a66cfe6913"),
        user: ObjectId("6760cda08d2c64cf9ffe6912")
    },
    {
        _id: ObjectId("67623e383343b37b1ffe6912"),
        id: "671cb0fb-0e16-4b82-a6d9-a1994be4ae7b",
        stars: 2,
        movie: ObjectId("675f4f96a0d3c5a66cfe6914"),
        user: ObjectId("6760cda08d2c64cf9ffe6912")
    },
    {   
        _id: ObjectId("676859833e9edc9b047dfbfa"),
        id: "c85186e5-741a-47c1-b095-7f27fdea6bfb",
        stars: 1,
        movie: ObjectId("675f4f96a0d3c5a66cfe6913"),
        user: ObjectId("6768677ae97dd906d0fe6911")
    }
]);

db.movies.updateOne(
    { _id: ObjectId("675f4f96a0d3c5a66cfe6913") },
    { $push: { ratings: ObjectId("6760cda08d2c64cf9ffe6911") } }
  );
  
  db.movies.updateOne(
    { _id: ObjectId("675f4f96a0d3c5a66cfe6914") },
    { $push: { ratings: ObjectId("67623e383343b37b1ffe6912") } }
  );
  db.movies.updateOne(
    { _id: ObjectId("675f4f96a0d3c5a66cfe6913") },
    { $push: { ratings: ObjectId("676859833e9edc9b047dfbfa") } }
  );