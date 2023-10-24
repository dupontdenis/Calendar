const defaultTemplate = `<li class="day" data-month={{month}} id={{id}}>{{day}}</li>`;

export default function template(calT) {
  let view = "";

  for (let data of calT) {
    // console.log(data);
    let template = defaultTemplate;
    template = template.replace("{{month}}", data.month);
    template = template.replace("{{day}}", data.day);
    template = template.replace("{{id}}", data.id);
    view = view + template;
  }

  return view;
}
