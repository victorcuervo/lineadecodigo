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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EIOCZI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL5v03bgO2ukkRNkdCZPzk%2BcM%2FyIJojkRyRj3xizMCbAIhAIXtUf0QFlh99vpTVZpYvXtsDZPeH2nLFCCJ3ntLB3FWKv8DCE8QABoMNjM3NDIzMTgzODA1Igz%2FynskyYJtV1U5mh8q3APnAe0iuYXeIIqc4cbfvW8FTp0dzadCuPhvUy1ECDwOyaEsr%2FwAr1DyKnX9wDymzFHPZFKOlA6IMIS23RZCxTBNRl%2FoqemlfXrncHfvKeE6M7VH3gERNVYy1f%2FnFq4Mxt7xo1Do7eDCCqwKSipwmnZI9CNtlXwNp3Z8N4dRBJydgA40sU1WrQWpvrJiPFkRK30Gb4I6pNw8krA4tSHujQwLlLLX2SiG0PLsMJe%2ByoD%2F%2BHmkwf2wzw65ylgpddvQMG51X4VSTe6YXhF3B%2FBrSHQE6EeTDhf75pIcSEkqDV5C%2B7zNC1EcrVPQzGNIRcrJrMvqBR5sHcHYdTxL1Kru8q%2FVALE2XrMkTtgg6aZthefZhYAYSVWfjBhIt3q%2FHcuyvP6hpaPxuCdXThGdeEDyrTX43lLaFddtVJleTrdKnfHWZpVH2PXptR6lCRhf7jWaVZTES0pjOUjgU8ocB3tQluYZwHzw%2B0x7yBqOFBdWYfBvY1y3ODcjNOr5eVWIykLN5vlrjif3z8HIHM1AL59OMwvM7a%2BsqDOT%2Fy8n5skHBaTbT840Znpv1WCpIhe0o6Y28dLjLHxoqO0aXa8O%2BmuV76ntzRnkO7p1xSC0o7M1E%2BHLHPanuCbiPYDcvkPi1jD0i8jJBjqkAdhTLszGr57YO0Kb%2FKficXZoo%2BleNYA5JX%2BrX0w9em0hoKZCY4fygHjI%2BQvIOCYzx7dBdasHVnxZvCssXIpRFz8bW8VPHuJMEUhA%2BuGstU781DhmqAL%2Fu7N9Rcmgx%2BRSPFSH9SH4tjVoPZD14djlYHOf%2FrZNBMLxcldwnIWztmNqFv2mBDpAvpBU6cQlUjgbATusZ10lbOFeg9zUi9ljUbsshUB5&X-Amz-Signature=43346d0d1027f41d87aced9dcdbd87c1582ea73d910212d34f825dda328c64c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

