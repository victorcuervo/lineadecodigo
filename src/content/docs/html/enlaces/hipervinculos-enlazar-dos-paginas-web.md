---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAMS42Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2xsX3g1m6opq6HtZQBDK60K08j1vcLnpXqVK6Qh0HVAiBywfJ8KW88cGfqmb5gKD5TApOI8L67zr2ThKrrZa0unCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVWCKGAPgqSfHNtoxKtwD2vdEGTzaACBXQwTZNUcaMVdhlChnhIin1TTRifeMu6aCvfa4dRqiv7p1aPjYqo3fxaOmXRIVrkFjAEp3P0DvQg%2FIYFE7uCwrPkmOJRcsE5qDHSGZYq%2FaPD30kUD8Sy7pgAZdMrs42mg%2BG4lPN36ZoDnGDeEnbpNJHHSEfESQIA9L91whYGuGe0trQfZgYENOqNoEKxrmFW70csGiH1551McIg7cjikXIyS4oqDfoNKsGleFfC1COnWOlauBVFQdSGMCc5h9T9bvOsvD9EBCdhDLe2cAl4z1vA5YCtuKOmBavAow7nBMymNyxPtoYlgwGML9BE8TUikmAMO%2FVqBb96w0jj6kO%2FjlvfbiX62CHx2JbiuMI7BQn6Ln7VZ5yxGSQ0QhRKm9tHpLvdhyjDkW%2BdRA1WLYPuGQFfqAr8fW96D6QvtekKA5iFS3mPwcQou0WYEB0Ui3qFuotzaeCXoxbiMak9Xvys4YsOjFi%2BmLfOvJDs7a8wlCCWlh%2F9TH1757MUgbXLC6HoxVV24J8S3lvLXVAdW50qkP2AScla3l2AlSF5rXem8l5tFxPcpN8bnTEhtcvtdqWxeVkA2%2BsngEQnxDSLryo5YJ8oeN5tQusIJRVpqd6q9XYocLa%2BHswppfhyQY6pgHT%2F5e3JCIwQnwsgoRa055bET7uk%2BBV55kj61KvpWRSVtApa2wWm099G7IXG30T%2FmOwPgwuY3NhEIccSZFpwkgE1VoC8t5JKynYz%2FzpOfVouepccnwo7rAd4nVELqZZpG0J5j4R%2FACPP8b4zj1IrIYvhIfHEBwlrop4cu1EMraK5GwDF3dVn2HCQhBd%2BWQdjjitg1dBFIcEapVKIW2rOodcvoKDNJ%2F%2F&X-Amz-Signature=3f97e3407c209b05525b1c24fbcc406019ce53fc30c37a26bf1ec4bd6f774930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

