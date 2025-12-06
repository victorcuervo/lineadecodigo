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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIDJRFW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwYgifMbFnorNOtyMfPgZtXEbbj3YUTX%2B16Lw1KbkGfAiBtaid6ZBeuFOjgsvQDw6fRnjBzyXoX5QlwMr5jKcgimir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMWnCQmrKdp9PnwEvtKtwDaSCVnkBnZRW8ubTZqlIraNttBFLOCkikxcO3dVWojso0JjXEl3IDDXQQIp5u53hdwTdT7U1QJlPtM3oKLYe3M0TicM0Ug%2BqKvGooLmGqfTuGVt0wuQbg9Vj1INbED%2FOZofw9Gkfef5khvhPkKXfOBbrVz0dTRkBK7Dpqm9ZiBqn2jI%2FugkYBN9sGukPF3edT24m9rwfNqxim71zvJaxyBPCEL%2FhwIzD6cXV8J9Of7K82GOzrhxOzvXEuWMUg4ANd%2F6E1S6BKWRQgwVTRVpWoWwGsWcFQuDw1TDbEBzd%2BYhgE1S48oZJLOHfNxs9SpyggzR1kpjyf2GekYqtaLRNKFfX2rMoq%2B2fPcDK6NqHPnJ2mKT%2B2OQyFMrc8JywKuyOEBlpbE0OHnXBMvKZYv%2BsSpFW8DcWSvyv6ESw8CTO2Q9I9QTwC%2F7iciSaTLZx%2FKpq8X5AqOde%2F9L6VPdYqmGz%2FmZCqqZfR%2BP67HX1vXhLzOrz9clTtuhmw9MWNTpHl19mlzgvdx9IRyn90Z1o9v1rTk7EZRplAnfYuOF6jf2OCYMeYJpFvQ08ww6rNEs54qeRsjmj1PcXbrdmJIuhnaHDOYRmFSgSQOwUXaKowMpqyk6yVRn2eIc%2BpuZZ7ovUwr8nRyQY6pgGLy%2Fm6pOhgv69iUpuA25fcxvmOXlBnd4c9aDIfZGexfATC84qVtmpIbLPq1nE7ugwis4pGqRqGruRX1Uss92XFbxhb5r1jfDRCFPzv%2Fe0OWIQY%2BvN94cWFkDp5xx9lWBVG1jbUmfzweQYjD7HjG%2FZXwWp9wRd97YY1GTfov2pT3zoFbUhIOBFcVPuV32fheN1rT0sTKdj1knlfRjjNE1QT0Vi3B%2Boc&X-Amz-Signature=d2de7a3640364e8ad5b6b5b3edb05a9c7380eda166d38de38b761ecf2c3221a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

