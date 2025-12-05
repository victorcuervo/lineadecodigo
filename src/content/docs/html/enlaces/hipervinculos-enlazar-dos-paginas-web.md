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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHRKWM6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEto1ybICOT%2FkbwZYAHm9kUlCK1ovKQDSaCnWy%2FzxZxxAiAHsvPSZpp8UQCBzx1IrI88JCpbGCy4On5dZbC4HcyH7yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMp9S8OhakHqOV2kfYKtwDw6GItk%2F8feroFyvbBta5JT7SlOqmicE%2F9da98scY7Gj6n5RhpPID8qgLgDnDoXYh6KjTMD7Qdcv8rDhgHV9pDwDLH%2FxNRJ9zV45ZaLpc6g8%2Fg9kpM8EkJ%2BVyX5InzZIEa0LH6swEc%2B97LH29CBG7wDXsSE8csjqoomiAFDM5R4XKk7eiXhv07DEJC1d%2FoR1yd%2B68DLrvpB1e%2BwfkUCumWXNSP9Mpe3J5eykZrHiLcblY5zeb%2ByT1WRMNVLP22P0PXu9QLRIVVj4sMvhancGzuiwDv6MTIlOM4CqWUXB%2BSAxUeHBny3BJ8LK0yMYqNR6cXovoiByrF5CL5MsRdnaSHow2LmBj920cpbd6XBFm9r1jUrNMuPIOfGhrjAquok8tvcXhymB6usHjd8mitjSUkdMMpdMgnNQWX5blrbxiQdVBS2AXLY1SIbGkxLqqPNShrQzPcBndPx%2B%2BlEp1mPy9nrDcjq2bBPN%2BNGYMf3tbkdrQjPHmn0Nr%2BCyUtEIhtpW7OqWDHCz1NnTkS7w3p74Y6upkrBLYQ4nd%2FC%2BpjJA8D2r6rBVh9KZDtv18gZlgQGvhDu4sB8BGHrBNX%2Bo8QZ%2B5gX47BU9vGonAjtct2rxDL3hS1d89pXDq7w%2BpsEAwm6zJyQY6pgHSDH1xwlO%2F%2BY6rXDSrMKeJgcvGe%2Fxue5WpVYWXh0v0qhzx0W3PpMWlh%2FGZr3hDRb4v85Lppy6aiZ83TQFOxIs88ulYHXSzPXJZLtA4f03%2F8GlwNQscRPmFb5mN2urEPv5EjtfQM6%2BXDffx3c4mehIhxymhcjQSFY8gZdBAe%2Fo2qlQXQlWwVGJsB1PkQVNU%2FmtMhXTcomYYnT%2FKyLfnbY2oLWLyRCje&X-Amz-Signature=62b9b528d7eafd5866aa8cfcf5ba8ad200d5fab3bc3e7de0d8808394ae0b9a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

