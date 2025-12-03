---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW4AMIEA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAf8xSQCeq0hxoaZis86h%2FzCrhMMvGZh6Jagog2p4CsJAiB3Yh9vT%2B%2FiqLO69QMCmcEVN5bzxMcXM%2FomDY86POefvyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMh9gcJAjJxAf1DkX5KtwDcCSeObWH34DrW0z9hawtpQVjaog2bTvDD7Srquw9G770xTfvUaJmUoBodyHhzm69Rrr%2BlVUIeFDIe1efJ4BoN9CYvRkC5cWsGjoySa5JQO%2FMUzUYHa8AVO5XrrMI0FQIk%2Fbol64BrNtKR6pI6wCUlWO4nU49gRvrbwT%2BB2LeL3uK70XfDbDhTD%2BEltPm7oood0VoDbBHTtGK%2FTg%2Bjc020g7TiRnpumPGcZlg6Y82vECQFWc7gNRfn4MCNEdJdFUxoo7KWon2b8KPSBukKU5OV050qRwavnbY4qTMhnH6%2B0rReZj3BkTrbuXuGYpuxH2oDv8y0ibxPI0ok%2Fv8tCV894JsgPHefLFxJIRZMmQiiZJlxweH85eMcNKos7cPFtbcGHfMAKexIxpaZimbhILEg36MvP14AlP5jV%2Bva7wddicjF%2Bfq0w4kVPZgosLqdZrKY3Lt9A6%2Fs4TPZyF59cm1WyYPqrQUp0vsk9hOlPTFPkOvYiOfKyjnpZgiCIw8UQIsLupc10GSKoziwZVrkGuv2%2FWsUnDsurCq0ZCXQy%2B8Xpawx6h3whLqPAnOKnJ98MNqtFQTVxtvCJk0GDKcvoE%2FObogCwWqCN%2F1thLjPQYO%2BVWGiOKVkcqEYkbZnOswsJLCyQY6pgF9ILo1Z0SnIB358wAx67DiO5cuznOvm87jb5i64sCU342UENRH%2FOUoG0uSfbE%2Bty468nJP202OE0GAkC9uT3XYycLCR53H%2Bx6sqQrSgWOsQScT%2B3LWNX6g%2F2F%2BWojhwyFs2REJsMypjmrl3LaZ%2Fm8Su37W29AjfX1OH%2B%2FvrxpeAkx5NKEfT5zr4onF2x64kthpdGF11v4kKx8DqY%2Fwdafck2In8LCP&X-Amz-Signature=5705f2b640cda0ae3b8866b509a5182901bdd487a83651bfcd2be6ebb851abfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

