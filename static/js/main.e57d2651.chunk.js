(this["webpackJsonpspacex-travelers"]=this["webpackJsonpspacex-travelers"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(17),a=n.n(s),i=n(8),o=n(16),l=n(2),d=(n(36),n(47)),u=n(48),j=n(49),p=n(50),h=n(3),b=n(25),O=n(7),m=n.n(O),f=n(9),A=function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.spacexdata.com/v3/missions"));case 2:return t=e.sent,e.prev=3,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),x=A,v="missionsStore/missions/SET_MISSIONS",k="missionsStore/missions/JOIN_MISSION",N="missionsStore/missions/EXIT_MISSION",y=[],g=function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:(n=e.sent)&&n.forEach((function(e){var n=e.mission_id,c=e.mission_name,r=e.description;t({type:v,payload:{id:n,name:c,description:r,reserved:!1}})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return[].concat(Object(b.a)(e),[t.payload]);case k:return e.map((function(e){return e.id!==t.payload?e:Object(h.a)(Object(h.a)({},e),{},{reserved:!0})}));case N:return e.map((function(e){return e.id!==t.payload?e:Object(h.a)(Object(h.a)({},e),{},{reserved:!1})}));default:return e}},T=(n(38),n(1)),E=function(){var e=Object(i.c)((function(e){return e.missionsReducer})),t=Object(i.b)();return Object(c.useEffect)((function(){e.length||t(g())}),[]),Object(T.jsx)("div",{children:Object(T.jsx)(d.a,{className:"bg-container p-0",children:Object(T.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Mission"}),Object(T.jsx)("th",{children:"Description"}),Object(T.jsx)("th",{children:"Status"}),Object(T.jsx)("th",{children:"  "})]})}),Object(T.jsx)("tbody",{children:e.map((function(e){var n=e.id,c=e.name,r=e.description,s=e.reserved;return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)("p",{className:"fw-bold",children:c})}),Object(T.jsx)("td",{children:Object(T.jsx)("p",{children:r})}),Object(T.jsxs)("td",{className:"align-middle",children:[s&&Object(T.jsx)(j.a,{bg:"info",children:"ACTIVE MEMBER"}),!s&&Object(T.jsx)(j.a,{bg:"secondary",children:"NOT A MEMBER"})]}),Object(T.jsxs)("td",{className:"col-2 align-middle text-center",children:[s&&Object(T.jsx)(p.a,{size:"sm",variant:"danger",onClick:function(){return t({type:N,payload:n})},children:"Leave Mission"}),!s&&Object(T.jsx)(p.a,{size:"sm",variant:"outline-success",onClick:function(){return t({type:k,payload:n})},children:"Join Mission"})]})]},n)}))})]})})})},R=(n(40),function(e){var t=e.title,n=e.routes;return Object(T.jsx)("nav",{className:"navBar",children:Object(T.jsxs)("ul",{className:"nav-list",children:[Object(T.jsx)("li",{className:"brand",children:Object(T.jsxs)(o.b,{to:"/",className:"nav-brand",children:[Object(T.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAA7EAAAOxAfWD7UkAAA3uSURBVHja5Z17gE3VHsc/8yDPNJO3kleSJok8LtNDxs2zK90ZlWeKRCg1ZlSjuHTHq8hNSLlRbkbyqpmibilEyDOKUELEVZNBzGPfP846a9be55w5e+9z5rz67X9m9l6P/Vt7rfV7fX/rQHhQTQbxDrs5QxEXOMFGZtOby/lTUBfWU4Tm5jrPmyRENvNt+dIt68VXIa9TNTKZj2I0l3TMXuQIG9nFScMgHOfOyGO/DEsVFg/yT9oQJZ9W4l4Wkief5zMw0r7+AsncKdIo67ZUNWaSL0oVMSiSBmCGZP9DriixZDtOyFlwe6Sw30my/woxXkvXZY8ofYz4SGC/AgcFQ8uUVV8SXSO3xTmRMADPCGb2UNF0nUQK0NAooHG4sx/DETEAnSzVc26a88J9AO4WjKyxWO9qLqChkUv58B6ARWIAelmu6dQbuof3AOwTWn5FyzX7igGYHg5qTm0SaEkS3ehGEq1oTi0AKlNoawE41CLHAHwUqmw3og8zyGafWK3G6w/285X4e76tHs6hoXEg9Gz5wazklBerTn9NsNXTAaE6hwzVIJVNYlJbuzJs9fcNGhr/CwXWo+lEFhfdMneSzSxhFplkkEYaz5HJq7zLNs7IMrNt9forGhqHgs/8feJbqNcR3mE0iVTysk84Sq+w0W9FUfeL4DLf28B8EV/xDM1Mt/CTWMcxlvvuEnx7oBkbdMyfIJOGFttYJureZrn3uaJmn+AwX5kXpXNCQ2Mbf6eMjXYeEfVfs7wATgqvQFA8hO34QWF+Oz1NGrKuVIlcwUgTS/UyfNg9fF73Y5Vvf5J+tpl30CzR0moL7VzF76JWwN2j8axRXNSvEudzi1eLOaDxjMka5dkSLDW4Ad8qgu5WP7U6TA7o/SZKlyVLlD/HdYFlv7V0SGqs4ko/Lqr/SiGa4WUhVGOdfIehgWX/TmF8aBSS6uO6N9IVbFf8wgkeB6qP9B9pzAos+4kyLHHehvPCjB3xnWStgEXcZYgNVOdhtimSZw7RgZ38uTJs8ZdS6iOO5Tq1KpePWchUZrKULQYTq4A2gWS/Mf+T7JdmdDaKUVK8ebt+oVGg2K/CXtHpGW4u9d6uZFIJg/AdaZwWf+/3gwg2tUO/Lzo8G7BpV4VkFnBcYTyf3bxMB6KBNnI3yhb7QDka05okknmIASSTTCeaerFDTdMEKaB6BlznjKc5ibTiWi7T3e8md4QNbHEJnhdfR1nBUOF9tEltRQRGY1xIud3SLXib8snienvdVJCi6V0/y33ft8tlllxu+WTYEZuzQjgKGy9VogusZRHTSGMoQ7iPQQxnLHP4RG6XjutNq0PQQqy0IjoTitRBQKkKPcqmaNryktRfNdKtdbAu5EPQ88QbfuZFx1wj58rV5htPlqpPXMgOQBw/m4oslpFDMNls07EStDCMUKbB4i1/4EUWsIK1rGUt2SxmFo/RkXKiXEMhzb4223Af0fAuYkN6AGIkXMb9tYcKoqTDd/27WSGzUzTQk1Cne7wIwI6i3A5hyZqirqLy3sCanDZV9ZLmQC41hBfpopUoUrao/iDhQP2kLIijLFBOWi+ahFP2Ev8vMdNgTeHzPe4BrhhqdBm/CG2vlsFlNlUu6R3iTrKZBp8ShacQLjRZvPFTtOCwZH+mfJ4q3bimPqlzAwwfYHoTGZr7Q7L/krRe2ksI9gAzjTWQoa5wou0G06dYe0kQC0RjrTmDbqgo/nRYDcB8hf2f6aCwf1LeNekXeE9UuCVsmK/HBwr7n1BTPmkvv36uWWdeLL8JCyA6LJiPJVWx9i4wRsEZ9Jc7wgXzuPLLhQn8dliw30GKNw2NrdygmD9T5f3flCVhgl5G4zQ3hcHOv0ph/hzpCjqhAZuV9BrLvNQOefRtNV7RgTNyaKAz5HIV5MI1RBiVI13sU07lJkWnxb6rPHs93IHUroZPX35UGPydp3Us9pcRLI3zkZVTBLH0E8Bqp7LzqrD0nOs+W3m62SLgRlJLXjJnMASUyjCI73W63gc0VZ5XZKKCR75Ehl03TryIynUJKVtvqGLgaGjsIEnnvLlfYA2d1932O7vNJ+RuaWx4IwzM7SRFp6I153MXJ0g7+x3+1Z7/vFSoOhnS5+s0z/RgvGtYIAN3Dm1f7wSzQc78nSeCzPx1zOS8jvntJOuYr0qmLgthH115wvcUmh6iidFBFHRJrDYkz6+nh65MZdIUVUfjNKOIBZ70fQCSgmoKV2akSIEoBl5nc4euTCXSFZC9xh9MoYp49qy4l2T/Fdr5lL/hCzVlhk6/08hjtkGWxzNOF+4sYKFOBZ4k7rf3fQnMDCDrFRjAepdcgzGGgFwtpuqAM4UscYn5vyKeNbP3IrGkyYyPpQH77pmGELbGVvobUOf1XLbEtbRw05oTY1bV3r67SbftlP56HyIzxorPi1hMa0O5FizS2X0a2bTy0OYm0YoNKMfDhhE+Vqr7/O3M56wL+iuV6rpyMfRSPPyOaZ/l9ss7yeH9O2xd23pD6cQpW0snJH4TUxSoq7PHt7jd8NWq8ASHDDmG87jWi4/A6Ruw6FD8Womj9ZUnObT3M+v1edpNDG83I13AN42YacAJ5jLFhEf3DlF6mpXXaq4om+upR3GcbYQfvTfD2eByLlAeb7hAbmPpSbYBEvsT6V6O1HDSk4ZooCmXYrE+NV0YkNeL/7P8wHodHmWN4WAcjXyy6esCYqzLBI4ZSm4gxYJZ65QBTc1W6Cidxud4QNl6zgvDwhe6nrFsdvnqRWzkMcNWBzHczfs6o0bjIgstxiWiRATgtFkZcJP8+qcV0XO5cpbPjbZ2+LZkKjklxddentVpbQ5qyHiDuatxgueV0IZZaiFqrzRXvKacbkcVX3oz9isvYg0ZWpUUXtOhe53XYaa6icpUYTBfGOZIIWtIthmSHy/aGG6u+Hvy6xcfQdLdIJu3m2qpPJ2YzDa3CdM7GO+G9Ri68h+XhPqfecHNDDFPO8UiMwWDS5ESuFjYDZOrsFBaWyXJ3RhaksZatycDFLCO0dR3U+tmphucHBqF5NDLVsplMSVINdoElZXT/3EXEaJxhi6klYCpq0cK01jnosk5XdGreIhqbgXuJIOp6zj6YJxfAhfTRXtjzBR+QBTeKH1rjysKaUOgjpgNv8j1WJcujON9j8D0QrYxmU5uwxDNmKhkAxUP9Bza+wmAXVYm0ZoKgC81AOC6y/W7RX67HHHn37zFVg9f27nFzSPFrf0VRUsmuJEIl1hFsgQw+oMelIl8puhHETF1qBg1FGXoLIf4gTOmToD4nsUM9ZC1U57uzOWom3nyBSNc9ABfKUqm73c1V+GiDjLa0RLq/iSrGUdnjymTtRnCaoNl6WR9JHVKxcD6m7QrTC6oPJFw5PTH7PWaavAty3iBZC/bVT0+d3MSaCHrGVVKrDukkdPE6m+2ynbxYrWkOdyZSaxgE3s4yB428hFZzCOToXSmiWnFZKGLmZvDsFJk3UEPSXliWpBOkfkTvgQtejCJj9mpjPt8RZmdzz02ToayQwesACAddK1UeWZbjJ7HcSsjeEsXprwo7flaLGMD/6B1QNFFx0Us2JJAnaYIsSdLnKTR1KE9/ZhMjovR4twhgptNdA/72Ww1h7SsLpKu8T3LmUEaoxnCKJ4lk7ksZh2HXWx5Vy2gH2FJ5Zht47SnYv/cBqZzL7UJa+rAp5bYvsh6ZvEgzX00XPxD5f3jtm1KOp8puBq9BD/GZt6Ty6UghJAjd/EbBaT5r8Ea3EISPUnmXpJoQwJXye8cw4dyDiSFyNw9byX/x3eKl4LvrMeoTOCorTTOtgSu08bydMBTQc4iaC7dNccDd4CCY9ydOfu/+gJB8ZFulaHUU4ovM0CUKKdePkOCwn5v6YDLDQ6Yv4McgiKeC3A6fRQTpa2Z5/fAnWlqJRMQNHJ8O5nBElVTzpc5WmKEOADb4X4FnBQYzaCX4ovcVuoGtgmbMEdRlxaVsjEUz9tKb8sDZGR79cI8r8TyfmVMKYHSyzJS+faX7B2CYXfLaU0Gb/ABK/gXI9w4wxJ1ByoeYaCfXy6GATqE8K4AnGAkqAzD3dj+G1wOLqzETJ3/eB+PScSeb1SJh3VginwmBS6Jt5mbIIYmf//B+EtPbXTQKo08XqOlT/3fwlwDPuRTH1u0RN1KDIJo7HFZDFE8IM+aKA6FTyPJcPSR9/XegUx2GVraxl2B3NxaKx79TxlEA8pzBc0Zq6zG3VR2qRdLfzcRoDxWkk4PGpSgMkVRjy6kstLNwH9DSmCVrTgZND1FN8Ozyxgn13uWB+9hV1Z7iCnlsYXlvMksJpFGGhN5mQUsY4uH+XaBRTZOGfaZpkgrq4EHTdzJnucszLqkstUHZ1shWxkVnFNrqgtDo6SDCp0ojM+9tFWfR1mhA7R7v06wiD5+jxtaoMEy084zlROB1SJT6mg0TRnIDHI4aAC7Fqs237CU8fQmIfgnla0WL1WyyBknSj1iWbGqQQK3kUQPupBIM+oTF1rp2QfERIzyIiccAzCDiKM8EWLyZpb6D0YZUhQlUAPeYPJVgnegeWnTj6aOGbrBpx/ECGlyIvPrlVhquCiVGnkDkG4CHxolczxujLwBaCJcjrklePruk2iMiKSlEj9Y3sP6z7WOyA8naizh85vcaHodZUhie5icL2ODBiqIwQky8BRNIkukT/6Ml8ydMKfxhtyxL9kpfs3JOTB3EuE0QDmOzHgdisTd351Nv9AN4DGPzD/Lb78DNOIpPuYA5znDHrLoF8JH61qk/wOQfV3/NXMvwAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOS0wOFQxMzoyMzo0MCswMDowMKEwgSAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDktMDhUMTM6MjM6NDArMDA6MDDQbTmcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",className:"App-logo",alt:"logo"}),Object(T.jsx)("h1",{className:"nav-title",children:t})]})}),n.map((function(e){var t=e.name,n=e.path;return Object(T.jsx)("li",{className:"nav-links",children:Object(T.jsx)(o.c,{className:"links",exact:"true",to:n,children:t})},n)}))]})})}),M=n(5),B=function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.spacexdata.com/v3/rockets"));case 2:return t=e.sent,e.prev=3,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",{});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),D=B,w="rocketStore/rockets/SET_ROCKETS",z="rocketStore/rockets/SET_RESERVATION",V="rocketStore/rockets/CANLCEL_RESERVATION",Z=[],G=function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:(n=e.sent)&&t({type:w,payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n=Object.entries(t.payload).map((function(e){var t=Object(M.a)(e,2),n=t[0],c=t[1];return{id:n,description:c.description,rocket_name:c.rocket_name,img:Object(M.a)(c.flickr_images,1)[0]}}));return e.concat(n);case z:return e.map((function(e){return e.id!==t.payload?e:Object(h.a)(Object(h.a)({},e),{},{reserved:!0})}));case V:return e.map((function(e){return e.id!==t.payload?e:Object(h.a)(Object(h.a)({},e),{},{reserved:!1})}));default:return e}},I=(n(41),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return[e.missionsReducer,e.rocketsReducer]}));Object(c.useEffect)((function(){t[0].length||t[1].length||(e(g()),e(G()))}),[]);var n=Object(M.a)(t,2),r=n[0],s=n[1];return Object(T.jsxs)("div",{className:"profile-holder",children:[Object(T.jsxs)("div",{className:"profile-item",children:[Object(T.jsx)("h2",{className:"profile-title",children:"My Mission"}),Object(T.jsx)("div",{className:"ul-profile",children:r.map((function(e){return e.reserved?Object(T.jsx)("div",{className:"li-profile",children:e.name},e.id):null}))})]}),Object(T.jsx)("div",{className:"spacer"}),Object(T.jsxs)("div",{className:"profile-item",children:[Object(T.jsx)("h2",{className:"profile-title",children:"My Rockets"}),Object(T.jsx)("div",{className:"ul-profile",children:s.map((function(e){return e.reserved?Object(T.jsx)("div",{className:"li-profile",children:e.rocket_name},e.id):null}))})]})]})}),J=(n(42),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.rocketsReducer}));Object(c.useEffect)((function(){0===t.length&&e(G())}),[]);var n=function(t,n){e(n?{type:V,payload:t}:function(e){return{type:z,payload:e}}(t))};return Object(T.jsx)("div",{className:"rocket-wrapper",children:Object(T.jsx)("ul",{className:"ul-rocket",children:t.map((function(e){return Object(T.jsxs)("li",{className:"li-rocket",children:[Object(T.jsx)("div",{className:"img-rocket",children:Object(T.jsx)("img",{src:e.img,alt:"expacex rocket"})}),Object(T.jsxs)("div",{className:"rocket-info",children:[Object(T.jsx)("span",{className:"rocket-name span",children:e.rocket_name}),Object(T.jsx)("span",{className:"rocket-description span",children:e.description}),Object(T.jsx)("button",{onClick:function(){return n(e.id,e.reserved)},className:e.reserved?"reserved-rocket":"no-reserved-rocket",type:"button",children:e.reserved?"Cancel Reservation":"Reserve Rocked"})]})]},e.id)}))})})}),F=(n(43),[{name:"Rockest",path:"/",component:Object(T.jsx)(J,{})},{name:"Missions",path:"/missions",component:Object(T.jsx)(E,{})},{name:"My Profile",path:"/profile",component:Object(T.jsx)(I,{})}]);var U=function(){return Object(T.jsx)(o.a,{basename:"",children:Object(T.jsxs)("div",{className:"app",children:[Object(T.jsx)(R,{title:"Space Travelers' Hub",routes:F}),Object(T.jsx)(l.c,{children:F.map((function(e){var t=e.path,n=e.component;return Object(T.jsx)(l.a,{path:t,element:n},t)}))})]})})},L=n(18),W=n(23),X=n.n(W),Q=n(24),K=Object(L.b)({rocketsReducer:C,missionsReducer:S}),H=Object(L.c)(K,Object(L.a)(Q.a,X.a));a.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(i.a,{store:H,children:Object(T.jsx)(U,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e57d2651.chunk.js.map