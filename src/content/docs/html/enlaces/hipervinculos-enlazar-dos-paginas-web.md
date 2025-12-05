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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTZKGPX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjWd8F%2FBZTapPd2C511ag4KgKoIGMt8UOq0wZIUnyB0AiAF7EqV0JNbkBq2pWz5gobknz564%2BUfTQKd1GaUfB6Vair%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMmmZDr7bVOn6i3B68KtwDoL1SpIHDFx2xgDKwQAp9ZiyUjtvOBOjutMpziv6IQGGHNISP%2F94ElsEgsb71cbqwnGvdHSnipkpxbC6y%2Baec3m6sTjgirAOfiNNKLK8Go1JHYam%2F5mlYHQnPApVd3sFodm4E%2B00YJR9634AkZ96I%2Boxu6hacUqJM9Vadl3q0fYEAcNxjLSyZrX7WISnuVwgN2NAombgO%2FqzM6FGotbf4Cv6A7PM833XPfxyhhj5HQThRu7uWlzFg24%2FU4vNwUa8pHkKUQDKRtNAnKN6UED%2B7Nfv6e6ExumBGYYL2TQUf7M9bFqWhiWA8u7NKoyY%2B5V%2F2xe7hdY8Xk5smR7uTm4tEIwgyyFHvVXnpHBmjmmG%2BMha%2BOV7SJc2YmNonnMfjlfve5FRmSvG1lkgzkbmdBE8s%2FOQedulL5mPdF7uWmVSajSnYfqox3nwkkGrEGGiu0Xn%2F2igf6NhqdFLdKZdgO7mjhYG2v6e4wlOtBu7kko1gTs25YgJEKQG2dGq4hArXphvb5F5wxXnD1DpKlOkenfTqj5im54hEAOZbyvwMl4ywguH%2F1coGJPgIa2B4F2FJzhG66YYU%2FInaLGbQLOelRw%2F1EbOwDwcPyXCWNr3csxmWsCnFyCC3DFTProl4ndcwwcbNyQY6pgEAWJRWimGCjU21hIxrR0zUE8RYDy9bO14E7Zk4FiXM%2FAcunksizMYH3BI6QiaR7Pp6WlhZtLoip3MoN6iZsDZDFjHEKGG4qO1iu%2F%2FyNx6mJP71VB63WrH9U8%2BJPVcyMyedEAW4JF905tQQ7Ftzs9uPg%2FeCG2Mye9L%2Fq3l3dAilTj6ZQjaURb6%2B8XwzfM7FCO%2BjE%2FS5U3sv02vlQ3pcTuVvYwNr809r&X-Amz-Signature=e35437625d557cde69f4d3c78d5d91e2064a237d8a90962f03d8f19df26956e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

