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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMMVY3KR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTvPigxyKuHHP65UwJfpYodQ%2FtIvXQ8aNdqkskZh9FrAiAcSFKrzHY9XgwZhfUqq72z3tp%2FUsALhHhox1BS5M1PiSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Ex4bKrJ8E%2FKQ7ChKtwDKqiqfkp1rEbhebwAkOOSdLqGh5zgJ0o7aMGPuw6MObhV2iq6bHrGPScGPi6AtplrFC2E0JIoZue5BqA8M7AfCOdA%2Bj%2FJnzbIxvPgohgszJtbsasEuvOpS%2F9mKKSJd7fZ%2B0YiSCqx8HsSnC2oQJxOm6p5YXKysdMWEXhN7zoAX9BazP77%2FcJ1dxD5T9SHU0bkgwUF6dJBs4Q65InSEp2ERzL86vU5yEGfSW6Mrocay4JWahMcP0fvW9jnJwzYBrp3nxkDkpV4JDf0sNmbiQtn46D8nzQ1u1dLRijyB9%2BkgK%2BhPbbLfYm7OQ%2FamE1vE9bgdHDHtoTryK%2BqhetmihXY2wGDMDrxpeeeaMlUgv2wGZfMTBXCvP%2Bjm1zW9ZOQvC%2FyOOpn%2B%2BrNLvui1FaVg7v2eYsXGPO59qZEMR4PsfaCtGFjWQh8lPjGC92zQSwqy9mRYTYTTxODPl9Ioug5DHW3arQ9jdLnxGPZGfCxeiRJ7LGq5hdQF4KBLdQ5OnGfGx197kUhto613dxE2pwcAJ7s9wGDplq5V176I2pOmxOU9kTa3HJ6VjCNQ03wyTfKYjnSc%2BXMzS1rMR7mebPisfJXnDFtPS6P4UAUGmLGu8%2BiHGD0GDjbml%2F2P6EaNWkw34%2FbyQY6pgEZfvuld9yaFH%2FQBu73Vkt7Vl8pPxdK5g0P47r1ttgirs%2Be2%2Fd%2FhztDl%2BRqGdFzwAd0P8nOyeEwlVREzjBicd2vixTvjeeHcWHGZqljSo1pk0paZp2lh8YoPgNhrJA4RXe4Sc2JyVvTmypGmYjtfiAWs7XlZgzwj2xEgmQb79VUbpR7pK6bSGVdByTUzGq5q54lIi0rxNqOPT1lgmhRyO7u3rwe%2BWe3&X-Amz-Signature=eae588bc341e691c4700fc147f7d0ec6378abe8ffa2f8d53fc751c0ed139be8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

