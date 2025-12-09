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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJXRP4W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BCeAe5YdwkM90vA8ravZg27hzLkHFTgzO87LS82RrOAiAFoDfsKUkN8urfHtSpnQzFrd2NUlrVWnA7yrBHEKKNbyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvLTVZVrGDQXnzRBKtwDP7UPJEdyynAgxdekuklizG9WX%2FmwdWF7MbQhiUZrrYKMSteNmGBBpBJ6tAUKzddgM22KM1s7kpIuiVoa0ssMG2%2FFZWzL0zNGAgkfK0oOnBq%2FJ%2FBjBOExYq6GX%2BkoslggR6%2BKjkp3%2BzizTtkLtcsGtgQrVtUxJ6yWt13g9XneCuzh%2B8nmgR%2FMzro909QkzzXzkOkxI2ypb0xXF4OFX0%2FL%2BF6SnH7Fio%2FZWpQyD4ex9Qdax2X%2FrEqsHNRiznlfUK3OKi0m1ti3iFBjgL2lqPl1WHOLGnj19DtULmchU%2BCMrL1EGMXDL2Jv57a2W7Sng9v5oUNeU2w72j%2Fbi6AvuLICRmgt5cCi5YrxdNoH71HSHDt8RxTD2NJ%2FbsSNhbqEahCNPy8c%2Fw%2Fc2nZG%2FjIWZLXdojWGQKsnOlwGMl1qMHoFvsHqh5h6pFdHwa3iyYQFEonEGpiCTByJ4Sm92zVqHqO6IH8PjrGK0linNXWokioBlXWEfgOh74%2Btay6oGmz0e8xf6ILdw8WAKwUXujVkvZcv8VozGppfDXafNydhYGzyQNIf6BzmyODW%2BdAxx1%2BGPbATlybujL1heP77KjwAd%2FI%2Be7p5VXW7DYgcCNzBB0XdI4hEQJw9yunJoJAlSvswvd3gyQY6pgHppuByjuJ%2B%2Fvz4EnSqm7LWXfwSIGcvT%2ByS8SHLm82p4AdjIJaaLJMARJoGnMTKPtVBa%2FvEi2SpvdPVXTRtpSaemmlwfAx20utA4dirrYQrDbiakg0H3AzC6Hyerr0LEFriCypoccGrTNpI6EK6nTvcCjTha79Lz3Qb1aONj7ijtwFsSMwrdDDj0SMsNAF0pzuJfvN0aptkYjLqmNESe%2FHuROLWjG31&X-Amz-Signature=f602450a95b68bad40cdb4699f91088b0fe7d45b6f0b66314dd3340f083024b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

