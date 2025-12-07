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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIALX5D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BEkgCoTGWdyA8R3gPaeP88wj5kFQqsMy%2Fus3EUQLlqAiBNAiGmXR4S6ri8t02FiKJtG%2Fenx7KZd5CNJZ3QGkhzjSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2hsmYl3xpeYyRBcVKtwDy3HmoDUax79H4oqbge3WcCPXsURpCYwfNQRk7vB83%2BIdjSwXqjeNTVb0FoydsrS3Qwytq5SgIRt3oTbVs9tyPa9qOCNShv1g5Nt%2Feuf%2FepWiv9fDiP8FHLN4rRHzyf03BTdFLntB8ZquZHdwsWm2VBkeAPFTw1XintxRC04LP%2BfP2dswxez3mZypO3vz%2BmYS3KW%2BhZ2ZTF6PuNDKV4fO8bWnE00bAGYEs6EO6%2BnDoVBAKyCTdLbwDl%2FMNiS73yoUn8aJJbeTCjccMkAFlEuKTei2mYHIgjcP%2BbbnArNIHLZ6UajgwDV1ScimwKp63AmJM8jBqiQ7tLa4Z2aUWTyvDfGVkOUNmlf2%2BRkez6fycI4XYMEzhqxIi4a1VgJAH80Go2sEszic8hp2YIYiHbwafP%2FPlD3hs3xpJ%2FJgexlHUoPgmdeJnhb5UqTpb%2Frxv%2FWKCxntybEFxvyNTy00BvRamqK91kfAX7I8zWK76Bmpdyh21Gx83xY3X70UjYbkGxbHWbb4PXFIPIaPmOiQJQu%2FOmi%2BQqIO4%2BP%2B9c%2FjHc5AeLYcsaxAoXvihE0pcCtDeT3eBMG24xX3Dyo429A%2FjE0mOYuQaAxNa%2B4JeoM8QAeKl7eeDgljOKqPta43PvEw6sfXyQY6pgHica8oKQsvye4uhU2HRyLAfXuGpjIPfkj%2F7d%2FqBM9Uz4LYcr0jf7fB7GGZgTtis19XIZOzI7jggM79%2BdeuX5QDEPvfUTK7D3EpUo245bdpd0TqXcR8TL%2FLZlPmo%2FIVcge1R7JCaULWmTVgNZ1ypz0SNuzvAVwAcPkVBRHissnijBCNM6R5LlFWe4hh0EU%2FrnCWHRV4tObi1H4t4XJHtVLd6pyu1uN6&X-Amz-Signature=e1c1ae278b698fed9f960d634877dc8d7b693c6db7fff7c753f2953e72284c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

