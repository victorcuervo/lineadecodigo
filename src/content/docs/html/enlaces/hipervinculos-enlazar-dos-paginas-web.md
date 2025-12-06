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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQXORXI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYwvGFDV7ibMV1Y6iVnyoxbHITTl%2Fiwxn%2F%2BnYkvL6D8wIhAO3bF%2FK34yM3h4rSKa0xmKgYg0iFCT2xMjLqO%2BGnlP8rKv8DCH8QABoMNjM3NDIzMTgzODA1IgxXnIpF27pK9mNs6%2F4q3APIQGqxhD18yyQLHwvPC1ZeB8ateuNIQKYowYaKoRRs81GsTPNP1w2BzX%2BZKDtbEMcKPuLyXhxwo%2BSdel8c03Sy7rLujDy8vmdF0QUJvIV5KGI2xz97ZOk0f4ipvEWioTIhw3TbnjWWUV2KXyliMEOreA%2BGYMoSM3dOQBhyqxs6fM9AAhLtSlsaI9y5ctnZUr5ilp5sbsUYT44wPC%2FkMFdx%2BNdf1xcjAyqmb%2FoFKZdr4uQYXB%2BYkF7f%2BkhV1To5dUcWPnVjzx4sXjP9AG4odBIO%2B71Or%2BXrI2SPZ%2FHDnB5W7wATQJdU2oGycHhe%2FtBvlZEkJsbLMRRCjWn5hzeCBLZr3jkERNbbVHqGnlTGLtvAAL5oKd1JuUSIcIFXBTkzGTiO1Ly%2FnCR%2BeKLzZ9yz5R4zevKnOXOfft3PkF3ArlnOTrIjxRPfe0cGrpXm%2Blu6mk4%2Bb9HNReDUIAJcF7MAGljS9pg4zJAeRNKt63QVAzB9KZeckmZeb8vBzgauPCOKcH1sIYIU0xJSUNXwlizgXWFprQdvODHgcwAQbWEN2pDDvgjx8PV9hQqNvLN2LiN2ArNms1uPc%2B6jZ5HUdXTwG1acfdpyj9s5186NYXwqksqvpIXqU9S6TdhbR2pIjTDQ09LJBjqkAScNiSNCcD6ILuh1m8URv6E5UbrzLMPU0Vri0FkP2bczHtPmckFXj0yRNSIIMsdpx0vuMA5mqzaxpz4OgpLYKQN0O0Mf%2F6jbtwhwfxo1JWl6KJUp7tbu7ZS0pDyhfFvizFT7UYPEIxj5u52mi8gp5zC9aT14XeVTbUdRaa81vowcSGLQsHwsqKaaY92%2F%2BmeYvad5NpSWFwPwgI%2FI7UZtCAM3vp79&X-Amz-Signature=e223904967768b15e4a28879f26cc1dc64408c6f0245ead5e9c0dca44dd29644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

