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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAFIHRA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRepY08S9vdHwXf84U0f%2B31F6u6uK04vqxye3lIgpXmwIgaoUlD4iYv8yl%2BzLlryxMsCIwFPgpylHMQjamL0dBTvYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFoSUMGZMBQJcQVglircA4njM3LEBfGuUlDb78k47pWcz89UrRTEiCoZibei7unmcXltl5jBcB7KOvEaTxcclzXhC9xMRXrbxEADWXJBn1XxaQNMyAdKDzUGlmVKzgyAmdazOUz7CVirkbUVRGMBDxbtylww7bFzWpjRHc5X6Ey59%2FTsKZ%2FEXublvvtTsOdl98GBYGnhmThIFzGQEOsNZYHufzty%2BT3kKfJeTjaksjmzn780ELUFdB3luUtqzuzecVGqmJckJkihIMtAeP%2B7mmy3X8W1kk%2B0nxFRbRV7LErGWr90NHPXNOgB9rLE8%2F%2FZg3YIrxu%2FX0Vd84hNp7bEvyhVVIHTjdvpPLrRr1fLPkbM8gb4dTgMOp3HRr8IIkDf72Jh9KxWcCXsVpfZ5YBIWYh9LCMc8ekAN9Ew4ZbRMbULT48WpZcwfIrt%2FgfC3iodV9uZsLrMNzwunZZPoYjHhPELGCxt8WxFRJ4D2yynYOhpIoUAhqrwh63b906fZOF2h8aJLkuTS5UwC9buRRaBsM8Y%2B%2FkebkNLV4auRNtqFTNVt93%2Fkv04Dpm7gM7J1bO9NQAK6D%2Fdcp9IboKOmWuAK7zUbN9XF2YnGe5KRQl4n%2BzgCSKbZkGbGi061v6SDJ0XaBMnZ%2BaGv7u9JZvhMKaVzckGOqUBqLYNtqyyFzKXc09guT3mQreShAUmj73AnxdWANuF%2FOn1yGn68bXL30DqqS6K1A7PA7dBiJZSqcltHuS0VFr3usCJ9WI1HHzw8Oftcxn4ZCQ9cRzY0nIBdT7h4y8932Y2l8eJnF12tP1%2BCW2%2BC2wPcgsIk3C2mjb8Vrb98CppAdp%2F%2FmRuWgOm4PfpofV2hTzV8EhWvFtToY6sSme3eNc3hzEDV4us&X-Amz-Signature=a379d5d2f3a834bdbef0291399170c7f6f246b946173ab32c5c646744613dd46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

