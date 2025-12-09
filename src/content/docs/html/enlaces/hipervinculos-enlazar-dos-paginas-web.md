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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVLFASJZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxvniuN%2Fdu%2Bhy2wJymW8K99H%2BvXXu%2B8bZQHHgOClSB6wIgXgLH%2F9ep9DtPXAZHy4JspPABcKvBUmGPiALwsYpGT3YqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlsAW91KW5GgJvd4ircA%2B30fgzZ8NSthgHGmaCa%2BwtX1gGRiUqKD50%2Fr%2FMEnyAQTHEdgoH3B4NUcVL67nLVpU09Q%2FGF6M3CUvNnxY86kPtxEOpiivgR%2FYPBQLW1I8KXQ%2BEylFUDJETZCt8%2B5Hzk7hFXuxJuA95%2FJNb0MC8lVzMR1U%2Fi3UhUvANG2Myu35t36pPWYfkwSZqwAT18Tz4kkFJC6MsW3BrvG54FNjDnMJfoOCoTHK1547g%2BqXTjp5Gdb2Dtqnep8TVaY%2FTFvEIS%2FavInFU54JYqIh%2BDy%2FQ3c%2FOgye4dT7ryTsar1BHKIuUmNLXiU3zZ9WLg%2F9f%2Fx6ItjG1aANUNds034txTdY177ayaeFDLAj2zNg0VIV%2F%2F3R4dyeOOPTDWQsk1y9znXsjKRfir9GfKwdSvhK0PdCvuvWQ79lyZbBA7G%2BXpxbqcai7rHZncY%2FhvqLy9vb0CIi09ZsHzUUXGVyXgLYKNTyYL%2BZxs7dbRPALKriRPbiZiJsu4zWrIhXPHMlN8yaHGFInUyckkdDYVQiXj02r1zRUnhbI5ckzOTzXBKqmj8hhpNxj5RRJdHVPIF1StdF35dwAThLEI1x9%2Bnx7YUseG%2BVux4zNGH8d1JohDvd%2F2wNPO7htfhK6dGGrZvcTVznFbMMS84ckGOqUBGJZGgStz5NKTYNYn9FEOcoI0TpTzhQ6JNCnnFtOV%2F2H32ECODxN1EK2L6eyDl80P4rmxI0qNwkBH7j2JQ1Xnro7FjfDZmwgls4qZBZp3DEyv6vK3x3%2FEeGcuxCATaaL4zrY8Kgkpok0O8bLJ5gRu8jsaybjJIiLfwtoRGSHyVpQgancZQw594V%2BqjYfMrAv%2FI%2F9s80Nuwx71XogaYMsNj7Adssv6&X-Amz-Signature=00c907b8fd9827a6ac921ea8f8765988594971db5664f092da2bd5048b19162c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

