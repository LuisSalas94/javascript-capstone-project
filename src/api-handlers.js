const MEALSDB_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const getMealsList = async () => {
  const response = await fetch(MEALSDB_API);
  const mealsList = await response.json();
  return mealsList;
};

export default getMealsList;
