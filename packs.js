(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
  m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(82768042, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
});




$(".btn--submit").click(function () {
  localStorage.setItem("remember", "1"),
    $(".prize").slideUp(),
    $(".order").slideDown(),
    $(".bottom-link").text('Naročite Black Latte s 50% popustom'),
    $(".bottom-teaser .sale").addClass("shown"),
    $(".order").addClass('shown__')
  localStorage.setItem('shown__', '1')
});

localStorage.getItem("remember") && (
  $(".prize").css("display", "none"),
  $(".order").css("display", "block"),
  $(".bottom-link").text('Naročite Black Latte s 50% popustom'),
  $(".bottom-teaser .sale").addClass("shown")
);






//Weight Calc
$(function () {
  $("#calcweight").click(function (a) {
    a.preventDefault(); a = Math.ceil(Number($("#minus_weight").val()) / .666666); Number($("#weight").val()) > Number($("#minus_weight").val()) + 40 ? $(".formResult").html("<p><b>Če sledite spodnjim navodilom, lahko izgubite " + $("#minus_weight").val() + " kg v le " + a + " dneh brez diet in vadbe!!</b></p><p>Se sliši neverjetno? Preberite spodnji članek in videli boste, da je verjetno! Tole vam bo spremenilo življenje!</p>") : $(".formResult").html("<p><b>Napačni podatki.</b></p>");
    $(".formResult").css({ transition: "background 1s", backgroundColor: "#ff7426c4", border: '2px solid #ff7426c4' }); setTimeout(function () { $(".formResult").css({ backgroundColor: "#fff" }) }, 2E3)
  })
});



//video

var videoWrap = $('.video-wrap');
var videoCover = $('.video-cover');
var videoFrame = $('.video-inner');

videoWrap.click(function () {
  $(this)
    .find($('.video-cover'))
    .css('display', 'none');
  $(this)
    .find($("video"))[0]
    .play();
});