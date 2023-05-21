const videoEl = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    console.log("Error here", error);
  }
}

button.addEventListener("click", async () => {
  //Disable button
  button.disabled = true;
  //Start picture in picture
  await videoEl.requestPictureInPicture();
  //Reset button
  button.disabled = false;
});

//On Load
selectMediaStream();
