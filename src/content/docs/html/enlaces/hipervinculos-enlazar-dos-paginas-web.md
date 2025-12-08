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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAGXE5KQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2oJAlXNmUuLcWbk%2BuSXy8XqDhkSjDmBdMa%2F8wNfktqgIhANYldxH7wdHED%2BYLhnGTgvgqCinFo4HUTSZXm77US4v8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BfAUhb3r1PYXUUUQq3ANdJCmzvCJs6BwhLaHXdqf2%2FXDX9LsR7zDSBMeTKGCLB69%2F6vQJTsE1fEwMfVhuGW72WboZfVQUyRGlxkpUvT%2BC8wiHwOpeN3XdpU6jgVZPM0wX9Y9IeQbwInj7oKLUbfnetYHU1YbS1jJvZr95WoLRBAmeYrYPaOU7RcaOfC0ERkManHzUzuUxoesFRj6pA0QcevtZO%2BlbduKaWk7JQMPkLoah06mZQYZd815SqEU2dGgQbaggaIojeN5MGWrcOqBdb%2FaJvHFE1ZOygUsJyXLqsONLvlZcODJ5DYdOZo9x8nd4YR9N9p62OA1ucMW0j%2BEwssbBrVCkxfR8UwkDUCRL48Swz7WEwz5h57EuoycQ%2BwIPGd2HXsaQ7Z4pU0r3T6oqnuD%2F8xEJy9shZbANdr%2BdHS14U9duFYl2E7DPCZBNaYHQ1qKXM3L2Ov7KET3FJGvzX%2FDLwlcapvcJs6ZaFX8QsTyIOQonLNw%2BMDqgPwqu9pGWOJCrfnYsVojZAP9VAb4epv0DS1V6DpBMqmOHSOAid435rjEfvqY5kmwuhquhqLnT6sa8whV6ySh0yUJ9d%2BMZ0khdKdgnIdfIsjzKI6rqb3k5969DV4qIbWC%2F%2F9iRTETCe9mLYruY7GjwEzDIod3JBjqkAQHfFEa3AHjJ%2ByhAID3pwyzCS8mYFYgd60VCGyPVUWvol9tlIXMAnRLNwMlgpRosa%2Bfvt4NMSLi9aTNKwQen3oUPNgzrGFlgsGykaFfkqP0cX4gjl7FJAMpaTyIM0GXKkdLj4dkiuMBTnMYzD0ZsBgrMayBKaB9lw%2F5SiZZVS80XXC4EPxnTwLv5%2BI%2Fx8Cj9jOtzWx5X%2FCRfkol%2Bg%2B46xJBbG6VB&X-Amz-Signature=7ad1ca7c7172b1e273dd21ad4a5ae674a48823095fcfb903a63d9503b923dba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

