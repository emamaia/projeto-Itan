(this.webpackJsonpitan=this.webpackJsonpitan||[]).push([[0],{19:function(a,e,o){},32:function(a,e,o){a.exports=o.p+"static/media/logo.31d5efad.png"},34:function(a,e,o){a.exports=o.p+"static/media/principal.3fcc53a5.png"},35:function(a,e,o){a.exports=o(72)},45:function(a,e,o){},46:function(a,e,o){},64:function(a,e,o){},65:function(a,e,o){},66:function(a,e,o){},67:function(a,e,o){},68:function(a,e,o){},69:function(a,e,o){},70:function(a,e,o){},71:function(a,e,o){},72:function(a,e,o){"use strict";o.r(e);var t=o(0),r=o.n(t),n=o(29),s=o.n(n),i=o(6),c=o(10),m=o(11),d=o(13),l=o(12),u=o(14),p=o(7),v=(o(19),function(a){function e(a){var o;return Object(c.a)(this,e),(o=Object(d.a)(this,Object(l.a)(e).call(this,a))).handleAbreOuFecha=function(a){o.setState((function(a){return{aberto:!a.aberto}}))},o.state={aberto:!1},o}return Object(u.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){var a="navbar-menu__opcoes",e="navbar-menu__botao";return this.state.aberto&&(a+=" navbar-menu__opcoes--aberto",e+=" navbar-menu__botao--aberto"),r.a.createElement("div",{className:"nav-menu navbar-links"},r.a.createElement("span",{className:e,onClick:this.handleAbreOuFecha},"Menu"),r.a.createElement("ul",{className:a},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/",className:"navbar-links__ativo"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/sobre",className:"navbar-links__ativo"},"Sobre o projeto")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/historia",className:"navbar-links__ativo"},"Hist\xf3ria"))))}}]),e}(r.a.Component)),h=o(32),b=o.n(h);var f=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("img",{src:b.a,alt:"Logotipo do Rocketchat",className:"navbar-logo"}),r.a.createElement(v,null))};o(45);var E=function(a){return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header-div"},r.a.createElement("img",{className:"header-imagem",alt:"Imagem de mulher e filho africanos",src:a.imagem}),r.a.createElement("div",{className:"header-text"},r.a.createElement("h1",null,a.titulo),r.a.createElement("p",null,a.historia),r.a.createElement("p",{className:"header-instrucao"},a.instrucao))))};o(46);var g=function(a){return r.a.createElement("button",{className:"btn",onClick:a.handleClick},a.children)},N=o(33),x=o.n(N).a.create({baseURL:"https://my-json-server.typicode.com/emamaia/pistas",timeout:1e3});var q=o(34),j=o.n(q),k=(o(64),function(a){function e(a){var o;return Object(c.a)(this,e),(o=Object(d.a)(this,Object(l.a)(e).call(this,a))).handleMudaPista=function(){var a=o.state.index+1;o.setState({dicaAtual:o.state.dica[a],index:a})},o.state={dica:[],dicaAtual:[]},o}return Object(u.a)(e,a),Object(m.a)(e,[{key:"componentDidMount",value:function(){var a=this;x.get("./pagina").then((function(e){a.setState({dica:e.data,dicaAtual:e.data[0],index:0})})).catch((function(a){console.error(a)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{titulo:"A Jornada de Itan",imagem:j.a,historia:"Itan tinha poucos anos de vida quando foi levado \xe0 for\xe7a para um navio negreiro, junto \xe0 sua m\xe3e, Ina\xea. Nascidos em um povoado na costa africana, m\xe3e e filho tiveram suas vidas submetidas \xe0 escravid\xe3o em meados de 1840. \r Ao chegar na costa brasileira, Ina\xea e Itan foram separados, vendidos como mercadoria a pessoas diferentes. Anos se passaram at\xe9 que Ina\xea conseguiu  comprar sua liberdade, \xe0 custa de vender quitutes como ganhadeira. J\xe1 liberta, Ina\xea foi em busca do seu filho perdido. Ela sabia que a jornada seria extramamente dif\xedcil, mas com a rede de apoio formada por africanos libertos e escravizados, Ina\xea partiu em busca de Itan.",instrucao:"Voc\xea pode fazer parte desta rede e ajudar Ina\xea? Basta seguir as pistas para acharmos ITAN:"}),r.a.createElement("div",{className:"game-container"},r.a.createElement("div",{className:"game-pista"},r.a.createElement("h3",null,this.state.dicaAtual.titulo),r.a.createElement("p",null,this.state.dicaAtual.descricao)),r.a.createElement("div",{className:"game-options"},r.a.createElement(g,{handleClick:this.handleMudaPista},this.state.dicaAtual.opcao1),r.a.createElement(g,{handleClick:this.handleMudaPista},this.state.dicaAtual.opcao2),r.a.createElement(g,{handleClick:this.handleMudaPista},this.state.dicaAtual.opcao3),r.a.createElement(g,{handleClick:this.handleMudaPista},this.state.dicaAtual.opcao4))))}}]),e}(r.a.Component));o(65);var I=function(a){return r.a.createElement("div",{className:"caixa-container"},r.a.createElement("div",{className:"caixa-texto"},r.a.createElement("h3",{className:"caixa-descricao"},a.titulo),r.a.createElement("p",{className:"caixa-descricao"},a.texto),r.a.createElement("p",{className:"caixa-descricao"},r.a.createElement("span",{className:"caixa-span"},a.span2),a.texto2),r.a.createElement("p",{className:"caixa-descricao"},r.a.createElement("span",{className:"caixa-span"},a.span3),a.texto3),r.a.createElement("p",{className:"caixa-descricao"},r.a.createElement("span",{className:"caixa-span"},a.span4),a.texto4),r.a.createElement("p",{className:"caixa-descricao"},r.a.createElement("span",{className:"caixa-span"},a.span5),a.texto5)))};o(66);var A=function(){return r.a.createElement("div",null,r.a.createElement(I,{titulo:"Sobre a hist\xf3ria de Itan",texto:"Embora essa seja uma hist\xf3ria fict\xedcia, o projeto buscou se basear em contextos hist\xf3ricos reais. Podemos imaginar quantas m\xe3es, irm\xe3s, filhas e esposas foram arrancadas de seus entes queridos e levadas a for\xe7a em um navio negreiro durante o per\xedodo escravista. Esse jogo tem como objetivo mostrar as diversas faces da escravid\xe3o na Am\xe9rica dentro da perspectiva dos escravizados.",span2:'PISTA 1 - Ganhadeira Joana: "Naquela \xe9poca era comum escravos venderem quitutes para seus senhores nas pra\xe7as e ficarem com uma pequena por\xe7\xe3o dos ganhos para si. Joana era ganhadeira assim como Ina\xea e estava na pra\xe7a quando ambos chegaram na Bahia. Ela lembra que Itan foi vendido para algu\xe9m que vivia na capital da prov\xedncia."=',texto2:"=> Os escravos de ganho eram muitos comuns em centros urbanos. Eles vendiam mercadorias variadas, especialmente verduras, horatali\xe7as, peixes, frutas e alimentos feitos por elas. O escravo que trabalhava com ganho, geralmente conseguia juntar dinheiro mais r\xe1pido para comprar sua alforria. Conforme a historiadora Cec\xedlia Soares, um grande n\xfamero de escravos de ganhos eram composto por mulheres, uma vez que ganhadeiras africanas eram origin\xe1rias de regi\xf5es na costa ocidental africana, onde o pequeno com\xe9rcio era tarefa fundamentalmente feminina, assegurando pap\xe9is econ\xf4micos importantes para as mulheres. O servi\xe7o de ganho proporcionava livre tr\xe2nsito pelas ruas, facilitando a comunica\xe7\xe3o entre escravos e libertos, o que ampliava suas rela\xe7\xf5es sociais. Ao mesmo tempo, eram vistos como um perigo pela sociedade escravista e as autoridades que temiam revoltas e conflitos.",span3:'PISTA 2 - Ign\xe1cio, o vendedor de peixe: "Ign\xe1cio vendia peixes quando viu Itan correndo pelo mercado com seu senhor. Ele dizia que iria viajar para um lugar conhecido por seus charutos.  O tr\xe1fico de escravos para a Am\xe9rica foi proibido desde 1831, embora as d\xe9cadas de 1840 e 1850 tiveram um grande n\xfamero de africanos levados para servirem de escravos em pa\xedses como Brasil e Cuba."=',texto3:"=> No Brasil, no come\xe7o dos anos 1830, iniciou o processo de proibi\xe7\xe3o do tr\xe1fico, que se estendeu at\xe9 a d\xe9cada de 1850, quando finalmente o tr\xe1fico foi finalizado. A Dinamarca j\xe1 havia abolido o com\xe9rcio de escravos em 1792, enquanto os Estados Unidos e a Gr\xe3-Bretanha decretaram a proibi\xe7\xe3o a partir de 1808. Apesar da proibi\xe7\xe3o do com\xe9rcio de escravos, Sidney Chalhoub afirma que 42% das importa\xe7\xf5es de africanos para o Brasil desde o s\xe9culo XVI, aconteceram durante o s\xe9culo XIX.  Pierre Verger demonstrou as diversas manobras que traficantes de escravos usaram para burlar a fiscaliza\xe7\xe3o nos portos durante o per\xedodo ilegal, que inclu\xedram desembarques clandestinos em outras regi\xf5es do litoral baiano, mudan\xe7a de bandeira na embarca\xe7\xe3o e arquea\xe7\xe3o do navio, carregando capacidade maior ao que realmente tinham. Em 1850, as fazendas de caf\xe9 estavam repletas de trabalhadores reduzidos \xe0 condi\xe7\xe3o de escravos ilegalmente. Outros pa\xedses continuaram recebendo escravizados que sa\xedam da costa africana. O historiador Robin Law afirma que pelo menos at\xe9 1857 ainda havia not\xedcias de tr\xe1fico em Uid\xe1, at\xe9 mesmo de escravos vindos de Lagos, ambas na costa ocidental. O com\xe9rcio negreiro continuou sendo a atividade mais lucrativa na costa africana, mesmo depois da proibi\xe7\xe3o do tr\xe1fico, pelo menos at\xe9 a d\xe9cada de 1860.",span4:'Dica 3 - Esperan\xe7a, africana liberta: "Esperan\xe7a viu um menino e seu senhor caminhando pelos portos cubanos com as mesmas descri\xe7\xf5es que Ina\xea fez. Parece que estavam a bordo de um navio negreiro. O senhor de Itan levava escravizados para uma regi\xe3o de pampas e cria\xe7\xe3o de gado, l\xe1 no Brasil. Parece que Itan era seu ajudante pessoal." =',texto4:"=> O com\xe9rcio de escravos percorria todo o Oceano Atl\xe2ntico, englobando pa\xedses como Cuba e Brasil. Era comum o com\xe9rcio entre pa\xedses escravistas. Sobre a escravid\xe3o em Cuba, os historiadores Rebecca Scott e Jean H\xe9brard demonstram as rela\xe7\xf5es escravistas no tr\xe1fico, cotidiano e demais com\xe9rcios n\xe3o s\xf3 em Cuba, como nos Estados Unidos. Eles analisam a trajet\xf3ria de uma fam\xedlia inteira, iniciando com a chegada da africana Rosalie na Am\xe9rica, at\xe9 seus descendentes envolvidos no com\xe9rcio de charuto. Eles demonstram como os libertos precisavam provar sua liberdade constantemente e os medos da reescraviza\xe7\xe3o. Outro trabalho importante se refere \xe0 resist\xeancia escrava em Cuba, realizado pela Historiadora Iacy Maia. / Sobre o tr\xe1fico interprovincial, podemos destacar o grande aumento de vendas entre prov\xedncias brasileiras ap\xf3s a proibi\xe7\xe3o total do tr\xe1fico, em 1850. O arquivo hist\xf3rico da  Bahia est\xe1 repleto de pedidos de passaportes acompanhados por carta de compra e venda de escravos para o sul do pa\xeds.",span5:'DICA 4 - a africana Maria de Jesus: "Maria de Jesus foi levada junto com Itan para o Rio Grande do Sul e vendida para trabalhar como ganhadeira nas ruas da cidade. Ela conta que Itan realmente trabalha diretamente com seu senhor, como ajudante na compra e venda de escravizados. Parece que eles partiram no \xfaltimo navio em dire\xe7\xe3o \xe0 terra natal de Itan."=',texto5:"=>"}))};o(67);var O=function(a){return r.a.createElement("a",{className:"link",target:"__blank",href:a.link},a.children)};o(68);var C=function(){return r.a.createElement("div",{className:"sobre-container"},r.a.createElement(I,{titulo:"Projeto elaborado por Emanuelle Maia, no curso  bootcamp da Reprograma",texto:"Projeto final do curso de Bootcamp Desenvolvedora Front-end na {Reprograma}. Cada aluna elaborou seu pr\xf3prio projeto, incluindo design, conte\xfado, temas. No projeto apresentado aqui, foi utilizado conhecimentos de html, css, javascript e react."}),r.a.createElement("div",{className:"link-container"},r.a.createElement("h3",null,"Conhe\xe7a a Reprograma:"),r.a.createElement(O,{link:"http://reprograma.com.br/"},"Reprograma"),r.a.createElement("h3",null,"Conhe\xe7a a autora:"),r.a.createElement("div",{className:"caixa-links"},r.a.createElement(O,{link:"linkedin.com/in/emanuellemaia"},"Linkedin"),r.a.createElement(O,{link:"https://emamaia.github.io/"},"Github"))))};o(69);var _=function(a){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Desenvolvido por Emanuelle Maia  -  Reprograma - 2019 ",r.a.createElement("a",{className:"footer-link",target:"_blank",href:"https://github.com/emamaia"},"    Sobre a autora")))};o(70);var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(i.c,null,r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{path:"/sobre",component:C}),r.a.createElement(i.a,{path:"/historia",component:A}))),r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(71);s.a.render(r.a.createElement(p.a,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.73b9c63f.chunk.js.map