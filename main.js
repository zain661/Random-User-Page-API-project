const apiManager = new APIManager();

// apiManager.getRandomUser();
// apiManager.getRandomQuote();
// apiManager.getRandomPoke();
// apiManager.getRandomText();

const r = new Renderer()

$(".loadData").on("click",function () {
    apiManager.getRandomUser();
    apiManager.getRandomQuote();
    apiManager.getRandomPoke();
    apiManager.getRandomText();
  })
$(".disData").on("click", function () {
    r.render(apiManager.getData())
  })