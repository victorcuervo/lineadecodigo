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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7LWDVH6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByekS3gBcwh1e02H4koF2QIjXlW3IV1Ccnv2B2luBBUAiBLD%2Bg0PjI2Lf6g1OKlEJOJWABZ67Rzuj8Cgtreq4njwyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMlfmd4xvgDckNWvS6KtwDFv%2BvQoYy%2FN9h%2B%2FMXBfEmL8noYIU6ysrtiVoaw0HKcfpnWrr9Y6kdcgU7%2FU4IP02L99OeNy58GYfutDOhogNjxmY6XGXce%2BKdBiovI2o%2F7Nuj9K66O8fSAnoct1L1zOPw4j%2BlabJOp2PBrQXxjLDXM9L689CnQpxaGVPKY6L6xbN%2BMWEDVxa5%2F4ahGJ9930aSkAtfCoLwy00MWDlEkPvxsKTiYYUSq%2BQoz19UfsC3Du0RcgHS%2B13wVPxRfaxBripqtpHc%2BMHlDPdFItwPu%2B%2F21i6LVadFUpiFTauyUXwxukpZ4j603p64Y%2BPtNUh%2Bgwz0PMBfCRaRoQi6npFsiJhwFeXIbWo1egbqoQe%2BRflv8elRI59nqL2N2gENlIQqtKrVGGEY2w9tVNdTlFUW4YSIoTvMwRPxDhf63CMysG8RtMZx%2B9bhlAq8uSSsRayPV9KMp3326Y5Vmb%2BRcc%2FVAnK8UuTAjvVKnPuTfDaH5f%2BwGfZJj4ENNCYvmbYJl8hi2mgk6tpyERq%2BVhP4Z%2B7ZsQt48i1l4VI3Yv7fYRvaCSB0zM%2BS7FG5D9cGfBtmeUgRkEt1eMlqxhdUbQiehhc3yA6t1yD3ei1%2Fdr7fUXyDeiZUUnXlzZyFB%2BZ5uRelYBkwyt7OyQY6pgEfXHTKDJbVNPJRafqNZ8yYvSW6w9CCOZEOghWz5uCH9Q1unZXDvoEbqJhvU9QEgICbMp9Vem54qN7SsafUCocPaTcF0Ef3Ome12jUVvb7GJsP6L6Cc11SZv11seLG2wwS8k1UtbZyHrwNaPQfDwysIun%2FwvJJZA8jxa4iXK3a02ThVsJ3SnqX4%2FT3q8wfbZR7uLL6I9SYOnUmbqS%2Fx3gWCi4%2BQfCJg&X-Amz-Signature=f6a89030fb38a2d6098f2b3e82a5b55f04b0ed74b84fb4e52030306c71cd220d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

