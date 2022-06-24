const courses = [{name: "Physics", price: "200"}, {name: "Maths", price: "400"}, {name: "Chemistry", price: "700"}, {name: "English", price: "100"}, {name: "IT", price: "50"}];

function genrateList(){

    const ul = document.querySelector(".list-group");
    ul.innerHTML="";

    courses.forEach(
        (courses) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            const name = document.createTextNode(courses.name);
            li.appendChild(name);

            const span = document.createElement("span");
            span.classList.add("float-right");
            const price = document.createTextNode("Rs " + courses.price);
            span.appendChild(price);

            ul.appendChild(li);
            li.appendChild(span)
        }
    );
}
    
window.addEventListener("load",genrateList());

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    genrateList();
});
