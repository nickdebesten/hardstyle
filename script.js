let progress = document.getElementById('progressbar')
let totalHeight = document.body.scrollHeight - window.innerHeight

window.onscroll = function() {
    let scrollDist = document.documentElement.scrollTop || document.body.scrollTop;
    let progressWidth = (scrollDist / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
  progress.style.height = progressWidth + "%"
  
}