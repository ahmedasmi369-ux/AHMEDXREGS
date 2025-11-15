const c = document.getElementById('particles');
const ctx = c.getContext('2d');
function resize() {
  c.width = innerWidth; c.height = innerHeight;
}
addEventListener('resize', resize); resize();

let particles = [];
for(let i=0;i<140;i++){
  particles.push({x:Math.random()*c.width, y:Math.random()*c.height, r:Math.random()*2+0.8, v:Math.random()*1.6+0.2});
}

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  // subtle gradient overlay for depth
  const g = ctx.createLinearGradient(0,0,0,c.height);
  g.addColorStop(0,'rgba(0,0,0,0.0)');
  g.addColorStop(1,'rgba(0,0,0,0.6)');
  ctx.fillStyle = g; ctx.fillRect(0,0,c.width,c.height);

  ctx.fillStyle = '#ff0022';
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.y += p.v;
    if(p.y > c.height){ p.y = -10; p.x = Math.random()*c.width; }
  });
  requestAnimationFrame(draw);
}
draw();
