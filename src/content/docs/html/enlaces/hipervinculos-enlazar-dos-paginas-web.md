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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HY6BZZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ4OMh3zZAFSs3hxtnaRME7wBqT7yNi%2BZfYE4P3EMjbAiEAspxxgtIwNfaxKdsjkuoGM28S9Sut5UzoJxEoQNmIEqkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWlWHXVRRlbgCxRVyrcAy%2F5VIBxp2cRkTTJRZa8KeYS%2FemKTqj%2B6hjfMvo9k6PoPZhwZaJ2O2CJT60pliJhjzp2aJyqcdc9WvOK54b0%2FmMkAkm2pPKPlfkmHLU15Yahyk3t4QnaIciPpwdggud%2BEdTjjX7sSJc4jqJxVCrB4g4xpUY2rxUy2YYE5aUlWUkwgnJMxgcN2s4ck53gJV5kNGmrm2BGwQmy64qEgPqzF3wBDTcW9Z9%2BfftCwFlnp4l1jQfh84txrKOoq1PFqUsIvsxalRi%2BakqxD5CBolOOJs91rn6yzr5zNC1ebDW4XGlokLiS9gnf%2FL7Cpky5WRod5JkxKBM8H27RA8aBWcYxkQNCn5Cj6HeAek86Ap%2FuXEPg1Qkey5Hae4Rd%2BpppBCn8erDYI75bpM9pvd31Se%2F119xtNsMmmQWBhIIFE0U4S%2F6Q78KDGJtpyq879cChXHDzygxrN6fvrH%2F1ON4ffuKHMS7wuIeLnCyyjJseKHJRPvMjWGxLxgP7Ab5%2FjM4sa0aD6uwmuyez3FuMZ%2Fng9WSMVkTD%2FLKH2%2Foqb%2Fkk5%2Fk1OeqYoRlp7IKTwStBf7eod59tuhFnsIALv7gf0RGh%2F%2BZ%2BIR81BGqspqY3gAlEueV5HNeQzvSOOQlLaoZ3sqz%2FMPqh2MkGOqUBq4Cv7weGeAu%2BBaShOXQ5sRThbKaIgfz7sNhfOXaapLJyaHaKloQFS3FgI75caY6YBPLf3%2FChWOKpiBJW3S4wmlY8sCpv1MpTdrUOjLxSv%2FI%2Bolr5EohcZt3QN0dp941DrcVhGSa%2FYpJn5rCn5EwV%2FK7VrGgiuRqjsXPBGc26N73dsFvraXsEUf%2FY0U5mCuGWzE6G1JhVKIIv5ACOK6VA2x0ukjP2&X-Amz-Signature=2698ec82c58c4a52e842d67936f29f9766f67cebcbfbb279fb934fce569e6967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

