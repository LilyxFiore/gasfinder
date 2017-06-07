'use strict';

const filterByDistrict = (stations,query) => {
  return state.stations.filter((station)=>{
    return station.district.toLowerCase().indexOf(query.toLowerCase())!=-1;
  });
}

