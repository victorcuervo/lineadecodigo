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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUFXNSE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM3n9hcHuV%2B6nvSjtqBTncGew5bmIuwOi4qXzYjkNOzAiEAgLNeMERmDlgcX%2F9b1ESZbosWfLoalS6ckQJQiVUg%2B9UqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFr57es5FxT0TU2kyrcA%2BrM%2BhbgrELp%2F7UOszVvun%2Flm346kYqU6AJ2gpOEaPTRfa8HwfP3Sojm5xUCagFUWPvtTlRncexPigo%2B7zezVZMtZ6%2BSKHISWppilpBGQ%2BXKwwwW7xvm4tBBPxwkdccWoyxPZUKB17P7AwR6U1zy1nS2Tg3s8lpi0gD4XzSPPcKpL3E5kBP10uAbRn53COaWKudIJ57IpFrGniYuRU5%2Fns6BQzGqpZ9JfrhxlrA8B2ASfwR0gInK%2FNDcLr61SuYFBIwLsFrAIytFdph61FyaxgH0tTFL1xRimvXTPq1BHGAH6smGIhjUwRi9%2BoZHbMuC043c2oEDZfK%2Ftt0Ibiw2t4Oi29SRelqXl3sBXPG1%2B63N7XSJ1%2FyZbMJyGwI6PoXVqQAcYwMEutd4b0PNQcaDCP2NJGGNvb9DtIfVNbpTKPR%2BdhHPJvP9enOrDG10coWpT42JIu2evvGS0A%2F23M6YGdKWvCC%2FDDOzviOWRpzQbKnkFdfcr0YVHfTQyPxA14RQB8MuCTb0Jzh71AjEQl1TLGq8iv5kM5MHjq1g50Fm1Mm9ueO3mLW9c%2BtFVXZC6tASmw1MhuxxVA8XPxtEUlqceQ793J4xUA%2B5bM%2F10ooEvVkGDz4JyoBuf1uXe6opMMah3ckGOqUBQu%2Bk6n6bq4thvnCODt0bgf%2B9A9KYB9QWEl70rGXZnQHVKGSLIG8Q%2Fwn8XmDGkB0dxDI4Wbdf%2FcaeFsiNEzlYFR3tW6lZ6TeqWAwwJS5gl%2B0HRfgKBrymQnMrsgkBoCBFRturV%2Ff9hQGXDTILeekJXrfzOyf7%2Fn0BfbJxHVZ%2FUPj5DUSH%2B%2FimWUq%2Boqa7hy7PyoW%2FqD7d%2Ft0pL7si%2Fj1p02sD1hC9&X-Amz-Signature=58b093e7c7626bc3ffcc55a08c49c69664c33ff3bb09be25de3b81e65ae59d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

