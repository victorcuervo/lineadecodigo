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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUZUPBM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl4r7jV5feVPrNU0S77KL72MwihLp5MM1ZAxlxOS2HgAiBglULXgoN9oriJIpcQjkh5w%2FpjXxfAagICa%2FhSmtIDKir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMUoQkUPJJQEavb5q0KtwDXlJZ7%2FZ%2FUjSqF%2BZSQ%2Fn2TGevv%2B2%2Fr4UJ5wh4sYO%2BxnGYRfAWCU8%2BncAbmuxLEKGaAB4ihA796hTJK2nRes79bQOEFrccKpVh4jKTHnl2%2Bye6j2cYwrfv%2F8k2BP3IVKptNCTDJxSDIwdnGBgqwqhxb54doR2UTKwkWW04NeRM4aFszpT9RPIMB6J8sk6uuSodWu6vxhblYXvQw4d%2FfCBv6y9ryaSO46Np8%2F%2FDy2idrRTf5jtxs6r%2B26OiO29ld9fGUGytCJxRah80BUwK3F9xSZlAaDj4m83glE%2Bb6Pw80cWKw1HbUE%2FpCQQGkOchJOYZOpDCL5IabOlcWTQPzyhYxj0rA36Kp75pSbmgEP81w3nOOL%2FJjKbDwRQ536%2BmHcJTSVXivrOKmTWe8819gPO3S5RSiRFYMAyoD%2BtaabmZvXcQIC0m3g6WQmjzGPPnhr%2FpNmPGCni19gAlyoS2GKl8QbI5IPb4%2BzLf3BbrFW%2FiSfy7MsvCCxujVDwVm%2FbrnJa9jCYCCi3ViktjkYn%2F2ukihAFDF7Knj6wLTuFZPv3XIFojFulm%2Bjb0dkYXB1XpFGzJj%2FUiAT82QalAFvnn0RIxAWJv6lXGN8FWv9HK4717ABH%2BOfKomtXgKIxeUqowpabQyQY6pgHbprL3QocY8dN9LMsUsC4rjlCSKx0GgmZqmJ0EPgk757ccv5dQPrvd5AqFmoYhfECYcCd68ZTGFD1Kk1xfUo8pcpWcGiPP9vEMXjMbKRH7cKc8NX%2Fp7jTr1pbPlA4QMYTem7hsbOK9LfGEN0NGVexm8nbhc3dACg1OWoKNUdgzabBXgN26qQyEF4qakCqEBG8ANbqrJJVfh9WcWo9bLf7IUQUVuN4Q&X-Amz-Signature=b9198007442c765bb65f96d832e37c103f43dca4f628be3832ee550b41ecf4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

