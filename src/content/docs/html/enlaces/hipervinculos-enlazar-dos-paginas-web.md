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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYIV2Q2M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvEiRpxpVES%2FqwDXYoWih%2BmZV6gLtc9a3tYNphTboofAiBt4nvVzhDAJe405%2B9NVViwvLQ%2BdGxmRXWqO0SFHeN2myqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr5E9gsHLEWxOLiIAKtwDw7L%2Bx3XF4VWKgUECvMXKaPCJmjrLj0R52wnhnwtycFV3ReCdgcSTXrVuaqqUyaotYosgNkqgxdqFpwYXiIAkF%2F91mllBMZLqyb3RFzW%2FytOEm8wCJFbTlRBX21SBxI6I%2BN8RTn9kPUGb3OMeZxBO8JORWFttIktgil8rkZ37jTAVQCFn3HPJ2vlXWa7jAoAi8vkMvJiCWnGgsphaE4vPr240g9jaOIXFe%2Fycxr8GX1RYN%2BqI1jOWFgN1LFNm%2FkUmQybuGr%2B73T7OUNP46llXl4R12M%2FVoZJNEmRNeByQnaO0LHULyy%2FRgZUPOiymom1OWQTmsMruwAbAi0vHMK9gKnilyx06Z8NEBufDYwSzh0yJbE9Zbra0PB7xjNBgm%2BEAGwF3Y2DQd1WPkVvMsg%2Bs51EM%2FT175oh6IT54MQBrid%2FCZZqV%2FHlhQsAUh94zhJ8WFmpbII90NWpsoCVCDuMta6AF2UJz%2FB0GNh3Rj%2BQRwB6QXXx%2FCIKoY9bexVRw0lBBTS1AJZQsB7mhWIdP9ojs2qjS24hpzkZHMhnZyHB%2BQ3kRjAf9khT4pa4ddcXCS2aRU3s1eWZY%2BJm3KdK0TVvXUZcswECvmHnMJ0CeJbYZ8mEjyTS1fjXwwiH62rcwpsPfyQY6pgHamYRXmrGYXrukjf9N%2FgoBlu1va0J5P3q6nuTeu981P25UT%2F5OmpyTUoOcJvkONU%2FUUa7Wd5tQm2n%2FFeRQvmftBLmGD4Jg5o9l8I1X6EQBUG2civ9oOZw35OFZPN07LE1r7uaGrkFuJv%2BTJ6x%2BiDMKcXl4QfIxJfL13%2BnSspJXK59whxYU5kC8kn0g8LNdn5nZzFZP838J%2Beb%2FJCZo1oE%2BYsRyRQdb&X-Amz-Signature=18bbe8e6ed998351a95941f57af393503a4dd98ad6643d06ee8cc5366757981a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

