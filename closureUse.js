<!DOCTYPE html>
<html>
<body>

<div id="wrong">
</div>

<div id="rightClosure">
</div>

<div id="rightLet">

</div>

<script>

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  const elem = document.getElementById('wrong');
  elem.appendChild(btn);
}

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
  })(i));
  const elem = document.getElementById('rightClosure');
  elem.appendChild(btn);
}

for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
  })(i));
  const elem = document.getElementById('rightLet');
  elem.appendChild(btn);
}

</script>

</body>
</html>
