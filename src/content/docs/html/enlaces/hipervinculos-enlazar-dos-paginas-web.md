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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674C7FEYZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsWiXAQzI4PuVgo6%2B4ZGtBzFHZorwUm%2FLymypbiI2TZAiEAnYJrQqy31U2szVdH8dgpnpF2Q8lrscwZuORnJ4%2BGWtgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8ULw9oGkBYQVkEZSrcA41a8leQI3BavetUv8P1iDVkGXACOkNguuoGDe3HQ7o0MIaIflpj6%2BV29qCfihj3d%2BCTct%2FzYr93JR8MkiU0It30U7C%2Bw0mlGACqMY8st5fN2QAmXeH7grzz2R0HMcRfWSsOmTwBgwnQgUnzS9OE%2BbiRlMsHskyKyTdpc%2Fq8CqsmTsjaS17NeApf11TpDLS%2BFxiFu1R884NToPtYR24Pj27seL2ZIgI4s9KR7m%2FOnRIvHZi5b8i3ZUoQzc%2BFuDfQry2bGIv%2FMMc6hC6F%2FkSDjy42mGLFJj33faGQ510wbxnmMj52A74QpapuvUWnYik9rRVUVo2e6z%2F36x3dH12r8DOrE7R9gng6mlV4rFqG3ZgMjRlh2iO5hDsiczbj8nyL8wk07jCOChTMi%2BvqgfydibZbXbq1Bxv1UWU0Ki%2BGr%2FDsYP5WKlv3yBlwE%2Br7QgSMnAlMBOe10Jz68bN%2FJZ7JjogslrPA6P80Ur5J5424QgZKvcMJF91k64325YKka0w8HYiteUvbyb8WsBYpg%2BH76thgqcUzSQeSEwtWqQQVA9BuUlSUe9TPkJeQJXEAVh%2B87csqS13SS2688D9RqewT5Px%2Fa9Clh7Xst73Ov6pYYuXPj2aH0GfT5JNklysaMMSe1MkGOqUBQjhJY%2FyLCO4byqsrUgMq4VwZHzhpEhZsvGW%2FCfnUe1oRo%2Fwa7uZhFdnUx81elfRu0f%2BUd8Te%2FXjR2cLjTYi4qSRZSIs5i0iHNsjptH2a440a0DJe6fQYr8HXYcfqtG1XZwSqamIQruPD%2BzWAIRaMVHX%2B%2B0k96UI2TbNgF3sebryN%2BZxx%2B7jVyjK%2FpBmFO6QOKlUylPFpG63LJjirC%2BZwBlU24xCC&X-Amz-Signature=2def33d35dda4663f60a88b1d57d0ca59e6c1afdc433e7dfce40a2975c0187f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

