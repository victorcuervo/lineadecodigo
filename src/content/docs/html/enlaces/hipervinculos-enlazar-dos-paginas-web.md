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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTG6GFF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIALgB%2B1dDz99PmYm6qwVITPs3WEWEcVZVN86oLJVVSLvAiBnuvIHtTshSq02PrWrCJU1U1i1vAwnePbsaGRA0ZPTNyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMZxySOOy1k0AEcRgXKtwDUFQ4wvoMYkGKKPGGhHMTkRofNQ3i%2FJ83Xh%2Bi1TA9QBSShlHeD6Fv9sQzreNBjfGfyxnVJZqNdBs0YZxPzcUtIG5fq9W%2FP0k4Iv2rCAvfRTh6OAi%2F9Pk0J5lHx%2Bk7hmnVpXn8jpjBZ2yQG2arLfK7rENNdtSYw1f46vMmhaN1MJE71NWHx1ZRqvH1s6lzPE7Xct1J1dc%2Bdbt3aCmaqie4RT4j9sK%2B2VwxL64Cn0jgcDrl79yhZgek0HykXyoPzkiGOKUdNg33XOAGO04mHMUokVjqfwluAVClpciiFPyWHVbb4Nr6yl4X7FZipVUR6OPJCmYpgZmcqjvgSyDhkpi982DF62RWKKpt0uokxXN26YYQeOOI3MxY06HXJ2GHWyxqarNF3Cstc6Yd9f4f%2FOhAuJBte%2BDlCq5hpyzKG9CkY4KrphEz17SX6Ay8V7GuXx1tmSJJfCddV2Q%2FpD4XR%2BHyI8h4u5dP2i2jFGKoEf7t8lrZkvm3YR4gogh6yBLJtSa0pifuygCoIGpOBA%2F9fFOSWHf0sqBkXI%2BmHzSKGL95Z%2FgMj10zp%2BEd6wFLvuk3QXId2FnnfPxCIzgNUUsWDOvYqUyA%2FkNQRMisl4cSTYYCD3khaIg0biL0ow0P4LYwx5TDyQY6pgHKasNIDPXRtBAmJjr5b1zppZ60S2WpN1OG7kGNW4UU7DJ13AxqvsphR350JWv1c877w4i9sJcPwz%2Fpk1QKwvusTR4qGw4X9gvVGk%2FTqOINBxbl8ETm5EowQgotmDOOasDnGPwe4r0ocoymEy68oX9yBp7OaJHZ%2FTI97gW%2B5eW5ScqyEgbFKnIW0%2FniL4izqjw3imgIOfCdc%2FbqtU767119N%2Bl2FDUR&X-Amz-Signature=85be450ba765c72a8dbb4df64721f931e357adc6f4f48b23ce96eddce0fa8e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

