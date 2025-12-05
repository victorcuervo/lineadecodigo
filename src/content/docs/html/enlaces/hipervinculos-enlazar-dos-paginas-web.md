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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3DVRH7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H0XdibglVOcXTYnCdJWLFt%2FbxTY8YmtZF1D0QrrEIQIhANlvIiHM%2FrIKSPcIUXpsJmleZNkQwIpLY1KHk4qsVyOtKv8DCE8QABoMNjM3NDIzMTgzODA1IgxnlaV8VUgqB9ACzTcq3APKrs5tIc0K0RyUAC0xeAHdFsbl3TJh97hRRxrC4pRNeOvclxFKLJ9BYKeuNXhJxejCCjRxzvIFqwbNjT6W9DNJqd20ogBEXztWhBR36HmxdLl8Kf7ARsNIPCajbrsEeWCEYUpU4yAyq2Ie2%2B8WkUVJeu5FLL0gjf%2Bt6UZucHLZWohBojujnU2nYV7ZmkcOxRm2%2FwWYcobbghIsAq3H%2FruOyz%2FhLvQdema2L%2FQHIz7KnF5bWP5VEbnvVJhtz56heC0P9soB1CHIILbLXlyXua5JKpXfd2hPEZNcccY%2Fk8mUQz0nJjQWh7qSuThtxlUjieFomrZce%2Fr9pm0dmJ6XrCjmiJOlPXuHQVBLGMdzUc%2BZ048OdhsXbWGY%2BKE10e1tea2Eak28rNL%2FAi6QibGICkxhGceLRDGMjVVQn0YDYFNwVOs9Gff5xIGZES%2FhzpF5bQKi6FV49KTbc9XVFBBilqoTieUQbt2TjE51ZqhOyqDNMLAOt9LrxkpRvAO7sU%2BYW9TkOaripTYNfdTthvUYQzYNrDO25HMjlK6r9G%2Bv6%2F0l8bPwQsfBrx%2FcK2VVOJgSrirtT7K1OomXO%2BT5xYnRHta3E9L%2BYh7wXqVGzOfj9RntworoaNG0svfEsjbNyTDyi8jJBjqkAdWpxJfxoQRwnTgpbGWf%2F%2FxMuvaVdz3Y7TItPfrNCEDz6L8pBD4TUHlR203Khy7rQ6J6dwUmUoT9oP8mZf0BOwkReMARUk6yb2ajH0x%2F7XkVEIXZS2uyVsRPPtqv90Gb4TajCcLj6ih%2F1%2F5hZKOVvBqzoUXf5QhK%2F40dVq0zEYBeSKEFGsipkNtKtU0RqBWolA%2BkirlMJ%2B%2FX8vk691quLp9XOs5Z&X-Amz-Signature=7370ae1fa989cf8b279f3f48c5530c8d5cf28646aca6ee434231143226476e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

