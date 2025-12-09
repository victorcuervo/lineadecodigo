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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RQ23OU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2iUhge6BQvnJ2Iqa%2BOz7gf%2FZxXNPGZuxCfIG5Gd1c1AiEAoBNIcYxvSpPHxGoF2RP9f9NKmzbxKrC7ovPlSizEaPYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEgPG2ga4HQpemheCrcAzwK5H4lvQBfTYg1rSOXKyyAGSvc%2BjvLyuY76qFk4uYbk%2BIwjWIWLB3pmSzenC9FYWVFnxQQD0Yht1g1CHXfF8nOsPhweGYatSd8uJthDH%2FpsssqH0Gn%2BWH%2F6aR%2FilwwrPaxWYNIgPj4bzXTdD2e%2BZ26La%2Bc9dts3O4RF4sTJ7uvr53f671FBA%2FFQyILKsLgpPJQYovXgjOExQyROun4pIvFF3ky8qU%2FZEm83N7%2Bl10v2IKe8E6zlGIHty3WVlH5kRetmYynogulWs1t2qHqH8hYHOoURGZfPow1cwZQ%2FKia04pboF4kkcNh7C1GFLt8M6qSlGE3dWoTDK6NxOMxZ8t3YoDgb9yqQMm9%2FwQeiUeAquwMxYiD5T26LEKcmFMnfIbYHSmZfSaJ5EJdpnEYCgqXF09x5KpxGCT%2FGlDHtyqmgSL7bd9i%2BcTUrjZjUQqtpPDEtegomAlCkT2aZLGOEhT7OA09LqA5mudhm2UCIZLOGMiERq7tZeDhF6EGBCuMBn7YrGWOTT9wcFWoFsIEFBI%2BQ9Fc8%2BZsGs1RxvZu9WTXRWqoJuTKlUH5R%2FPM4ZsSeQn1AUeU5DODrRabSgedPC0tlq4tC4ZpGHjR74fkWS63gFB5SIXDDVGl8AFeMLze4ckGOqUBwe2rmrq9tI1YVBCFT75k7b3NAyBSfurnFukfFxHZwS6GsgqLGdZ4%2BMcrZA2Crv%2B5%2FCsQz6ipEw6kfJCbxqKPC7BMboQk%2BiBNN3zOqVu5JbWMLTZ%2F8Eap%2BZvBTgDyK4BVt4YowETiMbJ3THeGbudNLuPbwzIE8fYFadYxN1sY0NSPuDfoDh%2BHX7ALRNayiG0pcsq5PGMXaSRc1IMt83nySWokcZgD&X-Amz-Signature=49ac7aeb880443b9e173e4afa126a75d4fffa0d3a959cbd4a06959207dc6de95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

