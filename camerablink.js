function music(zeit){
	document.getElementById("text").innerHTML = "in dieser Klammer! " + zeit;

	var v = motion.query();

	if (v.vel == 1) {
		//Test browser support
		const SUPPORTS_MEDIA_DEVICES = 'mediaDevices' in navigator;

		if (SUPPORTS_MEDIA_DEVICES) {
		  //Get the environment camera (usually the second one)
		  navigator.mediaDevices.enumerateDevices().then(devices => {
		  
			const cameras = devices.filter((device) => device.kind === 'videoinput');

			if (cameras.length === 0) {
			  throw 'No camera found on this device.';
			}
			const camera = cameras[cameras.length - 1];

			// Create stream and get video track
			navigator.mediaDevices.getUserMedia({
			  video: {
				deviceId: camera.deviceId,
				facingMode: ['user', 'environment'],
				height: {ideal: 1080},
				width: {ideal: 1920}
			  }
			}).then(stream => {
			  const track = stream.getVideoTracks()[0];

			  //Create image capture object and get camera capabilities
			  const imageCapture = new ImageCapture(track)
			  const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {

			  
			  
			    // function switch on
				function lon(){
				  document.body.style.backgroundColor = "white";
				  track.applyConstraints({
					advanced: [{torch: true}]
				  });
				}

				// function switch off
				function loff(){
				  document.body.style.backgroundColor = "black";
				  track.applyConstraints({
					advanced: [{torch: false}]
				  });
				}

				
				switch(zeit) {
					case 0.7:
					  lon();
					  break;
					case 3.0:
					  loff();
					  break;
					case 3.5:
					  lon();
					  break;
					case 4.3:
					  loff();
					  break;
					case 4.5:
					  lon();
					  break;
					case 7.4:
					  loff();
					  break;
					case 8.2:
					  lon();
					  break;
					case 9.1:
					  loff();
					  break;
					case 9.6:
					  lon();
					  break;
					case 10.1:
					  loff();
					  break;
					case 10.5:
					  lon();
					  break;
					case 11.0:
					  loff();
					  break;
					case 11.9:
					  lon();
					  break;
					case 14.7:
					  loff();
					  break;
					case 14.9:
					  lon();
					  break;
					case 18.4:
					  loff();
					  break;
					case 18.6:
					  lon();
					  break;
					case 22.1:
					  loff();
					  break;
					case 22.8:
					  lon();
					  break;
					case 23.5:
					  loff();
					  break;
					case 24.2:
					  lon();
					  break;
					case 24.9:
					  loff();
					  break;
					case 25.3:
					  lon();
					  break;
					case 25.8:
					  loff();
					  break;
					case 26.3:
					  lon();
					  break;
					case 26.7:
					  loff();
					  break;
					case 27.2:
					  lon();
					  break;
					case 27.7:
					  loff();
					  break;
					case 28.0:
					  lon();
					  break;
					case 28.6:
					  loff();
					  break;
					case 29.0:
					  lon();
					  break;
					case 29.5:
					  loff();
					  break;
					case 29.9:
					  lon();
					  break;
					case 30.5:
					  loff();
					  break;
					case 30.9:
					  lon();
					  break;
					case 31.4:
					  loff();
					  break;
					case 31.8:
					  lon();
					  break;
					case 32.3:
					  loff();
					  break;
				}
				
				
				
				
				
				
			  });
			});
		  });
		  
		  //The light will be on as long the track exists
		} else {
		
		function weiss(){
		  document.body.style.backgroundColor = "white";
		}
		
		function schwarz(){
		  document.body.style.backgroundColor = "black";
		}
		
		weiss();
		setTimeout(schwarz, 2000);
		setTimeout(weiss, 5000);
		setTimeout(schwarz, 6000);
		
		}
	   
    }
   
}