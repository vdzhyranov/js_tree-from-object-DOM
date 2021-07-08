'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const newUl = document.createElement('ul');

  for (const item in data) {
    const dataElement = document.createElement('li');

    dataElement.append([item]);
    newUl.append(dataElement);

    if (typeof data[item] === 'object'
      && data[item] !== null) {
      createTree(dataElement, data[item]);
    }
  }

  element.append(newUl);
}

createTree(tree, food);
