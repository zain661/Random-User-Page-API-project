
class Renderer {
   constructor(data){
        this.render(data)
     }
     render(data){
        this.userSource = $(".user-template").html();
        this.userTemplate = Handlebars.compile(this.userSource);
        const newHtml = this.userTemplate({data});
        this.$(".user-container").append(html);
    
        this.quoteSource = $(".quote-template").html();
        this.quoteTemplate = Handlebars.compile(this.quoteSource);
        const newHtml2 = this.quoteTemplate({data});
        this.$(".quote-container").append(html);
    
        this.pokeSource = $(".poke-template").html();
        this.pokeTemplate = Handlebars.compile(this.pokeSource);
        const newHtml3 = this.pokeTemplate({data});
        this.$(".poke-container").append(html);
    
        this.abouteMeSource = $(".abouteMe-template").html();
        this.aboutMeTemplate = Handlebars.compile(this.abouteMeSource);
        const newHtml4 = this.abouteMeTemplate({data});
        this.$(".aboutMe-container").append(html);
    
        this.friendsSource = $(".friends-template").html();
        this.friendsTemplate = Handlebars.compile(this.friendsSource);
        const newHtml5 = this.feiendsTemplate({friend : data.otherUsers});
        this.$(".friends-container").append(html);
          
       }
  }

// const g = function(data){
// //  let t = data.results[0].gender
// //  console.log(t)
// //  const source = $("#store-template").html();
// //  const template = Handlebars.compile(source);
// //  const newHTML = template({data:data})
// //  console.log(newHTML);
// let x=data.results[0].picture.large;
// let y= data.results[0].name.first
// let y1= data.results[0].name.last
// let y2 = data.results[0].location.state
// let y3 = data.results[0].location.city
//  $(".user-container").append(`<img src='${x}'>`)
//  $(".user-container").append(`<span> ${y}</span>`)
//  $(".user-container").append(`<span> ${y1}</span>`)
//  $(".user-container").append(`<p> ${y2}</p>`)
//  $(".user-container").append(`<span> ${y3}</span>`)

 