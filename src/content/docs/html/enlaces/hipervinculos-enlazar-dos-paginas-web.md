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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKAKH2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBlLsRV8iKgXLefzPSjnvX3mZ2bjcK49BMDvofemB2FgIgQR1UYvPBAqhQ4QyWy2EwoQknh3fEroqteiUOn0IEOg8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvS3ZJU7ASSSc0BkyrcA4%2BZe481b7XbJW7Jyn3vwIKcARWesPTM6KneY32AAuCQYGKfvZ%2FN8X4pdaIYPpleUsBrBKyNzWa2RqnG%2BpLzQP2nifXqkwVpAR2NClW3fJuygqMwVVI21KX6K7BUNAZcazm12q9aA5pPhqkHjvDkeUOAo7r9wB9kULQbKSFNqrIGrnlYdzbYaZigdK6F8p%2FHw%2BE39UB%2F6JWc0eFvPbR0uv93XVHM60JXH%2B3%2FZ4jFB3hAnVEGXxw5IjEkF3iTZOqJbtxZGRbCcY%2BfFBI4C4yElvkmeuduEWcZxJKVaoPgYoeHvp2A1ivx8BdpOaDxuOpMBHWQzkh1iaILRQ87FXQBo%2FyDOniSJC5wL44X8%2BF3lbUeNY0CmxzhzcGFR3U6oU1rx5A7oC2EMQH4y4JEc8O1FRYempbRyujTZc1eoSqoIqqKQoj%2BnrL7pbcX%2BSMO4yh%2B%2FH1Wn52rg%2Bw8C91TPS6Apbf2lRGbGc0%2FaQyx9hYSTX33oxxDuRBI78VFklcCItlxDAylUglMzffervZBRApBlQaw3ooXN7aXsiFfhc1e%2BdeYcDZfxG%2FJSqz5t2t5OYJGPcyPqqSq6PJ6u2L7lqOZ%2BwbjcopDzIBKtf98V6NPvCVtz1GvptMHQAbeNi2HMIua1ckGOqUBws7ihNOtqgdGPoYLhjL1DkAh8%2FOkjkrlpLECARa6bZsZQt8oXIZf9WEQDEg3I5MHXlEs%2F%2FfCzFOzkybRCXJtQwF0OreLo6tQDszDt%2F8ni8v4jO1vwfmBUhZq0u8yqj922Q6m2RePLuzfffK3X1XEVG9AAGGywpKahOERjp5EWcQE9%2BeoL7d1%2FMxMpdeUG1TDu1EXfYPGYs1HN6OKNXMqAK5LbDkv&X-Amz-Signature=0909785bd08e01dce1a1698db718d9c46890a207ccb9d816fd8398b1c11e4c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

