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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666MYJN3S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMsdXoCgSNWAlaTPyNmpCKUK6p2uEmp%2FaOBgUHz%2FaW%2FAiEAvwUqf2D3YwTKm5FVBoBVnMBOjWZyBCpTjAcnKJTntqEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAosruQ1ThmkRUc9pyrcA8TgP7SBO8qAJXxS0PToTlWcT75gYy0DTWHVzi%2FoyvAvKp1CV56q%2FO8cywGtaJYQ70BglZQc9Du1mHjNxw%2F%2FooGLcKCsKS4Yc8zZEqi9KdhlwK%2BOgMGvaDAmXqOJ24WbPKC%2BVCYg2G%2F%2Bk059bIujeDGyWMVfKlifhwZStfAvNmoyezyIciSU1JKVXhU2syP6cMx1qdPTTGgblUnqNSXPw4%2By%2BiCFGZNqUNoYqhWtpDfSwSnGDmkCAqND0X01DMvUGHHQ0JMibvlCLuc84M5spYjqPNQGBNmOJ1%2FoE07TvC2KM%2BUL8bQK4k4zvO9hyU466T4%2FytHDT3prt3FIE9nPe3Fne47LKEhWBrU4YAT%2FQdd2JVINZByaLbmRsbJv7yczCYuFzYDmtuwMQqhezxZI6Qhv4EciD7PPu0VqyXem0mfy2b08ceFMhZMGx9ORFZqCgf1Xr9RwYukHZhoGzEgHvkik6SnKL3Nicce2ULhkOrT6bWRIm8gR0t9drwQgtTlp%2BZgM8MkP%2FpRDFwwCQvUisIejxar99FK%2BejVANlJqrjthmI0gYiHFFQ8WBhkB8MKoapODDFJk0R%2FWHIVvxpgWWS8bVBuKv3PF%2Bin1Nyat5ZP8Pua5Hi5aobKgDWf8MMDCzskGOqUBIWQJcMcZcz3bLl6NO5ddkYejt8VwsIMTTHsfDVKSACF49KcdtTAwlkOS3kMACjNMySIgXhTamRk4bESJ2p1ywhdAHmPzBmW5KzfQIc%2BfHILtReYwnP7Bzq732I6AyG84FJ9uRUeDLjv4TB4hVuuM3xUWgHRE6fdH7KU7ezFlImhrWarTG9sScRzsjAXCFcUhE%2FBIwwF%2FCIuaTPBqSFjd7F4HX4BN&X-Amz-Signature=396f9f2fdfef70d7259cdc53290720c1cdc91055f5221c3f1416f95b3632bdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

