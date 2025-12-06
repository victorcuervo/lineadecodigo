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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5AKNWC3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNO66GHnFuAkRQGiKnqR20y6Hg7WzO4KulyGC4Sfty2AIhAJL2f%2BzVi4O%2Fkq6WbcBWGQbDk0ZF21ke%2FLnla57uuKZbKv8DCHEQABoMNjM3NDIzMTgzODA1IgxLP1N4c9bWpasU6HIq3AOdve8Oppsi0iLUX5IqvHxC%2FcHZNB6pzo3V%2FZDMk5mTrB8ALPUfcgJ781YiZ%2B%2Bhwd%2Bg3a2BnDiHpyTY1yUryziyZWgnaTnz4Urbro4cip%2FdwlhB6SKdzqkt59SM4eALbOyVDDhwyH3WqCiAVHgeQfYsyvYFG4EBzYuxwE30nbNUVlDoBxx8u51OyjzYxsRsn57dpcCWwmdgDGDnX62TO89Duoc7o7XePl4I5cCMuxpi7rrZckGAXLC5PA8hPuqYJh63%2B5BJm0BhllZ7dlyM2pA6iU7d06CQOqZFH5AsI0nG2TnrBK7XTDS%2FJL%2Bv72kLEX%2FBux5eTjJ6A2xUftW7IO7XRwiBDBkonq9uI4%2B1RT8DvmcXtikRvAnkgQ6wMWHnBplMbIvYbwaWJq4pZq%2FN8bej3DubHBXRBEsLrcj0vzuIulSfBIej1%2BCxbhfTKfbnBQPTFVtrTnQgJaKwkVchSET0zc1B7sc%2BbhIy36s67LYuInFyaSN7nst4u6vHXS4naTp%2FHEcDeJRejXvWZZWZi9Ow3juUNOzKImDUp2p%2Fybh%2BhDLxfXqE09s1Vlt6ZVbQT2En%2Bz1Kb9rF3sNg00Rs1wLJNwMhrHPGeMjIZk3woi%2Fv0s6jL6Qt5w8XZ8r%2B0DDkvM%2FJBjqkAS3uJFACA72nmqdqDswjLz3WySa%2BqbQmDYOBtzYCpoXvkl2EGHnuuNPOHM1RjMlz9RZAoHanHMY2DhQENMcEwz2wWJaFtsfrb4iX1VaP7LpSg3l37sRuG%2BQJEWSap5IWNCrr1JII9TJYX7I3HZd88x4tn8cBwWU3xvOaF%2FrrcaUrB6feggg4GfSEeMMjdJZVp2Gb4VOHbrEKkw5lQKrj3slhjb%2F1&X-Amz-Signature=91f16266e094ff638f188eda82b5ef8673161b2ffbc82e4aadf992865c4a2807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

