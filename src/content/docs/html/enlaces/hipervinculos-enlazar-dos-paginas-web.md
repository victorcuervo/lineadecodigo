---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6WIIYF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCID5ysIy%2BaBKIPHE%2F5na2iNdWZC6JKIYwhhmk1ibDjvCWAiEA3OyIR%2FWlC4UxJJJWr4pqYtMj7hVVSYUoCT0gERilKqIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLQz19gEQr0LMxYSEircA%2FJbK3Bef%2BY2hMIN1%2FC7xqnWSiMnTxoLWjDsjvwF4rvnRsx8m0nBrImY9EdMjm8%2Fn40%2BlI8bItWgEQ%2BB19IFw5mCXg5jqSx%2B3zjb4Ogb7589LHl3kKs5d6nHZWXTyKFxYr8cgTodK7mV8TEUcRlgMf%2BiGDKncL8LNawnfqNV94jowie0gj4fk%2FC0LG%2BNOQAzdenOUWIhfbhqqOLGw4ouXS319otQ2h%2FuQ3frX8thGD8mnYa9jtVuV7EF5wUjfCWOyl3Dkb%2FRtiiJcNcmNn2CwAzSedd41NAUOipj0M4ACwqbUaZReqHRfbvBLf%2BAzUhe%2BHGsLMVo7BbqgMojUG%2B2wMl0BE%2FLbHTO%2BTESKmuSSMAhBfI%2Bcm7HUjUOUvEn6IsE3vSPyHT930ZP5nNkgKhkJw%2FP%2BcRgvbJFuUiYMpxPgtSOoL8P5K6Or69YzJyqHIjBx1rjXwm6lQRxZRAXt3kjOSCcwyNnhnCDf81V5Su6kQ8H%2BmXohTZ%2BbZotHFcmyHsvNGsikx1veMAoWPl5DAN0ttvKWlJJiGrWtAawUEMeP5d3bi%2BXMm0Op%2Bpe5IZGiZ4eI9xVXk55RoSI%2FAGAQTNz72WF%2BWBSl8cJFMVmWFwgSUJ8Za%2FYyAozfs8MwHWKMJjzw8kGOqUB8ZHY3LLqjCbcqK7fQDwBD3ee3fzcYXPJGrRuC9TXN2UqamHKypFnqP9gF5Kp%2FVwCA0J2iqRYBG1HuOL4gb488STkyyh7V0mSzbYOnvn2k7A%2BVdkVvEUD9rNkFgEhZLr4HQ%2BP7SPmNC8ijUTYXkMRXcqelo4QgVZzNilsZfZ5Xcl4Jnj02i85TOUCVn0xhWcUP4kNuty36acdyaT%2BVzpaNxcm3GJh&X-Amz-Signature=187eb6aef948749bbb836220f49aa3a5acebde9b5478d7befd1f1dd4d405cb22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

