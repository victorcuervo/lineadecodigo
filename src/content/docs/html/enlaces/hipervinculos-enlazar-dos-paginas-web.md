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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZA3522S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESpSMmcR9%2BUlbeWAkN1sgaldpPxoxMLawwVa0eklx8FAiAjt6hMddMDYhFC7cNDI31d9h5ZLfoCE%2FhO8VjdLL0RCyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMbSI%2F8ILIEWrXCxdyKtwDcOR%2B1ILrN141oyMQBhvsZy3eddSM40ZvRQ4XDfBFR6ogaataG4hI%2FH4l9iYeQ6lalET8TpyDdVGb3v0N3rJMisUQO%2FL2iO2xBIM2b3qH1vpgSZrTMTwNOX7tJlS%2F6DWWgTYInCXtsmAOM7zDpDgoLwMU7a%2FCYwCjODuuCWPX4BROXgpcbg3UIRn4SNYCrUmeO7vQlFTY8uPqWAyZka1GaANQabbn%2Byi63ZYLrlIAYoQ%2BkIx8i3B8J8gaQy3hbqNiwC5IngXy2rwsvNioMvpVxpCQoOM02zYW1mHbNZjSC1LwkJbmzTH2ieMogDXw2SAoDAmnWj1WbvqDAYjD5TTdujSxxgwYEDC995VwEmBbWIh8uf8m4Av5HrsVOrSU4NmK8%2BTYFlBd7MEOrOhLM5oDf%2FBqiuw%2Fz0ispx9g%2FYhyvanSko1yAjltUNMtVQ%2FOt3sqw%2Ftp2xLfHB2fzygwxnMEJP6n8qUGF5F8492%2FdeUeBFUIuiriCQhDcznDuekPqxWWem2bLDSLmR7e%2Fo5nBMjEP8T46weBjZA%2BESMlgb5pz8l%2FnuRoIfpSpH9R37alKgHORGpoUSVfAzVsT9wWEn4srWfBzU%2Fw1eulI6ssy85f%2BQj%2FNkR5d%2B7tihKfLeww0NPSyQY6pgER0FphT%2Fnv7g7WsiH1stms9fiu2dokVgzJVF4uMaRBJraoNfVCEPdyMZOFma4VPYrLEd%2FaMcLm%2BwssScTQKvDdpEkf08bsqozQSLWNL6vnx2i6UdkjcMO2FcSnuWJ%2FG%2F5CqKw0fTf2pp0c6heLreTqT5K9jMEePLmOjtOmPvCiQFJWknDv8hlrfGLjjwK2GkaHX6a0up68cO2sbyDZ1krdi3NTNIQk&X-Amz-Signature=408778cc842ea7769e8049d3abaad73b00874912f4d33c58011e44984d1676ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

