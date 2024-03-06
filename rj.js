let ipt = document.querySelector("#ipt");
let btn =  document.querySelector(".btn");
let img = document.querySelector(".img");


async function getdata(){
    let iptval = ipt.value;
    iptval.toLowerCase();
    if(ipt.value == 'arjaytar'){
        img.src = 'rjtar.jpg'; // Wrap the URL in quotes
    }
    else if(ipt.value == "rjkulangot" || ipt.value == "arjay" || ipt.value == 'rj'){
        img.src = 'rjkulangot.jpg';
    }

    const url = `https://movies-api14.p.rapidapi.com/search?query=${iptval}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7430d00f39msh008b5f97fec8602p1369cejsna38df4f98444',
		'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
	}
}
try {
	const response = await fetch(url, options);
	const result = await response.json();
    let results = result.contents;
    let ran = Math.floor(Math.random() * results.length);
    img.src = results[ran].poster_path
	console.log(results);

} catch (error) {
	console.error(error);
}

ipt.value = ""
}


btn.addEventListener("click", (e) => {
    img.style.display = 'block'
    getdata()
})