'use strict';

document.addEventListener('DOMContentLoaded', () => {

   // Календарь в форме (дата заезда/выезда)
   new AirDatepicker('.input__data', {
      buttons: ['today', 'clear'],
      // timepicker: true,
      position: 'top right',
      minDate: new Date(),
      onSelect({ date, formattedDate, datepicker }) {
         datepicker.hide();
      }
   });

   // new AirDatepicker('.reserve__input-bottom-out', {
   //    buttons: ['today', 'clear'],
   //    timepicker: true,
   //    position: 'top right',
   //    minDate: new Date(),
   //    // onSelect({ date, formattedDate, datepicker }) {
   //    //    datepicker.hide();
   //    // }
   // });




   // select  choices   Max Graph  ===============================================================================================
   const multiDefault = () => {
      const elements = document.querySelectorAll('.multi-default');
      elements.forEach(el => {
         const choices = new Choices(el, {
            searchEnabled: false,
            allowHTML: true,
            noResultsText: 'Ничего не найдено'
         });
      });

   };

   multiDefault();

   // select  choices  Max Graph  ===============================================================================================

   // select fls ===============================================================================================

   // Подключение файла стилей
   // Базовые стили поключаются в src/scss/forms.scss
   // Файл базовых стилей src/scss/forms/select.scss

   /*
   Документация:
   Снипет (HTML): sel
   */
   /*
   Настройки
   Для селекта (select):
   class="имя класса" - модификатор к конкретному селекту
   multiple - мультивыбор
   data-tags - режим тегов, только для (только для multiple)
   data-scroll - включит прокрутку для выпадающего списка, дополнительно можно подключить кастомный скролл simplebar в app.js. Указанное число для атрибута ограничит высоту
   data-checkbox - стилизация элементов по checkbox (только для multiple)
   data-show-selected - отключает скрытие выбранного элемента
   data-search - позволяет искать по выпадающему списку
   data-open - селект открыт сразу
   
   Для плейсхолдера (Плейсхолдер - это option с value=""):
   data-label для плейсхолдера, добавляет label к селекту
   data-show для плейсхолдера, показывает его в списке (только для единичного выбора)
   
   Для элемента (option):
   data-class="имя класса" - добавляет класс
   data-asset="путь к картинке или текст" - добавляет структуру 2х колонок и данными
   */

   /*
   Возможные доработки:
   попап на мобилке
   */

   // // Получение всех select на странице
   // const selectItems = document.querySelectorAll('select');
   // // Объект построения Select
   // const selectModule = {
   //    // CSS классы модуля
   //    selectClasses: {
   //       classSelect: "select", // Главный блок
   //       classSelectBody: "select__body", // Тело селекта
   //       classSelectTitle: "select__title", // Заголовок
   //       classSelectValue: "select__value", // Значение в заголовке
   //       classSelectLabel: "select__label", // Лабел
   //       classSelectInput: "select__input", // Поле ввода
   //       classSelectText: "select__text", // Оболочка текстовых данных
   //       classSelectOptions: "select__options", // Выпадающий список
   //       classSelectOptionsScroll: "select__scroll", // Оболочка при скролле
   //       classSelectOption: "select__option", // Пункт
   //       classSelectContent: "select__content", // Оболочка контента в заголовке
   //       classSelectRow: "select__row", // Ряд
   //       classSelectData: "select__asset", // Дополнительные данные
   //       classSelectDisabled: "_select-disabled", // Запрешен
   //       classSelectTag: "_select-tag", // Класс тега
   //       classSelectOpen: "_select-open", // Список открыт
   //       classSelectActive: "_select-active", // Список выбран
   //       classSelectFocus: "_select-focus", // Список в фокусе
   //       classSelectMultiple: "_select-multiple", // Мультивыбор
   //       classSelectCheckBox: "_select-checkbox", // Стиль чекбокса
   //       classSelectOptionSelected: "_select-selected", // Выбранный пункт
   //    },
   //    // Конструктор CSS класса
   //    getSelectClass(className) {
   //       return `.${className}`;
   //    },
   //    // Геттер элементов псевдоселекта
   //    getSelectElement(selectItem, className) {
   //       return {
   //          originalSelect: selectItem.querySelector('select'),
   //          selectElement: selectItem.querySelector(selectModule.getSelectClass(className)),
   //       }
   //    },
   //    // Функция инициализации всех селектов
   //    selectsInit(selectItems) {
   //       selectItems.forEach((originalSelect, index) => {
   //          originalSelect.dataset.id = index;
   //          selectModule.selectInit(originalSelect);
   //       });
   //       // Обработчики событий...
   //       // ...при клике
   //       document.addEventListener('click', selectModule.selectsActions);
   //       // ...при нажатии клавиши
   //       document.addEventListener('keydown', selectModule.selectsActions);
   //       // ...при фокусе
   //       document.addEventListener('focusin', selectModule.selectsActions);
   //       // ...при потере фокуса
   //       document.addEventListener('focusout', selectModule.selectsActions);
   //    },
   //    // Функция инициализации конкретного селекта
   //    selectInit(originalSelect) {
   //       // Создаем оболочку
   //       let selectItem = document.createElement("div");
   //       selectItem.classList.add(selectModule.selectClasses.classSelect);
   //       // Выводим оболочку перед оригинальным селектом
   //       originalSelect.parentNode.insertBefore(selectItem, originalSelect);
   //       // Помещаем оригинальный селект в оболочку
   //       selectItem.appendChild(originalSelect);
   //       // Скрываем оригинальный селект
   //       originalSelect.hidden = true;

   //       // Конструктор косновных элементов
   //       selectItem.insertAdjacentHTML('beforeend', `<div class="${selectModule.selectClasses.classSelectBody}"><div hidden class="${selectModule.selectClasses.classSelectOptions}"></div></div>`);
   //       // Запускаем конструктор псевдоселекта
   //       selectModule.selectBuild(originalSelect);

   //       // Работа с плейсхолдером
   //       if (selectModule.getSelectPlaceholder(originalSelect)) {
   //          // Запоминаем плейсхолдер
   //          originalSelect.dataset.placeholder = selectModule.getSelectPlaceholder(originalSelect).value;
   //          // Если включен режим label
   //          if (selectModule.getSelectPlaceholder(originalSelect).label.show) {
   //             const selectItemTitle = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement;
   //             selectItemTitle.insertAdjacentHTML('afterbegin', `<span class="${selectModule.selectClasses.classSelectLabel}">${selectModule.getSelectPlaceholder(originalSelect).label.text ? selectModule.getSelectPlaceholder(originalSelect).label.text : selectModule.getSelectPlaceholder(originalSelect).value}</span>`);
   //          }
   //       }
   //       // Запоминаем скорость
   //       originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
   //       // Событие при изменении оригинального select
   //       originalSelect.addEventListener('change', selectModule.selectChange);
   //    },
   //    // Конструктор псевдоселекта
   //    selectBuild(originalSelect) {
   //       const selectItem = originalSelect.parentElement;
   //       // Добавляем ID селекта
   //       selectItem.dataset.id = originalSelect.dataset.id;
   //       // Получаем класс оригинального селекта, создаем модификатор и добавляем его
   //       selectItem.classList.add(originalSelect.getAttribute('class') ? `select_${originalSelect.getAttribute('class')}` : "");
   //       // Если множественный выбор, добавляем класс
   //       originalSelect.multiple ? selectItem.classList.add(selectModule.selectClasses.classSelectMultiple) : selectItem.classList.remove(selectModule.selectClasses.classSelectMultiple);
   //       // Cтилизация элементов под checkbox (только для multiple)
   //       originalSelect.hasAttribute('data-checkbox') && originalSelect.multiple ? selectItem.classList.add(selectModule.selectClasses.classSelectCheckBox) : selectItem.classList.remove(selectModule.selectClasses.classSelectCheckBox);
   //       // Сеттер значения заголовка селекта
   //       selectModule.setSelectTitleValue(selectItem, originalSelect);
   //       // Сеттер элементов списка (options)
   //       selectModule.setOptions(selectItem, originalSelect);
   //       // Если включена опция поиска data-search, запускаем обработчик
   //       originalSelect.hasAttribute('data-search') ? selectModule.searchActions(selectItem) : null;
   //       // Если указана настройка data-open, открываем селект
   //       originalSelect.hasAttribute('data-open') ? selectModule.selectAction(selectItem) : null;
   //       // Обработчик disabled
   //       selectModule.selectDisabled(selectItem, originalSelect);
   //    },
   //    // Функция реакций на события
   //    selectsActions(e) {
   //       const targetElement = e.target;
   //       const targetType = e.type;
   //       if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelect)) || targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag))) {
   //          const selectItem = targetElement.closest('.select') ? targetElement.closest('.select') : document.querySelector(`.${selectModule.selectClasses.classSelect}[data-id="${targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag)).dataset.selectId}"]`);
   //          const originalSelect = selectModule.getSelectElement(selectItem).originalSelect;
   //          if (targetType === 'click') {
   //             if (!originalSelect.disabled) {
   //                if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag))) {
   //                   // Обработка клика на тег
   //                   const targetTag = targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag));
   //                   const optionItem = document.querySelector(`.${selectModule.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
   //                   selectModule.optionAction(selectItem, originalSelect, optionItem);
   //                } else if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTitle))) {
   //                   // Обработка клика на заголовок селекта
   //                   selectModule.selectAction(selectItem);
   //                } else if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectOption))) {
   //                   // Обработка клика на элемент селекта
   //                   const optionItem = targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectOption));
   //                   selectModule.optionAction(selectItem, originalSelect, optionItem);
   //                }
   //             }
   //          } else if (targetType === 'focusin' || targetType === 'focusout') {
   //             if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelect))) {
   //                targetType === 'focusin' ? selectItem.classList.add(selectModule.selectClasses.classSelectFocus) : selectItem.classList.remove(selectModule.selectClasses.classSelectFocus);
   //             }
   //          } else if (targetType === 'keydown' && e.code === 'Escape') {
   //             selectModule.selectsСlose();
   //          }
   //       } else {
   //          selectModule.selectsСlose();
   //       }
   //    },
   //    // Функция закрытия всех селектов
   //    selectsСlose() {
   //       const selectActiveItems = document.querySelectorAll(`${selectModule.getSelectClass(selectModule.selectClasses.classSelect)}${selectModule.getSelectClass(selectModule.selectClasses.classSelectOpen)}`);
   //       if (selectActiveItems.length) {
   //          selectActiveItems.forEach(selectActiveItem => {
   //             selectModule.selectAction(selectActiveItem);
   //          });
   //       }
   //    },
   //    // Функция открытия/закрытия конкретного селекта
   //    selectAction(selectItem) {
   //       const originalSelect = selectModule.getSelectElement(selectItem).originalSelect;
   //       const selectOptions = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectOptions).selectElement;
   //       if (!selectOptions.classList.contains('_slide')) {
   //          selectItem.classList.toggle(selectModule.selectClasses.classSelectOpen);
   //          _slideToggle(selectOptions, originalSelect.dataset.speed);
   //       }
   //    },
   //    // Сеттер значения заголовка селекта
   //    setSelectTitleValue(selectItem, originalSelect) {
   //       const selectItemBody = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectBody).selectElement;
   //       const selectItemTitle = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement;
   //       if (selectItemTitle) selectItemTitle.remove();
   //       selectItemBody.insertAdjacentHTML("afterbegin", selectModule.getSelectTitleValue(selectItem, originalSelect));
   //    },
   //    // Конструктор значения заголовка
   //    getSelectTitleValue(selectItem, originalSelect) {
   //       // Получаем выбранные текстовые значения
   //       let selectTitleValue = selectModule.getSelectedOptionsData(originalSelect, 2).html;
   //       // Обработка значений мультивыбора
   //       // Если включен режим тегов (указана настройка data-tags)
   //       if (originalSelect.multiple && originalSelect.hasAttribute('data-tags')) {
   //          selectTitleValue = selectModule.getSelectedOptionsData(originalSelect).elements.map(option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${selectModule.getSelectElementContent(option)}</span>`).join('');
   //          // Если вывод тегов во внешний блок
   //          if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
   //             document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
   //             if (originalSelect.hasAttribute('data-search')) selectTitleValue = false;
   //          }
   //       }
   //       // Значение(я) или плейсхолдер
   //       selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder;
   //       // Если есть значение, добавляем класс
   //       selectModule.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(selectModule.selectClasses.classSelectActive) : selectItem.classList.remove(selectModule.selectClasses.classSelectActive);
   //       // Возвращаем поле ввода для поиска или текст
   //       if (originalSelect.hasAttribute('data-search')) {
   //          // Выводим поле ввода для поиска

   //          return `<div class="${selectModule.selectClasses.classSelectTitle}"><span class="${selectModule.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${selectModule.selectClasses.classSelectInput}"></span></div>`;
   //       } else {
   //          // Если выбран элемент со своим классом
   //          const customClass = selectModule.getSelectedOptionsData(originalSelect).elements.length && selectModule.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${selectModule.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : '';
   //          // Выводим текстовое значение
   //          return `<button type="button" class="${selectModule.selectClasses.classSelectTitle}"><span class="${selectModule.selectClasses.classSelectValue}"><span class="${selectModule.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
   //       }
   //    },
   //    // Конструктор данных для значения заголовка
   //    getSelectElementContent(selectOption) {
   //       // Если для элемента указан вывод картинки или текста, перестраиваем конструкцию
   //       const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : '';
   //       const selectOptionDataHTML = selectOptionData.indexOf('img') >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
   //       let selectOptionContentHTML = ``;
   //       selectOptionContentHTML += selectOptionData ? `<span class="${selectModule.selectClasses.classSelectRow}">` : '';
   //       selectOptionContentHTML += selectOptionData ? `<span class="${selectModule.selectClasses.classSelectData}">` : '';
   //       selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : '';
   //       selectOptionContentHTML += selectOptionData ? `</span>` : '';
   //       selectOptionContentHTML += selectOptionData ? `<span class="${selectModule.selectClasses.classSelectText}">` : '';
   //       selectOptionContentHTML += selectOption.textContent;
   //       selectOptionContentHTML += selectOptionData ? `</span>` : '';
   //       selectOptionContentHTML += selectOptionData ? `</span>` : '';
   //       return selectOptionContentHTML;
   //    },
   //    // Получение данных плейсхолдера
   //    getSelectPlaceholder(originalSelect) {
   //       const selectPlaceholder = Array.from(originalSelect.options).find(option => !option.value);
   //       if (selectPlaceholder) {
   //          return {
   //             value: selectPlaceholder.textContent,
   //             show: selectPlaceholder.hasAttribute("data-show"),
   //             label: {
   //                show: selectPlaceholder.hasAttribute("data-label"),
   //                text: selectPlaceholder.dataset.label
   //             }
   //          }
   //       }
   //    },
   //    // Получение данных из выбранных элементов
   //    getSelectedOptionsData(originalSelect, type) {
   //       // Получаем все выбранные объекты из select
   //       let selectedOptions = [];
   //       if (originalSelect.multiple) {
   //          // Если мультивыбор
   //          // Убираем плейсхолдер, получаем остальные выбранные элементы
   //          selectedOptions = Array.from(originalSelect.options).filter(option => option.value).filter(option => option.selected);
   //       } else {
   //          // Если единичный выбор
   //          selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
   //       }
   //       return {
   //          elements: selectedOptions.map(option => option),
   //          values: selectedOptions.filter(option => option.value).map(option => option.value),
   //          html: selectedOptions.map(option => selectModule.getSelectElementContent(option))
   //       }
   //    },
   //    // Конструктор элементов списка
   //    getOptions(originalSelect) {
   //       // Настрока скролла элементов
   //       let selectOptionsScroll = originalSelect.hasAttribute('data-scroll') ? `data-simplebar` : '';
   //       let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : '';
   //       // Получаем элементы списка
   //       let selectOptions = Array.from(originalSelect.options);
   //       if (selectOptions.length > 0) {
   //          let selectOptionsHTML = ``;
   //          // Если указана настройка data-show, показываем плейсхолдер в списке
   //          if ((selectModule.getSelectPlaceholder(originalSelect) && !selectModule.getSelectPlaceholder(originalSelect).show) || originalSelect.multiple) {
   //             selectOptions = selectOptions.filter(option => option.value);
   //          }
   //          // Строим и выводим основную конструкцию
   //          selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${selectModule.selectClasses.classSelectOptionsScroll}">` : '';
   //          selectOptions.forEach(selectOption => {
   //             // Получаем конструкцию конкретного элемента списка
   //             selectOptionsHTML += selectModule.getOption(selectOption, originalSelect);
   //          });
   //          selectOptionsHTML += selectOptionsScroll ? `</div>` : '';
   //          return selectOptionsHTML;
   //       }
   //    },
   //    // Конструктор конкретного элемента списка
   //    getOption(selectOption, originalSelect) {
   //       // Если элемент выбран и включен режим мультивыбора, добавляем класс
   //       const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${selectModule.selectClasses.classSelectOptionSelected}` : '';
   //       // Если элемент выбрани нет настройки data-show-selected, скрываем элемент
   //       const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute('data-show-selected') ? `hidden` : ``;
   //       // Если для элемента указан класс добавляем
   //       const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : '';
   //       // Строим и возвращаем конструкцию элемента
   //       let selectOptionHTML = ``;
   //       selectOptionHTML += `<button ${selectOptionHide} class="${selectModule.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
   //       selectOptionHTML += selectModule.getSelectElementContent(selectOption);
   //       selectOptionHTML += `</button>`;
   //       return selectOptionHTML;
   //    },
   //    // Сеттер элементов списка (options)
   //    setOptions(selectItem, originalSelect) {
   //       // Получаем объект тела псевдоселекта
   //       const selectItemOptions = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectOptions).selectElement;
   //       // Запускаем конструктор элементов списка (options) и добавляем в тело псевдоселекта
   //       selectItemOptions.innerHTML = selectModule.getOptions(originalSelect);
   //    },
   //    // Обработчик клика на элемент списка
   //    optionAction(selectItem, originalSelect, optionItem) {
   //       if (originalSelect.multiple) { // Если мультивыбор
   //          // Выделяем классом элемент
   //          optionItem.classList.toggle(selectModule.selectClasses.classSelectOptionSelected);
   //          // Очищаем выбранные элементы 
   //          const originalSelectSelectedItems = selectModule.getSelectedOptionsData(originalSelect).elements;
   //          originalSelectSelectedItems.forEach(originalSelectSelectedItem => {
   //             originalSelectSelectedItem.removeAttribute('selected');
   //          });
   //          // Выбираем элементы 
   //          const selectSelectedItems = selectItem.querySelectorAll(selectModule.getSelectClass(selectModule.selectClasses.classSelectOptionSelected));
   //          selectSelectedItems.forEach(selectSelectedItems => {
   //             originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute('selected', 'selected');
   //          });
   //       } else { // Если единичный выбор
   //          // Если не указана настройка data-show-selected, скрываем выбранный элемент
   //          if (!originalSelect.hasAttribute('data-show-selected')) {
   //             // Сначала все показать
   //             if (selectItem.querySelector(`${selectModule.getSelectClass(selectModule.selectClasses.classSelectOption)}[hidden]`)) {
   //                selectItem.querySelector(`${selectModule.getSelectClass(selectModule.selectClasses.classSelectOption)}[hidden]`).hidden = false;
   //             }
   //             // Скрываем выбранную
   //             optionItem.hidden = true;
   //          }
   //          originalSelect.value = optionItem.hasAttribute('data-value') ? optionItem.dataset.value : optionItem.textContent;
   //          selectModule.selectAction(selectItem);
   //       }
   //       // Обновляем заголовок селекта
   //       selectModule.setSelectTitleValue(selectItem, originalSelect);
   //       // Вызываем реакцию на изменение селекта
   //       selectModule.setSelectChange(originalSelect);
   //    },
   //    // Реакция на измененение оригинального select
   //    selectChange(e) {
   //       selectModule.selectBuild(e.target);
   //       selectModule.setSelectChange(e.target);
   //    },
   //    // Обработчик изменения в селекте
   //    setSelectChange(originalSelect) {
   //       const selectItem = originalSelect.parentElement;
   //       // Вызов коллбэк функции
   //       selectModule.selectCallback(selectItem, originalSelect);
   //    },
   //    // Обработчик disabled
   //    selectDisabled(selectItem, originalSelect) {
   //       if (originalSelect.disabled) {
   //          selectItem.classList.add(selectModule.selectClasses.classSelectDisabled);
   //          selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement.disabled = true;
   //       } else {
   //          selectItem.classList.remove(selectModule.selectClasses.classSelectDisabled);
   //          selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement.disabled = false;
   //       }
   //    },
   //    // Обработчик поиска по элементам списка
   //    searchActions(selectItem) {
   //       const originalSelect = selectModule.getSelectElement(selectItem).originalSelect;
   //       const selectInput = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectInput).selectElement;
   //       const selectOptions = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectOptions).selectElement;
   //       const selectOptionsItems = selectOptions.querySelectorAll(`.${selectModule.selectClasses.classSelectOption}`);
   //       selectInput.addEventListener("input", function (e) {
   //          selectOptionsItems.forEach(selectOptionsItem => {
   //             if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) {
   //                selectOptionsItem.hidden = false;
   //             } else {
   //                selectOptionsItem.hidden = true;
   //             }
   //          });
   //          // Если список закрыт открываем
   //          selectOptions.hidden === true ? selectModule.selectAction(selectItem) : null;
   //       });
   //    },
   //    // Коллбэк функция
   //    selectCallback(selectItem, originalSelect) { },
   //    // Логгинг в консоль
   //    setLogging(message) {
   //       console.log(`[select - info] ${message} `);
   //    }
   // }
   // // Запуск инициализации
   // selectItems.length ? selectModule.selectsInit(selectItems) : selectModule.setLogging('Нет ни одного select, модуль можно отключить');

   // select ===============================================================================================

   // Плавная подгрузка контента  на странице  от MaxGraf start ==========================================

   const scrollItems = document.querySelectorAll('.scroll-item');

   const scrollAnimation = () => {
      let windowCenter = (window.innerHeight / 1.3) + window.scrollY;
      // console.log(windowCenter)
      scrollItems.forEach(el => {
         let scrollOffset = el.offsetTop + (el.offsetHeight / 1.3);
         if (windowCenter >= scrollOffset) {
            el.classList.add('animation-class');
         } else {
            // el.classList.remove('animation-class');
         }
      });
   };

   scrollAnimation();
   window.addEventListener('scroll', () => {
      scrollAnimation();
   });

   // Плавная подгрузка контента  на странице  от MaxGraf end  ==========================================



   // Анимация заголовка    start ===============================================================================
   // код из видео-урока Жеки
   const animItems = document.querySelectorAll('._anim-items');

   if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
               animItem.classList.add('_active');
            } else {
               if (!animItem.classList.contains("_anim-no-hide")) {
                  animItem.classList.remove('_active');
               }
            }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }

      setTimeout(() => {
         animOnScroll();
      }, 1500);

   }

   // Анимация заголовка =   end ============================================================================




   // Валидация формы =======================================================================================
   //  Поле "Имя"
   // const MIN_NAME_LENGTH = 3;
   // const MAX_NAME_LENGTH = 25;

   //  Вариант с событием 'invalid'
   // userNameInput.addEventListener('invalid', () => {
   //    if (userNameInput.validity.tooShort) {
   //       userNameInput.setCustomValidity('Имя должно состоять минимум из трех символов');
   //    } else if (userNameInput.validity.tooLong) {
   //       userNameInput.setCustomValidity('Имя не должно состоять более чем из 25 символов');
   //    } else if (userNameInput.validity.valueMissing) {
   //       userNameInput.setCustomValidity('* Обязательное поле для заполнения');
   //    } else {
   //       userNameInput.setCustomValidity('');
   //    }
   //    console.log(userNameInput.validity);
   // });

   //  Вариант с событием 'input'
   let userNameInput = document.querySelector('.application__input-name');

   userNameInput.addEventListener('input', () => {
      const valueLength = userNameInput.value.length;

      if (valueLength < MIN_NAME_LENGTH) {
         userNameInput.setCustomValidity('Ещё' + ' ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');

      } else if (valueLength > MAX_NAME_LENGTH) {
         userNameInput.setCustomValidity('Удалите лишнее' + (valueLength - MAX_NAME_LENGTH) + 'симв.');

      } else {
         userNameInput.setCustomValidity('');
      }

      userNameInput.reportValidity();
   });
   // Валидация формы =======================================================================================


   // Маска телефона   ==============================================
   let selector = document.querySelectorAll('input[type="tel"]');
   let im = new Inputmask('+7 (999) 999-99-99');
   im.mask(selector);

   let selector2 = document.querySelector('input[type="tel"]');

   selector2.addEventListener('input', function () {

      // console.log(selector2.value)

      const re = /^\d*(\.\d+)?$/

      // console.log(selector2.value.match(/[0-9]/g).length)
      // console.log(selector2.value.replace(/[0-9]/g, "0"));

   });
   // Маска телефона   ==============================================

   //==== Модуь работы со спойлерами  start =======================================================================================================================================================================================================================
   /*
   Для родителя слойлеров пишем атрибут data-spollers
   Для заголовков слойлеров пишем атрибут data-spoller
   Если нужно включать\выключать работу спойлеров на разных размерах экранов
   пишем параметры ширины и типа брейкпоинта.
   
   Например: 
   data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
   data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px
   
   Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
   */

   const spollersArray = document.querySelectorAll('[data-spollers]');
   if (spollersArray.length > 0) {
      // Получение обычных слойлеров
      const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
         return !item.dataset.spollers.split(",")[0];
      });
      // Инициализация обычных слойлеров
      if (spollersRegular.length > 0) {
         initSpollers(spollersRegular);
      }
      // Получение слойлеров с медиа запросами
      const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
         return item.dataset.spollers.split(",")[0];
      });
      // Инициализация слойлеров с медиа запросами
      if (spollersMedia.length > 0) {
         const breakpointsArray = [];
         spollersMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
         });
         // Получаем уникальные брейкпоинты
         let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
         });
         mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
         });
         // Работаем с каждым брейкпоинтом
         mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);
            // Объекты с нужными условиями
            const spollersArray = breakpointsArray.filter(function (item) {
               if (item.value === mediaBreakpoint && item.type === mediaType) {
                  return true;
               }
            });
            // Событие
            matchMedia.addEventListener("change", function () {
               initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
         });
      }
      // Инициализация
      function initSpollers(spollersArray, matchMedia = false) {
         spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
               spollersBlock.classList.add('_spoller-init');
               initSpollerBody(spollersBlock);
               spollersBlock.addEventListener("click", setSpollerAction);
            } else {
               spollersBlock.classList.remove('_spoller-init');
               initSpollerBody(spollersBlock, false);
               spollersBlock.removeEventListener("click", setSpollerAction);
            }
         });
      }
      // Работа с контентом
      function initSpollerBody(spollersBlock, hideSpollerBody = true) {
         const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
         if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
               if (hideSpollerBody) {
                  spollerTitle.removeAttribute('tabindex');
                  if (!spollerTitle.classList.contains('_spoller-active')) {
                     spollerTitle.nextElementSibling.hidden = true;
                  }
               } else {
                  spollerTitle.setAttribute('tabindex', '-1');
                  spollerTitle.nextElementSibling.hidden = false;
               }
            });
         }
      }
      function setSpollerAction(e) {
         const el = e.target;
         if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
            if (!spollersBlock.querySelectorAll('._slide').length) {
               if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
                  hideSpollersBody(spollersBlock);
               }
               spollerTitle.classList.toggle('_spoller-active');
               _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
         }
      }
      function hideSpollersBody(spollersBlock) {
         const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
         if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_spoller-active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
         }
      }
   }

   //==== 
   //==== Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================
   let _slideUp = (target, duration = 500, showmore = 0) => {
      if (!target.classList.contains('_slide')) {
         target.classList.add('_slide');
         target.style.transitionProperty = 'height, margin, padding';
         target.style.transitionDuration = duration + 'ms';
         target.style.height = `${target.offsetHeight}px`;
         target.offsetHeight;
         target.style.overflow = 'hidden';
         target.style.height = showmore ? `${showmore}px` : `0px`;
         target.style.paddingTop = 0;
         target.style.paddingBottom = 0;
         target.style.marginTop = 0;
         target.style.marginBottom = 0;
         window.setTimeout(() => {
            target.hidden = !showmore ? true : false;
            !showmore ? target.style.removeProperty('height') : null;
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            !showmore ? target.style.removeProperty('overflow') : null;
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
         }, duration);
      }
   }
   let _slideDown = (target, duration = 500, showmore = 0) => {
      if (!target.classList.contains('_slide')) {
         target.classList.add('_slide');
         target.hidden = target.hidden ? false : null;
         showmore ? target.style.removeProperty('height') : null;
         let height = target.offsetHeight;
         target.style.overflow = 'hidden';
         target.style.height = showmore ? `${showmore}px` : `0px`;
         target.style.paddingTop = 0;
         target.style.paddingBottom = 0;
         target.style.marginTop = 0;
         target.style.marginBottom = 0;
         target.offsetHeight;
         target.style.transitionProperty = "height, margin, padding";
         target.style.transitionDuration = duration + 'ms';
         target.style.height = height + 'px';
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
         }, duration);
      }
   }
   let _slideToggle = (target, duration = 500) => {
      if (target.hidden) {
         return _slideDown(target, duration);
      } else {
         return _slideUp(target, duration);
      }
   }
   //===
   //==== Модуь работы со спойлерами  end    ===============================================================






   // Popup start ====================================================================================

   /* Проверка мобильного браузера */
   let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
   /* Добавление класса touch для HTML если браузер мобильный */
   function addTouchClass() {
      // Добавление класса _touch для HTML если браузер мобильный
      if (isMobile.any()) document.documentElement.classList.add('touch');
   }

   // Получение хеша в адресе сайта
   function getHash() {
      if (location.hash) { return location.hash.replace('#', ''); }
   }
   // Указание хеша в адресе сайта
   function setHash(hash) {
      history.pushState('', '', hash);
   }

   //==== Вспомогательные модули блокировки прокрутки и скочка =====
   let bodyLockStatus = true;
   let bodyLockToggle = (delay = 500) => {
      if (document.documentElement.classList.contains('lock')) {
         bodyUnlock(delay);
      } else {
         bodyLock(delay);
      }
   }
   let bodyUnlock = (delay = 500) => {
      let body = document.querySelector("body");
      if (bodyLockStatus) {
         let lock_padding = document.querySelectorAll("._lp");
         setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
               const el = lock_padding[index];
               el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            document.documentElement.classList.remove("lock");
         }, delay);
         bodyLockStatus = false;
         setTimeout(function () {
            bodyLockStatus = true;
         }, delay);
      }
   }
   let bodyLock = (delay = 500) => {
      let body = document.querySelector("body");
      if (bodyLockStatus) {
         let lock_padding = document.querySelectorAll("._lp");
         for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
         }
         body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
         document.documentElement.classList.add("lock");

         bodyLockStatus = false;
         setTimeout(function () {
            bodyLockStatus = true;
         }, delay);
      }
   }

   //==== Вспомогательные модули блокировки прокрутки и скочка   =====

   let popupItem;
   function initPopups() {
      popupItem = new HystModal({
         linkAttributeName: "data-popup",
         beforeOpen: function (popupItem) {
            const hash = popupItem.openedWindow.id;
            setHash(`#${hash}`);
         },
         afterClose: function (popupItem) {
            setHash(window.location.href.split('#')[0]);
         },
         // прочие настройки (не обязательно), см. API
      });
      // Открытие по хешу
      if (getHash() && document.querySelector(`#${getHash()}`)) {
         popupItem.open(`#${getHash()}`);
      }
   }
   initPopups();

   // Popup end =============================================================================================


   // Плавный скролл кнопки наверх  ====================================================
   let btnUp = document.querySelector('.btn__up');

   btnUp.addEventListener('click', function (e) {
      scrollToY(0);
   });

   let scrolls = 0;
   window.addEventListener('scroll', function (e) {
      // console.log(++scrolls);
      let pos = window.pageYOffset;

      if (pos > window.innerHeight) {
         btnUp.classList.add('btn__up-open');
      }
      else {
         btnUp.classList.remove('btn__up-open');
      }

   });

   function scrollToY(pos) {
      window.scrollTo({
         top: pos,
         behavior: "smooth"
      });
   }
   // Плавный скролл кнопки наверх  ====================================================



   //  slider  popularSlider ===========================================================================

   const popularSlider = new Swiper('.popular__slider', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 15,

      navigation: {
         nextEl: '.swiper-button-next ,.popular-button-next',
         prevEl: '.swiper-button-prev ,.popular-button-prev',
      },

      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         700: {
            slidesPerView: 2,
         },
         // 992: {
         //    slidesPerView: 2,
         // },
         1024: {
            // centeredSlides: true,
            slidesPerView: 3,
         },
      },

   });

   //  slider  popularSlider ===========================================================================

   //  slider  routesSlider ============================================================================

   const routesSlider = new Swiper('.routes__slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 15,
      direction: 'horizontal',
      // slidesPerGroup: 1,
      speed: 500,

      navigation: {
         nextEl: '.swiper-button-next ,.routes-button-next',
         prevEl: '.swiper-button-prev ,.routes-button-prev',
      },

      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         700: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 3,
         },
      },

   });


   //  slider routesSlider ==============================================================================

   //DYNAMIC ADAPT  start ===================================================================================
   // Dynamic Adapt v.1
   // HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
   // e.x. data-da=".item,992,2"
   // Andrikanych Yevhen 2020
   // https://www.youtube.com/c/freelancerlifestyle

   // "use strict";

   function DynamicAdapt(type) {
      this.type = type;
   }

   DynamicAdapt.prototype.init = function () {
      const _this = this;
      // массив объектов
      this.оbjects = [];
      this.daClassname = "_dynamic_adapt_";
      // массив DOM-элементов
      this.nodes = document.querySelectorAll("[data-da]");

      // наполнение оbjects объктами
      for (let i = 0; i < this.nodes.length; i++) {
         const node = this.nodes[i];
         const data = node.dataset.da.trim();
         const dataArray = data.split(",");
         const оbject = {};
         оbject.element = node;
         оbject.parent = node.parentNode;
         оbject.destination = document.querySelector(dataArray[0].trim());
         оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
         оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
         оbject.index = this.indexInParent(оbject.parent, оbject.element);
         this.оbjects.push(оbject);
      }

      this.arraySort(this.оbjects);

      // массив уникальных медиа-запросов
      this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
         return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
      }, this);
      this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
         return Array.prototype.indexOf.call(self, item) === index;
      });

      // навешивание слушателя на медиа-запрос
      // и вызов обработчика при первом запуске
      for (let i = 0; i < this.mediaQueries.length; i++) {
         const media = this.mediaQueries[i];
         const mediaSplit = String.prototype.split.call(media, ',');
         const matchMedia = window.matchMedia(mediaSplit[0]);
         const mediaBreakpoint = mediaSplit[1];

         // массив объектов с подходящим брейкпоинтом
         const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
         });
         matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
         });
         this.mediaHandler(matchMedia, оbjectsFilter);
      }
   };

   DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
      if (matchMedia.matches) {
         for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
         }
      } else {
         for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
               this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
         }
      }
   };

   // Функция перемещения
   DynamicAdapt.prototype.moveTo = function (place, element, destination) {
      element.classList.add(this.daClassname);
      if (place === 'last' || place >= destination.children.length) {
         destination.insertAdjacentElement('beforeend', element);
         return;
      }
      if (place === 'first') {
         destination.insertAdjacentElement('afterbegin', element);
         return;
      }
      destination.children[place].insertAdjacentElement('beforebegin', element);
   }

   // Функция возврата
   DynamicAdapt.prototype.moveBack = function (parent, element, index) {
      element.classList.remove(this.daClassname);
      if (parent.children[index] !== undefined) {
         parent.children[index].insertAdjacentElement('beforebegin', element);
      } else {
         parent.insertAdjacentElement('beforeend', element);
      }
   }

   // Функция получения индекса внутри родителя
   DynamicAdapt.prototype.indexInParent = function (parent, element) {
      const array = Array.prototype.slice.call(parent.children);
      return Array.prototype.indexOf.call(array, element);
   };

   // Функция сортировки массива по breakpoint и place 
   // по возрастанию для this.type = min
   // по убыванию для this.type = max
   DynamicAdapt.prototype.arraySort = function (arr) {
      if (this.type === "min") {
         Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
               if (a.place === b.place) {
                  return 0;
               }

               if (a.place === "first" || b.place === "last") {
                  return -1;
               }

               if (a.place === "last" || b.place === "first") {
                  return 1;
               }

               return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
         });
      } else {
         Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
               if (a.place === b.place) {
                  return 0;
               }

               if (a.place === "first" || b.place === "last") {
                  return 1;
               }

               if (a.place === "last" || b.place === "first") {
                  return -1;
               }

               return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
         });
         return;
      }
   };

   const da = new DynamicAdapt("max");
   da.init();


   // DYNAMIC ADAPT  end =====================================================================================


   // Меню бургер ======================================================================================
   //Burger start   ====================================================================================
   const iconMenu = document.querySelector(".icon-menu");
   const menuBody = document.querySelector(".menu__list");

   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle("_lock");
         iconMenu.classList.toggle("menu-open");
         menuBody.classList.toggle("menu-open");
         menuBody.classList.toggle('menu__list--active');
      });
   }
   if (menuBody) {
      menuBody.addEventListener('click', function () {
         iconMenu.classList.remove("menu-open");
         menuBody.classList.remove("menu__list--active");
         menuBody.classList.remove("menu-open");
         document.body.classList.remove("_lock");
      });
   }

   //Burger  end  ==========================================================================================


   // Slider ===============================================================================================

   const headerSlider = new Swiper('.header__slider', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      // Автопрокрутка
      autoplay: {
         // Пауза между прокруткой
         delay: 3000,
         // Закончить на последнем слайде
         // stopOnLastSlide: true,
         // Отключить после ручного переключения
         // disableOnInteraction: true,
      },

      // Скорость
      speed: 1500,

      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
      },
   });

   // Slider ===============================================================================================

});

//=====  JQuery  start  =============================================================

$(document).ready(function () {
   $("form").submit(function () { // Событие отправки с формы
      var form_data = $(this).serialize(); // Собираем данные из полей
      $.ajax({
         type: "POST", // Метод отправки
         url: "send.php", // Путь к PHP обработчику sendform.php
         data: form_data,
         success: function () {
            $('.overley').addClass('overley-visible');
            $('.modal').addClass('modal__visible');
         }
      }).done(function () {
         $(this).find('input').val('');
         $('form').trigger('reset');
      });
      event.preventDefault();
   });
});


// Slick slider start ====================================================================
$(function () {
   $('.your-class').slick({
      dots: true,
   });

});

// Slick slider finish ====================================================================

//=====  JQuery  finish ===================================================================
