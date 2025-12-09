---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625FEBGV5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChw7%2B11XOgdIgu2yJ3hIVRxJByTOkI%2FQzWp55FZbulQwIhAIKIKALxlf1WqepHfSMbjRNElBvKXAqR1TzjfkqBBE1sKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6C1VWzZ1KNh%2Fj%2F7sq3AOAbDGhAI0MpKkoPGHaH%2FadXNisvJtvw1CqhXrRodZyESGILuNJo2E1DvhjGVlAM1gXKRIOw3Xc67lddOXdD3aeEluJqqPOi4czGlJTL5ojHAwq4I4fBlDd0NERj6%2FqLfOtKluIOFNsKNK4JHVncOnJ%2BWsAW3c7rHJBkmDhWHHx1%2Fib8qim1jzmQ4Ua3RkOh7LWDtFdAoLvRgrpmZMey2TWQEGDhz9A0MUTCfvlPQcYssQZRpzHMaTbQiTy6QkyU2d8U9U5yt%2FoWzsjyk3Zy9JU8HWL4uUIzNmGfodNnqiuTnq0R5TxlHuxHfX1etaqsZwZk1ZvBjDwPWZs1Jj2MAP0dWoNpD36m59pAOBmmi2BiwOrmslPdFahRIvL1u5%2BGZaFN8HXB5avEV9hxg54dUCB9n1Q8L2dKq87d8c4MJ5ZoGqie791XIzzYSicrQ4wZ9T0xa1Cj75OM3GMqmx%2B9QiBCZ2qS67Hj6RJALfQOtKpvsu4LuHlp6ewprxQ%2B6A%2BAC2ndw3NP4ZMYPXTSqteNLGAo6rjTmwejp8PYuIj0wBSS95k25BzxTHZI25sCM9yKsDqEjqi2UpmRpWgXdVz%2BssPuFrX8s0OTosVZKsg2%2FdW%2BpKHZID6SD7%2FPxI8eDC7veHJBjqkAQuUjB1CvWgiBQwaKKKGcZP9GMbDuSDnepNEX%2FKD5CFN5CiN0eZGmMq4OcMwIpGF95amxmfByQYjINDEatp4llnFUf10bw17V0M%2BJl7xRfHYjfxF4Vm%2BWh7JV3LpB4nqqAn7ITRQTx1ajNz5Oti3vdp7VvDbkA4xsM%2FhKa2JAOzDFLgFo8w0Z9Eg8C22JO%2BqEq1kfsy1%2F3sPx6A1%2BqpWt6PGpmtK&X-Amz-Signature=1d11897c55f3373b57c30e8968c7964253c5fcd3d83419f8b2387537ecbff10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

