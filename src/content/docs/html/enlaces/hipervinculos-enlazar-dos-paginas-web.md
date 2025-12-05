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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WUDJW4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb3rs13DeX0WixzUy6DIrvBlky6RqsBxOh6gcLV%2BronQIgQaW3%2BzYJvURQxyrIGbAbbf7TNdFybb6byrgOZMm4Lagq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKxHo3Sg0P1jp3LHYCrcA7MyyIkR%2Bn2kSRkUas50%2BxbOM9Zs8cjatdJM1ZR4oeKoeI%2Bxftco25Ey9fbSFlRCVDaLnA2iO3zfANJlVhmisVCAmZb%2F9GtuD5O0uH8KSv8q%2F2jxY2iG7eCR%2FSOzR7eKJ4wHipexXNsgYSm67kMnn8eDET%2FrAUm1EKpQDJph5HGJ1ebY342x6Lk%2BvWIeWwFB%2FQWA7gUjMYtEUQ0yUw1OF0F1QlFIjYYGikQ3tJRqYAbFBhi2Pq0preupPjYNWQ40SnY%2FaoncvSnzK%2FWo51e%2FzZmhngHwTVcydIsZ1dhGWnPKKW1K6j9YQCWJ5G5ReS7sZzHbYpnHjtCUCBfctHky2xIAVsTmCgHqJDv%2Bj%2FKzGEKftD1pnrmyd4TBTrcFTZ7PZc9nM8k4TACRrEOVqZLPb5lVonXfR%2FMy6%2BdqQ6MrtU0jqiioG7zFmeHevO84jCa0tiupBZneG3oNyjYoco1DY0kjthpPl7tZHCX%2FFQS%2BKl9rX4%2FWwD8mqPJ3r1vGS56T%2BK5hm3%2FxyTSrv6L3gu5OCxYR9vvzF4NApNMMvxcCqV5qjw1%2FX8Mk7Qlsu5R5xeVHEMgVSJcXDJX%2BsopqxaSng9gLFcJYy5wpnTh5w3TquMF%2Ba0qjNCyTSor%2Bl6wYMPbFzckGOqUBEjLmFPQAyF5bca%2BqC0Ls4bo3Ptx4EgnoqKa2W%2Fv3t45yEPsQvgUr%2Bb5q3f1ohoFrF76udjN6MX5%2F0rVrMK9ZyqlekwHSDJVz5uYxldioEZ%2BLNNmjm6xD4WAzlp3zWNe7AYJBTouRdMqJrwL8spOtvH1p%2B7QRfyyww21ItRHBRahjCHXcjTYyiM9g%2BP29iW384OtWslzCf1Q8Jwsw88Aj6VRvz9I4&X-Amz-Signature=372c19a933d81bf741cf7a1b8e8cca7447ef10bcc9bff81167afa752e0f2f867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

