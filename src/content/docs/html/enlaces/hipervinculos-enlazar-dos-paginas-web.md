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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSB63HM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDngihWOmMIoFgl7Ysyj63SylkTF6xlSOHWRtdIAtnwTgIhALX7MPIz5tmTjZqmiK3ejFmu%2FampxCpEv5VCyJhsKUyFKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJ5vOIVkogadH6ubUq3ANXazAxEpUZg7Z8DGsgs%2FC98JcqVRoWAiCdqEOV1Vzf6HVHYTUVSpOLZZ0Nec66OZXRpvcE7VNPTMXj6TblkOpDWU1B2YRuFHmjBhdY11mo3YZVuFL4B6AHIPNMLzaW6qcwSXa64uDW01DXr4okwwU%2BhwfvjzkgRqAj5vbnE74QMnciPh%2F1GU%2B%2Fd2PLnCxf7z77roEJMBYhPNIU2DCVPbqBNdig3yqQpIg9ym2D0gC0inxcXyoS4dnkiUHXzzY2yXYsR59DYvXKrxNma9FdhWTeS0CJGTsOEy7Kr%2BG4hWG%2B3UaHw3hNwDbpB8Hr9YXLE1rpdaEYqRwRZ%2BvuWU4sJ6Q6fY8KbjB8x80K5kajnqh5e8nbYPNwnBaSXGfqeX1Psf89dmPc4MSqgk%2BTZV6X3YJdru2GN16FNNcazj8vjxWZ5dMOqlIiADuyNmm5ccuyOpAnr%2B0%2BBvbq1Ig7WKcDsB21Esxxwo6e6ZnC5Td5p%2BxxvtuYPUpka9qh5fa4DoJHuZrcb2OmyP1XinUwMd0R9HuSE2j7eECGUY1ZISBWUffeer9UR1yx5ucf2SMmGMD0la3CZd97OfE74DD4oFWwPlYFe3HGSpmMBrFRN2%2B2z307tLuQaYgP%2BoXZcaPIpjD328bJBjqkATcEUQddTQ5Qrvbu7sr9VYhkJwtK6C1%2BhBv1ey1B6QMncqoyuJ2FN3U8yBGuX7nhPLNr%2BG5hr5WcLKbWYoej4ohooe6eOOdHG0TqFoZDGiWuW1sp%2B9%2FJV1GmO2IludJ2FEYaCV5DZwkNSCnw4MuPa5moE2amwQBFo1BMeRYOlr2j1OcjGyopsG8CjUa2b1bG%2FZTINMpaXgvrNSxRDQEkAKQGLrWg&X-Amz-Signature=d07c05d8d875b1b185b228867d370d48de22a20189ce7a0c17e0250c57197c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

