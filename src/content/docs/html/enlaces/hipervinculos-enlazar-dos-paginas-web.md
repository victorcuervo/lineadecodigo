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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3NGUPY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEvzaWS9DbQ2zgJFFVIQO8jSywIOwxNxtsuUU%2FG4jJkAiBGJPEwoZd2%2BM1dWhFqDuZ8jX9j1HmmPHU23v1JWrQdeir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FrHHLQThbJsymNRdKtwDxUqYLxc9nYIRZTFZngfmq71kLy%2Bj6DY0T2l2eRUeEZ5%2BhLELrYIWseqPL6zXmG0otfAbY3ZkiRT23VuRbMi0QXRr0uKDXPnGyilCGVcHYjQ2QVO4a5sreESJGIL2BFgvFT7oX9%2FWhL%2BYyO6kHnmsO50hqNQeMbhfXhR7MD3JB1YzoUkIY5EX%2BaW3Dftvxdxccn3mfFty0DkO7RPTgVQD6jDBMXUa094KGg4LwRAWr6kQqRIonIsQj2X4Z3O99bbUzAsAEVsINDqjSTw53tC5lrv7YwIbB5IVxcbxumIPBIGtqwIGQ8pcCj1jLWkpIH179TND2Sh9HABWHS8XvOB68TrnE0amZScMAdU5PwjPdSOYUGKvlb7k7jDzA81QNBI%2F%2BgFqXrieC6jNZC6p7p2b0ym5%2FJ3hs73pZu82EXJ%2BOiDva5M8YEOKV%2BuhI%2BpeqIwPoq5oSh9Tt7MURaDg5TSk0ztsIXu4F52ldHnE2AbAmkUBgAUSl19Xp3u%2Fd%2BIOXX9WwrD3H%2Bc4gNM27oJalc1TT4xuUnbh%2BBVMmYewPIDKn2ZmOSZLFKZTdAzQk0bxk8QtUgYdzHuYgTJG5m9Kt5OpJW4iUP6KvaAG6Zirw9GKkLw0pKzs0SlVPkweHF8wnobNyQY6pgHqzjShvceWWJsqE7ByxZU5n5et6yxXtRPbl2ysEJjj5eaoMkkuiT1aODHmmlYx0oFKOaZAUqR%2BAQKP9riHlnJdjrFs1DSgVpZ7xpKXErraWusBPDEx9WLdvOMX3hSqTiqmnNiOmb0k59jlil4gk7833rtJ6bzvTCeVnhdJXJdK8yg2w3b5f5qUXrft862gjVvvcBJBBO10%2Beto6EmEJIRFecgnc7sz&X-Amz-Signature=7c3b93c8d5906487f6b71a8fdcf8387d3cadd737c41bd3264672cc133fac51d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

