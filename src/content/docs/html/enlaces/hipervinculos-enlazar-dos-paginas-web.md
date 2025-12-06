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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AX2EWVT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FrmOrkFzpotQ0FHahsiaNlGeNtaS%2F7wDki0UibBFQYQIge3ZyyeqOkoCAeFjyjb4ypWQfCOsyICt0ovuzkVMfWEMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEDUlJnbYb6Wx2vCaCrcA%2FxGnGLCewJHSyIZ9k40WJ9IX05obZ7eKlwA%2Fns%2BCYr0%2BGs9yPZKfcFjzQM%2F%2BhbmBYOMm5ZTplCcqJlS3hzwwwTCt9nPYvZcTihW6WCyDZzSQ8D7JUGq5yqJ1LWAC%2B%2FI4JA64QFOKhKnpaWuV3CH%2BVcTOJa76kJH01CdqESKeBV41fyRRo0K9AP3YinwaCPiSPcd%2B%2F6n1PyIMMs29Kdf3P38e9HOnBHTXobm9otjImIuaL2rQm2U1tdf2ROjFD0IamoTtYCQc9Q55erX6wmDPQOBALn0U9EwqBBCGI4GZOIrcPyXa18bfmyCjwg%2Fd123Z2zvc3z0cMt1tqHVxWIjtj7lKDfVzY2RT%2FQsgf%2B8u9%2FbjoCGrsSbjqnPKeCUG%2BiSbDfY2pvqOIqI35ewrVlDAT1OKu58343fIT2qUtyuI4drdfk84XX6SPFeHAmoS75h6DMDp2AKFmXEysnFe%2FYeD7dQx%2BQbjosWlEyPmkzpOMYx4ks9Ei8%2F6iOfCoa%2BPcWCnM49kcIks2DA6owYQI66LARG%2FJ6nAapCfM08YRIkS8ceCAauHCLPfgq5DYTArbIeKY%2FFQ18x1ynOTEU%2Bo24cobie8DU8P0pIZuNgLOI1KxCBGXEu81lrAsquP7fQMNOJ0MkGOqUBUbYpx%2BYoBYwuSMv%2FTL3ea%2BiAIWBEELL6brc3wWtN5YNLS8aTYMGDxjB1b5AJeqTCFS019BXL1Y2qMqisyNwABp1scXJN7Sfcw817Zhn7KMwITtxZnEnaR4GQ6ILmbb85LlokaDoFTd3TjdO0UTB%2FHOep8iDWDhe4PTnhdig5oSXJNgnYlg176YmYI8d7LnoxqvmtYr2GW%2B07ZGBUOOdJt1HqHlQl&X-Amz-Signature=4b7b5da82d68386c85f90b46e14bd7c29a15e427ca737775e3d06c04b0265cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

