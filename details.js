let courses = [
    {"Line":81,"Department":"BUS","Number":344,"Section":1,"Title":"MANAGEMENT OF INFORMATION SYSTEMS","Faculty":"Richards, Gordon P.","Openings":2,"Capacity":30,"Status":"Open","Day":"MWF","startTime":"1:25 PM","endTime":"2:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":"SE 341 Computer Science Lab","Credits":3,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":167,"Department":"CSC","Number":133,"Section":2,"Title":"SURVEY OF COMPUTER SCIENCE","Faculty":"Madeira, Scott","Openings":6,"Capacity":15,"Status":"Open","Day":"H","startTime":"2:00 PM","endTime":"4:50 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":0,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":168,"Department":"CSC","Number":133,"Section":3,"Title":"SURVEY OF COMPUTER SCIENCE","Faculty":"Madeira, Scott","Openings":7,"Capacity":15,"Status":"Open","Day":"T","startTime":"6:30 PM","endTime":"9:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":0,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":169,"Department":"CSC","Number":133,"Section":"0A","Title":"SURVEY OF COMPUTER SCIENCE","Faculty":"Richards, Gordon P.","Openings":15,"Capacity":45,"Status":"Open","Day":"TH","startTime":"8:00 AM","endTime":"9:20 AM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 110 Chemistry room","Credits":4,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":170,"Department":"CSC","Number":190,"Section":1,"Title":"HTML","Faculty":"Madeira, Scott","Openings":4,"Capacity":25,"Status":"Open","Day":"M","startTime":"2:30 PM","endTime":"3:25 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 312A","Credits":1,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":171,"Department":"CSC","Number":205,"Section":1,"Title":"HCI DESIGN & PROGRAMMING","Faculty":"Madeira, Scott","Openings":10,"Capacity":25,"Status":"Open","Day":"MWF","startTime":"11:15 AM","endTime":"12:10 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":3,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":172,"Department":"CSC","Number":344,"Section":1,"Title":"MANAGEMENT INFORMATION SYSTEM","Faculty":"Poteete, Paul W. Steffine, Aaron","Openings":2,"Capacity":90,"Status":"Open","Day":"MWF","startTime":"1:25 PM","endTime":"2:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":3,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":173,"Department":"CSC","Number":363,"Section":"E1","Title":"DATABASE SYSTEMS","Faculty":"Hinderliter, Jeffery A","Openings":4,"Capacity":30,"Status":"Open","Day":"T","startTime":"6:30 PM","endTime":"9:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 233 Engineering Lab\/Classroom","Credits":3,"Start":"8\/30\/2021","End":"12\/17\/2021\r\n"}
    ,{"Line":296,"Department":"HUM","Number":103,"Section":"0A","Title":"INVITATION TO THE HUMANTIES","Faculty":"Miller, Eric John","Openings":12,"Capacity":180,"Status":"Open","Day":"W","startTime":"11:15 PM","endTime":"12:10 PM","Campus":" Main Campus","Building":" Old Main","Room":" John White Chapel","Credits":0,"Start":"8\/30\/2021","End":"12\/17\/2021"}
]

//let lines = Document.getElementById("Line"); 
const courseTitlejs = document.getElementById("courseTitle"); 
// variables for the dataTable
//var courseCode = Document.getElementById("Number"); 
//var sectionName = Document.getElementById("Section");
//var professor = Document.getElementById("Faculty");
//var credits = Document.getElementById("Credits"); 
// variables for the timeTable
//var day = Document.getElementById("Day");
//var startTime = Document.getElementById("startTime");
//var endTime = Document.getElementById("endTime");
//var building = Document.getElementById("Building");
//var room = Document.getElementById("Room");
//var campus = Document.getElementById("Campus");
// variables for the creditsTable
//var courseStatus = Document.getElementById("Status"); 
//var seatsOpen = Document.getElementById("Openings");
//var totalSeats = Document.getElementById("Capacity");
//var startDate = Document.getElementById("Start");
//var endDate = Document.getElementById("End"); 

document.getElementById("courseTitle").innerHTML = "Management of Information Systems";

document.getElementById("courseCode").innerHTML = "344"; 

document.getElementById("sectionName").innerHTML = "1";

document.getElementById("professor").innerHTML = "Richards, Gordon";

document.getElementById("credits").innerHTML = "3";  

// timeP paragraph

document.getElementById("day").innerHTML = "MWF";
document.getElementById("startTime").innerHTML = "1:25 PM";
document.getElementById("endTime").innerHTML = "2:20 PM";
document.getElementById("building").innerHTML = "Science and Engineering"; 
document.getElementById("room").innerHTML = "SE 341 Computer Science Lab"; 
document.getElementById("campus").innerHTML = "Main Campus"; 
document.getElementById("line").innerHTML = "81";

// creditsP paragraph

document.getElementById("status").innerHTML = "Open";
document.getElementById("seatsOpen").innerHTML = "2"; 
document.getElementById("totalSeats").innerHTML = "30";
document.getElementById("startDate").innerHTML = "8/30/2021"; 
document.getElementById("endDate").innerHTML = "12/17/2021";



