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

function replaceText(color){	
					//HaRe
		 if (color[0] === 218 && color[1] ===  91 && color[2] ===  96) frame.src = "/text/HaYi.html";
	else if (color[0] === 197 && color[1] ===  98 && color[2] === 162) frame.src = "/text/HaMnq.html";
	else if (color[0] === 226 && color[1] ===  31 && color[2] ===  86) frame.src = "/text/HaSi.html";
	else if (color[0] === 204 && color[1] ===  50 && color[2] === 100) frame.src = "/text/HaMe.html";
	else if (color[0] === 235 && color[1] === 165 && color[2] === 255) frame.src = "/text/HaFu.html";
	else if (color[0] === 168 && color[1] ===  45 && color[2] === 210) frame.src = "/text/HaRyu.html";

					//Desert
	else if (color[0] === 190 && color[1] === 128 && color[2] ===  74) frame.src = "/text/HaRim.html";
	else if (color[0] === 192 && color[1] === 128 && color[2] ===  93) frame.src = "/text/Krin.html";
	else if (color[0] === 201 && color[1] === 169 && color[2] ===  99) frame.src = "/text/Adzir.html";
	else if (color[0] === 213 && color[1] === 217 && color[2] ===  68) frame.src = "/text/Edin.html";
	else if (color[0] === 190 && color[1] === 179 && color[2] ===  67) frame.src = "/text/Dzuri.html";
	else if (color[0] === 202 && color[1] === 238 && color[2] === 103) frame.src = "/text/Alhim.html";
	else if (color[0] === 213 && color[1] === 233 && color[2] ===  93) frame.src = "/text/Agui.html";

					//Colonies
	else if (color[0] === 142 && color[1] === 138 && color[2] === 100) frame.src = "/text/Urda.html";
	else if (color[0] === 196 && color[1] === 200 && color[2] === 166) frame.src = "/text/Aret.html";
	else if (color[0] === 107 && color[1] ===  48 && color[2] === 159) frame.src = "/text/HaGo.html";

					//South
	else if (color[0] === 127 && color[1] === 194 && color[2] ===  68) frame.src = "/text/Toua.html";
	else if (color[0] ===  52 && color[1] ===  87 && color[2] ===  21) frame.src = "/text/Kuki.html";
	else if (color[0] ===  42 && color[1] === 194 && color[2] === 195) frame.src = "/text/FaRa.html";


	else 	   														   frame.src = "/text/base.html";
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
