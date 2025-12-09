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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACHIONT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T184847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwfjnB0oo2pP7Tyfe4P0Jq7%2B3XHgcqiS4qkzkgYGgIwAiEAt8dZjN5VAL%2BgaOqA5N%2B2avTizInkY6v1AS9wyeinBskqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7YJxunty8NxzHrECrcA0kRNcGfRLXUcN7NiN4fPyDMWgdBDVEJoVKhl43T8HyA2yCybyAR%2Fct76BZypbF0ruiEKo%2BP4muIEZXKWwozXyJ7THhAoQGlISYDAw%2FrWORDog67rDUFmPqjW4EUl5rmF9Squ%2FGmENur1cEmF3Jfgy7LY5vC6lLRkNIIo3axX3Mpe4b6v7ADM4yKwTi1OUvhbSLbIZGy0dTttzogn2UEdefkbLmBSd446sOWBUGs8MnAmjF3f2uEtHAbm%2BQvhsqa0kuVvtKybEMBXhv1WMwRLeFdlsLO8A1N2Yfnrb3et5DFYnm%2ByZrjVOBxlsRFMEjauLl3sEGCCw86pJ88jSWkogA0b78TD%2FuO2G709G8UMDavag3RKEBHXdGVLgS1%2Fcqw8sSXXMRZ2PfjEhJiA837AJUJxh0LnZP%2B%2FUA56pzzySHpUpuGNyXX0IelYCq3eGHsC5r8Iyzzs4Xy8uO%2FxA0zEwyIWy0Rp5x%2BjVZf27fTRo7o%2BdqGiyvzJm95ipxJn6Wpgviao3reendKaHltXfKSO8wHGaXJwklLX%2F8mXoZNzbo38j2Twi0nE6e1TKyP%2BfqagUcOWFrPF5AWUI7HNhfO0jWEv3GRKbydB0xCR8%2FFgPwIA7TEx1f7wqJ8%2F3TgMMS84ckGOqUB5HQU29iggj%2F1rH7E7Fr0QHwoy%2BTy2HLgXJJACqY%2FuW1HemMKhkHQX1iJ1Qe9GeaZm%2B3cUoMwehpaEIZtcnoNnWWudmzR9W9uiMDhK6IYpOyUMcwS29PJF%2F%2FJFqWnsZY2ZDEhjx%2FSGsZef2iyp9ftvoiIM9thY15orCt6RAejAOJIhA6j%2FYjKF4wUOWXQnyzUlxILAtJ6m3MOZ8dHDio%2F%2FRbGEy2n&X-Amz-Signature=501f7c698145116b2846ad9c2c2a43c84b7ce1bfb6ad6fa600ae598cc911a3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

