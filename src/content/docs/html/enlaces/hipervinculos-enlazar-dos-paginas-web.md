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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO5YSPIK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIECXxoV2cALF8vBCdqaMD0yFitvxsxB3K%2F8ixr%2F%2FADy8AiAsY4g4FsgBG20wP7NXSiLZfLcJxD8IgMbRLr5bda422ir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM1u%2Bpb%2Bn51uEenea4KtwDlrhNTEXRBUOa8VkxsRt2TcHsgirWOYGWI9jVF87nIL9ghKOzZbGsg8Ntkt0o7m8bL2z01Dl%2FB5IwVzB5aNb90aQKp8Dtdhnm%2FxLw5nOBAQBLrztUpCdgM1ZMzQ2AkfBPL3bN5FuiKkCbkERIAbVLjwUJJqFeZEWk4nNs6VQVZQe81wOJ6lkTqCvBOoqjPPhvTZHgF6OjeaFW3oJcLoQVeweBbGvtD7hWgnj06%2B9%2F2ayTV4HxNrNeL6qAtrwxnq%2FZwFBX1fb0CxrQo8YMBLPgSOCa95gvD2iy8tbSk0aOCHeGcUi5coBZBYedzbuVImaOaPpE1MtSzakQoJHIN5ZMXMb%2BrHqyU0b8EmAzIROGVunrIAhz4CNzg%2BWL9CS5%2FQioqMLWRrGkMdQ97DsPCyp2%2FQ5lRfsoIJCe%2BDfaTtIiDSFQDtBkNrh2cVtomT4%2FfyZoGPcdGRYr6Yvkjez9Q%2BxxIY4I4yoO4q2Kk78furFXtcTUxKbdgn%2B72iNDnVQXLXtcghHDos9l5FQeObfnUAzNm0TKVsGZSgtQfvPNhcNHukURs220u4MXAYMKDR8eQU3czpzh0hw8nD0kLUTevNUl7ciU3Ejj3EK0qQJv1GVT3TwVifmELApQp%2B9WHf0wuvjCyQY6pgELfL%2FI8PK8lRaWYgDbMeTkYDXt8Es3g%2F6lzohFV7OTLqFeuFd5EHQ4jZxP790ypLPC%2BMTIWnPTIKEbkvSD4FyAgjMKeAL2EDm5a1Lg8VUWnlVEohw5nd4H1kO4kplRHrSiSRP957FWsrAAPRqy5XRxZLNV3hEXIiyB%2FUkpY6sdV4HdybT%2FmrBQ5yizQTd2SfE9Cp2rlxG5%2F4k5rPqvRB0jZ51oRh6O&X-Amz-Signature=2e55b6dd991f2b0341142798384e54b485b119004bfb06bd5c4ed5012e453331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

