
$(document).ready(function(){

  function random() {
    var quotes = [
    ["Coco Chanel", "Success is most often achieved by those who don't know that failure is inevitable."],
    ["John Wooden", "Things work out best for those who make the best of how things work out."],
    ["Ernest Hemingway", "Courage is grace under pressure."],
    ["Jim Rohn", "If you are not willing to risk the usual, you will have to settle for the ordinary."],
    ["Albert Einstein", "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."],
    ["Elen DeGeneres", "Sometimes you can't see yourself clearly until you see yourself through the eyes of others."],
    ["Walt Disney", "All our dreams can come true if we have the courage to pursue them."],
    ["Winston Churchill", "Success is walking from failure to failure with no loss of enthusiasm."],
    ["Warren Buffett", "Someone is sitting in the shade today because someone planted a tree a long time ago."],
    ["Dr. Seuss", "Don't cry because it's over, smile because it happened."],
    ["Mae West", "You only live once, but if you do it right, once is enough."],
    ["Chris Grosser", "Opportunities don't happen. You create them."]
    ];

    var quote = quotes[Math.floor(Math.random() * quotes.length)];

    $("#tweet").attr("href", 'https://twitter.com/intent/tweet?text=' + quote[1] + ' ' + quote[0] + '&hashtags=randomquotegenerator');
    $(".well").html(function(){
      return "<blockquote class='text-center' hidden><p>" + quote[1] + "</p><footer><cite>" + quote[0] + "</cite></footer></blockquote>";
    });
  }

  $("#button-quote").on("click", function() {
    random();
   $("blockquote").fadeIn("slow");
  });

});

