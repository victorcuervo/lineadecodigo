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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2OXWIS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr0CPbiEeUT5idOMaYo5c1qqwKeJw8X9YGGay7S%2FE9BAiEAtE9ubafI4VttM7YyJ8GgLAN5Lr6WS8fU%2BKFQIdYqS8gq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKwUJGdImyb9aX6dHyrcA9hRmBj3agPLPmfFtP6f3X2zSMHT44NTfvK6ZPCjRw3GaiQFHaTb%2BMJD4UvHB7HroFv1bZass9uTZKRrQZSXbCDDrPBurqgLJnij163LuICMKr1vbOsdgfgQLHp4AdbcTpdn8eHakbS5PT8O%2BeGUjaqBjSXirAoAnljp%2BXPP1dtyZ%2Fy9OA6cGLKWf8QHWAT%2BqypsaNoZZFSDoVrCTRRjJM1PgbSC1sIcunyJC9TdnEb4SdJ7YITAYkBX%2BT%2BzTCgtmjWeNs27uptuXiXwRzLBRxVjGOJNgD9z9iRamIy7PGgh%2BTbEuvr5jGuWAnb2OYeU0%2F5EXXqF%2BLOcpDKPKH53TF5dlSklNMIsiapzlLv5WOrHlkzFmORaYkQFsxYs45wsWKK%2FcRSMfoe4sp0lGdtN9Yxb3wQmBywwKL1humWCBnRWgEZTSwq8DGcqw%2FZKWVyXfFLeAIpOG4vXjB9teZ4Bbt7jhpVWd5GPzcLDtAANkgi4v%2FKuWF5a5H%2Br5r2yYLqXnDM7tyK3uQtQ2WHQSmKbBjSGa8hVQdS8x2E3c8%2FBNzdZvvzfwJXxyC7EWOIK1QqD5nhDRavhVENHVYpoxLxiUqBz5jYJBEQqt0wwU2KWNw%2FzQ60qjs730%2BHv%2F57MMJzGzckGOqUB35o%2F45aQg4y%2F8nSSPJwEz1ircCVPCjPLQLxiHmciDfozBFkADt8Q%2BstIMEOwXXCCtGXyjmpK6vgBGR81Dc1y8n%2B6BbFzS5lVFE4azytqvZgqQMYeDKlwJKtyYXmugs6rXIn2iWsWWaW3%2FRSoHGtrqvzFf2OPfmMR%2FzSOI5lCf%2FP5%2B8%2FSfXqTgcvorGyxYimVG%2FFSs4NjIUVQSjAlOt%2BCr3mGsFRD&X-Amz-Signature=d9930a0391f9bf80c9ca57c852db4fdad2b0cffc88281b3ea89f42647b1dfbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

