const recorderContainer = document.getElementById("jsRecorderContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById;

const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
  } catch (error) {
    recordBtn.innerHTML = "😭Can`t record";
    recordBtn.removeEventListener("click", startRecording);
  }
};

function init() {
  recordBtn.addEventListener("click", startRecording);
}

if (recorderContainer) {
  init();
}
