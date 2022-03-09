const MEALSDB_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const MEAL_ID_BASE_API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const LIKES_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BnjmjUJJQAhlumcZxnbj/likes/';
const GET_COMMENTS_ID_BASE_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BnjmjUJJQAhlumcZxnbj/comments?item_id=';

const getLikes = async () => {
  const response = await fetch(LIKES_API);
  const likesList = await response.json().catch(() => false);
  if (!likesList) return false;
  const likesObj = {};
  likesList.forEach((item) => {
    likesObj[item.item_id] = item.likes;
  });
  return likesObj;
};

const sendLike = (id) => {
  fetch(LIKES_API, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getMealsList = async () => {
  const response = await fetch(MEALSDB_API);
  const mealsList = await response.json();
  return mealsList;
};

const getMealDetalis = async (id) => {
  const response = await fetch(`${MEAL_ID_BASE_API}${id}`);
  const mealDetails = await response.json();
  return mealDetails.meals[0];
};

const getComments = async (id) => {
  const response = await fetch(`${GET_COMMENTS_ID_BASE_API}${id}`);
  if (!response.ok) return [];
  const commentsList = await response.json().catch(() => false);
  if (!commentsList) return [];
  return commentsList;
};

export {
  getMealsList, getMealDetalis, getLikes, getComments, sendLike,
};
