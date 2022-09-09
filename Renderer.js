class Renderer {
  constructor() {
      this.elements = {
      userContainer: $(".user-container"),
      quoteContainer: $(".quote-container"),
      pokeContainer: $(".poke-container"),
      aboutMeContainer: $(".aboutMe-container"),
      friendsContainer: $(".friends-container"),
    };

    this.sources = {
      userSource: $("#user-template").html(),
      quoteSource: $("#quote-template").html(),
      pokeSource: $("#poke-template").html(),
      abouteMeSource: $("#abouteMe-template").html(),
      friendsSource: $("#friends-template").html(),
    };

    this.templates = {
      user: Handlebars.compile($("#user-template").html()),
      quote: Handlebars.compile(this.sources.quoteSource),
      poke:  Handlebars.compile(this.sources.pokeSource),
      about:  Handlebars.compile(this.sources.aboutMeSource),
      friends:  Handlebars.compile(this.sources.friendsSource)
    };
  }

  render(data) {
    console.log(data);
    this.renderUser(data.user);
    this.renderQuote(data.quote);
    this.renderPoke(data.poke);
    this.renderAbout(data.text);
    this.renderFriends(data.friends);
  }

  renderUser(user) {
    const newHtml = this.templates.user(user);
    this.elements.userContainer.empty();
    this.elements.userContainer.append(newHtml);
  }

  renderQuote(data) {
    const quoteTemplate = this.templates.quote
    const newHtml2 = quoteTemplate(data);
    this.elements.quoteContainer.empty();
    this.elements.quoteContainer.append(newHtml2);
  }

  renderPoke(data) {
    const pokeTemplate =this.templates.poke
    const newHtml3 = pokeTemplate(data);
    this.elements.pokeContainer.empty();
    this.elements.pokeContainer.append(newHtml3);
  }

  renderAbout(data) {
    const aboutMeTemplate = this.templates.about
    const newHtml4 = abouteMeTemplate(data);
    this.elements.aboutMeContainer.empty();
    this.elements.aboutMeContainer.append(newHtml4);
  }

  renderFriends(data) {
    const friendsTemplate = this.templates.friends
    const newHtml5 = feiendsTemplate({ friend: data.otherUsers });
    this.elements.friendsContainer.empty();
    this.elements.friendsContainer.append(newHtml5);
  }
}
