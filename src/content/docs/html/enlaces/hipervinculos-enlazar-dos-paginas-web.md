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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCILHI6Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCgTC0eo%2Bk%2BNbuXgu%2Bidr0VRULhD52hdgsyKXAPjs7ETAIfYTpe5FMo6XINfB6oYShMNVepIQL4DQEUfxc42OMLDCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQcRR2cxc5BtvdzWlKtwDusIFg39gwZNS%2BW9rAF%2BbDO5sCNHN41EjzG2MIAdSVuebQb3PnrDjI1Gozdx6%2BKZOuKa8X8dsxIGkJHP3B9zdiiNl3wPjrYdMegGiq%2FRU%2BqsCCM%2BrP7WWoBHNHDvwEbx7QAqP1fwyiKTo8i7vkJFUedsgEcjWLR5%2BjG8qY%2BTILekrh7rx4stI%2ByZuM4QT%2BS2bMq4sakJ5bFD7LQu8qLKWH8RCPywhQb5tYtAqv8WdsaUDd5oersGKMVxKeHCMpQZXhHvpS2VXiSBw8xiaVTtFXqzuOuiF0n2WhZr2SQL6GJpTuq2660Iv6RNedrQhTKXc1S6Os%2BebqO7UCUEDalu8BCLyQLcf62G6EHDsf4sAvK%2FMkg3ouFUwZeRb%2FgqUTpwqodj8u3ZrHDCByH6B%2BAz3We%2FnimFx8UyHHk1XjBuR%2BM1JuIJADpMg7TG9UDESfxDyNtKIAl626%2FZgcRTCVjKWZueF7uhdKwBY8dBoqkgbOncq6wW%2BrBz1BfBPK3mDCSLkbgukhYnpF8kb1ogvdj2%2B5TtGiznA5bJji5LBbnIRjJl22AEKFMZlgfpX52yYFen8YgAzLDYEgdEt02jsY%2FqmNZ4e1uifjZw%2BZGlBw2%2BYqL3og%2F%2FeNda8q4tAlk4wwZrVyQY6pgEaWFgWEeclblrG2m8VR1GOofGptPRjnykLGoAyBRdAurmL%2BVIfRwe%2BZkMwPFJPD87uaQljNY%2FgdlSpCiXl9HvzUwFTuZP5W6%2FQku%2FsyCJFHG1VT%2FO9HjBaE%2Fe24vlO6naWNielxC5%2FJw7IfA6rJ7GgxnSetrufxnJ1%2FhObzYXNQwmEJdDMO1Emu9rgT7zOe%2BIziOIL6lO4reBcHrC0Q0fdl%2BNw7vjd&X-Amz-Signature=29efd18f7aedc2a277c882d07014608af69b4d5ee7523f5483f1b471e76cbe5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

