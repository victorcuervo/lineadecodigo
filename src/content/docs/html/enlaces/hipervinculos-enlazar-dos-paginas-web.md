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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYDF7KG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOrHUcFMNkmKujky08gz3Ny2iW%2Bpmoorqgsq5T6NDe9wIgIC1Z1NRlOeCQZOGK%2FKiriBQ3%2B9bR0lIKsUuLXFcg98Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMNSrgVwyAyC%2Bpu24SrcA9%2BUr0Xo7yHsLDWZASeSZBbdVV3rfqDTMP8RYkxslhOFjnEQte3tXzrOAxMYEeC4QrhfhZAUU63d9Vb1oFSdzY4UKLjgHw%2FZqldQXgb2s2GQKYCkLHpfCZE8yDqydD2EEcIb%2FfcnxO5C2oQSH1IMHZxI%2FRmBK773Fmtar%2B7gGRh8stg6iwNWU2rTdWoNxuArPA2qFLu5yI0gbq0ol6CDOzsJ%2BUGx953PVvUy8fd9GbOWVJe3Kh5q0ANW%2B1jQxIKeTyOEOIu%2BMuKa9LdGLMo%2Brqv7Qqb0R6wJOKDynTMpBQQcjtAMcfCPG3AAH59w8dg9H2MKOua9o3DLVo56klCwgBAoEpWSl%2FurMZmNGPY57oYlMmQwHHyTWJDBRD9fHoaET6ebWPT5O0dDPbZfeMNfar3%2FGRgw18SzhfVxsoz%2B0H671wT9ixwGDxXsWP1yKcaZGVstn2KnGaYJi3FUEbMXsStjcgJLnXkAVqN973O%2FybcNyAwNELwIsVcpHHR712yOPnuWA%2BLQOB8FsNoAu9SJKhbwaBcCIqaQD5Z4E0G0rq%2F9EdOJXxr0O5fMNqfweQmrJ6RrCEXYey9HZ0NLqci9hmMPvJoyln5im1l0cHP7NKkCPGAnoVtbZty2%2FTRaMN6qyckGOqUBngQp%2BN3sWgtjAh6%2FISGdGOjiJhAX17aH3QWtIs41LGzSIYYveGyDQmpdN7cQ9RAZsNkMV0hVugEdwH3rNOzaO5r%2B9ElCMZJJN4sricgb1UmSmRmoZWB9MaU%2Fd64hbYbcdRBIgTNhOhndvFaQ0k6Yshh5yvIPL3lPIf%2BLpPTqXk6AH8kfI0OGqJmmnd50fkWkXFi0yJCnqo2r08F7bGgtlqipLyKn&X-Amz-Signature=2a03f198a5cb64e5bc3cb65ac001bf27338c44f75379f70a2928e1ae5c4d6ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

