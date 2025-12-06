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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6PZ5YF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIw4CPHx6P0eJSBqJRXi41%2FC%2BxMlA%2FTbNkl%2BPIc2%2BKyAiEAjN5fOX%2FSfbxRNcIjzrkpObw%2BFO5VlQG28Tw68AqWFQYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNQBHSWp1Njqsuc8%2BircA7OKFpzEVDck2Bgu%2FjK%2FSa8kmU38NOGJ5K%2F2HOaYHRHrGubKq0DsGPQzIPuCndKCi%2FW1Q6TDrixc9x1mTbiseHQNnMUQxwq6STL1BSYzu%2F6sV6KcSJfEvBIJ8eqkbImV1kLvWgrhF1AvzbAwPhnxlESyIxyT0CRSWk4Q7lAl%2FdpqfVsebVYnUZdgtwSadl0GmkrwikSQjetWHCBv9cHYboGIsCGw%2BQWH2ywSgjpLhzLxvbKojDMc8BkXJhHA18450pnVYE7cuZhkeF8m%2BiUFFt%2FF1UoN%2BwL7mWeHgGBTEP%2Bp1MGsx%2B2%2F8%2BcSMI8NffOBbN%2FsyrmJbqxM7DGDggTAdbZMCGQaQnnvBsKLZo5fX0UseH9s7%2BmpEawK1nrSJ3rGOUAL1KJtFsJKhnQZbvh2B%2B8aZOpUPJNRsmSTaRxTjDulf6gSE7G9goQX7%2Fmah15DkmX2htsNKQ7TMPlVLALotm3RPN%2FZ%2BbTmLs6d8ksiRztkVW1K28yX%2FHYOnbKeZk8ZgBJPBi29FNAHD%2Bhg1FxgaJ4AtWpOai3AG0orjaWH1%2FOqyZUXNXKEs9uZT7FPl0MafWQkuOcszSbh4ggl48eBP60DkrAJUZ4R4aptQRwTlgl%2BNHSJfxl7qa1DliSLMLLH0ckGOqUBXL36gHGoODh0yDWGDpRScNx731P4TI%2BNJDgICRoIcvp0f6OfpO%2FNdR4VpdtAbS79YSR11Jj%2FQVr16WCC%2BZ6MqKwrjWKQmAB3adsbH6MthMC56jU9pE5skQh21dBcFmhHgv2LZ7xcZfGwBNcS74e9WfFhhMdzkmahu5fFwRjYDL5za0%2FAbFiuMfnr9hW8f1c4s8x9ev1U1%2Be58hKuecDqEswNe79m&X-Amz-Signature=d2f680f9e62a5545cfc80663241107563baf0bf1163c6b869f00d642ac58dafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

