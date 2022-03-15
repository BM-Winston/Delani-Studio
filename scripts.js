$(".dgn").click(function () {
  $(".dgn").hide();
  $(".prd1").show();
});

$(".prd1").click(function () {
  $(".prd1").hide();
  $(".dgn").show();
});

$(".dvt").click(function () {
  $(".dvt").hide();
  $(".prd2").show();
});

$(".prd2").click(function () {
  $(".prd2").hide();
  $(".dvt").show();
});

$(".mgt").click(function () {
  $(".mgt").hide();
  $(".prd3").show();
});

$(".prd3").click(function () {
  $(".prd3").hide();
  $(".mgt").show();
});

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
    $(".studio" + index + " .studio").show();
    $(".studio" + index).addClass("blacken");
  });
  $(".studio" + index).mouseout(function () {
    $(".studio" + index + " .studio").hide();
    $(".studio" + index).removeClass("blacken");
  });
});

$(".info").submit(function () {
  var Name = this.NAME.value;
  alert(
    Name + " we have received your message. Thank you for reaching out to us."
  );
});
