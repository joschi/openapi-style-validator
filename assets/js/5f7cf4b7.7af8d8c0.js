(self.webpackChunk=self.webpackChunk||[]).push([[550],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(o),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return o?n.createElement(d,i(i({ref:t},c),{},{components:o})):n.createElement(d,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4149:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=o(4034),a=o(9973),r=(o(7294),o(3905)),i=["components"],s={id:"faq-contributing",title:"FAQ: Contributing"},l=void 0,u={unversionedId:"faq-contributing",id:"faq-contributing",isDocsHomePage:!1,title:"FAQ: Contributing",description:"Automated checks on my PR have failed. Do you know what's wrong?",source:"@site/../docs/faq-contributing.md",sourceDirName:".",slug:"/faq-contributing",permalink:"/docs/faq-contributing",editUrl:"https://github.com/OpenAPITools/openapi-style-validator/edit/master/website/../docs/faq-contributing.md",version:"current",lastUpdatedBy:"Jean-Fran\xe7ois C\xf4t\xe9",lastUpdatedAt:1591877674,formattedLastUpdatedAt:"6/11/2020",frontMatter:{id:"faq-contributing",title:"FAQ: Contributing"},sidebar:"faq-sidebar",previous:{title:"FAQ: General",permalink:"/docs/faq"}},c=[{value:"Automated checks on my PR have failed. Do you know what&#39;s wrong?",id:"automated-checks-on-my-pr-have-failed-do-you-know-whats-wrong",children:[]},{value:"Who should I report a security vulnerability to?",id:"who-should-i-report-a-security-vulnerability-to",children:[]},{value:"How can I rebase my PR on the latest master?",id:"how-can-i-rebase-my-pr-on-the-latest-master",children:[]},{value:"How can I update commits that are not linked to my Github account?",id:"how-can-i-update-commits-that-are-not-linked-to-my-github-account",children:[]},{value:"Any useful git tips to share?",id:"any-useful-git-tips-to-share",children:[]},{value:"How can I submit a PR to fix bugs or make enhancements?",id:"how-can-i-submit-a-pr-to-fix-bugs-or-make-enhancements",children:[]}],p={toc:c};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"automated-checks-on-my-pr-have-failed-do-you-know-whats-wrong"},"Automated checks on my PR have failed. Do you know what's wrong?"),(0,r.kt)("p",null,"Please do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the failed tests and check the log to see what's causing the errors."),(0,r.kt)("li",{parentName:"ul"},"If it's related to connection timeout in downloading dependencies, please restart the CI jobs (which can be done by closing and reopening the PR)"),(0,r.kt)("li",{parentName:"ul"},"If it's some other reason, please tag someone on the ",(0,r.kt)("a",{parentName:"li",href:"/docs/core-team"},"core team")," for assistance.")),(0,r.kt)("h2",{id:"who-should-i-report-a-security-vulnerability-to"},"Who should I report a security vulnerability to?"),(0,r.kt)("p",null,"Please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:team@openapitools.org"},"team@openapitools.org")," with the details and we'll follow up with you."),(0,r.kt)("h2",{id:"how-can-i-rebase-my-pr-on-the-latest-master"},"How can I rebase my PR on the latest master?"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"http://rypress.com/tutorials/git/rebasing"},"http://rypress.com/tutorials/git/rebasing"),', or follow the steps below (assuming the branch for the PR is "fix_issue_9999"):'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"git checkout master"),(0,r.kt)("li",{parentName:"ol"},"git pull upstream master (assuming ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream")," is pointing to the official repo)"),(0,r.kt)("li",{parentName:"ol"},"git checkout fix_issue_9999"),(0,r.kt)("li",{parentName:"ol"},"git rebase master"),(0,r.kt)("li",{parentName:"ol"},'Resolve merge conflicts, if any, and run "git commit -a"'),(0,r.kt)("li",{parentName:"ol"},"Rebase done (you may need to add --force when doing ",(0,r.kt)("inlineCode",{parentName:"li"},"git push"),")")),(0,r.kt)("p",null,"(To setup ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream")," pointing to the official repo, please run ",(0,r.kt)("inlineCode",{parentName:"p"},"git remote add upstream  https://github.com/openapitools/openapi-style-validator.git"),")"),(0,r.kt)("h2",{id:"how-can-i-update-commits-that-are-not-linked-to-my-github-account"},"How can I update commits that are not linked to my Github account?"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/3042437/how-to-change-the-commit-author-for-one-specific-commit"},"https://stackoverflow.com/questions/3042437/how-to-change-the-commit-author-for-one-specific-commit")," or you can simply add the email address in the commit as your secondary email address in your Github account."),(0,r.kt)("h2",{id:"any-useful-git-tips-to-share"},"Any useful git tips to share?"),(0,r.kt)("p",null,"Yes, ",(0,r.kt)("a",{parentName:"p",href:"http://www.alexkras.com/19-git-tips-for-everyday-use/"},"http://www.alexkras.com/19-git-tips-for-everyday-use/")),(0,r.kt)("h2",{id:"how-can-i-submit-a-pr-to-fix-bugs-or-make-enhancements"},"How can I submit a PR to fix bugs or make enhancements?"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openapitools/openapi-style-validator"},"https://github.com/openapitools/openapi-style-validator"),' and then click on the "Fork" button in the upper right corner. Then in your local machine, run the following (assuming your github ID is "your_user_id")'),(0,r.kt)("p",null,"1) git clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/your_user_id/openapi-style-validator.git"},"https://github.com/your_user_id/openapi-style-validator.git"),"\n2) cd openapi-style-validator\n3) git checkout -b fix_issue9999\n4) make changes\n5) git commit -a (you may need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"git add filename")," to add new files)\n6) git push origin fix_issue9999\n7) Visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openapitools/openapi-style-validator"},"https://github.com/openapitools/openapi-style-validator")," in your browser and click on the button to file a new PR based on fix_issue9999"))}m.isMDXComponent=!0}}]);