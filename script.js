const videos = Array.from(document.querySelectorAll("ul li[data-duration]"));
const video = videos
  .filter((video) => video.innerHTML.includes("JAVASCRIPT LANJUTAN"))
  .map((times) => times.dataset.duration.split(":"))
  .map((mD) => Number(mD[0]) * 60 + Number(mD[1]))
  .reduce((acc, cur) => acc + cur, 0);

const jam = Math.floor(video / 3600);
const menit = Math.floor((video - jam * 3600) / 60);
const detik = video - jam * 3600 - menit * 60;


const jmlVideo = document.querySelector(".jumlah-video");
jmlVideo.append(`${videos.filter((video) => video.innerHTML.includes("JAVASCRIPT LANJUTAN")).length} video`);

const jmlDuration = document.querySelector(".total-durasi");
jmlDuration.append(`${jam} jam ${menit} menit ${detik} detik`)
