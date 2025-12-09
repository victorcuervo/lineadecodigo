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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGYROE75%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvIJe6T1Tv4bwKe62dOkoc5tWPZiWoDOOxwccjYelXzAiAXbwmxjnXBSSoZ%2Bxv1ygn4uFPSuvfviMRGEPr3CQouYiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX8tFya5S2J%2FDv7InKtwDanZrkDTN4o2OLnhIAkJpBR5OSAOqh4IYrOlXq%2B%2FKE6veSW7M3kiY0%2FxW4ylGtQ%2FHP4%2BKkfyp9nfJBirSxVUQXSJEJoLG2HqUq3X32ZKLjuq%2B%2BsMV52aFFW4AHcAZO4FA9t1GuDivTE7OXv6ib4GqXNjvrscstsDkI39TerA86m2MtKi7DXqTJk8zVrNojeVp%2BB8aRjyxcMx1DURzU9071ezKRjS55Z8%2F7xcoN3cqlbkE9B0QU5tvewv5P6UtTJCD1cs3b5HrfHiK05gVE75EeUN3x0p8I%2FdNVxEkaDkciTjGl9iunnPVpEoBYV1xijSSF0hSv9mQ6vepGd9w9sI56n4VUYs7Z5n%2BnjfzwfNKWqOG1IQNubfBSijSeduzhpyVseX%2FzBygN86DSHXIg3Cr%2FOUA%2BQi8Di0zrVHReZ%2BI%2FDfjOFOIcLdAD%2Fpt5eZb69CrADv6tZX4viSaTsoLMGSWOHIySuRBljzypwtaYzQJExVjlzCdDk9cJ9NH1Qf5SavwEk5jQblRP3lD2PPBASqxnIHAhQj2RNaavTCTGg6HiVqjnSYeg0STqer4h9v81RRYloBsRTU3l3UC7JWk6kM8XMKKWhQsdkbX%2F0CjtriPGz%2F7ljpzvWyr%2BI60k5Mwot3gyQY6pgFJYeE1%2FEHCAcXHC%2FN7bDekKxUej5N%2FH8jUqNzBOMvx%2Bd4W4fBVdYk9iqzqYvg4r2Hwgcr6UjktWbxi2%2BKZEmu%2Bw%2FldecvwKBj0qUfBgpANPu1BtWNuhG9p%2FpEEakTY4OO4lux%2BarjTGyXxFYVTAG2%2B0s0956U5WsVoL2H9MPfUVd8zWVbtEybhnDsOMbW9XgqghsdtzpA%2FFADn8SmRpYKmvwhJm7dl&X-Amz-Signature=35b370ffe4b67c5b9a2e5988202cf9549407d618eeeae4c9d10fde7d96b15fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

