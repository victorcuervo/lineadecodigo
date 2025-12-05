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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3XB7MN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqoZKJ85X6BUbOBuevoWIwhhbcW0qDiesXWdXpIBTPigIgZckPmvMVNr6t8LwWdCSzrX3W%2FwPIec%2BjYZk5gvv6Fqgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOgnq9nEIrv8MoVnLSrcA8zfcoeLMcXklgYN0BXWX5IyBMPDj5igTIHqwysBlsWTjw39WK3MeR5O360swxhBsKNBDhyAKOXUoEDKsNxYQvz5hydWt7yhIYUbVdUoNLc7o1Mc5317CGCMw5eMufZxKtquC3Mg%2Brxnty0vZx5etdWwWXJFeGTmLAbpD%2FONOWYk2wLE3wkOnX5mxhezMbdprFnUhCpTD1oM3HyHIXay76Js79piGUyOuyymL0kU1EyRSI6IWzLSnE44P1hzZF%2FtTNQc8DJUfrI%2FzzbV4R%2F4WBG%2F6M9BkZDPldAOlNNy2fJeOyvCHsqpJVLPS5RH5BIyS8Zn%2FhSu5B2sln1uqhG4sOF1KZ5Hcmq07QR4nAV9CddJxjwo7uWVkhzXv0e9ryNjE6%2F4pSfCBVYOzpHLgDtu9B9i59DBslifh%2FGk6znhxgYnZdSFTdBjAx5Jku7llI7qzeCjgfis2RaRGUAEcmtX7ph5ke%2B%2F9ZXzaWssY3g9GfFXUTC1WyQz15sWafinPjSC6g5mqcH%2FBDsznd4F06Nxr7MUg79Lt2zyQyZ%2BNOkIL2PpHseiLCQSIythsG9PKCAGhynweNUh485iGawgEtNx2ouN%2FuwwdDtJywlZmUVscSDXwusFOD7gQAf5KPleMJSYzckGOqUBn5XQyjmddq%2BKB9ZDLEbgzrML4BLQmxajxI8aNmHdYoCZfwzvQ1zH%2BIUTETVR1ctpXD%2FeixUQxjN6kF4A6jIScFcmN3b22r8Dx3DjVsys3bv3yz7b9vAiQWoOo0ZpEXL9gCSP5Pxg6mznuAoeu%2FRMlo%2BQYB2biZXi3WHeKM9d4vEaHRFggquVCsxUSp1CwHejzUU%2B878jUEoWzvwD4yQG%2B0xeI8vu&X-Amz-Signature=2cc9fbbacffcac5ce5632a7194e0ae4041f47bb1ba12bf8fdd0f45e29839d098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

