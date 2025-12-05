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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MB45PC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB%2FLYJZmptWSnST9MKu1Exo1ePbSRywF4bIhFYVGK5hgIhALHQeNkZNKDV%2Fjowpz%2FYDHO1UifbiKBhWBzllbbqnZZdKv8DCGAQABoMNjM3NDIzMTgzODA1IgxZYmqSM4BADLH6%2Bwsq3AOrU9qgbcs7aky7QZlh7E5COFxUE81AltB%2BFF2FByTcUz27zw9%2BoSVxWctDgUoRLfzTGalzadP3Oft3asy8IciHhjo5gdPvqVdEifpETxXKWdGy9O6IkfgaNi6K9FUTBhJFpOZfJzSOYWNdLjzD0dTFlDnHUSyvwEt6LD5118sOO7o9ewXYfu0SdGOquDaEum%2Bj6C3j1obVObdCXcpPW4JwAfriW%2Bu0USkH7U3xR1DNIZCWpNQLnf9odsPiBVkLh1XbHmSk0QMZgjGSI4BmvKZzhOB2ENPMcN4WBKnFNMPmhKH4njzkGpRyFwvhj%2F%2FdP7S3l75kaIry%2BHjeNPEAFMdCuhr1haG5PSoY9VcKTiyS5Ayec9Ld30iu6sErRHcv4ya2OSN%2FC7qTqiuMZyLIsjXgBf%2FUA56exAigT4VZokeDlRNneys6xHMsMG4VLXq5EwndJYoUYXpyhwnupLKwrHBNWZY7Su69ck0Pfm7Bw%2BBm7RfCawCGzPJe7ZAjGqRHVPx2sL4AsCN0Ll8MSsLW2DT0s1qOIkRGq8Dd5ddnc8f0iL0XD7h6Czc5dQ%2FA%2BFhaZK%2FXOQLekgQgxC5MrPejuXsfn0S%2B4PN8mWphAh%2FfGdj5NEwv1YJpIMH9CLapozC978vJBjqkAaH5v%2Fa5ch%2BHFxwccD8ez32eSD4gyBXIdq4UzKClFx%2Fd2BsXEi%2B6t3ktFMJvvllPRUEohuclRQO2h0dD9zbUw4Id9lcoZE%2BZHIFNaizy1gNuwITcwKGiuKWTSSNyIyev0zwfTgf%2FZDKBLlLDoL26RtB33BsN%2Bkg1rN56qUH%2B2xskGZKFqecmYxGS4Jo3zfuRdaaPOiDoxJdyzRfzbPcTIgNXp%2Bu%2F&X-Amz-Signature=2fd1c528699d2827db6421b1d2ca326c4b76a1b141b00edde782f4cc4fa04ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

