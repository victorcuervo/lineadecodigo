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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFJI3GO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvGBhGSwtkHeexpDdJa61kd8tvXLXwCO0kzbZs3cpNVAiEAierq8pu2tTsO721D7%2FZMpjwdaEPEh16C50ciKwhnpHoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJPdI8XEeYJMQYbIjCrcA%2FK0afZ%2FpyYo4aTeCXeqoVfglcTN5rSouNQ4sAE76K4i32tlAmv6nGJnMOMKnsEg%2FAHnZ68edTjQchM%2FdzdOs0C2dqV%2FHG0I2T6RNFxg%2FJ5p2DCb2VhgHPd7iOMwMTT1eRO7BXuK%2BxJhXyO7VMNam1eqmtCrMcN2B5SL9QVc%2BF3pjgWOPNKQ08q%2F1U8qVmROomYnFPU1WmFrlSxr3uLN3AC8KchZAuHJofIIeZOOS6YzFu4LUy4x3jHzti7cAtFPpSM25ujISh19W3103yL4fEjr84AmrGAmwc5L8TbU57BJxDulYLsuyuKAqWYr%2FfjjC5FfP3dNitIPQn3Nep0xF2BFx1IRO8oTnzjT05BqC91FX5ZGvl5bbbd2PFekUN6s%2BYpHrbYjBQpnvqFfMGOto2WfYfyS8rRLw%2B6Tg5BoGn%2F1HV1ekpCZEF3qDdTt%2BtrrUdHvze7gPxfy20I3QyKhmY8Q4GmKpfLV0Xn%2B9GJbHU73K3U1sxXJLfD6UiKUxVPQG%2BkyvdE3bV6ijiY3WHeeAWpymuLu2giD4HLx9WdwqP7dZwmhXYVOLZ5%2BYwegKH4Ujd%2BJd49xsyAtHOT6UkwanUOiGinNA7TUCyfvP2T%2FGdjiEzBeWHnk8a6VBNJKMM%2B8z8kGOqUB%2FBvQVpz%2FYJljrCwoLeUaspTpyYiOhR2sUCn4qsdr9KLLRt9F9mmJZev8k9Tm28%2FMjqdt9LBCvv20kNkfM2R4F3dJ831Uwy2vBHszMUvPQcB2QRLkxIcuQO%2FvxOaRaQ%2BKxmlQv1C96JGw3rH3YqOUrV7S3uDnQTmbtUUM5qj44Q7rLMJRtIStaCrqvsK1CIRUBvAFJeus9vuyMwFIku0YdshH9hU%2F&X-Amz-Signature=f4088b1bb8ecd9b0348adfd134bfd15a6abcdbe7287ce5823ea267828d579790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

