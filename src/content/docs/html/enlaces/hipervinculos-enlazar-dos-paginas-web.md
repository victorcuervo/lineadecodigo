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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBIQJWA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEY5W0Jxe%2F4PsRkNtByIN84AHc2Ou3oO8Q%2Fn4%2Bi4tDrAiByyZ%2BALkWGIrKt3GotvK%2BXTJZdnJeGtR6T%2F2%2BTJAGuMyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8fWfbYgPJ9CEhSE8KtwD0wJhRea4Pth75UFaaBqrQFpDOf8X%2FAlsP5wHrfypheXypCwoPb9ngCJxjsHGuMElsM0WnLMto1RPbwmykUOSWQm7sBTU8ylrXXzXJJh9c0W%2F%2FO8JYRtdPm3ZvcM8DAOTAdV2zv3QKEpo2SQwNeeHDQhM3XX1ppZ73iAVRcBvAn%2Bg0qDryo%2FBVu%2BK6xGmvCKO3eBpGDaPLwnW4zM9WiCg41qQVxG7k2196KBI%2FleXBiR8EGqQonem3eb%2FoG7X6KA8RPPoo7gEyXQQWKNCl3vvPSff26s%2FzwPgBjEtJpKsY8KqebT0DrDB68tggfQV7%2BMxBVkM4oy4Clwa6i08WWvWRb7Yt7CiOG%2BcjoUxjoyKg8HGdLQJZSCbnmCo1xKZqWp4hoAX4F%2B9W9nTy7mnxDmSLgAE2CmR%2FgYd9k8j8E8AMe3mq78RxV%2B6IGJKu5jS2XUp5W2eq18Ez4w03l%2Bveb%2BdmLkF6T%2Fp3MXbxg2zui16Am0yNOZB7QYVrkCEjjYJg1IlAAS8Ql4LYjbEkEE%2BfKh5JzZgqHpYEZ6KPb%2BKg0kLz%2FuD5V6yIMIUlButV4rfAVmuMwmAA76%2BQOMK9SiliCoBEUsuNtB9BXQ%2FSvAhB%2BmN49BxNQNMCywmUbzi5xwwnYXYyQY6pgGsM7w79fIDmUyUumKUBYjdWAPrDMvn594lxrtHFdCYO2Cxb%2FK%2FtOpkFxzKfAOF7bGGWr09poOtMJey2iLHbSVvyGnu9wK%2B3nsIAlEaffOMdf2GqGn3gibhiM6SVOsYhiU3dyhkkUByV4Bpcoa3%2FQdYDk48ncnwpfuq%2F4%2BvsnxozOWGYjbbp0WIXXypCYlIxOOJd4HR00EeYvKNpS%2BpZptc6pfrf1AZ&X-Amz-Signature=1dc0f9b6cd15371a41ff347fa8ec5d5652e733c4342a5c654ac619e8568db6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

