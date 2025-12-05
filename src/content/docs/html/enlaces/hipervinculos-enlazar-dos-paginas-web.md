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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBGW7YI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrn9DzRUYJToyPgBowOePpi7ZsQJO4ARPry4A0K4910wIgRgXeCgSDbpYsqLoAo4iBLKEBlNjvmsPLVx6lrKDGHAMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFBFLnjs%2BeCubRZhVircA6fzuZt4UOxT0%2BrAXRrA6UdFkCby%2BpeK0rDfI6PZtQPyQ6kdKT2nXoTjxxg1elnnbnYyIgEI9hRXhlho4FiYgocRVin5o9ydEppl7igySI3yyVvmHyvU0ZtqBIvsWbajNvOQLiC1u%2Fb15GLAxykPmbYGLqRhHu5VxlAistK4gqXhB7Dpz%2FNACFqInGlpXLJU%2BcwyQlZE8qphV9y7504KPxC4w5SD4LaDP%2BHNIGsZoSqqFHSn%2B37rmnMvsVGbmYO%2FQluysdygGdJ%2ByJW52%2FStYD7%2F77VBsbeSypHXI674OC7PfXr9gWNZHqBtWKtMFkOqGJ%2FIXa31LgOCVWgv3fSqNnsc2xV4QAZwoYvGpzHIKHbrLfBN6yJNlUtelYsA0ITZmM38QAXUN%2F2XOONNlqxMt78mAeq3UA%2BruJCAv1uLIrfYWm9QKlMTNSXmBhPqlMvTIgArK7TJM5B3D95eAgqhma7Sl0WXOj2LHOiOSriGirwEbWqHo1Vjv71v9ms%2F94Ai%2BelpBZKPcz26YvzdPvIkgnXykSZczjuGeIzbPWDXja841Xq9TGFo94J0zLeuXZcK%2FkTLH3SQUlqgYYYylx0ZTCl3afh47hTwCBAISqhgVNoqoyvaq%2FvScAPPFjQJMKiryckGOqUBUBIq9fVbZ5IAz8%2F%2ByvH4MdHigVcJkIEZh5DpQmunrtIsQBnhcYxNIA%2Bi5T9tr5btoui095pBdgvhIAzieCFZ1P3fMYe2ecb9PlmBvNnpdJLKdDTToVmu0w4VCbnf4SfDCJq%2Fnejio8DFOM6HjaIEzvbw0W6zw09Y90ySQs7t9sfpajQRwByd5%2FK%2BWJF10PWQL9%2FU7LkoVFcMI7Q5IkyI5rP%2B%2Be5j&X-Amz-Signature=87026fdca39d0a2f1909bba180690321394ee314c42c2b90b58f09add282ee8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

