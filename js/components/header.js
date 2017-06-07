'use strict';

const Header = (update) => {
  const header = $("<header class='title'></header>");
  const title = $("<span>Gas Finder</span>");

  header.append(title);
  return header;
}
