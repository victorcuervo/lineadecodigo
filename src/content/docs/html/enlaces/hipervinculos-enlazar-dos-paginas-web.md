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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LDAVWO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQSTojqWga5%2BbbxINyFs4svBDpTDd5ROoD4Z6haIbHUgIhAJZJ48PhtQ1qhkbXpv%2FlAxEc8xITqP1Zi%2BPrNwlRqStmKv8DCHUQABoMNjM3NDIzMTgzODA1Igw1EidcvUpHjnr5YEwq3ANIhcpPDVgDvmMWtsOiBYSs7WZtLFBop7cKhBgZW9srEP5Lwkav4FcI%2FvPK3cuvMhpuLIUABFBauYM6oS97OuVfo3PkaitVno%2FzL6C99HNzMHjLxYhtxnqyERoanEPl6IT6FXAYh8AtO83U9%2F3vjXDeOv7jjUkTDjQoEdIUHjSM9xdc0%2FePEwUMEDuzl9PnI6nbsgFYnUTHqToVDS8pbSf0AXblCKIJOftjXnlX8Z%2B9aEQvEnFG5ktJfuMPqDXV6S6xQluFkg%2BfH0%2F4WfNT2Khmc8ZRoG2jTq9Wsbr9zE1mZFNbErQYmjtd%2B4SmYv17hrX9PW5Zn5eFWrrVvgDFeULDYVgi%2FDJSL3ywnCiLEjkrw1hyI%2Fwa1wwzqeOmzH11SeymhLW2OzrLcuFzFviRxWU5KaoqtqFzjnog0ixarFtZ0%2BQHAK%2B%2BY74ZsI7WkB4BWFkewMkCX0Y6nEZapuPaWqBv%2BBpkmzLwsAh2tb0QsoyPe9oO40C7AVtFTl4A3DFX1oixhtoBuPx0XcGIDxMuicl1x3P%2B%2FO50mD8NWlYrWEwC6khAFD64ptoNhtE0rFMENLGUOVeDPlQItCJ4pBdJia0k8EWSu7zKZ3YlLO6ZNEfoyF1F6ugc2SIE7DzPGjCBp9DJBjqkAb%2FS9bl5mpHWt8L1K54EqWInVb8GdFFjhYnsk12msflN2o7bHz%2F5Xc6Zesa%2FcvDuQLfIkxeLSU7Gdxjnnx0CMSNXC9B0P9qXskm6Zxr2xqPmHO9Kpbs9gjTHzWOEO5bVSnr16euJVqal3pzAzRSFBkD6IuvjVTlqKjM1IBkleuRtWyN1OuyTxbZWgzw%2B0OGvbh7yGBa0WS0eivzE73kF6%2FvOxY9m&X-Amz-Signature=a705b37288126aff5646153bc87e92469bb4c6b21604788568fc0ad4be49b96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

