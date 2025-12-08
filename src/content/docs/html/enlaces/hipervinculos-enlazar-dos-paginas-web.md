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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643O4C4EI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQvy%2FKamkb1lCvx5pupKCWd%2FfWezVtMMEfD%2FVYhJekXAiB2wd9m7Jur4NQQRsvlGnsUvzLvJc9OUZzf4jRzRmHqXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWOEb7tReRSr6%2B6JgKtwD0zyALKWfKEALb8CO7lIzR36o7SZ5fU6lTlmtUjvETt8jS9XsjHJQKri%2BYwhnuw4gzexoQp9R5oEw%2BURdcYeDUl4gRcXVuvFXzfEVlw6nJb%2F3NsQZ7tAMOgtWvj7smZ7MRit0YCgK3uVAVkoL%2FO3FCL5vurNwOT779riLAki3OAoJUlK7cok6ei5LaKsrkviCr2NEToqBXLaNscv0r7AWWmSfCjVRIQQ9ZPJmgU0Y22pRD83ufegCeFUsGSXlhUFdqEGIEP5LqArUvmT9tVGGSA%2BrtZ940VLvhVkI2gJ%2FMMZUpwRnLDhXwmPpZjUyrr%2BFF7KqNNNr2yms3hs7foEV44G%2F1KMM0vHtT9GiFxYhXkf%2Ff2zr7UtCX13lsUX3M42SkS1D6k7eyqXM3MqO4KBp7WlqeXuR4d2%2FkEwgQXez0Ki1XZI9Rc9KYimPWLEhtLwBmRvq7Tpzda6XpLUm2AOvMhdwPfkBVyvzaAcZS7AwtuJAxA97XfmqUBaWvPFz0lPM4zzE2m3SanBjRAS6h9GFMrPq1QsGR4ARV6ow410bIcgn%2Fq6gQoX3IJst9XdLk8%2Bk4cSANsTRuFn6tM8MaiPTqqx5qRvfcIBtoe%2BlfyovqXsL1zk1qsYclzYGy30wuu3ZyQY6pgG%2FD%2BUlDOtYaqtePCLv%2Br4dbCVAWTuE8BkSqmWin6RTFBg%2FrPSa5WsRVFoPDkL2JDXx%2Fd5mLzz7RJ41tzaygdypY8N0HDgN7PR6Lm%2BSf6Y2FcWMDBmuBh0RWG%2ByBjXfCIR66%2BWYq2KoEAFY0VAmJalP5SpyFFvDaeMpgrZkaU9Qwm9cBkO%2BFpyvcBbvgFpeBKMrbVfTj4IqQu63Mlc0RI%2F8zO%2Fvbkvu&X-Amz-Signature=37e45ad1d871c8467fa408a30c4e24455da5d20d52aed20c0389e8d81b5a93ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

