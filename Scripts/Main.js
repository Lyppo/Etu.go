const camera = document.createElement('div');
camera.id = 'camera';
const geste = document.createElement('div');
geste.id = 'geste';

const main = document.querySelector('main');
main.prepend(camera, geste);

document.getElementById("launch-app").addEventListener("click", function() {
    window.location.href = "app.html";
});