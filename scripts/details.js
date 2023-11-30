
    
const urlParams = new URLSearchParams(location.search);//Parse search string primative
// location.search is the way you access
// the query string portion of the URL
let id = -1;
if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid")


/* Now that you know the course id, make an
 AJAX call to get that one course
 and in the callback, display it.
 Hint: you can create the URL you need for
 the ajax request by concatenating 
  "http://localhost:8081pi/courses/" with the id!*/



fetch(`http://localhost:8081/api/courses/${id}`)
    .then(response => response.json())
    .then(item => {
        details.innerHTML =
        `
    <tr><td>ID:              </td><td class="value"> ${item.courseNum}</td></tr>
    <tr><td>Course Name:     </td><td class="value"> ${item.courseName}</td></tr>
    <tr><td>Dept:            </td><td class="value"> ${item.dept}</td></tr>
    <tr><td>Instructor:      </td><td class="value"> ${item.instructor}</td></tr>
    <tr><td>Start Date:      </td><td class="value"> ${item.startDate}</td></tr>
    <tr><td><Number of Days: </td><td class="value"> ${item.numDays}</td></tr>
    `
    })
}
