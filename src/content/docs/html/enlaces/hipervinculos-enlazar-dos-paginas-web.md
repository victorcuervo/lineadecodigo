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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRAKNXP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrTzcWA7T8HQErlpzG9ae%2Br766SkjIbgEhiI9HRzmcNAIgHbyEyhgn9tuveKrcNTSDIH%2B2IR0YiRtYbsQzDFLyXDQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B%2F6qM%2BOkcnmLCi9SrcA%2FrOSRheCoBPAcJFAg7WOxQfSwlbmjkye5y1SjKD4TpiYUDz%2FOWcOzfTTbW%2BMhDnWPKdH21ZzcbsLcEktfCvpeZoiEfCuJuA3QITEtdDX74OKWghiv4s3zL1bE%2B4IuqdDTIFGk5kNQkGJaaK7oI2oHXUy4jHN%2FDyymnscfRtqygojJTbIw2mC1w6QmrgsSfSuG%2F92GCVMBE0kve4iyXn0%2FQxSTGQzLKBL2NUTbIw8Mpl5RhxpVr6JGtdCOoNeJxjAyw7NQ0jhJYS7LNobdFt%2B1axWQZdmJnn7lKnohLcUr4fSpPRiNe%2Fs6tULuKo%2FT%2BuIL5O98DIC%2BaB54weSdQknufc6%2BmbEyRI2xiBd0hBYJwcNAfliQ0uanLcvuzb2hxSR7%2BPY8B6sqBKd0JDGx1lV2p8j1IK3Xx4MVvrEBr3frxK%2Bq%2F6Yt%2BjpNKgFfrbjSpHPv1KzaWA4aOsh5Vgr8xIjeXKYapDIi5ndWq%2FN1bXvn%2B4WjIODRDwBqxsJTY2nfH0TI%2Fw43yP8pMTNq0OmaHyza46ZYzoGkLhGi8If7gvhHFkIgEdOGU89XV%2FkkwaYcN3pwNbExVG5lsKHjJ8SowSVmXAi1w16CHsbmG2aPLNSt57mlPsITNaoukRxr6EMPTs2ckGOqUBFhjFQFn%2FPL3zV6V7GM1%2FNtHC2UORzKP7kLSzmsumxprHERayQ6fIpyeWZwlUazUWLr4hlsuV4HmF4lA8qN8Z2i9mkv2AFAZaIVFuxU8zf3nz60NC4dh%2FO25Aegi%2BoiqGYtZjUQOCcm5XJwuyXadw2udRh7rw97iTsiSUc%2Bj89khFuZHpBFi4WEb5PNpi5SdkDhukF2SLXQGYWDu1cD2XX9NGnh9a&X-Amz-Signature=45ed4c6a3bb57caa6b99f57b4f1470bb6866defaf5c3dfd304bc5ba3eac48197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

