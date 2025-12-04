---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5R2F27U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIArfMhRbinl4mg%2BoX3cCJMcx55IuRLZ5aqsKNVjzUi3SAiEAopfiwZy%2B3zYPfFXy3rRMIigEI6vG3jBv3a9FO0q0xWUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAF%2F7koT5R4Z1ZPQlCrcA3R0Galac%2BdLVGd%2FzecHhLDouoBrlpwr88n4mu2%2FS6dfPZuwFQ01bJf%2BUlzrP0x2QOsyodUfte9KO1kQTlz542iFjS1i6c%2FGZ83p3YkPXzc3wMXznOBHoY%2FUUDC4WyclU3sOxWt4%2FnShvS8qKHn%2B%2BnYfHtD03UO%2FdzpzkG%2FiH4G6yziDzDs%2Fpcqatq1e9zIRxg8pVX%2F5fNOzGUhGwXNaoM4fYuQSdr97XwCIbFSGS4j6QF6IIiLPnlKiGgJlu7xL1djZpovmbKQLmAgGll8%2FFsKytzA7GfVmuThWKh53yZGloe8GkKb6dei6zPB0WGeDPzcbKUFzu6Cara2Q1v%2B0JotPQa4saBso9gEVicsO3Fzlzxro8g2TyHFphbl4kD6B2NklHWpL9Gk9LrxjdSSiHEdRsnwdXmLxKu8Gjs509Hm4Atz5XeZolyc%2BQ%2FYeWHm7YIWkvDjhd8%2FS7RlCe28zdnYAyuN0%2FS2%2BAzex52US99zbZROzoJYwLw4QzVxVRm%2B8%2BQUR41vL4Vmn0gSdhG2eAQb2wXDBP1NhwDW7HWh%2Bgz5ADbh4g%2FXJCy55wfN%2BGYqvdNqVjzqkHp%2BGNw6j4skHVwUBQn1oITuP0DPbO16S07uejG3%2FG5ESULeeNUQxMNLUw8kGOqUBoJmqyI7BddLcL7Y6vm8aZZ2VSH84YrMasKd8OlwyM3g1WB6CJ%2B8SBtqtFDPCw%2BG9mYcahfP6tUqx0hl0ZUAxWfZiHb6oSlPbVuRATMXM7sRkidJWqWcMt%2BV62wSPDyPwYU4o7rylqeUwssYITe1byeQLhrRpEJI2teyCQ9KhvuyVxOzpBnGyZar%2B3qXrRhLQGxDBO28uzQS3j%2BizL8hAawnuxEHP&X-Amz-Signature=b45c8834c0474a75ab58476c8318c6b02c7e1cab0da1a6dc409fb0e7f524ecfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

