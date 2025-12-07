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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5RLRK5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUnm4rDUrMERcv1wkjMAvT5YGLrIIbOMNt%2F0lLmO1EQwIgLyA5ZDZwEr4p2kMTxMOiFZBYPjO62XIfW9fitdU2NL4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FFDGv8mFjm9fKLvCrcAyYNuumcrMgQEq3CVopPx6SeW7Vd7MUyna4LZity%2F8FV6FCmWQ0eRehjPaMuf%2BX46j3NtTegBt7V08t9I6p34Wju24Q1vDlmTvuhMy6j%2B1xCzNHrJCTihUt9ZGZUKwD6tWpWOZeqeYaK2yqP8kRsJhQkFjA7ZY%2B5t1WCegjV7Q09AGaZDi1Pqprw4k7quUnUwUVxnsQR99LKM%2Fs398w0ou0NRt0QLTK7YRcfzipCR01le9gZf4c6%2BGgpvu70dpnYczBhGqIf04eoybwpKO0kZxe%2BFfbGCRbbp4eLoWQ2gf8F%2FfE7kVeRsyLLNwdTE8PnKFjqkO2WCD2fyAXGk7wanmRfyTmQm6MsxJN9kaxM0bvHDXcGdii6azFwIP8BBhemcp6PXcNPlULUv51y2sqV0x8s5cLatE0zmifoRfygj3wXxp7NSbIZwnyBkWogiCzGVhHBXwOWJ2T5BEg1byhben6PBYgs%2FpIjxie%2F2Eo9tjDQdDcNJiQbcGEeeV5Rdo54M9LmQ%2B5H8vJYpKjOnCoHvcQ54%2BOfw4hVpTuuNO%2BnagO9qbkxfHqkKMQ98fAgby3nVGz3h7twQUBzq%2FGvSQxkQ1bQ9z77sT3l7KVx%2B0TxrnpSHXTgAdHRgfMJ1hJ%2BMLqb1MkGOqUB5ZjuwMwO9KRIG8HEOjKgpT3fSTqKgU1L%2Brjmd1bOu1zgDErrce5b8lajHox7pi5R4eSSv4tMcybYsrpKiCSQ%2B7G4DheL0YO996pDqN%2FKCovcrO%2FirKNYAYrFCBU2dcXtBgEIyEYkR3tGPt%2FH1ftQnWNalTpavFh2cWxwzOy5SIV4ohNq9o4Z8SCGN5JMkOMXSKlVrjAaPdzm%2Fb9npBQAigWXpP44&X-Amz-Signature=8ad4994bd3486e3a8d527da32dcedfce91bcaa3499a60f4e569d61a2cc34ffb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

