<template>
  <div>
    <h2>App List</h2>
    <ul class="list-old-app0" @keydown="contentKeydown($event)">
      <li :style="`width: ${90 / colCount}%;`" v-for="(item, index) in dataExcel.sheet1" :key="`data-old-app-${index}`">
        <a class="link-template" tabindex="1" :data-path="item.appLink">{{item.appName}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import funManageMixin from '@/components/mixin/funManage.js'
export default {
  name: 'list-old-app',
  mixins: [funManageMixin],
  components: {},
  data: function () {
    return {
      thisPath: '',
      colCount: 3,
      focusFilter: 0,
      itemFocus: {},
      $link: [],
      linkLength: 0,
      focusIndex: 0,
      focusCurr: {},
      dataExcel: {
        'sheet1': [
          {
            'appIndex': 3,
            'appName': '4 in a Row',
            'appLink': 'http://smartgames.tv/SG/connect4/index.html',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 4,
            'appName': 'AccuWeather',
            'appLink': 'https://smarttv.zeasn.tv/AccuWeather_web/index.html',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 5,
            'appName': 'Acil Numaralar',
            'appLink': 'http://www.engin.tv/nettv/acilnumara/',
            'Category': 'Lifestyle',
            'Area': 'TR',
            'Column5': ''
          },
          {
            'appIndex': 6,
            'appName': 'Adagio TV',
            'appLink': 'http://apps.tvstore.opera.com/video_application/?bg=jpg&target_user=adagio_tv&app_id=134944#fix',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 7,
            'appName': 'ADAGIO TV ',
            'appLink': 'https://d3u3bgui77bitj.cloudfront.net/rotosnap/home.html?app=adagio-tv-russia-2&lang=en#prevent-back ',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 8,
            'appName': 'Al Jazeera',
            'appLink': 'http://apps.store.zeasn.com/aljazeera/',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 9,
            'appName': 'Album2',
            'appLink': 'http://nettv.album2.com/',
            'Category': 'Lifestyle',
            'Area': 'NO',
            'Column5': ''
          },
          {
            'appIndex': 10,
            'appName': 'Alien Shooter',
            'appLink': 'http://smartgames.tv/SG/alien_shooter/index.html',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 11,
            'appName': 'Aqua TV',
            'appLink': 'http://tv.mytvscout.de/aquatv/',
            'Category': 'Lifestyle',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 12,
            'appName': 'ARD MedIathek',
            'appLink': 'http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?devicegroup=hbbtv&context=portal',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 13,
            'appName': 'Arrivaltv',
            'appLink': 'http://apps.tvstore.opera.com/video_application/?bg=jpg&target_user=ArrivalTV&app_id=161735#fix',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 14,
            'appName': 'Art of Seduction',
            'appLink': 'http://www.seduction.media',
            'Category': 'Adult',
            'Area': 'AD AF AL AO AR AT AU AZ BA BD BE BH BI BO BR BS BT BY CA CD CG CH CM CN CO CZ DE DK DM DO DZ EC EE EG ET FI FR GB GH GN HR HT IE IS IT JP KE KG KH KR KW KZ LA LB LK LR LT LU LV MA MC ME ML MM MN MO MU MV MY NA NG NL NO NP OM PE PG PH PK PL PR PT PY QA RO RW SA SE SG SN TG US ZA ZW',
            'Column5': ''
          },
          {
            'appIndex': 15,
            'appName': 'Arte',
            'appLink': 'http://www.arte.tv/hbbtvv2/index.html?page=PLUS7&tv=FALSE',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 16,
            'appName': 'ASHanguk 애쉬한국',
            'appLink': 'http://apps.store.zeasn.com/UCZYfd94EsqipAuZyunqVBRQ/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 17,
            'appName': 'Auf Kurs',
            'appLink': 'http://tv.mytvscout.de/hansatv/',
            'Category': 'Entertainment',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 18,
            'appName': 'Autozine.be',
            'appLink': 'http://www.autozine.be/nettv/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 19,
            'appName': 'Autozine.de',
            'appLink': 'http://www.autozine.de/nettv/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 20,
            'appName': 'Autozine.es',
            'appLink': 'http://www.autozine.es/nettv',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 21,
            'appName': 'Autozine.nl',
            'appLink': 'http://www.autozine.nl/nettv/',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 22,
            'appName': 'Awale',
            'appLink': 'http://smartgames.tv/SG/Awale/index.html',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 23,
            'appName': 'Baeble Music',
            'appLink': 'https://zeasn.baeblemusic.com/',
            'Category': 'Entertainment',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 24,
            'appName': 'Bayern Text',
            'appLink': 'http://hbbtv.br.de/br-text/',
            'Category': 'Entertainment',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 25,
            'appName': 'BBC News',
            'appLink': 'http://apps.store.zeasn.com/BBC/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 26,
            'appName': 'BIGSTAR Latino!',
            'appLink': 'http://www.bigstarlatino.com',
            'Category': 'Video',
            'Area': 'IN',
            'Column5': ''
          },
          {
            'appIndex': 27,
            'appName': 'Bigstar Movies',
            'appLink': 'http://preview.bigstar.tv',
            'Category': 'Video',
            'Area': 'IN',
            'Column5': ''
          },
          {
            'appIndex': 28,
            'appName': 'Biti Kids',
            'appLink': 'https://tv.getbiti.com ',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 29,
            'appName': 'Black World Cinema',
            'appLink': 'http://www.blackworldcinema.com',
            'Category': 'Video',
            'Area': 'IN',
            'Column5': ''
          },
          {
            'appIndex': 30,
            'appName': 'Blackdove Canvas',
            'appLink': 'https://r.blackdove.com',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 31,
            'appName': 'BlackJack',
            'appLink': 'http://smartgames.tv/SG/Blackjack/index.html',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 32,
            'appName': 'boersen-zeitung.de',
            'appLink': 'http://nettv.boersen-zeitung.de',
            'Category': 'Lifestyle',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 33,
            'appName': 'Bollywood Movies',
            'appLink': 'http://www.bestbollywood.tv/',
            'Category': 'Video',
            'Area': 'IN',
            'Column5': ''
          },
          {
            'appIndex': 34,
            'appName': 'Bubble Crash',
            'appLink': 'http://smartgames.tv/SG/bubbleCrash/index.html',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 35,
            'appName': 'Buienradar.be',
            'appLink': 'http://nettv.buienradar.be',
            'Category': 'Lifestyle',
            'Area': 'BE',
            'Column5': ''
          },
          {
            'appIndex': 36,
            'appName': 'Buienradar.nl',
            'appLink': 'http://www.tvapp-buienradar.nl/nettv/',
            'Category': 'Lifestyle',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 37,
            'appName': 'Bundestag',
            'appLink': 'http://bundestag.app.nrmmh.tv',
            'Category': 'News',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 38,
            'appName': 'Bygeradar.dk',
            'appLink': 'http://nettv.vaderradar.se/h-dk.tv',
            'Category': 'Lifestyle',
            'Area': 'DK',
            'Column5': ''
          },
          {
            'appIndex': 39,
            'appName': 'CDNTV Play',
            'appLink': 'https://s2.cdn.tv.br/smart/index.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 40,
            'appName': 'Check Eins',
            'appLink': 'http://hbbtv.daserste.de/?checkeins=1&portal=1',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 41,
            'appName': 'CHILI',
            'appLink': 'https://zeasn.chili.com',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 42,
            'appName': 'China Blue',
            'appLink': 'http://tv.cztv.com',
            'Category': 'Lifestyle',
            'Area': 'CN',
            'Column5': ''
          },
          {
            'appIndex': 43,
            'appName': 'Chinese Food Recipes',
            'appLink': 'http://global.douguo.com/tv/home.html ',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 44,
            'appName': 'Chinese Recipes',
            'appLink': 'http://alliance.futuretodayinc.com/chineserecipes/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 45,
            'appName': 'Cinetrailer.fr',
            'appLink': 'http://smarttv.cinetrailer.it/zeasn/region/fr',
            'Category': 'Video',
            'Area': 'BE CH DE DK ES FI FR GB IT NL SE',
            'Column5': ''
          },
          {
            'appIndex': 46,
            'appName': 'Cinetrailer.it',
            'appLink': 'http://smarttv.cinetrailer.it/zeasn/region/it',
            'Category': 'Video',
            'Area': 'IT',
            'Column5': ''
          },
          {
            'appIndex': 47,
            'appName': 'CineTrailer.TV',
            'appLink': 'http://nettv.cinetrailer.tv/loewe/region/it',
            'Category': 'Video',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 48,
            'appName': 'Cinetrailer.uk',
            'appLink': 'http://smarttv.cinetrailer.it/zeasn/region/uk',
            'Category': 'Video',
            'Area': 'BE CH DE DK ES FI FR GB IT NL SE',
            'Column5': ''
          },
          {
            'appIndex': 49,
            'appName': 'Clip tv',
            'appLink': 'http://smarttv.cliptv.vn/tv/zeasn',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 50,
            'appName': 'ClipTV for Smart TV',
            'appLink': 'http://smarttv.cliptv.vn/tv/zeasn/',
            'Category': 'Video',
            'Area': 'VN',
            'Column5': ''
          },
          {
            'appIndex': 51,
            'appName': 'CNN',
            'appLink': 'http://apps.store.zeasn.com/CNN/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 52,
            'appName': 'Coca-Cola FM - México',
            'appLink': 'http://www.imusicaradios.com/operatv/player.html?country=mx&uid=581fc4567cb9605814f9ba5500e4e95bb4809b8e2766a3ce88d4492c818b08b2xcoca-cola-fm-mexicoxed76fa7d95dbca5cd268ebfcd90fb53f20bdd0c61295d908c6e21bca5a36be91',
            'Category': 'Entertainment',
            'Area': 'MX',
            'Column5': ''
          },
          {
            'appIndex': 53,
            'appName': 'Cocoricó',
            'appLink': 'http://cmais.com.br/opera/cocorico/?uid=c45cf2f8523e79cfdb7025dcf83405f9c99a0c529e287764cf34c5b21ec59801xcocoricoxed76fa7d95dbca5cd268ebfcd90fb53f20bdd0c61295d908c6e21bca5a36be91#fix',
            'Category': 'E-Commerce',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 54,
            'appName': 'Coldplay Official',
            'appLink': 'http://apps.store.zeasn.com/ColdplayVEVO/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 55,
            'appName': 'Copak.cz',
            'appLink': 'http://www.copak.cz/platform3497ghe6',
            'Category': 'Lifestyle',
            'Area': 'CZ',
            'Column5': ''
          },
          {
            'appIndex': 56,
            'appName': 'CraftSmart',
            'appLink': 'http://alliance.futuretodayinc.com/craftsmart/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 57,
            'appName': 'CuriosityStream',
            'appLink': 'https://tv-zeasn.curiositystream.com/',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 58,
            'appName': 'DAF',
            'appLink': 'http://tv.mytvscout.de/daf',
            'Category': 'News',
            'Area': 'AT CH DE NL',
            'Column5': ''
          },
          {
            'appIndex': 59,
            'appName': 'Dagtrip Doen',
            'appLink': 'http://television.dagtripdoen.nl/',
            'Category': 'Entertainment',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 60,
            'appName': 'Darts',
            'appLink': 'http://smarttva.gametreetvhtml5.com/apps/darts/1.22/index.html',
            'Category': 'Game',
            'Area': 'AR AT AU BE BG BR BZ CH CR CZ DE DK EE ES FI FR GB GR GT HN HR HU IE IT KZ LT LU LV NI NL NO NZ PA PL PT RO RS RU SE SI SK SV TR UA',
            'Column5': ''
          },
          {
            'appIndex': 61,
            'appName': 'Das Erste',
            'appLink': 'http://hbbtv.daserste.de/index.php?context=hbbtv',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 62,
            'appName': 'Der Aktionar TV',
            'appLink': 'http://tv.mytvscout.de/daf/html5.html',
            'Category': 'Video',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 63,
            'appName': 'Detektor.fm',
            'appLink': 'http://smarttv.detektor.fm',
            'Category': 'Music',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 64,
            'appName': 'Divan.TV',
            'appLink': 'http://smart.divan.tv/index_common.html',
            'Category': 'Entertainment',
            'Area': 'AR AT AU BE BG BR BZ CH CR CZ DE DK EE ES FI FR GB GR GT HN HR HU IE IT KZ LT LU LV NI NL NO NZ PA PL PT RO RS RU SE SI SK SV TR UA',
            'Column5': ''
          },
          {
            'appIndex': 65,
            'appName': 'DJTV',
            'appLink': 'https://djtvapp-3b20a.firebaseapp.com/',
            'Category': 'Music',
            'Area': 'AE BH CY EG IL IQ IR JO KW LB OM PS QA SA SY TR YE',
            'Column5': ''
          },
          {
            'appIndex': 66,
            'appName': 'DKB HBL',
            'appLink': 'http://tv.mytvscout.de/hbl/',
            'Category': 'Video',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 67,
            'appName': 'Doc World',
            'appLink': 'http://www.docworld.media',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 68,
            'appName': 'Doonung Comedy',
            'appLink': 'http://apps.store.zeasn.com/UCNOuO6uOrpyw-hpf8pyB0eQ/show.html',
            'Category': 'Video',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 69,
            'appName': 'ducktv GO',
            'appLink': 'https://apps.zeasn.tv/ducktv/',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 70,
            'appName': 'Dukascopy TV',
            'appLink': 'https://www.dukascopy.com/swiss/video2/stream/',
            'Category': 'Video',
            'Area': 'CH CN HK JP MY RU UA',
            'Column5': ''
          },
          {
            'appIndex': 71,
            'appName': 'El Diario Vasco on+',
            'appLink': 'http://server-m.vocento.com/smarttv/regionales/diariovasco/index.html',
            'Category': 'News',
            'Area': 'ES',
            'Column5': ''
          },
          {
            'appIndex': 72,
            'appName': 'Epic TV',
            'appLink': 'http://apps.store.zeasn.com/EpicTVadventure/show.html',
            'Category': 'Sport',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 73,
            'appName': 'Eros Now',
            'appLink': 'https://erosnowhtml.erosnow.com/main.html#d4',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 74,
            'appName': 'Euronews',
            'appLink': 'http://www.euronews.com/_partners/mmh/',
            'Category': 'News',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 75,
            'appName': 'Extreme Sports Entertainment',
            'appLink': 'http://www.extremesports.media',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 76,
            'appName': 'Fashion TV',
            'appLink': 'http://apps.store.zeasn.com/fashiontvFMEN/show.html',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 77,
            'appName': 'Fawesome Pets',
            'appLink': 'http://alliance.futuretodayinc.com/fawesomepets/',
            'Category': 'Entertainment',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 78,
            'appName': 'Film Festival Favorites',
            'appLink': 'http://www.festivalfaves.com',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 79,
            'appName': 'Filmbox Live',
            'appLink': 'http://www.filmboxliveapp.net/opr/tvapp/',
            'Category': 'Video',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 80,
            'appName': 'Fishing TV',
            'appLink': 'https://www.fishingtv.com/apps/zeasn/ ',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 81,
            'appName': 'Foreca',
            'appLink': 'http://nettv.foreca.com',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 82,
            'appName': 'Foreign Film Favorites',
            'appLink': 'http://www.foreignfilm.tv',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 83,
            'appName': 'Freediver HD',
            'appLink': 'http://apps.store.zeasn.com/Born2Die83/show.html',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 84,
            'appName': 'GOOSE GAME',
            'appLink': 'http://smartgames.tv/vprod/GooseGame/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 85,
            'appName': 'HBO Go',
            'appLink': 'http://apps.store.zeasn.com/HBO/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 86,
            'appName': 'Hessischer Rundfunk',
            'appLink': 'http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?devicegroup=hbbtv&context=portal&client=hr',
            'Category': 'Video',
            'Area': 'BE NL',
            'Column5': ''
          },
          {
            'appIndex': 87,
            'appName': 'HispanTV',
            'appLink': 'http://hispantv.a.fxmconnect.com/app/index.php?id=35c3fc6de620b3f9&player=cehtml',
            'Category': 'Video',
            'Area': 'IR',
            'Column5': ''
          },
          {
            'appIndex': 88,
            'appName': 'Hmara TV',
            'appLink': 'http://html5.hmara.tv/',
            'Category': 'Video',
            'Area': 'AM AZ BY KG KZ MD RU TJ UZ',
            'Column5': ''
          },
          {
            'appIndex': 89,
            'appName': 'Hubble Space Telescope',
            'appLink': 'https://recommend.zeasn.tv/hubble_web/index.html',
            'Category': 'Entertainment',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 90,
            'appName': 'Hungama Play',
            'appLink': 'http://zeasn.tvapps.hungama.com/',
            'Category': 'Video',
            'Area': 'IN',
            'Column5': ''
          },
          {
            'appIndex': 91,
            'appName': 'iflix',
            'appLink': 'http://apps.store.zeasn.com/iFlix/',
            'Category': 'Video',
            'Area': 'MY TH ID',
            'Column5': ''
          },
          {
            'appIndex': 92,
            'appName': 'iflixtv Pro',
            'appLink': 'http://www.iflixtv.com/',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 93,
            'appName': 'iFood.tv',
            'appLink': 'http://alliance.futuretodayinc.com/ifoodtv/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 94,
            'appName': 'ikono TV',
            'appLink': 'http://tv.mytvscout.de/ikono',
            'Category': 'Entertainment',
            'Area': 'AT CH DE NL',
            'Column5': ''
          },
          {
            'appIndex': 95,
            'appName': 'Il Sole 24 Ore',
            'appLink': 'http://www.nettv.ilsole24ore.com',
            'Category': 'News',
            'Area': 'IT',
            'Column5': ''
          },
          {
            'appIndex': 96,
            'appName': 'INTV STREAM',
            'appLink': 'http://www.intvitalia.net/intv_zeasn_app_tv/',
            'Category': 'Video',
            'Area': 'IT',
            'Column5': ''
          },
          {
            'appIndex': 97,
            'appName': 'Ipla',
            'appLink': 'http://tv.ipla.pl/alliance/filip/ ',
            'Category': 'Video',
            'Area': 'PL',
            'Column5': ''
          },
          {
            'appIndex': 98,
            'appName': 'iRokotv',
            'appLink': 'http://apps.store.zeasn.com/iRokotv/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 99,
            'appName': 'ivi',
            'appLink': 'http://haier.ivi.ru/',
            'Category': 'Video',
            'Area': 'CIS',
            'Column5': ''
          },
          {
            'appIndex': 100,
            'appName': 'Jagged Entertainments',
            'appLink': 'http://www.jaggedmovies.com',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 101,
            'appName': 'Jena Tv',
            'appLink': 'http://tv.mytvscout.de/jenatv/',
            'Category': 'News',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 102,
            'appName': 'Karnaval',
            'appLink': 'http://tvapp.karnaval.com/nettv/?',
            'Category': 'Entertainment',
            'Area': 'TR',
            'Column5': ''
          },
          {
            'appIndex': 103,
            'appName': 'Kicker.tv',
            'appLink': 'http://cetv.kicker.de/',
            'Category': 'Video',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 104,
            'appName': 'Kidoodle.TV',
            'appLink': 'https://tvapp.kidoodle.tv',
            'Category': 'Kids',
            'Area': 'AD AE AF AG AI AL AM AO AR AS AT AU AW AZ BA BB BD BE BF BG BH BI BJ BN BO BON BR BS BT BW BZ CA CC CH CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DM DO DZ EC EE EH ES ET FI FJ FK FM FR GA GB GD GE GF GH GI GM GN GQ GR GT GU GW GY HK HN HR HT HU ID IE IL IN IO IS IT JM JO JP KE KG KH KI KM KN KR KW KY KZ LA LC LI LK LS LT LU LV MA MC MD ME MG MH MK ML MO MP MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PN PR PS PT PW PY QA RO RS RW SA SB SC SE SG SI SJ SK SL SN SP SR ST SV SZ TC TD TG TH TJ TK TL TM TN TO TR TT TV TW TZ UG US UY UZ VA VC VE VG VI VN VU WF WS YK ZA ZM',
            'Column5': ''
          },
          {
            'appIndex': 105,
            'appName': 'KIYA TV',
            'appLink': 'http://tv.mytvscout.de/kiya2/html5.html',
            'Category': 'Lifestyle',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 106,
            'appName': 'Korean Brothers',
            'appLink': 'http://apps.store.zeasn.com/UCjdEJpJAZWxrF7YGUFHI3tQ/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 107,
            'appName': 'Lausitz TV',
            'appLink': 'http://tv.mytvscout.de/lausitztv',
            'Category': 'News',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 108,
            'appName': 'LEGOO MANDARIN',
            'appLink': 'http://apps.store.zeasn.com/LEGOOMANDARIN/show.html ',
            'Category': 'Video',
            'Area': 'AD AL AM AT BE BG BN BY CH CZ DE DK EE ES FI FR GB GE GR HR HU ID IE IS IT KH LA LI LT LU LV MC ME MK MM MT MY NL NO PH PL PT RO RS RU SE SG SI SK SM TH TP TR UA VA VN',
            'Column5': ''
          },
          {
            'appIndex': 109,
            'appName': 'Lifeminute TV',
            'appLink': 'http://lifeminute.tv/smartv/sony/index.html',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 110,
            'appName': 'LifeShow Player',
            'appLink': 'http://smarttv.lifeshow.com/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 111,
            'appName': 'Lig TV',
            'appLink': 'http://smarttvligtv.digiturk.com.tr',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 112,
            'appName': 'Logitravel',
            'appLink': 'http://www.logitravel.tv/app/ptv/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 113,
            'appName': 'Love Indonesia',
            'appLink': 'https://www.loveindonesia.com/zeasn/pages/home.php',
            'Category': 'Video',
            'Area': 'ID',
            'Column5': ''
          },
          {
            'appIndex': 114,
            'appName': 'Ludo STA',
            'appLink': 'http://smartgames.tv/SG/ludo/',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 115,
            'appName': 'M4TV',
            'appLink': 'http://tv.mytvscout.de/m4tv',
            'Category': 'Lifestyle',
            'Area': 'AT CH DE LU NL',
            'Column5': ''
          },
          {
            'appIndex': 116,
            'appName': 'Media Station X',
            'appLink': 'http://msx.benzac.de/',
            'Category': 'Tool',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 117,
            'appName': 'Media Station X:',
            'appLink': 'http://msx.benzac.de',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 118,
            'appName': 'Megogo',
            'appLink': 'http://zeasn-app.megogo.net/',
            'Category': 'Video',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 119,
            'appName': 'MEMORY',
            'appLink': 'http://smartgames.tv/vprod/Memory/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 120,
            'appName': 'MeteoX.fr',
            'appLink': 'http://nettv.meteox.fr/h-fr.tv',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 121,
            'appName': 'MGG Beta',
            'appLink': 'http://p.stage.megogo.net/pages/home.html',
            'Category': 'News',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 122,
            'appName': 'Minds Eye Design',
            'appLink': 'http://apps.store.zeasn.com/mindseyedesign/show.html',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 123,
            'appName': 'MINEFIELD',
            'appLink': 'http://smartgames.tv/vprod/MineField/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 124,
            'appName': 'Mitteldeutscher Rundfunk',
            'appLink': 'http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?devicegroup=hbbtv&context=portal&client=mdr',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 125,
            'appName': 'Mobile Geeks',
            'appLink': 'http://apps.tvstore.op-cdn.net/rssmobilegeeks/?uid=b5bda454e3aebd0af183b9e781d934c8566235dec2e42f76b5947265b37673eexmobile-geeks-2xed76fa7d95dbca5cd268ebfcd90fb53f20bdd0c61295d908c6e21bca5a36be91#fix',
            'Category': 'E-Commerce',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 126,
            'appName': 'Mole Invaders',
            'appLink': 'http://smartgames.tv/vprod/Moles/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 127,
            'appName': 'Molodejj.tv',
            'appLink': 'http://smart.molodejj.tv/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 128,
            'appName': 'Motorsport-Total.com',
            'appLink': 'http://www.motorsport-total.com/itv/index.xhtml',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 129,
            'appName': 'MP3 Quran',
            'appLink': 'https://dp7jf8msrzr5s.cloudfront.net/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 130,
            'appName': 'Mundo Gaturro',
            'appLink': 'http://smarttv.mundogaturro.com/',
            'Category': 'Entertainment',
            'Area': 'AR',
            'Column5': ''
          },
          {
            'appIndex': 131,
            'appName': 'Myholyfield TV',
            'appLink': 'https://recommend.zeasn.tv/myholyfieldtv_web/index.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 132,
            'appName': 'National Geographic',
            'appLink': 'http://apps.store.zeasn.com/NationalGeographic/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 133,
            'appName': 'NewMoove',
            'appLink': 'http://smarttv.newmoove.com/philips',
            'Category': 'Lifestyle',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 134,
            'appName': 'Niederschlagsradar',
            'appLink': 'http://nettv.niederschlagsradar.de',
            'Category': 'Lifestyle',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 135,
            'appName': 'NOA SPORTS',
            'appLink': 'http://nettv.noapitel.com',
            'Category': 'Video',
            'Area': 'ES',
            'Column5': ''
          },
          {
            'appIndex': 136,
            'appName': 'NY-PAMILO TV',
            'appLink': 'http://tv.mytvscout.de/nypamilo/nettv',
            'Category': 'Lifestyle',
            'Area': 'AT CH DE NL',
            'Column5': ''
          },
          {
            'appIndex': 137,
            'appName': 'OKKO',
            'appLink': 'http:// zeasn.okko.tv',
            'Category': 'Video',
            'Area': 'KZ RU',
            'Column5': ''
          },
          {
            'appIndex': 138,
            'appName': 'Oll.tv',
            'appLink': 'http://ph.oll.tv',
            'Category': 'Video',
            'Area': 'UA',
            'Column5': ''
          },
          {
            'appIndex': 139,
            'appName': 'Omroep Flevoland',
            'appLink': 'http://roos.24imedia.tv/#/channel/id/flevoland',
            'Category': 'News',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 140,
            'appName': 'Omroep Gelderland',
            'appLink': 'http://roos.24imedia.tv/#/channel/id/gelderland',
            'Category': 'News',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 141,
            'appName': 'Omroep West',
            'appLink': 'http://roos.24imedia.tv/#/channel/id/west',
            'Category': 'Video',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 142,
            'appName': 'Omroep Zeeland',
            'appLink': 'http://roos.24imedia.tv/#/channel/id/zeeland',
            'Category': 'Video',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 143,
            'appName': 'Omrop Fryslân',
            'appLink': 'http://roos.24imedia.tv/#/channel/id/fryslan',
            'Category': 'News',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 144,
            'appName': 'One',
            'appLink': 'http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?client=one&devicegroup=hbbtv&context=portal',
            'Category': 'Entertainment',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 145,
            'appName': 'Onivia League of Legends Highlights',
            'appLink': 'http://apps.store.zeasn.com/UCPhab209KEicqPJFAk9IZEA/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 146,
            'appName': 'Panorama TV',
            'appLink': 'http://panoramatv.feratel.com/panoramatv/operav2/index.jsp?uid=6e3c52ecbf13141916ff94b4dfd49991de1369991f9f60cee8ebea6e19d04d73xpanoramatvxed76fa7d95dbca5cd268ebfcd90fb53f20bdd0c61295d908c6e21bca5a36be91',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 147,
            'appName': 'Peers TV',
            'appLink': 'http://smarttv.peers.tv/zeasn/1.0.0/index.html',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 148,
            'appName': 'Pentomino',
            'appLink': 'http://www.smartgames.tv/SG/Pentomino/index.html',
            'Category': 'Game',
            'Area': 'RU+CIS Countries',
            'Column5': ''
          },
          {
            'appIndex': 149,
            'appName': 'portalZINE TV',
            'appLink': 'http://nettv.portalzine.tv/',
            'Category': 'Video',
            'Area': 'AR AT AU BE BG BR BZ CH CR CZ DE DK EE ES FI FR GB GR GT HN HR HU IE IT KZ LT LU LV NI NL NO NZ PA PL PT RO RS RU SE SI SK SV TR UA',
            'Column5': ''
          },
          {
            'appIndex': 150,
            'appName': 'Potsdam TV',
            'appLink': 'http://tv.mytvscout.de/potsdamtv/',
            'Category': 'News',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 151,
            'appName': 'ProvenceTV',
            'appLink': 'http://apps.tvstore.opera.com/video_application/?bg=jpg&target_user=provencetv&app_id=46898#fix',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 152,
            'appName': 'Putpat TV',
            'appLink': 'http://www.putpat.tv/device/ca8gek21?uid=cc8764f60a5a0a6e2e1858929b54aa33a09c50dabd8138a981038ca1078f6d77xputpat-tvxed76fa7d95dbca5cd268ebfcd90fb53f20bdd0c61295d908c6e21bca5a36be91',
            'Category': 'Music',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 153,
            'appName': 'PUZZLE',
            'appLink': 'http://smartgames.tv/vprod/Puzzle/#adsound#ODM',
            'Category': 'Game',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 154,
            'appName': 'Queer Cinema Entertainment',
            'appLink': 'http://www.queercinema.lgbt',
            'Category': 'Adult',
            'Area': 'AD AF AL AO AR AT AU AZ BA BD BE BH BI BO BR BS BT BY CA CD CG CH CM CN CO CZ DE DK DM DO DZ EC EE EG ET FI FR GB GH GN HR HT IE IS IT JP KE KG KH KR KW KZ LA LB LK LR LT LU LV MA MC ME ML MM MN MO MU MV MY NA NG NL NO NP OM PE PG PH PK PL PR PT PY QA RO RW SA SE SG SN TG US ZA ZW',
            'Column5': ''
          },
          {
            'appIndex': 155,
            'appName': 'Quizz Master',
            'appLink': 'http://telecity.funspot.tv/portals/quizz/index.xhtml',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 156,
            'appName': 'Radio Bremen',
            'appLink': 'http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?devicegroup=hbbtv&context=portal&client=radiobremen',
            'Category': 'Lifestyle',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 157,
            'appName': 'Radio tv su',
            'appLink': 'http://smart.radiotv.su/zeasn/en/',
            'Category': 'Video',
            'Area': 'IT',
            'Column5': ''
          },
          {
            'appIndex': 158,
            'appName': 'Radioline',
            'appLink': 'http://zeasn.radioline.co',
            'Category': 'Lifestyle',
            'Area': 'DE ES FR GB IT NL',
            'Column5': ''
          },
          {
            'appIndex': 159,
            'appName': 'Radiotv.su',
            'appLink': 'http://smart.radiotv.su/zeasn/ru/ ',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 160,
            'appName': 'radiotv.su музыкальный портал',
            'appLink': 'http://smart.radiotv.su/zeasn/ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 161,
            'appName': 'Redkaraoke',
            'appLink': 'http://www.redkaraoke.com/tv/app',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 162,
            'appName': 'Regio TV',
            'appLink': 'http://roos.24imedia.tv/',
            'Category': 'News',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 163,
            'appName': 'REVERSI',
            'appLink': 'http://smartgames.tv/vprod/Reversi/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 164,
            'appName': 'Rockswap Adventures',
            'appLink': 'http://telecity.funspot.tv/portals/rockswap/',
            'Category': 'Game',
            'Area': 'AR AT AU BE BG BR BZ CH CR CZ DE DK EE ES FI FR GB GR GT HN HR HU IE IT KZ LT LU LV NI NL NO NZ PA PL PT RO RS RU SE SI SK SV TR UA',
            'Column5': ''
          },
          {
            'appIndex': 165,
            'appName': 'RTV Drenthe',
            'appLink': 'http://roos.24imedia.tv/#/channel/id/drenthe',
            'Category': 'News',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 166,
            'appName': 'Rundfunk Berlin-Brandenburg RBB',
            'appLink': 'http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?devicegroup=hbbtv&context=portal&client=rbb',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 167,
            'appName': 'Russian cinema',
            'appLink': 'http://services.tvzavr.ru/rusmovies/?overrideParams=true&platform=zea',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 168,
            'appName': 'Saarländischer Rundfunk SR',
            'appLink': 'http://hbbtv.sr-mediathek.de/index.php',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 169,
            'appName': 'Säätutka.fi',
            'appLink': 'http://nettv.vaderradar.se/h-fi.tv',
            'Category': 'Lifestyle',
            'Area': 'FI',
            'Column5': ''
          },
          {
            'appIndex': 170,
            'appName': 'Sabah',
            'appLink': 'http://sabah.ctv.tmgrup.com.tr/nettv',
            'Category': 'News',
            'Area': 'TR',
            'Column5': ''
          },
          {
            'appIndex': 171,
            'appName': 'Screens on fire',
            'appLink': 'http://sof.screensonfire.de/sof/',
            'Category': 'Lifestyle',
            'Area': 'AR AT AU BE BG BR BZ CH CR CZ DE DK EE ES FI FR GB GR GT HN HR HU IE IT KZ LT LU LV NI NL NO NZ PA PL PT RO RS RU SE SI SK SV TR UA',
            'Column5': ''
          },
          {
            'appIndex': 172,
            'appName': 'See.ua',
            'appLink': 'http://nettv.see.ua',
            'Category': 'Entertainment',
            'Area': 'RU UA',
            'Column5': ''
          },
          {
            'appIndex': 173,
            'appName': 'SHOWTIME',
            'appLink': 'http://apps.store.zeasn.com/SHOWTIME/show.html',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 174,
            'appName': 'Silverline TV',
            'appLink': 'http://tv.mytvscout.de/silverline',
            'Category': 'News',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 175,
            'appName': 'Skuff TV',
            'appLink': 'https://recommend.zeasn.tv/skufftv_web/index.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 176,
            'appName': 'Smart Bricks',
            'appLink': 'http://smartgames.tv/vprod/SmartBricks/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 177,
            'appName': 'SMART LIGHTS',
            'appLink': 'http://smartgames.tv/vprod/SmartLights/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 178,
            'appName': 'SMART NUMB3RS',
            'appLink': 'http://smartgames.tv/vprod/SmartNumbers/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 179,
            'appName': 'SMARTCOLOR',
            'appLink': 'http://smartgames.tv/vprod/SmartColor/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 180,
            'appName': 'SmartGames.TV',
            'appLink': 'http://smartgames.tv/prod/',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 181,
            'appName': 'SMARTTMIND',
            'appLink': 'http://smartgames.tv/vprod/SmartMind/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 182,
            'appName': 'SOLITAIRE',
            'appLink': 'http://smartgames.tv/vprod/Solitaire/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 183,
            'appName': 'Solitaire Club',
            'appLink': 'http://philips.playintv.com/sc/html/template.cehtml',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 184,
            'appName': 'SoundCloud',
            'appLink': 'https://apps.zeasn.tv/soundcloud_web/html/index.html?snum=TCL_v1.0.0',
            'Category': 'Music',
            'Area': 'AD AL AM AT BE BG BY CH CZ DE DK EE ES FI FR GB GE GR HR HU IE IS IT LI LT LU LV MC ME MK MT NL NO PL PT RO RS RU SE SI SK SM TR UA VA',
            'Column5': ''
          },
          {
            'appIndex': 185,
            'appName': 'SQAD',
            'appLink': 'https://html5.sqadplay.com/',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 186,
            'appName': 'SS IPTV',
            'appLink': 'http://app.ss-iptv.com/#opt=%7B%22target%22%3A%22generic%22%2C%22version%22%3A%221.0.1%22%7D',
            'Category': 'Video',
            'Area': 'AZ BR BY CZ ES KR KZ LT MD RU UA UZ',
            'Column5': ''
          },
          {
            'appIndex': 187,
            'appName': 'Start.ru',
            'appLink': 'https://tvapps.start.ru/zeasn/',
            'Category': 'Video',
            'Area': 'CIS',
            'Column5': ''
          },
          {
            'appIndex': 188,
            'appName': 'STRANA.FM',
            'appLink': 'http://stranafm.bonus-tv.ru/stranafm/nettv/',
            'Category': 'Lifestyle',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 189,
            'appName': 'Su pasteri',
            'appLink': 'http://www.supasteri.it/smartTV/',
            'Category': 'Lifestyle',
            'Area': 'CH HR IT SI SM VA',
            'Column5': ''
          },
          {
            'appIndex': 190,
            'appName': 'Sudoku',
            'appLink': 'http://telecity.funspot.tv/portals/sudoku/',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 191,
            'appName': 'Südthüringer RF',
            'appLink': 'http://tv.mytvscout.de/sonnebergtv/',
            'Category': 'News',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 192,
            'appName': 'Südwestrundfunk SWR',
            'appLink': 'http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?devicegroup=hbbtv&context=portal&client=swr',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 193,
            'appName': 'SWEET TV',
            'appLink': 'http://zeasn.smarttv.sweet.tv/',
            'Category': 'Video',
            'Area': 'UA',
            'Column5': ''
          },
          {
            'appIndex': 194,
            'appName': 'Sylt1',
            'appLink': 'http://tv.mytvscout.de/sylt1',
            'Category': 'News',
            'Area': 'AT CH DE NL',
            'Column5': ''
          },
          {
            'appIndex': 195,
            'appName': 'Tagesschau',
            'appLink': 'http://www.tagesschau.de/tv',
            'Category': 'News',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 196,
            'appName': 'Tatort',
            'appLink': 'http://hbbtv-tatort.daserste.de/?context=hbbtv',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 197,
            'appName': 'TechnoNerd',
            'appLink': 'http://apps.store.zeasn.com/UCeDqLK6FAytkaFEXRd443Pw/show.html',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 198,
            'appName': 'THE MAZE',
            'appLink': 'http://smartgames.tv/vprod/Maze/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 199,
            'appName': 'TIC TAC TOE',
            'appLink': 'http://smartgames.tv/vprod/Tictactoe/#adsound#ODM',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 200,
            'appName': 'Tikclone',
            'appLink': 'http://tikclone.tv',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 201,
            'appName': 'TNT MUSIC',
            'appLink': 'http://tntmusic.tv.infolio-lab.com/tntmusic/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 202,
            'appName': 'Toon Goggles',
            'appLink': 'https://html5.toongoggles.com/?&disable_tts=1',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 203,
            'appName': 'TOP ALL SPORTS',
            'appLink': 'http://apps.store.zeasn.com/UC4xkwnWvysDW9XGFuF9QzVA/show.html',
            'Category': 'Sport',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 204,
            'appName': 'Traktor TV',
            'appLink': 'http://tv.mytvscout.de/traktortv',
            'Category': 'Entertainment',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 205,
            'appName': 'Trendsplant TV',
            'appLink': 'https://app.viloud.tv/smarttv/v2/?associate=zea-z1t5&app=925c0356f400135eb887943eb0e9ff62',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 206,
            'appName': 'TRT',
            'appLink': 'http://smapp.trt.tv/TvApp/phps',
            'Category': 'Video',
            'Area': 'TR ZZ',
            'Column5': ''
          },
          {
            'appIndex': 207,
            'appName': 'TRT WORLD',
            'appLink': 'http://www.trtworld.com/html5app/#/',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 208,
            'appName': 'True Movie',
            'appLink': 'http://apps.store.zeasn.com/truemovie1/show.html',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 209,
            'appName': 'TV GAMES',
            'appLink': 'http://apps.tvgam.es/tv_games/zeasn_portal/production/portal/index.html',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 210,
            'appName': 'TV5 MONDE +',
            'appLink': 'http://smarttv.tv5monde.com/nettv.cehtml2?utm_source=NetTV&utm_medium=portal&utm_campaign=V2',
            'Category': 'Video',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 211,
            'appName': 'TV5MONDE',
            'appLink': 'http://tv5.dotscreen.com',
            'Category': 'Video',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 212,
            'appName': 'Tvigle',
            'appLink': 'http://zeasn.v4.tvigle.ru',
            'Category': 'Video',
            'Area': 'EE KZ RU',
            'Column5': ''
          },
          {
            'appIndex': 213,
            'appName': 'tvzavr',
            'appLink': 'http://services.tvzavr.ru/alliance/?overrideParams=true&platform=nth',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 214,
            'appName': 'UiT in Vlaanderen',
            'appLink': 'http://tv.uitinvlaanderen.be',
            'Category': 'Lifestyle',
            'Area': 'BE',
            'Column5': ''
          },
          {
            'appIndex': 215,
            'appName': 'UNIC Hotel Prague',
            'appLink': 'http://look-at-screen.tv-tech.eu/unic/smarttv',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 216,
            'appName': 'Väderradar.se',
            'appLink': 'http://nettv.vaderradar.se/h.tv',
            'Category': 'Lifestyle',
            'Area': 'SE',
            'Column5': ''
          },
          {
            'appIndex': 217,
            'appName': 'Vaerradar.no',
            'appLink': 'http://nettv.vaderradar.se/h-no.tv',
            'Category': 'Lifestyle',
            'Area': 'NO',
            'Column5': ''
          },
          {
            'appIndex': 218,
            'appName': 'verivox.de',
            'appLink': 'http://smarttv.app.verivox.de/nettv',
            'Category': 'Lifestyle',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 219,
            'appName': 'Vfb.tv',
            'appLink': 'http://vfb.services.nrmmh.tv',
            'Category': 'Video',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 220,
            'appName': 'Viaway',
            'appLink': 'http://www.viaway.com/CE/zeasn.aspx',
            'Category': 'Lifestyle',
            'Area': 'Europe',
            'Column5': ''
          },
          {
            'appIndex': 221,
            'appName': 'Viewster',
            'appLink': 'http://www.viewster.tv/Viewster_v5/index.html#devStore=zeasn&viewsterKeyboard=false',
            'Category': 'Video',
            'Area': '',
            'Column5': ''
          },
          {
            'appIndex': 222,
            'appName': 'Vilanoise TV',
            'appLink': 'https://app.viloud.tv/cehtml/?associate=zea-z1t5&channel=fb2f9654cc61ea4e71f073ffbd236262',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 223,
            'appName': 'ViNTERA.TV',
            'appLink': 'http://zeasn.vintera.tv/zeasn/index.html',
            'Category': 'Video',
            'Area': 'AR AT AU BE BG BR BZ CH CR CZ DE DK EE ES FI FR GB GR GT HN HR HU IE IT KZ LT LU LV NI NL NO NZ PA PL PT RO RS RU SE SI SK SV TR UA',
            'Column5': ''
          },
          {
            'appIndex': 224,
            'appName': 'Volume TV',
            'appLink': 'http://www.volumetv.net/operavtv/#fix',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 225,
            'appName': 'VroomGP',
            'appLink': 'http://tv4.vroom-magazine.com/cms/site/all/?id=39&platform=operaTV3',
            'Category': 'Sport',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 226,
            'appName': 'vTuner',
            'appLink': 'http://cdn.app-vtion.com/download/apks/C/72/2018/7/test.app.empty.zeasn.com.empty42/22cd7ddb-a76e-4d86-b39f-fc4f0fd8e580.apk',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 227,
            'appName': 'Watchmi',
            'appLink': 'http://watchmi-smarttv.api.watchmi.tv/app/watchmi-smarttv/index.html',
            'Category': 'Lifestyle',
            'Area': 'AT CH DE LU',
            'Column5': ''
          },
          {
            'appIndex': 228,
            'appName': 'watchmi Themenkanäle',
            'appLink': 'http://watchmi-smarttv.api.watchmi.tv/app/watchmi-smarttv/cehtml.cehtml',
            'Category': 'Video',
            'Area': 'AT CH DE LU',
            'Column5': ''
          },
          {
            'appIndex': 229,
            'appName': 'WeatherNation',
            'appLink': 'http://data.weathernationtv.com/apps/operatv/index.html?uid=7f377ecb70d038b4efc4181f943af986e7b53f1fd347adbd02088b2dbd487d05xweathernationxed76fa7d95dbca5cd268ebfcd90fb53f20bdd0c61295d908c6e21bca5a36be91',
            'Category': 'Lifestyle',
            'Area': 'AE BH DZ EG ID KR KW PH SA SG TH VN ZZ',
            'Column5': ''
          },
          {
            'appIndex': 230,
            'appName': 'Webcamer.pl',
            'appLink': 'http://www.webcamera.pl/fox/ ',
            'Category': 'Lifestyle',
            'Area': 'AE AT AU AZ BR BY CA CZ DE EE FI GB GR HU IL KZ LT LV NZ PL RO RU SK UA US',
            'Column5': ''
          },
          {
            'appIndex': 231,
            'appName': 'Weerslag.be',
            'appLink': 'http://nettv.weerslag.be/smartbe.aspx',
            'Category': 'Lifestyle',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 232,
            'appName': 'Weerslag.NL',
            'appLink': 'http://nettv.weerslag.nl/smartnl.aspx',
            'Category': 'Lifestyle',
            'Area': 'NL',
            'Column5': ''
          },
          {
            'appIndex': 233,
            'appName': 'Westdeutscher Rundfunk WDR',
            'appLink': 'http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?devicegroup=hbbtv&context=portal&client=wdr',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 234,
            'appName': 'World Fashion',
            'appLink': 'http://wf.bonus-tv.ru/wf/nettv/',
            'Category': 'Lifestyle',
            'Area': 'US',
            'Column5': ''
          },
          {
            'appIndex': 235,
            'appName': 'Worldtvgo',
            'appLink': 'http://lg.worldtvgo.com ',
            'Category': 'Video',
            'Area': 'BN ID KH LA MM MY NP PH SG TH TL VN',
            'Column5': ''
          },
          {
            'appIndex': 236,
            'appName': 'YAN News',
            'appLink': 'http://apps.store.zeasn.com/YanNews/',
            'Category': 'News',
            'Area': 'BN ID KH LA MM MY PH SG TH TP VN',
            'Column5': ''
          },
          {
            'appIndex': 237,
            'appName': 'youtv',
            'appLink': 'https://tv.youtv.de/',
            'Category': 'Video',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 238,
            'appName': 'Youzeek',
            'appLink': 'https://youzeek.com/helixDesktop.v4.aspx',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 239,
            'appName': 'YuppTV',
            'appLink': 'https://www.yupptv.com/v2/zeasn/index.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 240,
            'appName': 'Zapping TV',
            'appLink': 'http://zeasn.zappingtv.com/',
            'Category': 'Video',
            'Area': 'AG AR BB BO BR BS BZ CL CO CR CU DO EC GF GT HN JM MX NI PA PE PY SR SV TT UY VE',
            'Column5': ''
          },
          {
            'appIndex': 241,
            'appName': 'Zaycev.FM',
            'appLink': 'https://tv.zaycev.fm/ ',
            'Category': 'Music',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 242,
            'appName': 'Zing TV',
            'appLink': 'http://tv.zing.vn/smarttv/sonyceb.html#home',
            'Category': 'Video',
            'Area': 'VN',
            'Column5': ''
          },
          {
            'appIndex': 243,
            'appName': 'Боевики и детективы',
            'appLink': 'http://zeasn.bd.tvigle.ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 244,
            'appName': 'Больше ТV',
            'appLink': 'http://zeasn.btv.tvigle.ru',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 245,
            'appName': 'Бонус ТВ',
            'appLink': 'http://bonus-tv.ru:90/nettv/',
            'Category': 'Entertainment',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 246,
            'appName': 'Взрослое кино',
            'appLink': 'http://zeasn.er.tvigle.ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 247,
            'appName': 'Дети',
            'appLink': 'http://zeasn.kd.tvigle.ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 248,
            'appName': 'ДОЖДЬ',
            'appLink': 'http://smarttv.tvrain.ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 249,
            'appName': 'Индийское кино',
            'appLink': 'http://zeasn.ik.tvigle.ru',
            'Category': 'Video',
            'Area': 'AM AZ BY KG KZ MD RU TJ UZ',
            'Column5': ''
          },
          {
            'appIndex': 250,
            'appName': 'Комедии',
            'appLink': 'http://zeasn.cm.tvigle.ru/',
            'Category': 'Video',
            'Area': 'AM AZ BY KG KZ MD RU TJ UZ',
            'Column5': ''
          },
          {
            'appIndex': 251,
            'appName': 'Мелодрамы',
            'appLink': 'http://zeasn.ml.tvigle.ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 252,
            'appName': 'Русская музыка',
            'appLink': 'http://zeasn.rm3.tvigle.ru',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 253,
            'appName': 'Русские сериалы',
            'appLink': 'http://zeasn.rs.tvigle.ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 254,
            'appName': 'Сериалы',
            'appLink': 'http://zeasn.ser.tvigle.ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 255,
            'appName': 'Ужасы и триллеры',
            'appLink': 'http://zeasn.ut.tvigle.ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 256,
            'appName': 'Юмор',
            'appLink': 'http://zeasn.um.tvigle.ru/',
            'Category': 'Video',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 257,
            'appName': 'Яндекс',
            'appLink': 'http://hw.yandex.ru/ph',
            'Category': 'Lifestyle',
            'Area': 'RU',
            'Column5': ''
          },
          {
            'appIndex': 258,
            'appName': 'กอนุบาล การ์ตูนอนิเมชั่น',
            'appLink': 'http://apps.store.zeasn.com/indysong/show.html',
            'Category': 'Game',
            'Area': 'TH',
            'Column5': ''
          }
        ],
        'sheet1test': [
          {
            'appIndex': 3,
            'appName': '4 in a Row',
            'appLink': 'http://smartgames.tv/SG/connect4/index.html',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 4,
            'appName': 'AccuWeather',
            'appLink': 'https://smarttv.zeasn.tv/AccuWeather_web/index.html',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 5,
            'appName': 'Acil Numaralar',
            'appLink': 'http://www.engin.tv/nettv/acilnumara/',
            'Category': 'Lifestyle',
            'Area': 'TR',
            'Column5': ''
          },
          {
            'appIndex': 6,
            'appName': 'Adagio TV',
            'appLink': 'http://apps.tvstore.opera.com/video_application/?bg=jpg&target_user=adagio_tv&app_id=134944#fix',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 7,
            'appName': 'ADAGIO TV ',
            'appLink': 'https://d3u3bgui77bitj.cloudfront.net/rotosnap/home.html?app=adagio-tv-russia-2&lang=en#prevent-back ',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 8,
            'appName': 'Al Jazeera',
            'appLink': 'http://apps.store.zeasn.com/aljazeera/',
            'Category': 'News',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 9,
            'appName': 'Album2',
            'appLink': 'http://nettv.album2.com/',
            'Category': 'Lifestyle',
            'Area': 'NO',
            'Column5': ''
          },
          {
            'appIndex': 10,
            'appName': 'Alien Shooter',
            'appLink': 'http://smartgames.tv/SG/alien_shooter/index.html',
            'Category': 'Game',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 11,
            'appName': 'Aqua TV',
            'appLink': 'http://tv.mytvscout.de/aquatv/',
            'Category': 'Lifestyle',
            'Area': 'DE',
            'Column5': ''
          },
          {
            'appIndex': 12,
            'appName': 'ARD MedIathek',
            'appLink': 'http://hbbtv.ardmediathek.de/hbbtv-ard/mediathek/?devicegroup=hbbtv&context=portal',
            'Category': 'Video',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 13,
            'appName': 'Arrivaltv',
            'appLink': 'http://apps.tvstore.opera.com/video_application/?bg=jpg&target_user=ArrivalTV&app_id=161735#fix',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 14,
            'appName': 'Art of Seduction',
            'appLink': 'http://www.seduction.media',
            'Category': 'Adult',
            'Area': 'AD AF AL AO AR AT AU AZ BA BD BE BH BI BO BR BS BT BY CA CD CG CH CM CN CO CZ DE DK DM DO DZ EC EE EG ET FI FR GB GH GN HR HT IE IS IT JP KE KG KH KR KW KZ LA LB LK LR LT LU LV MA MC ME ML MM MN MO MU MV MY NA NG NL NO NP OM PE PG PH PK PL PR PT PY QA RO RW SA SE SG SN TG US ZA ZW',
            'Column5': ''
          },
          {
            'appIndex': 15,
            'appName': 'Arte',
            'appLink': 'http://www.arte.tv/hbbtvv2/index.html?page=PLUS7&tv=FALSE',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 16,
            'appName': 'ASHanguk 애쉬한국',
            'appLink': 'http://apps.store.zeasn.com/UCZYfd94EsqipAuZyunqVBRQ/show.html',
            'Category': 'Video',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 17,
            'appName': 'Auf Kurs',
            'appLink': 'http://tv.mytvscout.de/hansatv/',
            'Category': 'Entertainment',
            'Area': 'AT CH DE',
            'Column5': ''
          },
          {
            'appIndex': 18,
            'appName': 'Autozine.be',
            'appLink': 'http://www.autozine.be/nettv/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          {
            'appIndex': 19,
            'appName': 'Autozine.de',
            'appLink': 'http://www.autozine.de/nettv/',
            'Category': 'Lifestyle',
            'Area': 'Global',
            'Column5': ''
          },
          // {
          //   'appIndex': 20,
          //   'appName': 'Autozine.es',
          //   'appLink': 'http://www.autozine.es/nettv',
          //   'Category': 'News',
          //   'Area': 'Global',
          //   'Column5': ''
          // }
        ]
      }
    }
  },
  methods: {
  },
  mounted: function () {
    let Vue = this
    Vue.$link = $('.link-template')
    Vue.linkLength = Vue.$link.length // - 1
    Vue.itemFocus = Vue.$link[Vue.focusIndex]
    Vue.focusCurr = Vue.itemFocus
    $(Vue.focusCurr).addClass('focus')
    $(Vue.focusCurr).focus()
    Vue.focusFilter = Vue.$link.length % Vue.colCount
    console.log('Vue.$link.length')
    console.log(Vue.$link.length)
    console.log('Vue.focusFilter')
    console.log(Vue.focusFilter)
  }
}
</script>
<style lang="scss">
.list-old-app0 {
  text-align: left;
  li {
    width: 33%;
    display: inline-block;
    padding: 10px 20px;
    box-sizing: border-box;
    a {
      display: block;
      text-align: left;
      font-size: 30px;
      color: #aaa;
      line-height: 1.5;
      &:focus {
        background: #999;
        color: #000;
      }
    }
  }
}
</style>
