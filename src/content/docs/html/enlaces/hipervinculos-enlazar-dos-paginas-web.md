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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDVWUQ4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcNAYzK0iKOiNlVlDj5FZoNv6lwkAdkafZCJs3b4E%2BaAiBSrLTJv1xdhIECNuOnBPy3MaB1f%2FtTf02Eltq7ROM00iqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCndjhC7kjj%2FmtvRKtwDxpd%2Ff%2Ft7Pc6aC9OTDYYHSikaRFZcFAt9fr0XfY6%2BFnnSk6tvB02TEt4CxnLIf8XVzFqIrvUahGIUlI0ZqiMOw2KoqbEg%2Byw9sX3E9qPqFQkLXLubLeZRyE9gZTN28ofNzTrcCmk8UmKUqK%2Bkae6TPcfOLR8oNH5KZZplKEcWY0MdXOxXaGMNInvFOUkHoB4R5jGIdWtlF3llcZCTc7sfbUI%2BgpM32nIRJqo2bNPee2WWCclOGNdfufTPo6ekZADyAekLTCyfrwlREJeJ98puSUICYdSLNClpkxERxsNwc%2BPjFrLNOKuy%2FP2XYzHmqbbydvdnztnDKfIOyDikUzSDvjk%2BXV9%2B3pVmuBGt5wZ3RrqdQb5KKlOulbfd4D96Jows8I6V1GSf1SiPXOdLURp%2BzryNZAhThUQicEofgvtG8%2BI0Q1OrsAfrYaualE57GcmxpYxIbDWuoSqNKuuGJWy6JkZfuNzEUC0Y8W4HHSerfBBr54RVbFZplAteHFIDmqI%2B8nm6hPf%2B6%2FF%2FtHwXyUOo69QZi4ZebFOkIcM0%2FOsG0zY7%2BMzC9Ujjieb69QVEFEamxtZjE3hwBTkC1suXnJ3tangUy1sXTXA%2BflmXjPwbz0SSQnQN%2FgMhEmVIWhwwre%2FYyQY6pgGxvnCimzqR6n4PVEhiBVR3tf6ZmZ06tHtnoqSDgWYPQgEi%2FrSSgVIdhj9iYg4L5FiwLlz%2FzAqkvwPEFszJ%2Ban54RrXFbT6Ao%2Fpzkck3%2BQgJXM8dpi6P%2Fvy8usK%2FsoeewHb%2Br6Wr7GsOOYq49TyIfPowwy0Qve6Hf3sbZMvCHMaQvnboZ5zzyvlc3DKVGOhR1%2Bg0xETmg7SF5ro4sNcJOoy%2BQ0Ewm9y&X-Amz-Signature=ffee31a70a9685386db7901792a637a55e71e56928dc1eab217e9dc78449b1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

