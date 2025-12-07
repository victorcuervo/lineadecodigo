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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOC2ZC2L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG84oQSSt1yqKD%2Bx9ME7dfc90RZtQmRykVvcdGMXxDNQIhANkQHWypp0nlqxOF%2FglSdTBkWISHO7lg7dh00Cvch5%2BjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI43TM7%2BDb9yemUQMq3ANIj1dvkhr1LE%2FTXBwA4qVR0Kx7h9zSU9SXk4UGuyrTXET99FKGIlXdNmxj%2BDscIB4njjz%2Fyd59Kw2crSy66x5cV2BI4pfWBX1LnuVRXyo7LrjOm3yAnKu5N2wlD0STcEE8Uqnl81pVrcoJSpmqw0btOCxRhTO%2FUpmbkSkyRqmGJax%2FQeVIUfwxz09Rno0DMqmsXuzuu99Eltths6XnDy0USJPbE1uuaPhf1ownQjH8xRujkW9%2F2v3ula1d01B4DkGz0LHS4Egld0ZJw7ZmhOGJOeAnuQ3jZ13spcCZuG4cXfAhSyYYbIQPTIzFKO5b9su%2BKTZpsHhLAaK1X2ZGcG%2FPKGsOiUCElkLbFtxIUVIFzr%2BaIZuduJJ4kyTD8YB0XWEkho11kqsnhp0Eg3hS3gW0wUjz7s7LU0HzX8ObnJMWg8nG2jTqtjVbeDcXh3YJpEr9WstGuO6dYbY6mD7vs4qPZMbIjU57R3BzTuTLE0WvLfOd2KJ9yDAgewb6LyxtT%2BxOUpQ5oN%2FIQiCpcNxON8geAyRXA8c5RTx2%2FU5krGHF6VF67eJdDLGKZhEURPBTncG5xLoE4L11bBLUwjhO51ze%2FLrErJV5kqYfB37AO4liDOt92892j7bZi87UEjCw%2FtLJBjqkAerg9FoxoQkNjPF%2B5X9Zvo1LiK3ijOokR0lIB74saqPJKkqq50n9zXoYr2fTZgNtmOyRvN06SxIqL6NuD72h6%2Fen44S90qprfzwIpvMQ0%2BJt5n7C8%2BYx8EUHd%2BGy%2BSNXOxlvGQ9DdDwKtKObgtIBZXcxhWNwNYmqSME9LfxSkN7J7n7j%2Fgakm53Q5ZHp7YAV8GFc94Iw1E8DVF9adBTNe9FWvy%2FY&X-Amz-Signature=abc610a4f435879afea725f9313b2dded2bc0715c778f19181b5711ee29828e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

