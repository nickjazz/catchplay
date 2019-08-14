export interface RootObject {
	code: number;
	message: string;
	serverTime: string;
	data: GenerPrograms;
}
// program列表data
export interface GenerPrograms {
	offset: number;
	limit: number;
	totalCount: number;
	programs: Program[];
}
// 基础电影/剧系列/剧季/剧集单位
export interface Program {
	title: string;
	titleEng: string;
	titleType: string; // 01 title 02 english title
	rating: string; // rating
	ratingMessage: string; 
	synopsis: string; // 简介
	editorPickNote: string;  // 编辑推荐内容
	editorPick: boolean;  // 是否编辑推荐
	releaseDate: string; // 发售日
	highlightMessage: string; // 高光内容
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
}
// 剧集 季单位【继承基础单位】
export interface SeasonProgram extends Program {
	seasonId:	string; // 季id
	series:	SeriesProgram; // 所属系列
	episodeList: Program[]; // 集列表
	totalEpisodes: number; // 共几集
	seasonNumber:	number; // 第几季
	awards:	AwardItem[]; // 所获奖项
	sequence:	number; // ?
	seriesId:	string; // 所属系列的id
	seasonCode:	string; // 本季代码
	trailerURL:	string; // 预告片地址
	videoQuality:	string[]; // 视频格式/质量 
	soundQuality:	string[]; // 音频格式/质量 
	
}
// 剧集 系列单位【继承基础单位】
export interface SeriesProgram extends Program {
	programType: string; // Series
	seriesId:	string; // 系列id
	totalSeasons:	number; // 共有几季
	seriesCode:	string; // 系列代码
}
// 电影单位【继承基础单位】
export interface VideoProgram extends Program {
	programType: string;	// Video
	videoId: string;
	downloadable:	boolean; // 是否可下载
	cppDtw:	boolean;
	catchplayVideoId: string;
	liveDuration: number; // 直播进度
	duration:number;	 // 播放进度
	trailerURL:	string; // 预告片地址
	videoCode: string;  // 电影代码
}

export interface GenreList {
	genreId: string;
	genreName: string;
	genreNameEng: string;
	sequence: number;
}
// 封面/海报/艺术图信息信息
export interface ArtWorksList {
	artWorksId: string;
	type: string;
	width: number;
	height: number;
	fileURL: string;
	name: string;
}
// 演职员单位
export interface CastAndCrewList {
	personId: string;
	actorName: string;
	photoURL: string;
	roleId: string;
	roleName: string; // Director Cast
}
// 奖项单位
export interface AwardItem {
	awardId: string;
	awardYear: string;
	awardName: string;
	itemName: string;
	person: CastAndCrewList[];
}
// 测试数据生成类
// 基础电影/剧系列/剧季/剧集单位 
export class ProgramExp implements VideoProgram {
	title: string = 'chn';
	titleEng: string = 'eng';
	titleType: string = '02'; // 01 title 02 english title
	rating: string = '01'; // rating
	ratingMessage: string = 'rating'; 
	synopsis: string = "Based on the popular book series “A Song of Ice and Fire” by George R.R. Martin, this Emmy®-winning HBO Original series returns for its seven-episode seventh season.";
	editorPickNote: string = "14 years in the making, Jack-Jack is back to steal the show in Pixar's highest ever grossing film!";  // 编辑推荐内容
	editorPick: boolean = true;  // 是否编辑推荐
	releaseDate: string = '2019-09-10'; // 发售日
	highlightMessage: string = 'Good Film'; // 高光内容
	exploitation: string = '';  
	publishedDate: string = '2019-10-10';
	unpublishedDate: string = '2019-11-11';
	showStartDate: string = '2019-10-15';
	showEndDate: string = '2019-11-05';
	playStartDate: string = '2019-10-12';
	playEndDate: string = '2019-10-15';
	status: string = 'Put_On_Shelf';
	tags: string[][] = [['sf'], [ 'terror' ]];
	castAndCrewList: CastAndCrewList[][] = [[ new CastAndCrewListExp() ],[new CastAndCrewListExp1() ],[new CastAndCrewListExp2() ]];
	artWorksList: ArtWorksList[][] = [[ new ArtWorksListExp() ], [ new ArtWorksListExp() ]];
	partnerList: string[][] = [[ 'xxxPartner' ],[ 'xxxPartner1' ]];
	genreList: GenreList[][] = [[ new Genre() ], [ new Genre() ]];
	programType: string = 'Video';	// Video
	videoId: string = '006';
	downloadable: boolean = true; // 是否可下载
	cppDtw:	boolean = true;
	catchplayVideoId: string = '379';
	liveDuration: number = 0; // 直播进度
	duration: number = 250;	 // 播放进度
	trailerURL:	string = 'xxxx.mp4'; // 预告片地址
	videoCode: string = 'sddd333';  // 电影代码
}

export class CastAndCrewListExp {
	personId: string = '01';
	actorName: string = 'david';
	photoURL: string = '';
	roleId: string = '01';
	roleName: string = 'Director'; // Director Cast
}
export class CastAndCrewListExp1 {
	personId: string = '01';
	actorName: string = 'sherry';
	photoURL: string = '';
	roleId: string = '01';
	roleName: string = 'Cast'; // Director Cast
}
export class CastAndCrewListExp2 {
	personId: string = '01';
	actorName: string = 'jack';
	photoURL: string = '';
	roleId: string = '01';
	roleName: string = 'Cast'; // Director Cast
}


// 奖项单位
export class AwardItemExp {
	awardId: string = '';
	awardYear: string = '2019';
	awardName: string = 'good price';
	itemName: string = 'good';
	person: CastAndCrewList[] = [];
}
//
export class ArtWorksListExp {
	artWorksId: string = '05caa3b4-6df7-495c-bf07-54d6d00c04e1';
	type: string = 'Post';
	width: number = 704;
	height: number = 396;
	fileURL: string = 'https://dkfhw9rzsr80z.cloudfront.net/DIS-TW-004-A1037/artworks/posters/DIS-TW-004-A1037-P704.jpg';
	name: string = 'poster of poster';
}

export class Genre {
	genreId: string = '01';
	genreName: string = 'war';
	genreNameEng: string = 'war';
	sequence: number = 1;
}