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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK4RS6F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyGZG0zSE9%2BFmN7CfstWimzq39YKd7KRnKehxXhlIBAAIhAI8ajFPIgRUibeo5M8vyBw%2FzYE0yThaGFpI9nYNOJiNmKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygcIC2pYtqOOy%2FR94q3AOx6Ce%2FzzdIllCxTdnRiozh83nNwf6QWBv3ikedxuqNRjaKcn7okBKdmzjcEU9phkX8EjlRjU0UaXqL8J4Tze1sJ7MgenSc6Pohp%2F4I25ByZTOfUIYrJCYVZVqmkWQ%2F32wEnZAawqdGUJtn13RSO73vUDYuD4yt69adYHjTo9ohscqwunM3ZRNJdjf5zZstQ9lM89u08y4D9DsR%2Bz4Y09i86z%2BiLUHyGG9G4Uzz8mtr3PN48X96PqwMDm%2BG99b8Y0%2FahqzZFqr%2FM%2FqUCpTSQxiHnUHYZi1pMXHalXOIVBHGL6F8kniy6jNZSwdhSLJVAcyEbbW4hU0NkiiZ33wnbkkOKZgayyRJwmqcgOH5NqZem5pz%2BDWx2ognsT%2B91RbOqn12ocAwGTW9N%2Bm2XL%2FtVebIh5d6%2Byx4BqmCtlr%2BYIxl7KuVpmhSd5YKeZJsulZAVQbPTC%2BVT7A8%2BNCB0CC4DH9XWOs7Y2JmMO6s5v83Gc8%2FFBNXJ66RIZGMGw25p7XWmyuH5ipfeIJH3On0f%2FZmdIideNe%2FqEXVcP8XfWwGkaWPy8dy%2Bi0RPLRsybC0r5kIUzTMb7kxMiJSvgGS72wUgwiL5HMu%2B%2F%2BrJ8SvVHf5jtokoTQfcAGCO6u2YshOWDDZodjJBjqkAYqNT2Z0N%2Fe4dincPdzj5pMeY3zgXDViYA7NzvGZzjMaj0hry6OmhmtirM2bdcpd%2FnS%2FjohKhezdrtMDhueGmBqVpxvvfKryARk31RB7I%2Bc7RAcil8fDOEOKMuqgGMttX4ZeL3bRbeDvszU5POc%2FltTLBSXb648y1CTmKfJD7lsAjcNLupSJ43Hps6vy%2F4g1nqB7E7lMwhNjpxpm7cBVQVVYm2OC&X-Amz-Signature=57e1566c982d5cad2f5545d3916b4d26068b5970b00a4271986a0c4def5dc6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

