const formGroups = document.querySelectorAll('.card__form-group');
const form = document.querySelector('.card__form');
const ratingState = document.querySelector('.rating-state');
const cardWrapper = document.querySelector('.card__wrapper');
const selectedState = document.querySelector('.rating-state__selected');

function handleGroupClicked(event) {
  for (let i = 0; i < formGroups.length; i++) {
    formGroups[i].classList.remove('active');
  }
  event.currentTarget.classList.add('active');
}

formGroups.forEach((fg) => {
  fg.addEventListener('click', handleGroupClicked);
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const selectedRating = event.target.elements.rating.value;
  const maxRating = event.target.elements.rating.length;

  if (selectedRating) {
    selectedState.textContent = `You selected ${selectedRating} out of ${maxRating}`;
    cardWrapper.style.height = cardWrapper.scrollHeight + 'px';
    ratingState.classList.add('active');
    cardWrapper.classList.add('hidden');
  }
}
