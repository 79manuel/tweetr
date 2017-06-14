$(document).ready(function(){

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


function createTweetElement(data) {
  var $article = $("<article>");
  var $header = $("<header>");
  var $div = $("<div>");
  var $footer = $("<footer>");
  var $img = $("<img>").attr("src",data.user.avatars.small);
  var $h1 = $("<h1>").text(data.user.name);
  var $p_header = $("<p>").text(data.user.handle);
  var $p_div = $("<p>").text(data.user.content.text);
  var $p_footer = $("<p>").text(data.user.created_at);

  $header.append($p_header);
  $header.append($img);
  $header.append($h1);

  $article.append($header);

  $div.append($p_div);
  $article.append($div);

  $footer.append($p_footer);
  $article.append($footer);


  return $article;

}

function renderTweets(arrayTweetObject) {
  for (let key in arrayTweetObject) {
    let article = createTweetElement(arrayTweetObject[key]);
    $('#tweets').prepend(article);
  }
}

renderTweets(data);

}
