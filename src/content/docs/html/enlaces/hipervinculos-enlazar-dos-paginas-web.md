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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6O5O3N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2Fug8j37MAWkIHUgVrL48fD5nVWSKKCsy2aVLBrlT7wIhALmkUpHm5yAYEEIFKTBlVjR%2By9HludZST7DNMgcrwf%2BsKv8DCG0QABoMNjM3NDIzMTgzODA1IgxCXxLRVZTYMBayCBsq3AN8yNNa2AQy7HaGAlSgnHyLvEAW1BwxETOuuqKAFnKI3oK1noBq8xt4cU83PjskYS4l3tLWkuVsm6FjEnL82Q34mIyOWxW7S7%2FwEd4Cp9y2unhB%2BHY3XAAWkYDRfiG4R%2FEcHDIDneBEYnxQ2fDV6Se7rrJg1VQ0pdhj4khhDO7boBfU6wzDrJjnPfI61CZzTITWsjus%2B%2FzgvHQYo0e9b6%2FsbH3kktruv9ixUuyYoU6yFrJMWxsU2l2w%2BDWlzbnhLCHIGc0Ff3%2BIAum9%2B9UIqoar3rBBV3xXTn9jG8P9fdIj6ai4PQmjcpg7JF1HbjntcpAuhBrBLqqmdAWNSGLXxFN%2FjS18Mrw%2BPW7qRGQBuQmAR16f55FmY3tSR1dy79vfbcyMiAQkJvZGz2zUbozSukEPQy2q49IRnuRmIqgr%2FAZQhp1axnes1ZkNC3JQb18uIn1HI1wa0QN4Iy266f8YSGPTkzKRkKCa1JW9CqDnAgs8OA6gr77FEAZRxUVcZqPJscK93vhdN63SGMd49Pq85NMHSDeNEcid2oPnw5V8B%2B3jkMvJuPU%2FhXz8oOEAZk7v9kH%2BShehHTGaE9IczqkQNCSW8m%2F3LJPLcQGp9Izmk8zph2X2T%2BHIw0sx5DGAtzCVxM7JBjqkAc5OaJ3CkVK5jQwjYXmUHGleSslm5MYghVIe%2BJ6pBZvsgxkc9RzfG0IpRXkxzI3rpnT1jYLvXRlO7psLfqyNubXrTy3MUQuQnTKBRCGGa%2B9cGXxQWN2oKalsJY5QL0SByhTSsi4SAeQsT4t2jmvBpUS9a1%2Fa4D4X175gMUbtX%2BrUCllrouFFLb%2Bt39n%2BbmUac7DJzKZEY0gHadrp4jPNloAxFIFe&X-Amz-Signature=9e04e308334872712a6e161844e02cfd320ff904da96ee37a4472cfbe54374fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

