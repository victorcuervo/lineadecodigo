---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSSVEPZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9f0P1wkZlmWQHap%2FkE8b8qfdJvXveJtrnDXoYP1js4gIgCHnhackCTCjwur9KaH5oRC1pQGNvKAVnZMRPmFu8x24q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLOqL2doQAR7kovoySrcA0IPzcssT7bK6Z%2Frr8f9pDfGrVnWOuMm%2Fw1k91gg7ayfiSvl4g7kJWKdXfg094qHbmBGSb30bTGoxhWBt6w6YuF0CXzIb8nhH6ADqKQEtQ8XVswgRS4v7zlPzsrB38Lb5XNMP9ecwRkgc7L6vrys9gZ3UWOZm5tECf0QYc0fAYRCGpzu5SkPoSQC7uQFVcVNNC8l%2BG%2Bxg%2Ba1O2ObE4aa%2B2VYz%2B7htA3%2BudHd7vBcviJyVE2o6ZtRAk6ptzhpaPZ4IdDfEaxTx2UwVedaJOaI501HuYQPXpKWcwkygQ%2FyUOl9WwcqBEjWI5X6yxLzS2D8ra3OTMU%2F%2Fxz%2Bn0SpxArjfeDOYkg%2F%2BVYaaKm%2FYILNG9U9By41PSfSrcNJ%2Bnqv1zc3PcreGe%2Fp170mC5IWHQRwkU1ISanK3tR5NpWqLFk8bWJw4b%2BOY9b8MjUZIdr07BvGO2QqF0AUem7%2BbJwYPoFO5m6zS%2BfALVQjJ07vNG01uxgzF20Swwc9w3EnbdxpfYFTVqcHBPujzUS%2F2tOShxMn1MrZbzLOs1hTWdiFa91pHMayemOUJxb%2FWAT5ejvVtPOxnO9RmlIxHh%2B9J1tCWHlypntFGMFgU6ACyaPm52TKBF7z4sUTK3NRUfOhP06LMOrbxskGOqUBFcdPqGzMn%2BtfQzQnKCl6cMsV2g%2B5xujXK5w4LL5tiF6LYjG5CsVESUkXuhcRa94yeAeUznZRB%2F2DCtuzyT%2B59LRojfuu%2ByvcffDgFQSQ1Mq0wxSIVPWFVg%2FqPEyL%2FM0P%2B4Yj3siU4GTFMA8D3uZLngajjzPKgpyHCHJtRrM1daOMYkZintgn1%2Fl8cr6Duuwopr48pyi2FRqfOxivf3dADGc9%2Ffc7&X-Amz-Signature=d3f86ed60fdb1f13e4ce51e19511bdc5f5a152e78ddf03c4ee66131cbae785dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

