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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XOG23M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVFPn5DxrNDeULxZRHtd9Z5I37UDDk8QrjrTKWqT1yOAiA1uI83tUZK%2FtdwBzuqLMNyNWrtVv8T%2FfUdcRx9OwhbRSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC4ygBn8SVEqCccg%2BKtwDGNCyEa%2B7n5iQRABMX%2FN7OlxYU%2F3t%2FdxZERqhpMwEn9vgZWP%2B6WRUk%2BGqx3xLKh2Ro8LUCcQU0SfYNJw8uWcH7ZbxrQ3g2Bl2dKa1g3%2FHF8FO3HKunrRVt%2F58TcupMtZq8gJcZFY%2BcAWfbUwuP6iDvXZ%2FeWZwekeLFZ5wC2QG1J8sr7nuwEpMJxU02lZW4BweUJLuGjOzq1Irsb4lhUv7%2FtJKdoirLEnW3aWka0Ko5HH8gWT%2BjusV8wehNSKj8I7GLypbCjxrcTfXZm2ynl3iLCZfk6HnRpsqcfx2EUiMU1xB4pLGjM9IYBzumt1tzbBS3%2BgO2vJM8dve9sY3h5v2kLGg4Yqt8f3EYjCOsCpiau7vNY2atz360oteW6fxl7P%2FKSeWW2fAf8tqLGDmPogQBF0Re5aSh4Fa5keyV0h0HU%2FRQTawxt6q%2FGpHnyJ1paSVnQKRL1zzu4JtKDjJc6C1%2FLhZZGcD7bMj12xBF6xz2iYy3pP79MtcCwAW6p%2FcP3LQPVpdOtKWMB1Xfrf0Z9g5b2us8A01KvR%2B1QXzjo6azVNWREKUNrn9%2FeFwSLfYmaa0FmBK71d2lH7GoYaMJ46blNJieb3rHKVOjtPvwW8PDaz1I2Ehy6%2Bxk5ODU1Ew25rUyQY6pgGml4x0QA9PplDGqI3h4XwLwb8HiwuBs0cSThxPv%2B1i7KEQSQhEYNextCrV3fiQl%2F%2Fg0fDShLSVSuae554%2FNUt2YHbaB%2B20f6vXGC41JzR%2FkySyfALt8nluZFdkaz%2FApiyFFhX%2Fz4011eZb04pE6SEu%2BZDfYZ%2F2r3NjfxxxyIpttG5SQKvxekhR58%2BWcE9barOOIPkRgxNqvyclJPJxtEOjwKMnBZFJ&X-Amz-Signature=1e52aad4e6cd69976752dc971b47478a8bf0870a15ab9a3e6c3742f6f77fb852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

