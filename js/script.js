'use strict';
// const text = $('.header').html();

// const elem = $('.what-building__item');

// console.log(elem.parent()); // получаем родителя
// console.log(elem.parents('body')); // получить родителя по классу
// elem.find('.what-building__text'); // поиск элементов внутри уже выбранных элементов.
// console.log(elem.prev().css({
// backgroundColor: 'red',
// color: 'tomato',
// })); // устанавливаем css.
// console.log(elem.prev()); // получить предыдущий JQuery объект.
// console.log(elem.next()); //  получить следующий JQuery объект.
// console.log(elem.next().get(0)); //  получить следующий элемент .
// elem.addClass('header__sign_active'); // добавить класс элементу .
// console.log(elem.removeClass('header__sign_active red')); // удалить класс.
// elem.toggleClass('header__sign_active'); // переключать класс.
// elem.toggleClass('header__sign_active').attr('alt'); // получить атрибут .
// elem.toggleClass('header__sign_active').attr('alt', 'Фото'); // установить атрибут .
// elem.toggleClass('header__sign_active').attr('alt', {
// alt: 'Новое фото',
// title: 'Новый титл',
// }); // установить несколько атрибутов. атрибуты передаются в виде объеста .
// elem.hasClass('header__sign_active') // проверяем есть ли класс у элемента
// elem.offset() // получаем координаты

// elem.click(function() { // навешиваем событие click
//   $(this).toggleClass('header__sign_active');
// });

// elem.dblclick(function() { // навешиваем событие click
//   $(this).toggleClass('red');
// });

// события JQuery
// elem.blur(() => {}); // потеря фокуса
// elem.keydown(() => {}); // кнопка нажата
// elem.keypress(() => {}); // кнопка нажата и удерживается
// elem.keyup(() => {}); // кнопка отпущена
// elem.on('change', () => {}); // на элементе произошли изменения
// elem.mousedown(() => {}); // нажали кнопку мыши
// elem.mouseup(() => {}); // отжали кнопку мыши
// elem.mousemove(() => {}); // передвижение мышки
// elem.mouseleave(() => {}); // мышка покидает элемент полностью и не срабатыввает при потере пересечении других элементов
// elem.mouseover(() => {}); // мышка над объектом
// elem.mouseout(() => {}); // мышь выходит из элемента или перекрывается другими элементами

const presentBtn = $('.present__btn');
const modalOrderClose = $('.modal-order__close');
const modalOrder = $('.modal-order');
const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

presentBtn.click(() => {
  modalOrder.show(500);
});
modalOrderClose.click(() => {
  modalOrder.hide(500);
});


modalOrderInput.focus(function() {
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder')
    .toLowerCase()}`);
});

modalOrderInput.blur(() => {
  modalOrderTitle.text('Заполните форму');
});

const foo = function() {
  $(this).animate({
    height: '-=100px',
  }, 1000, () => {
    alert('Анимация выполнена');
  });
};

$('.what-building__list').on('click', '.what-building__item', foo); // делегирование. Отлавливаем клик на определённом элементе
// $('.what-building__list').off('click', '.what-building__item', foo); // удаляем обработчик


// const div = $('<div>'); // создаём элемент

// div.html(`
//   <h1>Привет!</h1>
// `); // вставить html блок

// div.width(); // получаем ширину сонтента без падингов и бордеров
// div.width(400); // устанавливаем ширину без падингов и бордеров
// div.height(400); // устанавливаем высоту без падингов и бордеров

// div.innerWidth(); // получаем ширину с падингами и бордерами
// div.innerHeight(); // получаем высоту с падингами и бордерами

// div.outerWidth(); // получаем ширину включая бордер
// div.outerWidth(true); // получаем ширину включая бордер, если передаём true то включая морджины
// div.outerHeight(); // получаем высоту включая бордер

// $('body').append(div); // добавить элемент на страницу
// div.remove(); // удалить элемент на страницу

// $('.modal-order__form').submit(function(event) {
//   event.preventDefault();
//   $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize())
//     .then((data) => {
//       console.log('data: ', data);
//       return data;
//     })
//     .then((request) => {
//       console.log('request: ', request);
//     })
//     .catch((err) => {
//       console.log('err: ', err.status);
//     });
// });

$('.modal-order__form').submit((event) => {
  event.preventDefault();
  // $.ajax({
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   type: 'POST',
  //   data: $(this).serialize(),
  //   success(data) {
  //     modalOrderTitle.text('Спасибо за заявку. Номер заявки:' + data.id);
  //     $('.modal-order__form').slideUp(300);
  //   },
  //   error() {
  //     modalOrderTitle.text('Что то пошло не так, попробуйте позже!');
  //   },
  // });
});


$('.header__burger').on('click', () => {
  $('.navigation').animate({
    left: 0,
  }, 500, () => {
    $('.navigation__close').animate({
      opacity: 1,
    }, 300, 'swing');
  });
});

$('.navigation__close').on('click', () => {
  $('.navigation__close').animate({
    opacity: 0,
  }, 300, () => {
    $('.navigation').animate({
      left: -400,
    }, 500);
  });
});


const cookieAlert = document.querySelector('.alert-cookie');
const cookieButton = document.querySelector('.alert-cookie__button');

cookieButton.addEventListener('click', () => {
  cookieAlert.classList.remove('alert-cookie_no-ready');
  Cookies.set('dom-ready-cookie', 'true', {
    expires: 10,
  });
});

if (!Cookies.get('dom-ready-cookie')) {
  cookieAlert.classList.add('alert-cookie_no-ready');
}

const inputTel = document.querySelector('.modal-order__input_tel');
const telMask = new Inputmask('+7 (999)-999-99-99');

telMask.mask(inputTel);

const justValidate = new JustValidate('.modal-order__form');

justValidate.addField('.modal-order__input', [
  {
    rule: 'required',
    errorMessage: 'Укажите ваше имя',
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Не короче 3 символов',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Слишком длинное имя',
  },
]);
