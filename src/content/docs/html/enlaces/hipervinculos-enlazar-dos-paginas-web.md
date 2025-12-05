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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5RPZOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4IxatY0TDj2oP5zMPKK%2BdI5DHaDFF17YLCoq8PMNX3AiAi1igetAAx1kNi3T0bS2bHZNFoBMIY3uoeKW2ux%2FV%2BgSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMegWmsfIH9PLV9mTZKtwDUeB1jFOB3aM2bNGGP1ysnSMqNpiPlgAj1SQQtptgpWH4Wxm3DucvrLk3g%2BJdWJVHxfUemJfe%2B%2BaA7y9pRvpJogAAV4zxXliCtaLsnNGoBz%2FWqPEfwTqiLrofH6KNJ15DSrCM%2BlBUOWaSEqGcKlgJi8a4oalYb8FomjmDN9XOTWlLB5pKDsmetIJcyZFaLyyl0PNEFq%2FS2OOkZaIXi1K7Inj3UK2%2BbmInLYM54C%2BGzgCprUGVsBsOuZOveEiB03NchQtw888W4O9s3i6Ew6CClCkkSTwDSsqbsw5zok3MdrRPNZn3jfQ9K5Giy5igRgrSo0x9HUWwfibH8NRb1KRkjGVQgssrxrgxbeU7aaEJ5AGLlrhM95JUONk22HUUsNGbsjdR8dH%2Bi0gw2CSZ1BM1uahdeZTmN4Q1e4hxBz3l5Eki5zGKvhRaW4Fy2vLZeoHCPUwu2AHC37W%2BFSe50TNMbaTi%2BNxDsRc1P0uK2KlW%2BBBzG6%2BQKNBd7%2BayoyseIxGP5%2Bamb47pF50hIIRXn0AMDQHNo1UwdJWwquUUHid%2B%2FzHlAZVJJkC7OJC8qkLDC8EjYruyliI0%2BXJk6H4g8QmYce%2BY16tJGKx4BNXU%2FrY8Y%2BX8pjlqIW%2B44yrfv3ow14zIyQY6pgF3JwLenwMz39n%2Bs9rZGEFWdMmu5%2FcQroqDvrIhXUsfCBte5D0vZoz2%2B6yXdwDAPZC%2B5GWJR48IDnyb0EnkUqUlJKC4W4TkOFcRihOvOwihuYp6MxXcWXGMVgHEgtMPJi5WppvEXkJdrSrqBWtviyZNUz%2Fo2nNTH2nBhi3CI%2FacxdCIlXk2wqFloC9cUAiihyioEpimauYcT5Wg7b9wp%2B6vo5PgRneu&X-Amz-Signature=72a0c926c222979546a00d4ef60b93ce527d06c0cf34addf81fdf0ebf9fe6c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

