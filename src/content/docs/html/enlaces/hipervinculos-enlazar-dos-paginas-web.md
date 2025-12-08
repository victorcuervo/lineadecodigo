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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3EXDRU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKzLB7nxv68YgW2lma7VRVOKtckXUzyVRdf%2BbW1AwGTAIgQOXBN3yciLKQKK0xvv927o4Xocy9LLU4KRS446LTXPQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtb8WAOqgiW8LVVvCrcA%2BduoKm8mw2o9g8YRGKPDTuKxOpZKi3KclkmXpyWVrVD0YBNY3oVwv9FDkm9q%2Fxs4FUmM6hkM5QcMgftQDnCARZfA2oVhFJ%2F4PelC5RsV8kdi5c4BITDiPVTlTvW%2BIQ6oS1BJT1c77lp5BR0DeAAvPrI3WREXHmC6G9xE7%2F8AknHUCoroXwlMLBJSsRERP%2BnY30Cw2kdQnfNdxAG4nlE6qV8C5DJsKSgIkWV1VqeQCeni8SR7fCWsHYf2qlpsy4pC4j41qXCinm4XtmY87wDBqi42g2InRxKuvDJbo9X2aCA3yFu2HHL5z%2FxLVqhCoAYS6uozRWM9adwb3Zjj937R0l91bdDmJvcRXEyzO%2BVOfFvGbtbswtqG%2FMa%2BWilI3f9bWO30oKxa%2FYKcA7WHnfxB0W9xBSHRrF0bQ%2FYNqMC1WDkKgkBYi1NyyFwhxiQLTzgm0zXnYKMAIOui4XeOnZ3%2FT2N4Izy7aQGa0%2FmaQU%2FStoYRAU6o6gvpVyD49ZxkZX2XbwZ84L5TqSe0JaJHa7IFZTtHBEPaHjUVawEnc%2BMFOoyGFEMtRtB79X2oUi1fiDRmj6DxWmkQNEegRM585jp2NHwX8MIGrDqPYSVqOGDdIfkToHvy1sGsSC2%2BzY8MIvz2skGOqUBHKq4fzn421pfEfwwiZAOKFXykrfAXdnx%2BXFqoISQxOJfEnUzNQtmvvxBOweTjLeP9SQNGtP6za9%2FcrwAl7IHh1L4bt6hm703YD3UCZn6oCSsQF7cEoP4Nrg2u5nBXKmJ1PtFzAV26TePkef%2BdBXVKhJoOnieP0by%2FqDPFQbP%2BK%2BhiiIx2yKiAk3PX9%2BfcO3PbW89mgGIxZlaFYxaHDH5aeYNluaT&X-Amz-Signature=ada6bb7afa9eb80ed6dbcef4baf950bd80dfc3fb4b5de1ad489bc15eb8a32b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

