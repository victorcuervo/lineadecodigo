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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGN4VEF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcrzJ7OueDwFgQv0%2FupxcJhU0XYYD985KqSXiGY7OAFAiBdZlqHafYfsMCDonkQh0NJaNXKDpnXT3ssT%2B2QNcN6GCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FasGvzqNVe7iDhcjKtwDS%2BM36gERfELn3V4rzZqaOoGMlkfl8QJphGhvmiVIX1D%2FZXABuhuEuVJ2CSdchSZGBgW8nabQOttwqyYuF8lsIovNiXcJ8NchWxewVjw5CZ62YpmnHZu%2B4cfDebu4eC5vV8uhVKdhQRCpkkr8PHJIvelDOkNx1xn8u2g812w72skeGzn3ZBzrPetEyVOWCcKHDAwEHFS3PtATEyxoWTgt%2BMYCY3h5umRMGqSGjyFOgTwsPsKqMxFj5fhn4ClXPTU3A7TYqC2YhoqycDWQmHmgC7cfp4AKf0M1NXYZSnzXWMM%2B4IkLlNGoN61iz68welWFRb%2F6lI4Jy72N%2FpgbO8KrC%2B16PBYH2yGQw2d4uQ%2FcbfzhUfCozOSsRPNNroNXJAx0VQepQwlKLo9ZAQH1AjnksYRkLcbsk9SMPM1e%2BdtHRqCttI00PPkxf7dUgQ7TZjT7I%2BAGKEH0BAp5Q%2F0r0MB3Z2k0InIUP122VaS1U%2BNpmVY%2FERLRbSD2KW2zBIyeyRZpNGV5N%2BtSdw%2BGtmuCJ5arPTWhRznUWRGkmy6j8WnVB%2BycqZq8mh0nBurpnrQHiB3OksjKqeTM98%2BjrpWSKvx5JqkSUmy8hgxR7Dsg6aSTYvUxqQU2FUyUD9zmrIMw3YXYyQY6pgHHR2Tin19yrn7sQY0bb88bxHfeT4fLvJ4uKIAMis2E%2F4cHnJcawJvM%2FGjXYUZ%2BK241QR9rV%2Fi9SXtLe0%2BqpmABUU%2F%2F1GVNPkRv%2B7tJhepxP34i2EpB%2BETy4%2B6bgAAEmME0uc5tXvUcaE0PT1RyeXE59XOKiCY83eM6eGm9h8cKzbM2IE9rpnEet32YCU3Oft7oDD5wgcYBF3jYp83jSLGR8uJTIpFq&X-Amz-Signature=892de1a184b13ba911bffc67b54f08e3209e38e8b75c4fe3daa3777e718e2164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

