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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAERGVXE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T201146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ddutRprOqPVAoGsBrBKuhSu6QL1PBVlnRVx2YNVuJQIhAMhhfIr%2FrnmGKrv6JwD6ZE9BesGxzh94JnICxompQUuEKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE5I8bKNPeXeqREvAq3AOnGSIx8gQEDJ8%2B4Ay0OjxlyNd3pnlXMR0kq3TBBLmwqDI9k14ZCB5ry6ftBnT7N06SPLc%2B49PwSnOywKP11fVHY5Nwdi9Mx%2FyqqnPQKDtgFzf7392NDmLMFr6Tqu5yQP%2Fp0yA4dhTfSCXul8mAW0IpiSHYCmyCqtJ2X%2F5U6jo9UfVpCpHtf1kmp81fElEugm5VSbB7uKBymtkQykDXfSHuKjYZlkTpDP3odtwKLoeQq7GqhAKzFaWt7Ic8Ne4Hpfhxc%2Bt7MnFQZFu9yu%2Bj04ECrHOIrrT8CCTefWNqPmSlwli4fze7h2C8W6SByoCJkZ%2BJP6mxSz0l8hwnl20zJu8%2FX9vMF7iCtiztYt07E3DBwNuG2Tbk6RRuYTA9Ez5Rvbi4y4mXDdsS%2BDxTPdCbskhzuJgRrNZgddQ8QNQmb5YHGOABgMk97eSC74UIlkdess0Qu6zhmAYRsXC297QcW05pJFSuyEMStYYdz%2BqS4DbzSKklH7cf%2BNopl5EY%2FwOj1lgs79O6Fl8jp84EiE7LPjkX93INcYYgH63tGN1dxOXZ2PPDsnAwMIC%2Bfq8Z%2F6JlDI2rhWbnWPrxXBGlZ7%2FozgG0ICJByUZE5vHIUtdItjrf%2F8iSIsir9j4ckH5RsjDT%2FuHJBjqkAVW7nxqGUUaUTaO7uMipmYfH7cYvWhI9Thf9huMkRqXHUj%2FfPI%2Fbr9qULPYsARQT%2B5bjr65VfVr1j02RWnZTZM4QjoF%2BEL9y1Ejr0alQmPi4fIzO%2BlTg360uQGK1dpslSx9YAdaKfl5d1K9XAFQhV7p9D4qGrcwtkZe2UAak4h5iFoodwqL4j5XguCRJeR2rv7CR6chfAlbQPkakHBxnKjP1PUEd&X-Amz-Signature=f3b1d4dd192a735a6503a1a018f3f30cd15fae410a6e1791f6e6b65d5acdf49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

