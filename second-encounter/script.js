const main=()=>{const checkEntry=entry=>{if(entry.isIntersecting){entry.target.play()}else{entry.target.pause()}}
const observer=new IntersectionObserver(entries=>entries.forEach(checkEntry))
document.querySelectorAll('video').forEach(video=>observer.observe(video))}
main()