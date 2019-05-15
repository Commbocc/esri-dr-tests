export default [
  {
    id: 'geocoder',
    name: 'Geocoder',
    prodUrl: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_Overall/GeocodeServer?f=pjson',
    drUrl: 'https://dr-maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_Overall/GeocodeServer?f=pjson'
  },
  {
    id: 'hauler-city',
    name: 'Hauler (City)',
    prodUrl: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/MaintStar/MapServiceBaseMap_20150801_Production_1/MapServer/80?f=json',
    drUrl: 'https://dr-maps.hillsboroughcounty.org/arcgis/rest/services/MaintStar/MapServiceBaseMap_20150801_Production_1/MapServer/80?f=json'
  },
  {
    id: 'hauler-county',
    name: 'Hauler (County)',
    prodUrl: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/SW_FACILITIES/MapServer/1?f=json',
    drUrl: 'https://dr-maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/SW_FACILITIES/MapServer/1?f=json'
  },
  {
    id: 'hauler-recycle',
    name: 'Hauler Schedule (Recycle)',
    prodUrl: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer/1?f=json',
    drUrl: 'https://dr-maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer/1?f=json'
  },
  {
    id: 'hauler-trash',
    name: 'Hauler Schedule (Trash)',
    prodUrl: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer/2?f=json',
    drUrl: 'https://dr-maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer/2?f=json'
  },
  {
    id: 'hauler-yard',
    name: 'Hauler Schedule (Yard)',
    prodUrl: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer/0?f=json',
    drUrl: 'https://dr-maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer/0?f=json'
  },
  {
    id: 'flood',
    name: 'Flood',
    prodUrl: 'https://services.arcgis.com/apTfC6SUmnNfnxuF/ArcGIS/rest/services/Flood_Zones/FeatureServer/0?f=json',
    drUrl: ''
  },
  {
    id: 'road-lane-detour',
    name: 'Road/Lane/Dertour',
    prodUrl: 'https://services.arcgis.com/apTfC6SUmnNfnxuF/ArcGIS/rest/services/Active_TTC_Permits_Public_View/FeatureServer/0?f=json',
    drUrl: ''
  },
  {
    id: 'permitting',
    name: 'Permit Offices',
    prodUrl: 'https://hillsborough.maps.arcgis.com/sharing/rest/content/items/08ddb82227e44399ba1856c78767090f/data',
    drUrl: ''
  },
]
