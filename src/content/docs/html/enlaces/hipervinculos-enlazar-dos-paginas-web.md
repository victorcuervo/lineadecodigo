---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSI6QEG5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFUINNrbCHq9FnJFy5QNDkM0B5%2BUqy%2FK6nHc624CZA2dAiEA5587f66TUjwF0GCpXbLU6veMrIe%2BjyXcMPl%2FH%2FYXjw8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHsGEbw2w6TKsGvlByrcA2b4hpt3pJfHm%2BuJlCWLwu7JV4C3byQW7ra2J0F7REUiQradyPxwpqcedFdgxWdKRupt3zsiY3u2AxO95wLm%2FGxJ6LM00bk9BddIvilTaJy142EqfyyDwpny50cDPetXq1M0Ef4xi6sDqnq6a%2FpATD010Wvn1Ksf1W%2Bnw3DiZpSQakniQ%2BO%2FEo3aFiZpyur55L95xq4kSmFG8O1es4Hs%2F%2Fe%2BOf76fFdLu2RB2lhx0jr9db8efEKKF62LTuzveD5AUu5bPNXkZN3SA%2FLgNK8IdHMDvAbiJH7tS38Dp7GyjbnfksxuGMOHjbTpyTT0%2BTkpWvr5zftSYGvnLIg3ew4kwhCU5hPmo1HK6fdkNdiOJ7PjcKUIqzqrHuiRlFBYNNvA4nMy%2BH4VYK567V9fLxBaJKYAuniasAysyV%2FAlAboiLfyetxOv3XiRvM7MaKugRLsfedAVKnm%2BvEA8mOMqR%2FlHYOPjD8Ws0Esp0fP6Lin7JgfKtezDOwkRUqad8ydVeUNtoY8Q4rvh%2BQhbgtB%2BXPBWUzEXdTFSZ8Vop%2FMTyRsM1ucxRMq7CJi5v0%2FhBgZr7luOy87QlIDMZRv1j2B3Y7g4IyJaXcq92ZTxn1teGKvNGDFV3Cu5GQPZaGxLnx2MIDLxMkGOqUBCgDMqLveN%2B7iNUBuDl0%2BJNCCJY1DmHDwd0LqpQvxEsohE485ZEuV8Jdu32Wzwd8qLFFV1O4NptH9A%2BEISjMLxmAQmyWmUenaK4g27iLb2UOFrzqZBzRS%2FLr9YpaKytpMjyChOZ9cE6LEyqVhjuQ47AOt7OAofkh7LwU2FfOCEQGiCt0SsTG4xGWglZ11tdz5oJnnnDWuD1rpvNrI8gBPBpd8d%2B3T&X-Amz-Signature=d85eb8e8ebae1ca5925c43cdc99f17bff811a73394c5ba29ab53ee54fcd18ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

