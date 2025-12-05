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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REM7SAED%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe%2BVxR%2B1exjjQbCE9u1M9YhNWXX6qv%2BTpyQud6hRrgpAIgCv9lQ2bEyqrinftbULeOmL6TN16JbUQvWRB0PkPnuckq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDH48E5rrPSa%2FkZ9ueyrcA20wkPRTKdgSCpaL9%2BdjE5q9Y2UYYUujtCKzZCuf0ntXOIVo8HwjpGYRVqo0gNsltMU9Od5IQdcqNBSRAPksChLL7a12od3ZNMdVsf0nEjnGx11XQDCF6U9CCl87nNDiPTOLWzq14uodt%2BR4T68hjJz4am0Zpb5ocSOYRrztzyBqQOb12KOaGXz2gV%2FmtyLXslVY7LVHo5sZeBhf7F8fh6TcGJPZ8cQ3WxgTRtPlh6NZ4gdk%2F2Pw5mwNX8ycR7c5FbI982f1dAdLBoMoIoECbIj0ZyW1Pv4vrlYJRX2T5WIyWI7kKDkOxzgRuIIokHY0KJJYta1fzqSYn0A2L3BVPXLhhiXbqfteyGfofWvezNnDlMga5n7cXvBM4radqgpQrZqruOG484M2si4Ow8kwhLMpVhz8z2otox%2FrN6LYqfDeEGKT9dCK6GzX8t8Ec9VwZdXb9pENDO5O5KTzcpuvn3r5EB4Vn%2F94LMEyUGJ727gC%2Bpk7A9FNuLn8GZwqGXcxQexcQ2VS14aXiEo1Kq7TXOnZAdNAnAyJMixDYUqDYAFbMAgrmRKGNVmQiUg5AIIYoujASvb%2BCUmRlRRjhNGitDREx1r3%2F2W61iGayoFe4Bb5r4C3XbaOZp4WU4J2MPiLyMkGOqUBTfhbBgk37a7x%2F%2FRRrQ9uMsKu5qBt38xV9NrwyNltpnARu7lhBqcZdxVylO4Tb4YHXT7qclFzjSql58A%2FIPyYwzgoeC8Pdw1eHu4w4v%2Bzha6437u71uLpzoImW5yyXWrCTZ4nJ06aX9QwJ5hD4pSVIm%2Bcf0WNciFWs2O8olPZwUMKFyMkXUpmnY2yzASLVTVl5394amonOvY4OYAlqUMmIPxdULig&X-Amz-Signature=31c35f59f38c80fa9848b994c9babced9ea0b41c4a2aaf9bb2af61e6f217d51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

