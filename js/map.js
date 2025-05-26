const canvas = document.getElementById("metaMap");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src="/img/meta.png";
const width = canvas.width;
const height = canvas.height;
var map;

img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
	map = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

function fillall(oldCol, newCol) {
	const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	const data = imageData.data;

	const [or, og, ob, oa] = oldCol;
	const [nr, ng, nb, na] = newCol;

	for (let i = 0; i < data.length; i += 4) {
		if (data[i]     === or && data[i + 1] === og && data[i + 2] === ob && data[i + 3] === oa) {
			data[i]     = nr;
			data[i + 1] = ng;
			data[i + 2] = nb;
			data[i + 3] = na;
		}
	}
	ctx.putImageData(imageData, 0, 0);
}


canvas.onclick = function(event) {
	var rect   = canvas.getBoundingClientRect();
    var mouseX = (event.clientX - rect.left)* canvas.width / rect.width;
    var mouseY = (event.clientY - rect.top )* canvas.height/ rect.height;
	ctx.putImageData(map, 0, 0);

	var color = ctx.getImageData(mouseX, mouseY, 1, 1).data;
	if(color[3] > 100)
		fillall(color, [(color[0])/6, (color[1])/6, (color[2])/6, 255]);
}
