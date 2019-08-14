/* GET
​/geo
Get geo information. */
/* req */
export interface GeoGetReq {
  publicIp: string;
}
/* res */

export interface Data {
  countryName: string;
  isoCode: string;
  latitude: number;
  longitude: number;
  publicIp: string;
}