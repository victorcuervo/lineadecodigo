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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJIXNFB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6KMd2ASlLDtKm0mnwL4U1T8oS6g4W7ucwxi8DvNrnhAiEA5%2BQQd6Yu9zMbkjSnIanfxhXiqkVip7KvZw4ZdHC5SmMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOXorzHpEKT7TddMZyrcA1gXmRqBFWAx69rRNZITS8CYH2JHx7ZuePIPagFN37ls3oHMZrcdk8m2reYnMz%2FEcy%2BsnAN1QIWqhVfdaReRGX46BvOerwUlB3IMzPwW%2FueUBdE4oco23f8NsWmjUBj5S4oN4pYGky5ZLls%2BS5hOEWkpMUtNzEGphGlYLqtC5M1Zsn%2F73lobJxHORi2L1YRTWqCPDGy8FBzNlNzV6ZMj%2B1qkJVlm3sWdEdFqsO12mNGbHMlxL%2BCzjvkxHMvPJFauZrG4vxBsg9bQE1FAICIdkoYrUbRrnwWEreJ23TWmH41pfRxakuUGQXdTScGKRdYRd%2Bx0pFLzvetYycnJCj%2B0GFaeYaFfvd3tJWvr940L77MBObD2lBNjDopRyuM8VHF1p0QQCjlTufJmvAs2wbCM34eA8NyrSa81Sdzd8MC5MXzznQwW2h8%2F6Pclx0jHq9Hnh3Vxd3bn5tiNPNA3jPV9KUPQcuZV63TwMZ3Hi%2B8Yq%2Fa1U4XnMB5o2pRd%2BeGte8ZupXlluJFBZhjIkpAtdGQCEXVGoEs510vHXjFKEtzYLKtrwSrnpsct6Iu7r1%2FITAgxnTcEHT0W81IbkTDU%2BA2W3lej%2Fji%2BCpODUQo1ujJ1NdBn8%2BHMn4ono5QeRu%2BoMNLozckGOqUBtT3pOCFX79wip5mmnOOC9vSM%2BdMbwTmGkZno8bbIEpzC1akWNkNeLUbRH3q4H%2Bu8gd8admIc6mOQE%2Fw9zSudI8qCkfFn9DDgBjAwQjlRVXkBiL9OTGtF5gw9c0HvfDHPR9OCTAKf7azlahWvwMztuyXAY4sG5FyOclysJS5wwl%2Fub7J%2FINdiApzWtpjqq3CKYhMKys2r8YLPlc0IAbnQ18gzQKk1&X-Amz-Signature=5cad5da86257df0b2878638acd17dd19cdd2a4666a9613437580d0056695e667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

