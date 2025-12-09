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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNWYIJGP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLH26tvzqff%2F6QQvy1JuR9lryyEsh%2FtTQpHGOwZ25wjAiALOi%2BRQGLUyfhzXgfY6FyPtXtSpq6QBSveJMcByc3YfSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirDPDcXuKDC5zsX7KtwDQeLwjvO5KIkWy3LhL7%2FXVU18bqRNQl64uYkguNuZ7d%2BNLu5rXvHwqLH52fahO%2BXjLLd7Xf9lncz3MxtEyEej%2FkKQZUgQdYJGuFfRwq8n4hwYAwSMLQGke3zM0bcPeV1XIdf7MI5oxihGWpEmeO6Foghyx5IphX0lVWp7Py0JWWfiXdwvMeafrEoA757GNeNtAXyIuK8Hn54X8uWZyp6MnYrdx8Tr7khI6OZHO5hWlhxRS7ix9DZdZsGLYUIg356fnBlpQv1yyPeVbZhyOtTcezoFEofSobcNVr9LR%2FUFkgi4%2FBWCB13yXhe%2BIQg1zPnp%2BiwnOkth2k%2FIgZCpc4Ymel4V2iQhJuEieyiuYp8oMUDUytm9M8iw7U9qYq%2BfTj%2BezrBlqoa%2BXxBlHl7Nds8cEDavMvqJkh14ME%2FYDFevUyl44BhkMB4rrz8LH3f0YYP%2FVkkGniwRdNv9RBrN2vMCxhW3ihGMht4UKQmdF%2BTPrt7ukw6dwmPwmoIgCIzWli8j3ZilXFGQqvdT25M40f85ESr2rX3d3CFdLnKAEiqanJVEh%2FOHe5HEAOyuTZUVWfc%2BU4z3%2Bfv7LGxhj0V1H44BASE3uV8M5wOkzxUDIcmz%2FCnALFy7hHKtfCBE9Lswj8PdyQY6pgFeBFHgT9M9KdiE213zBLkkbCVkFpWLGfuYMF6rRx0MH0YzgR7yTd%2BkP94DB5rxECY4aCoGGZlILHpWP4PfMn4imScViSZS34hNyEE7mj%2F5cODmyl8B7DjBk3yaNLllTuuEMbFpzOaEwXRYiELbEm7AUalf%2B3wwBQDM0WEe08VsW5ADXoIRdlQ2J1Ez1TeYERQG0wkncFkmgjYG0j3126NCQW4J2pM1&X-Amz-Signature=61db232bc7f852b398976e5f11e5f22df6395dfd34169565ae8b8bc730bd7f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

