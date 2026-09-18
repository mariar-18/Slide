
const startButton = document.getElementById("startCamera");
const stopButton = document.getElementById("stopCamera");

let stream = null;
let video = null;

startButton.addEventListener("click", async function () {

    try {

        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        video = document.createElement("video");

        video.srcObject = stream;
        video.autoplay = true;
        video.playsInline = true;

        video.style.width = "640px";
        video.style.maxWidth = "90%";
        video.style.marginTop = "30px";
        video.style.borderRadius = "12px";

        document.body.appendChild(video);

    } catch (error) {

        console.error(error);
        alert("Could not access the camera.");

    }

});

stopButton.addEventListener("click", function () {

    if (stream) {

        stream.getTracks().forEach(function (track) {
            track.stop();
        });

        stream = null;

    }

    if (video) {
        video.remove();
        video = null;
    }

    console.log("Camera stopped");

});

