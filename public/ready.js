const params =
    new URLSearchParams(
        window.location.search
    );

const file =
    params.get("file");

const name =
    params.get("name");

document.getElementById(
    "fileName"
).textContent =
    name || "Presentation";


document.getElementById(
    "startButton"
).addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        window.location.replace(
            "/presentation.html?file=" +
            encodeURIComponent(file) +
            "&name=" +
            encodeURIComponent(
                name || "Presentation"
            )
        );

    }
);