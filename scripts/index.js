
const url = "http://localhost:8081/api/courses";// THIS THE URL list of our courses.

//FETCH INTO OUR URL TO DISPLAY THE LIST

fetch(url)
.then(response => response.json())
.then(data => {
    courseList.innerHTML = data.map(item => 
        `<tr>
        <td>${item.courseNum}</td>
        <td>${item.courseName}</td>
        <td><a href ="details.html?courseId=${item.id}">Details</a></td>
        </tr>`).join("")
});
