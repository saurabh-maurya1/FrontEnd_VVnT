export const BASE_URL = `https://vvnt.up.railway.app`;

export const USER_PAGE_SIZE = 10;

// //get Category ImageUrl

// // export const getCategoryImageUrl=(categoryId)=>{
// //     return `${BASE_URL}/categories/image/${categoryId}`;
// // }

//get User image url

export const getUserImageUrl = (userId) => {
  return `${BASE_URL}/users/image/${userId}`;
};

//date formate
export const formatDate = (timeInLongs) => {
  if (!timeInLongs) {
    return null;
  }
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(timeInLongs);
  return (
    date.toLocaleString("en-US", options) +
    "  ," +
    " " +
    date.toLocaleTimeString()
  );
};
