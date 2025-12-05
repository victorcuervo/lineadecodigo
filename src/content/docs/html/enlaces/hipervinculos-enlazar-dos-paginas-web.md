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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPXS3WP3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBvMd8q%2FF8aTQ782SGWOoWNZwzShw6i5Psun13ihUcKAiEAxS0KNYuJiWyUWDLwW9Yte9hQBySsrPL9Ds3kR3uKwZ0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCMvtAIn3fHfbHMlVyrcA3guC2lcU3tVfMYZf4uK2dK5YEZ0nrT6EVZ5S45rSw5JjDDFdqBM7LpYYKvegik7JKYlmQwZIDVEFXg4WK5Um3tughhcHoOW8o1t6nJxL3H4%2FRYKygsCS8SoPrfXd%2FjM3Ag3aujaFdc7bmWmH2TFHNzruZK7vdGq5tTGh9MXPxJhlVi6LNjpp%2FnP1BQM%2FLoSmKDoHTh4u2mYYvEyK3QGkMQ1FX92lREdNnzhvr9sGLKkVRZOUCf5MRRW0U2%2FbQAGdRU874kU9TOzvX5vROiMnn8yQBtE2RX7h%2BcD06TgkZgtHnpGlWAun3LZ3DYpla3hXD7utZYjQUcLiAmxlWWdpaI77iSlxrmqla5m2KRFwWm8dZyOYQztTYX01Ph%2FfXwrrS1tsApFhUreRoqWkpIQjCNG%2FyfWan4nvRKI1h%2B50huHc62D8ZaGyvZ8zqBtIHfBthrSM8uxwieid8ShcEjIy%2Ba4jxzc6xd4e6MqBE29V%2BkVSTepbmDpTQI7SFeDcNMomg6CHkt7xPMyAX8oCLXu74XD4w22y9c0epZbchPf45iobQjDYJI1AtnjeLturGoUVYBLkhV7ZatqclPTBWisJIUDJSRyEk6IrfbG1opsGMUe7in4weawYtCzUyzTMPXXyskGOqUBFIgd12srGDqwfcAet7%2B7TTT49jkUZrzKXCtJ68G6n46rRCU7Xb5WjMHtXaryZ5Rx1foRAMMwVOFgqv89pUnyVl4ftyjir2Z%2FWWlTUaccxNZm6ap3W2lZQM%2BzzU%2BBUitUk1fvzX%2BDfmmp8tlOH3%2FF1nmY0WL2RjSDEnqeLU7UKTv8sHBagcedWZkrk4jQJoE8Du73AY47gpT9%2FdFhRutRs%2BAfzcAw&X-Amz-Signature=4041827b2cfc8773d670b778a119fb27a9a845c3733177feb8c7ff24bd7184a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

