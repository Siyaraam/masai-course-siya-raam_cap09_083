const getCategoriesData = async () => {
  
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    const data = await response.json();

    // Check if the API request was successful
    if (data.meals) {
      console.log(data);
    } else {
      throw new Error("API request failed");
    }
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}



const getIngredientData = async () => {
 
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
    const data = await response.json();

    // Check if the API request was successful
    if (data.meals) {
      console.log(data);
    } else {
      throw new Error("API request failed");
    }
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}


window.onload = function () {
  //  get the buttons here and add click event
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}

