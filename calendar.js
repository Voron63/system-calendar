/* SYSTEM: календарь обучения (вынесено из HEAD аккаунта) */
(function(){
  var css = "\n.sys-cal-card{\n  max-width:400px; margin:24px auto 0; padding:28px 26px 24px;\n  background:#EBF1FE; border-radius:15px;\n  font-family:'Manrope',-apple-system,Segoe UI,Roboto,sans-serif;\n  color:#111; box-sizing:border-box;\n}\n.sys-cal-card *{ box-sizing:border-box; }\n.sys-cal-h{ font-size:30px; font-weight:800; line-height:1.04; letter-spacing:-.5px; color:#111; margin:0 0 20px; }\n\n/* \u0434\u043e\u043f.\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441\u0430\u0439\u0434\u0431\u0430\u0440\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0442\u0440\u0435\u043d\u0438\u043d\u0433\u0430 (\u043a\u0430\u043a \u0432 \u0443\u0440\u043e\u043a\u0430\u0445) */\n.sys-extra-card{ max-width:400px; margin:10px auto 0; padding:24px; background:#E5EEFF; border-radius:18px; font-family:'Manrope',-apple-system,Segoe UI,Roboto,sans-serif; color:#111; box-sizing:border-box; }\n.sys-extra-card *{ box-sizing:border-box; }\n.sys-extra-card h2{ font-size:26px; font-weight:800; line-height:1.05; letter-spacing:-.5px; margin:0 0 14px; }\n.sys-extra-card .ulink{ display:block; background:#fff; border:1px solid #000; border-radius:10px; padding:15px; text-align:center; font-size:16px; color:#000; text-decoration:none; margin-top:14px; }\n.sys-extra-card .ulink:first-of-type{ margin-top:0; }\n.sys-extra-card .soc{ display:flex; gap:11px; flex-wrap:wrap; }\n.sys-extra-card .soc a{ width:37px; height:37px; border-radius:50%; border:1.5px solid #000; display:flex; align-items:center; justify-content:center; }\n.sys-extra-card .soc svg{ width:18px; height:18px; fill:#000; }\n/* \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \"\u0412\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435\" \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0442\u0440\u0435\u043d\u0438\u043d\u0433\u0430 (\u043a\u0430\u043a \u0432 \u0443\u0440\u043e\u043a\u0430\u0445) */\n.sys-vd-card{ position:relative; max-width:400px; margin:0 auto; padding:24px; background:#E5EEFF; border-radius:18px; font-family:'Manrope',-apple-system,Segoe UI,Roboto,sans-serif; color:#111; box-sizing:border-box; }\n.sys-vd-card *{ box-sizing:border-box; }\n.sys-vd-card .savatar{ position:absolute; top:24px; right:24px; width:60px; height:60px; border-radius:50%; border:1.5px solid #000; overflow:hidden; background:#fff; }\n.sys-vd-card .savatar img{ width:100%; height:100%; object-fit:cover; }\n.sys-vd-card h2{ font-size:30px; font-weight:700; line-height:1; margin:0 0 18px; }\n.sys-vd-card .sub{ font-size:22px; font-weight:700; margin:18px 0 0; }\n.sys-vd-card .row-ic{ display:flex; align-items:center; gap:8px; font-size:14px; font-weight:700; margin-top:16px; }\n.sys-vd-card .row-ic svg{ width:18px; height:18px; fill:none; stroke:#000; stroke-width:1.6; }\n.sys-vd-card .muted{ font-size:14px; margin-top:4px; }\n.sys-vd-card .note{ font-size:14px; margin-top:4px; line-height:1.3; }\n\n#calendar{ font-family:'Manrope',-apple-system,Segoe UI,Roboto,sans-serif; color:#111; }\n#calendar *{ box-sizing:border-box; }\n/* \u0448\u0430\u043f\u043a\u0430: \u2039  \u041c\u0435\u0441\u044f\u0446 \u0413\u043e\u0434  \u203a */\n#calendar #calTitle{ display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }\n#calendar #monthYear{ flex:1; text-align:center; font-size:18px; font-weight:600; color:#1a1a1a; }\n#calendar .month-mover{\n  width:30px; height:36px; border:0; background:none; cursor:pointer;\n  display:flex; align-items:center; justify-content:center; padding:0;\n  border-radius:0; transition:opacity .15s;\n}\n#calendar .month-mover svg{ width:20px; height:20px; }\n#calendar .month-mover svg path{ stroke:#7b8494; stroke-width:2; }\n#calendar .month-mover:hover{ opacity:.6; }\n#calendar .month-mover_disabled{ opacity:.25; pointer-events:none; }\n\n/* \u0441\u0435\u0442\u043a\u0430 */\n#calendar #calThead{ display:grid; grid-template-columns:repeat(7,1fr); margin-bottom:6px; }\n#calendar #calThead > div{ text-align:center; font-size:13px; font-weight:500; color:#9aa3b5; padding:6px 0; }\n#calendar #calTbody{ display:grid; grid-template-columns:repeat(7,1fr); gap:5px 2px; }\n#calendar #calTbody .a-date{\n  aspect-ratio:1/1; border:none; background:transparent; border-radius:50%; cursor:pointer;\n  display:flex; align-items:center; justify-content:center; padding:0; margin:0 auto;\n  width:38px; height:38px; max-width:100%;\n  font-family:inherit; font-size:16px; font-weight:500; color:#111;\n  position:relative; transition:background .15s, color .15s, box-shadow .15s;\n}\n#calendar #calTbody .a-date span{ position:relative; z-index:1; }\n#calendar #calTbody .a-date:hover{ background:#D6E2FB; }\n#calendar #calTbody .a-date.blurred{ color:#b9c0d2; cursor:default; pointer-events:none; background:transparent; }\n\n/* \u0434\u0435\u043d\u044c \u0441 \u0441\u043e\u0431\u044b\u0442\u0438\u0435\u043c \u2014 \u0442\u043e\u043d\u043a\u0438\u0439 \u043a\u0440\u0443\u0436\u043e\u043a-\u043e\u0431\u0432\u043e\u0434\u043a\u0430 */\n#calendar #calTbody .a-date.event{ box-shadow:inset 0 0 0 1.5px #BCC6DD; }\n/* \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0438 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0434\u0435\u043d\u044c \u2014 \u0447\u0451\u0440\u043d\u044b\u0439 \u043a\u0440\u0443\u0436\u043e\u043a */\n#calendar #calTbody .a-date.current,\n#calendar #calTbody .a-date.focused{ background:#111 !important; color:#fff; box-shadow:none; }\n\n/* \u043f\u043e\u0434\u0432\u0430\u043b: \u0434\u0430\u0442\u0430 + \u0441\u043e\u0431\u044b\u0442\u0438\u0435 */\n#calendar #calTFooter_event{ margin-top:20px; border-top:1px solid #CFD8EC; padding-top:18px; }\n#calendar #eventTitle_today{ font-size:18px; font-weight:700; color:#111; margin:0 0 14px; }\n#calendar .day-event-item{ display:block; text-decoration:none; padding:2px 0 2px 16px; border-left:3px solid #BCC6DD; margin-bottom:14px; }\n#calendar #calTFooter > .day-event-item:last-child{ margin-bottom:0; }\n#calendar .day-event-item .eventTimes{ display:block; font-size:14px; font-weight:500; color:#8a93a8; margin-bottom:4px; }\n#calendar .day-event-item .eventTimes:empty{ display:none; }\n#calendar .day-event-item .eventTitle{ display:block; font-size:16px; font-weight:500; color:#111; line-height:1.3; }\n#calendar a.day-event-item:hover .eventTitle{ text-decoration:underline; }\n";
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);
})();

