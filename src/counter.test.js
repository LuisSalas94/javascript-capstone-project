const itemsArr = [
  {
    strMeal: 'fish1',
    idMeal: 1,
  },
  {
    strMeal: 'fish2',
    idMeal: 2,
  },
  {
    strMeal: 'fish3',
    idMeal: 3,
  },
  {
    strMeal: 'fish4',
    idMeal: 4,
  },
];

const countItems = (mealArr) => mealArr.length;

test('testing items counter: countItems(itemsArr) should be 4.', () => {
  expect(countItems(itemsArr)).toBe(4);
});
