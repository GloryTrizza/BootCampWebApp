const server = "http://localhost:3000/";
async function fetchStudents() {
    let response = await fetch(server + "getstudents", { method: "GET" });
    let data = await response.text();

    var a = 0,
        b = 0,
        c = 0,
        d = 0,
        e = 0,
        f = 0,
        g = 0;
    jsondata = JSON.parse(data);
    for (i = 0; i < jsondata.length; i++) {
        if (jsondata[i].a) {
            a++;
        }
        if (jsondata[i].b) {
            b++;
        }
        if (jsondata[i].c) {
            c++;
        }
        if (jsondata[i].d) {
            d++;
        }
        if (jsondata[i].e) {
            e++;
        }
        if (jsondata[i].f) {
            f++;
        }
        if (jsondata[i].g) {
            g++;
        }
    }
    var summed = [a, b, c, d, e, f, g];

    var colors = [
        "#007bff",
        "#28a745",
        "#333333",
        "#c3e6cb",
        "#dc3545",
        "#6c757d",
    ];

    var barColors = ["red", "green", "blue", "orange", "brown", "grey", "purple"];
    var ch = new Chart("cht", {
        type: "pie",
        data: {
            labels: ["The technologies used", "The skills acquired", "The food and drinks", "The accommodation", "The trainers", "Your fellow students", "Nothing"],
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: barColors,
                borderColor: barColors,
                borderWidth: 4,
                pointBackgroundColor: colors[1],
                data: summed,
            }, ],
        },
        options: {
            legend: { display: true },
            /*
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                },


                            }, ],
                        },
            */
        },
    });
}
fetchStudents();

var x = true;

var r1 = document.getElementById("radio1");
var r2 = document.getElementById("radio2");
var r3 = document.getElementById("radio3");
var r4 = document.getElementById("radio4");
var r5 = document.getElementById("radio5");
var r6 = document.getElementById("radio6");
var r7 = document.getElementById("radio7");

function func1() {
    if (x) {
        r1.disabled = true;
        r2.disabled = true;
        r3.disabled = true;
        r4.disabled = true;
        r5.disabled = true;
        r6.disabled = true;
        x = false;
    } else {
        r1.disabled = false;
        r2.disabled = false;
        r3.disabled = false;
        r4.disabled = false;
        r5.disabled = false;
        r6.disabled = false;
        x = true;
    }
}

function func2() {
    if ((r1.checked == true) ||
        (r2.checked == true) ||
        (r3.checked == true) ||
        (r4.checked == true) ||
        (r5.checked == true) ||
        (r6.checked == true)) {
        r7.disabled = true;
    }
    if ((r1.checked == false) &&
        (r2.checked == false) &&
        (r3.checked == false) &&
        (r4.checked == false) &&
        (r5.checked == false) &&
        (r6.checked == false)) {
        r7.disabled = false;
    }
}

async function submit() {
    const url = server + "students";
    const student = {
        a: radio1,
        b: radio2,
        c: radio3,
        d: radio4,
        e: radio5,
        f: radio6,
        g: radio7,
    };

    if (r1.checked) {
        student.a = "The technologies used";
    } else {
        student.a = null;
    }
    if (r2.checked) {
        student.b = "The skills acquired";
    } else {
        student.b = null;
    }
    if (r3.checked) {
        student.c = "The food and drinks";
    } else {
        student.c = null;
    }
    if (r4.checked) {
        student.d = "The accommodation";
    } else {
        student.d = null;
    }
    if (r5.checked) {
        student.e = "The trainers";
    } else {
        student.e = null;
    }
    if (r6.checked) {
        student.f = "Your fellow students";
    } else {
        student.f = null;
    }
    if (r7.checked) {
        student.g = "Nothing";
    } else {
        student.g = null;
    }

    console.log(student);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
    };
    const response = await fetch(url, options);
    console.log(response);

    location.reload();
}
/*
function populateContent(students) {
    var table = document.getElementById('content');
    table.innerHTML = "<tr><th>Student Id</th><th>Full Name</th></tr>";
    students.forEach(student => {
        var row = document.createElement('tr');
        var dataId = document.createElement('td');
        var textId = document.createTextNode(student.id);
        dataId.appendChild(textId);
        var dataName = document.createElement('td');
        var textName = document.createTextNode(student.name);
        dataName.appendChild(textName);
        row.appendChild(dataId);
        row.appendChild(dataName);
        table.appendChild(row);
    });
}
*/
document.querySelector("form").addEventListener("submit", (e) => {
    if (r1.checked) {
        radio1 = r1.value;
    }
    if (r2.checked) {
        radio1 = r2.value;
    }
    if (r3.checked) {
        radio1 = r3.value;
    }
    if (r4.checked) {
        radio1 = r4.value;
    }
    if (r5.checked) {
        radio1 = r5.value;
    }
    if (r6.checked) {
        radio1 = r6.value;
    }
    if (r7.checked) {
        radio1 = r7.value;
    }
    submit();
    e.preventDefault();
});