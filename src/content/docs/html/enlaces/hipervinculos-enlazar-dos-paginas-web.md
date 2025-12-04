---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOZPBHJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDB0F8db%2FBs3PBpaT8NeC2kl%2F8gVFt6u8TaYDtwKHbUSAIhAMkUzHgz5xn4xfluK4sYOkUSCddasqvqPdKeipgYL5bAKv8DCEQQABoMNjM3NDIzMTgzODA1Igznf1VELQV6oZKEkSEq3ANFhTaLJ4bbaznkRce0TZ0sofAUcmOm7GZOachX%2BxHudjDUCTDK5aJCVsmamsLwixFyGTFnBkq5poI3lm6Ep5bI40Ji9JUT3Zk3XBH4uGzqNNnLGDVPQF0M67%2BUdupDryd1OVeqKM2cYRHsX%2F4xaMXFFFa5sb7mtsuEE5b38vHhGAn8KFriQdfqsnl62bFctYjlEQczyvm6tbZym5tAGtg%2FhSFWnuhh1D6EMKZ667apFNMb8lyFsm%2F5MPxFGtwas%2ByvJENbQCUuJw9nEvYXUNjOi9%2Fq%2FFhim7di1zsP37aGyvl4RDsif6TMTJVmsamD5O1rcQ6fKeq9O8hgRC4cK%2BkbXkXcnlkthxtydNv6vxfP683t%2Bzj4TegSvLeUF8gUir2pSN9elw1m6wOnwLnPR9wUe%2BCBKy8zkNzdBnsuB2zhZATo2So6OQJ5e3E4VYpTXIq%2Bu%2BxBFEyVRmzDq2xLdoAwivbK4p0YB9V%2BTCHikd8i93plHkllxL6HVEflNUjjsb2GhU3eYzLPgqkVogYSCD7ABwtfGLHY%2Bg4NmVX0B2g5I5QV0CRh3lXdjGfXdBeSz%2BQJPXFIe3DmvWWTiZGYZs671EzE1H4S1I9by8eRccyX255E17OuwMZHEkNi4zDsyMXJBjqkATPtuVzaBajok7DCtxCCtqOf%2Fa8N57COFkQIWPs03kNmlIR5RjLWBIsvFEI5EqqQY8cr6Pe0bdUjQ4FCBHMeDJmZ2%2FAioDpci07BWMABlv%2BlOwsdFVLokQe4VtCN44Kt%2Bh07n3nGL%2FwUheGeNf2i%2FdrR32fjp1LznxMo4WHVaeVVcZUZfL6O7yc2x50jMNMnf8HdONYOuZj4A0oaJv5o%2BPE2vlXJ&X-Amz-Signature=313f10089e68861fb0f32bf57a89209546b3e0736e68ee44c11e03c7f0216a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

