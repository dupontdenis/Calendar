export const optionsMD = {
  year: "numeric",
  month: "short",
};

export const t = new Date();
export const today = new Date(
  t.getFullYear(),
  t.getMonth(),
  t.getDate()
).getTime();