(function(){
  /* ============================================================
     СОБЫТИЯ — РЕДАКТИРУЙ ТОЛЬКО ЭТОТ СПИСОК
     ["ГГГГ-ММ-ДД", "ЧЧ:ММ", "Название", "Ссылка"]   (время и ссылка не обязательны)
     ============================================================ */
  var СОБЫТИЯ = [
    ["2026-06-29", "", "Урок 0 + Урок 0.1", ""],
    ["2026-06-30", "", "Позиционирование + Дизайн контента", ""],
    ["2026-07-01", "", "Монтаж и дизайн видео + Иерархия", ""],
    ["2026-07-02", "", "Анализ целевой аудитории", ""],
    ["2026-07-03", "", "Съёмка видео + Съёмка 2.1 + Фото и композиция", ""],
    ["2026-07-05", "", "Разбор ошибок + домашние задания", ""],
    ["2026-07-06", "", "Анализ конкурентов", ""],
    ["2026-07-07", "", "Программы для монтажа + КапКат №1 + Типографика", ""],
    ["2026-07-08", "", "Психология внимания + триггеры", ""],
    ["2026-07-09", "", "КапКат №2 + Колористика", ""],
    ["2026-07-10", "", "Психология продаж", ""],
    ["2026-07-12", "", "Разбор ошибок + домашние задания", ""],
    ["2026-07-13", "", "СТА + о чём говорить в блоге", ""],
    ["2026-07-14", "", "КапКат №3 + Композиция", ""],
    ["2026-07-15", "", "Воронки + психология ведения блога", ""],
    ["2026-07-16", "", "КапКат №4 + №5 + Дизайн разных форматов", ""],
    ["2026-07-17", "", "Доверие", ""],
    ["2026-07-18", "", "Бонус: владение Figma", ""],
    ["2026-07-19", "", "Разбор ошибок + домашние задания", ""],
    ["2026-07-20", "", "Сторителлинги + Рилс: Урок 0", ""],
    ["2026-07-21", "", "КапКат №6 + ошибки монтажа", ""],
    ["2026-07-22", "", "Формулы сторителлингов", ""],
    ["2026-07-23", "", "Рилс: Урок 1 + КапКат №7+8", ""],
    ["2026-07-24", "", "Удержание внимания в сторис + триггеры", ""],
    ["2026-07-26", "", "Разбор ошибок + домашние задания", ""],
    ["2026-07-27", "", "Идеи сторителлингов + CTA в сторис", ""],
    ["2026-07-28", "", "Нейронки для сторис", ""],
    ["2026-07-29", "", "Блок: Закрепы (все уроки в 1 день)", ""],
    ["2026-07-30", "", "Как придумывать идеи для рилс?", ""],
    ["2026-07-31", "", "Хуки Рилс", ""],
    ["2026-08-02", "", "Разбор ошибок + домашние задания", ""],
    ["2026-08-03", "", "Сценарий рилс + Съёмка рилс", ""],
    ["2026-08-04", "", "Как пробить баннерную слепоту", ""],
    ["2026-08-05", "", "Почему Рилс не залетают + публикация", ""],
    ["2026-08-06", "", "Аналитика и масштабирование", ""],
    ["2026-08-07", "", "REELS → ПОДПИСЧИКИ → ДЕНЬГИ", ""],
    ["2026-08-09", "", "Разбор ошибок + домашние задания", ""],
    ["2026-08-10", "", "Как работает упаковка аккаунта", ""],
    ["2026-08-11", "", "Шапка профиля", ""],
    ["2026-08-12", "", "Закрепы (сторис) + закрепы посты профиля", ""],
    ["2026-08-13", "", "Общий визуал аккаунта", ""],
    ["2026-08-14", "", "Практика: дизайн обложек в Figma", ""],
    ["2026-08-16", "", "Разбор ошибок + домашние задания", ""],
    ["2026-08-17", "", "Неделя доп. уроков", ""],
    ["2026-08-18", "", "Тайм-менеджмент на фрилансе", ""],
    ["2026-08-23", "", "Финальный урок: структура дальнейших действий + наставления", ""]
  ];

  /* СОБЫТИЯ — SYSTEM 1 ПОТОК (тренинг 935774562), старт 24.08.2026 */
  var СОБЫТИЯ_П1 = [
    ["2026-08-24", "", "Урок 0 + Урок 0.1", ""],
    ["2026-08-25", "", "Позиционирование", ""],
    ["2026-08-26", "", "Дизайн контента + Иерархия", ""],
    ["2026-08-27", "", "Анализ целевой аудитории", ""],
    ["2026-08-28", "", "Монтаж и дизайн видео", ""],
    ["2026-08-30", "", "Разбор ошибок + домашние задания", ""],
    ["2026-08-31", "", "Съёмка видео + Съёмка 2.1", ""],
    ["2026-09-01", "", "Фото и видео + Программы для монтажа", ""],
    ["2026-09-02", "", "Анализ конкурентов", ""],
    ["2026-09-03", "", "КапКат №1 + Типографика", ""],
    ["2026-09-04", "", "Психология внимания + триггеры", ""],
    ["2026-09-06", "", "Разбор ошибок + домашние задания", ""],
    ["2026-09-07", "", "Колористика", ""],
    ["2026-09-08", "", "КапКат №2", ""],
    ["2026-09-09", "", "Психология продаж", ""],
    ["2026-09-10", "", "Как общаться с клиентами", ""],
    ["2026-09-11", "", "CTA", ""],
    ["2026-09-13", "", "Разбор ошибок + домашние задания", ""],
    ["2026-09-14", "", "О чём говорить в блоге", ""],
    ["2026-09-15", "", "Воронки", ""],
    ["2026-09-16", "", "Психология ведения блога", ""],
    ["2026-09-17", "", "КапКат №3", ""],
    ["2026-09-18", "", "Композиция", ""],
    ["2026-09-20", "", "Разбор ошибок + домашние задания", ""],
    ["2026-09-21", "", "Доверие", ""],
    ["2026-09-22", "", "Высокий чек + где искать клиентов", ""],
    ["2026-09-23", "", "КапКат №4 + №5", ""],
    ["2026-09-24", "", "Дизайн разных форматов", ""],
    ["2026-09-25", "", "Бонус: владение Figma (3 урока)", ""],
    ["2026-09-27", "", "Разбор ошибок + домашние задания", ""],
    ["2026-09-28", "", "Сторителлинги + Рилс: Урок 0", ""],
    ["2026-09-29", "", "КапКат №6 + ошибки монтажа", ""],
    ["2026-09-30", "", "Формулы сторителлингов + КапКат №7", ""],
    ["2026-10-01", "", "Рилс: Урок 1 + КапКат №8", ""],
    ["2026-10-05", "", "Удержание внимания в сторис + триггеры", ""],
    ["2026-10-06", "", "Идеи сторителлингов + CTA в сторис", ""],
    ["2026-10-07", "", "Нейронки для сторис", ""],
    ["2026-10-08", "", "Блок: Закрепы (все уроки в 1 день)", ""],
    ["2026-10-12", "", "Как придумывать идеи для рилс?", ""],
    ["2026-10-13", "", "Хуки Рилс", ""],
    ["2026-10-14", "", "Сценарий рилс + Съёмка рилс", ""],
    ["2026-10-15", "", "Баннерная слепота + почему рилс не залетают", ""],
    ["2026-10-16", "", "Публикация рилс", ""],
    ["2026-10-19", "", "Аналитика и масштабирование", ""],
    ["2026-10-20", "", "Пробные рилс", ""],
    ["2026-10-21", "", "REELS → ПОДПИСЧИКИ → ДЕНЬГИ", ""],
    ["2026-10-22", "", "Как работает упаковка аккаунта", ""],
    ["2026-10-23", "", "Шапка профиля", ""],
    ["2026-10-26", "", "Закрепы (сторис) + закрепы посты профиля", ""],
    ["2026-10-26", "", "Неделя доп. уроков", ""],
    ["2026-10-26", "", "🔥 Финишная прямая", ""],
    ["2026-10-27", "", "Общий визуал аккаунта", ""],
    ["2026-10-29", "", "Как вести блог и продавать продукты законно", ""],
    ["2026-10-30", "", "Работа с брендами + UGC", ""],
    ["2026-10-30", "", "Тайм-менеджмент на фрилансе", ""],
    ["2026-10-30", "", "Финальный урок: структура дальнейших действий + наставления", ""],
    ["2026-11-01", "", "Финальный разбор ошибок — что делать после SYSTEM", ""]
  ];

  /* какой поток открыт: страница тренинга по id, страница урока — по ссылке на модуль 935774xxx */
  function isP1(){
    if (/stream\/view(?:\/id\/|\?id=)935774562/.test(location.href)) return true;
    return !!document.querySelector('a[href*="/stream/view/id/935774"]');
  }
  function EVS(){ return isP1() ? СОБЫТИЯ_П1 : СОБЫТИЯ; }
  /* ============================================================ */

  var fullMonths     = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
  var fullMonthsName = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  var weekHead = '<div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>';
  var chevL = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="#7b8494" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var chevR = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="#7b8494" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var tpl = '<div id="calTitle">'
    + '<button type="button" class="month-mover prev">'+chevL+'</button>'
    + '<div id="monthYear"></div>'
    + '<button type="button" class="month-mover next">'+chevR+'</button>'
    + '</div>'
    + '<div id="full_calender"><div id="calThead"></div><div id="calTbody"></div></div>'
    + '<div id="calTFooter_event"><h3 id="eventTitle_today"></h3><div id="calTFooter"></div></div>';

  /* доп.блоки сайдбара (Полезные ссылки + Соц.сети) — только на странице тренинга */
  var EXTRA = '<div class="sys-extra-card"><h2>Полезные ссылки</h2>'
    + '<a class="ulink" href="https://t.me/+PUd_0dWs7W81OGIy" target="_blank" rel="noopener">Канал SYSTEM</a>'
    + '<a class="ulink" href="https://t.me/+68HZTx292dY5YTBi" target="_blank" rel="noopener">Чат общения SYSTEM</a>'
    + '<a class="ulink" href="https://t.me/+gjBJ8ccQohRiNzcy" target="_blank" rel="noopener">Чат дисциплины SYSTEM</a>'
    + '<a class="ulink" href="https://t.me/+Kth1hNqW7uwzYmUy" target="_blank" rel="noopener">Разборы работ SYSTEM</a>'
    + '</div>'
    + '<div class="sys-extra-card"><h2>Соц. сети</h2><div class="soc">'
    + '<a href="#"><svg viewBox="0 0 24 24"><path d="M3 7h3c.3 4 2 6 3 6V7h3v4c1 0 2-1 3-4h3c-1 3-2 4-3 5 1 1 3 3 3 5h-3c-1-2-2-3-3-3v3H9c-4 0-6-5-6-10z"/></svg></a>'
    + '<a href="#"><svg viewBox="0 0 24 24"><path d="M22 4L2 11l6 2 2 6 3-4 5 4 4-15z"/></svg></a>'
    + '<a href="#"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3 7h-1.5c-.5 0-.5.3-.5.5V11H15l-.2 2H13v6h-2v-6H9v-2h2V9c0-1.5 1-2.5 2.5-2.5H15z"/></svg></a>'
    + '<a href="#"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm5 7l-1.6 7.5c-.1.5-.5.7-1 .4l-2.8-2-1.3 1.3c-.2.2-.3.3-.6.3l.2-3 5-4.5c.2-.2 0-.3-.3-.1L8 13l-2.8-.9c-.6-.2-.6-.6.1-.9l11-4.2c.5-.2 1 .1.7 1.1z"/></svg></a>'
    + '<a href="#"><svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6 2 11c0 2.9 1.6 5.4 4 7v4l3.7-2c.7.2 1.5.3 2.3.3 5.5 0 10-4 10-9s-4.5-9-10-9z"/></svg></a>'
    + '<a href="#"><svg viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm7 5a4 4 0 100 8 4 4 0 000-8z"/></svg></a>'
    + '</div></div>';

  var SYS_AVATAR = 'https://voron63.github.io/system-calendar/avatar.png';

  function sameDate(a,b){ return a.getFullYear()==b.getFullYear() && a.getMonth()==b.getMonth() && a.getDate()==b.getDate(); }
  function monthDays(m,y){ var d=new Date(y,m,1),r=[]; while(d.getMonth()===m){ r.push(d.getDate()); d.setDate(d.getDate()+1);} return r; }

  function defineMEC($){
    if($.fn.MEC) return;
    $.fn.MEC = function(opts){
      var settings = $.extend({ events:[], start:new Date() }, opts);
      var cal = this; cal.addClass('mini-cal').html(tpl);
      var thead=cal.find('#calThead'), tbody=cal.find('#calTbody'),
          mLabel=cal.find('#monthYear'), dHead=cal.find('#eventTitle_today'), footer=cal.find('#calTFooter');
      var curMonth=settings.start.getMonth(), curYear=settings.start.getFullYear();
      thead.html(weekHead);
      var ms = settings.events.map(function(e){ return new Date(e.date).getFullYear()*12 + new Date(e.date).getMonth(); });
      var minMS = ms.length?Math.min.apply(null,ms):curYear*12+curMonth;
      var maxMS = ms.length?Math.max.apply(null,ms):curYear*12+curMonth;
      function show(dateObj, list){
        dHead.text(dateObj.getDate()+' '+fullMonths[dateObj.getMonth()]);
        if(list && list.length){
          var h=''; list.forEach(function(it){
            var inner='<span class="eventTimes">'+(it.times||'')+'</span><span class="eventTitle">'+it.title+'</span>';
            h += it.link ? '<a href="'+it.link+'" class="day-event-item">'+inner+'</a>' : '<div class="day-event-item">'+inner+'</div>';
          });
          footer.html(h);
        } else { footer.html('<div class="day-event-item"><span class="eventTitle">Нет событий в этот день</span></div>'); }
      }
      function eventsOn(d){ return settings.events.filter(function(e){ return sameDate(new Date(e.date),d); }); }
      function dateTpl(blurred,date,isToday,hasEvent){
        if(blurred) return '<div class="a-date blurred"><span>'+date+'</span></div>';
        var cls='a-date'+(isToday?' current':'')+(hasEvent?' event':'');
        return '<button type="button" class="'+cls+'" data-day="'+date+'"><span>'+date+'</span></button>';
      }
      function prevTail(weekday){
        var pm=curMonth>0?curMonth-1:11, py=curMonth>0?curYear:curYear-1, arr=monthDays(pm,py), out='';
        for(var i=weekday;i>0;i--) out += dateTpl(true, arr[arr.length-i]); return out;
      }
      function build(month,year){
        curMonth=month; curYear=year;
        mLabel.text(fullMonthsName[month]+' '+year);
        var first=new Date(year,month,1), wd=first.getDay(); wd=wd>0?wd-1:6;
        tbody.html(prevTail(wd));
        var d=new Date(year,month,1), today=new Date();
        while(d.getMonth()===month){ var dd=new Date(d); tbody.append(dateTpl(false,d.getDate(),sameDate(dd,today),eventsOn(dd).length>0)); d.setDate(d.getDate()+1); }
        var extra=42-tbody.find('.a-date').length;
        for(var i=1;i<=extra;i++) tbody.append(dateTpl(true,i));
        var active=null;
        if(month===today.getMonth() && year===today.getFullYear()) active=new Date(today);
        else { var fe=settings.events.map(function(e){return new Date(e.date);}).filter(function(x){return x.getMonth()===month&&x.getFullYear()===year;}).sort(function(a,b){return a-b;})[0]; if(fe) active=fe; }
        if(active){ tbody.find('.a-date').filter(function(){ return Number($(this).attr('data-day'))===active.getDate() && !$(this).hasClass('blurred'); }).addClass('focused'); show(active,eventsOn(active)); }
        else { dHead.text(''); footer.html(''); }
        var cur=year*12+month;
        cal.find('.month-mover.prev').toggleClass('month-mover_disabled', cur<=minMS);
        cal.find('.month-mover.next').toggleClass('month-mover_disabled', cur>=maxMS);
      }
      cal.find('.month-mover').on('click',function(e){
        e.preventDefault(); if($(this).hasClass('month-mover_disabled')) return;
        if($(this).hasClass('next')){ var nm=curMonth<11?curMonth+1:0, ny=curMonth<11?curYear:curYear+1; build(nm,ny); }
        else { var pm=curMonth>0?curMonth-1:11, py=curMonth>0?curYear:curYear-1; build(pm,py); }
      });
      cal.on('click','.a-date',function(e){
        e.preventDefault(); if($(this).hasClass('blurred')) return;
        cal.find('.a-date').removeClass('focused'); $(this).addClass('focused');
        var dn=Number($(this).attr('data-day')); var dobj=new Date(curYear,curMonth,dn); show(dobj,eventsOn(dobj));
      });
      build(curMonth,curYear);
      return cal;
    };
  }

  function startMonth(){
    var dates=EVS().map(function(r){ var p=r[0].split('-'); return new Date(+p[0],+p[1]-1,+p[2]); }).filter(function(d){return !isNaN(d.getTime());}).sort(function(a,b){return a-b;});
    var today=new Date();
    if(dates.length){ var inR=dates.some(function(d){return d.getMonth()===today.getMonth()&&d.getFullYear()===today.getFullYear();}); if(!inR && today<dates[0]) return dates[0]; }
    return today;
  }
  function eventsList(){
    return EVS().map(function(r){ var p=r[0].split('-'); return {date:new Date(+p[0],+p[1]-1,+p[2]), times:r[1]||'', title:r[2]||'', link:r[3]||''}; }).filter(function(e){return !isNaN(e.date.getTime());});
  }

  function positionCal($){
    if(document.querySelector('.sys-vd-card')) return;
    var $blue=$('.user-info').first().closest('.xdget-html'); var $card=$('.sys-cal-card');
    if(!$blue.length || !$card.length) return;
    var bb=$blue[0].getBoundingClientRect().bottom, ct=$card[0].getBoundingClientRect().top, cur=parseInt(getComputedStyle($card[0]).marginTop)||0;
    $card[0].style.marginTop=(cur+((bb+24)-ct))+'px';
  }

  /* Размеры родного плеера: vhi-root = рамка 16:9 через !important
     (плеер GC переписывает свои стили после переноса → иначе высота 0 = чёрный экран) */
  function sizeVideo($blk){
    var root = $blk.find('[id^="vhi-root"]')[0];
    if(root){
      root.style.setProperty('position','relative','important');
      root.style.setProperty('width','100%','important');
      root.style.setProperty('height','auto','important');
      root.style.setProperty('aspect-ratio','16 / 9','important');
      root.style.setProperty('display','block','important');
      root.style.setProperty('background','#000','important');
      root.style.setProperty('border-radius','14px','important');
      root.style.setProperty('overflow','hidden','important');
    }
    $blk.find('iframe').each(function(){
      this.style.setProperty('position','absolute','important');
      this.style.setProperty('top','0','important');
      this.style.setProperty('left','0','important');
      this.style.setProperty('width','100%','important');
      this.style.setProperty('height','100%','important');
      this.style.setProperty('border','0','important');
    });
  }

  /* Родные видеоблоки GetCourse (vid03, защита + трекинг) переносим в слоты дизайна.
     Поддержка НЕСКОЛЬКИХ видео (уроки из 2+ подуроков): N родных блоков → N слотов по порядку.
     Слот = <div class="video"> ИЛИ простой <video> в дизайне (его оборачиваем в слот).
     Если родных блоков нет — простые <video> остаются как были. В editMode НЕ трогаем. */
  function placeVideo($){
    // простые <video> в дизайне → оборачиваем в слот .video (единообразие)
    $('.sys video').each(function(){
      if(!$(this).closest('.video').length) $(this).wrap('<div class="video"></div>');
    });
    var $slots = $('.sys .video');
    if(!$slots.length) return;
    // уникальные родные видеоблоки в порядке документа
    var blocks = [];
    $('.lt-video-hosting-with-defence, .vid03.lt-video').each(function(){
      var b = $(this).hasClass('lt-block') ? this : $(this).closest('.lt-block')[0];
      if(b && blocks.indexOf(b) < 0) blocks.push(b);
    });
    if(!blocks.length) return;
    var bi = 0;
    $slots.each(function(){
      var $slot = $(this);
      var existing = $slot.find('.lt-block')[0];
      if(existing){ sizeVideo($(existing)); bi++; return; }   // уже занят — только пере-размер
      if(bi >= blocks.length) return;
      var $blk = $(blocks[bi]); bi++;
      $slot.find('video').remove();                          // убираем простой плейсхолдер
      $slot.css({ position:'static', background:'none', padding:0, minHeight:0, height:'auto', aspectRatio:'auto', overflow:'visible', borderRadius:0 });
      $slot.append($blk);
      $blk.css({ position:'static', margin:0, width:'100%' });
      $blk.find('.lt-block-wrapper,.container,.row,[class*="col-"],.modal-block-content')
          .css({ position:'static', width:'100%', maxWidth:'100%', height:'auto', margin:0, padding:0 });
      sizeVideo($blk);
    });
  }

  function mount($){
    if(window.__sysCalReady) return true;

    // --- КОНТЕКСТ УРОКА: наш дизайн .sys на странице урока ---
    if($('.sys').length && location.pathname.indexOf('/lesson/') > -1){
      // старый статичный календарь (если где-то остался) → интерактивный
      var $table = $('table.cal').first();
      if($table.length && $table.closest('.sys').length){
        var $card = $table.closest('.scard'); if(!$card.length) $card=$table.parent();
        $card.find('.cal-top, table.cal, .cal-ev').remove();
        if($card.find('#calendar').length===0) $card.append('<div id="calendar" class="mini-cal training-935643857"></div>');
        defineMEC($); $('#calendar').MEC({ events:eventsList(), start:startMonth() });
      }
      // родной видеоблок → в слот дизайна (в превью редактора не трогаем)
      if(!/editMode=1/.test(location.search)){
        placeVideo($);
        setTimeout(function(){ placeVideo($); }, 400);
        setTimeout(function(){ placeVideo($); }, 1200);
        setTimeout(function(){ placeVideo($); }, 3000);
        setTimeout(function(){ placeVideo($); }, 6000);
      }
      window.__sysCalReady=true;
      return true;
    }

    // --- КОНТЕКСТ ТРЕНИНГА: страница SYSTEM, вставляем после блока баланса ---
    if(/stream\/view(?:\/id\/|\?id=)(935643857|935774562)/.test(location.href)){
      var $bal=$('[class*="userProfileBalance"]').last();
      var $anchor=$bal.length?$bal:$('.user-info').first().closest('.xdget-html');
      if(!$anchor.length) return false;
      // Ваши данные — перерисовка в стиль уроков
      try{
        var _nat=document.querySelector('.user-info');
        var _box=_nat?(_nat.closest('.xdget-html')||_nat.parentNode):null;
        if(_nat && !document.querySelector('.sys-vd-card')){
          var _all=(_nat.innerText||_nat.textContent||'');
          var _em=_all.match(/[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/); var _email=_em?_em[0]:'';
          var _t2=_all.replace(/[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/g,' '); var _ph=_t2.match(/\+?\d[\d ()\-]{8,}\d/); var _phone=_ph?_ph[0].trim():'';
          var _name=''; var _st=_nat.querySelectorAll('span > strong');
          for(var _k=0;_k<_st.length;_k++){var _t=(_st[_k].textContent||'').replace(/\s+/g,' ').trim(); if(_t&&_t.indexOf('Ваши данные')<0&&_t.indexOf('mail')<0&&_t.indexOf('елефон')<0){_name=_t;break;}}
          var _vd='<div class="sys-vd-card"><div class="savatar"><img src="'+SYS_AVATAR+'" alt=""></div>'
            +'<h2>Ваши данные:</h2>'
            +'<div class="sub">'+_name+'</div>'
            +'<div class="row-ic"><svg viewBox="0 0 24 24"><path d="M3 6h18v12H3z"></path><path d="M3 7l9 6 9-6"></path></svg>E-mail:</div><div class="muted">'+_email+'</div>'
            +'<div class="row-ic"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"></path></svg>Телефон</div><div class="muted">'+_phone+'</div>'
            +'<div class="sub">Ваш баланс</div>'
            +'<div class="row-ic"><svg viewBox="0 0 24 24"><path d="M7 4h6a4 4 0 010 8H7zM7 12h7M7 4v14"></path></svg>Бонусы: бонусных рублей</div>'
            +'<div class="note">*Бонусными рублями можно оплатить любую покупку</div></div>';
          if(_box){ _box.insertAdjacentHTML('beforebegin', _vd); _box.style.display='none'; }
          $('[class*="userProfileBalance"]').hide();
        }
      }catch(e){}
      // Заголовок "Модули курса" — только жирность (размер/отступы редактируешь сам в конструкторе)
      try{
        var _hh=Array.prototype.slice.call(document.querySelectorAll('h1,h2,h3,h4')).filter(function(e){return /Модули\s*Кур/i.test(e.textContent||'');})[0];
        if(_hh && !_hh.getAttribute('data-sys-styled')){
          _hh.setAttribute('data-sys-styled','1');
          _hh.style.fontWeight='800';
        }
      }catch(e){}
      if($('#calendar').length===0) $anchor.after('<div class="sys-cal-card"><div class="sys-cal-h">Календарь обучения</div><div id="calendar" class="mini-cal training-935643857"></div></div>' + EXTRA);
      window.__sysCalReady=true;
      defineMEC($); $('#calendar').MEC({ events:eventsList(), start:startMonth() });
      positionCal($);
      $(window).on('load resize', function(){ positionCal($); });
      setTimeout(function(){positionCal($);},300); setTimeout(function(){positionCal($);},900); setTimeout(function(){positionCal($);},1800);
      return true;
    }
    return false;
  }

  var tries=0;
  var t=setInterval(function(){
    tries++;
    if(!window.jQuery) return;
    if(mount(window.jQuery)) { clearInterval(t); return; }
    if(tries>200) clearInterval(t);   // ~16с
  },80);
})();
