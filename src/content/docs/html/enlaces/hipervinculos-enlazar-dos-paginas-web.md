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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OGJCVOB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClI1soYWFBBwNLjbRHRf4tig%2FBZIK4f8GmWcMnn3PPpAiAP2%2FeNYx1VdBgKdHB0TSh5q7AVlaUqgxdUpYqservMXiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl%2BER8c%2FRZE7lfFxlKtwDHC%2FxS64mQPx51cq6MOVmMR%2FhB2teVrYH0EMJ%2FE8vumaLqT3lJStVNTJTXXjk4eztu4Oe4O0WQW7yp3AuCkiCItlBi7llXiYTNNNcRkQPs8b%2FGsgyVFCpULvnrayDOBNlEcbm1CH%2BjUVl5Rck5U5bjGsjdJHtZ6czMvZhjKxc16QFetryetQrr53w8Ygfu6NmjJXVXcBRcmAHdZ67qe%2FHMhWDjhonuJTHZTU1nMTY1PcxpZ4%2Fn%2BCLGUVAkljEyVlHfAWW%2BBO7sU3XFuix5cxzk51i3ZcPR3ef2x9mc82EvnXTrMD6p0l4KDOHGCVrciYhBAHYgieTFPR6pkfoF9NqRlGUiFTeCLO7yf4Jjyb19URK7hDR060VI6zYyKqmoDJOBsywzhfD0PynjpDkKQLuc2qUiOmvQFKF4%2FFurUpsolywQQckzdsvjKjruG7LtNnRnHHnyiVn82%2B2LrQzKWisotbue47bNvQAJA5nGq4PFdK1kw0Ic%2F%2FUOyLda1fSdPX8hv8ZMYiSB26EtIjNnfJYwWrOHWSzQxB142RjuwX%2B4u7%2B9BahNWtqM7bEESwQ20tKvF5UHw%2BGRq1YITy%2FnkAGhQcQZK%2BhB8AX22fJdxXdnZd0pSqCeH5v%2Bs6kNXMw57TWyQY6pgEpYr6obH2kdqwEloS544aP2%2BhLnZfu%2F4ig6KazoD3Xmg5Y8M78n0FKXuAAmGvL9XvRVR9oA3XLA2VQnijO1Ns1lWpic8c%2FIenoj7gXkOQaM10g%2F2Y7nFzJ0fw%2FPdBqEUqwbdjxHYZcKqcoPIG99fwvySpES%2FY6Nn7%2FfFZoBtv89TSMFQ1Vgk9ZfQbHIPAXa67mrhnm%2FjgGVqxMnxpY5s%2BYw6CmKkwk&X-Amz-Signature=af6d047cb08f658612d72a14feaf470bc94677b346fe3086d389656e42294a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

