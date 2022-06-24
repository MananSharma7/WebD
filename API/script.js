fetch("https://api.chucknorris.io/jokes/random")

.then((response) => {
    return response.json();
})

.then((data) => {
    const joke = document.querySelector(".joke");
    joke.innerHTML = data.value;
    console.log("data =", data.value);
})

.catch();

const btn = document.querySelector(".change");
btn.addEventListener('click',() => {
    location.reload();
});
