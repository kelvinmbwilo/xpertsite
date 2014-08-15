(function(e){function n(){e("document").ready(function(){var e=document.createElement("p"),t,n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(e);for(var r in n){if(e.style[r]!==undefined){e.style[r]="rotateX(1deg)";t=window.getComputedStyle(e).getPropertyValue(n[r])}}document.body.removeChild(e);s=t!==undefined&&t.length>0&&t!=="none"})}var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c","indigo  ":"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var r=navigator.appName=="Microsoft Internet Explorer";var i=window.HTMLCanvasElement;var s=null;n();var o=Math.PI;var u=function(n,u,a){this.animate=function(t){if(t){this._RBefore()}else{this._Before()}if(typeof t!==a&&t){var n=this._Recto;var r=this._Recto_color;this._Recto=this._Verso;this._Color=this._Recto_color=this._Verso_color;this._Verso=n;this._Color_target=this._Verso_color=r;this._Reversing=true;switch(this._Direction){case"TOP":this._Direction="BOTTOM";break;case"BOTTOM":this._Direction="TOP";break;case"LEFT":this._Direction="RIGHT";break;case"RIGHT":this._Direction="LEFT";break}}if(this._noCSS||!s){this.initiateFlippy();this.cvO=document.getElementById("flippy"+this._UID);this.jO.data("_oFlippy_",this);this._Int=setInterval(e.proxy(this.drawFlippy,this),this._Refresh_rate)}else{this.jO.addClass("flippy_active").parent().css({perspective:this._nW+"px"});this.jO.data("_oFlippy_",this);this._Int=setInterval(e.proxy(this.drawFlippyCSS,this),this._Refresh_rate)}};this.drawFlippyCSS=function(){this._Ang=this._Direction=="RIGHT"||this._Direction=="TOP"?this._Ang+this._Step_ang:this._Ang-this._Step_ang;var e=this._Direction=="RIGHT"||this._Direction=="LEFT"?"Y":"X";if((this._Direction=="RIGHT"||this._Direction=="TOP")&&this._Ang>90&&this._Ang<=90+this._Step_ang||(this._Direction=="LEFT"||this._Direction=="BOTTOM")&&this._Ang<-90&&this._Ang>=-90-this._Step_ang){if(this._Reversing){this._RMidway()}else{this._Midway()}this.jO.css({opacity:this._Color_target_alpha,background:this._Color_target}).empty().append(this._Verso);this._Ang=this._Direction=="RIGHT"||this._Direction=="TOP"?-90:90;this._Half=true}if(this._Direction=="RIGHT"||this._Direction=="TOP"){this._Ang=this._Ang>this._Step_ang&&this._Half?this._Ang-this._Step_ang:this._Ang}else{this._Ang=this._Ang<-this._Step_ang&&this._Half?this._Ang+this._Step_ang:this._Ang}if((this._Direction=="RIGHT"||this._Direction=="TOP")&&this._Ang>0&&this._Half||(this._Direction=="LEFT"||this._Direction=="BOTTOM")&&this._Ang<0&&this._Half){this.jO.removeClass("flippy_active").css({"-webkit-transform":"rotate"+e+"(0deg)","-moz-transform":"rotate"+e+"(0deg)","-o-transform":"rotate"+e+"(0deg)","-ms-transform":"rotate"+e+"(0deg)",transform:"rotate"+e+"(0deg)"}).find(".flippy_light").remove();clearInterval(this._Int);this._Half=false;if(this._Reversing){this._RAfter()}else{this._After()}return}else{this.jO.css({"-webkit-transform":"rotate"+e+"("+this._Ang+"deg)","-moz-transform":"rotate"+e+"("+this._Ang+"deg)","-o-transform":"rotate"+e+"("+this._Ang+"deg)","-ms-transform":"rotate"+e+"("+this._Ang+"deg)",transform:"rotate"+e+"("+this._Ang+"deg)"})}this.applyLight();if(this._Reversing){this._RDuring()}else{this._During()}};this.applyLight=function(){if(this.jO.find(".flippy_light").size()===0){this.jO.append('<div class="flippy_light"></div>').find(".flippy_light").css({position:"absolute",top:"0",left:"0","min-width":this._nW+"px","min-height":this._nH+"px",width:this._nW+"px",height:this._nH+"px","background-color":this._Direction=="LEFT"&&this._Half||this._Direction=="RIGHT"&&!this._Half||this._Direction=="TOP"&&this._Half||this._Direction=="BOTTOM"&&!this._Half?"#000":"#FFF",opacity:Math.abs(this._Ang)*this._Light/90/100})}else{this.jO.find(".flippy_light").css({"background-color":this._Direction=="LEFT"&&this._Half||this._Direction=="RIGHT"&&!this._Half||this._Direction=="TOP"&&this._Half||this._Direction=="BOTTOM"&&!this._Half?"#000":"#FFF",opacity:Math.abs(this._Ang)*this._Light/90/100})}};this.initiateFlippy=function(){var e;this.jO.addClass("flippy_active").empty().css({opacity:this._Color_alpha,background:"none",position:"relative",overflow:"visible"});switch(this._Direction){case"TOP":this._CenterX=Math.sin(o/2)*this._nW*this._Depth;this._CenterY=this._H/2;e='<canvas id="flippy'+this._UID+'" class="flippy" width="'+(this._W+2*this._CenterX)+'" height="'+this._H+'"></canvas>';this.new_flippy(e);this.jO.find("#flippy"+this._UID).css({position:"absolute",top:"0",left:"-"+this._CenterX+"px"});break;case"BOTTOM":this._CenterX=Math.sin(o/2)*this._nW*this._Depth;this._CenterY=this._H/2;e='<canvas id="flippy'+this._UID+'" class="flippy" width="'+(this._W+2*this._CenterX)+'" height="'+this._H+'"></canvas>';this.new_flippy(e);this.jO.find("#flippy"+this._UID).css({position:"absolute",top:"0",left:"-"+this._CenterX+"px"});break;case"LEFT":this._CenterY=Math.sin(o/2)*this._nH*this._Depth;this._CenterX=this._W/2;e='<canvas id="flippy'+this._UID+'" class="flippy" width="'+this._W+'" height="'+(this._H+2*this._CenterY)+'"></canvas>';this.new_flippy(e);this.jO.find("#flippy"+this._UID).css({position:"absolute",top:"-"+this._CenterY+"px",left:"0"});break;case"RIGHT":this._CenterY=Math.sin(o/2)*this._nH*this._Depth;this._CenterX=this._W/2;e='<canvas id="flippy'+this._UID+'" class="flippy" width="'+this._W+'" height="'+(this._H+2*this._CenterY)+'"></canvas>';this.new_flippy(e);this.jO.find("#flippy"+this._UID).css({position:"absolute",top:"-"+this._CenterY+"px",left:"0"});break}};this.drawFlippy=function(){this._Ang+=this._Step_ang;if(this._Ang>90&&this._Ang<=90+this._Step_ang){if(this._Reversing){this._RMidway()}else{this._Midway()}this.jO.css({opacity:this._Color_target_alpha})}this._Ang=this._Ang>180+this._Step_ang?this._Ang-(180+this._Step_ang):this._Ang;var e=this._Ang/180*o;if(this.cvO===null){return}if(r&&!i){G_vmlCanvasManager.initElement(this.cvO)}var t=this.cvO.getContext("2d");t.clearRect(0,0,this._W+2*this._CenterX,this._H+2*this._CenterY);t.beginPath();var n=Math.sin(e)*this._H*this._Depth;var s=Math.sin(e)*this._W*this._Depth;var u,a;switch(this._Direction){case"LEFT":u=Math.cos(e)*(this._W/2);t.fillStyle=this._Ang>90?this.changeColor(this._Color_target,Math.floor(Math.sin(e)*this._Light)):this.changeColor(this._Color,-Math.floor(Math.sin(e)*this._Light));t.moveTo(this._CenterX-u,this._CenterY+n);t.lineTo(this._CenterX+u,this._CenterY-n);t.lineTo(this._CenterX+u,this._CenterY+this._H+n);t.lineTo(this._CenterX-u,this._CenterY+this._H-n);t.lineTo(this._CenterX-u,this._CenterY);t.fill();break;case"RIGHT":u=Math.cos(e)*(this._W/2);t.fillStyle=this._Ang>90?this.changeColor(this._Color_target,-Math.floor(Math.sin(e)*this._Light)):this.changeColor(this._Color,Math.floor(Math.sin(e)*this._Light));t.moveTo(this._CenterX+u,this._CenterY+n);t.lineTo(this._CenterX-u,this._CenterY-n);t.lineTo(this._CenterX-u,this._CenterY+this._H+n);t.lineTo(this._CenterX+u,this._CenterY+this._H-n);t.lineTo(this._CenterX+u,this._CenterY);t.fill();break;case"TOP":a=Math.cos(e)*(this._H/2);t.fillStyle=this._Ang>90?this.changeColor(this._Color_target,-Math.floor(Math.sin(e)*this._Light)):this.changeColor(this._Color,Math.floor(Math.sin(e)*this._Light));t.moveTo(this._CenterX+s,this._CenterY-a);t.lineTo(this._CenterX-s,this._CenterY+a);t.lineTo(this._CenterX+this._W+s,this._CenterY+a);t.lineTo(this._CenterX+this._W-s,this._CenterY-a);t.lineTo(this._CenterX,this._CenterY-a);t.fill();break;case"BOTTOM":a=Math.cos(e)*(this._H/2);t.fillStyle=this._Ang>90?this.changeColor(this._Color_target,Math.floor(Math.sin(e)*this._Light)):this.changeColor(this._Color,-Math.floor(Math.sin(e)*this._Light));t.moveTo(this._CenterX+s,this._CenterY+a);t.lineTo(this._CenterX-s,this._CenterY-a);t.lineTo(this._CenterX+this._W+s,this._CenterY-a);t.lineTo(this._CenterX+this._W-s,this._CenterY+a);t.lineTo(this._CenterX,this._CenterY+a);t.fill();break}if(this._Ang>180){this.jO.removeClass("flippy_active").css({background:this._Color_target}).append(this._Verso).removeClass("flippy_container").find(".flippy").remove();clearInterval(this._Int);if(this._Reversing){this._RAfter()}else{this._After()}return}if(this._Reversing){this._RDuring()}else{this._During()}};this.new_flippy=function(e){if(r&&!i){this.jO.addClass("flippy_container").attr("id","flippy_container"+this._UID);var t=document.getElementById("flippy_container"+this._UID);var n=document.createElement(e);t.appendChild(n)}else{this.jO.append(e)}};this.convertColor=function(e){var n=t.hasOwnProperty(e)?t[e]:e;if(/^transparent$/i.test(n))return"#ffffff";if(n.substr(0,4)=="rgb("){return["#",this.toHex(n.substr(4,n.length).split(",")[0]>>>0),this.toHex(n.substr(3,n.length).split(",")[1]>>>0),this.toHex(n.substr(3,n.length-4).split(",")[2]>>>0)].join("")}if(n.substr(0,5)=="rgba("){return["#",this.toHex(n.substr(5,n.length).split(",")[0]>>>0),this.toHex(n.substr(3,n.length).split(",")[1]>>>0),this.toHex(n.substr(3,n.length-4).split(",")[2]>>>0)].join("")}return n};this.toHex=function(e){var t=[];while(Math.floor(e)>16){t.push(e%16);e=Math.floor(e/16)}var n,r;switch(e){case 10:n="A";break;case 11:n="B";break;case 12:n="C";break;case 13:n="D";break;case 14:n="E";break;case 15:n="F";break;default:n=""+e;break}for(r=t.length-1;r>=0;r--){switch(t[r]){case 10:n+="A";break;case 11:n+="B";break;case 12:n+="C";break;case 13:n+="D";break;case 14:n+="E";break;case 15:n+="F";break;default:n+=""+t[r];break}}if(n.length==1){return"0"+n}else{return n}};this.changeColor=function(e,t){var n=e.substr(1,2);var r=e.substr(3,2);var i=e.substr(5,2);var s=parseInt(n,16)+t>255?255:parseInt(n,16)+t;var o=parseInt(r,16)+t>255?255:parseInt(r,16)+t;var u=parseInt(i,16)+t>255?255:parseInt(i,16)+t;n=s<=0?"00":this.toHex(s);r=o<=0?"00":this.toHex(o);i=u<=0?"00":this.toHex(u);return"#"+n+r+i};u=e.extend({step_ang:10,refresh_rate:15,duration:300,depth:.12,color_target:"white",light:60,content:"",direction:"LEFT",noCSS:false,onStart:function(){},onMidway:function(){},onAnimation:function(){},onFinish:function(){},onReverseStart:function(){},onReverseMidway:function(){},onReverseAnimation:function(){},onReverseFinish:function(){}},u);this._Reversing=false;this._Half=false;this._UID=Math.floor(Math.random()*1e6);this.jO=n;this._noCSS=u.noCSS;this._Ang=0;this._Step_ang=u.refresh_rate/u.duration*200;this._Refresh_rate=u.refresh_rate;this._Duration=u.duration;this._Depth=u.depth;this._Color_target_is_rgba=u.color_target.substr(0,5)=="rgba(";this._Color=n.css("background-color");this._Color_target_alpha=this._Color_target_is_rgba?u.color_target.substr(3,u.color_target.length-4).split(",")[3]>>>0:1;this._Color_alpha=/^transparent$/i.test(""+this._Color)?0:this._Color.substr(0,5)=="rgba("?this._Color.substr(3,this._Color.length-4).split(",")[3]>>>0:1;this._Color_target=this.convertColor(u.color_target);this._Color=this.convertColor(this._Color);this._Direction=u.direction.toUpperCase();this._Light=u.light;this._Content=typeof u.content=="object"?u.content.html():u.content;this._Recto_color=this._Color;this._Verso_color=this._Color_target;this._Recto=u.recto!==a?u.recto:this.jO.html();this._Verso=u.verso!==a?u.verso:this._Content;this._Before=u.onStart;this._During=u.onAnimation;this._Midway=u.onMidway;this._After=u.onFinish;this._RBefore=u.onReverseStart;this._RDuring=u.onReverseAnimation;this._RMidway=u.onReverseMidway;this._RAfter=u.onReverseFinish;this._nW=this.jO.width();this._nH=this.jO.height();this._W=this.jO.outerWidth();this._H=this.jO.outerHeight();u=null};e.fn.flippy=function(t){return this.each(function(){$t=e(this);if(!$t.hasClass("flippy_active")){var n=new u($t,t);n.animate()}})};e.fn.flippyReverse=function(){return this.each(function(){$t=e(this);if(!$t.hasClass("flippy_active")){var t=$t.data("_oFlippy_");t.animate(true)}})}})(jQuery);

jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}})

function updateVidSize(){
    mediaAspect = 16 / 9;
    var windowW = $(window).width();
    var windowH = $(window).height();
    var windowAspect = windowW / windowH;
    $('.home_video_holder').css('left', 0);
    if ((windowAspect < mediaAspect) && (windowW > 900)) {
        videoH = windowH * mediaAspect;
        videoW = windowW * mediaAspect;
        videoL = (videoW - windowW) / 2;
        videoT = (videoH - windowH) / 2;
        $('.home_video_holder').height(videoH);
        $('.home_video_holder').width(videoW);
        $('.home_video_holder').css('left', -videoL);
    } else if (windowAspect < mediaAspect) {
        videoW = windowH * mediaAspect;
        $('.home_video_holder').height(windowH);
        $('.home_video_holder').width(videoW);
    } else {
        $('.home_video_holder').height(windowH);
        $('.home_video_holder').width(windowW);
    }
}

function stickyNav(){
    var stickyNavTop = $('.header').height();
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
        $('.header').addClass('scroll');
    } else {
        $('.header').removeClass('scroll');
    }
}

function distanceTop(element){
    var scrollTop = $(window).scrollTop(),
    elementOffset = $(element).offset().top,
    distance = (elementOffset - scrollTop) - 74;
    return distance;
}

