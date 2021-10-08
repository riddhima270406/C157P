<!DOCTYPE html>
<html >

<head>  
  <title>Virtual Tour</title>
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>

  <script src="js/Tour.js"></script>
</head>

<body>
  <a-scene id="main-scene">

    <a-sky id="main-container" radius="5000" color="#98DAFC"></a-sky>

    <!-- Places Container -->
    <a-entity id="places-container" tour></a-entity>

    <!-- CAMERA -->
    <a-camera id="camera" wasd-controls="enabled:false;">
      <!-- App Title -->
      <a-entity id="app-title" position="0 0.73 -1"
        text="font: exo2bold; align: center; width: 2; color: #000; value: It's time to travel virtually!">
        <a-entity id="app-subtitle" position="0 -0.1 0"
          text="font: dejavu; align: center; width: 1; color: #0F184E; value: Travel Around The World"></a-entity>
      </a-entity>

    </a-camera>
  </a-scene>
</body>

</html>