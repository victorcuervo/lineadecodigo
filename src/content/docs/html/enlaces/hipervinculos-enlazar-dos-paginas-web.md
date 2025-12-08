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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6JN5Q6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr6lIT%2BGN2pxSfpAj5aiVPQKYNRmKGwZkjd1Na9YFoMAiEA5UxRwFZ%2F73WGM1NSk2ZK1wd%2BbK2lUp6L0boDdB3h1%2FEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVnOfNiHGtbN3etzSrcAxhI3mld08fCQG%2FekKWFuCvRCanE9WJma%2BlmcZMLBqZgFCHm6vQ8zfwbHS%2Bq7Dr9BdBru9KWJ7wBcltWIcSp6cVO1Roh56QptWZL2MWLLwM4JpGu6o7tKniV2Pod6J%2BbOBWZLZUmECTSk%2FwRexx8l3JJA3DtPzVym%2BVJkiJnyofNoUU6uv4WWKBP7uZzzZajyZv2DAZc27tZluXQnxToavtyX0NstSbgwZmBxHG3IETqp1juKUaIzO8rKCVoAuLuxLV7XV8D7XFjCj7JtoxD3m2O4XZ%2BxpCiP53FHNJ570q5T2Tkw6k2YaTmJ9WsU43czdktgPG2u5EJqipkrauM1oq2ORK2o3QN1PuzDyK8vd1Yf7w3x6ndiUd%2FFB6YGeJBGUkr0yHN4m2w7ibhiP4sjH21S72MAloZPJLzn7vmPsPIBOOkCPrna%2BQ1kyX16wsDs8j4vwNkC5BYrSpBkkx9RS3lFCbg0DwNVHm7%2FKz3ddtPLAHoxSaPSjzDfSPm5jymfbS4iA6rLEt8AtEtn7ZHl6fOurpek%2BdhVsbQeAhB9Gc8Vs3OCyAi6LdC5cSEoCGqXQrCBAKsMF%2FoQCGLlyBhntV8VoxrvGAy%2F4C9WAK%2BtBoifeW4nracaoacvn6WMPeh3ckGOqUBruBV23qhqbcGe2o0B7p0jxCi%2BRGWaB9T9MwukTQkc4YAMZTXjPiP4M%2BDzLQvaVSVYyQ9J1p0MMQ99z902CNXjnhaNkkgUkvhoOOTDXirGa6sLG4%2B8oArYM9Hs%2FIYo0yIWxsw%2FQBrSZBFtsMLIsK4%2BAM8b4SyLWxBO3629f%2Fik9bsuOiZD6vPKkYqvxS7Jvz4gA8RrTbS9e5gjt9fAYmZDLdtI9xk&X-Amz-Signature=a09cdba43c1c2a012f1e91f2cdab2cd22b36ef58a9f06042b4eabbbe007e666d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

