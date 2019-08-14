import { proxy, domainMain, switchToTest } from '@/api/catchplay/handler';
import { DOMAIN } from '../config'
import { Program } from '@/pages/a9/programInterface';
import { CodeObj } from '@/code';

import {
  ProgramNewreleasesReq,
  ProgramNewreleasesRes,
  ProgramMovieListItemsReq,
  ProgramMovieListItemsRes,
  ProgramMaterialsReq,
  ProgramMaterialsRes,
  MeDrawersProgramsRes
} from './model';

/********** program **********/

/* GET
​/program​/newreleases
Query new release program */
export const ProgramNewreleases = (_params: ProgramNewreleasesReq) => {
  console.log('ProgramNewreleases req')
  console.log(_params)
  let url = `${DOMAIN.api.programv2}/program/newreleases?programType=${_params.programType}&offset=${_params.programType}&limit=${_params.programType}`
  console.log('url', url)
  return proxy.get(
    url,
    {
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as CodeObj<ProgramNewreleasesRes>);
}

/* GET
​/program​/movieListItems​/{movieListId}
Query program list by id */
export const ProgramMovieListItems = (_params: ProgramMovieListItemsReq) => {
  let url = `${DOMAIN.api.programv2}/program/movieListItems/${_params.movieListId}?offset=${_params.offset}&limit=${_params.limit}`;
  return proxy.get(
    url,
    {
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as CodeObj<ProgramMovieListItemsRes>);
}

/* GET
​/program​/materials​/{programType}​/{programId}
Query program materials */
export const ProgramMaterials = (_params: ProgramMaterialsReq) => {
  let url = `${DOMAIN.api.programv2}/program/materials/ALL/${_params.programType}/${_params.programId}`;
  return proxy.get(
    url,
    {
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as CodeObj<ProgramMaterialsRes[]>);
}

/********** me **********/
/* GET
​/me​/drawers​/programs
Get the login user's program from the drawer */
export const MeDrawersPrograms = () => {
  let url = ``;
  return proxy.get(
    url,
    {
      headers: {
        accept: "application/json"
      }
    }).then((res: any) => res.data as CodeObj<MeDrawersProgramsRes>);
}

/* GET
​/me​/drawers​/programs​/{programId}?programType={programType} */
/* ? */

/********** recommendations **********/

/* GET
​/recommendations​/program​/{programId}?recommendationType=GENRE */

/* GET
​/recommendations​/program​/{programId}?recommendationType=CAST_AND_CREW */

/********** genres **********/
/* GET
​/genres​/programs?genreId={genreId} */

/********** mylist **********/
/* GET
​/mylist​/continueWatch */

