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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCCX7BP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfokoujmQc1TgQtokpa50XL5vK2vvz2E8qfQZe0GpVlAiAa2P0NCvlJCczfDDdf20sYCH%2FbYP8PI1vR%2FU7f12vulir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIME9j75aRCdEcv%2B3yfKtwDe55pF0fzAP%2FeqH2j8buP%2F6OYnRHBaeNFzKT%2BonT1MMIrSq2KRmS2vhHC9%2BPQa31d7QSHZAkDcqkYh%2FJpwUUN650cNGZkUYrOWDFCzvmnsBPsRjcsCVyIqx1frhKv7nEYsp5RG2uXpznXswxebvrOqUqWyyfTdXb6A2S9hgjy1UiqJV56bOFpWZxbGz76FJsTt9Sx4Z3xrxXIE6lH5WfB2sl3NFAJe%2FCZDm3sHEumZwN6UN2NmBYP14cgSKn5ybzaJ0u46QbRqCMjbOba3KqbeVC9CWcX%2FaFFqKc%2F6OcRe9Sc0FjKvhNjDmRIcxZijgzzIWvnerSq6GztUnd4Pi%2BaX7fHasUsv2OuyAX%2BCU7R7Xz7G9ck4of7oWDCmH8T8mif5pw7l0OFCz5ZLL5ZR4eYuLfja0jgOsM6HQ%2BYsOiRt0OunLwqYxb58R%2F0je8rckreOqH8DBQGGKMjFvM5tv%2F4mtg3WEIvPvfy%2BotToeicLK8pyro0lEIdzo01psJRnhuBrcai%2FfSHDAHmhprPYy20D94PX6YeXyMwWthA8cIKNJpAkzuWl5BQBJzsTnU1ssGIw8wnbH5bQ4KbriKMXdTyizJ4Gu0Ov0Gzm5f1X6EmNvF10C9o9np66C6IUIcw4vHLyQY6pgFiljGqZWN5DWLipZI1h5EAAAUTHYc6KJIIFf1GuiT2kXhVorsc4gkMoOKuciKDB84pFl06bnLwkAms4Kxd1MHwnnatCRYG8w%2BLlP8CxpMbfCqiWs5yEvDZWqnBu4UH4U4tLzGHgMbMTuUN%2BtspcFcBjhZk%2By86oBB%2B7F15KuLH4ZzomaeSEy0NJmPqQ4ekc3sC5FoVvTWqGIpTP1LFcqF3xP3l9Yxx&X-Amz-Signature=23cc593200a9d1f34b1b6fd03b2225827ab24fa30d9fa54a56c7db2f1f13e502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

