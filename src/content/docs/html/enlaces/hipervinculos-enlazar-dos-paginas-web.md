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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKG357EE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCLpcB7uOWN9d4kSiW0HHOjAG1FfS97g%2FtyWm171hx%2FzQIhAKMLmZbF4bGEmdZBxyO1NlfZLo%2Fi8RK6SOnDvwgpWtA7Kv8DCD4QABoMNjM3NDIzMTgzODA1Igyl6AHRRBCgxghYt4Iq3ANNFDn0DewYpR%2BZDE%2B6OJ%2BeupyGDui4RVLkWLJ7qhnaeSDF1d7072kzSbOTOduKGx819oeepK1DAPafIW55CduvcH2sP5Os4carjsoFJr5%2B2XA1U7ZRBSfoRI5lhpfwChylLStMvlZY5Yoi8jmIE%2Fvdc%2Bbvi3m7edlFAmsn1vPHlgv7GVoEhiFxHLEnXobfI5LR96pjszeyEZgwClvFSbKd6LEqXiNjyhWvqT8yS03ZwcHEaZeEBMaJiE0W53%2Fryn95cpZTAiIldljxXE%2BwH8TSPeUK21gJWcWDMyc7XrLfYtvRvVSBEyLdLCTG0qXs5Mqox7JJvj%2FYeKtgk7W%2BUq1tkPGI7A2TzxgooQggt%2BcreeMWtmeKRXgf8BQeg9V0MziLeJJjTRqAJJM6xykFvipmajGlKxfLIBi4rLTUYPEmvzbi8q88mHIbRgd%2BxQDN32p%2FoVKlr7tdE9SxVetzDRkX%2FypgecjxUD%2BtV4IUODrsftZMeRwGDS%2FAzZm2WkY2tBBoizG4cdac4pAt%2FePLdN%2F6Hua1h%2FZMk6elMwJgQCmxouTPnBdHy%2Fm8DPqYIrHvhTL%2BWmML0PzdzjNK3wmQqxAiILZJ3X8S9lDcT0LhmETWx1wxoX7vJbngryHzuTC2rsTJBjqkAQ6WxqXAqT4OfT8do17AAgCZ2sAHqBkdgBjV%2BZTCM7HR8p45PHrsjktgIyo1EvJMCqJrU8slH3aVO%2FnarW2T36BWxbRip%2BWzJf4HjPjLtI6vT2zI7ZYu%2BJgczXVZCzKK0CyZMqxpunyDAuLFVi3lR%2F3zXwOJFOIZGDMSZNngsHi5ok6xsIlXh4tp%2FeKQ%2F0adSxjBnn849YeOfIItBJ97BEJCCU2B&X-Amz-Signature=fa7b462ef9ce101b5029d24e169147f9213fd979af8c833f5c4256bde5c0cb1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

