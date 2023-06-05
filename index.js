function route(event) {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
}

const routes = {
  404: "/templates/404.html",
  "/": "/templates/home.html",
  "/about": "/templates/about.html",
  "/lorem": "/templates/lorem.html",
};

function handleLocation() {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  console.log(route);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", route, true);
  xhr.onload = function () {
    document.querySelector("#main-page").innerHTML = this.responseText;
  };

  xhr.send();
  document.querySelector("#main-page").innerHTML = "Loading..";
}

document.querySelectorAll("a").forEach((elem) => {
  elem.addEventListener("click", route);
});

window.onpopstate = handleLocation;
handleLocation();
