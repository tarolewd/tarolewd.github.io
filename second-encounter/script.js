/* global IntersectionObserver */
const main = () => {
  const videos = document.querySelectorAll('video')
  const checkEntry = entry => {
    if (entry.isIntersecting) {
      entry.target.play()
    } else {
      entry.target.play().then(() => entry.target.pause())
    }
  }
  const observer = new IntersectionObserver(entries => entries.forEach(checkEntry))
  const playPause = event => videos.forEach(video => video.play().then(() => {
    video.pause()
    observer.disconnect()
    videos.forEach(video => observer.observe(video))
  }))
  window.addEventListener('click', playPause, { once: true })
  window.addEventListener('touchstart', playPause, { once: true })
  videos.forEach(video => observer.observe(video))
}
main()
