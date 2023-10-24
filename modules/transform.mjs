export default function transform(tab) {
  let fx = function (date) {
    return {
      id: date.getTime(),
      day: date.getDate(),
      month: date.getMonth(),
    };
  };

  return tab.map(fx);
}
