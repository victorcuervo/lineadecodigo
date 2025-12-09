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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3AJK77A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4KovTzCCywGwZMbL6zTMM8kRiZJunDeW0jGxy1UWYuAiAzvVy8gFLA3V2qnX2HIDZXDYZV6n%2FfMu%2FB2RVO%2Fv7V1iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMft0CnWvUK%2FtG7r%2BGKtwDt96HtKKHs14uxXpzo0zv0ZYTaUJJw%2Bawpi3wVaywifnY3e2jP2VCTj%2BgvOTVE58zGe0dIIOztioycAQm%2FkK4tS545SHGkZYQ4NQcIea3kW4azwAJHGl5GX4ZM9yuVE6DzVdTQ39LdBpEP85zaCNBu0k6%2FYNmosYYOhPCrkDOGhtT4kx%2FN4knHdm2uKINgxiOaA5f2tTgasHvxOF6pu6qd%2FQ4Rld3WqietZ7DaCIdyXiD%2FWO9T5xR8RVNF7anDVQBeabjUPRPGwvUv5ah947HAM3lftByB3Q4PG9SlnnpJMkJhLHUx83ho2AL03XuB9k%2FJuswQc8gbZksrRixthv1u9BFUMJFwxMM3Rwl1ERcuLjOCALBuBF4NJwWhQkg132F%2FSnL95eyAUxXqyD3S6E0F68wDu3TyxfE5C3Tdifnu%2FOv%2FfE9QqhpVyh9poaf%2FW8aoTBeEZN%2FFEXDQ71ccd0GNBWYKkncmgA5LIirCqIPUS9e24I11MwEFZ0ZNv52GOX%2FcBk9HCrbvE494vX8%2F36lMwbXIURCWB0O0L%2F2q2JhbiRUYFBDUMbYFo8E0LDdizhS9xlDfiidR78r%2BAR3hVy9SOIxFteY1iVd8JRsuPKvkPq5E7OCyCVanKEtp%2BowhZjhyQY6pgHVAEMJIABc1DDnxww4thXQ9bXlj1Li7FDTcu8p7w2S8OD1tKciGQL8xVnExs6Yl1JsQwDbR1ZDm78sLYk75knpuBvdmXwmLhBYmfSztmKCAzHspd1bebG9A0GcbWZbFt7vks3LHKe2r8%2FtjErfCur2quX1Ow2fssp%2BOcj%2BIB%2BnmVqx3EBRrXQfoKip96m5imIuxyHWIyibXcS6jEpZPJrNslRWE6QR&X-Amz-Signature=e649164b8c4056724f3ce15fdf98663473ef8ecb156def37eb91214a8aed7739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

