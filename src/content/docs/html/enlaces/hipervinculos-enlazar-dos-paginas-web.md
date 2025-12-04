---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPRUCL2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIAzsx6TZKte%2FwcDl9fY4irTJ6KsUWxal2U5XmAT0CasKAiBTr6Q7z4kgtY3eGqOG06Su9l6a7vF2QA4WKU%2Bga%2B0xoSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMN16pRsQBtQwBTFamKtwD3ypicIapbEj8Euy50ULo1AMEGMWhVtsBVaHoedmVxaBfhiwDSkjZdfL6%2FD1Zm1zOdA7F8GlSH7x0qb77E0LAwKqTdIgZHLVoZ6xdaoSBT1%2B3s%2Bw%2BiDHaPENcw4IbyiLTkStUwEIbjep1nxvWq7R8xODdCWLnVJLiNTf%2FRlZzIRGHHfTfTTg%2Fu%2FaWhSJ%2BpdK8WqbGDOPTcRmv7dHU%2BjwRafxju8isnukn7sustaE7%2FnbvV%2BuXSxxtOrtQ57GE%2BOF2FB6t2IxUrNE6xSeK5X6icmvR%2BvT2zOBCgg1uzMvqBr7Qmz2i0U58Y34U9UQeSk6H5I8DwrazXLCJ6HQHe9b0%2BsPYBdbKD73B0hcrmvKOIL6Hev%2BMdp5JzuUNCARXgOacArEwCLJ2sBN2WpUiEYgJnAVauPU9LRR4meopr4AErJw0wkouBYAlrDxA8H06oiuqL5gQjOPm6pqyRnkNIuAVgQoXKBbWpORTEq2dzWxNO3aVTT%2FP7BiG8SJfRMuJFGbqgrfYUPskmYT5onsH0qVGd6AxmmGb54gSB7Y11F6w2mqiEdX9sEdlb9ldUJm67zE9PRVqVrT%2BMKsx5d7YYvmUiHYFlMLvriYZfopkXyvWGMCtYDaBxyWj55yQTMswjL3GyQY6pgEYuTimJUoVbqe4UXoTdnzAmbipaJ7pXszjgvgTZCey%2Fwkl8DD6xbr%2Bl2psoTyMsJ9E9JK4Jre2vYilYb7KL2yQ6BQ0KliK3kuQtNHbbwW3Ubzr4%2BdoeKDsFfkMeDB2IdlWN0%2FBSg8cr1U6ZBoZ8iNT%2FoRd4R976eH12ogOn2fULkJmQJ0Ol8ueJpVB32iPhSmn4%2BGaqhGTQvgDFTfneeN%2FkHz8qLhv&X-Amz-Signature=abc9fafa6c4365b64243128cbfd5ec92bac2cdbc0b6aa4c0cdcceec6f839ed5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

