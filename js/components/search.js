'use strict';

const stationItem = (station, update) => {

  const stationItem = $("<div class='stations'></div>");
  const nameStation = $("<p class='bold'>" + station.name + "</p>");
  const addressStation = $("<p>" + station.address + "</p>");
  const iconMap = $("<span class='fa fa-map icon-map'></span>");
  const districtStation = $("<p>" + station.district + "</p>");

  stationItem.append(nameStation);
  stationItem.append(addressStation);
  stationItem.append(districtStation);
  stationItem.append(iconMap);

  iconMap.on('click',(e) => {
   e.preventDefault();
    initMap()
    state.selectedStation = station;
    update();

  });
  return stationItem;
}

const Search = (update) => {
  const section = $('<section id="search"></section>');
  const contentSearch = $("<div class='content-search'></div>");
  const search = $("<div class='search'></div>");
  const inputDistrict = $('<input type="text" placeholder="Ingresar tu distrito a buscar">');
  const icon = $('<i class="fa fa-search" aria-hidden="true"></i>');
  const contentStation = $("<section></section>");

  search.append(icon);
  search.append(inputDistrict);
  contentSearch.append(search);
  section.append(contentSearch);
  section.append(contentStation);

  state.stations.forEach((station)=>{
    contentStation.append(stationItem(station,update));
  });

  inputDistrict.keyup(function () {
    const stationByDistrict  = filterByDistrict(state.stations, $(this).val(),update);
    if (stationByDistrict.length != 0) {
      addStation(contentStation,stationByDistrict,update);
    }
  });
  return section;
}

const addStation = (contentStation,stationByDistrict , update) => {
    contentStation.empty();
    stationByDistrict.forEach(e => {
        contentStation.append(stationItem(e,update));
    });
}
