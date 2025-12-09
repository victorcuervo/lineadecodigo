---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4D53JY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJjDJ0%2BHL0Z5uPkxaLY5G6Rt4M0tzgV4ZFbBf9H7WzdAiEAgTheHoXpcJGC1II6XJaW67offYO%2Fva2LMkuI5K0A7d0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BgZQeUMpxeR5%2BJ6SrcA0luqgWtPlXsIc7Ml6wIPg6eSJg9beCLMBbRkuM3%2FzsicqJSUaIJrLlbklKzN16DOiMX3KqOi6YnA2ASKQgzhDhaw6uWdFTclFrsY1pQfFBAELZVgkczo7W1aU%2BzSQM7DSx6pjHb%2B61xY8FP6x4tNg22DbcZRFHcMMh2nQ6OPiJ705bVSaIIaV1QiQw%2FNvXyxo%2B7%2FYRG5zVoZx5Xh5rHJQD68WlBKMf0zmVx3eJGrMjzGPHAkOarjjDD0FAKF7dAQ%2BR5nKLQyQWFpINWBmRMUC7%2BKSEMSPNZeIygJ5L3%2BSTbbMU8oyUerNlaxo4SQxMCmOJo%2FUYzitu7pLj7wAej6CLDqG7AtvWD4tyaM3hTfF5rmkKNYCCgadM95aWK%2Bsnmm6v%2Boeu4tlfQWQoaGx2f4Vp2Km9r5nYTcWQC%2F8YNqAvKzFWHUKqykl%2Bp0W%2F4kvlKmRDXHJXftjVlvXGbk2zr5DgUezNyWxMUqAeeTG8%2FSRas%2BScMp5kcHNzqmLANxxQankG%2B4rhcJXR3XwYlrEfWTzHK200G2nmYzzhBwbq2WoN%2BSraRIADaw%2FeZVi0QJF%2BaZihlm1Pm1vdZp3sHpXo7MGTG0ui3LKfuRsFNVhMymEZrIrQQ14tRQCyFAZJZMOf%2B4ckGOqUBpzUhrCp0rspOGU%2FN5MgyqwWiSmPQDIdDQPamzOoHgTnLCtRohQJN8B4ua6%2BEaH63rNo%2Fo5vovHO%2BtYWfd%2BcJ%2F7rtLgC117NGdYVguAJq6hIWpLVI2VXQKo1KZ6dw58k9TxSyvkbztmzpTnIiyF5QqVxG7L9Tb0mHYqSWiHXBTOHM3qhA%2F%2BsP1XSiJK5Uh7OUnuCWcc%2BMxD9wrWut%2FTzi88XEgSle&X-Amz-Signature=21fbf00fb1c15764c6b4078fceeb230db23b19585531a0020e48639b30f281ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

