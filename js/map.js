const canvas = document.getElementById("metaMap");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src="/img/meta.png";
const width = canvas.width;
const height = canvas.height;
var map;
frame = document.getElementById("textItems");


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

function replaceIFrame(newSrc){
	const parentNode = document.getElementById("Lower");
	const oldIframe = frame;
	const newIframe = oldIframe.cloneNode();
	newIframe.src = newSrc;
	parentNode.replaceChild(newIframe, oldIframe);
	frame = newIframe;
}

function replaceText(color){	
					//HaRe
		 if (color[0] === 218 && color[1] ===  91 && color[2] ===  96) replaceIFrame("/text/HaYi.html");
	else if (color[0] === 197 && color[1] ===  98 && color[2] === 162) replaceIFrame("/text/HaMnq.html");
	else if (color[0] === 226 && color[1] ===  31 && color[2] ===  86) replaceIFrame("/text/HaSi.html");
	else if (color[0] === 204 && color[1] ===  50 && color[2] === 100) replaceIFrame("/text/HaMe.html");
	else if (color[0] === 235 && color[1] === 165 && color[2] === 255) replaceIFrame("/text/HaFu.html");
	else if (color[0] === 168 && color[1] ===  45 && color[2] === 210) replaceIFrame("/text/HaRyu.html");

					//Desert
	else if (color[0] === 190 && color[1] === 128 && color[2] ===  74) replaceIFrame("/text/HaRim.html");
	else if (color[0] === 192 && color[1] === 128 && color[2] ===  93) replaceIFrame("/text/Krin.html");
	else if (color[0] === 201 && color[1] === 169 && color[2] ===  99) replaceIFrame("/text/Adzir.html");
	else if (color[0] === 213 && color[1] === 217 && color[2] ===  68) replaceIFrame("/text/Edin.html");
	else if (color[0] === 190 && color[1] === 179 && color[2] ===  67) replaceIFrame("/text/Dzuri.html");
	else if (color[0] === 202 && color[1] === 238 && color[2] === 103) replaceIFrame("/text/Alhim.html");
	else if (color[0] === 213 && color[1] === 233 && color[2] ===  93) replaceIFrame("/text/Agui.html");

					//Colonies
	else if (color[0] === 142 && color[1] === 138 && color[2] === 100) replaceIFrame("/text/Urda.html");
	else if (color[0] === 196 && color[1] === 200 && color[2] === 166) replaceIFrame("/text/Aret.html");
	else if (color[0] === 107 && color[1] ===  48 && color[2] === 159) replaceIFrame("/text/HaGo.html");

					//South
	else if (color[0] === 127 && color[1] === 194 && color[2] ===  68) replaceIFrame("/text/Toua.html");
	else if (color[0] ===  52 && color[1] ===  87 && color[2] ===  21) replaceIFrame("/text/Kuki.html");
	else if (color[0] ===  42 && color[1] === 194 && color[2] === 195) replaceIFrame("/text/FaRa.html");


	else 	   														   replaceIFrame("/text/base.html");
}


canvas.onclick = function(event) {
	var rect   = canvas.getBoundingClientRect();
    var mouseX = (event.clientX - rect.left)* canvas.width / rect.width;
    var mouseY = (event.clientY - rect.top )* canvas.height/ rect.height;
	ctx.putImageData(map, 0, 0);

	var color = ctx.getImageData(mouseX, mouseY, 1, 1).data;
	console.log(color);
	if(color[3] > 100)
		fillall(color, [(color[0])/6, (color[1])/6, (color[2])/6, 255]);
	replaceText(color);
}
