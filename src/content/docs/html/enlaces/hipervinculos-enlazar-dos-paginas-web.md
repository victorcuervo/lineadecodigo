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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYLFMIB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHPKQr9PGhae0or0woQO0RlKwo2KPvuty2wS6qHzupWQIhAJtKP46hwnvDqOpL2A6c3TeANfKbz5NqaYrHR8sqGIrNKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwByOJbO4saaJ%2F2TN8q3AOGHpsyg1QQlxZMnu7%2B%2FfdvJgdMwHHjXuUhJIxx4apnVB1jL7Qk%2B7GeXIYZeLds90LbJ3OuzUVZf%2FHi1k1rkUR0B2icMh9VJA5Hhqlt3%2F8jXHDJMWT3yukHM%2Br8oozN9arW3SGChFB3qJ0E8YpwZ9LWT3%2FbJh%2BgXAB2zptCI0fWBGzUHfqpZCyt7J5v9ck7gyWDTIe%2Fd15FdY6H7sTz1EZOTh4wtQne3CJmo5um1X%2FDcywFjG6lUmqBOQqoc5sp%2BjERGmn%2Fr9cW6fsuj6EaxWgibW5ZGX2ZMBq9sQeouzlUUirqmExhLfK622pE5F4%2BIVUOg4ZFpG%2B%2Bg%2BAQ%2BFGyJTF6tbG4eQe1PvEqXiZ11Zmt2SHDuxzWVyVg21wfcufxQhYj54vcE9P55f7733MFdT0vPtDNraUSO7XnNmSTzeg2fLiVx93T%2FKw2yI51STwJZgy28r32xB4aNn7vVGTviOzPTo53JIiSygQz76chq2p3htTpgs7pw6iDtoHeW5CLF6g1Yq4ZTwokWBFXA6ChAT9EYb3pgyhJ4DxljRDoiGtwIJeNScY0k2rvsnP9za6ZO3cxJjE%2BjbD9lZwd81PtD130%2FPDsn%2FupUppJnhFZQUC13Es6ilIosjj%2FGQrcWjDNrN%2FJBjqkAa6c9IOWMle0sIIO5bnrgVe55aZVNoFFqmpA5djMTmCrHhV9OoWQBdYSiXCOAbfmc%2Fojk%2B%2FgEoUUZJXtbP5dl8CR7OSu6tAnmzGFLZGtWgAo1zrmjR9kw2C9WhUYlw0WlfsyA%2BQX101fDh20ZJcUMz6gffnss9zt%2BZceJx7iV5P1C%2BT7aiT3CPEw3wKUZ6hB6LxsCBw2Qf5SJZDJyN2VCfloWJd5&X-Amz-Signature=518f9ca5e1e1d1ae7c5d3a64221dbadd5ea01c102e30c923e0a68f6131ab3425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

