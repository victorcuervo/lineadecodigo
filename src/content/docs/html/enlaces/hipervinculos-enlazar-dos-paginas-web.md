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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657PZHRVS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FrU8E315sWRIeknYm%2BF9jONe8MBI4OEUlKN7xp6Ms7AiAoEVL5ro1lbPPXe0oE3UJJLrVMIQ%2BjPLkjD4PPRVGm9SqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIo35waCAbaneiq7QKtwD3cfOLcvjKXxbI4eZ0Uft%2B3QXYoT6O1rzEMpii%2BYT4aLSzK8RnK9sDpxOasxO%2FUGqc5T0esBrISxatTzDEKrWGUi%2FyeSIutJlvOvvF4eY5702mrymIr44qVOK1KcIP43YNQ2fqt%2F4RmrPezdvs18h8QoasAeeeFA%2FCwACvYEIJ%2F%2FHDOi%2BE6hf6BHd%2FbswTb%2BV7VJVFYDToijXnmDu5WFYfz11XDQGX9bklhtXz93blu3WtGYC%2FF9VWpIW3zH3GFW1MHqRwZvqbewrJ58jzPop096QokcwEeXn8z9Rt9MUJeCR9uz7BsvXdxjiSod647c%2BPeiexIKc0GpE47imSIulyJmLZfH9cukm96sahMWevCyJtX6SqNw2FFD9QP2CcSehaS%2BtL4elr3flTl9yltF9vn26GGsKzVyzWR7WJQnOIXcyQRPkvY1IZKSAFqBWgMgm8qKAj28rw4SF5z6l6hi3QvLulnK2mxGmS30Fu%2B2GYGzM0GN%2B%2BFb5lU3v%2F8hjeHWiuo0EqL2xs%2Fyn6Z3hfKDMHmXYb1YxWRehujnzkP1R4C6B7M3CB9pfD0dEBrcoSqONRxOTjHuDocZn8pwLASn2J%2FLJqkZ3M6Tb9UkOl2epcvIJQEXG6986Wg7W5Psww4DdyQY6pgF934ihxMXDfBPN7bcc9TJgzbJUCauwcfYePaToqINXZey2YmddV51gTGZ%2FCrz1JMZRb%2FuiqFXcPvrbozp2bHhUgQQyamrLNXpehcZBmF2He9GBBjlLH9b3QZ7km%2Bm5NVXrCHOETYsBBghZ3JLSJJSKD06ApbCrmQMa2HNNIUfcqt5cGaxKltEyjc0l7MR1FM2fvf6Bza7YQvoQNe1vofdODNJZpBzP&X-Amz-Signature=a470a590c83214db09970af9bdebdd939dab982ffc51fd2f4a00d2c1baae3ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

