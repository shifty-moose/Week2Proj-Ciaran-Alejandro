const clickMessage = document.querySelector('#messageButton').addEventListener('click', () => {

    const width = 800; 
    const height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    const popupWindow = window.open('https://www.mycolombianrecipes.com/paisa-tray-bandeja-paisa/', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
    if (popupWindow) {
        console.log('Popup window activated');
    } else {
        alert('Pop-up Window blocked');
    }
});


//alert('you clicked me, mate! <3');


const openRecipe = () => { 
    document.getElementById("recipeInserter").style.visibility = "visible";
    document.getElementById("recipeInserter").style.height = "100%";
    document.getElementById("myList").style.height = "0";
    document.getElementById('exitArrow').style.display = "block";
    document.getElementById("localFoodSection").style.display = "none";
    
};

const closeRecipe = () => {
    document.getElementById("myList").style.height = "100%";
    document.getElementById("recipeInserter").style.visibility = "hidden";
    document.getElementById("recipeInserter").style.height = "0%";
    document.getElementById('exitArrow').style.display = "none";
    document.getElementById("localFoodSection").style.display = "block";
};

const openColumnMenu = () => {
    document.getElementById("col-left").style.height = "100%";
    
    console.log("open");
};

function  scrollToTop(){
        window.scrollTo(0, 0);
};

