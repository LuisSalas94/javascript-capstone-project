import { getMealsList, getMealDetalis } from './api-handlers.js';

const showMealList = () => {
  getMealsList().then((res) => {
    const mealsHtml = document.getElementById('meals-list');
    mealsHtml.innerHTML = `
      ${res.meals
    .map(
      (item) => `
      <div class="col-4 border d-flex flex-column meal-container" id="${item.idMeal}">
        <img src="${item.strMealThumb}/preview" alt="${item.strMeal}">
        <div class="d-flex align-items-center justify-content-between meal-content">
          <h2 class="meal-title">${item.strMeal}</h2>
          <div class="heart-container">
            <button type="button" class="fa-regular fa-heart like-btn"></button>
          </div>
        </div>
        <button type="button" class="comment-btn" data-bs-toggle="modal" data-bs-target="#recipe-modal">Comments</button>
      </div>`,
    )
    .join('')}`;

    const openModal = (e) => {
      const currentCommentBtn = e.target;
      const { id } = currentCommentBtn.parentNode;
      const modalHeader = document.querySelector('.modal-title');
      const modalBody = document.querySelector('.modal-body');
      modalHeader.innerHTML = 'LOADING ...';
      modalBody.innerHTML = '';

      getMealDetalis(id).then((res) => {
        modalHeader.innerHTML = res.strMeal;
        modalBody.innerHTML = `
        <img src="${res.strMealThumb}" alt="${res.strMeal}" class="w-100">
        <h3>${res.strCategory}</h3>
        <h4>${res.strArea}</h4>
        <h5>${res.strTags}</h5>
        <p>${res.strInstructions}</p>
        `;
      });
    };

    const commentBtns = document.querySelectorAll('.comment-btn');

    for (let i = 0; i < commentBtns.length; i += 1) {
      commentBtns[i].addEventListener('click', openModal);
    }
  });
};

export default showMealList;
