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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STR5WSCP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8e5%2Bu5v7%2BLhcAUqIr3bWz9aHGu6%2FW2ozKMsF6GFOGCAIhAIr2tCHF4Fort9d9o5UpIrnqX65lsNXz3KkH0i512c7bKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp93yXVypihkQ3HDAq3AOCwWkaYZyOdFwbAKtS5ty7s0zzoptQBgZOKZaj6NePO85PDlrUVUKc1zX2e7D14s3Im8LKWFsJrbCfbbpw5NkRSnMsAfyoHiOhYjopzn146dA5yGcdt5Zm6%2FuLxmJ7XRJuOmaRZE9%2FrrnJhsbp%2Boj5NBnLpnGoAanO8WauvYSR%2FqDvgJFJOJJufmrEbKwhIaQv594%2BwRHeE3xwB9d2blNQqCIsaYOHsW7SjYuuirRHhHLq5QTo3w0EW79uK8b5zG866Sl3%2BYnz0C6J5ZFwtFYB%2FeAfcf8WxjhnPaY%2FhwXEPF9ZelY%2BzygG0xHfy29h2L6YLd4GyGAShe%2FrLYgT%2FlkicLoidnxxEtKnhlCa2oPa9Fxt2QqLVW00b1RXDR%2Fle31hyEJnp8fV22pDaDGStiqP7tel%2Fqzl0Z5AP7JjqmfKg7qTiTFl%2BJXWgkMJqn4fAuAwuQGJXDACXKJSKa3BlgtdF7knjyeXgiNDQcJf9Ycau7psqjJ6JNmN1Emxjnx3hPz11wmxKuQmrKWssf71t6f%2B8lyh06N%2FktGOvpnY4up36URKwgWlfIqcZ%2B2Ykd5WCnFpTRr%2B7cVW1WwjKXCLoKODz0M%2BCEZ7Web5eE3%2Bmmi0L6AtTLQBQYMxtMn4mjDdv9bJBjqkAWm6fWeqxZPoxGv7QpoBCtsYPphNai3DLyyvyLRuFOyV4YUVnUmAli2BgU5RMk2BYeBch%2BE7oBeoy%2BsTf4C5dNWwUULTcbq1Dg1WAbdqZax0DS1j0muiFDxfj13O7uDOVBOBfsnLNJuH2O71QLswsW2Js%2BiXYlQ%2BX%2B9zjSZ2E%2FAzYNmL2DXMmCxlk9%2B73wBnCZHdVqqKRa49uX3pvRnJaWJajlFB&X-Amz-Signature=c6f4e26693991af5683b496effa7be63af996de0dd0e527cc05aa4d4101032fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

