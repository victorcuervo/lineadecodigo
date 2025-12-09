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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642NSZGJW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T185009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3SUfgqRuNwexlyhJfxUKa%2Bg9nEgLCf1hNBj7PTN2XDwIgLZkGqQBQyM7zYwzIMs3c9Xe4eBcHKqojNtBiWpi7CFUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJZzKWbLn3eTQq30yrcA%2FmmHnVbwHf%2Fqrj1wg3n75WS9HKQYjt8X%2BPTAlaFHlHndQRn%2Br%2Fk2DmbZX6EbPTxZHOCF%2FeyVWPkXZS4bPVJgxVGVfq8jqOBTdaBK0XrTwH%2FVE8rL6SiTTfR12Tt8e37QocmRWA4RD6G6Bd%2B6qX0gJSja8WD%2FlVeehcMv6fbWKddZBmjO%2Bi5D8NLTtcyI012yyQeF7s3L97ao0u2k4tRfMth2AQY1hjkWNj7RH%2BZf9wMON3XPzCATXM%2BgtHB%2Bn4IBVzTNtPutCenOwM6jlEvZPBUgsvdvox2NR38vNCYN3NT0Af62QwsXUt8ZaB1gj2tz%2FThpCjYOp3CHWZGyZHfrW9u7QSVxsOpRTdXhI7xm1Z8DK1%2BOTStVFYT7FSs9TL7KqNS5cND3P%2F5Vjo2zuIipBZsC5nSZ8SHlSZC%2FI%2Fz%2FQmPyogM8uAZBk61xg6Mpmlv17j0Zkk3hyZHFDDip%2BiIP8FGrSkS67LMTyukYfRPI6JM0Fiwo2zVwAkkIeL32tWPjV3btKNYK4FLpQ8anDzDy9BQOVj8WXfSb8JBLSjLTySSu6EykV3qstV9mSW4BfeS4MDvkRMtRL2Mz7%2FZh9Iqcaw0J3nmfVcTupJdTL8wIednHkMAzlO6XgF3dsatMIa94ckGOqUBmLFWw%2BKzbK%2B21XbE%2BTkD0E0KebA1AFdY2ZWta1u2a9zNuD4H6ZUwywWZ5CndOxUzCzC1EY0gBdI0tBerAQhfIxQ0FvM7GhiY1KZBrGqUKGu2OHYcUJorD%2FnBitxEEz%2FH1tjzzd6G0ykWvWRnG8UbnI33AGezUqXGzR1vGrhohA2XcI3QnXpaCMhBmm%2FlEYtILA1E05N7amRaVT2UYTUzgQhytL5O&X-Amz-Signature=17cc9ed2de98e00ef4d37e5b2ce25a089577997113cd1142e1b7ca03f0181720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

