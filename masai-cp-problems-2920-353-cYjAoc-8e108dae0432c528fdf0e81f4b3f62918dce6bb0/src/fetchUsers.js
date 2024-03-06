const getUsersData = async () => {
  try {
   
  } catch (err) {
    // fetchUsers.js

async function getUsersData() {
  try {
    const response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users");
    const data = await response.json();
    return data;
  } catch (error) {
    return "Error fetching user data";
  }
}

function splitData({ data, totalPages }) {
  // Destructure values from data
  const [data1, data2, ...data3] = data;

  // Return the required values
  return { totalPages, data1, data2, data3 };
}

// Export the functions for testing
module.exports = { getUsersData, splitData };

    
  }

};

function splitData(){

  return {
    totalPages,
    data1,
    data2,
    data3
  }
}


// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}
