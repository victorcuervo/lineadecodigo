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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZYVBFN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwfa%2FkZdIVuUQHMHTNtOTetBkfjPQpVVpjKDpXeo8VKAiBz3q65LkRCltJIxmL9s7RUg1crXTzZDEOwLwUgEWPBhCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkUeWawM8y2cQjt4iKtwDEaESz2307onW6CgdBCtAH58Pw2V9%2F1JTTFDNH0M%2BPQ1jCBMei8nEXLwQObYtRMHicah86A6DC1mY3nEADUCS0TCW4RCOrlStfFh2tMrSOScs13IRennbJ4MW%2Fqin8KZ326fEuY%2FOQL6FNvQZlaNRx7NhEbH91kKjdHhGX1U3jQRSVbDjPdXqyYsL8GxUvP%2BMiOSc0QCXz%2BTitgdaJUmOjbqig4TBfRbE42SCd6pfGypOk4Ptt4Wj1wp1LXL4Nc9iYBKRyvjxltwz0I2krHNRCrofTchQwwP%2FQhX9Y7Egs3rtQhDAR27DA%2Bxir7Le35ELYYOMpsJWLJ4ofqCf2XzfE1dzd68TBLmUavtJNYjQoUUcT3JjBT3gr2IxLtct%2BoVC3NbNqDMYSgRjutj3fomnVYPvFJyXjzd%2Bip195my6wU2462bBuPeUssMjkuiiSmNgWf1GS9s0xUCUXD1CCR0tlCnhOgQ%2B8l8dPJyra2OTx28cyJxPInyBr%2BGppEu%2FwraNVXyfFRMAPApQkm0gCNb3o7eN%2Bz0YFW%2BvYVmaA2tjtM3SgQtLTt5U0lEJmVaQozzOtgfMfw%2FYWZ%2FXCnKdDrNmsf1MAxc6Lk82i94T%2F7Qtdd9%2BEBzMkAiMnfzxQpgw9ZzUyQY6pgHkie1OQYkIUOSxH%2Fm4aXwuJt%2FAKuRbDcPebpSdDi9pK%2BBu6E29vlD4r4QK%2BU%2BmFbNjhVDyEZA%2BhXw2XcE3OoW1sLuLcsOLOpgR%2FWwxoNp1%2FFlJyMmX34NPlMXHFsSSHteVQXJMSZUhD09rqEd9qk8XUYvYwNX05qh9DmvaG0tC9IgGqoRf1ZsLafGrXfDFefKWi8sqTAwbBatBu4M0S3pAxgC%2Faz43&X-Amz-Signature=eab4e74a91280ead623e1e62ff926545d9a5a93a66d8de527060a135eaacf02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

