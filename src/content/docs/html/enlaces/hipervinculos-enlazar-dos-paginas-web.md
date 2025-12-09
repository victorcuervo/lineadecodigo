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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WBX7QGA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDul%2FwKpIl3ASErCebz8I9%2BNYr%2B2sMHG4cP%2Be6kbNMDVAiEA0rn1c%2FJMF%2BVqkQTYFGoPJIr%2BUntCJHyODdlEFD01NeoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4SydHwR%2FS9CAlcdircA4USEvw3aj8%2FC7kZzQJO0pX0OPir50kPmfv9W8U6kXTb3kNfRqmtjnqI7nEx3Vnb7vmRtw8gWoOAmzE3GQO67qp42FnSmFxEECdzDwJfF1954urnMVYy1l3tvtJb1qyqR0aVTzDm%2F3LJ%2FgchHXHQ5S9KZLlo76oOkLEkC%2FsdBwAYYsed2kmb%2FqW75KXRVNro66ms%2FJftBK6p%2BXRbI0Va%2FGecEAZb5xuwYGvNwlkXSQINL%2BzepjG%2FthIHATS6w%2Flaul%2BfHauwNnniTLhecSvJJIrCBk4tg8%2BmNgrFH9vn8y0qdWrOkOKw3DpUn7897HN21912r%2FRj6BrCUiZF9tASIXw5TicAtJiTyAyutUa8DdAUUhwAJRWOarABsIzBJN0k1soI3hOfsrZK%2FPt1GteqHtLvyVbOEZs%2F%2FQCra6xdp0Pk3CHgfX%2BjAiVrAJfWtevdVARr7ULYXHt5zH5y%2B9W8M9UQNjLfVSqOiDqs4cQmnbcrGktORKGokPmRxFohQplrJEzO2t4JItfjVQNAE2IsmLGd7pzIE6nHg42fin0DO4nRR5CcWoH%2BU8cE0w%2B%2Fghd9homne3YkboresFB%2BaG7DWzur1Vu0KHKOiPltQmckHuYmYHjPAfIPetUpXrVbMLTK3skGOqUBmGVQJb3aniV32ViMqin7mSm3W4cDCw4eQZq4X8qNNDCVXb%2FAtxd%2BvDSa9WrbNu5mGEw%2B5Ug3cAcpAXhRBpMsndha6uhtuj%2FrG07GApSC%2BGVc3kJjKz9lfpvTIcvkttEXnG6sLC63sgSErNZeRXpbixDgxdlcyWgHuYFlpvMnS%2FWjo2BBa69xEHdBOs6%2B08tTbcdGq%2Bp7XapnKt1yMmAv%2FvVapXHG&X-Amz-Signature=6628aafb768273f58cceb3420cd23116ed6489f5ad0a0827e5a2347f83c08d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

