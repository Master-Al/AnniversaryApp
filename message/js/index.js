this.$dom = {};
this.$dom.animatedText = document.createElement("div");
this.text =
  "I know you are my one true love because even after all these years, there is no one that I would rather talk to at the end of the day and share my heart's desires. Thank you for giving me the love that I never thought I deserved, but that I cannot live without. You are the best thing that has ever happened to me. "; // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById("container");
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText() {
  var arrayOfLetters = this.text.split("");
  var animatedSpan = [];
  arrayOfLetters.forEach(function (item) {
    var span = document.createElement("span");
    span.innerHTML = item;
    animatedSpan.push(span);
    span.style.opacity = 0;
    span.style.color = "white";
    this.$dom.animatedText.appendChild(span);
  });
  TweenMax.staggerTo(
    animatedSpan,
    0.2,
    {
      opacity: 1,
      delay: 2,
    },
    0.05
  );
}
