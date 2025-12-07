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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROFHROWF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCElAvsyxcxxDNLoDtOtJOqKKKbwDV75pKD0UnZ5xpmQQIgN%2BobMG8VANXX8Usa4YdKbw2ZlLrgCokI5Am%2BwgCTOAgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASI%2BEbIL7GU2n72jyrcA2H7KpObQjB5CQkbTQfIkwUvQjkWCwC0Q58lPU1UfXF9usxxfVI8wENe%2BpjUaJrfMFbMkO9X1K7%2BxG3rytfpib9cpdMwfEO5273g19W%2B1dK95jGooN5NiWaaWThyNe%2BhMMah7wWipkOvTfRl7cWtnYzZFZcbUTYePYy3C%2FK4b8nJ9dleqCOTGXWRA%2Fz1FdmwhbPFOesWUuIS3fM0UA0weKMXCkvV7VF8k0E1psxajcbW%2FsZzQInkV%2BkSfnx%2Fpj7UA4VRaXPkG%2F7Oom7eIMsb6vrOUcxDWTu0OTjKYslsTh5NGxfmKICQHe%2B2hFTYkBzYdgsl1e804C%2BYOjhMPK1CIbWcOnNbXft7r%2BhmS1CLRXyprf56WvNF0plt%2BaOeI1VZYo2lbTf2JqyxTMzP6VfMR08Adi0G4mMlxy0cer%2F6YDOCKfL3x%2FQV86iWMVJPYFopfvipmkPpYIGaOI2a2ibdNAOuJ5jotzd1iyLl90e9zzz%2BM7NVucPlvq7THZg44tQ2ifoIec0jWVsCUbyg2tzXntbWkcu0%2F%2FhFuamRs%2FU6KJJCWFV1EfZlpH2S7dNzy9kJT2xiPej%2BgKqyxn2IjPETSdeTd738NZid1J1M16Fqoes1lZPdIOcWI1sqYGdzMLOj1MkGOqUBaFUQKW2d6AppmE9F4xcYmMI9l7TLwPORuOFjPQNUtKB8wF76xS7XitzvBrn0zcxG4H%2F5bkOvgjo9U4LSExoFEfOkAgtx5kaoLVAJSd4%2BNbsRPGcHfYGnGY1DLBUY%2BIogZkYIsuTvoUpA4pVGiZon%2F3LhGEGV9%2F0yoXOzmuGx6u49sB30bYxds1ZeAw0Kd57B%2B8LWdOLZt8yssJfRcS6dSA3YT%2BjR&X-Amz-Signature=c9144cbf1048f0d062b3c658ce1175feb7cf402ea442a0c80fae67e6524039b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

