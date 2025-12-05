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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6USXFGC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6k8VCSjKwMynZ7lsNOI8dcAeBdzvJoAfEJQVgqSkigIgTYlxIZtJqS1TZJElde5vwZoD1TyvjEYhgh5yczGkI4Eq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAOJah1bbp6uprAKmircA3P%2FQdLgC8cvth8H%2FrJJVuIjwea%2FR0wdLe7xhKLn2hTeBvQqKqNw0jNCU2X4jSCxnhyAQtCJJLocSset7KgbRkS5%2Fyw9xqbOl11fZsW%2Bu0ph%2F0YP%2FJ3MeogStkmgGA9XxPhbJY7I9%2FCFp20QfKSSJYE5W%2BK6t9UjsD6KPVJMys%2FO27%2FAf1dus12mmDUbLoAjteZ3nIuLPru5tG7lwhTgsDY7xVW80i98t0A6RlWfem%2BppnLKaQZfplp2VVaj1gFYFcx0rxCejPKbt2riX1%2Fza2wNqieExhly2yKTolzKRwr8tnSqtetoaKu87QUnspxlpzoAABJQOP7gWBRYFIDq7KOsLyg8MAbbIyk4MJfO5RQgUDC5zHD822NhOSpxm5DucXA3monJWgVfBtd083OXiQ8k2j5QZp9lMiNNQ%2FpsTZeA9rleR1YstHPfTJ2%2B4s9egcBKsCwY7sQFnLSNIn7%2BAnPr0BObQ%2BHCwpryDVEnsCuDtnQGFU7rTy0aipa1yzZbzq9DhP8rQruorI4owV4nXTLLRJTe83KULlnSYD0HQ6plSw8H62jv70TeQuxjWAE%2Fid48xttqbIwm4kLPx%2BceaNAxMZN9C1DpHBhHXYPe1faLPjQrt4zgoLLn1lenMMaTzckGOqUBdCTuXoD2vYa4qgdaN1ZKky1ib1h7T6u5nTJcjIXyRgvPiokbvw6L7T6vl2ufup7M6EsUFWVpyiRbuWsrUOi1XI8RztpFnrdGhp44EPNqjxkPjLBDkLfNDMj8Vkwgeagsu5bKl3IWNCFWPjMIfFj7Ml9kT3BGTu0PwdDEUv%2BxprbTmP24%2FHbN%2B1y9i6tAzm97bYLZF2%2FXM9Mf7%2F92KbCiFdDAcsmI&X-Amz-Signature=b9c0d5fb906912de7102b6c5a45263933fc09591162b52535c92aacf8d43791e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

