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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2S5EO6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bZDQi7qnoNpq8mpc9fDjvxZ8WR%2BsGrk3ZxOInEfZPAiAj1EVcCKbRCO33t0%2F4g%2BYVUpeBS7EVPz032Uv5TbY%2FMyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM7%2FEUZSn4D0whEBs9KtwDbWJd6%2F2ETChIF%2Fcdoz2C1pNC5RmlSsLcod0VPrBkicqz8H6k0rUf%2BOZwIhZoiPPF0G27Dyj3LPDQ5G7XEu9g6Z21awQkPVpr3buqvJcTE3PXstrjUZh9itde10zOBBArE448RUOM9%2B8koaUoSRoHXUxi8rpeTIjhXhKIUy6cdC66%2BZiWkug8qwOfOdzT5t2TKxWr3Q60K8LlAk471CdN8oOwMMVnOEQgVjqqkrgbb6KACNut3r31dFuePcKCye4UQJgdzLljp%2FKMHu%2FMNEoUmP%2FrVNLAUCmCXMUYuxuL60sZVGJS1HRfyq1nq0kPn2BR%2BAwuLdMWB1n0Ph9KIkfTvLBfPM3uRfl15mROtXIIM7utHDoA4rgtb5YmUCmipLu6jpQ80NeYHbbkzLz0xAGgsklJT5OcUBNYtBOhF0dydCd1zvPON%2BFJiUjvYEeje37qcD7kA9R9OZEDXP8HbKFjXsLV%2B1l1eYvSMqMpuhWbIlTXu9zcqWc5JDfJt99W9rpGA1dzWgFl1iGEcKkv1fsKXmPonmDdZIC0vpr8HMfZ9xmZE8%2FoHKfS43QM10XvkWg0zTcxpLr4dRBsmFY7Io3lh5B0%2FIHgJTQAiIWA7zdZY93X6E%2FRyl3i5v8NI7IwwsbRyQY6pgGVSuU6LqvZ5br6F%2B81otcZdmd9H3Qm5bOScQ8JMcnruXjn2b6hYNrV%2FMJZVOcextJ3OSxfU7%2Bkgr8duvNpEtJnHuEL5tDhn70MDgvVy25acXoC6GGSsOGQ5VadDyY10RXjsOM%2FO9DI6QQwqb2kfNDzJzzWBgjkkn4raoNUXanHUyZ5lYOpKyWLDSf%2BSFcLk4YPokxQURbjr8y3zDWEj1EqYOSD7kw%2B&X-Amz-Signature=cc8434deea064560d9b243e1401d4220bc5f0b8eb57c6a804b3d33dfd1e1c0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

