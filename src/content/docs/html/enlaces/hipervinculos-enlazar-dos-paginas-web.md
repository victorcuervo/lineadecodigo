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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRYPSPP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD85zwHjjRwcDZfsxk9fl%2FHAAuaMJmGL49XqUyGG5V7OgIgd1a0Q4bfvOD7CpASkxRGuFpp8NQ0m1uJQ0UVXoefCPQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkAzCHj0XWZeGSTgircA1Hw1sn4Qzg94FRHhnC%2F8pYtQl38EUJCkn1xdXYpE5UJOMGkQ%2Fy7YtIGlCSKpGhR%2FyWjkuoN2w556wRcOSYyZLWt3KIWl14frsfvMhyF2%2Bg76B2ZWDKUQO2Ie5j4jPh6UYkgV8LUhNn7B2n7AKVmJFyVbWmtoFJC9bG0y%2FrNLVGxtSSEdYGWtyDkYeTj8KBtHy5xA9NEZ893ZXx0Kw72IIP6a4WpZRSXeR9eWbfc%2FU2z964%2FvXkfkZ%2Bjym10SCu3ycF4U5d58%2FEHGAP2sHc3h7%2F0wH2xleRLq89UTt19Za2f3xQzuxQKq00I8HOh%2BiXskKujfiISPSwJ4ppSkAhoRF%2FEK%2Fy7aPRlojQQ64I7%2F%2Fx8AR5KFSyb7WA8uknUbNFmhtkpebqNEpS0nZbzhZAQ6ZT01%2Fn6mdf4U1BfGK26n%2FMm7RltBVeyMB5n3vIw8Eg3cQL4euuCHxE0NxeeajL8TgQlqkB3FbRQzI44jw%2Fm8AjGEyP1T2eo%2BEKjOaL1FNJrZCO1UacxB%2Bl1iIkO5UlTv3GjhyyFZ9i89L%2FZrmNvKXm4rZ%2FeG6OUbPw3H3JIPVaTCrl7l0i9fHil%2Bpzjun27dmZ4DZkWqp76d0cu1IDFFOFT73PTigOqPPDR2p3JMLjt2ckGOqUBBCHfcy1FWtns8hWjE4kerHvgxUMGICTa7cDWPWxkgP5oZZUSDFrMziyDiKXCPYxXcOAuweDWFRRFHDRdqCFxgAjhf0BhR06y9aHaRwa0wKqHeoQWkq9OiQp5lf9m7tRS1B413%2Bcya2db6GAnIUdBEOwa%2B9JwljK86Os3Vt9A1orJCmqy9wkBRKtfaIxFOqrFdKm0QflvCXxqcQwJWVTgB9i%2BoMPC&X-Amz-Signature=b19c1c1f80c5ebfa4cfb20e813abc5dd94aa58ab6805032d155af90c265a53fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

