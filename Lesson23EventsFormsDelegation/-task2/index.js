const generateNumbersRange = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};

const getLineSeats = () => {
  return generateNumbersRange(1, 10)
    .map(
      (seatNumber) =>
        `<div 
        class="sector__seat" 
        data-seat-number="${seatNumber}"
        ></div>`
    )
    .join("");
};

const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map(
      (lineNumber) =>
        `<div 
        class="sector__line" 
        data-line-number="${lineNumber}"
        >${seatsString}</div>`
    )
    .join("");
};

const arenaElem = document.querySelector(".arena");

const renderArena = () => {
  const lineString = getSectorLines();
  const sectorsString = [1, 2, 3]
    .map(
      (sectorNumber) =>
        `<div class="sector" 
        data-sector-number="${sectorNumber}"
    >${lineString}</div>`
    )
    .join("");

  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains("sector__seat");

  if (!isSeat) {
    return;
  }

  const { seatNumber } = event.target.dataset;
  const { lineNumber } = event.target.closest(".sector__line").dataset;
  const { sectorNumber } = event.target.closest(".sector").dataset;

  const selectesSeatElem = document.querySelector(".board__selected-seat");

  selectesSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener("click", onSeatSelect);

renderArena();
