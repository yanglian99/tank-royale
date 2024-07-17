import{_ as n,r as l,c as i,d as s,a,e as m,w as r,b as e,o}from"./app-uiI3RID_.js";const h={},c=e('<h1 id="physics" tabindex="-1"><a class="header-anchor" href="#physics"><span>Physics</span></a></h1><h2 id="measurements" tabindex="-1"><a class="header-anchor" href="#measurements"><span>Measurements</span></a></h2><h3 id="time-measurement" tabindex="-1"><a class="header-anchor" href="#time-measurement"><span>Time measurement</span></a></h3><p>Robocode is turn-based, and hence time is measured in turns. With each turn, each bot receives new information and events about what is going on in the arena. And with each turn, the bot needs to send new commands to the server.</p><p>A battle has one or more rounds, for example, 10 rounds. Turns and rounds are measured are provided as a number. Rounds start at round number 1, and each round starts with turn number 1.</p><h3 id="distance-measurement" tabindex="-1"><a class="header-anchor" href="#distance-measurement"><span>Distance measurement</span></a></h3><p>Distance in Robocode is measured as <em>units</em> which are floating-point numbers using double precision.</p><h2 id="movement" tabindex="-1"><a class="header-anchor" href="#movement"><span>Movement</span></a></h2><h3 id="acceleration-a" tabindex="-1"><a class="header-anchor" href="#acceleration-a"><span>Acceleration (a)</span></a></h3><p>Bots accelerate at the rate of 1 unit per turn but decelerate at the rate of 2 units per turn. Hence, the bot is twice as fast at braking than gaining speed. Robocode determines acceleration for your bot, based on the speed or distance that is set as target for the bot.</p><h3 id="speed-velocity-v" tabindex="-1"><a class="header-anchor" href="#speed-velocity-v"><span>Speed / velocity (v)</span></a></h3><p>The speed (velocity) equation is:</p>',12),p=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"v"),s("mo",null,"="),s("mi",null,"a"),s("mo",null,"×"),s("mi",null,"t")]),s("annotation",{encoding:"application/x-tex"},"v = a × t")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6151em"}}),s("span",{class:"mord mathnormal"},"t")])])])],-1),d=s("p",null,"Hence speed = acceleration × time, or deceleration × time.",-1),u=s("h4",{id:"maximum-speed",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#maximum-speed"},[s("span",null,"Maximum speed")])],-1),g=s("p",null,"The speed can never exceed 8 units per turn. Note that technically, velocity is a vector, but in Robocode we simply assume the direction of the vector to be the bot´s heading.",-1),b=s("h3",{id:"distance-d",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#distance-d"},[s("span",null,"Distance (d)")])],-1),y=s("p",null,"The distance formula is:",-1),v=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"d"),s("mo",null,"="),s("mi",null,"v"),s("mi",null,"t")]),s("annotation",{encoding:"application/x-tex"},"d = vt")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6151em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"t")])])])],-1),f=s("p",null,"Hence, distance = speed × time.",-1),w=s("h2",{id:"rotation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rotation"},[s("span",null,"Rotation")])],-1),x=s("p",null,"Rotation is measured in degrees in Robocode.",-1),_=s("h3",{id:"bot-base-rotation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bot-base-rotation"},[s("span",null,"Bot base rotation")])],-1),k=s("p",null,"If standing still (0 units/turn), the maximum rate is 10° per turn. But the turn rate of a bot is limited by its speed.",-1),M=s("p",null,"The maximum rate of rotation is:",-1),T=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"10"),s("mo",null,"−"),s("mfrac",null,[s("mn",null,"3"),s("mn",null,"4")]),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"v"),s("mi",{mathvariant:"normal"},"∣")]),s("annotation",{encoding:"application/x-tex"},"10 - \\frac{3}{4}|v|")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"4")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"3")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord"},"∣")])])])],-1),z=e('<p>This means that the faster you&#39;re moving, the slower you turn.</p><p>If moving with a max. speed of 8 units/turn, the maximum rate of rotation is only 4° per turn.</p><h3 id="gun-rotation" tabindex="-1"><a class="header-anchor" href="#gun-rotation"><span>Gun rotation</span></a></h3><p>The maximum rate of rotation is 20° per turn. This is added to the current rate of rotation of the bot.</p><h3 id="radar-rotation" tabindex="-1"><a class="header-anchor" href="#radar-rotation"><span>Radar rotation</span></a></h3><p>The maximum rate of rotation is 45° per turn. This is added to the current rate of rotation of the gun.</p><h2 id="bullets" tabindex="-1"><a class="header-anchor" href="#bullets"><span>Bullets</span></a></h2><h3 id="firepower" tabindex="-1"><a class="header-anchor" href="#firepower"><span>Firepower</span></a></h3><p>The maximum firepower is 3 and the minimum firepower is 0.1. The amount of energy used on the firepower is subtracted from the bot´s energy.</p><h3 id="bullet-damage" tabindex="-1"><a class="header-anchor" href="#bullet-damage"><span>Bullet damage</span></a></h3><p>Bullet damage depends on firepower. When a bullet hits a bot the damage is:</p>',11),B=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4"),s("mo",null,"×"),s("mi",null,"f"),s("mi",null,"i"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"p"),s("mi",null,"o"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"r")]),s("annotation",{encoding:"application/x-tex"},"4 × firepower")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er")])])])],-1),R=s("p",null,"If firepower > 1, it does additional damage:",-1),L=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2"),s("mo",null,"×"),s("mo",{stretchy:"false"},"("),s("mi",null,"f"),s("mi",null,"i"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"p"),s("mi",null,"o"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"r"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"2 × (firepower - 1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])],-1),N=s("h3",{id:"bullet-speed",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bullet-speed"},[s("span",null,"Bullet speed")])],-1),S=s("p",null,"The bullet speed (v) is constant and depends on the firepower used for firing the gun:",-1),W=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"20"),s("mo",null,"−"),s("mn",null,"3"),s("mo",null,"×"),s("mi",null,"f"),s("mi",null,"i"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"p"),s("mi",null,"o"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"r")]),s("annotation",{encoding:"application/x-tex"},"20 - 3 × firepower")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"20"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er")])])])],-1),A=s("p",null,"This means that the maximum bullet speed is 19.7 units/turn with the minimum bullet power of 0.1, and the minimum bullet speed is 11 units/turn with the maximum bullet power of 3.",-1),D=s("h3",{id:"gun-heat",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gun-heat"},[s("span",null,"Gun heat")])],-1),I=s("p",null,"The gun gets heated when fired. The amount of gun heat produced is:",-1),C=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("mi",null,"f"),s("mi",null,"i"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"p"),s("mi",null,"o"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"r")]),s("mn",null,"5")])]),s("annotation",{encoding:"application/x-tex"},"\\frac{1 + firepower}{5}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2772em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9322em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"5")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.4461em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mbin mtight"},"+"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mord mathnormal mtight"},"re"),s("span",{class:"mord mathnormal mtight"},"p"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"er")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])],-1),E=s("p",null,"Bots cannot fire if gun heat > 0. All guns start hot at the start of each round and start at 3.",-1),G=s("h3",{id:"energy-gain",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#energy-gain"},[s("span",null,"Energy gain")])],-1),H=s("p",null,"Bots get awarded by receiving energy when one of their bullets hits another bot. The amount of energy received is:",-1),V=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"3"),s("mo",null,"×"),s("mi",null,"f"),s("mi",null,"i"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"p"),s("mi",null,"o"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"r")]),s("annotation",{encoding:"application/x-tex"},"3 × firepower")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er")])])])],-1),P=e('<h2 id="collisions" tabindex="-1"><a class="header-anchor" href="#collisions"><span>Collisions</span></a></h2><p>When a bot collides with another bot or a wall, it is stopped. The exception is a bot being hit by another bot, which it is moving away from. In this case, the bot is not stopped.</p><h3 id="bot-collisions" tabindex="-1"><a class="header-anchor" href="#bot-collisions"><span>Bot collisions</span></a></h3><p>Each bot takes 0.6 damage when colliding with each other.</p><h3 id="ramming" tabindex="-1"><a class="header-anchor" href="#ramming"><span>Ramming</span></a></h3>',5),F=s("em",null,"ramming",-1),q=s("h3",{id:"wall-damage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#wall-damage"},[s("span",null,"Wall damage")])],-1),J=s("p",null,"When a bot hits a wall it will take damage depending on its speed (v):",-1),O=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"v"),s("mi",{mathvariant:"normal"},"∣")]),s("mn",null,"2")]),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"\\frac{|v|}{2} - 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.355em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.01em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.485em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"∣"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mtight"},"∣")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])],-1),U=s("p",null,"Hence, the higher speed the more damage.",-1),j=s("p",null,"Note that if the damage is negative, it is reduced to zero.",-1);function K(Q,X){const t=l("RouteLink");return o(),i("div",null,[c,p,d,u,g,b,y,v,f,w,x,_,k,M,T,z,B,R,L,N,S,W,A,D,I,C,E,G,H,V,P,s("p",null,[a("If a bot is hitting another bot by moving forward, this counts as "),F,a(", meaning that the bot is deliberately trying to hit the other bot. Both bots take damage, but a ramming bot will get a ramming kill bonus. (see more under "),m(t,{to:"/articles/scoring.html"},{default:r(()=>[a("Scoring")]),_:1}),a(").")]),q,J,O,U,j])}const Z=n(h,[["render",K],["__file","physics.html.vue"]]),$=JSON.parse('{"path":"/articles/physics.html","title":"Physics","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Measurements","slug":"measurements","link":"#measurements","children":[{"level":3,"title":"Time measurement","slug":"time-measurement","link":"#time-measurement","children":[]},{"level":3,"title":"Distance measurement","slug":"distance-measurement","link":"#distance-measurement","children":[]}]},{"level":2,"title":"Movement","slug":"movement","link":"#movement","children":[{"level":3,"title":"Acceleration (a)","slug":"acceleration-a","link":"#acceleration-a","children":[]},{"level":3,"title":"Speed / velocity (v)","slug":"speed-velocity-v","link":"#speed-velocity-v","children":[]},{"level":3,"title":"Distance (d)","slug":"distance-d","link":"#distance-d","children":[]}]},{"level":2,"title":"Rotation","slug":"rotation","link":"#rotation","children":[{"level":3,"title":"Bot base rotation","slug":"bot-base-rotation","link":"#bot-base-rotation","children":[]},{"level":3,"title":"Gun rotation","slug":"gun-rotation","link":"#gun-rotation","children":[]},{"level":3,"title":"Radar rotation","slug":"radar-rotation","link":"#radar-rotation","children":[]}]},{"level":2,"title":"Bullets","slug":"bullets","link":"#bullets","children":[{"level":3,"title":"Firepower","slug":"firepower","link":"#firepower","children":[]},{"level":3,"title":"Bullet damage","slug":"bullet-damage","link":"#bullet-damage","children":[]},{"level":3,"title":"Bullet speed","slug":"bullet-speed","link":"#bullet-speed","children":[]},{"level":3,"title":"Gun heat","slug":"gun-heat","link":"#gun-heat","children":[]},{"level":3,"title":"Energy gain","slug":"energy-gain","link":"#energy-gain","children":[]}]},{"level":2,"title":"Collisions","slug":"collisions","link":"#collisions","children":[{"level":3,"title":"Bot collisions","slug":"bot-collisions","link":"#bot-collisions","children":[]},{"level":3,"title":"Ramming","slug":"ramming","link":"#ramming","children":[]},{"level":3,"title":"Wall damage","slug":"wall-damage","link":"#wall-damage","children":[]}]}],"git":{"updatedTime":1721032400000},"filePathRelative":"articles/physics.md"}');export{Z as comp,$ as data};
