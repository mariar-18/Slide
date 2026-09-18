const fileInput =
    document.getElementById("presentation");

const fileName =
    document.getElementById("fileName");

const uploadBtn =
    document.getElementById("uploadBtn");

const uploadForm =
    document.getElementById("uploadForm");

const status =
    document.getElementById("status");


fileInput.addEventListener(
    "change",
    function () {

        const file =
            fileInput.files[0];

        if (!file) {
            return;
        }


        if (
            file.type !==
            "application/pdf"
        ) {

            alert(
                "Please select a PDF file."
            );

            fileInput.value = "";

            fileName.textContent = "";

            uploadBtn.style.display =
                "none";

            return;
        }


        if (
            file.size >
            20 * 1024 * 1024
        ) {

            alert(
                "File size must be less than 20 MB."
            );

            fileInput.value = "";

            fileName.textContent = "";

            uploadBtn.style.display =
                "none";

            return;
        }


        fileName.textContent =
            "Selected: " +
            file.name;

        uploadBtn.style.display =
            "inline-block";

    }
);


uploadForm.addEventListener(
    "submit",
    function () {

        uploadBtn.disabled = true;

        uploadBtn.textContent =
            "Uploading...";

        status.textContent =
            "Please wait...";

    }
);