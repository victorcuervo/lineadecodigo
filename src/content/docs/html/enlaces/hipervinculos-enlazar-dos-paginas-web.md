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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFBS3EZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgPVrKYuZED7yif2rTkYRoRhOv77UToJ6rBDz%2FKK%2F45AiAhspHSoVqMvNUEeBbA5UQBJeOnntk7QCl4pu1I5mEQUCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTXtw5WYxGZHE4QC9KtwDX1crGCSQEhpPN7RbA2ENrXyi4YWZUllLU%2F7o35dKSfIx1p3ZZDvlNH9%2Bg4%2Fq1MvBmLbZm4QCC%2BSYbvcHt9Hnahsq%2B6386jKOUcsmPjUsq8WPXx9dpypKYedJT%2BRr25asZk6YDZ8ExEo4d76xAIzCDp%2FEEh2qoFrLLqFPUi%2BtKncZ%2FYFyiHOFoE6iVryBPbXx3HcKXh1uSSrnuuxwYOSdZO68zTUEREKUReqsN%2B9FsEfL5sB%2BLRJZ5bN5zPEZ%2B3z9gcE%2BFt7RdcMrd3tW4FlR1Pp1RjqsJVh7hMWBbF1WXaGiduWi2a%2B55QP5RmM9wR4HlNcXQ%2BYsXsO6C2TpOLlW%2FbgHQGPK1DWNkXYJUbZGlJt0%2B0xBTwIAX%2FHV8xobROa0huUAO3R%2BR6rAmKhSfnckJP1zIhmb9AUdS3g0k%2BX%2FnZx6rinJL%2Bq2WGFbe8FEjK9ZmJy5WInWm9ah7Ifxk1bcJy29%2BG0UtU%2Bn5nyZ8qAwo%2FqzD10GxsROr%2Fb0UHzUswonwC7BVxmICBlU1WNASJKbTh1XeWU%2FfG5mSiMJZochc%2BynHXmCVnQpMrCnpVsE7Y09VS9sj0EeE6e6BXlYMolqTG4COAaX5VGjfhzuIR9Wcu8luxn8gG5arcekmXowz6bQyQY6pgGWTfGftszszYog06iQqRvpgOk0htoGkTkV3Jn5dYZoEbBKdw4dx01AsvGxUkzAcQqI3P9d213Q57S6dQHBQNCe3HdNx8MDMnrZmzUO6cYFF3FKyD5y9r1Kb3Vb8sdGA92czUai%2BymU7hS5AZk%2Bghy5U9k2sH33jEDks6583H3LIEG9mcWh0j1efMVxferEaV1t1akW7UTzJgwNvsl7R2q5H9DHGJwR&X-Amz-Signature=6372475b7f2e4d7afb5240a1bc71928ed86bdb9f84d18b41f1d42e8cc05b872e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

