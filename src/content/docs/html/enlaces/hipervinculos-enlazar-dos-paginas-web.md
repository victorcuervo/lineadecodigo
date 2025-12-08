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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYMLOFG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBwgbQz7DyIHwCRKXJSG8P81rtkZtEUSPT7VlruBmGnAiA9zT6sKnPRy5tBZm13HcrU5138ilWjtD5tSt6UEeYikCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCiYVdHS5DEab8hhpKtwDQhmeGYdk9R47TK9Mk4d00uLVtRJAiLWZLDbRxzu7488KBH9mG8mn%2BouaXQkRl4F2Ghu6vw8uIvaEQ4GW8WvhpVPhOUF9IkEdF062GXcQc8KIdDi1LoHHCZPTTH7rHmzwjWRJwBhyUFT%2F5HD%2FhQexp9C7xXGwsd0LM6CN4IUjCoImsFS9Qfzb3%2FU6BATeIphbDjrVS3hNQexHbERS%2BpIIVxRA1XyFyPQL1qGNGGhz88gpdbCboeUr6NsdlDltsKhdl7HXkkQEBf2%2FlJFOnKaNBfZ%2FeABr9wwwQ%2BBkDWjYgrqygBZObmX8cbzMYct%2BBF3JC8zaTnyHjR3zfqFaKgND9pSF44o%2FMMCh2uJa7vi%2BrDNsRhN%2BgcD3qcBMYJpqcEpam0gipz606SGomYboOP8lgC8buZhFKSXXhtEBtEiDaJLU8C8GPRJaYb8cGpgA0%2B00AgesbecEblNSBtZcKRRUhwYnkfQ64zEhhJHgeI2tqzMuTaEVnu%2BF6FMcsf08rzsfgy8hSPzeHb4x6OxpfNcXRQ%2FMgtvP8%2FJxZ3f7lb77V5eYleA%2BjaToMm7MjIEzX%2BUdHBhg%2FwP2KXRD88cWK%2Bf9f2IB2qzXxPLYi9lCQyxV19WrzYl6JkA7T2sxi3cwqKLdyQY6pgGUTrrtQNM3nEYRc5o1NIMBy%2BkbxL8g3V8Dr3JD8avx%2BjOKPhjCjAMnmPB7Amt%2F0i01rkPg3lfS8Z%2FoAZraMfq%2BENXWDMqkynWfDspthffyVyyuJcpYqY8nqiHn0jrbM6VVytqu15gQQ6fuSYNwaN3IOiq6%2Fx91%2ByDiH%2F7lfILLbd9pDPocLA0xKgNswxGYtwa9P5AThKfDN51Wnvh9ihGJhpUqYx1q&X-Amz-Signature=772ff4e770fa71415d466dd4197e4acd0b6f14771b16130712a025e1d97c9cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

