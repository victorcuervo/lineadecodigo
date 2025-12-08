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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ZNPIUG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEFrooGIZ8E177bFWh0nA6QRiE4RsFL82gBKai2X48rAiEA4oYUApcpW5JUW2%2BlXSLzC5ZR6HybdvXn4j48J0TZ%2BJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6IeBLTt3nZhE%2FDrSrcAwiL6Xz0XTvDcIs0yn%2B5N7ZwBeYoSdjxZ4iOAlEX15%2BOqBWKiryAirpcrzr%2FkAnjZLQM%2FCYo1WwrVPMVd0xOlxftTzBHh2zlErTiQr8MjwWsI%2FqHHKRO%2FoY4v57HjAHvLKY3zx1W%2FEqCbtXHrgTL9H0Ex0cRAeWBohd4kIEb8z1LjNcfeBMZoWacJ35KNEAahcGTkVHth1qH5aMHtxwytsNoZc4fcNyBJY8cR5pSc4ThnD6pSfYp8izPs1RNlgUfNMrPhK5CQzy8VZV0UEZqX1hAM%2B3lxtQ2Z9uB3sj5XYG0%2FTPM29Kz8h2D9E1QY6hLSYmufTNRKTBxtAfG8pf5TsVsM2PzT1Eq8JDczYlWVfqBFOmoNiS3uADduULuVKAyIJe2k55A%2Brm7%2BRBlS7hiOlufQYazj3Om7JLFdyrj5Z3L9sW7YRyQ2I27X3aOt1brePfTeE0tvOC%2BKf1S%2Bib%2BQKKomta4w0dYgTPfEPw%2FNRQynC1JJ3vi7uvce1%2BqSrdBJMCaNMG9feWJ1ceR1MI2REpOJvWimGD0JA2%2BJ1GuUY6SAiaVhz8MFhfoZClVJYLxawPPYpmd3fK6TyHROklQvNqzxyS8Y0f8WGCcVvPVPssXbO5bMnrE7yQOhGQyMI%2FR2ckGOqUBbMEbjdsDPhtQU235ec7d3XAPuBa0%2B1YjbnHB%2Bxe1FcbnYJHibpxRmF2entssVBBG74cJa1UpYxnT5jt8WQfQ5yeyITQjIE83xzcQEIjxQaOPr4FnpMfZKEYN%2F1t1bYok1RgS%2FzykorJvoKSTNUk%2FrWlRftfdJUsk2SOQMUmTCkyN78qhD0D%2BrAGkP0fg%2B6zxO6%2BP32CeHI1KSSdB3cvkVpoiH6%2Fw&X-Amz-Signature=893038ad3aaca4cca6f07b42d0a46879a55307d73c77723d02337047ab75b1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

