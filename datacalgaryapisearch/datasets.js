window.onload = loaddata;

var r, r2, r3, r4;

function loaddata() {
	document.getElementById("quadrant").addEventListener("keyup", function () { searchQuadrant(this.value); }, false);
	// ... the rest of your event listeners

	Promise.all([
		fetchData("https://data.calgary.ca/resource/35ra-9556.json"),  // Traffic Incidents 
		fetchData("https://data.calgary.ca/resource/k7p9-kppz.json"), // Traffic Camera 
		fetchData("https://data.calgary.ca/resource/848s-4m4z.json"), // Crime in Calgary	
		fetchData("https://data.calgary.ca/resource/c2es-76ed.json")  // Building Permit in Calgary	
	])
		.then(([data1, data2, data3, data4]) => {
			r = data1;
			r2 = data2;
			r3 = data3;
			r4 = data4;
			alert("Database loaded. You can start to search now!");
		})
		.catch((error) => {
			console.error("Error loading data", error);
		});
}

function fetchData(url) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				resolve(JSON.parse(xhr.responseText));
			} else if (xhr.readyState == 4) {
				reject("Error, status code = " + xhr.status);
			}
		};
		xhr.open("GET", url, true);
		xhr.send();
	});
}

function searchQuadrant(quadrant) {
	document.getElementById("searchvalue").innerHTML = "Search Traffic Incident by Quadrant of Calgary" + "<br>";
	var output = "<tr><th>Incident Information</th><th>Description</th><th>Start</th><th>Modified</th><th>Quadrant</th><th>Count</th>";
	var searchQuadrant;
	for (var i = 1; i < r.length; i++) {
		var obj = r[i];
		searchQuadrant = obj.quadrant;
		if (obj.quadrant != null) {
			if (searchQuadrant.toUpperCase().startsWith(quadrant.toUpperCase())) {
				output += "<tr><td>"
				output += obj.incident_info;
				output += "</td><td>"
				output += obj.description;
				output += "</td><td>"
				output += obj.start_dt;
				output += "</td><td>"
				output += obj.modified_dt;
				output += "</td><td>"
				output += obj.quadrant;
				output += "</td><td>"
				output += obj.count;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.latitude;
				output += ","
				output += obj.longitude;
				output += "> Click here to view in google map</a>"
				output += "</td><td>"
			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function searchIncidentByStart(start_dt) {
	document.getElementById("searchvalue").innerHTML = "Search Traffic Indicent by Start date of Calgary" + "<br>";
	var output = "<tr><th>Incident Information</th><th>Description</th><th>Start</th><th>Modified</th><th>Quadrant</th><th>Count</th>";
	var searchIncidentByStart;
	for (var i = 1; i < r.length; i++) {
		var obj = r[i];
		searchIncidentByStart = obj.start_dt;
		if (obj.start_dt != null) {
			if (searchIncidentByStart.startsWith(start_dt)) {
				output += "<tr><td>"
				output += obj.incident_info;
				output += "</td><td>"
				output += obj.description;
				output += "</td><td>"
				output += obj.start_dt;
				output += "</td><td>"
				output += obj.modified_dt;
				output += "</td><td>"
				output += obj.quadrant;
				output += "</td><td>"
				output += obj.count;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.latitude;
				output += ","
				output += obj.longitude;
				output += "> Click here to view in google map</a>"
				output += "</td><td>"
			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}


function searchIncidentByDescription(description) {
	document.getElementById("searchvalue").innerHTML = "Search for Traffic Incident by description of Calgary" + "<br>";
	var output = "<tr><th>Incident Information</th><th>Description</th><th>Start</th><th>Modified</th><th>Quadrant</th><th>Count</th>";
	var searchIncidentByDescription;
	for (var i = 1; i < r.length; i++) {
		var obj = r[i];
		searchIncidentByDescription = obj.description;
		if (obj.start_dt != null) {
			if (searchIncidentByDescription.toUpperCase().startsWith(description.toUpperCase())) {
				output += "<tr><td>"
				output += obj.incident_info;
				output += "</td><td>"
				output += obj.description;
				output += "</td><td>"
				output += obj.start_dt;
				output += "</td><td>"
				output += obj.modified_dt;
				output += "</td><td>"
				output += obj.quadrant;
				output += "</td><td>"
				output += obj.count;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.latitude;
				output += ","
				output += obj.longitude;
				output += "> Click here to view in google map</a>"
				output += "</td><td>"
			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function myFunction() {
	let x = document.getElementById("quadrant");
	x.value = x.value.toUpperCase();

	let y = document.getElementById("camera_location");
	y.value = y.value.toUpperCase();

	let z = document.getElementById("community_name");
	z.value = z.value.toUpperCase();

	let p = document.getElementById("permitnum");
	p.value = p.value.toUpperCase();

	let t = document.getElementById("description");
	t.value = t.value.toUpperCase();

	let q = document.getElementById("quadrant2");
	q.value = q.value.toUpperCase();

	let l = document.getElementById("description2");
	l.value = l.value.toUpperCase();


	let m = document.getElementById("category");
	m.value = m.value.toUpperCase();

	let k = document.getElementById("originaladdress");
	k.value = k.value.toUpperCase();
}



























function searchPermitbypermitnum(permitnum) {
	document.getElementById("searchvalue").innerHTML = "Search by Building Permit by permit number in Calgary" + "<br>";
	var output = "<tr><th>Permitnum</th><th>Status Current</th><th>Issued Date</th><th>Completed Date</th><th>Permit Type</th><th>Permit Class</th><th>Est Project Cost</th><th>Address</th><th>Select</th>";
	var searchPermitbypermitnum;
	for (var i = 1; i < r4.length; i++) {
		var obj = r4[i];
		searchPermitbypermitnum = obj.permitnum;
		if (obj.permitnum != null) {
			if (searchPermitbypermitnum.toUpperCase().startsWith(permitnum.toUpperCase())) {
				output += "<tr><td>"
				output += obj.permitnum;
				output += "</td><td>"
				output += obj.statuscurrent;
				output += "</td><td>"
				output += obj.issueddate;
				output += "</td><td>"
				output += obj.completeddate;
				output += "</td><td>"
				output += obj.permittype;
				output += "</td><td>"
				output += obj.permitclass;
				output += "</td><td>"
				output += obj.estprojectcost;
				output += "</td><td>"
				output += obj.originaladdress;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.latitude;
				output += ","
				output += obj.longitude;
				output += "> Click here to view in google map</a>"
				output += "</td><td>"
			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function searchPermitbyAddress(originaladdress) {
	document.getElementById("searchvalue").innerHTML = "Search by Building Permit by address in Calgary" + "<br>";
	var output = "<tr><th>Permitnum</th><th>Status Current</th><th>Issued Date</th><th>Completed Date</th><th>Permit Type</th><th>Permit Class</th><th>Est Project Cost</th><th>Address</th><th>Select</th>";
	var searchPermitbyAddress;
	for (var i = 1; i < r4.length; i++) {
		var obj = r4[i];
		searchPermitbyAddress = obj.originaladdress;
		if (obj.originaladdress != null) {
			if (searchPermitbyAddress.toUpperCase().startsWith(originaladdress.toUpperCase())) {
				output += "<tr><td>"
				output += obj.permitnum;
				output += "</td><td>"
				output += obj.statuscurrent;
				output += "</td><td>"
				output += obj.issueddate;
				output += "</td><td>"
				output += obj.completeddate;
				output += "</td><td>"
				output += obj.permittype;
				output += "</td><td>"
				output += obj.permitclass;
				output += "</td><td>"
				output += obj.estprojectcost;
				output += "</td><td>"
				output += obj.originaladdress;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.latitude;
				output += ","
				output += obj.longitude;
				output += "> Click here to view in google map</a>"
				output += "</td><td>"
			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function searchPermitbyEstimateCost(estprojectcost) {
	document.getElementById("searchvalue").innerHTML = "Search by Building Permit by estimate project cost in Calgary" + "<br>";
	var output = "<tr><th>Permitnum</th><th>Status Current</th><th>Issued Date</th><th>Completed Date</th><th>Permit Type</th><th>Permit Class</th><th>Est Project Cost</th><th>Address</th><th>Select</th>";
	var searchPermitbyAddress;
	for (var i = 1; i < r4.length; i++) {
		var obj = r4[i];
		searchPermitbyAddress = obj.estprojectcost;
		if (obj.estprojectcost != null) {
			if (searchPermitbyAddress.startsWith(estprojectcost)) {
				output += "<tr><td>"
				output += obj.permitnum;
				output += "</td><td>"
				output += obj.statuscurrent;
				output += "</td><td>"
				output += obj.issueddate;
				output += "</td><td>"
				output += obj.completeddate;
				output += "</td><td>"
				output += obj.permittype;
				output += "</td><td>"
				output += obj.permitclass;
				output += "</td><td>"
				output += obj.estprojectcost;
				output += "</td><td>"
				output += obj.originaladdress;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.latitude;
				output += ","
				output += obj.longitude;
				output += "> Click here to view in google map</a>"
				output += "</td><td>"
			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}


function searchCrimebyCoummity(community_name) {
	document.getElementById("searchvalue").innerHTML = "Search Crime by community in Calgary" + "<br>";
	var output = "<tr><th>Sector</th><th>Community Name</th><th>Group Category</th><th>Category</th><th>Count</th><th>Resident Count</th><th>Date</th><th>Year</th><th>Month</th><th>Select</th>";
	var searchCrimebyCoummity;
	for (var i = 1; i < r3.length; i++) {
		var obj = r3[i];
		searchCrimebyCoummity = obj.community_name;
		if (obj.community_name != null) {
			if (searchCrimebyCoummity.toUpperCase().startsWith(community_name.toUpperCase())) {
				output += "<tr><td>"
				output += obj.sector;
				output += "</td><td>"
				output += obj.community_name;
				output += "</td><td>"
				output += obj.group_category;
				output += "</td><td>"
				output += obj.category;
				output += "</td><td>"
				output += obj.count;
				output += "</td><td>"
				output += obj.resident_count;
				output += "</td><td>"
				output += obj.date;
				output += "</td><td>"
				output += obj.year;
				output += "</td><td>"
				output += obj.month;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.geocoded_column.latitude;
				output += ","
				output += obj.geocoded_column.longitude;
				output += "> Click here to view in google map</a>"
				output += "</td><td>"


			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function searchCrimebyCaterogy(category) {
	document.getElementById("searchvalue").innerHTML = "Search Crime by category in Calgary" + "<br>";
	var output = "<tr><th>Sector</th><th>Community Name</th><th>Group Category</th><th>Category</th><th>Count</th><th>Resident Count</th><th>Date</th><th>Year</th><th>Month</th><th>Select</th>";
	var searchCrimebyCaterogy;
	for (var i = 1; i < r3.length; i++) {
		var obj = r3[i];
		searchCrimebyCaterogy = obj.category;
		if (obj.month != null) {
			if (searchCrimebyCaterogy.toUpperCase().startsWith(category.toUpperCase())) {
				output += "<tr><td>"
				output += obj.sector;
				output += "</td><td>"
				output += obj.community_name;
				output += "</td><td>"
				output += obj.group_category;
				output += "</td><td>"
				output += obj.category;
				output += "</td><td>"
				output += obj.count;
				output += "</td><td>"
				output += obj.resident_count;
				output += "</td><td>"
				output += obj.date;
				output += "</td><td>"
				output += obj.year;
				output += "</td><td>"
				output += obj.month;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.geocoded_column.latitude;
				output += ","
				output += obj.geocoded_column.longitude;
				output += "> Click here to view in google map</a>"
				output += "</td><td>"


			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function searchCrimebyCount(count) {
	document.getElementById("searchvalue").innerHTML = "Search Crime by count in Calgary" + "<br>";
	var output = "<tr><th>Sector</th><th>Community Name</th><th>Group Category</th><th>Category</th><th>Count</th><th>Resident Count</th><th>Date</th><th>Year</th><th>Month</th><th>Select</th>";
	var searchCrimebyCount;
	for (var i = 1; i < r3.length; i++) {
		var obj = r3[i];
		searchCrimebyCount = obj.count;
		if (obj.month != null) {
			if (searchCrimebyCount.startsWith(count)) {
				output += "<tr><td>"
				output += obj.sector;
				output += "</td><td>"
				output += obj.community_name;
				output += "</td><td>"
				output += obj.group_category;
				output += "</td><td>"
				output += obj.category;
				output += "</td><td>"
				output += obj.count;
				output += "</td><td>"
				output += obj.resident_count;
				output += "</td><td>"
				output += obj.date;
				output += "</td><td>"
				output += obj.year;
				output += "</td><td>"
				output += obj.month;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.geocoded_column.latitude;
				output += ","
				output += obj.geocoded_column.longitude;
				output += "> Click here to view in google map</a>"
				output += "</td><td>"


			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}












function searchCameraLocation(camera_location) {
	document.getElementById("searchvalue").innerHTML = "Search Traffic Camera by location in Calgary" + "<br>";
	var output = "<tr><th>Description</th><th>Quadrant</th><th>Camera Location</th><th>Coordinates</th>";
	var searchCameraLocation;
	for (var i = 1; i < r2.length; i++) {
		var obj = r2[i];
		searchCameraLocation = obj.camera_location;
		if (obj.camera_location != null) {
			if (searchCameraLocation.toUpperCase().startsWith(camera_location.toUpperCase())) {
				output += "<tr><td>"
				output += obj.camera_url.description;
				output += "</td><td>"
				output += obj.quadrant;
				output += "</td><td>"
				output += obj.camera_location;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.point.coordinates[1];
				output += ","
				output += obj.point.coordinates[0];
				output += "> Click here to view in google map</a>"
				output += "</td><td>"
			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}


function searchCameraQuadrant(quadrant2) {
	document.getElementById("searchvalue").innerHTML = "Search Traffic Camera by quadrant in Calgary" + "<br>";
	var output = "<tr><th>Description</th><th>Quadrant</th><th>Camera Location</th><th>Coordinates</th>";
	var searchCameraQuadrant;
	for (var i = 1; i < r2.length; i++) {
		var obj = r2[i];
		searchCameraQuadrant = obj.quadrant;
		if (obj.quadrant != null) {
			if (searchCameraQuadrant.toUpperCase().startsWith(quadrant2.toUpperCase())) {
				output += "<tr><td>"
				output += obj.camera_url.description;
				output += "</td><td>"
				output += obj.quadrant;
				output += "</td><td>"
				output += obj.camera_location;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.point.coordinates[1];
				output += ","
				output += obj.point.coordinates[0];
				output += "> Click here to view in google map</a>"
				output += "</td><td>"
			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function searchCamerabyDescription(description2) {
	document.getElementById("searchvalue").innerHTML = "Search Traffic Camera by description in Calgary" + "<br>";
	var output = "<tr><th>Description</th><th>Quadrant</th><th>Camera Location</th><th>Coordinates</th>";
	var searchCamerabyDescription;
	for (var i = 1; i < r2.length; i++) {
		var obj = r2[i];
		searchCamerabyDescription = obj.camera_url.description;
		if (obj.camera_url.description != null) {
			if (searchCamerabyDescription.toUpperCase().startsWith(description2.toUpperCase())) {
				output += "<tr><td>"
				output += obj.camera_url.description;
				output += "</td><td>"
				output += obj.quadrant;
				output += "</td><td>"
				output += obj.camera_location;
				output += "</td><td>"
				output += "<a href=https://maps.google.com/?q="
				output += obj.point.coordinates[1];
				output += ","
				output += obj.point.coordinates[0];
				output += "> Click here to view in google map</a>"
				output += "</td><td>"
			}
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}




