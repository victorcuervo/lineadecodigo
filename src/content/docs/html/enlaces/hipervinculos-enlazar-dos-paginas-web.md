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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOREZEK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYr7MPlLUnimzQC8lyjAPDe5GMEjJyVtL6LFPFzIxl3wIgZC3v9wCo%2BHuZW8UF9lH77Nr9fyEbCwKjDS0n2iz51zAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAP%2BNZS4KW1wbtQhIyrcA0AzQg4lp3C9%2FJeU9%2BghtX1gYUyENgEpYsRm2jKRvES6KsW8uRb3PrjvrveMbYFQgEttWjIsK1QEDPV3EyN8BaPpIoLCzJgug0q%2Bh%2FMoStPjrVDBfM1hyDTZJZipN6PmkWtb7mdBNc3ryhNN6WCJeiRbwhTWURGIh8VcsEn51mV4SIA%2FO0GnYC%2Fz3LLn9fE3RqCnANa14oKHzYplR%2BFOWzX%2FgfliTVSu8XvxSevHfBz%2B55r3Z9jBddPK7l8B5TurWJNx0qvMkh0x9xFulGZ3F0%2BiyHP6qwAHXwHVBFdg4TCXgT0rk56X12TAEwxyxoDD%2B7MNmtLdA1FLv0kHdMOz0C%2FDnTb8UNBwY7MzonKsigLWziqWeqCVjM34OilFCsnUcV7bxYJ3P0wF9oTeNx1pu93LVOyd0bmBGPwAqM2ZG257vr04c0ONKjjOPxZP2nGHiOReW884dH5tkzViVrWVNz32BmGy5nWNsdXUZfcO4o1IMjN4jKJ1AWwHRSgxfZUbW7VRgiWKY36YDFd3V8nVIhC7sOSCq1ENHY3TuL%2Bk2%2BO41sgKXQ0v%2Bzlz5oBRa%2BW%2B6uLooF6h2KxULLLFcFMJNK4Pn5FpyoKBOlEusqxVk2%2B%2FOnpxwIrWEgPrTYsDMKGMyMkGOqUBXhvOWhTVE4w9gnR%2FjqvDRm2uS7StXApe2TjOfzJrASLKWS4tXPdJ5WMpNaoSt2164RVR3wGfrIGO%2BwWDR1reXF5M72U76i4MUP7Xo6a%2BbKOov4a1CB3UIKLq6wRMgi%2BY6I65ESG8l3Bjt%2FSOK9Osk19PFmlKiodiploVurntoXoqOFM1c7BB5nyC%2FyBg25bm3e9sjlSxNDHU%2FpRHnikA8sH0mR1X&X-Amz-Signature=ddde3dc28077e960caca22d5cd9cf5c3ed6bfa4781b69da28914ffdeccf6229a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

