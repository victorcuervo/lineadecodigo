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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H7X7WYC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNEkE9nH74WcMnfcKsuUKp%2BFv09uhiprmEoVQhbX0V0AiEAiiRO5INW%2B02gsQYjKmLIlmydhZv5OPEV00kqOnJAj0kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI1GAYafRACofkJ1CrcA9WKBPuGlf2%2Fl5AldpD%2FpWXnbBvAqpVnEnDnGbw15P%2BlLeSMaMbmOo8%2B5Jq%2FBpgv6xcDzvBZ%2BkmmNtZeQ37vxgmMid7u4WN%2BS2sHoiZs6t3flud%2BscjrFDKnRCg%2FDltt6CSG8oDZN0qylxj%2FaBEl2XBLgQptDuZ10UFJftYu1Uhrvob9HTp0ynJuPSp7Z8A%2BUw%2F0pckCT4FX%2BJrIPaRWcLNe9PYVPLpslCczk6yM9zdZ6eBjJT3TOw6MVmKmzvBYAjSXfihGz2Hfcjura30VBaRRHDeiwbxdxiom5jZcs2wMeQJnbCkEYA6pxl2gSVZJlbrZldmeC7t3SQ3qUv5glYpALIxJSqh%2Fjmv6dipfOF55M0huJ99qRLeOCi79c03SjpiD3zdpbG%2B89A5UmBim3tDHpFic9SHf0mSos0ksjPfg%2FH%2FxQ8g4iJM569DKZ%2FB2pA%2Fibs5heEgUE9L51cWqqDal2NvihBBwbKbrcIjUP3npw%2B%2B9u5XhlVpl9RRJP3oDLeiwYFxL6ZFe50WqCp3nKF7fpuKLH4c8OGs%2BbIa9hugPz%2B3ciKe8blsPN8n%2F7zunfoUbaatE83RvuSq5E%2Fm%2FtxI%2FHhQUCb794zbec6UX32iw0Z9I2aeJWufA9FOUMIrK3skGOqUBdOZhsiDiZJ9pK%2FD4COy8LK%2FtB477Fp5Alsk6t0j0Shsc9haWzSJIDqf7Uzbuqy9Mwy%2B4FSGF%2FwtekjftOkAye9lnhhS0zvEubPrOwNjiUrONETbm40104rfFz5y58uRSp6yGLt0ugXct4URQKWe03ePQRbgWBYr7OLVcyUgLjGJ06xwRprW0x25ie8TGKF6l5uyKYhEOyhD%2BY%2Fed6i7AfT8VqKo1&X-Amz-Signature=d308f6a953eb960ad1714c6c5ccf018f951645e6b66cd227500beab19b3355ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

