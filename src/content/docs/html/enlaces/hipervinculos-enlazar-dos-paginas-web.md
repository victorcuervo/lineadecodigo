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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPPBGF2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI0ft478u6xto1t3TA%2FN22K91zrlD5tJHR4INA6JflKgIgWg9NsqnxI55wfAkS24IljWnYeE7%2BQ4%2FRWGc7MEOzJkgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqqAVHwpoq6u1%2FfZSrcAwBmImrPNo%2FsCWJFdBG1369cjDXdu0j2c1GTTjx9ki5r%2Ff6q7SkGAg7dP%2FHEK8q2%2BHlo2rO9b3F4K1WQ1KlYVXOCLjR4isFMIkjruGECeX5xdMv%2FKkOewBNyyc3SZZzINKgpUW1RgIuKSXbAmRmMbuIY3IzyGtDs%2F82eTwkyTjKQgl5NH1LzbhGlnF8wL2m%2BCKJDTncdBb68hhs60E%2BFt%2BFWMObN6%2FnEm2v19%2FqDJoRkvID0Gg6f2NF7jFYxu%2Bsgm6UKlyeTG2HD7eY0fFtfQ0yOZOh1d%2F%2BLFy8Ry2m3%2B0kgtQ5zesRtxbRh0fok3g3slrgG4Hxc1vVoVyx6JsdgMbGKq0nSCJYAH847nvbhXfZga3xsZrlfDpIJIDCh5Li2sSPIYSID0nuSrVB%2FEDnHY3SKkkVLErVkemUC1tSATldPmdP02yvup4AVww%2BQfHMn2DKmgvBH3ZgZFRjQp28CaztatcN8HDMCj7AWfytx%2B5Y%2FZWKk61qEF0tgJlz%2FCFcAQCx06C8lI7tRj9vD7fFojUzBMVJf09zSp41UtOdXulXkrHNtfKtEH9B87U90pHqTQanP0mSW2ucv%2Ff060NYJ1NSLq1iSLpSskvYqauaPLyAnCbIw39r9D94wd3suMK3%2B0skGOqUBw99uPaEEPLTEdjXro0nW5fZAe0I2s1buo187KMFECe1hwFT98%2B74rLF065j06NXUb7Y68yUQ48XvdhYWOmgz93Q7uORP1yk2MWvqFYJJP2i%2FRDl4V%2Bq5jKQV7IqSZJ89efr9pGkMIyZcgCEO5X4rx8F7FPHvCiBfRuYkvU%2FYgI4n7II3gPi5TaVwZqSZUWev6T8uh3Of%2FVisvtk8iL7POGfrTWpE&X-Amz-Signature=4504b610d0f6fa09b8f44bffbec0ebc5b956dc07db8257c2e3ac7c29256f3be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

