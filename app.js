var roundRobot = require('node-sphero');
var sphero = new roundRobot.Sphero();

sphero.on('connected', function(ball) {
  ball.setRGBLED(0, 255, 0, false);
});

sphero.connect();