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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7M2GHT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLe7AiCcITLi%2BfaLduUKgMxWCMkolPR6qcUVX8oHKWggIhAP7DiXnoR4YY%2F%2FUa7PvIh6SjGoEXSrZ92eu%2FOWyQ%2BaOIKv8DCHoQABoMNjM3NDIzMTgzODA1IgzCF0i%2BksuKBZ8voykq3APS%2BQMbLcSJtpmPNjFrjKoZ9Q%2BcT1keg0H8mJdcXp3n0SA4X2YL5GS1NbLRKXKVC9zHRZr2JrtZLVUITvVg4NYIQR5DPfFJiiV4%2Feed%2FP8oAbSxjHudHLx%2B%2BBzq%2Fqi7t7S%2BFepv3ZogOQIp8dhJVjT57OyXPG78OyPSuvTnMoP83plHQxe8U5S9dv3wkDxRqtQyHdYWwFw%2FC9JfFcPIDxwCy451B%2FzUZp0YBA%2FeYJ8xdtRNe0YzzZA9DFyu6wokcWwC2LtflrhnkAr3jlQK6KUFfJJlgtERbHM4lzWhV55xBfc2cioWAvF89bQPvBdpFn8pUzLsF%2F0liNPTLHBQPx4rffOIuugdH1OMwBEWqlNFtuc163D81neZJ8lgd%2F8ZSa2p1vUXlAd1S7qCi%2FnymCiT03GqH2aie%2FQq0TWUvTTVBNKT1ee88BqnwUM3cULm16M3eIyB%2FVkcULKRHlGu23EQ6bROKg60goRRlR7mgCUMo5szhyYtDPTP6Gm3V0ZXaXIn30JVAS8qH6DiBbe48xfjKHCeCDGN1xi1X1nr1zwpsZ2fM1O3mDZZfPqLvJnJHwk7Iw14RglYdosvbJDA%2FVXBL18tUpXmjicjyrd2%2FWMfi%2FOy8ucEJ%2FhkoRUORTCyxdHJBjqkAeDKCNPkm608QIfPpLPIfvxKA3SLzZpbztO4GPaXLUYoHk7KyAMfmqY%2Bqm4JJJanUUZd96Gm3%2FyTBsQLU1qAV%2BDEiybTyvAB6ndo5u05pONKuKk2B%2BESgyCUBBMLxQFy1Ok8VU7owzghf6DGhUs39M784bP9adRRLT8UXaERtNPLnINv6lt7AXvbEnKZjRXR1DvA4I3%2FU0238vCS%2B9fp%2B5Lia%2FR0&X-Amz-Signature=62ed607e7795d53b004df925f8c88e9ac866d44f6c8bf7402c83d22377b614ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

