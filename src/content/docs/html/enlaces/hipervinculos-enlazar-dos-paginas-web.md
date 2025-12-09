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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LH5D45R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGXqQxT1ENYtCuKXPpQwO%2FEmwf1y2D0Q%2FSrIq684MfAAiEA5Jkm0a1mQa0WHBdOMt6idkmi4QP%2BL46086In36aFsusqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6u2RVY07k4ewYZiSrcA5HmbgiL0R%2F%2Bu%2BQ0z%2FEdwflZqBOjFQPXHJQGmt4L1OrYk76b%2F%2BO0kvVYBLnlyExTZrlB2MC0mevNHeazDbFcZSWn45wgadS%2BaCsL99OIEzxm6u6ebjtccLBPyPxlPpIr2r33Zv%2FbO0yBVQZqrJf3CQN9MPdYld0ArGt4tJeCBq%2FVjQtp0kaPpAqPUuhfKrCdoIAsEOwkV55gagDuUUNGis8%2BoUAdLshJCByyVZ9LY%2B3Sfm%2F8X6G28%2B9L6AQDH38kqv2oyRwgHlGFC3Z4wdRG%2Bu%2BneByRCNg9gdMs%2FcQKcVpCgtT%2FBnSm8OPvllxqx8twvj3Z6jJWLi%2FFjivJ87bujE2EuVhpuxVXxDqFh8GA8uxsAo3F3%2F%2FRhzm0Tuj8gKJACX84Zv4P8F7P1jh%2BrDSm9rMPy1b%2BcCbzBCpfZQBEUmyiLf5yiCjuOw5j24onYf%2FCSRnezXElnu%2Bi673MfCHze%2FALexKeD2XpHRwP4RkusI3JdoRNyIOvNIDU4pcGlpZhjbjJOb%2B2yv4MJ1I7Q0gFU%2Bz4wKgVea2wYSq7iHrRgDV1Di5AVnRsCB5v4c8FITWzdmX3lcK5f7Hw62i8uXNyP9RpJB9h3aq%2FeWMx0OT6siUtdTAPQcUc8Nf8rD%2FrMNON3skGOqUBno%2BqU7igXvYC3bxHqGPLLzfMcTL9AUWt9e7MQ%2FoIv3K4Jzh4ulIeNwAl5X3G2L0p8QH4O31IaiBnBqX%2B2aS%2FpPFIdXixCZTzZ5Jon%2Bf9nQJUbxGV84VBG8XcQ0G5uQjX5uaQKYFPmVUC9%2FZPgBdbL7mXRprcbtZIznPHSF8fTvlYDO96TBaIObVkjp48ikckr%2BFE6LRx418S7ZRB04KwjXpY5aaF&X-Amz-Signature=50b1596dccc9605a979b8393230c9c94aef87f5d60b9956db4c4e532c3b341da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

