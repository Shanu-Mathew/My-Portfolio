/* ======================== Typing Animation ========================  */
var typed=new Typed(".typing", {
    strings: ["Machine Learning Developer......", "Data Scientist......", "Software Engineer......", "Data Analyst......", "Web Developer......", "Freelancer......","NLP Expert......","Computer Vision Expert......"],
    typeSpeed:60,
    BackSpeed:40,
    loop:true
})

/* ======================== Aside ========================  */

const nav=document.querySelector(".nav"),
navList=nav.querySelectorAll("li"),
totalNavList=navList.length,
allSection=document.querySelectorAll(".section"),
totalSection=allSection.length;

for(let i=0;i<totalNavList;i++){  
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function()
    {
        removeBackSection();
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for(let j=0;j<totalNavList;j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
            }

            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth<1200){
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection(){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num){
    allSection[num].classList.add("back-section");
}

function showSection(element){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split('#')[1];
    const targetSection = document.querySelector("#" + target);
    targetSection.classList.add("active")
    

    // Scroll to the top of the target section
    targetSection.scrollTop = 0;
}
function updateNav(element){
    for(let i=0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active");
        const target= element.getAttribute("href").split("#")[1];
        
        if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }   
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex)
    showSection(this)
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn =document.querySelector(".nav-toggler"),
    aside=document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.toggle("open");
        }
    }


const resumeFileURL = "Assets/documents/Resume.pdf";

document.getElementById('downloadCV').addEventListener('click', function () {
    downloadResume();
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = resumeFileURL;
    link.target = '_blank'; // Opens the PDF in a new tab
    link.download = 'resume.pdf'; // Sets the filename of the downloaded file

    // For older browsers, or if the download attribute is not supported
    if (typeof link.download === 'undefined') {
        link.target = '_self';
        link.setAttribute('download', 'resume.pdf');
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


const textInput = document.getElementById("input-textarea")
const textArea = document.getElementById("textarea")

textInput.addEventListener("input", function () {
    textInput.value = textArea.value;
});



/* ======================== Portfolio Image Github Link ========================  */

const portfolioItems = document.querySelectorAll('.portfolio-item');

// Add a click event listener to each portfolio item
portfolioItems.forEach(item => {
    // Find the image element and link element within each portfolio item
    const image = item.querySelector('.portfolio-img .portfolio-view');
    const link = item.querySelector('a');

    // Add a click event listener to the image
    image.addEventListener('click', () => {
        // Get the URL from the link and open it in a new tab/window
        const url = link.getAttribute('href');
        if (url) {
            window.open(url, '_blank');
        }
    });
});



/* ======================== Linktree Link ========================  */
const linktree_icon = document.querySelector(".linktree")
const linktree_link=  document.querySelector(".linktree-link")

linktree_icon.addEventListener('click', () => {
    // Get the URL from the link and open it in a new tab/window
    const url = linktree_link.getAttribute('href');
    if (url) {
        window.open(url, '_blank');
    }
});