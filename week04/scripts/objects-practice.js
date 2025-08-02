// example
let person = {
    name: "Anonia Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "playing guitar", "hiking"],
    address: {
        street: "123 Camino Real",
        city: "Santa Rosa",
        country: "Honduras"
    },
    isEmployed: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// practice
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {
            section: "001",
            enrolled: 95,
            instructor: "Roberto Diaz Rodriguez"
        },
        {
            section: "002",
            enrolled: 80,
            instructor: "Sarah Goble"
        }
    ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function sectionTemplate(section) {
    return `<tr>
                <td>${section.section}</td>
                <td>${section.enrolled}</td>
                <td>${section.instructor}</td>
            </tr>`;
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);