// indiquer le mois 0=janvier
export default function calendar(month = 0, year = 2024) {
  const OFFSET_MONTH = new Map([
    [1, 6], //lundi voir fevrier 2021
    [2, 0],
    [3, 1],
    [4, 2],
    [5, 3],
    [6, 4],
    [0, 5], //dimanche
  ]);

  let firstOfMonth = new Date(year, month, 1),
    dayFirst = firstOfMonth.getDay(), // Sunday - Saturday : 0 - 6
    dec = OFFSET_MONTH.get(dayFirst),
    cal = [];
  //console.log(dayFirst)

  for (let i = 0; i < 42; i++) {
    let d = new Date(year, month, i - dec);
    cal.push(d);
  }
  return cal;
}
