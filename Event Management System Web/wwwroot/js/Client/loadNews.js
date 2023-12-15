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
                            
                        </div>
                        <div class="new-date text-sm text-gray-400">
                            <span>Posted on </span>
                            <span class="new-date-written">${n["new-data-time"]}</span>
                        </div>
                    </div>
                    <div class="new-details">
                        <p class="text-justify">${n["new-details"]}</p>
                    </div>
                </div>`;


            const newTemp = document.createElement("div");
            newTemp.classList.add("new", "mt-2", "mb-5", "p-3", "h-fit", "border", "border-yellow-600", "rounded-xl", "flex", "flex-col", "items-end")
            newTemp.innerHTML = newTemplate;

            document.getElementById("news-container").append(newTemp)
        })


    })
const loadNews = () => {

    window.addEventListener("click", (e)=>{
        const manageButtons = document.querySelectorAll(".manage-button");
        if(e.target.classList.contains("manage-button") && !e.target.nextElementSibling.getAttribute("clicked")){
                e.target.nextElementSibling.setAttribute("clicked", "")
        }
        else{
                manageButtons.forEach((manageButton)=>{manageButton.nextElementSibling.removeAttribute("clicked");})
        }

        if(e.target.classList.contains("remove-new")){
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("hidden")
        }
        else if(e.target.classList.contains("edit-new")){

        }



    })
}

loadNews()



function handleLoadNewsMutations(mutationsList, observer) {

    loadNews()
    }

  // Configuration for the observer
    const loadNewsConfig = { childList: true, subtree: true };

  // Create a new MutationObserver instance
    const loadNewsObserver = new MutationObserver(handleLoadNewsMutations);

  // Start observing the document with the specified configuration
    loadNewsObserver.observe(document.getElementById("news-container"), loadNewsConfig);