function heroFade(){
    var scrolled = $(window).scrollTop();
    var headerH = $('.home_header').height();
    var heroH = $('.hero_content').height();
    var navH = $('.logo').height();

    var heroT = (scrolled / 2) + navH - 21;
    var heroOpacity = (headerH - scrolled - navH - heroH - 100) / heroH;
    $('.hero_content').css('top', heroT+'px');

    if (heroT < 25) {
        $('.hero_content').css('opacity', '1');
    } else {
        $('.hero_content').css('opacity', heroOpacity);
    }

    if (heroT > 50) {
        $('.home_scroll').css('opacity', 0);
    } else {
        $('.home_scroll').css('opacity', 1);
    }
}

function equal_column_height(column){
    $(column).css("height", "auto");
    var tallest = 0;
    $(column).each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    $(column).height(tallest);
}

function stickySubNav(){
    var stickySubNavTop = $('.page_subnav').offset().top - $(window).scrollTop();
    var pageHeadHeight = $('.page_header').height() - 74;
    var windowTop = $(window).scrollTop();
    if (stickySubNavTop < 75 && windowTop > pageHeadHeight) {
        $('.page_subnav').addClass('sticky');
        $('.page_content_holder').addClass('sticky');
		$('.page_content_holder .next_post').css('position', 'fixed');
		$('.page_content_holder .prev_post').css('position', 'fixed');
    } else {
        $('.page_subnav').removeClass('sticky');
        $('.page_content_holder').removeClass('sticky');
		$('.page_content_holder .next_post').css('position', 'absolute');
		$('.page_content_holder .prev_post').css('position', 'absolute');
    }
}

