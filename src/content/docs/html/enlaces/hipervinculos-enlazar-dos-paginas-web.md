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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJQ5DHP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF5rA%2FvpQK282c9FlCDvsB%2B0nuX1J%2Bg9lji9qzFhZKqAiEAgYPGbsc879tEZAB85QZGLrli2iwV9%2FYheDHX9Pso%2Becq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOahO8pJGAVjpNUj%2FyrcAxOjzR6kXHQxi4Fn1Ckwb7kgJ00LUmyx2%2BKFEx126OHwLKdBDC3dCAcA0TkIkqeCfWOk3pT%2Bq7V4F8UND%2FgJzephlo%2FzVs3yW56SRndozuKnhG5kbvKDdUR35Gk0d6cVoljTtAY57lP6N1F3FWFiIDzSFecO5VZoA6xazSKegvarJLPt4YljouAgjj3pYZwoRjzWDpJYV8IlbbpJD1lXBvCaab8oiapOf7zVK107TxQDw%2FjgoVgHh%2FXW37t2QK%2ByE8UKpq%2BMV0GbfONV7fX0T8UnDj%2BSO8T8RuuLQXnWElUupet0fAOSlhyQhsaQM%2BBIZz3lz7E%2FX5%2F%2BNS0zucjMpHi4uv6UaEIPEc2JlaMs%2Fzk9q9s3mkCaI4SYazjaisou3aMmlCLOi1no3MotlxWJP35ZwN9nAqpV9Y8S25l5fVRBQ3Tx63hxArovI3zlGwYPYnKFPpJWy1edMLZU5Gb79cuDYKOiWSX4HgUACtUy0BBLDjxfDnWI%2FPZuU6aBjBszTjKJk9Di1jWRHFPd%2BIGCUNnb1gHiYKESVGhBSj2xgCyf5gL96rUDLaWOYT0B4YFuKrpShSL24sPzm0cgdOQgt7iZ2Q%2BAHdrV4gIsMCGat1A16cFns6iAXfMJk4x5MNim0MkGOqUB6L5%2B4MaxQ96ErDtrYIqM41TvMmJDwWzXyB2QGE5%2F1lHl2uYw19mxR3pfGyuSz5Gv5g6C2Y6q8r%2FkfeBYo4VQx%2By0KPI5v3alo2uDIwere8z6pyIh6NtcH6b3HY0LaAeEuRKRe9YCFV1d6zw%2Bw%2Bh2glQYqjC7RFNsnnAkf%2FVU2IjDjOb37YWtL3ncnWoRHo2I7v69lCppNzJq34MnCYBWNJNFnsri&X-Amz-Signature=85d95c98d1d068051218ba378ebaf07352970a3054dfadf57d324967c96e2599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

