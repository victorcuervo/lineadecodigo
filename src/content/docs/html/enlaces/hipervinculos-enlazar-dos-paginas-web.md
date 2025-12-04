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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGLE7MNT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8FuHm1Qnuy2CRE850Lv1gZr2zPKev2GFGAWotNB6%2B%2BAiBS%2BB8Irm%2B%2FrwXNWgR3GxDi0JMNTfv4%2B7Xqep%2Fu6sIhVir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM5GybmXIYX14IU%2B7OKtwDxG5hYHaKOMLClCP4%2FBxG9%2BcODtUQLhrV1xNmCRWflfgkIVAGm8WVIIaX2t9LAE692rmjWrlbH%2FFHgo93JDGRRHG4WUb0id3N299pHWQVF2FxvAls%2FMzxQtioEC7sgmPxRgJVKipjx4eLpz6UUsz7dqd3%2BML0eHBL6sui%2B1JpNYyGT4IHp3o9uvz6n2tVtc%2FolvczJNdSLv2qdv31KSzzUyLHxE0%2FjzeQYwYnnDQ%2FqImo%2FKBqN9VPSZu5%2FkcU9qGDplBE1nGnuibfBKrI9csceOhYxgcyVYo2fGCtPhlDRmy8VJ%2FkdPxyREZzL9GQSG6wUkQUdA%2FLb7R6nKYy5vQsbk33Hb7y2v7QcEIQFam%2F1UeCSWIeJb3la6ValMNutEeIyrovhitceRDC9QQ8WlbiKPD7oHJh5ilFUYmMAECyFhdq2OnvEibIbnmI06BDUYRUZ15pu8QpYnY1LcG5YEjW7VPpWSzxhHMJohExmlbD3QTTi2ZuRNfMDT9esBgWFBi1FzA6s11H2dxJR6NwX7QG8gyEDch79AXOiLzrkmd2X03tIn%2BzkuDFcV7Dtei54tD0bMlnYoKRUHwJIV7m12EMUhZyK2RTcPu6Bf%2FuybJnaNPGZDl5Ousgd79fagAw2frGyQY6pgGq%2Bk3jc3Z2JhujCNNC46yJZPAp5kM1XGFPsRWKETVu1YcR3Z%2FjLs1E1LPsB3aXGfa7V09oD0F0tqQOvkSGjBHvcYSpriFibMhZ1Gp7EyYBT%2FBxNEWe%2FZhvOxYmY2MvnxPDTh5%2Bj6bfaI2vscBYFrbJnwMor%2FoZR%2B60WCD9cKjm9D1nBE3FVlARKDLvUXENL6r7xXzY%2FSHXwIMfHRTGl2sJ02BPQ8g8&X-Amz-Signature=04e2e844b57c2213560f120a2dcdc6cdd70a2015f5241d0299183f3a41446650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