function zoomScrolls(){
    $('[class^="zoom_section"]').each(function () {
        var zoomTop = $(this).offset().top + $(this).height();
        var fromTop = $(window).scrollTop() + $(window).height();
        if (zoomTop < fromTop) {
            $(this).find('.zoom_img').stop().animate({opacity: 1}, 600);
            $(this).find('.zoom_text').stop().animate({opacity: 1}, 600);
            $(this).find('.zoom_arrow').stop().animate({opacity: 1}, 600);
        }
    });
}

function fadeInScrolls(){
    $('.fade_in').each(function () {
        var zoomTop = $(this).offset().top;
        var fromTop = $(window).scrollTop() + $(window).height();
        if (zoomTop < fromTop) {
            $(this).stop().delay('300').animate({opacity: 1}, 600);
        }
    });
}

function gravityLabels(){
    $('.contact_form li.gfield .gfield_label').click(function(){
        $(this).next('.ginput_container').find('input[type="text"], textarea').focus();
    })

    $('.contact_form .ginput_container input[type="text"], .contact_form .ginput_container textarea').focus(function(){
        $(this).closest('.ginput_container').prev('.gfield_label').hide();
    }).blur(function(){
        if( $(this).val() == "" ){
            $(this).closest('.ginput_container').prev('.gfield_label').show();
        }
    })
    $('.contact_form .ginput_container input[type="text"], .contact_form .ginput_container textarea').each(function(){
        if( $(this).val() != "" ){
            $(this).closest('.ginput_container').prev('.gfield_label').hide();
        }
    })
}

