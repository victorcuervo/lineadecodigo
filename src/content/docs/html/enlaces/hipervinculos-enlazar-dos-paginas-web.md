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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUSCTQS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvcZxyXNSeV%2Bx3PH1%2FiZZAwesncMWyfw%2BiVTw6yH%2F0SAiB4tgAti83UgyhUL5v%2FnSAdgcnvft7MqOpmCUVrYtH83yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlOyex8wZbJNcsmWsKtwDHG8NUOUKzovx1FYa4UHviK%2FFL2IqVCVymOvH7AruTANwLOeIXm3t3vTbsUkzfOtZrVHSP1J3qCVIMiuK%2BWZu6hOeOmeMupN0E9X0%2F42AXBcGRPwIqRdXCs7VW0NeWpnIbkhMCs5%2BbpuQcCGhkgiqM67rSG3K72fgoUcCM6D1Dwlv5LuYrKj0%2FVbvyB8ApEmkCqOhMphhzoa1BQCTAjJXpGFGUc044BsUWQP8biHadztrD2%2B5y1I1EYnjzEefo4N3PmvOK1Jsb1djI5tNaHsVZRQPEOao4iO07mQ0DRJ2oZkJesj4n7cNPx33Oe2pxzUkG2PaXlvcyUQkwTzVpwP8ls0f%2FIWTKNtBC4G9RlCfNS%2BkEgh1O95ChseGmrvYmIGN5UehybYisBrLnnxNig2P4lGdTIq%2BXIOYQ86OIVEQB48opF9EhNe8C%2BcmGTp%2BuFPplviUjxV3GNhtBZloOmuVWzriIHEP70uxY8rQ3hq0teZ9Ymb7odZ4xpeA0pgHmzNsogmIdvxna7JcGLGFa35uvz3MZiZs7wZcsc%2FfXJra%2BvKarArVwDJ1uGQ6cpTpbx2qdUEWft3rBWRylEecM6EPRltFnXOwESlNC04lI9Ia%2BAUN5rmB93UN57LMYyYw1Z%2FiyQY6pgGmEM%2F%2F0IwTZ9iyDhhcb3wmeoEz3f02ijLDGXPvDnG%2Fn%2BDSL%2FNyN8ltkc56WhXHJ5BH7XnrL3w614jrKHDl5fDYfTXW5P7yh%2BesTp7GYPau3imI%2FhumjJjaF8xyHDO5CCHTqma1RWALlxVNT%2BIoWPYHZlUoiiBf%2FqMHwsHqvbX0Nja9yOLCDxXMFEVMZNoIS6qi0pKV5QFJaBxeQOCnsfeNyWLIJUXE&X-Amz-Signature=7f8e84e4a10d92bf93088a656d6984bb47e0dc18590ee1c163a291888c0b41b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

