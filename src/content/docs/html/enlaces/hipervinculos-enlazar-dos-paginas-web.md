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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OECEVO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFxCIkCrkVNQPC5lBcWJt2c60IQGsZsWY1bEr9nS1vkAiAZ123p3ZQwKn%2BofLcWwdL0ejKdXtYXvrK4q9znHK6AsCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6kqrAKrKYN6DCHJUKtwDvF8datTCq9Ea1sQ2EJKt3eTI1Iir63OtXZjNKkuLgv9c05rl3Uq%2BB91IGUFTYBy%2FAzWD3NzAc8BSDoNV5j0Jvxr%2F6ttbI57PJwop6YBShAId2RZM6rOORLBrxR6c2v1d7ncUHAp4Poa1uXXqOhgH3lNxTy52NrnUrBVv7%2FPE4CDEqA7Sx%2BRCaiwYB98sFTyP0x8abj4M5i2pQitLZl6Ge4TCFzsB3d1pAQsk2SeOFQ2iUz6rvuURmzX6gJ2j3VkmHUGwJFJT4OIDNevmnFTvPme1SxtZWTEchmiiIE8v4bBVcIFuoujzXo9d9wjgJ4eF7onib%2BQc9G7juww3GAsA%2F1M9Fd42QSMn1E6uRuLLupfZO0ewv%2FP164Np7lbZAIdewjA2TS0e0yb6Tcxq1Q7wvncCz7K5KBbl3s4TTo6WG9VzJ2OXlsEJSEbmC8EWjuQZuA0zDipausLYMlN2ICEmXH1IZO6ShzkrpVyyaTYDHAIzPiHp61zpV9ug%2FmebiAQNH2srZgZVPf7Wo2cDPJ8Gc5s6HXGpfHYPjTDH%2BvUW8eU0eN8vNDZxtraW3mZMY17tOwOTZTQuA8Ew%2B0MiyOgVuPYbPoef0HakOOPrJ%2BMzQ0kO9ahkeDdlKkcqLX4wuP3SyQY6pgEObO9%2FyWfGPDiTWR%2BJHC53GkmycUPv9pBWEomoIgVgAjT%2FRFo2uy1SZoDb4YdDhSzDRjAcBQr6v%2B95QHrwkDLv2c%2FEsZVKVBPnMjZJ51lNfSyuBVUKVWXo%2ByOzHHkai1VK8IxfhhUKBqaVnxB7eHAwvG%2F%2F%2B6JvWJjFcA6J4FX7a0%2F%2BVIgnB%2BYcSsRqF0spfR%2B47Uh7FeCtwPp61g%2F5rgQl25VTF9xB&X-Amz-Signature=61aef675ae0df5dc8ed49553e70e2dc6a764bfe805b1c453b6753cb996b34f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

