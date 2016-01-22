function getReplay() {
	var vid = document.getElementById("myVideo"); 
	vid.play();
	getGraph7Data();
	getGraph8Data();
	setInterval(updateLiveGauges, 850)    
}