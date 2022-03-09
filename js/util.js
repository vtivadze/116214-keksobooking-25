const getRandomPositiveInteger = (num1, num2) => {
  const min = Math.ceil(Math.min(Math.abs(num1), Math.abs(num2)));
  const max = Math.floor(Math.max(Math.abs(num1), Math.abs(num2)));
  const result = Math.random() * (max - min + 1) + min;
  return  Math.floor(result);
};

const getRandomPositiveFloat = (num1, num2, digits = 1) => {
  const min = Math.min(Math.abs(num1), Math.abs(num2));
  const max = Math.max(Math.abs(num1), Math.abs(num2));
  const result = Math.random() * (max - min) + min;
  return +result.toFixed(digits);
};

const getArrayRandomElement = (arr) => arr[getRandomPositiveInteger(0, arr.length - 1)];

const getArrayRandomNumberElements = (arr) => {
  const shuffledArray = arr.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, getRandomPositiveInteger(0, arr.length - 1));
};

const generateId = (max) => {
  let current = 0;
  return () => {
    current = current + 1;
    if (current <= max) {
      return `0${current}`.slice(-2);
    }
    return NaN;
  };
};

const populateElement = (element, content, mode) => {
  if (! content.length) {
    element.classList.add('hidden');
    return;
  }

  if (mode === 'text') {
    element.textContent = content;
  }

  if (mode === 'html') {
    element.innerHTML = content;
  }
};

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getArrayRandomElement,
  getArrayRandomNumberElements,
  generateId,
  populateElement
};
