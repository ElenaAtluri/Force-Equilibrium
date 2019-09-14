<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Force Equilibrium</title>
  <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Expanded|Raleway" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <h1>Force Equilibrium</h1>
  <h3>Number of Forces</h3>
  <p>Please select the number of forces you would like to input.</p>
  <div class="button-list">
    <div class="button" id="button-one">1</div>
    <div class="button" id="button-two">2</div>
    <div class="button" id="button-three">3</div>
  </div>
  <h3>Given Forces</h3>
  <p>Enter the necessary information. Units are not necessary.</p>

  <form class="" onsubmit="return processForm('one');" id="one">
    <b>Force 1:</b><br>
    <label for="m1">Magnitude: </label><input type="text" name="m1" id="m1"><br>
    <label for="d1">Degree: </label><input type="text" name="d1" id="d1"><br><br>
    <input type="submit" value="Calculate" class="button" id="calculate">
  </form>

  <form class="" action="/action_page.php" method="post" onsubmit="return processForm('two');" id="two">
    <b>Force 1:</b><br>
    Magnitude: <input type="text" name="m1" id="m1"><br>
    Degree: <input type="text" name="d1" id="d1"><br><br>
    <b>Force 2:</b><br>
    Magnitude: <input type="text" name="m2" id="m2"><br>
    Degree: <input type="text" name="d2" id="d2"><br><br>
    <input type="submit" value="Calculate" id="calculate">
  </form>

  <form class="" action="/action_page.php" method="post" onsubmit="return processForm('three');" id="three">
    <b>Force 1:</b><br>
    Magnitude: <input type="text" name="m1" id="m1"><br>
    Degree: <input type="text" name="d1" id="d1"><br><br>
    <b>Force 2:</b><br>
    Magnitude: <input type="text" name="m2" id="m2"><br>
    Degree: <input type="text" name="d2" id="d2"><br><br>
    <b>Force 3:</b><br>
    Magnitude: <input type="text" name="m3" id="m3"><br>
    Degree: <input type="text" name="d3" id="d3"><br><br>
    <input type="submit" value="Calculate" id="calculate">
  </form>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
