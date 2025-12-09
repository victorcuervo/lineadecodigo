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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPJ6VY7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKc3AW9UqGMZ4HewUo64ZjyXxrLILrZgzb%2BdWYK%2Be1nQIhAOJjJOt%2Bw65dJW5I2OrfstayxF8sh0R2h184OOHt1c7vKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi4z80Vw8ov6xzrykq3ANcJbncH9cImAGNBYv6SPL%2FFvchqkBQOVAP2v%2BE1j4S26lUcMpm6B88ay8I%2Bnfxjw4XJGvBqa5vV3y8%2BCbDZpuCBy3hO9Rpry%2BfeSsgruZKBoQQqSr1l3wYeCzqCPRQ9Eqh3PedUlsAHPVimj90Lky5iOO4oAYxPpNzgQEF69w1yb02HD56pj1m6YfuNL0TSBBY5AFRi%2FZ%2Bai%2B0O4G51MnRRKZ9srWyz3MjNk%2BDe4ZNa4ZN5mMpHa%2BYJcxnQNlAD%2BakHwU9OSasLAuLamNcHMo7Hss2uPe%2BP8ISmToYUUPEgZq3DRL452WSb%2BP8TySPRu3b6Z7uXiYDZhZTtapABdWqNV7Gdg%2B2TwHsTdKb0X8U9VPZ0gY8tSlw%2F22ieI2z3bxNED2DWpxtkebv9VZ44qlv0QwgiIN2BynWtW5pM3uPacYKN3EeDWbts6A%2BrSeN6BDE41v2p7OQ3PyrYPS8F9k%2Bz0ig94iQn7GZFWC7kVq%2BHYJVxsGB8tgbeC5s1mbFe4J7zAPPh%2FrHVYwqNj3rJwDuw473%2Be7UU0lNf7FLsThZjpcRjElb5GbdK4mtBi9ywiBm%2BkRvuWQI5OwEP8pxpDPDP62KS4dQXc9dLOkQdx1jsggBwn%2BUcp9eqRLTRjDapN%2FJBjqkATGKrNRar6uUbL78BCRmYkoMStupLv%2BwtWBT%2FeM6UAnwXRCM0OPNtkqNqEhtUcMtv6W1jts2gT8e35ver387%2FWWmreV3w9dWbEfW8kwT8GQHpch4%2Fuu9C9M3y0kZi4Zw6ig102RUrKOAfJIN%2BiEVXYUCeBl377473JtMWtJqzOpR4MlqCOWIyQd0rSm93Q3Ow7y7muMrkNZb1nK5rhFK%2Ffn4Srw8&X-Amz-Signature=4985a5cec29305620f38b39023dde87a334e2bc468e4fe26b7a6baf4370f6397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

