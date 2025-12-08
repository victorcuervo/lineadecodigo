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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHOGVEA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH14%2FyPw3gkHF%2B4PDE5EPj5zcTTbXGMNsQKt0%2BjFBNJAiAGT0U9SBcrkMXPmSiezu9gQIS3O%2FlauU0CfDSqpev0DCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQhePkWH5FYnKPm8iKtwDNiS3wXqTuqs1yLPbarbzo9CETslF4NT5I7187naRAUTRTkO86VnlPplVgpq%2FpWOUPEF3cJlaNx47QcSoT4fqE4VlbTDPjn3EaCAFhRSS0%2BQN4gNqiosI8lQX6ksleL2H%2FM5rewGymSnz8Mgz78AkojF1Qus7LIZh5gpaROU06sLSAQuqtpgZfRSc%2F1MAVQkaEMD3%2FwiNsJ1gaWwWjxsUhSdjyh%2FCVgf8uDh8YCA%2BjcueVQ46cb1xoBkEq1HMcKkKwusbORkWRBk6qbKJvVdaUySvppHMQF7eOUv%2FVVb4QOfpxg1rzwo0cMowLzGgULLHa0mfB9At1TPGIS6g9uzlmVKcpMrCfs2cBKSblIWDmJfjy9QK0rRkUE%2FQ8yMSvZKKKtnIHUG2gJQ1RKCOuX2P1%2B2zYpFVtwSM1R2H1awSFxAC%2BkJIoL3LV%2F8IU3XEw7CfbJ7tzvATIYI6GcXPCND2LGmmQJQ8%2Fz4Dppd2tFuPD6NHgQomX7cEXGect2h8Q4zNCb2Fim%2B7EIFQPkfgJekKisEzUW6jiBHIVq8xgA0qNEkm7x%2BMoh9zp%2FzWWfi1LpVHV6OR%2BHA0F9kpLpiiVlxidjQMs%2FeDJSMO9EZ7kxuHsFf7y2yVuT%2BhF%2B%2BtVXQw8JTZyQY6pgEHvpMQXdt5xWPvKCC7hZI2ZEYQnwIlboKQaROZn5IROmbpOaSa8a2HcJGw7ZX8Tb5KC3LOFQHjTYVHO5aVV3K8JfXUDrOalI3aMQyLiBm9FMlEbxCL6wSSWRZG04mbtlitM3jXrSZ5iHRVtATYibixFqfVmOlOIZhrUIK1fpQgjDti9T1yyiQPfRwJ0XrZBLvFd6uPNhOeCvOOHXqDj9M%2BwuglYa93&X-Amz-Signature=92924f4355e2a2aab0118b4fb625a2d51ea85ef982a18eb96cbb70c8beb5e267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

