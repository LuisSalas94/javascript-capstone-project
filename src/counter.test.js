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

const commentsArr = [
  {
    creation_date: '3/10/2022',
    username: 'Jhon Doe',
    comment: 'Test text',
  },
  {
    creation_date: '3/10/2022',
    username: 'Jhon Doe2',
    comment: 'Test text2',
  },
  {
    creation_date: '3/09/2022',
    username: 'Jhon Doe3',
    comment: 'Test text3',
  },
  {
    creation_date: '3/08/2022',
    username: 'Jhon Doe4',
    comment: 'Test text4',
  },
  {
    creation_date: '3/08/2022',
    username: 'Jhon Doe5',
    comment: 'Test text5',
  },

];

const countItems = (mealArr) => mealArr.length;
const countComments = (commentsArr) => commentsArr.length;

test('Testing items counter: countItems(itemsArr) should be 4.', () => {
  expect(countItems(itemsArr)).toBe(4);
});

test('Testing comments counter: countComments(commentsArr) should be 5.', () => {
  expect(countComments(commentsArr)).toBe(5);
});