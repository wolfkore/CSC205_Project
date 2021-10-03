
 let courses = [
    {"Line":81,"Department":"BUS","Number":344,"Section":1,"Title":"MANAGEMENT OF INFORMATION SYSTEMS","Faculty":"Richards, Gordon P.","Openings":2,"Capacity":30,"Status":"Open","Day":"MWF","Time":"1:25-2:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":3,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":167,"Department":"CSC","Number":133,"Section":2,"Title":"SURVEY OF COMPUTER SCIENCE","Faculty":"Madeira, Scott","Openings":6,"Capacity":15,"Status":"Open","Day":"H","Time":"2:00-4:50 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":0,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":168,"Department":"CSC","Number":133,"Section":3,"Title":"SURVEY OF COMPUTER SCIENCE","Faculty":"Madeira, Scott","Openings":7,"Capacity":15,"Status":"Open","Day":"T","Time":"6:30-9:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":0,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":169,"Department":"CSC","Number":133,"Section":"0A","Title":"SURVEY OF COMPUTER SCIENCE","Faculty":"Richards, Gordon P.","Openings":15,"Capacity":45,"Status":"Open","Day":"TH","Time":"8:00-9:20 AM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 110 Chemistry room","Credits":4,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":170,"Department":"CSC","Number":190,"Section":1,"Title":"HTML","Faculty":"Madeira, Scott","Openings":4,"Capacity":25,"Status":"Open","Day":"M","Time":"2:30-3:25 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 312A","Credits":1,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":171,"Department":"CSC","Number":205,"Section":1,"Title":"HCI DESIGN & PROGRAMMING","Faculty":"Madeira, Scott","Openings":10,"Capacity":25,"Status":"Open","Day":"MWF","Time":"11:15-12:10 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":3,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":172,"Department":"CSC","Number":344,"Section":1,"Title":"MANAGEMENT INFORMATION SYSTEM","Faculty":"Poteete, Paul W. Steffine, Aaron","Openings":2,"Capacity":90,"Status":"Open","Day":"MWF","Time":"1:25-2:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":3,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":173,"Department":"CSC","Number":363,"Section":"E1","Title":"DATABASE SYSTEMS","Faculty":"Hinderliter, Jeffery A","Openings":4,"Capacity":30,"Status":"Open","Day":"T","Time":"6:30-9:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 233 Engineering Lab\/Classroom","Credits":3,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":296,"Department":"HUM","Number":103,"Section":"0A","Title":"INVITATION TO THE HUMANTIES","Faculty":"Miller, Eric John","Openings":12,"Capacity":180,"Status":"Open","Day":"W","Time":"11:15-12:10 PM","Campus":" Main Campus","Building":" Old Main","Room":" John White Chapel","Credits":0,"Start":"8\/30\/2021","End":"12\/17\/2021"}
]
 //create a function to make the table
	function makeTableHeader(table, information) {
	//actually generate the table header
	let thead = table.createTHead();
// insert the row 
  let row = thead.insertRow();
  // fill the cells with the courses information
  for (let column of information) {
    let th = document.createElement("th");
    let text = document.createTextNode(column);
    th.appendChild(text);
    row.appendChild(th);
  }
}
// create the rest of the table
function makeTable(table, information) {
	// create the table body
	let tbody = table.createTBody(); 
	// fill in all of the cells of the tbody
  for (let element of information) {
    let row = table.insertRow();
	//loop through courses and fill in the proper cells
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function deleteColumns(courses) {
	// delete the necessary columns out of the table.
	courses.forEach(function (course) {
		delete course.Line;
		delete course.Section;
		delete course.Openings;
		delete course.Capacity; 
		delete course.Room;
		delete course.Start; 
		delete course.End;
		delete course.Campus; 
		
	}); 
	// return the edited courses array
	return courses; 
}
// assign a variable to hold the edited array
let newData = deleteColumns(courses); 
// get the table id 
let table = document.getElementById("course-table");
// assign the information variable
let information = Object.keys(newData[0]);
// actual use the function
makeTableHeader(table, information);
makeTable(table, courses);
				
				


// Pop up an alert on the page after the page and all stylesheets and images have loaded
window.onload = (event) => {

    
    // Log a message to the console to show that you can use this for debugging purposes
    console.log('The page is loaded. We are in the console');
};
