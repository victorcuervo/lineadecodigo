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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LTGV5JI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDEO%2F3H1ZSdJTSE1tQVzllggvjsWNdW7G0my5xDMYIfsQIgdSZV8ZoxYoFxh%2FeyuZ%2F%2FqeUNsjX7IRFn5mFNjGEEunkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMTXRw%2BzMYch34DzTCrcA%2FSvazSRIG2luvo38KiPG7pJDv%2F%2FgyMbdMOuX4J71xClASJi2gqbER1nNOM6gOXllsDmhNcuWSQi74G0GyQM%2Bc6E5fHcIhqYHJHzUX5RD1HtbrRGdpcAVLqfzJaPIrZrraOzQCBu1cwUpac1q4aNuOywsfcNVheFcTFvywxe7sbuIeuW3aZOIwjgdNss%2BQZphjDEKhtizD1x6sQgLOo9GZ21YGusMbTmqUTcs7foGi0EFe1%2BlmWyagpwX%2B0ilMqiIACFZ9f0coBez7liMRtRUpe4DGfIsD4IgQUIZEWSa0JTyBYqZC7mx6TgJGG3F7%2BA6K2Ds2SDlh0WSMA8mpsYjfJRkh%2BgHdop8ou%2FnZq3CuGyelzPsKw%2FpKEdlxiZeD0gItbZ1X2H97y6ysvJi7rWke5%2BCe2bKHQZ9Cu9oe3P7sGBFkAjrwQs%2BTgfrxZu55BlCYJyAtzd1JdagH5cNu3uFK1%2FmatCrrHCSPb6DkmxjTNci72SFqNwA%2B9YKstlkdEcxocoE4r0SUDX5VGmnKwO%2F4mii5exRQn%2FD18RitUoWifz2LMkQgMuyg0V8bEXaVz8kBUqBnjTONJhswfBkzxAULHOKwYC062yKsWN7EHnRHreN65u6EpVPAN4fLsdMPW0w8kGOqUBufBoyKbRce7CzM2mtpSTzVCnEu5NDByRhBl6cZnOhw3i50DFAFkxUguGRURK7P2JJ64nKS9H5pi1aY6pfg1XVe0jKR%2F6Zl13XCoPWYPvFBBU4XmZ0MGaAvHNaCyRS7gqS6BJHzJ8qkdXVPCTSlcERtqZy3ZuPwS7%2BwpTyiLJnVclaDbcI2ZMQKW2FPobsyweDpD%2Bk0e0kp4ODPZZaD9gQWiRnOyI&X-Amz-Signature=a034feaffdcd017c979e5d54ef4b0eff3b389fc0d6fbba0907584851f042d235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

