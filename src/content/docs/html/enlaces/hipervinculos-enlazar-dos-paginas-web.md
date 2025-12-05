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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMYP5BY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU%2Bc2vf0uWtcKnjZ%2BpsHTLEKICVyhWN9r%2F0aPgsmJ4YAIhAID93o%2FmGCs8PBMlNbM7D%2BZzcmXgRjj553EDLY4qY9lSKv8DCGAQABoMNjM3NDIzMTgzODA1IgwybDrJdz8y4nkunUIq3AOemdeTtS4AbdYYAndD58740AJqTpJTtpX6RVb4VJRmVI4Yi73KcRU5stO7fmGtnE5R4267255626P1qQxyqVUJWzasJ8jjEJR%2F3zIRrH84m%2F%2FXnoJ%2FXIgMPZZX2yn1y3h6lXyY6xeDFkMiF6WcfIy9MPXmHH6lfshxe4S6wfQibyuKdBmJCGP9sZ85pLC9V0EQh828K2vLD%2FxuXbtZoDhNyGcQ%2BkGMHCu0Rcp5lREInhJFL0z1URIgV6po0XqUASGXnZg2aCGXSQbY0d4QgsqdU1z%2BJiXuADTc0HwiaFfxg9cgi%2FI4ZFG9H%2FJVrweaepb5SA1wEHcWJZB%2BMYyjCGApMUpNKGjkOPEADQsS2ahuN%2FiSS7z93x7L2GXPpgNZzGjy86HiudCHW8xRiyi6EQ%2FEB5PzbHJXHr245K71fs1EFfbRlyllLmU6bhV2TQ3TcDVi1387mhl90xn3diKUD69ohKt9G3VqtMDkfGEgVO2a4%2FPW8dWIck%2F2Q3aTdb8jhqZIpebFD9xgf2G%2BvXrB9Yo3VdesAadYuGarVpUO13i9Lrrn%2FZX7hb50b%2FYuCUl2w4tM7v6nWCKIl0GJ0fbk2lNKxoZHfs8aQDApP7pMpejmFWIlM8pDXyzjnH1eqTC58MvJBjqkAd%2B%2Fmqjja8JEtTgzArTIDax89T0oT86r81Qt625rxJannaKXc%2Fv%2B142LhsX2ElOfC9n4iTIlvuVacGj52IGVSiA4gge6tQ%2BxXIQFtCsZS3qGHitFQCcmEcBU8LdCtJ%2B64MxDagmnXM%2FUNyulyHqp8gNFDGydAL28PTt%2BdCrb4RKfc%2F98wc40hM5Y79F7iQuF5LbmRaXfh5U4ZzvIbJWpPv1w8dZ%2F&X-Amz-Signature=6772df97b6a00d2d28cea0eb4194579485cd1c4feb04fe6b7c2457971a633c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

