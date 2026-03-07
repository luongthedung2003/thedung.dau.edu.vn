window.addEventListener('load', function () {
  var body = document.body;
  var universe = document.getElementById("universe");
  body.classList.remove('view-2D', 'opening');
  body.classList.add('view-3D', 'set-speed');
  universe.className = "scale-stretched set-speed";
  var audio = document.getElementById("bg-audio");
  var startBtn = document.getElementById("start-btn");
  var overlay = document.getElementById("start-overlay");

  startBtn.addEventListener('click', function () {
    overlay.classList.add('hidden');
    audio.play();
  });
});
