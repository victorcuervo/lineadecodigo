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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ2ZYPH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FnMDg%2ByDyF6wU1zjngpXCQQGwSOSVzOi6oYC%2FcsQuYAiBOwPlhrKw3Tz1Qk6hjI0Zb%2FtG2TD4HvEB5cOdJfkAsTSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbCh65o%2ByGGDzJK3KtwD2oP0l7ZW1ShXGsGOMhukSfU8a0VOEdBacXzz8gT7VGsaUmvikJf%2FWYlyp4W5xezfmAVfwUSc8KCiWPMZFdc1pMNQsNsRUsHyPvhLq5513aYqRTnYkg84SMPDa7lgx3TgDqrJsVwEZddkPHppJNmfA1ueWVo3AG5kaD9fkA9LPjbduIXMSCK8XZQ67UALYXV1pYHfzOhGC6FO65UNGon8oQpA0WGmkdBJsKA42ZhZYLnBY%2BnuIMlVhcMIv0dVYHGE6xBs2dslgNt1Os83fwK3PymWfyh%2BPqZu1cCMMZz0KEZiuvRvoi9ZEsP4zm7AkqCQMBmrzVb5jjPogIQ2ekG%2FyZYf0%2BMrPyeaIgSNMvrd2M18WBtwf%2FRVQGtXe9%2FRogH04V%2F64inUaB7Mdoeswp%2B8%2F3RQaUKprgi%2BqBuSUyQnIxQuuMGlOwKTFPbNjOkEqe9FqbvdS%2BEkZ%2BcNMfU21W1A8suyeGWtMqmKARhbjHuo8zbaGsO8gPr9HWEBo4IXdUrsvzZc9UJZsmkExMepTQe2s8enmawFoTp7JPYoZTzB6%2FLYVnk7Og%2BDY8RRMQQ%2B2MEYse3FM%2BD4BFtwUSE8qeB4s8RPBYuD2pNYplEXU3dhg9T9%2BCKAyIt0tegudagw4Z%2FiyQY6pgGhlg9qoZgh92qrCKGa2F9h5mMxSZnMYGTnCuG3tM3AffoC5xhCpSy4YVXI44EyPX%2BsKOmGupQ2XFNYwfQLsyGYv2Km16huAvxAR0Eh1ar6WE%2FPvJuJM9bUeJ5%2BBNrxHH03POZ4iYBz550IBM6qBGwd8WEd7V0EFvX%2FbxvuJyPMYv8ma1SQZVRfyzsB4s0Dgh2SP29aHRhOgf93FgrAOGDKdZ%2F8%2BMh0&X-Amz-Signature=d1ed6ebf9697b16b53e7cf2da12ab292073adf06a6988c9366b2a35d5690263c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

