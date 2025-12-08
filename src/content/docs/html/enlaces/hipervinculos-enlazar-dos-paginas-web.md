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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWRJ767%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlogFJcxWC96UY30dkSWaliqyZUo73cfGY1%2F6u68Sa2AiA9XvUsNQQpNLtrN3KCk%2FWwweBBb1Jy6YTUV0IwsK3x3yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFA7lMUERBDLHLVaVKtwDCh4YsWnbCqE%2FJ71oeqfIREhsB3FfAS9T%2BZjb3%2BCRHhd551vvJHAIxFu2g%2FsRNKWxud8WNPUecM4FLH%2Biiy3fbvhYtq6ZxWDAjBrCRmpEyxafRGHr59WWcLccXR6r8OgLZeegQ7%2FETC3wo61ggP54Rpbp2%2B4kzgoxX2HxuBATlGDrwNS9HcrWcI%2BOIPzPD18wtYu2Kz9tLpYqw144RDJQx%2BhJmQ8mYuahZPQf47tx6TpiHUc%2F7TIKdXf%2Bm7%2BgRD8eijMHQZKjS17NuVsBRnbMb89TQZWC33i26v1XFWuyYclLwjJz7SQeM5d%2FcYqejuCjjcAhCf6FwIXRj05PnqYoCdWoM64Agnzb5AyxyCNOQ6XAL9Dk07auf%2BJ6FFgZqDrDcQ67OhHOXwp0URyysZ5u1OgdbxR%2F8IPPgj8qNp13zbN3Ofr7Jb330ayhz7UQgYaAqMiLQIpyucW7EvmAQ2iWARyBQUOedlivTvnxa2Xw%2BFhtZeSz0A6KldxIWP%2Ba9LgcI2ZV3yCew7JiT3IpcULvf0EJ8%2BZyFRBwYU6DlzEKc%2BtYEnkwm2XQByQXs5owCR58GZtKNv1JAlaSd4NcZFkPgnYHbpatFYQC%2FwK9kYmlwXHYM4wXR%2BRU4zkm1i0w%2BcHbyQY6pgGEXrzuGPW5rvY13TnwgiIdBs6tx46pDRTQlcs5riYIvXXFOGdVzuCuu0Sh54Y%2FuW0Lw6%2FMKIuPLXMaZvssh7sTq4YtP%2BFBeBAwt4m3%2BnX9ebm5h1pP74R9TGXbrwN9tncrRKH0ydpNP3MHSRu2lvTRTc3xvg8tNAD%2FlaQhG5QiLRUv1YpHSxeqlhAEbLvD7AOETbp9KlI3aLtYH8XTlUBvJcpwNVgu&X-Amz-Signature=77f83208ccc9efa88a8cf4ee54efa9a91ba5836aee11e3a6ea099dc3453c5e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

