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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HTJ3AKE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9mWOLBy8E3u1uj%2F9fkhDt2otCA1fUy97yEfXuZvswAIhAILjhruwXqLu8HV3TzavGDmqHQ%2FLpWUtRReYKTS8EYQEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqdDW2E84ARBQGkRQq3ANwjx61d%2F%2FLFqzwfLYFKadlZ0nMdMhEDGpoZNxlbQMJ1mgx1GF8MIWl5eq8dmUYeZGQ58Z5BwRX1QGIwlMMyPDrt61fANYiowCn2t%2BzEE93nZBgBf4WDfXrPRB5jo0fdcEVvZa9H7Fd2Nwvany7YzcpIMROtE4kK3fX0Tm2KqPm%2BT468jRIvIqh0u%2FdaWnZEI3qPalUv9Ooj2nh%2Bx5IuQjswMUr7KDubzvyLS9PThcttfKyNOev%2FOynk3pHOSfV1w7IwrFYxUhmrDft4eRqoiZqYvrFVMIbrkUIGHmdNWd8iLCYlCxVrBcZEIrKhoRHVYCE1Z%2F3XC6Y49A%2FCX8mQBd00fvvMToOd17xvR76Y8NbrS9eJEdvARW%2BkAov32ay1%2BP%2B%2BgSU8f2%2FJ1W6TBkztn09noEq4c%2BZ68bmME4n%2FV6elV6fj0tdOm8VB1c4NiZ9NCCipVIpvoXZIQi2TaaG3bfCRIgGE3n2LvX4PL3BvUgAMbY2pKevuMWyTz%2FTpvxRBODB%2BHWw7ukexgwoHvny2Ip5NPwTIxHdV8I9Imq6a%2BUF6jSq3cpWTq0wGqvvVzo4jZ1fSrBeSLVQdDyG8gG96VV%2Ffw4TtX1FxGTzBJt05msTtBu4sp07i4%2F5hxDeVjDp%2FdLJBjqkATR3gvZf3DwOoi0Vj0buhjVIJJzOt6J3b6M0BO1FIAEu89GB3UonSKLn5nTyrP5NUyHTAdbGSTpfRvqMJUYOd%2BqRPj8Vj3ZwNHzIctScXogYJtljDEJ6NlfLhnhqS3H3J9i72Pee2dA28O14Lm8heZOCUcS5YJYopGIPpcQpr33LyjLCWfit4l3gGqMPtw4z1TKCWzt%2BxNrrHTfNnYEEjhQcQx%2BA&X-Amz-Signature=ce1915dfffcd4aac5143eb89583600e7881d55c26f566a1f57b564cab74cc6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

