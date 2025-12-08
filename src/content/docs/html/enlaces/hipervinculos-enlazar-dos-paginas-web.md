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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKJ5O5Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNQGJPLwLKCtdSjgZbNyaDYia1cRHIP5O4DWx5LDHDowIgCiWA6HGCUFejbY5r6uQz10xvBuUyyVr%2BRtpjKbr%2BP3YqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMU4HRDt%2Bq0i1Cg%2BwyrcA5Fu36zLgxVJbFId2b0IPO%2BthQ1U4PHTy%2FYkK13mm4wS032WRdnvI7yEls44zS4YO8qL9K6EXA1DnQvCve2E26Nrg%2FR2LlZTd51tCcfLIDfzIVbKaKnNV2Ssjv%2BNULWqrrJJ2cOsknx7ZgQz0jP%2FO2ZuwkXlN8vLgqkW86X78l%2BxECFiXU%2Fezlv73TIkL9AzKDWIGR8G%2BLheOflrTADBEjRNiKe7zyl9uxNPs73PXzL9Pzv9zSzf0rJ4aY%2BRcrCsqNfQfqIrfNg61KF6s8nF0qQ0x2J4a9FMhIYxfy%2FtuhZIoSHomR34Z5Bsq5sWMHARJDAqKKcMkXVBOEK8OURqXotsegDA9SRbtJA9XHWQ%2FsHVFkm55xQT0jYiX%2FPlaz4JFMma8UrB3lBPNsZWgL1%2BTSXBMhSo%2B4oPaU9F4bId4Rsnbs3m9FHvy0WZM9E0M4s%2FSl4kQ%2FZY9y11di%2FqRLB5C6TW1YTy4wnVEM1SRKo2kOJ5o41JaVTFn686ErSxkEe89LcHq8sTepc7tuXAUA4EH61hJbgZfn3N7mAGh3kT2gDIbitDjpX6qsPO1r02qSXAA1sKS6li%2Bgd92FmVctMBFzUEMe8sltGZGttarRgk2pWjUiEycfSAC17tUgGzMNrQ2MkGOqUBwqdyU3%2BR7xAWeoAEcFTa7gN5LI27io66K14mvsRoSnLZLquVFP3ewf5MIorEz%2FCKZ5eoe0sMxzf5FiZclHlHrjqWm0mXOhNkHh%2BOqlUygr5%2BuJ62Ftolh7pvg%2F2Ds5Pk73jieYNMhN%2Ftl%2BalLLaUszJJYV8RvOIZeFD73ZsUlz3nElf5abptxysZ0ObIT2ZGNFcaml6pJE9P5IxNNq%2FNuaOC9XZN&X-Amz-Signature=02364fefc19c7fa9a368115e9571b333d7965fbc37d2cc43ef5e7f4c029a8374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

