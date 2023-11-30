const openRecipe = () => { 
    document.getElementById("recipeInserter").style.visibility = "visible";
    document.getElementById("recipeInserter").style.height = "100%";
    document.getElementById("myList").style.height = "0";
    document.getElementById('exitArrow').style.display = "block";
    
};

const closeRecipe = () => {
    document.getElementById("myList").style.height = "100%";
    document.getElementById("recipeInserter").style.visibility = "hidden";
    document.getElementById("recipeInserter").style.height = "0%";
    document.getElementById('exitArrow').style.display = "none";
};

const openColumnMenu = () => {
    document.getElementById("col-left").style.height = "100%";
    
    console.log("open");
};

function  scrollToTop(){
        window.scrollTo(0, 0);
};

