const openRecipe = () => { 
    document.getElementById("myList").style.height = "0";
    document.getElementById("recipeInserter").style.height = "100%";
    document.getElementById('exitArrow').style.display = "block";
};

const closeRecipe = () => {
    document.getElementById("myList").style.height = "100%";
    document.getElementById("recipeInserter").style.height = "0";
    document.getElementById('exitArrow').style.display = "none";
};

