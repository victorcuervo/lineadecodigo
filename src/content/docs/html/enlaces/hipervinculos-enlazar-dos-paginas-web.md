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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573LCTF7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPCfKnxiubwUOH1Yy%2BC5dHb%2FQPsNYaUacXRknCzjzQlgIhAPo1weC8%2FJBvXfxrSWoqjDHzDCk0DhU2qbA4Dv%2Bgs2cWKv8DCGAQABoMNjM3NDIzMTgzODA1Igz6sM5ljMJXYMpIypEq3AN8W%2BSd0OeIV3tyg%2B%2B9MqSZpHRAIYdNx0nlNPPf2ROZsec2s7inrxCvwITDKoMdU55e5G6OjiYE6yCchMr3dVlBs7KO4VR0koVxkG29d4qSl5MWVTN5bRLPWZeBSyAIa5w74%2FQE1MRdgLC7IZoFW5yE5Sw9DwmvfPsEqnW7ffClXMbWN776CHC18duABFC%2BJ%2BBwEbHXWFbKBirA2I5Ev53szSPOqloYX5UhbDD%2F%2BuWDl4WB57Q7MVjR51dLQEvnmpmb%2B0YM1RpL1ZxlCi8xdiVdFISAKTCoH99Z2wyi%2BPWJdwA4ahT%2BBglfgzA15EiVf43f4umGiWrzLIrgN4qAK4%2FbJUG9MBXjhRnPLuaIoKilPymvGbgBVzi%2B0m0pzC%2B4NCz0xv%2FsxQPgRJcJMginZlmJ0kOjempzH%2BVQfTo2Nvf9Bm48i6eh9Xma%2BqVycL6w%2BX8TquYVgadD1BE2BG%2B5jWdQUlNuSxpbXzVLQhsTqK0g0%2FEBGcDWsnu%2FP0HJ0hs1oqXQxfD2tIMX0qr9DdqH7mFMbJIK%2BjOWzDca7HBmAbTTjHKyQi0lUXnYBNTdgqfA77ecUoOXQVB5pzYCaOAQsERcFVQB%2B410F1XO1da%2BrH6L2YktJ%2Fy84hUXyyKcnTCD6cvJBjqkATTNluqYLAGNjnY1%2B886dawU9iwe0DQhTQRIwoGQBlMZcK8vYf%2BowWgpCFWmIv%2BHnQb3izAuWpa9RH72RY%2B%2BQuF7ESouO8ns2mB%2BsWvrIbWYb9ngn79LFdGNKwAETRr8csapbt%2BlFOwxR7XgH6LpOMfe7C0tZmg8%2BxXN8F51iHCmF6XV8zPDScpYlYHQjeQboE%2F4Totwi1Bp24rYdVhIGD9C5gAz&X-Amz-Signature=71f4b4643e7233eaa9f3dfeae4c41b2f90ce5176cbd457bf074d87170b5488f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

