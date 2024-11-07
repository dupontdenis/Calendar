import calendar from "./modules/calendar.mjs";
import transform from "./modules/transform.mjs";
import template from "./modules/template.mjs";
import render from "./Views/render.mjs";
import { t } from "./config/date.mjs";

const month = calendar(t.getMonth(), t.getFullYear());
const ArrayOfObjects = transform(month);
const html = template(ArrayOfObjects);

render(html);

//
console.table(month);
