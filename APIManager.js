//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

  getRandomUser = function () {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7",
      success: (data) => {
        let user = {
          firstName: data.results[0].name.first,
          lastName: data.results[0].name.last,
          image: data.results[0].picture.large,
          city: data.results[0].location.city,
          state: data.results[0].location.state,
        };
        this.data.user = user;
        // this.data.user.firstName = user.firstName;

        let friends = [];
        for (let i = 1; i < data.results.length; i++) {
          friends.push({
            firstName: data.results[i].name.first,
            lastName: data.results[i].name.last,
          });
        }

        this.data.friends = friends;
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  };
  getRandomQuote = function () {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest/",
      success: (d) => {
        // let quote = d.quote;

        this.data.quote = d
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  };

  getRandomPoke = function () {
    const randID = Math.floor(Math.random() * 905) + 1;
    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${randID}`,
      success: (data) => {
        let poke = {
          name: data.name,
          image: data.sprites.back_default,
        };

        this.data.poke = poke;
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  };

  getRandomText = function () {
    $.ajax({
      method: "GET",
      url: `https://baconipsum.com/api/?type=meat-and-filler`,
      success: (data) => {
        let text = {
          txt: data[0],
        };

        this.data.text = text;
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  };

  getData = function () {
    console.log(this.data.firstUser);
    return this.data;
  };
}
