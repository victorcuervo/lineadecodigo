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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SLHXRA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BGN9MGtvDqZCQil6pB9tzDrjBH6eyRN6HPVG%2Fy8DjOwIgTo5pX1Ys28CaBz%2FDHvIeaF2tkeDMEMqNCFdq1I6UO0oqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0u0lFnybPLffcLcircA5I8HiHEVgdvtcQVc%2BxccA95KCZAoyJV1E2JrqXp3EeqtvBUD%2BoPy%2FBVeoHJL2iAeLd%2FYmo80vf3MoMqZ%2FF41sDoMHLmGkMOKJVCc1E1s1KklzQAnu8EGxKwbY%2BWztbXcmBwb%2FQeVedIzelJGH%2Buf0NNG51gO4opoqtA79XbjGsmyRnjqTyvZPj4df783lNPBu7Y9YnbJMBgEPynzbDq0DQpOvU4gHQuhqBVRTHIHFMON5UDtv1yw6W%2Bhpgbf%2BuEzdzgfpSRvZ%2BVdBkSXhf5eHps0CmP5mH8eYMTPVQ92hYqov7ta1TGEx3OtPakKFDhzap8PCK65c9AMIaaZ1PXofgoAk%2BvzGhOfyJBq8EVrGuTZAaK23EJlfTlGkQ0yd74gKYrzSQtU0SvHl6ljzFsQmQS2qXZYnd%2F5yo4IxiN8XSL%2BwUMES%2FlZX2I66JN8ZYrhB5dagtv8i6xOz9Os8pnBBVpZXmNU%2BpsN0RtS7GN6INQcSc2Rysr1hWCa2eBQiDXz7u9E6bNg8regXbMYAbBimJqCDV9LWIn6HxzxRcMXeKY%2B1gfWOECHMj%2B65V%2Bo7jq0rVqQEbL0PN46%2BiupuLbudZMEZkzxMVkf5Qn3KE%2Fb9SzVgOa9zS60XStf3afMKTC4ckGOqUBPT%2F%2FVQsI1gr8vBIdc%2BewV1Zyrc8JhGFH0BY4jAPpwVswDMw0zdJRluiFx4VSE8AgbwjmrRQVGnTqX0ko50kYXjee3FBuaqRwIkegNp%2B4n3of5YCm3mDCuWrA1%2F5M3Q8VcLQi2Srp%2F5I5HVo6573CuL9Osd1hV24MpLDoTiIo7u6dEtRojKr10lvlC2pKBdl4XtMRo%2BZGh%2BMqkNakjio6qn99bgCt&X-Amz-Signature=fb3fb31e4807a38c45dd75cabd5ca39d94b9bb0d9d663b30058a2af35aa5fdd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

