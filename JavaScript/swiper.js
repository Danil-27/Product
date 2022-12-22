new Swiper('.swiper-container', {
    breakpoints: {
      1: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loopedSlides: 1,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        loopedSlides: 2,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loopedSlides: 3,
      },
    },
    pagination: {
      el: '.swiper-paginations',
      //булеты
      clickable: true,
    },
    // Автоматическая прокрутка
    // autoplay: {
    //    //Пауза между прокруткой
    //    delay: 2500,
    //    //Закончить на последнем слайде
    //    stopOnLastSlide: true,
    //    //Отключить после ручного переключения
    //    disableOnInteraction: false,
    // },
    //Отключаем предзагрузку картинки
    preloadImeges: false,
    //Подзагрузка картинок
    lazy: {
      //Подгружать на старте переключения слайда
      loadOnTransitionStart: false,
      //Подгружает предыдущие и следующие картинки
      loadPrevNext: false,
    },
    //Слежка за видимыми слайдами
    watchSlidesProgress: true,
    //Добавление класса видимым слайдам
    watchSlidesVisibility: true,
    //Быстрее пролистывает слайдеры
    touchRatio: 2,
    // Декоративный курсор
    grabCursor: true,
    //Кол-во слайдеров для показа
    slidesPerView: 3,
    //Кол-во пролистоваемых слайдеров
  //   slidesPerGroup: 3,
    //Отступы
    spaceBetween: 32,
    //Бесконечный слайдер
    loop: true,
    loopedSlides: 3,
    //скорость
    speed: 1200,
  })