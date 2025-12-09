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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA6SRRCR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T211536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBN4NZo09%2BxeuUtC2chxuZNfyHFl0jy3Jjw1aWF%2Bt2bAiEA368hnYBeu8MQy0BOPJAaVFYixJO1A%2BirZVow%2BDvLzXQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsZPziamHraYijzzircAyNB0pHXdPigKpAzWS9zO3S%2BelLthXZfL3DAB6cXxQOKov6Tk7YfX5XPq9%2B8PZcSuskXkwrkd4us0FtDiyxnXsSdIK1ky%2Fmk3rI3SKHxRpwzGJL%2BvjjC2rNwm3i1YjrOfyDznu4nUvhCOMgn0x%2BnyevSVOuNYXNREZS0T5N3dyZ4LJPX0bUsbiTbUOctcbmhG368l0%2B8aDvj0c3fSpy%2FR858HkUYXPAQHDE0tvy3k66FBfcG0zEXX4i%2BXUUE%2BE9O1Qn4IeN7RDwiuLKFD4Cboz6F4M7vGpZ%2FWbA6D%2FfKaEMKOXPUNCyjmTPwyckhlcIC9Kw1JQZsr0kwKTkdqH11q76m%2FDaoAq31WRyChmqkwkjaqfK2pT%2B2dHBcIZXy9L%2BhEbJu2MFabMZke32g304jRqOs6G9xcRidlWhSjue23Qh5d2mO57ByBaOhI1W3RbcfuZVxsWL7VyBLR1ezBhaY1oYDDMbUN4I4%2Fa8HqWXPpZY3yt8SPhT3Ucuy3gJM%2BZP49Sn9pTwzPuUGN3XYPFblwao0H5a%2BJIjqJqasK%2FP5KJWNQvLrluODfmHGDsc%2Bc8J7xXPMUhuQC27v2iPkgjzryCcYzLl1qG0xQZngiBEpyZi%2FyU%2Fq2jwc0JyHpAxcMPue4skGOqUBMDXXEqX2PZ8SNnaSDgBPt%2BPTDbsE3dz3ZUZk0q%2BV%2B9Xu47cvN4KiFwpVwRaGqAsxnGqz1jVWYKeJMd59jPC197ekRiDRsM3DOacXRgo6D5rl4LQu%2Fk2huTpntjyfz8n4wqKUjMjzQM%2BRB4rkZ%2BwiGl%2F%2FwBT87XnKr%2BTrAtuRJZdzj0T91%2BgpPcPTKf0GzZfrDUUcAn%2F4wUwXbdviZMxZEF7bkKpq&X-Amz-Signature=9ff914f3cbb063e70ed0de2b1f1c9061ff6d1b1b5d6d549b85d55bbd458768cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

