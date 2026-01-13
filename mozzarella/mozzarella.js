	setInterval(mozztime, 500);
	const date = new Date("2026-01-13T12:15:00");
	function mozztime() {
		let dhms = [];
		const currdate = new Date();
		dhmsConv(dhms, currdate-date);
		document.getElementById("timer").innerHTML = dhms[0] + " day(s), " + dhms[1] + " hours, " + dhms[2] + " minutes, and " + dhms [3] + " seconds.";
		document.getElementById("mozzdate").innerHTML = "I last had a mozzarella stick on " + date + " Central Time.";
	}
	function dhmsConv(list, time) {
		list.push(Math.floor((time)/1000/60/60/24));
		list.push(Math.floor((time)/1000/60/60) % 24);
		list.push(Math.floor((time)/1000/60) % 60);
		list.push(Math.floor((time)/1000) % 60);

	}