function blogResizer(){
    $('.blog_post').css("height", "auto");
    $('.blog_post_excerpt').css("height", "auto");
    var tallest = 0;
    $('.blog_post').each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    
    $('.blog_post').height(tallest);
    
    $('.blog_post').each(function() {
        var thisHeight = $(this).height();
        var imgHeight = $(this).find('img');
        imgHeight = imgHeight.height();
        var excerptHeight = thisHeight - imgHeight - 60;
        $(this).find('.blog_post_excerpt').height(excerptHeight);
    });
}

$(document).ready(function(){
    $(".nav_toggle").click(function(){
        $('.nav').slideToggle();
    });
    $(window).load(function(){
        stickyNav();
    });
    $(window).scroll(function(){
        stickyNav();
    });

	// Target Mac or Windows
    if (navigator.appVersion.indexOf("Mac")!=-1) {
        $('body').addClass('mac');
    } else {
        $('body').addClass('pc');
    }

    //Homepage hero fader
    if ($('.home_video_holder').length && $(".touch-device").length < 1) {
        $(window).scroll(function(){
            heroFade();
        });
        $(window).resize(function(){
            heroFade();
        });
    }

    //Resizing main video
    if ($('.main_video').length) {
        $(window).load(function(){
            updateVidSize();
        });
        $(window).resize(function(){
            updateVidSize();
        });
    }

    //Homepage hero and site wide fade in areas
    if ($('.home_header').length) {
        $(window).load(function(){
            //$('.header').animate({opacity: 1}, 500);
            //$('.hero_graphic').delay(300).animate({opacity: 1}, 500);
            //$('.hero_content h2').delay(600).animate({opacity: 1}, 750);
            //$('.hero_content p').delay(600).animate({opacity: 1}, 750);
            //$('.hero_content a').delay(900).animate({opacity: 1}, 250);
            //if($(".touch-device").length < 1){setTimeout(heroFade, 1100);}
            //setTimeout(fadeInScrolls, 1100);

        });
    } else if ($('.page_hero_container').length) {
        $(window).load(function(){
            //$('.header').animate({opacity: 1}, 500);
            //$('.page_hero_content h2').delay(300).animate({opacity: 1}, 500);
            //$('.page_hero_content .hr').delay(600).animate({opacity: 1, width: 40}, 250);
            //$('.page_hero_content p').delay(900).animate({opacity: 1}, 500);
            //setTimeout(fadeInScrolls, 1100);
        });
    } else if ($('.work_header_container').length) {
        $(window).load(function(){
            //$('.header').animate({opacity: 1}, 500);
            //$('.work_img').animate({opacity: 1}, 500);
            //$('.work_head_content h2').delay(300).animate({opacity: 1}, 500);
            //$('.work_head_content .hr').delay(600).animate({opacity: 1, width: 40}, 250);
            //$('.work_head_content p').delay(900).animate({opacity: 1}, 500);
            $('.main_img').animate({opacity: 1}, 500);
            $('.main_img').animate({top: 0}, 750, 'easeOutCubic');

			$('.macbook_img, .iphone_img').animate({opacity: 1}, 500);
            $('.macbook_img').animate({marginRight: 0}, 750, 'easeOutCubic');
            $('.iphone_img').animate({marginLeft: 0}, 750, 'easeOutCubic');
            //setTimeout(fadeInScrolls, 1400);
        });
    } else if ($('.fade_in').length) {
        $(window).load(function(){
            fadeInScrolls();
        });
    }

    if ($('.fade_in').length) {
        $(window).scroll(function(){
            fadeInScrolls();
        });

        $(window).resize(function(){
            fadeInScrolls();
        });
    }

    //Project slide cycle on homepage
    if ($('.project_slider').length) {
        $('.project_slider').cycle({
            fx: 'carousel',
            speed: 600,
            timeout: 6000,
            slides: '> .project_slide',
            carouselVisible: 3,
            carouselFluid: true,
            swipe: true,
            pager: '.slide_mobile_pager',
            pauseOnHover: true,
			startingSlide: 7
        });

        $('.next_slide').click(function(){
            $('.project_slider').cycle('next');
        });
        $('.prev_slide').click(function(){
            $('.project_slider').cycle('prev');
        });
    }

    //Subnav dropdowns
    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        jQuery(".page_subnav ul li").click(function(){});
    }

    //Contact Map
    if ($('#map').length) {
        var map;
        function contact_map() {
            var mapOptions = {
                zoom: 14,
                backgroundColor: '#FFFFFF',
                center: new google.maps.LatLng(54.971308, -1.597238),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: true,
                streetViewControl: true,
                zoomControl: true,
                mapTypeControl: true,
                scrollwheel: false
            };
            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            var myIcon = new google.maps.MarkerImage(theme_url + '/img/contact-pin.png', null, null, null, new google.maps.Size(62,68));
            var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(54.969971, -1.581816),
                icon: myIcon
            });
        }
        contact_map();
    }

    //Gravity forms custom placeholders
    gravityLabels();

    //File upload fields
    $('.gf_file input').change(function(e) {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $('.gf_file .ginput_container p.current_file').remove();
        $('.gf_file .ginput_container').append('<p class="current_file">' + filename + '</p>');
    });

    //Scroll Links
    $('.scrollTo').click(function(){
        var id = $(this).attr("href");
        anchor_check = id.substr(0,1)
        if(anchor_check == '#') {
            $('html, body').animate({
                scrollTop: $(id).offset().top - 108
            }, 750);
        }
        return false;
    });

    //Subnav dropdowns
    $('.sub_parent').click(function(){
        var dropdown = $(this).attr('data-show');
        dropdown = '.' + dropdown + '_subnav';

        if ($(dropdown).is(':hidden')){
            if ($('.subnav_dropdown').is(':visible')){
                $('.subnav_dropdown').stop().slideUp();
            }
            $('.sub_parent').removeClass('active_dropdown');
            $(this).toggleClass('active_dropdown');
            $(dropdown).stop().slideDown();
        } else {
            $(this).toggleClass('active_dropdown');
            $(dropdown).stop().slideToggle();
        }
        return false;
    });
    
    //Blog page
    if ($('.blog_posts').length) {
        $(window).load(function(){
            blogResizer();
        });

        $(window).resize(function(){
            blogResizer();
        });
    }

    //Work zooms
    if ($('.zoom_section').length && $(".touch-device").length < 1) {
        $(window).load(function(){
            zoomScrolls();
        });
        $(window).scroll(function(){
            zoomScrolls();
        });
    }

    if ($('.single_post blockquote, .general_post blockquote').length) {
        $('blockquote').append('<div class="hr"></div>');
    }

    //View more work
    $(".view_more_work").click(function(e){
        e.preventDefault();
        var MyAjax = {
            ajaxurl: site_url+"/wp-admin/admin-ajax.php"
        };
        $(this).hide();
        $(".more_work_holder").addClass('loading_work');
        $(".more_work_holder").css('min-height', '46px');
        $.post(
            MyAjax.ajaxurl,
            {
                action : 'load_more_work'
            },
            function(response) {
                $(".more_work_holder").html(response);
                $(".more_work_holder").delay('300').removeClass('loading_work');
                $(".more_work_holder").delay('300').addClass('more_work_active');
                $(".more_work_item").delay('300').fadeIn();
            }
        );
    });

    //Work page fades
    $(document).on({
        mouseenter: function() {
			$('.work_item_info').not(this).stop().fadeTo('fast', 0.4);
        },
        mouseleave: function() {
			$('.work_item_info').stop().fadeTo('fast', 0.99);
        }
    }, '.work_item_info' );


    //Plan your project
    $(".plan_your_project, .get_in_touch_btn").click(function(){
        $('.plan_your_project_wrapper').css('display', 'block');
        $('.plan_your_project_wrapper').css('bottom', '');
        $('.plan_your_project_wrapper').animate({top: 0}, 500);

        setTimeout( function(){
            $('.plan_your_project_wrapper').css('position', 'static');
            $('.site_wrapper').css('display', 'none');
            window.scrollTo(0, 0);
        },750);

        return false;
    });

    $(".close_plan_your_project").click(function(){
        $('.page_subnav').removeClass('sticky');
        $('.page_content_holder').removeClass('sticky');
        $('.plan_your_project_wrapper').css('position', 'fixed');
        $('.plan_your_project_wrapper').animate({top: '100%'}, 500);
        $('.site_wrapper').fadeIn(750);

        setTimeout( function(){
            $('.plan_your_project_wrapper').css('display', 'none');
        },750);
        return false;
    });

    //Contact video/basic directions
    $(".video_btn").click(function(){
        $('.contact_info').animate({top: '-500px', opacity: 0}, 500);
        setTimeout(function(){
        $('.contact_info').hide();
        $('.basic_directions').hide();
        }, 300);

        $('.video_directions').animate({top: '0', opacity: 1}, 750);
        return false;
    });

    $(".basic_btn").click(function(){
        $('.contact_info').animate({top: '-500px', opacity: 0}, 500);
        setTimeout(function(){
        $('.contact_info').hide();
        $('.video_directions').hide();
        }, 300);

        $('.basic_directions').animate({top: '0', opacity: 1}, 750);
        return false;
    });

    $(".video_close").click(function(){
        $('.video_directions').animate({top: '600px', opacity: 0}, 500);

        setTimeout(function(){
        $('.contact_info, .basic_directions').show();
        }, 300);
        $('.contact_info').animate({top: '0', opacity: 1}, 750);
        return false;
    });

    $(".basic_close").click(function(){
        $('.basic_directions').animate({top: '600px', opacity: 0}, 500);

        setTimeout(function(){
        $('.contact_info, .video_directions').show();
        }, 300);
        $('.contact_info').animate({top: '0', opacity: 1}, 750);
        return false;
    });

    //Mobile subnavs
    $(".parent_link").click(function(){
        if ($('.nav_toggle_holder').is(':visible')){
            $(this).next('ul').stop().slideToggle();
            $(this).toggleClass('active_parent');
            $(this).find('i').toggleClass('icon-up-open', 'icon-down-open');
            return false;
        }
    });
    /*
    //Ajax about/services content
    $('body').on('click','.about_subnav li a, .services_subnav li a, .service_link, .services_overview_content a',function(e){
        if($(".mobile-device").length < 1) { navOffest = 208 } else { navOffest = 0 }
        e.preventDefault();
        var loadPage = $(this).attr('href');
        var pageTitle = $(this).attr('rel');
        var curClass = $(this).attr('class');
        var MyAjax = {
            ajaxurl: site_url+"/wp-admin/admin-ajax.php"
        };
        $('html, body').animate({
            scrollTop: $('.page_content_holder').offset().top - navOffest
        }, 500);
        var curHeight = $('.page_content_holder').height();
        $('.page_content_holder').height(curHeight);
        $('.page_content_holder').children().fadeOut(function(){
            $('.page_content_holder').html('');
            $('.page_content_holder').addClass('loading_content');
        });
        if (curClass != 'service_link') {
            $('.about_subnav li a, .services_subnav li a').removeClass('active');
            $(this).addClass('active');
        }
        $.post(
            MyAjax.ajaxurl,
            {
                action : 'subpage_loader',
                loadPage : loadPage,
                siteUrl : site_url
            },
            function(response) {
                $('.page_content_holder').height('auto')
                $('.page_content_holder').html(response);
                $('.page_content_holder').removeClass('loading_content');
                if(loadPage!=window.location){
                    window.history.pushState({url:loadPage},pageTitle,loadPage);
                }
                $('title').html(pageTitle);
                fadeInScrolls();
                gravityLabels();
                accordions();
            }
        );
    });

    //Ajax content on back button on about/services
    $(window).bind('popstate', function(event){
        var state = event.originalEvent.state.url;
        ajaxGoBack(state);
    });

    var curURL = window.location.href;
    window.history.replaceState({url:curURL},'',curURL);

    function ajaxGoBack(loadPage){
        if($(".mobile-device").length < 1) { navOffest = 208 } else { navOffest = 0 }
        var MyAjax = {
            ajaxurl: site_url+"/wp-admin/admin-ajax.php"
        };
        $('html, body').animate({
            scrollTop: $('.page_content_holder').offset().top - navOffest
        }, 500);
        $('.about_subnav li a, .services_subnav li a').removeClass('active');
        var curHeight = $('.page_content_holder').height();
        $('.page_content_holder').height(curHeight);
        $('.page_content_holder').children().fadeOut(function(){
            $('.page_content_holder').html('');
            $('.page_content_holder').addClass('loading_content');
        });
        $.post(
            MyAjax.ajaxurl,
            {
                action : 'subpage_back',
                loadPage : loadPage,
                siteUrl : site_url
            },
            function(response) {
                $('.page_content_holder').height('auto')
                $('.page_content_holder').html(response.content);
                $('.page_content_holder').removeClass('loading_content');
                if(loadPage!=window.location){
                    window.history.pushState({url:loadPage},response.title,loadPage);
                }
                $('title').html(response.title);
                fadeInScrolls();
                gravityLabels();
                accordions();
            },
            'json'
        );
    }
    */
    //About/Services Subnav
    if ($('.about_subnav').length && $(".touch-device").length < 1) {
        $(window).load(function(){
            stickySubNav();
        });
        $(window).scroll(function(){
            stickySubNav();
        });
    };

    if ($('.services_subnav').length && $(".touch-device").length < 1) {
        $(window).load(function(){
            stickySubNav();
        });
        $(window).scroll(function(){
            stickySubNav();
        });
    };

    //Accordions
    function accordions(){
        if ($('.accordion_holder').length) {
            $('.accordion_content').hide();
            if(window.location.hash) {
                var hash = window.location.hash;
                var id = hash.substring(1);
                jQuery('#'+id).next().slideToggle(function(){
                    jQuery('html, body').animate({
                        scrollTop: jQuery(this).prev().offset().top - 145
                    }, 500);
                });
                $('#'+id).find('i').toggleClass('icon-down-open icon-up-open');
            }
            $('.accordion_title').click(function(){
                if( jQuery(this).next().is(':hidden') ) {
                    $(this).next().slideToggle(function(){
                        jQuery('html, body').animate({
                            scrollTop: jQuery(this).prev().offset().top - 145
                        }, 500);
                    });
                    $(this).find('i').toggleClass('icon-down-open icon-up-open');
                } else {
                    $(this).next().slideToggle();
                    $(this).find('i').toggleClass('icon-down-open icon-up-open');
                }
                return false;
            });
        }
    }
    accordions();

   jQuery(document).bind('gform_post_render', function(){
       gravityLabels();
    });

    $('.back_to_top a').click(function(){
        jQuery('html, body').animate({
            scrollTop: $('#top').position().top
        }, 500);
        return false;
    });

	//Team members
    if ($('.team_members').length) {
        $('.team_members').cycle({
            fx: 'carousel',
            speed: 300,
            timeout: 0,
            slides: '> .team_member',
            swipe: true,
            pauseOnHover: true
        });
    }

     $('.next_member').click(function(){
        $('.team_members').cycle('next');
        return false;
    });
    $('.prev_member').click(function(){
        $('.team_members').cycle('prev');
        return false;
    });
	
	$('.team_members_wrapper, .next_member a, .prev_member a').mouseenter(function(){
		$('.team_members').cycle('pause');
    });
    
    $('.team_members_wrapper, .next_member a, .prev_member a').mouseleave(function(){
		$('.team_members').cycle('resume');
    });
    
    //Whaca-the-staff
    var intervals;
    var score = 0;
    var time = 20;
    var play = true;
    var timeIntervals;
    
    function whacGameLaunch(){
        $('.whac_member img').css('bottom','-200px');
        setTimeout(popUp, 300);
        intervals = setInterval(popUp, 2000);
        timeIntervals = setInterval(countDown, 1000);
    }
    
    function popUp(){
        if(play){
            $('.whac_member img').css('bottom','-200px');
            $('.whac_member').removeClass('active');
            var random = Math.floor(Math.random() * $('.whac_member').length);
            $('.whac_member').eq(random).addClass('active');
        }
    }
    
    function countDown(){
        time--;
        $('.current_time').html(time);
        if (time <= 0) {
            clearInterval(timeIntervals);
            clearInterval(intervals);
            finishGame();
        }
    }
    
    function finishGame(){
        $('.whac_member').removeClass('active');
        $('.whac_staff').removeClass('playing');
        $('.whac_staff').addClass('finished');
        $('.whac_member img').css('bottom','0');
        play = false;
        captureWhacDB();
    }
    
    $('body').on('click','.active',function(e){
        $('.whac_member').removeClass('active');
        $('.whac_member img').css('bottom','-200px');
        clearInterval(intervals);
        intervals = setInterval(popUp, 2000);
        setTimeout(popUp, 400);
        score++;
        $('.current_score').html(score);
    });
    
    $('.whac_staff_link').click(function(){
        $('.team_members, .whac_staff_link').hide();
        $('.whac_staff').show();
        setTimeout(whacGameLaunch, 400);
        return false;
    });
    
    $(".whac_staff_reset").hide();
    $(".submit_score").hide();
    $(".score_board").hide();
    
    function captureWhacDB(){
        $(".submit_score").show();
        $(".submit_score form").submit(function(){
            if(name != ""){
                var name = $('input[name="name"]').val();
                var email = $('input[name="email"]').val();
                insertWhacDB(name, email);
            }
            return false;
        });
    }
    
    function restartWhac(){
        score = 0;
        time = 20;
        play = true;
        $('.whac_staff').addClass('playing');
        whacGameLaunch();
    }

    function insertWhacDB(name, email){
        var MyAjax = {
            ajaxurl: site_url+"/wp-admin/admin-ajax.php"
        };        
        $.post(
            MyAjax.ajaxurl,
            {
                action : 'insertWhacScore', //function name;
                score : score,
                name : name,
                email : email
            },
            function(response) {
                $(".submit_score").hide();
                $(".score_board .board").html(response);
                $(".score_board").show(); 
                $(".whac_staff_reset").show();
                $(".submit_score form").unbind();
            },
            'json'          
        );       
    }
    
    $('.whac_staff_reset').click(function(){
        restartWhac();
        return false;
    });
    
});