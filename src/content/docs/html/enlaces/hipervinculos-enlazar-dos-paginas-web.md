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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTK2IITN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCndHCYh9FjBCEdJW2Za4wsMkvT4UDTNvRBBV2WRafk2AIgH10OfrWgekS4DwegLEFZqrilaVVZVZv30Bv1EMVOFOoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDG58HRxjZkH7%2F6%2FihyrcAxANJedFEVDYgG6ZKuzzF%2FVgyIqsDFtm%2BEI2OXljk9lO%2BIzZuITGa4YN1cLBpURHWYKUtLuuD1YsvSvopj91KM1Qj6jm1hu%2BBSGvDJqbCmrvC07Sgyu0gfJeoXo%2FfnGr8RYvDaMO03xxpUE%2BZF86WRRs19uSCzIMdVKSY%2F54669rLhQOIrw2XGGT%2BzB5EunUup7QQp0I%2F1brOyTGr9GsHzGXRBIbIU%2B13UKEXtt73%2F0CVmSWzwBCbUprYU7y%2B0FqSKfP6ilriYf8Gi39w2KpXABrkOdpM9qAJH8MDxC%2FHv84YK7xkjQAPWs8SUwMpIxnLzpdRz8Ynj8KoU2j5ss0x9mQ51GIp%2F3HVC0aOZ83DznoYMR%2B47g1fE73Ct%2FyxGnwFm%2BdsPCDt%2FB6iHHBT75UFWkc5K9PgLkWREHcsWjyDXxtvQx3%2BGwztpV7Dit5f2o%2ByD18nr4RQRxqhgJCPO8b23GXvFkBUHqvoNVUjnDjV7rbhJe0jT90parI8%2FIgipiEISYjfGlrdc6CAmil5NjFQoqCbpsJwe%2F%2BonB7LlC6FHhCDgZarAdKXxJp1vVPD897O30kGqoLh0Q3lIvUAJX0K7rfopSTcL58%2FpuK9YdjHVQAax80MUeOmQZlMcEkMOmUw8kGOqUBwoXm3SuxmzAu4XHyhiifsnHURGpmJI3OQ%2BVAgZ2FLowMFXlDGrdKxJyS4bRu%2Bzb7yl6tyN3BBZQ6kcJ9Z%2Fu94fXYtvbPwitaIJsoapw9Bn19xLfvTfVya4lLwv2GYLXy9Jyf%2FN%2B5rtCWW0JmVxt04Up4O5H%2BbgMTNixSqn8hqEWEXqL2XeNgQraOvO1gEt%2B7ukL3FYMd6hpMqy3%2F7Ijq%2BTMExZdk&X-Amz-Signature=2fbda19912755e32363874ab1f43eadb154aa4c91bb5734de51ae9257aefdc5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

