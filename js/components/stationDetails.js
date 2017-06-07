'use strict';

const StationDetail = (update) => {
  const contentDetail = $('<section class="detail"></section>');
  const iconLeft = $("<i class='fa fa-chevron-left icon-left' aria-hidden='true'></i>");
  const contentMap =$("<div class='content-map'></div>");
  const map = $("<div id='map'></div>");
  const grifoName = $('<p class="bold">Grifo ' + state.selectedStation.name + '</p>');
  const hr = $('<hr>');
  const address = $('<span>' + state.selectedStation.address + '</span>');
  const km = $('<span id="km"></span>');
  const products = $('<div class="products"></div>');

  contentDetail.append(iconLeft);
  contentMap.append(map);
  contentDetail.append(contentMap);
  contentDetail.append(grifoName);
  contentDetail.append(hr);
  contentDetail.append(address);
  contentDetail.append(km);
  contentDetail.append(products);

  iconLeft.on('click', (e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  });


  state.selectedStation.products.forEach((e) => {
    const square = $("<span class='square'>" + e + "</span>");
    products.append(square);
  });
  return contentDetail;
}


