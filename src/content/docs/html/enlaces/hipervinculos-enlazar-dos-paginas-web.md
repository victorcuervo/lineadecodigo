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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCU5DIVM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsM35utDvORXylbL27Pk%2B4wnTod6yQ%2Fe6LSxABM7v2cwIgV5otrDm19RKEk3uYSVD6Y46u4VKKxE%2Fkr6kpQRQE55Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH53dnw1YtJaHhUDVircAxAWHLjfnmPZ2FVx0jFTVu%2F5FPTdK2tWI7pI2N6TH5Z8HmMsuWIzuD2pNAlKIlVRTgmGzjPu6XnyHkEwOpQwhrz4tD61le3aV4HCJebe6tV3w5wgB9ePq9iJIBfQqLpxmVNwiBUdLjjG5yReeCMDn3F%2FrNxWDGpv1a7LM2Y51delpvcubH6DLKcSwmzrHY0nhjBCFPbnYI9p7SrwFX6N2or06mMKrcEgKWGycyi%2FLROQPUqyJBVh8eP6ZvKvdHL34z9uPnWKD9iaDlU%2FG3Q0dVY3N32RbSEhfwU0rbiyn38YeVlsfLwnNTQzfUkW85TUxdlqn1DNik3qJzUEVVbbaiTTQnmEML%2Fh1peTzWdXkiXN6zsFSzayIs3lVQgyhpMWdU5OjPIP4HhGtRNYRjUPrY%2Fa9qpSiwyRa97sp9BZDzZEqSSq3Lv5qUbzDMtkQvEXa0F1014nX2RWmGPZZ5VX9pO7eRomkk%2FLi4Pp6sfbjLhPVwrOJlDSO2wnvjpNHYNv1rNjgB%2FccMGL3b964B3Bzn3XFTvO8wpc4ZgLV3P2Ok0vuQf4CObR3JKnTIHzGylMFEvwQoM1KGfHEUxokL8k1Fo6v5YV8pRTV7LMpUKeqXZuYQTTRCBdaNzLuv%2BzMM2m0MkGOqUBBP9S0iyNq2IojO1gqnSHIxPvHvorrydT9h%2B8dqwLU6iEvlaHilcmBNTv3Gp%2BeedOPea3SAE1Mw%2Flb1yp2nzMooNzgwPxEUpWRNc5h11S21vNgNgcL2ogc63W1m%2Bq%2F%2FhhZNZrzDPINgqke%2FemTgGZ0iE7IO3j9eg%2F0TGIV7iKoEmZSX%2FegkBjddNeUp%2FWjMdRw%2F%2Fps6kTrarBpb3R0%2FbxhnsMHpos&X-Amz-Signature=1eff283142cf9c306cfce243086ed002148ad8b53a19b92c6b658e5b97292f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

