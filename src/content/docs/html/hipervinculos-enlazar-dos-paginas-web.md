---
title: Hipervinculos: enlazar dos páginas web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C2LVM3F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBoC6fHcpG2hzoxfQ1L31k144rzBcmSB336y0jAKtWISAiEA8E3%2FfTTuaN6aFvivEKUMwausrJ1mSY01y6mdeH8lyc4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGGPdF2%2BdhdWn0PEASrcA5XaKZ5qxaZXPaz8Pycex9UGbdObF7LMT8ZKBg6WoQ%2BlfROq5aToL4p6JXdq19BZGCmbr9VPKnFFZBH2iIi0kT2spqzrDbz30ayupY%2BusZIV74o2IOPKVw4cutDi6qbhveSSCo71hTtc9T%2F1NOGBS6NH2EjSeSBob%2FnR1GCOz6PIi1bGTJj1Mmi3okEYntDjxpn8CCvIbBO4%2Ff33zMoDG3EIBQ7AbAvhQk0jP5eDVxVNeEdtGA4%2FM3Bec6VyswWNbsTpMLCYLny%2B7ugk4%2BpDiPNZcD98xiXXkcpHJW0l05Q9sGHQ5CmWpSuz1BauZOzNIXXR7moRuGCONyL6pt7NM7mbJvy3Q0v1zHkZ2ew7pF50vKs16NI%2BPDLqFplKDQq74sh9A%2FAbVjZ%2FrDX0eu3L7V1%2FsSsEZK3dSy6ZzTrfJjkiIV%2FUU0Evay8m5cpKreI0KK4YV5cGyPnn2e3CbOiP1wgm%2BIHHYFQQmhjXDdv9kM8iy%2BkSe8gCaq5SWtB8%2BjqW3y9F85SSfT6kplaCnIldsug0CFRB6VP9%2FkNjavxkfGlKjMtE6btnghPF3zT1xh5ba6JNRsYW8blA74E4eTStEF88d5FZg4gtlsN%2B%2F2QczFWxwlJ6H4jtRfhOGcRdMLP4wskGOqUBUbFZUOX%2BbUEqJusryKkXSDzA4QU%2F9IG3MzFXgsCbJnXd%2FLNG11%2FCtbyft4XHp7jXzaikCCfhNmFLMc9%2Ft1LVtrfnlRFOvJiLuGa6KWP7XaR2pNJUtrU29lm8bgu7drLVNY5QcqS33SfSQx7rIm%2B531%2ByPejD2ltf7pvt1zoPmjSBSC2ZyWoN5mYegN9A3eGvNcCdEiv%2BIw8CZGyAssaQfHsUqVCk&X-Amz-Signature=be8938f6895471e1d737abb1793d58985f46d2cdffa91093eed3a6d595dd0a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

