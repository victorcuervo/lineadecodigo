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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MO7JMLQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BND%2B4s4KkWpzqVjfMmltLXe6zZ0JAzLC2cO0nLNViZQIgR7jNPHnf%2BKxM1Fn9pLqD5G%2Bg6%2BMaSj0vW4zmVRZ56sgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2%2B3Glbofms2iG7GyrcA%2BVotu1hM%2FRzMzKEpB3mY2tTh1eJDZk%2FGJHA0plac%2FKu5fZ8QBXUhdVKlN3WVovFTBk8lJrHoQkB1ZO8PhhXyV4k35dXo8QR%2BqH4juymNq8Xqb6gFEjMM3VkvE6gVxFPSfyE9kVSArxh3XQ3eo0K0LNYdEHOp%2F1AwKxwEKz0G%2Bn8TIkB%2FtPTJ7W0iN34vZ3o9CSqLVJ7wHMhpbCkFV1TTYrt9QL890egsJ0ti0l4JpnHgYS%2BmxHglxamGm88CiTppuyZ0NqJ9x%2FGDhPG74ShMVrD%2FGfrgK8IAvojSepU8jFuXhxH2sC%2Fqi0xkFc3AZwy9jp2Ikw8WxYPaMAKJVK6EQSTF9FcZkZTZV3WHFcCg60yOFhK964ehCd7WK4fXej%2FnS%2Bi6LpifMzW1XQ00fv7qZ%2BeZa1%2BfYEtx0xjBxOhMxIYsXYrWevXKnLY0RJXr%2F868YIvNojqX4oZjmJR3E%2FVkTYLzm0qpeL%2FJYsFTGknoytqkTh18%2FKuhenbbmqHsB%2FNBXAAsm78OSbTqQ93tcFTdRvO%2B8O4FmNTIVtZxJON6nlgMNGZKUdJ7dMuQVvUVQO%2FXjL2PvvGNOopfhnM%2BQRUcr%2BjbHBbjm9S9ncIcTznzd7UGEOrC9jav6kpPgXZMJfC28kGOqUBa7m%2FfdL81D0xoC%2Fx4FRq%2FFaKgkjbGVwIfKGddLzp8asRvknoQkx2nFfONl26MYU9QNtvc3TuKDAwSBfuoDKntIxfzjfui2TsUN3Ls3sr5aCooq2xZGiBSsPI33JgNIbOgovwwXtnHxDrzgDd%2FbkzWEgfQOOD7axgEy4OJCo9NCeqOqY7cuDcbiaL18%2B13rsn6nFv1%2Bq00MAmikzL%2BDZe3OP9ILk9&X-Amz-Signature=6e5a5cef60c29dd4f59bd8be079cd7dde0efaa5caa023d1726a2666bc3bdc32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

