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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY2Z37V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaK9iAohJU6xysVT%2BMY5boGuo%2B%2F6SCGCjDrztS7MQA3gIgKoQ%2BqyHWCJj%2BDRiC%2BhjqDBwF%2B5EIHw5mpVAFwoDn%2FtkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9x9UUltBl61CKQJyrcA8f0G7NJNzExqnyV1zL8abwYUbrgLOutCgD%2B1ObZHw0URDH0mL6Ec7SM97VAPBzBbLdC%2FmCsjgSNU9jbkzBRTWUKYVcJb9IAumz763s4QqHebR2%2F6lfALJAikE2gCHfYAeAFACxfcB1ozD2oqW6ABKfR7djyDsU4oXNmNuApMHW7aZvg27V%2BG5qGrNgsClhDjkzR5SZGYIFGkqjgnjDujKsH3qU42EkpDVjkKpdLkVg63%2BdKYTUV8xYU8aVsnfYQJ%2BiF9b6CMW6KynQCGKzAZ3jQZLe10apHDXv4TXKwkoPtZX7bJwmjylgRhq6m9VyRUGpNNU8ErJrQyhkS4E4%2FGlggP0s73g9rj6ObT14T0dtyFUtEE88sRGgiYkFyj3AWO%2FFJE9Khc8BUi%2BkEe3QydHasj5vN60eiYkfkHwNJNeBef2%2FDGgwlhgynRMM5YQ0RLxBLjQX4a5YP2BoSzOlHf04RfmujGYNZPDvfe235fF9u4%2FIqLYf%2By8VzsbfyOf5XPSvjJbq1KHCyxh1Yc6P4ruqaO4DqShQdF7sFagEkOUcUi4Er751AjIGdffnXbaLcNk1oN33B%2Fh8Pn82SVeeNH8gy6fhrRBqQhSe%2BSEcctSFGCZXDE7BAQWrv%2BsC8MMSh2MkGOqUBF9R2Z7Rg1XA9i6mqBglkp4oKuV1wu8OI9Sjamc9CQvE9hDBKReQfAazW9zHepXAAVl85DqpjcUT3JDh2RRkjPYPB%2FEBRW48DOpqukSnLSGA6Hdfcgvi9eL72o6yJtJ%2BeVojhjUzMwkWtzeqrXrBLUa%2Brpz5d7%2Bae6IK2Mq7Ey4X7i0vWaZILvBnw6MtR%2FrnVGUAFhsDIfDMaJnuQNkSYw3VGgLfK&X-Amz-Signature=bf4891272b7a55330b60152d36c6550ea9058edcc0b9836462d9f1e57dbb128f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

