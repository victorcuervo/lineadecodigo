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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ELMU5O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcYng6FcBtW%2FL%2Bcszarj63B969qNi%2FqEVgQdpv%2Fy5KCAIgc%2F%2B%2FvfCA8BqLZM60Y3v86exZTPzWN6dbQukG9gfC1ZQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBucmM%2BxZNBg14oHgSrcA6Flw%2Fd4SlzMx8qw5%2FbC2sZcOXOA5dSd6jU1Gw0H97OfUzFvedqjYiTRlDtnyDGP%2FJeXhHlaHUbhmKXWqmDwFF%2FCdPUSUTQXASb8W3FEef5fkYR2TqFrzTDuZGRwReWAWYA2J%2BifqbR0qnjLyPSlSSy%2FL4N3iitgYPZlVSKdQ9bFfk%2FuAMl6hFWisBDW%2B6WjfD44B8KVRK1h78rRfcRQgcTaEKGfIefhzJU8uR1HZk%2FgoedyQGJ1aOVfC4uKcEmrCkuVabmTHvUGVEdvL4Z3bVqPwTvDJZWXcQ15yLu4nsynVVd9UOsqh99PVe8rXE2MEoE2vQWMgda3c5hCNtCvyHNxjAiTFhdQ7REVO%2FLFNEc9IcnkMCN8Dpenal1xg%2Fy9djXSI9FL0mSgB7HpUcCB6fXeIunIRWV%2FrTg9sYhyqeBdvMewADzVx78R1d5c6alq53oe2zBxuJBYiB7%2Bolk5kRZS9YOX2oQLkej0Dk%2BJ%2BkAIDVLpKtdmYARkRcVJdvzUOWkC7DcwFEgpRA06IEIdksVYOITXo%2F%2BTUMMKane%2F6%2B4iBsJw%2B%2FXojvy%2BGfID74Tiy48PI2C9Y25CfDDMgWtsf6U0NITZGtBXHdVxUBC9lpaoihTFx2WJUGB9FyTiMKuMyMkGOqUB7X7CjhXaPV048xEB3qSNGF9J%2BlB%2FiTqx5AnhyYcmK0plxklDsFLdWtDTAstUFfUJUf2cTgzws6JlRDHKo48lFqqo%2FSA3NDr9mJZgniLNGuLfa8waURvkZgrNloSytp%2Bx3S0im7J%2B1N%2FabpZcKF6YQLALZymp8qxpD%2BMaSUeUBmo%2FqJWSROgr9g0DUp9X0i7dOlLFxXVZUzDm2i2cMZI8ADKJx0GE&X-Amz-Signature=911d2e65db111b47cf389df2537bb3db52af16cb7b96bbbbacd7010864e4e403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

