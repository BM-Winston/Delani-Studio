



var studio = [0, 1, 2, 3, 4, 5, 6, 7];
studio.forEach(function (ele, index) {
  index = index + 1;
  $(".studio" + index).mouseover(function () {
    $(".studio" + index + " .studio").show();
    $(".studio" + index).addClass("blacken");
  });
  $(".studio" + index).mouseout(function () {
    $(".studio" + index + " .studio").hide();
    $(".studio" + index).removeClass("blacken");
  });
});

var studio = [0, 1, 2, 3, 4, 5, 6, 7];
studio.forEach(function (ele, index) {
  index = index + 1;
  $(".studio" + index).mouseover(function () {
    $(".studio" + index + " .folio").show();
    $(".studio" + index).addClass("blacken");
  });
  $(".studio" + index).mouseout(function () {
    $(".studio" + index + " .folio").hide();
    $(".studio" + index).removeClass("blacken");
  });
});

$(".info").submit(function () {
  var Name = this.NAME.value;
  alert(
    Name + " we have received your message. Thank you for reaching out to us."
  );
});
