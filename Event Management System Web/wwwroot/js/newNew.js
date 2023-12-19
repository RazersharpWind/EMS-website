let publishNewButton = document.getElementById('publish-new-button');
let newHeaderInputs = document.querySelector(".new-header-input");
let newDetailInputs = document.getElementById('textarea');
let newsContainer = document.getElementById('news-container');
let newImageLink = document.querySelector(".new-img-wrapper").firstElementChild;


//publishNewButton.addEventListener("click", ()=>{
//    //newImageLink =document.querySelector(".new-img-wrapper").firstElementChild;

//    const date = new Date();
//    const newWrittenDate = date.toString().split(' ');
//    const newTemplate =
//    `<div class="new-img-wrapper h-48 w-full overflow-hidden rounded-xl drop-shadow-xl relative">
//    <img class="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover m-auto min-w-full min-h-full w-auto h-auto" src=${newImageLink.src} alt="">
//    </div>
//    <div class="new-text w-full p-3">
//        <div class="new-header my-2">
//            <div class="new-header-text flex justify-between w-full items-center relative">
//                <h2 class="text-2xl font-bold my-1">${newHeaderInputs.value}</h2>
//                <div class="manage-button bi-three-dots w-fit cursor-pointer"></div>
//                <div class="new-manage">
//                    <div class="manage-new text-md w-full edit-new">Edit</div>
//                    <hr class="w-5/6 bg-yellow-500 h-[2px]">
//                    <div class="manage-new text-md w-full remove-new">Remove</div>
//                </div>
//            </div>
//            <div class="new-date">
//                <span>Posted in</span>
//                <span class="new-date-written">${newWrittenDate[0] +" "+ newWrittenDate[1] +" "+ newWrittenDate[2] +" "+ newWrittenDate[3]+" "+ newWrittenDate[4]}</span>
//            </div>
//        </div>
//        <div class="new-details">
//            <p>${newDetailInputs.value}</p>
//        </div>
//    </div>`
//    //i can not just grap the xode and paste it so i have to create a parent div and assign its classes to the new one then paste the whole code as innerHTML

//    const newNew = document.createElement("div");
//    newNew.classList.add("new", "my-5", "p-3", "h-fit", "border", "border-yellow-600", "rounded-xl", "flex" ,"flex-col", "items-end");
//    newNew.innerHTML = newTemplate;
//    newsContainer.insertBefore(newNew, newsContainer.firstElementChild)
//    newHeaderInputs.value = ""
//    newDetailInputs.value = ""
//    newImageLink.src =""
//})
