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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6YVUKJO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKURueoOCtp2czGXj9tIoyE%2BJv6ayugIx%2Fu3lEIRHcVgIgTKttgmm4J3MX3o2c%2FfKx8PZC5PiHSSBHHTz87i4S4V0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXArUbDc2zXq6fNUCrcA7%2BPFIMJxV%2BNmyW2svhrtLLDoulX%2B4AA9jrcay6Y1VRRv2A0oU0dgR%2B24ddf26V9RzvVrltMR60bsZ5LZ241D6rVEk3b0EyQtDXGciNlSqAUPOZSmJJ3Uud3F8gaGUNGRAVwcMGU0uTpgKYFTi4Iqtx6LBCtq4xl68AQvWe0SI%2B4z2nB4cY%2FcHlhUjqELRUOScgq03g7L2KpK1EVae5HdmatMkGTWmfiSkGegMQMJE0LH3oZyreGzOOyRcwIFy6KIhhd60oJnRvRFIz7JvmmYHPxigQgOMDwgrF%2F7%2FjUXFm687wpztyR%2Bnfs0OnFm2rbScFu71UXTTQ46E7NTUAl44%2FJzkcHoqy3QZS0uotFHM%2FQqUUo5Bthf4PZ5woQRXwBqP%2BSRmkUzFmmwG0uOlqtiXutWZ9vgf%2Fb0mTpKoFMwkxfVqrgZqkuqvmprB%2B6bmEVqtqNHVAxiIIGa6RURnhOiuc%2Bb9s8xeihFGu6qfUdMFV8bUjFEQolgmx7o%2FJsUO5Y8wkPf%2BJrJeROUKG80CE0w%2BUY%2FLUtW8pPOsLnETIrS4X6cCKYY4B4oHsTShR%2FpYXCrdSPXy5IfMKBW98%2FR0BJzoDTP1De0NYCn2%2BBVUCEn8hASurAcBLYm2Xtt0SUML294ckGOqUBi9oKrV6xGYm4StnxplbsYHes67h%2F4s78AOaIhsxRvsHbmHilAt3rFadMe7Qh1%2FsYRiRePuE762GVYxsaeV0rcU3Vel8uYWAhf8OImFjO8QkuB6T4fv%2Bztr3WL8v59bHhv3vt5AoKPm562P8UIvo6TYKVtZTWQbv1pScxDU657tVKNHk0e2Kuk7VG5LQ%2BzUk6hmL%2FWLZpL5ab5DW2imAbIvEFD2cG&X-Amz-Signature=75b1bdefc3d17b53685453d18a9d390e6298b2e35cf301d44758bff66bd1c73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

