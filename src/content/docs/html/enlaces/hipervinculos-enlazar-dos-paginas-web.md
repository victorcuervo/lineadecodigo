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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPEQNK6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDpPiquGeJtLSPnmeQ7UF%2Fy5ZycI6gi5kJTvkIO7oNGAiEArOAG4GL4B457jMipCwE9YVJuZufJrCJjpiUWSJejwaMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMwSYcG32p8thVVB6ircA19KtKxufUHbNPGPbsJf5WQ4OYIX35Ro3LvDMDOPf2eueNSmyG96GNLd43nBPUSWILYot9W8q7NU6ShJQc3iBIIf1Bp5W2B8nYwDBdTT7GYc1o6JkyMj5rm605KJBtRteeszCrAykaMqk3k3yjjHWM%2BTAhMv0vQVZzBDEbY2cLVwF3HHiUUY%2F6GtcHTH55vN62ner8dVDrP%2Bqzwb3388rLZu%2Be58yeDkTP38f8L4XE%2F%2FHLKXp4D3M388MR%2F3iIM4dd0725Z6i3BYQLD3O47kulTgDbnw8%2FV1JQ0DjAekELUcIf%2BrJYdkzUjYSz4zW9MzE7QKObud0QUUgEvO5g7qDxarUU6kiXqze0YooQEi9DxQkWJFJCpMimQsIFiLTynsKYepfYjkT5YipV1OjdTF5Sf0BfdgNKYY%2Fdju%2FWtKpnFXqmQ%2BlzjxpHD%2Flhqgrsd4dh87o5lcUPAdHqnqXNKPmspkcbO%2FSQPcIhYV7VmI2qw9%2BJZfNsmYMUjiuFYYNJg4h9rn5rmi4lsZJXQq%2FfP8yNGMKkxDjAvZmKjgZNyFoZj5D7h%2Fmz9yAZ3HUhl9p%2FfCR%2BuydiLNi2Z99l5VEZuspw1HR4EdQCxtApQ8dB%2Fc70WPGVP2%2B%2FjOrpGqj8kgMI%2Bn0MkGOqUBMHNut6%2BfmDzaQN4DQsHEkT3eHqhUuNau6YhUJcA8nVCpUcg%2BDg8c2w5bc%2B4JjG2oBhngHx8hPWcN5pgiXIoduC1Liroo38hdjWKcKkjaiZv8Mb5PV9E5lEBNy2M29q3ym0B%2B5h6P%2B3HGUvfe3v%2FDgjQIoqrtL0li9%2FyzZXgAW0%2F59JfxccgPPRtJhZtZnckmyrV750ltrHmRgWpzq3U%2Ffnc71c79&X-Amz-Signature=bd028d8e9a0f809e2d769fe9452918eb67d24d10360a5c6ddf414caab2595b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

