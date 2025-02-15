const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const header = document.createElement("div");
  const datespn = document.createElement("span");
  const h1title = document.createElement("h1");
  const tempspn = document.createElement("span");

  header.appendChild(datespn);
  header.appendChild(h1title);
  header.appendChild(tempspn);

  header.classList.add("header");
  datespn.classList.add("date");
  tempspn.classList.add("temp");

  datespn.textContent = `${date}`;
  h1title.textContent = `${title}`;
  tempspn.textContent = `${temp}`;

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let NewsHead =  Header("World Fair 2021", "12/3/21", "29");
  selector.appendChild(NewsHead);
}

export { Header, headerAppender }
