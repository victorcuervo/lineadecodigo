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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YERGTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXTPpURzQ6gOLqoyZwzVf%2Br5%2FEuJowAAqT4Wg%2FoLpouAiEAl3BvlmTEHpuXln3bDWgOPgfp0FKCRA7X6vboSLVLPMsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK2tXQS7oXqq9xqcZyrcA6YQCpkSTrVhL7eFLsvXqMDD%2F1dtMh2kkVQUhl%2BBGkG66T493FVqFC2e3YOdaXxvCbxpd9cFhBfJCU8wEJTpLp9n5S9hP3e%2Br5z6i6SgV%2BF7hKBn4XrchfpZSvxEj2Ep7kJnULgOh4fkRScqj3bTJWXxGB8CVNSFV9vkJTwbSddtAnBxAEWlytjI8XGsz5%2Bzpcl3A0i152Vw3byBmCbB4GiEay2bEQyUFvNZhG6pyHURsAU3F2DtOgrUqy7sVzCtYr%2BOF8muxBdwBJa3rmeBM1tNqgL64rkqRw0g3PXMzPmGtmf5Wo9eNnG0yx0vyJZzhVPPDpAkyCv2JOqr9peM8i0XjBysiNvmBZouNOPU%2FXPPYNZEXvEmxJgoGxpiHKzXfrmM%2FoDoSdunARtlCmF6bD2vgylSPEDB7rlZDEy%2FO2Y6UzbdBC3O3P%2FC7FK0v%2FFBTJWhBQTDBdZ%2BPn9SMvFiqrZZz0PEDU0HKiGYb9Z22eKKGfDf7OGGhKyOhRlFUc9W5ajV7W%2FPX68js3o5uypNzR6C5l3bWDGzELKHi3PbBGSMZlNzY0ZnzymsUFP4y7bUTWBnph11ju07qt%2F3kG7cPWbf3PKeGh0A5%2BcSS4qUkKnL1auWR7kBgHVAmSfLMJPPyskGOqUBgn7TTDdmSFrbaDQTa8AjRwy2zEwIlnvMMRjGdwa7u4XVhGyLn7mbnh6fn%2B%2FjYKX9CtRuL4KzfV6nQxTXCavNEYwkIlc%2FY%2Fyl2eNQiokisyaf9asTsiNE5JxNQdkF4ih7bHvUH6wyzA11m6A5jqKxlnR7Rb9hMVqHtEcdeFR9Uigi6r1FJIq2RcgdCwwrj9Vt9BcKo4ABv2vkkNmkspjyTA5%2BaUjp&X-Amz-Signature=7a6d1f9d389fcaab5619d5195ec6f2f4a4660d64114b4b7d005056529bae226d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

