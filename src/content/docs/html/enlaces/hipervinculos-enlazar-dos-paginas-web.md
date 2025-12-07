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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVEV2FY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAP5jH8TQXN%2FQRcWq20TQ7tACB97tIj2Zry%2BGSIqgIRZAiB5vTzzt7GRE4guNxxlcD5gdracZaVPQC9KohAXMXdfLiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmKgGumwai6h6eYwqKtwDoFuG9YOFUNaFKZSo55L808%2F5iIyvVGDBke9R%2F74cmX9vfUEaXgfCVNDFFSrkVQy8mHiE%2BXr5htVXWA%2BEQn8735YYXlFR860o6RqynXSgw63ph%2FZsgta9K2A66ILamGGldr6%2BCI5zMK38jHXupCozLfPLpcWx8J0a%2BhXLQH8DCmRXqEiqbaAYumlmKNkaKz3wjuWQ13hqJJiq2MrnPE0DV3%2FHDvcG6IXnBoXZaAshfJAOXCbwhVeGnSDMC%2BeqLk2baX16PVEraVM0f8RMJayC5LPtSLxYaL07WVQ3uNiTSBfTpZXSPEO6%2Bb%2BZ%2BGwbwSVWBfE1EvQNaUtYyzuDOJSBrxbEV4TMjG%2F2iwDcV3z9%2Bj5%2FOrKQ%2B%2FxwVdyd%2BjnZj6kY9jM4Tf%2BQfoviEKjoHSLrAD2tUT0MExwSHBKvq5vJ2BNFICgySy3wiYKsCEy%2FODCWM6At8kGmlGnjk%2FWM7tPJYgBmvyjlgjiU0tvJrN9T5Zm5EjdhOQRjRfuxpIPhaya%2BOYKzv%2B29J2G%2B7jVt9xxyBepZe%2F4Bl0q3TeVB49n9T72uQvWeZ7PkoBKZw7exHJkZD6JmaIVshSaFx5zVCAr6gZeuAT%2BebMLlbmHjxfJEZYx%2BkykEJ4SBlPsZtl4wgP7SyQY6pgHmi28QuGuITz6vW6T0QzFnRmCKtkUdeWVu%2BWD%2B2A9TpU%2FUMd7SXQSxPi0XpRAhK%2BAveVhCq7fwdnywIx%2BQYHgNABQuRMy5wOGQFVHecNJJ3IH53sv8Nu%2BNpA2xYSGjNF%2FPgWvZuYQuJujsk2pKdz2F3F%2BTGIoyHaHHZhjUhPPwOn6kO8Rd4oRgFlACyQcxczk29JgnHjgg0ubJolykeRUhMA4mk6zM&X-Amz-Signature=37408da1a4f51e7c19aebe8ed2cd4a72e52917de7b43714635b934b1acc86762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

