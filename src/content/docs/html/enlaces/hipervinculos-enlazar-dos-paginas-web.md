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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P6WN4B2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7DZVR7oMHSw%2FBhBBedFyaDQaPZNOcJ0KABCM7bpFPnAIhALJ%2FQpaTu%2FHOjHaQWHdJXsY1o0zYw5Mem0trO%2B794p0PKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9afUbWh%2B90CRI8Moq3AN1llm5Jzhud7vldJ0v0DHLF9g1ahU7rqctu%2FOwLQnu545p8wSt2seaqFkmTbkbh9QK%2F1NCWbJzO9U%2FDTLD5cNVOT2Aiyh9ZYcYvP3TdHpPPiTaI5AmFO5fwBchjAgdy%2FrKpvLTV3psAGVfW5vxf0r03WGRMzxj4i67I5tNTtE2x6Cap2p1LVFD6iqImXZdbWAarLQKFlVYWU457gqwWWziA1v%2Fe6nGnUjoQZFU%2BBiwCIEvvGij0aZWIx%2BxvYChUd3gS2xZ%2FERcEuiMfRUcIu46A%2FfyMNSVdcQ99fpxeo4bvGkNcy0icpVgiuGpeg0COm8D9vRT5xgLfmysl1S1B5UuxfW3cFWZmz%2FVuO6VyRFbx8FhmE795MKDrDDnTco5XtRxT3vc8rKqlc7nCah3xAkD6Qzsvssay2zCOpzUBgYv2Fqpmr8qCeM159dxINt0Rxn39Q8p9GKwWf1m%2BXqP2lphWSj4G6%2BOw1bdodaMho5xNAdb5tfJQq9GD3mKe0RvlAlrOKfYiVBRpwKOsaPYUdOgkhllLembuSVKnJyq%2BoadI9D0RoFQnnFHUD8XFaTuXNHG54Nfw6gRwvTSSxiGcj%2Fqbw9kIkiBuEgJSJlfbBy%2Bz8MjC4%2BbGNB8gF1hnzClotTJBjqkAQ6A8R10yk2sNu82Kly0L6zk5KtcfQ1FJ3d67u10gcIbCSqgAjQmd8BUDr5%2Fe2CYTeca7JSvDIz%2F1NChQmArJ%2BHccxwqZFQr1zhqxL0sTCIYIZdgggaDUQHC14FZ%2FPaScC4pvDOQ3uTadZ0gOJ1%2BfXfk48KgPYnoOMSNPKeUQ%2BJrJ%2BCeSTAd8yL43x%2F2Wice0nj4SzcwY5t4K0VMrOptsy1uYRqC&X-Amz-Signature=b9a9a94e50afa881474c342e95e0ff8e2ab08e1b7f620e3174bd5fd470439c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

