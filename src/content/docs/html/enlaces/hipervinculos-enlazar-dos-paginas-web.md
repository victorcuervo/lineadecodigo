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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LPBHRAZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxQPC5vfiL4RjY7trQ8XuZdsA4jrOM1pz4pd7krniSQIgRBgyzuPHTSUKDCBms9gn7mzSfSaf2jD9h50Qbap7ZBQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCLZ31PidwinE0PzTircAxuJqaYgJOal4GsAe96GpsaukwvtkXqDomAOZZ3JuxXaXp3U3I3BpkrZCaUVRLh0alF6Jal6U6%2FTxvEVRjIT%2BNb0HGKBBwgv4MsgPxXkTcw2UQlqvk%2F5hFJImOXXmrBfc%2FbwZkRdrQlW4nmm6%2BTaDCHarbZ2Ky9TZ9knxLHeqFMvvB%2F5Wd1BvdyqHet71Ilrs3GqWTkKu88YVyJNiaYB98iwoa8XER9xMoNCTMspncqg6KYSDHqnq7%2FLikIiPhU4nLWVC%2Bsim7jUrjXAvcLtWHqD4a8rYYfCgccQU9nlKpKJDdrqTjA9cG8Js%2BjMei3VcCm85yfBToQSY%2BnpRQXI3DFQsZafpLJ4C%2FwlJ4fO2eC2VQh3tSOpi%2Bb16dbN9dtmXn%2B5aNG6TCSUnmkov3edW2WSCch4huNSGnRIVC%2BZmhz1uiQx%2B6F7uqK7csKtAu%2BHUkpKPKI0hhYzky8cxcaeAv5sTQwVUdnkHkXPPh81bklWysuGtQeMhTXPiNjv8pZvdJisNpdSfZr9HWevj%2F%2B3fYB3h0kt2zOj2e%2FZv0OKrNxNLhMWM8Jzc0OMkr7mm8W%2Fc2fVYFNubBwnGDi3YLh4arcq8kDOBoY%2BT5ucLUCze9zbdIjtaK1EYG2BpRz2MM7LyskGOqUBeGet5s7GBahejc9gMTtkYnpw1gRcgKoKcH8hChSsKv6P%2Bly3SpzxVzYftTeN1Dg75xoQz%2BvjLOyVxigv4DAuRQUKvdvY34vjoPCdHjzhpDgcz5bP3LEzc80alb%2BgYOplxDbSAxo9hQTMlEOFMofh09%2F1JwWPsDGKcR9EYXsSfRD%2BJITKc0u3TyTKKNYiaTW%2BfkYRrv6kJwc8%2F9a7Ma%2FDEw3oPHRS&X-Amz-Signature=58ccd9a0ac2ef1ce3eabf709ca0c668c3904933ce20f90c82565a7d9421c3c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

