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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVPOIMT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0qlqqmjw1ZvPty%2BR1XThoM9L0pxNBSeyE1Dj9rtyyWwIgC3goxWptwwsJyAlrFvD2zG9eM0CAp53m3OFgbr%2BI1%2FQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDdv8aMuxZVQfKUqircA53aXC3%2FeZllMdRGNfFTWIzFruwp4SyyFjLvpUGC8EoiW9NCuMF1qIKhP9QkMAHT6P8mCEd7bvSI8VZ1bt1qkFk%2BKknxPSbBRA0MOalgTJ0Xu5AP6bU1GiGsf4%2B9KHOR4hAKkWqIY4SIaN0TTuzYeSmgDDGRx3zpX3eAF2grjdWvd%2BigZ1HSK6v3IfrAxezqBh9WrMJIXfgLWZRIA5gP0GPVcTTdZvJxOJ6MhuD9TYfnep%2FXnjte7RNk7N6zU1Iz6Xz88G9FLw6K5STYjjDEKQUlu2vaIkuJkn9QxG2B7hZ1hOb2aElAl8ORyBXneV51%2FbWdOLZg%2Bign2hUrJb4%2BOvsS564Mt40A9TvGWS%2F005kWILEcBYGb2VXVpVDi%2FYQvEeJNynqZKKooRNfkA8b42sijryTGxPGd%2BNhkq655ikPvGVLciS99NGPcC1ySpUmgVEt%2Bb1UDB0sYcvn96kwbtOcB6m%2Fr8MmEYNkBmV1sivrZdI225J83I8aSgOPdd3VwBFaX2G6MkUUS0Kykw4XATda0KUM61JpTGlv89EMvFNxvth9uZ6FCEIzcxP%2BOPysswUuFR9Fv6XQ9MGG%2FBGrX6w%2F2O6EsKoop2%2BqqIEIO%2FyY%2F6rIkuodZaRoLKVYoMJaH3MkGOqUBD%2FK3Kf48U7GO8rwoB7yqXVjmjRziOu3KdDT%2BSnQBC7YV15pmsvP96xNBQZ4ueduJICCDOOCO0sOJErbPi0b%2FMj6YTaFtBDwsQG3RloegjirsubPHSv4jaaQjw4FifmvrkoswhfWm54hnPr1oWl1Sd75bF%2FYbkgtjea%2BqHkcoEuGj2u8J2rDoAw%2FKVN2v5CJVG3i9AxOrSEUarXU0WZ4TV4zMcwLC&X-Amz-Signature=d03a5481f71179012ea0398d7981eb055a051e66a4173838607c01c9f773360e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

