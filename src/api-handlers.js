const MEALSDB_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const MEAL_ID_BASE_API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const LIKES_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BnjmjUJJQAhlumcZxnbj/likes/';

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

export { getMealsList, getMealDetalis, getLikes };
