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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIA3MRLQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKkVgEBIt7fQ23BcDGgNJ3igAYFuz11a2%2BQkE1%2B%2BAy0AiEA1DfCTce8q4moppwVsErHB%2FL8Qh4GhLR0hlsZ%2BaLIXp8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMsq4NUDjbEr4d5bSrcAxKudcdORjA2NtEoyPdwNpbKvorbInH43%2FhjMYOAPO3EOIpdLUrtwESiDOuAzBCo9Nu4hXRZdMBr2feIe6BSeenFSzNTIDLFoyobdoUg%2BMvfrfVDQw0vqR6s8olCku1BJ4H86o%2B2wdw7ZsaVTkTc0jcmHqrUfZImI%2BOx%2FyaohC2g8pWiTkpG7ilqYgudPDnR1dC55ItJmnHrzPnwPh6n0h2Sdm8FePYKrGKQCI5RMNmIaNgeKMmRJEv%2FZIMmH4YFSNXNBO%2FLLtFa4mxzbCRkL1UwpsTsK6jEphYJzn2NUv2o18nDKjE7nLf6jv5ewvG%2B1RKv3w89AEZnlPQkkvtQPhTppKlE66TNkfL5gZRhC09A6yFwBjexcFVLGhKLaDKzG0Icdj76OdWnxxxJfqFQ3iSouhRheV%2B1JuPyqLitzQofnoeRbLdouCEg0CQuovH0L6%2BHojAOziSK6kGMbplTtJ67Aj2uDVy6fXUIufwpHDPcornTGSWsiqUke6kk8sk%2BxVMo32CMJ1EudPNehG1b%2FS0GTtX6HlBpAUEKAtPYisEx2DWbqiQdM41KDanYAwRy6NiyUumwyyUGdyLEjN9KgTur8IJZrUIeBJw0mYK7%2F4FWIQiBlTMJ4JWkeQrWMK%2B94ckGOqUBvmH4%2FahU%2BLoEDDN1kjjZtE3wgqoOpbRf3VIDAbS0yKqjpXZyVIP86dcLKdJGWadDhbQCdR85QDZC7wb4eAqx8TJpume6gzCHw9D95%2FJluJjGa06M5Yridewyosk95qhtRJ%2B5D4%2BYJaoNY73xzjNrkHiXVjcfOa38kL8Xln3A%2FVohwzYOlckEIkowF5R%2FlXZIK3Lzfb1HQisMz9tNK8dw1bRQCUOP&X-Amz-Signature=03d86bf97906bd8e90f0538f0122e16a3b72a6ccd51a2708df1032c5e7b859c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

