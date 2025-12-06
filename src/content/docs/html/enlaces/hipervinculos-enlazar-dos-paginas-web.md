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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDOYDHR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgp3Qi0eQngqtISIHnikkoS6EPOUqKieDfP2uC%2F9ZzmAiBfIf1XHjCHQqea%2F71uK5jkXh1pQsn2cpTxYNZMcZkFvSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMJHa3Ps0EAKFI4s3OKtwD%2BWRPp9kjLOMqHwvhr8oFzV1MRYhEjMCINlw3VOFE5jYDnfkpOWCE0vFX9vkP88IzA%2FB8NO33ZgCz%2B%2BKSvN8OCnkqMKxd5tg38YW5NRTNc1hssa0LaPyzffX0JPqaOROjLAhtdUVBOcJ14TWlJgwIyGWQYj0qRu70ma3a6a%2FKUbyGqxCe9u1uT%2B8%2F7IJe8hv%2FL2cl2AtHjgbShGP6eyInaVFtWTxL4FNoPSwvCAH8BRwdYuF0Z9nxJ8FRCNLXAamm4GSUmR7Cvyq76BBOcxQok1LqbAt2Mid1nQItUZCun9LddEU1qaYeOLbzAZCGMSpdJ7ibPQFdbem29jD1%2FMdr5JB4taHDqZlDwB8wKnyVd2jn55ll3GmFGUpIplze1t%2FN0bh2EG59RcDvm4iO26OzByt9t%2BaL5DKCo2s5TgTGY9jMchedH4Hvv5smaonbcj8dZp%2FZ4oZYeKFIVR89vWgOoKXCw82xiEYwjrjNQWZmiBnq5K83k1E9z1DyC09e1Ho59%2BYrj993ss1ku1GZU0vzpU3HkcDg%2FV65ivXFbFSG5DABivnu5P9yTrn%2FtfxRaIPllvMAkgrLMNEYUsodFps4wY7cIYcjTVFhtntwtwPfdFLhFdQcki0qj6JCKXAwu9PSyQY6pgE7Gs8qDRUwWvneHoyuVaDlk07NZa3JrjaoCiS%2BvQlgrmvEsBqwoj%2FhzwHwWdoO5kEcViW1TE3YDM8CMgc1w0avOSi48NUSb3uyKADhde7bap2wXmyEACKEYsKLAg5Xq3YiPPy0uQef3qctd%2BfKQNJOtnOCHwDBI8G3Z3Nrn7eXdsze5HiIcgbFW%2Fna4XL%2BXIwuf86xz9vq89MXaaryejf3dJr49q4k&X-Amz-Signature=a1fd1d30aeba2a8cafd2e159056e6b10bfa705eb1eacab2ba18a12a9ea7d5c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

