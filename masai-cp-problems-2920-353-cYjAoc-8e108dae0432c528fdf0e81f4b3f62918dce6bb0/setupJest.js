global.fetch = require('jest-fetch-mock')
// __tests__/fetchUsers.test.js

const { getUsersData, splitData } = require("../src/fetchUsers");

test("getUsersData - Fetch user data successfully", async () => {
  const userData = await getUsersData();
  expect(userData).not.toEqual("Error fetching user data");
});

test("splitData - Split user data and return values", () => {
  // Mock data for testing
  const userData = {
    data: [
      { id: 1, name: "User1" },
      { id: 2, name: "User2" },
      { id: 3, name: "User3" },
      { id: 4, name: "User4" },
    ],
    totalPages: 5,
  };

  // Call splitData function with combined arguments
  const result = splitData(userData);

  // Expected values
  const expected = {
    totalPages: 5,
    data1: { id: 1, name: "User1" },
    data2: { id: 2, name: "User2" },
    data3: [
      { id: 3, name: "User3" },
      { id: 4, name: "User4" },
    ],
  };

  // Check if the result matches the expected values
  expect(result).toEqual(expected);
});
