import renderError from './renderError.js';

const getGeoLocation = async address => {
  try {
    const geoLocationData = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC9XpTQXG54lSqFl7F5l8EBdSVOxEgpEVI`
    );

    let locationData = await geoLocationData.json();
    const geoLocation = {
      longLat: locationData.results[0].geometry.location,
      locationTitle: locationData.results[0].formatted_address,
    };

    if (locationData.status != 'OK') {
      throw new Error();
    }

    return geoLocation;

    //catch errors
  } catch (error) {
    renderError('Error getting locaton. Please try again');
    return;
  }
};

export default getGeoLocation;
