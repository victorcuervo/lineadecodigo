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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMELBR3C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvEF0OkbG8wE08hwiVuc4IGuU0TuHnFyt10kXx7SbJrgIgU6Bb1yoFWtiQ6qIzPJlj%2BMPgi5LtK6r5QFDCTA2Rrr8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcrNVAYFsjqI63YsCrcA29xaFLduP69R5zHLWzBe%2BY0c%2F9mCqXfQcOaUvhLmrw%2FQy18GypikVHTbVWId1Oh7t%2Bhv8rjGmCKP98Va4uI39FrD4u8i8aYeXE%2BaOtqX0Lii%2B%2BUong4qiwmCqbUnGKL%2F%2BRyGIfCr1dySnnbbTs3dtkBBycHQHOvG8sgZWkPZFhnvv3MYlmJuVpOL0Y5pF5Ox9JCLVCAzNosikV5IXpp%2Bjqbvbpr%2BMF9b6lrhRxp7b9YKQbG0PjBxluIy9vd44Ct1Pp1wX3fCdyyJwyssA6vDBYmrpCjwjw5QNpDLSaEDO5Siwiz2t9xb%2BpYzJFdmFJID4H2fZm6qT98kuqG47LMSurJGu4tpOykPzX7kyhN3HZfgt2TmhtIDh2yzkMCkgpVmcekwa9%2FfyRV83N24FWIyeivYdvEn96HX7Pn7YSkOD9PvAdFXGikWLtU5hFFuurByD0V7EHlA%2BvgLddPxFEbtrD6cv1o7962p3gpQgqKHwhtej1OrvUSfuW9IDY5jJ84fhi5D%2BSRxZrFavwtTPSANZkPQ6YWLrlVMwbRRcTFn9pwrorQFcNMW6iAhRC6dwZWPNoQy0nyN6YJp2uy5ONt3eUVpjqJw59%2Bk3K2cJT1LCXB2%2BrSCmrWQdDSP8mHML%2F02skGOqUBbG5omT9Mr6qS%2BbRGMm38UZIOOOrewOawcLXEtAMTVvDvHOd%2FkEMW%2FdSF8ZLDwR4rldD3g4mGuxmnLek%2BjGEYFbeoGVR2o%2FUle4PeKFyqZA%2B3QmZCEMjOsex8eU6J2Oy9m6PUd%2FsjZeQ3PZnByhKM64JulA6rHt3dJj6LDY%2F7By5Sb2zTFIwnUaYX68UHKvuNFwM7Z%2FbwbLiyp8IhzqD5OYeMZb52&X-Amz-Signature=5d10583f9d5714c1e7830357687137c94b41bae65d7a5fb1a64dbbf24566f672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

