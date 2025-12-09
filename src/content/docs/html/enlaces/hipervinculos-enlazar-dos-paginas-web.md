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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7NGJCE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFep7EuOSd1vgijwy4qZB2Xmuv8p3wRNjjXpbu7g%2BT9AiBA%2BMKwQgB7QmjLy892V7HNTQx7AYBVLldxkYRkWIqCsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8AbpvgRUdiUvu9EEKtwDBHn3EU5zjxdWZmQQh3UMPctq9eX5aNwftIbj3ON%2FabGGhEqeeTjKQWJxiymgcbZfOvsH0V1GSdX32%2Fyf350v3EjzpIiMh%2BWikOLiiB5JchNqs5mSLLRNmTBSS30Kis%2FwVP5kzUC6p1xcdIl3ayfWj27kP2uogi8gVTqeWnaEEfLyMRr2G%2BfdsIYG9Ud6605NCC394MmS%2Fcs3kwMeQMykNmSjsJnu7e0qPYTt%2Fx%2Bgl1%2FGkhuYrCzdNnwW4Bjotlfpqxz6IrktlDDSOT1pZ07rergzQg8om6NTi%2BZvvP5d6FZw3hFqsjTgCPIyvIg4qTEf8R9%2Fx8cKGQChO8cWmtEP7LVRJfDyXg2ciq99cI6PUyxNKW7vUvhAHM11h2b9NpLM6JpBWuxwawSJOdiOHusBAPFUlkqb42ngiVESo6Vjsh4u5C2A0ztjPSOTXpazeKOEifopFPDPhZ0HAix1W1mDGBqI1mQfO0dTcxQwa0LlTM1JoQ6r35TFe66KHlTEh4pg4pgP2orbntfjJInznknTGYAbtmjkTG6VwyMor4L4E%2FzwgYpFjIMi2gdGd3jxwlWxJmZldqZIduAqhnDiqzMi1VaoxVQLwL2vHt%2FVcRqt0KecYJIh07DEIW3FjfQwmr3hyQY6pgGORo2KCT8j8ES9IjLflow%2FH1GR%2FMfKZJdS6PeYm1vX5fGCZUZWjsU2R8kx7lCNa%2FaHE72HLSmZjdfk%2FLfU0xrtJQ51%2BhRx2Xrl57idaxhnXm5EPWnfCm1DyKGIgwZTllzYDZ8CK8qY9jnbxM3Pm9Gx2k%2FmX4hBLbBLFbFDzWsUzgoqJ3mGQWRbsuuEXHR%2FWQWM7iZhK5T3HOGXDBTXRBqS%2F1nG9wg%2B&X-Amz-Signature=abc5f4fc075c795f21b886a993ce01a68d53af202960db9ed33a3099a4984f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

