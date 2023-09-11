/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// const liButtons = document.querySelectorAll(".navbar__menu #navbar__list li");
// console.log(liButtons)
const mySections = document.querySelectorAll("section")
const list = document.getElementById("navbar__list")


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Active Classes

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNavBar(){
    for(const section of mySections){
        const title = section.getAttribute("data-nav")
        const sectionID = section.getAttribute("id")
        const ListItem = document.createElement("li")
        ListItem.textContent = title
        ListItem.dataset.nav = title
        ListItem.classList.add(sectionID)
        //Appen Child
        list.appendChild(ListItem)
    }
const liButtons = document.querySelectorAll(".navbar__menu #navbar__list li");

// Add class 'active' to section when near top of viewport ///Done
// on window scroll
window.addEventListener('scroll', (e) => {
    // loop through each section
    mySections.forEach( section => {
        // get px distance from top
        const topDistance = section.getBoundingClientRect().top;
        // if the distance to the top is between 0-100px
        if (topDistance > 0 && topDistance < 400) {
        section.classList.add('your-active-class');
        // otherwise, remove the class
        liButtons.forEach(element=>{
            if(section.dataset.nav === element.dataset.nav){
                element.classList.add("active")
            }else{
                element.classList.remove("active")
            }
        })
        } else {
        section.classList.remove('your-active-class');
        }

        
    });
});

// Scroll to anchor ID using scrollTO event  



/**
 * End Main Functions
 * Begin Events
 * 
*/


//ADD ACTIVE CLASS TO BUTTON WHEN WE PRESS ON SECTION BUTTON
liButtons.forEach(e => {
    // Click on every Button Item
    e.addEventListener("click" , (e)=> {
    //Remove Active Class From All Buttons
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active")
    });
    // Add Active Class On Target 
    e.target.classList.add("active")
    })
})


// Build menu 

// Scroll to section on link click    /////////Done
liButtons.forEach(ele =>{
    ele.addEventListener("click" ,(e)=>{
        mySections.forEach(sec=>{
            // we ask if the same data-set in section be too in the button we click
            if(sec.dataset.nav=== ele.dataset.nav){
                sec.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        })
    });
});


// Set sections as active
//Loop on Buttons
liButtons.forEach(element=>{
    //when we click in button
        element.addEventListener("click" ,(e)=>{
            //loop on all sections
            mySections.forEach(sec=>{
                // we ask if the same data-set in section be too in the button we click
                if(sec.dataset.nav=== element.dataset.nav){
                    //if it true we loop on sections
                    mySections.forEach(fin=>{
                        //and remove active class from all sections that we loop on
                        fin.classList.remove("your-active-class")
                    })
                    //and we add active class on the target section that we ask on it if the same data-se...... 
                    sec.classList.add("your-active-class");
                }
            })
        })
})

}

window.addEventListener("load" ,buildNavBar)

























