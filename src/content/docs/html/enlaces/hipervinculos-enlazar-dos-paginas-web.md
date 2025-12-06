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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT27ZDX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2BVTOkvqObqQ52hSKTPjidnmbDn%2BoXrpjEPSM1hXKNgIhAN3kfd0xJlqbRwSEpKdzSg9l%2FPKAw3qiZ8HnM4UTjp1lKv8DCHoQABoMNjM3NDIzMTgzODA1Igxe00Bsz%2BPCyXCHQvsq3AOhG%2Fj4YGeYrHO4rCGbwa5HOW30%2FWGxShd7o3OLTFeiroDuZDH3DmB3GChMu3hc4EukfFYkyyfvZSPqQ6nzadQ%2FeP%2BT4lByuH5RBEz3mYGMk7t3JiI%2FbYeUYc1rkSEYY7rnkJTTZnWIshd4xdl5JZMNA8KIgsI%2F0lo5BMllJGRp5U42JqVy1P4h%2FsbQSaf30rWF6THe1D4LdqSENPLUauOrlH0yri6dwvogrrL8qljoQIMsJQAHin%2BvDxSDQFfw8zej%2FTjtXlkkb84u23HG71Dsq5nGYC%2BC50DpL1O202dVgr4OtxmCyzjo3FMN1HK0F2vCEK7GSeDKfZ1ttBu%2BkSu634PyBn5q4UcHvyZd%2Fh%2BB8preP04HyapGvY3Jlkvl17UiWBl28R8Df4BZYHHvP%2FkDnCpMeXxfLv50Beln3DS5aqYY2gu%2BkbK9Du4mAE3k7NVxJdTNpRXK0tQK12cfK3UfTBhuKHUnM8G%2FSVdP%2F1E%2BAsiFuqKkyHgCZkatTvRuf%2FtOzo0fB4ZiHKMjgh0vc7rbyAAn75Kir1PyCosafV8yXU1YLo3QEOp9R0LE7LzCnZgMvoRmAfBSZXdlAPX%2FIh3%2FcBx5tFDovoj3un8jBGrYOZWezimNj%2BOkbdDRJzD2w9HJBjqkAdNPfrMcG9MgOhq4JL%2Fh7GOneUHdPHVfYERx8QVbsLTHO5zcy%2BuRroXa9vVzPi%2FilwOiwZcCtuqn4nDuI2MWfefGpdXy7bsVEfaPWT01jH0Q2Yjg76v4cHcTXUnGd3j2GHAOL2yUH2pVanOZShrWCb1Wu2DTKjN3tQ2kGa0spdOo8I4v7q6jWtsr9eh4IZEdI7sRNxMOyoZRgaUpC5ttARYWobD4&X-Amz-Signature=388b83b7bc2206b4ea08ee54cd9eca084c84faeccba7cc7a3d96116b3f630011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

