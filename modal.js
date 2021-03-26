const modalWin = () => {
  const modalCont = document.getElementById("modalCont");
  modalCont.style = "height: 100%;"; //растягивание контейнера на весь экран
  let rate = `<div id="tabletitle">\
       <img src="./images/title.png">\
       <div id="titlewords">\
         <div id="zone1">\
         <text id="ratetext">Место</text>\
         </div>\
         <div id="zone2">\
         <text id="ratetext">Имя Фамилия</text>\
         </div>\
         <text id="ratetext">Опыт</text></div>\
       </div>\
       <div id="people">${sortAndGive()}</div>`;
  let exitButton =
    '<img src="./images/exitbutton.png" width="26" height="26" id="exitBut"/ onclick="modalWinClose()">';
  modalCont.innerHTML = `<div id="modalBack"></div>\
   <div id="winBack1">\
     <div id="winBack2">${rate}</div>\
     ${exitButton}\
     <div id="title">\
       <img src="./images/playersrate.png">\
       <text id="titletext">Рейтинг игроков</text>\
     </div>\
   </div>`; //добавление полупрозрачного фона, модального окна
  const win = document.getElementById("modalBack");
  win.style.animation = "transpReduce 0.4s linear"; //анимация уменьшения прозрачности
  const winBack1 = document.getElementById("winBack1");
  winBack1.style.animation = "slide 0.4s cubic-bezier(.17,.84,.44,1)"; //анимация выезжания окна
  const deleteAnimations = () => {
    //удаление анимаций
    win.style.removeProperty("animation");
    winBack1.style.removeProperty("animation");
    win.removeEventListener("animationend", deleteAnimations);
  };
  win.addEventListener("animationend", deleteAnimations);
};

const modalWinClose = () => {
  const modalCont = document.getElementById("modalCont");
  const win = document.getElementById("modalBack");
  win.style.animation = "transpReduce 0.4s linear reverse"; //анимация увеличения прозрачности
  const winBack1 = document.getElementById("winBack1");
  winBack1.style.animation = "slide 0.4s cubic-bezier(.17,.84,.44,1) reverse"; //анимация уезжания окна
  const deleteItems = () => {
    //отчистка контейнера
    modalCont.innerHTML = "";
    modalCont.style = "height: 0;";
    win.removeEventListener("animationend", deleteItems);
  };
  win.addEventListener("animationend", deleteItems);
};

const sortAndGive = () => {
  function maxToLow(a, b) {
    return b.points - a.points;
  }
  const sortArr = data.rating.sort(maxToLow);
  const result = sortArr.map((item, i) => {
    let friend = data.friends.some(
      (elem) => item.name + item.lastName == elem.name + elem.lastName
    );
    return `<div id="item">\
        <div id="itemwords">\
        <div id="zone1">\
         <text id="ratetext">${i + 1}</text>\
         </div>\
         <div id="zone2">\
         <text id="${friend ? "ratetextfriend" : "ratetext"}">${item.name} ${
      item.lastName
    }</text>\
         </div>\
          <text id="ratetext">${item.points}</text></div>\
        </div>`;
  });
  return result.join("");
};

const data = {
  rating: [
    {
      id: "123",
      name: "Владимир",
      lastName: "Ларионов",
      img: "./male.png",
      points: "463",
    },
    {
      id: "9",
      name: "Владимир",
      lastName: "Сергеев",
      img: "./male.png",
      points: "521",
    },
    {
      id: "231",
      name: "Вениамин",
      lastName: "Васильев",
      img: "./male.png",
      points: "865",
    },
    {
      id: "321",
      name: "Мария",
      lastName: "Логинова",
      img: "./female.png",
      points: "865",
    },
    {
      id: "492",
      name: "Борис",
      lastName: "Казанцев",
      img: "./male.png",
      points: "784",
    },
    {
      id: "452",
      name: "Полина",
      lastName: "Калинина",
      img: "./female.png",
      points: "225",
    },
    {
      id: "796",
      name: "Даниил",
      lastName: "Воробьёв",
      img: "./male.png",
      points: "642",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "./male.png",
      points: "150",
    },
    {
      id: "1155",
      name: "Иван",
      lastName: "Иванов",
      img: "./male.png",
      points: "100",
    },
    {
      id: "12145",
      name: "Артем",
      lastName: "Алексеев",
      img: "./male.png",
      points: "1000",
    },
  ],
  friends: [
    {
      id: "9",
      name: "Владимир",
      lastName: "Сергеев",
      img: "./male.png",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "./male.png",
    },
    {
      id: "15411",
      name: "Ирина",
      lastName: "Чеснокова",
      img: "./female.png",
    },
    {
      id: "15564",
      name: "Дарина",
      lastName: "Боброва",
      img: "./female.png",
    },
  ],
};
