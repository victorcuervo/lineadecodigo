---
title: Hipervinculos: enlazar dos páginas web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3H5X5X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICcdm2xxuxxgTK86aDHnplcvtVPVoJ9jytFhum5LebvGAiEAyK3n3ko3yKlujmWghYkqCSL0ecoHfTbLcbIZ32u%2F8fcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHGms4I%2BzUu0eRjcJSrcA9Ufss%2FTNi3JKqFQDC3GntNK04VzhuJQeuUytU6u%2BTUzHsKefXkeOHZXX23h8vhKm0q5%2BOVEiUzSzs6tzrQWRG6zOC8X%2FiGcTg3KuesgZHtBwU1B9bTPFG4tncrLwLizqHT6pUQNEHgs6DFIAQ1Z0S%2Fpv84rlVhGMhZ%2BNRWVoWiDZJk8sjuXUdmvG1EfYU0h3IvyqmmiYy7qeU0Nv%2BwC5wuK%2BtOg3KxPkd3l5XHGWkOqNtmIEMeb%2FxJsSx2PAcVXjn1gzYJIYe9stC3pq2xiQGj7TKyQwcPeGdQm8R7qIxVJeP7WkUT7ogdLk2DpLc918WI2Dl1KjAp5qmq6DoA%2BM%2BmtlOLoemNLJJJU01iCaIpfPqj03EsNunOqLvsLsy77wrq6YZMMRbxO2nQzSs81umOU1Es9MkPwLTSS13cfVUDge7R7aShF%2FFpAcL6RQXzkJ2nxX%2F2yLhTwes7CnJDppq0onYwftJcNi7fhtDejH2tvxQIoiCoRPR7BeweHIdw0UZxmgB7hF9%2BGpYGseBbv8zoDXvlRzpicXy2tbALiES4p8Pa0G1lh%2FUgwvFOJgSLEebQ8HthjrSxdqFwqm0mYIam7yVmKLCldbycOUyTkyPKxJLaL177%2FM%2F%2FOq6LKMIXdwskGOqUBRs6NtQftqRVi01aJUktChZDi5DVNJXp7MJD16fvyPiK3bs0%2BrSWsSmAR341ZNwBbGzYoDIaxAeG%2FrkHBr%2F4cRJcTwq2RYkQVfUlMt7OhgINDJPCrj7KlqrZUkHicHmj%2BP2mCQW1a9%2Fqix7EfBvoW9RLrCtAIXk5q77iWkPb3%2BYAAZ5c1Mw33xSZ%2BeF4xNt8JmAvU9BCu1djsZpxtD9v0tS1dNPZv&X-Amz-Signature=ed2d2e0838aef220548a2937f987d74efff4ed91e47e8b724b2162dfc4ef31f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

