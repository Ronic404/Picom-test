const selectPage = () => {
  if( confirm('Нажми ОК, если у тебя есть учётная запись') ) {
    document.querySelector('.form__login').classList.remove('none');
  } else {
    document.querySelector('.form__account').classList.remove('none');
  }
}

window.onload = () => {
  selectPage();
}