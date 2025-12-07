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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJC4PTP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhQDBoyFlsJrwVKUqWkiQBXft828EPcM0lzvWhFx47qgIhAMdCXDlBO7eLIUorAuh%2BVweWU7wgEp%2BM68TK2wrE9kqZKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdUZPQwo1NLs%2BrFpIq3APNozorTzPqfsNhGiJKS0acC3cJgKvIV0qS63fbWEz%2Fm1FvSTJTk4uHd5k8mDwX%2FFNJTulHcTJM12trhVvJ%2FkuR1i4ZDf1DRA0MPIYhgILVfBIKbmiX1I64QYzRy5zGETQR1pLb6KotH0meStEFWopDXtE9e1kd861Qj92kDCt5GXyjjLD%2FuGNhUcAMXhQa3V0YOQCwZ%2Fts41NokFi6M07CK5JSXspO3oCVa%2BvHocDN%2BWi7DKtVUcjBumTd980teP5wemh%2F8IOzRx2is%2BHULHvuiOn4IJ77Uknqg4Ci9DRJR1tflWpl0QfSY1cZ5OaV6QUBK9%2BJ5eEaVd97g1x9EH2r3Lj1owoPAthCF8hh9Dj9TbpCK81L7IeC4gfUy6l%2FvEXrIv4yLK8I3nfj0UX0yHgy6TbXXXbWLz4Ace9z18nJcIQiQ1BG4bssvv6kZ6xq3HMbYwZJF6xFkzUbAbYL1yWVZRh0hBlBQr%2B%2BBexYXvpIFV4M9LYwN%2Fh%2Bd2mKjK2tTjFfYThRODV%2FCuc8%2BC9rQIeyt9Fp8QqfptFhdVb17r1%2FMU4ulH9Yuf3bcmf02odGnuWAxqOFzER%2FkZ%2FfOEcZ9Cl16qp16Ua6qM4DRYYcNMp3%2FOnkqMZr4UYMNsOdlzDLntTJBjqkAX74JXJEP3nzQEjILj7%2BEElN05k3TFglh9SKHRgqnjHLR7K97yrR3ma1jXIwp7fV8gvN5XrviruOi4GK%2F89BvTrCj8vdauQze7%2BMpxlTYQL23uq94MkX4YrC%2B6ip3OuQP2vjl6n194HDFubpiue77rvfFQpKXlNpMSwG5w1BQSr5ZmVqJOiNKE%2Bitv9D7AsU9vIrJM%2B8IwLiJhwgv2iS%2BAMoUYWX&X-Amz-Signature=fe782b422e216eea85010228a2bc32217cc7718d9f9a70cf7719cd6d41b4bd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

