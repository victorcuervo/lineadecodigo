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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAJCNA7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKcTz5PMDUaHPDJh82xbNb10fN3PYqxDS0zQOQRAdAvAiEAkYFHFYvh77p5q%2BuyOWe9vU%2F6BAoz8QcX%2BTEcS98KMcoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjncCJ0zLEMLxA53ircA%2FifHNp9m1VG4vU0qkdu9bNQn7q9KemWEbrPzsSwd7LPHJNjwcrjLZ5WIaZSz4P6qSPuq9MNjFiZiGWTQ%2FYiQZFuiP9d396Udwk0h4FG%2BQO%2FnCgXMbEYpK4VH0YZqINfOzAHsBHsFHSkG420IFY6%2B0QVfq%2FZ5ZWz7uUjx0N4qrzRmU90jIH6wp8XGvBNc7KSJgmW%2BWnoLYQ4FTyWRxqho1Qqp7nRoc8ZnBiiqhEj%2FAPZU59CNJIXqvY9gFoeqHvFnGxDo%2FjazI%2BNz5ci04cnZKBUtJVSSTXyikczJaI6kA6wV%2FwJp%2BWS5qlw5lH5rKEw5oytgn02vjWTflWaoyNL8AnBM8%2BV3D%2FSk202UUcko9eHIGbzxR0Hf6426Zb%2FRmTxkQCnmZYxpksVLLPmIN3lOSxNuiXS4E8qmsXbnT1UvCFAOW9wO3v3kmN4xTS4QV%2BzfwmBxRFIoAiAr1XZHpxVqcXtqFGGtemeZjjgL9QhW3Y6ZqxMIdSBi%2FcBOhTfDvZK1sFz0QiillnO2V7aox8zikUwrSAOIqYWt%2FqDZt54zkZJ41zzCiPtFaeggOUHapy%2BLTLJP9ccRqR%2F9mdHCU%2FPC5wsg0DjGhN8eHh6GYlX4xJhuqxF4%2FyCxFDTv2TIMJjE38kGOqUBDiN7FURMOwJIuwLMJLtsB2lh73TxIzF20hofh2VMxZjWemxWJMPDVrru0czMUuBZ%2BuybCsgXf7sR%2BMy3MsOsqlBrOygujmtJjbtffbgYNFPdJqVHsSGx4aO%2F4Eu1yEcavrtMy5ZRt8DRDrT8VVbJGsLhMKK23d4c3vA%2B%2BBB2kAnTVqvYcUDZKQdV%2BBNQzr%2FviYFzlVOwpK3KsOpo7dw%2F%2F%2F6ID2eC&X-Amz-Signature=7c4d98fe74125bb722187ef795a05b8a4f6a9dd367a20bc0c22d660531fc8cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

