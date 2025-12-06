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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZ46SUA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTCuPvirRWUVebxBe%2BUjIh63B54WF%2FoBQgvvD%2BgYLg5AiEA0rohGqD4u8MxPP0vEGo2dkka9hRJOuE6bc7AcXODYIQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH0pEVpbkAu8z0vZ%2FircA8qqULgLHIvecP7ZLtSl0fx0zmGJQaNhbl4GTH%2BPMlIF%2FMv7%2FcZXJ1%2BYuWsMrGiJo4fgFGU4NVl%2FY0KUBpZElbVFfMcVVpQH5ytk7T5hbIlN78pCz60a1uJCWJBUO%2B%2B9jGmCdYdendfY7d5Cuhsfq5DaZh7drNl4JzMlhKhPxsiv3iSgSfMQOcml78UFzQT0I7tBloB%2BOqwucpV08w0oAOop9du%2FdOBUx2PKLZw5QPYJFvyIbYfjXvHpSzHJ2iBTCxSlePFRqlY0sbvBtQOfoAEB%2FSoxEzsk0jOisakmUsT8hMzMbp80dWNmtS6I%2FecdcstqSY1I60dBA7WuvWZ8AubJCjZ9iZdROoXS0lMoqYslLdJWsmuUJtp%2F1b4B9SGgJ0%2BkFZVo1wYicG1kmSFurwYFrJFYaLb2OZTul0wMJkgTw9%2FBLUrx3w1Owg41uTML4f4hiHD7OFc8R0omnoVEFWZm2u76cMAevCrNqbOyZ%2F7YJAr6Nby%2Fyg5DqWJqdOipkM37HEOSo02stK%2FU0kMof8%2FyYrNzSHkvrhZgWVocM79oi8aOehw31Ytidm%2FL030TwowOSlNzWgIw6WpRl08vgdMVTV%2F7lMKdF9HX1vchtR3O6oJJdHU30bLzoUtTMJ%2Bm0MkGOqUBHw7umrNkwgwew1SFOPmWojbOfwXs0y%2FCq2a5c9NcLed5uw0CCHaE9S9Ygo9aCATk8%2BMx0kuTp7pxOluGgRkWDrFxrHUnu19PCB7d1Wmlu9%2Fb3ai%2FSMoF%2Bopj%2FG06zjrhRitQBoal09G3WDNufiT7IvPhQo4JGvmUQzuuA9kOeCBCnfBv1%2Bk0ayNrgainkSsJHqPEpi%2BoEAGbBymxxOAdnyllY7nU&X-Amz-Signature=9831a4836362fafec8e88f4ca58b099f2a441d9d638aaa83272d1d8c27d766a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

