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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT5IMZQB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2%2BDhFyKI7oiJ8rcc5UToKdrLFYIu%2FGLs4x0ugw2Ib8AiBs4tEgjGeKZ6Zo%2F8t2dWoJDioK0xb09JmDy%2FF92R1YfCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHvNwdmc4yibddZzfKtwD3O9STTmR8ly8OQOXYTcid1gOQnOjTvfnmL1%2FXLnnGt4T8p7VsptKKgC5Vt9XLc1kTM7kxj6IOVsZeYUsluVeNdV4LYCGjZ11BdbYQXrlOzUvbzxs44URwrSKywEiSoylGWnXgGDr7UTpAx7%2FeKSBaU9nzILoMyUHrxLiRdwO8jYptqz2ocILXCzD17JixW734KItj3WvbEKn%2BTItxRqsOmdQYQoetLhKGuMhjjmIHMbSB4NCJaXRneDKJaWYwgJ6qu7H6veE0B2Ld%2Bw1AbyLVBh35d8IOtlpYiM3cVG3ZgBFRUiDsB9DKMEvzpuzj7iwt77s%2B%2BP91CjAse0lmPEyk%2FH5zKM3oBPVkX%2B86AvtyY9pX%2FgicFHubjNpmM5iUHl%2FK%2FqN%2FPcvUaQp02QnHn%2FpW8BoCay74RyLxv%2Br2QiVCk%2BzAElC6bCQ%2F8QYQ2re071O%2FFxgKB3GI%2BNSKGkXhI%2FroKXg9DDit2uXKKhmzMM0NXWT6%2F1eUrMj%2FmZ%2BIZzCyX%2BB97TM0DNvcahB4mBfq8QQNPWvVldLx2dC7nCVtJZv0dpeYjtHmu0B3JFlqKchFQ1hJIRAqDXmt1aTg%2FlpbRf0iQeODFf%2FaYpKLHQvogkGpPa5azZF%2B3khun2%2Ba2UwuuXbyQY6pgEznqmiQF%2BY0yaCrDP3tVsCAA64M6f%2Bzd%2FrOZOePkjxna8klMxOIVMm%2BmzClWg5cH%2FOjTpk6nqgg2wwfRK4LZegDYKG84%2B7CEf1lV9wc2xObFTxDPHhX6r9THFdgbh527moJb44ztTeADb2pQIAJvf445i%2ByndkQEnJqmeoMEI8P9yLrObusKzOf83bGkg8i1A0oxGFj3Yq7o34TyCFUL55H0sc0Yw%2B&X-Amz-Signature=3c68443023a8191ff0878d3c5df0dc842db5bbb9170d98cbbac30d345409e80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

