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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GEBAP3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBafElLjoVA5A%2FiF9SzVESuu2zVNkbUwlk1gyO0LJHjvAiEAlXtncrdiCTXH9NC7m8Af6EHRdO96qLqOObdPE1S0bp0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIrGyoQGjAvJtP2HkSrcA%2B0WO4DbWssPWbbOFX4n7O9o2YMuOkT5t6DkuA54Tn9tr3vBRCBCt6GDRuqpGxVpcaXhJsvfzRY4z1YWbdE%2F%2B9vFl%2FRyokKZaRC%2FQF4kbzznHgnVxtrKOXP3wUxresQzKoDxOAAmBq8xD3T6PM2arz%2BQMmaD9bUe63G76OYpNyP%2Fd7yGIWPSpyeBKpN8PxRsSGSEiYYXdpttNI4YA4cQScrCkbugXI%2BWtSB%2FiuSxTpFA%2FUQoCA1SXgoDvYOMnkMbAPPk2NoJR027cG7YHMt%2FlSK%2FdC%2BPW%2B7NIBhtV%2FHOPm88pXcyqrBhrSUA2lF%2FJyq3ZyvhAYRHRjoF6AkJm%2BLBcUIyNVWfa9o3%2FR73FHu4z1H7fY2xZ8%2FDF3RPnotS2QdUp0PNejwJzRSSX5eNu8XG7TEY1RWxOHb%2FmZhVZcBDDQtMAOnnyp9L8fGTxiWjjt2AWhHeZwS2RWP%2F%2F9xWstwcpsH045b8HuQJc6qJ91wIZRtLrlq5gUFCBSU58F%2BqfjmqD9T3EELkcX68rF6vetpmQCzB8zw6h1gpwshrxflV6gOJ5f49Nn5HCGt6xKuqmt%2BxsU%2FwU0cYPbvMo0sOIXwcNalqwf3zQV90Sy8DBB9ZTNCxq5SbrEd2V6HzpdXZMIrrz8kGOqUBBqqkClbf%2FKlO1wTGmrnQ6deYhxFb2SMAb440Giy65Rfh3zAmvviRIuaw9EfNfnYn%2FU9j3hVntitdxXMOb4C6z9WR6bhiWLFhfaOe%2F1hFa4iUPrW%2FSIWsqploz7lPV3LH7FDPDR1pf0hh44Qbj8gan2nOP2zPwK%2B65c2wXHMmCd8S9%2Fhmd7ApNv8bjf4VLEGgEFV5f8Wzy2Ss3QsWNMR0njucjkSg&X-Amz-Signature=732fda1ce5bf8910653a13c56d4a5d74dbcdfc339b88b4f1ba66aeeb1e8d9604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

