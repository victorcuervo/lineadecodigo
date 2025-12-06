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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLCD6OU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgkSibjuwNTRCVy8dTFrl%2FnqNUha0oHqwyKdtKNWoDyAiAxCidD28QFpdkCMnHliioDpHmaRsjETPzrv5kgtWV39Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMEYB%2BPYlDhl09oMfUKtwDtb4vwYJeTUsyR9UwfdcmzFRFVJExl8gd1oBflD4i2c3pnwRXhOZBuejVy%2F8ttCqwMC1H15h4JWMVi4vYTzpd77mXxoeTlQ3fhZ%2BItTPQdxmohGLHyhP31jjPgOKWQIO7qQkk9xEkibVocZ85fyVklJz%2F7VtUnamTbABxdJ1U9R7DfUkhzUcCD1h3HZaP1RwbSl0Ye7hVnAax8WkdJG1KPahzcHrBD9pfW97SEk3i2eUb0aH6abePeKg8o5sqs6paTyVlhmom%2Fdd%2B055xQgk35tcXet5H1KW%2BOU7xIO%2BnFGUfNUwDW109QoclNMhIYWKOdZ9LgS3TOpvuJprSBRHYUNbzmkvnkTdhMDZUxI4%2BFFbEnLBKBVsAOcwBkDFjg%2FsOWS%2B844SY1pKTznB%2BBkL%2F6t3al8gQlKYsveY3N%2B3PWVarzMD3lMtelU7rr0WBdgc%2FpOkZJYyuMGLSNyM5tKP8kV3htDesNEs%2BngaJrd8FsUfi%2FmGzFjkkMJo8qZWxxt6xj9oPa8%2BqxkfoFZxADs6ezV5oUfn9S8B2gEthGuBu0bJX6X2Ev8kLt6n84H0QAMCDbe0BMUrL7N6fkS%2BEUdQpLwuqNKkTwcZ9jxP5D%2BiY%2FIxDjd8M7F1nchVJSaYwkZ%2FPyQY6pgGyDV6U60zTqOTHS%2BqOsDMLBMdcqV1LhoTvXochY89DmkF5LrbWkf2msKI%2BdypMjwkyPlYbcpFimjpZVPVn4qymcBx%2BFFYgKeU5bKvRIC6czhpFBeyCOKXXM44XMz3wEP5wzIc5hbT0LtsA45eUZhFM4p5B2Tgj5uRQj%2FZSUsFmJn0RSNO4U5GWmG9Vz5QxpKiqw44ysG6dZ88T7NM9TeJmJJfz4PFn&X-Amz-Signature=3b57effd7fb1e625b0f04cbd23836f16fdc6eee74ce8153bdc4f59ccb2ec940b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

