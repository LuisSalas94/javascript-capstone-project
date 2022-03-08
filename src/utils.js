import getMealsList from "./api-handlers";

const showMealList = () => {
	getMealsList().then((res) => {
		const mealsHtml = document.getElementById("meals-list");
		mealsHtml.innerHTML = `
      ${res.meals
				.map(
					(item) => `
      <div class="col-4 border d-flex flex-column" id="${item.idMeal}">
        <img src="${item.strMealThumb}/preview" alt="${item.strMeal}">
        <div class="d-flex align-items-center justify-content-between">
          <h2>${item.strMeal}</h2>
          <div>
            <button type="button" class="fa-regular fa-heart like-btn"></button>
          
          </div>
        </div>
        <button type="button" class="comment-btn" data-bs-toggle="modal" data-bs-target="#recipe-modal">Comments</button>
      </div>`
				)
				.join("")}`;
	});
};

export default showMealList;
