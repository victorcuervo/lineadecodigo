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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDCU32B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGgaWgoUByxdDBCIYP7WxiYoCwwalAqfw1hYUIUlomFAiEAsfXLhLkAANZrV2h6QsO%2FeXqxxbPN8mh9ss81ORHjJy8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5AMDjc6A%2FSoOXFnircA2fYekx4ZTmIiJW2hVPGM%2FQbZTI9lH2QuIKZ8fPNxVEb%2BxzzIRAg3xld8nLmWBNfxFNMm46%2Bcr5bXOVOcKZFo5xtM%2FtAN84a64ofgxxRoWc9g%2FS8C9LxCRdlBEulT8Tkrr9JFs1TR2vBNyhHjo1%2B2EsMstRiqVjr15Zv%2BAB%2FK2mwNNaJ4PoyumBJVwOzvBjhqUSoUcCLIOBbyoY2bna9CmtA30GNvEmIbj2h%2F3yzYSciRUa0nKbMx5bP8%2F7VrlEWxldos3QHBRIRXtPNNyYvSZah1WwNLQv5b14oQom38OICNXkhjcYcEAhUWzBERU9bCehhaMN3LowYmpQPjGUdyzUxpPajwsT%2FSfZIMZMM3p5QSITaq9nQ8%2B%2BaBm9L6S8W2Cu3whmIqen3P0HuGyJtl%2BloZe2cW3zvDGB0U%2BWNoxzCopujheXITsEdSRbTxnFRNEd9PQNLJ7WsSzRL3pJ7gO55znNxLnF5L5Db8H3VUfNmPTKF%2Fm0i991Yf%2FyAehpXbXw5Bl5AjSKzUoxrojI0zkGNqSdd6fO9oks%2FFK7qg9ZS25DXbGa3XNC5Flmkq%2FRIPyM%2FItbyBGKzbBjZimyE60ysy0zyu2LEW2NbB7UD%2Bej%2FAMFzwnZAtbNN%2F2tUMMmG3MkGOqUB%2FmjmSk9Ev9a1n7tYbQGNttTelA8c%2Fe9DGmL%2BaO5icfW5U0BAkNdSmWtd%2BMZVYG6JFpO5nnnfSBAbGhWxzN91%2FMnp7OZD7DLCokc1cG%2FnybJ%2FYTeE83lAzkJzmdwIZuYP3Ts%2FFOYw9Vh01UOiV9gG05a6D8Zs0Zl6Aa9Z60xXK6fxtwzg3vgF233FTSb%2Fy09v9I1QgY85v6uOro9Ap%2BB37igapCNS&X-Amz-Signature=e0101a76062b8c3f4681e6e7230ffa5a600b231e4e587ded30b8dcb9c7f11e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

