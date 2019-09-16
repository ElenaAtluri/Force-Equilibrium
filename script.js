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

  $('#num-forces').change(function() {
    var numForces = document.forms["forces"][0].value;
    if (numForces < 1) {
      $('#num-forces').val(1);
    }
    $("#more-forces").empty();
    $("#m1").val("");
    $("#a1").val("");
    for (i = 1; i < numForces; i++) {
      var lm = document.createElement("label");
      lm.htmlFor = "m"+(i+1);
      lm.innerHTML = "Magnitude (g): "
      var m = document.createElement("input");
      m.type = "number";
      m.name = "m"+(i+1);
      m.id = "m"+(i+1);
      var la = document.createElement("label");
      la.htmlFor = "a"+(i+1);
      la.innerHTML = "Angle (deg): "
      var a = document.createElement("input");
      a.type = "number";
      a.name = "a"+(i+1);
      a.id = "a"+(i+1);
      $("#more-forces").append("<b>Force "+(i+1)+":</b><br>");
      $("#more-forces").append(lm,m,"<br>");
      $("#more-forces").append(la,a,"<br>");
    }
  });

  $('#submit').click(function() {
    var formElems = document.forms["values"];
    var magnitudes = [];
    var angles = [];
    for (i = 0; i < formElems.length; i++) {
      if (i%2 == 0) {
        magnitudes.push(formElems[i].value);
      } else {
        angles.push(formElems[i].value);
      }
    }
    var magnitudesx = [];
    var magnitudesy = [];
    for (i = 0; i < magnitudes.length; i++) {
      magnitudesx[i] = magnitudes[i]*Math.cos(angles[i]*Math.PI/180);
      magnitudesy[i] = magnitudes[i]*Math.sin(angles[i]*Math.PI/180);
    }
    mex = -1*magnitudesx.reduce((a, b) => a + b, 0);
    mey = -1*magnitudesy.reduce((a, b) => a + b, 0);
    var me = Math.sqrt(Math.pow(mex,2) + Math.pow(mey,2));
    var ae = Math.atan(mey/mex)*180/Math.PI;
    if (mex < 0){
      ae = 180 + ae;
    } else if (mex > 0) {
      ae = (360 + ae)%360
    }
    //write results to html
    $('#results').html(me.toFixed(2) + " g @ " + ae.toFixed(2) + " degrees");
  });

});
