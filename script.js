$(document).ready(function(){
  $('#button-one').click(function() {
    $('#one').show();
    $('#two').hide();
    $('#three').hide();
  });
  $('#button-two').click(function() {
    $('#one').hide();
    $('#two').show();
    $('#three').hide();
  });
  $('#button-three').click(function() {
    $('#one').hide();
    $('#two').hide();
    $('#three').show();
  });

  $('#submit-one').click(function() {
    var formElems = document.forms["one"];
    var m1 = parseFloat(formElems.elements["m1"].value);
    var d1 = parseFloat(formElems.elements["d1"].value);
    var m2 = m1;
    var d2 = (180 + d1)%360;

    //write results to html
    $('#results').html(m2.toFixed(2) + " g @ " + d2.toFixed(2) + " degrees");
  });
  $('#submit-two').click(function() {
    var formElems = document.forms["two"];
    var m1 = parseFloat(formElems.elements["m1"].value);
    var d1 = parseFloat(formElems.elements["d1"].value);
    var m2 = parseFloat(formElems.elements["m2"].value);
    var d2 = parseFloat(formElems.elements["d2"].value);
    var m1x = m1*Math.cos(d1*Math.PI/180);
    var m2x = m2*Math.cos(d2*Math.PI/180);
    var m1y = m1*Math.sin(d1*Math.PI/180);
    var m2y = m2*Math.sin(d2*Math.PI/180);
    var m3x = -(m1x + m2x);
    var m3y = -(m1y + m2y);
    var m3 = Math.sqrt(Math.pow(m3x,2) + Math.pow(m3y,2));

    var d3 = Math.atan(m3y/m3x)*180/Math.PI;
    if (m3x < 0){
      d3 = 180 + d3;
    } else if (m3x > 0) {
      d3 = (360 + d3)%360
    }

    //write results to html
    $('#results').html(m3.toFixed(2) + " g @ " + d3.toFixed(2) + " degrees");
  });
  $('#submit-three').click(function() {
    var formElems = document.forms["three"];
    var m1 = parseFloat(formElems.elements["m1"].value);
    var d1 = parseFloat(formElems.elements["d1"].value);
    var m2 = parseFloat(formElems.elements["m2"].value);
    var d2 = parseFloat(formElems.elements["d2"].value);
    var m3 = parseFloat(formElems.elements["m3"].value);
    var d3 = parseFloat(formElems.elements["d3"].value);
    var m1x = m1*Math.cos(d1*Math.PI/180);
    var m2x = m2*Math.cos(d2*Math.PI/180);
    var m3x = m3*Math.cos(d3*Math.PI/180);
    var m1y = m1*Math.sin(d1*Math.PI/180);
    var m2y = m2*Math.sin(d2*Math.PI/180);
    var m3y = m3*Math.sin(d3*Math.PI/180);
    var m4x = -(m1x + m2x + m3x);
    var m4y = -(m1y + m2y + m3y);
    var m4 = Math.sqrt(Math.pow(m4x,2) + Math.pow(m4y,2));

    var d4 = Math.atan(m4y/m4x)*180/Math.PI;
    if (m4x < 0){
      d4 = 180 + d4;
    } else if (m4x > 0) {
      d4 = (360 + d4)%360
    }

    //write results to html
    $('#results').html(m4.toFixed(2) + " g @ " + d4.toFixed(2) + " degrees");
  });

});
