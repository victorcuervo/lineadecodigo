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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPB7PDP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbxz0k84mTe5LzloL8N0fMLczYxbraCdvQUFQrA%2FbW7AiEAi408DIi2ee%2FSQbWCA%2FDcX2IxXIG0Qlxw612aZwRXk9IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FMgY69YA4cqRqCgCrcAwGVUcoxQMlGR6%2B0jLCXcDdPkDIqvWICjY8crQWggchfheN7Q%2Bw5fxWG0IXYwJjDUnuAer7kSPFQDR9WHBDOcYo%2F2gFVHKTQ3OmcwvBKCLNIqKdyaco9g%2BivINlXBdKfw6K9LJJyEnS2j1hNY5qPkBK2SjIocLJeY1MdSiMKpWfuS%2BKwQboVbz1J25Ib3QVBVvQPcMt8YJdteiRzuykj9pFtQb8K6h2%2BiZx2sunXXWYJ4nsn1%2BOac0j3DCpqymjUeFy2UeFsn5m1FVhv2aOYuem35ANV4fRXm6T72dNYm4jh0gHGIh43nu0Xgkld9%2FlC5qhJlmHgfp1CyGfvd7pj%2BjUeOgS34m05lWTzGuJQpyVG5QPGecYgLpsVk72nNd0spKVoWJAw%2FMYVBGBjFFbGRCPdIYZPvsIiBlgHGczqareLCuEwnptKgeax9dRrpEVlBremzp%2Fr9Jb%2FacJF%2FrS8eG1YRX0K5oMpntMR6tk34wvd7aAtqjabYn0hew8%2FW6dkIp33AblvSDn%2FehTgp0HtTpMR7kfw3ozqVoN72D91hdL%2BQerhxGX8AWkOV6V5msjs5JgnybT41nnhRXb8NClyJ7PmEeWGwzthIkqsqf7BVL%2FnVxQ6paY3DMVmNw2zMNH90skGOqUBVJW%2BIAiobPV2M010LPpiingHJZy3ZDSxoGyj5YJSK1F9ruK3xpbzWQ2hIyer80T%2FEaFMs0ehGGSrTucpeFkgcNzBm04EegsNSNjpIUr%2B51syoLr%2B1dQc%2BQ51I59UXWitu6ok1qHX4sx0CtECzmnHT5atsx7K0qXuQ279FhmihRpWQ8jE8CSiQgfYidnB%2FwJsBf8vn7SR9ZeMMzRJ08LKgPkFWwVV&X-Amz-Signature=9e41b0ebe6fcfee4854707ba3430241fd0d41bfa4026fb9f7c34551f7201a8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

