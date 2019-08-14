/* GET
​/program​/newreleases
Query new release program */
/* req */
export class ProgramNewreleasesReq {
  offset?: number;
  limit?: number;
  programType: string = 'ALL';
}

/* GET
​/program​/newreleases
Query new release program */
/* res */
export interface ProgramNewreleasesRes {
  offset: number;
  limit: number;
  totalCount: number;
  programs: Program[];
}

interface Program {
  title: string;
  titleEng: string;
  titleType: string;
  rating: string;
  ratingMessage: string;
  synopsis: string;
  editorPickNote: string;
  editorPick: boolean;
  releaseDate: string;
  highlightMessage: string;
  exploitation: string;
  publishedDate: string;
  unpublishedDate: string;
  showStartDate: string;
  showEndDate: string;
  playStartDate: string;
  playEndDate: string;
  status: string;
  tags: string[][];
  castAndCrewList: CastAndCrewList[][];
  artWorksList: ArtWorksList[][];
  partnerList: string[][];
  genreList: GenreList[][];
  programType: string;
  seriesId: string;
  totalSeasons: number;
  seriesCode: string;
}

interface GenreList {
  genreId: string;
  genreName: string;
  genreNameEng: string;
  sequence: number;
}

interface ArtWorksList {
  artWorksId: string;
  type: string;
  width: number;
  height: number;
  fileURL: string;
  name: string;
}

interface CastAndCrewList {
  personId: string;
  actorName: string;
  photoURL: string;
  roleId: string;
  roleName: string;
}

/* GET
​/program​/movieListItems​/{movieListId}
Query program list by id */
/* req */
export class ProgramMovieListItemsReq {
  offset?: number;
  limit?: number;
  movieListId: string = '';
}

/* GET
​/program​/movieListItems​/{movieListId}
Query program list by id */
/* res */
export interface ProgramMovieListItemsRes {
  offset: number;
  limit: number;
  totalCount: number;
  programs: Program[];
}

interface Program {
  title: string;
  titleEng: string;
  titleType: string;
  rating: string;
  ratingMessage: string;
  synopsis: string;
  editorPickNote: string;
  editorPick: boolean;
  releaseDate: string;
  highlightMessage: string;
  exploitation: string;
  publishedDate: string;
  unpublishedDate: string;
  showStartDate: string;
  showEndDate: string;
  playStartDate: string;
  playEndDate: string;
  status: string;
  tags: string[][];
  castAndCrewList: CastAndCrewList[][];
  artWorksList: ArtWorksList[][];
  partnerList: string[][];
  genreList: GenreList[][];
  programType: string;
  seriesId: string;
  totalSeasons: number;
  seriesCode: string;
}

interface GenreList {
  genreId: string;
  genreName: string;
  genreNameEng: string;
  sequence: number;
}

interface ArtWorksList {
  artWorksId: string;
  type: string;
  width: number;
  height: number;
  fileURL: string;
  name: string;
}

interface CastAndCrewList {
  personId: string;
  actorName: string;
  photoURL: string;
  roleId: string;
  roleName: string;
}

/* GET
​/program​/materials​/{programType}​/{programId}
Query program materials */
/* req */
export class ProgramMaterialsReq {
  programType: string = 'ALL';
  programId: string = '';
}

/* GET
​/program​/materials​/{programType}​/{programId}
Query program materials */
/* res */
export interface ProgramMaterialsRes {
  programId: string;
  settingType: string;
  title: string;
  videoURL: string;
  artWorks: ArtWorks;
}

interface ArtWorks {
  post: Post[][];
  keyVisual: Post[][];
}

interface Post {
  artWorksId: string;
  type: string;
  width: number;
  height: number;
  fileURL: string;
  name: string;
}

/* GET
​/me​/drawers​/programs
Get the login user's program from the drawer */
/* req */
/* no params */

/* GET
​/me​/drawers​/programs
Get the login user's program from the drawer */
/* res */
export interface MeDrawersProgramsRes {
  offset: number;
  limit: number;
  totalCount: number;
  programs: Program[];
}

interface Program {
  title: string;
  titleEng: string;
  titleType: string;
  rating: string;
  ratingMessage: string;
  synopsis: string;
  editorPickNote: string;
  editorPick: boolean;
  releaseDate: string;
  highlightMessage: string;
  exploitation: string;
  publishedDate: string;
  unpublishedDate: string;
  showStartDate: string;
  showEndDate: string;
  playStartDate: string;
  playEndDate: string;
  status: string;
  tags: string[][];
  castAndCrewList: CastAndCrewList[][];
  artWorksList: ArtWorksList[][];
  partnerList: string[][];
  genreList: GenreList[][];
  programType: string;
  seriesId: string;
  totalSeasons: number;
  seriesCode: string;
}

interface GenreList {
  genreId: string;
  genreName: string;
  genreNameEng: string;
  sequence: number;
}

interface ArtWorksList {
  artWorksId: string;
  type: string;
  width: number;
  height: number;
  fileURL: string;
  name: string;
}

interface CastAndCrewList {
  personId: string;
  actorName: string;
  photoURL: string;
  roleId: string;
  roleName: string;
}

/* GET
​/me​/drawers​/programs​/{programId}?programType={programType} */
/* req */
/* ? */

/* GET
​/me​/drawers​/programs​/{programId}?programType={programType} */
/* res */
/* ? */

/* GET
​/recommendations​/program​/{programId}?recommendationType=GENRE */
/* req */

/* GET
​/recommendations​/program​/{programId}?recommendationType=GENRE */
/* res */
