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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI4YANS4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSGQh2QJutBqasBSerqw2exieV56kWlzi%2FaUnaYe5Z7AiBLjmWjJNdP0VNPGqJq47dIhzWsqQQT2ZyA7ItHbUjcNSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCBYT1wYlwrY1GfuKtwDBRSIEaIoIMrABe3rCT%2F%2FYDkHGpCE2RG69tSUcXMk6gU3RyhkXocFl3Jjl%2FXLYxDI0M%2BdvApR%2F0I7NAs5ER5NkjXMqsP0lm60H%2FT1FhXVTvGDXwphpCalrmi%2B4DVQoNPbmRMv8a39Uj6D6cZX%2B90tqgHqf6hO5bHT%2BZmRZTbjWe5LdBHAzSP2WYCEcfxj7nyfNm%2FIE01bYkQpFGnhGBCU945P7rQUu0w%2BkT%2BkRMOIg3qb9nmXQBoDl2cHoGPswFhJ6YPknjUBDuOfZ70eD4wDEiAu8u1xFAwBKkD9GIpdixHEY1fX3NzXqp06K%2B0Il9N15AEhLVU8%2FbdnllkFCudoyyFC56%2BEc0lfV0yr1qwzBjYnfB8CZidKDBfkJJT8bxZSsYjH6m1qW0H0CTHtfOEL%2FzLziWhp3VXmLmCiaLhulrg4oxVIgKgYI5IEM2W6O3Vc%2FnPT2JkZfYfQ0hpZvDPv6EIRu84CaokRqNUBfN8t7j5988pbgVaaYA1%2FvtjD92b2MACd46XuFitJ%2BZlDLPJ93whuKOnEEpif%2FHSFTkE0WDOdgLonF7qPjae0BZwhKKF3fTSfBZFT7rpSvZyxEEoLPWQ5WQnpMZ7LPHN8Gcp%2FYPETnYc7yrSf9jBX%2BBww1rTZyQY6pgHbgrTFymxsg53C4XY7U%2FxbfgbVp8YoqWgxgO7%2BGPE3lJcmkkFPpf5F0DjDdfs7MbnIe6DJvTWN6PuMGWQPPDRVQ3txmtW3qDnqdrUrmUrRgFE9vGOffEBYVZ1fkJTruWib1aslfk66D5j3GHwduJiPf565cln4Nt0WSqWWTf1l%2Fop5TFBWleVe5ZPrX%2Fte4J7ErXHFEhxt7MxFvSysKmB5CkLwKNQW&X-Amz-Signature=158aa1bce3c236a9ee825a88cae9b1a825c7eae343a3f1ce62b6ffda10bf6359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

