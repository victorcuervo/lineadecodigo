---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBQNPWH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2AD4hEBIXD7yJMWTnzVc2oKgEBnCoZnv4AdoWrWiInAIgK5RJ%2Fn%2FL9XZ8Qmq87ARb4vIVLjR6%2F5W7kJ1MBvriUWIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgQQ%2B5LbKhsITO6jCrcA6FvMvfhYlu%2F%2BW0wb9IgFqY3Z6avWbnFCZwfoRuPAHhwCYS18Vq6qKJVmqXRbctYeYvsufYQSwLppjuLWlJqobLUr%2BTM7mSTbS%2B%2FTXOJ1lUQt7Xg8z9TUA3WibDEaSBHxpM1mjj98JR4Vl7Kob5hAjsfLqFc%2FGfUx0nUTDPOb8xpALeVa%2BnIoy6LuK0dLEWwJguHziqRwWAlrGBmKWRo%2FwVvthzJAtQ13g1Zp3E%2BeB1z5nzjuv7%2F7JB%2B9K0pOlHhbGPW7054Hwb1QM%2Bmg0TgZXSf%2FkF2HGHVqVYvsE9UGv%2FTMaUky%2BhVUYnqT95QQNF4EuuWFLiVAW%2FWIn8v0qlsx9RjU5jm%2BRE28%2FYlX5OSRzICGPrttYC5k58mrKaNYX%2BAzagolGGWTTG6PZOlq4I1W6Ug49ynUE3p5XI0j2cTCBqi3o1eeR%2Bo7esNR4bV4lW7d0gknaWMNEJQVNKo0CddF7MLla7fVchfUGrHdAD6w3yb4V0Hp4vOqlNUwF8LJoQsiv27Pl5JxojgvlACSaxiJCkQjhVG9AHXVZfC71BL%2FRoZpUQ%2FU%2FKwJXB1msJGTsQQkm3NJwWO67%2Bq1JRKeEQ8Vse5B6SzMuVAS9ivn6P0A2lpXAvvmWAN7ZFt6fufMIDe4MkGOqUBqEmGuHoHG%2Ff6aES%2BdQlrMSBINYwthFoLf4zEIkgOoZSmpCAIVmqdY5IZbhHNw4LkpDTs2yIAkB6s%2BCUlUmlbIpbhtFHkUasy6bv1a7lMkxBr8NEc%2FdHmuyvzOApWvtZK0hcPay8rOtvfBNLDm193Oigb0BF%2BGz%2BQPco5agWGOi%2B7DM6bhRZANj52WqV2wFnQskMzrtjAYXT%2BPV4vPA1PeXK0pa%2FV&X-Amz-Signature=95397d2d7b0283d73f3c29f2fd6a55dd0001a4372e8c9ea6540d3aa3f6fd7e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

