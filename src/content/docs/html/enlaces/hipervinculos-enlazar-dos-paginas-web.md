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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YILJ7NU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESidvVYZxx9UbhqzvfvfzVYBUo3aaddQMklRcX1dEGVAiAdcFPk0Oi1qV%2BHju6sPqbEdvDXlDs0%2FwsCDybppt1yTyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0oxgkRewwAf6ft7wKtwDVVbNv7zKQrt6Fa%2BQgDQ80z2oGBmdY6sjPibu2GS4h3jYLhrsFQF%2Fmq7OnfGq6232ctU4OiXVMHY9%2BNlvVDjY8dXUbDhb0piGIyw80PmXsYVv8TbT1hwjG%2Byz1XUWsaDO1GHcDOUzP%2B0eYE%2FKfrN1SEXFxw3I2FVZ2uko65xsie2rkdfft%2BXLvL8XDXBp3HrYK1UcQxMog5Sb5TeCngaPDrE2JKQghNYibySk%2BxdCWSbXqTgOV7yusPjlczVbC8zBuq673hhH3JH8P60EmP7aJ3U2NIp22kxWqJA4GFUyLTg6eqVP8DaUTHuYiWjsv4OY7vEsXrz63s31YqJHMr%2FXiVM5dlKZlK9krFjB60i32uymfRAFlg%2BqqXFaltSFlbM4%2FdYn4LnEEs5Hksvftp0MbUg%2FngeZ0Ct66B%2FOn2KBATIwPVicp7PCvaS%2FxERbYg%2FGkwi80d%2BxblOVshUziFh3YM70CDzMbF6cSeaB1k6v%2Bc6BrKULZRjxKYYpeI0CEc0Fl5LtoNp3anOvXH2Lqhi04YPMbjvXMjk2GULSeXhrVEdmsc26XBIhE5hlfzje5y5aikgXBTo4nPz684aDWVbr9hend2FBUdeJn%2BMxBwXxRFkKyNoD2Xh0ZRiUaLMwpuXbyQY6pgGUnKO0XxXmN930btR8LkBacjK%2BIaN7t%2B5xoDztzuWuMKnfBLDTRKFL4hZUC9%2FgAXFR%2FLPkIqbKi0lwTCAI13g%2FF6gDyrttYeKh9F2znAUOzJMr%2Fy%2BMLHE600eTMs6dVyJRHWIdp8goxH39BMMpfdXqItuxODkKOum72hjV6g63TJ%2FyYZm81ZmXT8Yqb0qpobtR3H3CNDmCZ6flMR0wBIwfnlcYVQum&X-Amz-Signature=70bb1777841d5effee8759bf3c5622bb28e98e4bc2d7937c4ec2d130a04e83a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

