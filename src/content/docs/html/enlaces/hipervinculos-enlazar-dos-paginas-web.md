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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV3QQ5VL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2njgAff%2B9ZJ29OD6EpfcpYSWl6opvwmo5gNZnv84osAiEA%2BpDfOSKQxaq86CxLBWmI4Kr40KlZoSs8smjuJTW3DwUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPuu6M0YMJ5qJVxyiCrcA6YGtY3Pdwk0wXmsxLVU2uyw5A6ZtIV08Rk6Avqst1I6wCq%2Fo%2F%2FAf05rqlc6XjHYkcrn2eD97EUq0p17YGv3LOwB3gtxYNsY%2BIfFh%2BCzLak52fwCr7buQNcPvi%2BWnXe0xpis3veCfp4JRUCUpb9QsRYRV%2FMdqcA%2FOqq6sSk5zIexUmcw1wwbdh4kCsDEppbXHAA98tQ2R8dXa94YPQOWpUGluh%2Bugd3%2BiBZJZLZ%2BzB9cvfySxFkX2HJ9pWM3ipqXI6RiYYieGm7cgGPbpisfSRrs1iIF%2FlnIYjhCeCuWDkTXtxotWDE1%2BVuAMeaMVmelsycwXWqa%2BYbc%2BL60OuuaX1f547XPqnwZfjz7yZxeq0sFAmeGFkrO0y3R5tz9B%2BayLWD%2Bn0zBLbuVhDAdGFDbESXmgCMbrNUVCyuyfhxU6n7ZdWBpQ8NVN5hmaSqLAOXrJsVe17oBvdc40MycoKp2Jlhr6ygq%2BpgnzCa5Z8PlNiQ59SJEINK5n3aYYfakI6%2B6TWx%2BuGmp3PlgjNfMpW45BVR8LpmaDXP%2FYJv7OGGwVyxIdk5%2FoCUesTR18fjoJNAaL0xqxwdiIiifluwmasxqBItLXq4pxg5BLNtBPPrHUeCM0atTRyY0QVaN5TxUMLum0MkGOqUBCweGM0cluzeFlHiCCTReKbWASY3HGAJUeVAjrn49v71XFLVwRGvd3ApekFKP4dC8vvVKD2eeDwiMhtOE3jRoTesd9VZCjfrkd%2Fpdeq8%2FX%2BcVKrHaT8AU%2BoVEj4krb7%2Fwzsqcmb6CYGRtKMQOyP1ZH9mPg3tQU3RqsGXEo3642efqCQWRqusDUowwbE6HZ0bGa5OIUVBaKHTjQa1F3KUdyUK6QI9L&X-Amz-Signature=2b09065f68b6266af2f8d09aedccabf2dec6479584337573784102856f2a176f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

