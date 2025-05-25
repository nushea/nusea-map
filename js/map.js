const canvas = document.getElementById("metaMap");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src="/img/meta.png";


img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
};

