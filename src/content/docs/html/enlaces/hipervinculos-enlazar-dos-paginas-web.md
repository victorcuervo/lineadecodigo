---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ES7JAWD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T223333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FgyPljurHP58LvSZJ5jg2GN2YX0t3haAK79Hzk2qg%2FAIhAKzV%2FDTsD%2FHDfPkNftSXGlxwr2BEFkVoXWWR8hZUTi6SKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydlnGJ4T7xM1%2BCL1Mq3ANqOUy7yv8H3AwGExD5iqaENJdtGyTifQkuhCGt%2BB2NnlkLRdB8e6jJh0mYojjpPu0PXhlNZDJ2B7uOGBpY%2Bi4xfqM36pm6t9e7M4KDn6DVyGGOFoHeDF7F12GMTsC6KmtnoBROBdtuCiZF8%2F4K6PNNyOI70qBUhQndEoRheOsDlHlGtCOg1IwEETvxkAP8VKHijguLPLCwV5HmMRKbJWDgC90hcfqx5FHfmIMNHaXgc2bkYD7j6vAKp%2BtoTHPQPkZ5JlGDRg4ggOgoVmuZAysp2z6x4IA%2FC%2BDBeRiROTaFCabdhP6n3mU3KC0ll6DJOrHBSmrbHL958%2FkggwwqRpTcyYyMBBI%2FvB7zru9eZRO1eQOd7EBZyoP6W2ORQCw7ucrc2Oa%2B3qAyy3fEsckFBObxdYvPWEV919bDcD3Oob9ItfMQzGWMHS6XkRsmk%2BaPRtxiQTncRKaORo5w0kX%2BM3pePJf0kHfMOKs9kzY9xgxm7AkISNGVnpHOnCz857R4ckeuEvWyWinJBkIhnFvs7ObaDT67yuoFikuKo9UtldA1OVRB160bfI0c1zVkfdlN3fRmKHNSWVc0QdmKQkBi9lUnTutYtF1P8MUrjwmncCcIfuHh1uQURmc18JluPjDpw%2BLJBjqkARS4rPtKgLd5IGGbwGhI7T4q6k0FMrBTJFvDdCUylZHtlBb1Z4hKY0Jstpc0B5QlYvGZfTu8Yo17wNL76G9RMpARrBYqsx5J6nbmw0xkE23vjJocWUeIw%2F3tZbmWSBSVw1pPQ2S%2BH5f%2FNm0M03I4wbAv2YSMG37n3ISU8hO1wGWhJMc%2Bl%2Fpc%2B7PlqcK38V1HG9CajVw3a6rdMoDX%2F%2FaXvRltNZ2f&X-Amz-Signature=813456396fc8d023d10b9e0c46e3d0f211ba09f49a4399be11dfa4bfdadedc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

