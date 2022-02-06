function filterCourses(courseType) {
    var courses = document.querySelectorAll(".courses-cards .course")
    var i, k;
    if (courseType == "course") {
        for (i = 0; i < courses.length; i++) {
            courses[i].style.display = "table-column";
        }
    }
    else if (courseType == "dubai-course") {
        for (i = 0; i < courses.length; i++) {
            courses[i].style.display = "none";
        }
        var dubaiCourses = document.querySelectorAll(".dubai-course");
        for (k = 0; k < dubaiCourses.length; k++) {
            dubaiCourses[k].style.display = "table-column";
        }
    }
    else if (courseType == "cairo-course") {
        for (i = 0; i < courses.length; i++) {
            courses[i].style.display = "none";
        }
        var cairoCourses = document.querySelectorAll(".cairo-course");
        for (k = 0; k < cairoCourses.length; k++) {
            cairoCourses[k].style.display = "table-column";
        }
    }
    else if (courseType == "online-course") {
        for (i = 0; i < courses.length; i++) {
            courses[i].style.display = "none";
        }
        var cairoCourses = document.querySelectorAll(".online-course");
        for (k = 0; k < cairoCourses.length; k++) {
            cairoCourses[k].style.display = "table-column";
        }
    }
}