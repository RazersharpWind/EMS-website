const loadNews = () => {

fetch("../../news.json")
    .then(data => data.json())
    .then(nnew => {
        console.log(nnew);
        nnew.forEach((n)=>{
            const newTemplate =`
                <div class="new-img-wrapper h-48 w-full overflow-hidden rounded-xl drop-shadow-xl relative">
                    <img class="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover m-auto min-w-full min-h-full w-auto h-auto" src="${n["new-image"]}" alt="">
                </div>
                <div class="new-text p-3 w-full">
                    <div class="new-header my-2">
                        <div class="new-header-text flex justify-between w-full items-center relative">
                            <h2 class="text-2xl font-bold my-1">${n["new-header"]}</h2>
                            <div class="manage-button bi-three-dots w-fit cursor-pointer"></div>
                            <div class="new-manage">
                                <div class="manage-new edit-new">تعديل </div>
                                <hr class=" w-5/6 bg-yellow-500 h-[2px]">
                                <div class="manage-new remove-new">إزالة</div>
                            </div>
                        </div>
                        <div class="new-date">
                            <span>نزل بتاريخ</span>
                            <span class="new-date-written">${n["new-data-time"]}</span>
                        </div>
                    </div>
                    <div class="new-details">
                        <p>${n["new-details"]}</p>
                    </div>
                </div>`;


            const newTemp = document.createElement("div");
            newTemp.classList.add("new", "my-5", "p-3", "h-fit", "border", "border-yellow-600", "rounded-xl", "flex", "flex-col", "items-end")
            newTemp.innerHTML = newTemplate;

            document.getElementById("news-container").append(newTemp)
        })


    })














}

loadNews()