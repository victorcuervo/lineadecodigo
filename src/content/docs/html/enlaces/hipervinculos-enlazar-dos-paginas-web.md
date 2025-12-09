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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEVKWN6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T195235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0mcJasSwJNpDo5WdsQJHnkSGtfmBj2WgWbnu8dvN9%2BAiEA2V7lXQ6mC%2BfTmrOM5gD7oO52kNG7TLP2d0PQQrym78EqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmEA%2F0YZvk5p%2FR1jircA0IgbtN2xCZyvL1Sa7btz7oCP8m1cX%2F1PJdeC3kh5QORLQYpO9SlxkSQ%2FHRLoBExBc718%2FiLOVZlIwRQuEHAGVHPOU%2Fw2BEj87OTpaMZjFxi5wNuKB3QngH6RKF9ze%2FthXL8kuyHvpkmQEryLFFTWPUGLzDtSPC32RKvxil4d7i5uCw4bIVG9wlDAWeW39%2BaLe1DR%2FXq4W1hOwyn2MH1ZVwb98%2BnCOflZ5jQGtjdXUlXutk1v72%2FjJzeknm7I%2BPN91WS8fpBTbVODEFcrjLAMvBIv%2B7VjahivS%2F6RwlHnH6SmzP5Kr%2BMShLtptXKXpS2z%2FCBhcgD8qVuQiECS0Y1rz0VJpQ%2BA6wD0cUHEWxlhsbNx%2FaW6NOkXc55uVS%2FH09b49DntUKdlx4ae0Cpnv8DEmn4H%2BcbW%2Buzn8nn2Dhe%2BsVzN%2FVoNh8nujoeYEB%2BQPaCFBFDh%2FlWnBR7JfR37iYyz7b8ETEx%2FkpOgo8jHKNrzIIYfEDxc1X5qeRp%2Fc7pGBy6VRiJ%2BgZIMLllzTYjIy1P%2BrZPRpSuAbtabiOJCcpEOQfDvxLKNxnjZU2SKOC5DRMheuxCKRgcMlWOwYBTdO0t3r4V1GbLW9QQEEDUiLBqWKxeBG2KcZPG55Th%2FjdnMMfe4ckGOqUBhZRNncIZNd32g9FRzsVBEjX6b24qglHkKCs86YxGVFvpzYfPcwzNws5wjhiOOyGKr8neVoJpq%2Fmao2ePs9eCSIFC3f3HnDVo%2FZHgKPhhVA79rIO2W6o2dgBCwCVsrRTzWc5BbvPOcKQ%2BOwDUwW3%2BWUOsUqizeAnFt4uiiFeGYlca42tTOEKpGeNYXGteo%2FEDUmPGVkTUQjcuPdX03T2zXBgKfFjc&X-Amz-Signature=d35ce48690f3f8ff70ee60be3ee59bfc1088a6b6570687212a7f14dc22a6cae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

