$(document).ready(function(){

  var anchors = [
        "home",
        "welcome",
        "hukou_system",
        "timeline_start",
        "strict_border_pt1",
        "strict_border_pt2",
        "recip",
        "neumayer_analysis",
        "application",
        "gdp",
        "fees",
        "communism",
        "immigration",
        "connection",
        "package",
        "conclusion"
      ],

      curAnchor,

      counter = 0;

  console.log(anchors[counter]);

  $('#overall_next').click(function(){
    counter = (counter + 1) % anchors.length;
    // the modulus (%) operator resets the counter to 0
    // when it reaches the length of the array
    curAnchor = anchors[counter];
    console.log(curAnchor);

    var elem = $("a[name='"+ curAnchor +"']");

    $('html, body').animate({
                    scrollTop: elem.offset().top,
                    scrollLeft: elem.offset().left
                    }, 1500, function(){
    });
  });

  $('#overall_prev').click(function(){
    if ( counter === 0){
      counter = anchors.length + 1;
    } else {
      counter = (counter - 1);
    }
    // the modulus (%) operator resets the counter to 0
    // when it reaches the length of the array
    curAnchor = anchors[counter];
    console.log(curAnchor);

    var elem = $("a[name='"+ curAnchor +"']");

    $('html, body').animate({
                    scrollTop: elem.offset().top,
                    scrollLeft: elem.offset().left
                    }, 1500, function(){
    });
  });

  alert(window.location);

});
