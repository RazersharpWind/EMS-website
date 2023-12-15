function reloadPage(MutationList, observer) {
    //whatever we want to reload
    regProcess()
    viewDialogLoad()

}

config = {childList: true, subtree: true};


const observer = new MutationObserver(reloadPage);

observer.observe(document, config);