---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKKOIBN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4aHWPsC2jmQj1oPfnzfCWvNmU%2FRKofgpX71FzfIDlTgIgYciRvv%2BgBBxbzDUYAuVDt6YfoTVsEPsOBk244uuDeZ0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDATgUTt00prph3%2FdwircA321O1bhZ2pTRRP52mmlixCkUIGZlyisx0RroD4qTn43uwJYZ1Qr3kQYTbAVUGdES84%2BU7U4achFZGAMxQgYnUsYZCj8bpPoYYpLsncaPtRP52feGgpsfh9vAYqfLmid3OnvXx6o6sbV2eyR1TVjxkNkURktgzB2WlCa%2FnzYe%2FymNF6admoNLrfILC3yimMGjhrE2u8pe5AB%2BJN2dkHbCJEBw4Kkcw7oy%2F%2FoUrHIuzCMedTPaO09nmSLdo5AKdxMVrjzoKAJ%2F3MyP2HgUKIIOlzOUmfpcKnzzYwhPEigYEigOSshsC3cn9zw4ulEnNi%2FO9udwP54MX9u33mEwmR5MGgmeq3DdpO8jSmGzVduVMql6Hlu7NwckR7T792pRd6sNk2Jb3FCUS5GrQ7t5H52sgGBpqQCGzmPomcpXk73ubJnO%2FmOuoaeyWBJ33Z02I4tX8C8vUMKpyuqM8aBCnfd4OKUPKm1OTQ%2BmP5CnBRhZujlX2jCNbng5DdrVJwi4rJUwBSSdoZ5iWpc3bPHrgbV3k62QDULQZdXwkVPRUov2o%2F9Nb8t3yPUpmWudGWZOqEFV8zBQDII1qsn8jG8YBDInG9ehYrWVoI3wOKqH8SR28Fsca1DMCAJ1lpC%2Bu2IMM7U0skGOqUBMLDW4%2FxGjc0LzATdmwB73qkjRNnrp%2BzZitvJDk%2B0TOKsYxQLpdYExm0MuLQobZGoRNOlcdzB0ylRpjGgx9ubls0NbrZJ9cNfgvTgvpq5Bie6qzUk8Mc%2BjD68c3sSFsnqkhk%2B5sqgs2jWw2I4M5w2xziCY6vFACUCsHTtsF6YP2Ykfa5B6NEEL1Exwx7C%2FEh6nL%2BUGKI5Fp4ilrItcQO3w%2B6Umwlo&X-Amz-Signature=35a2c79524644624a83ff930d4c65261b475b13fe24b6d3d522d03fc86cd238d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

