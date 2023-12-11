function displayFiles() {
    const inputFile = document.getElementById("attachFile")
    const file = inputFile.files[0];

    if (file) {
        const fileName = file.name;
        const fileSize = file.size;
        const fileType = file.type;

        document.querySelector(".file-name").innerText = fileName;
        document.querySelector(".file-type").innerText = fileType;
        document.querySelector(".file-size").innerText = fileSize;


    }



}


 
