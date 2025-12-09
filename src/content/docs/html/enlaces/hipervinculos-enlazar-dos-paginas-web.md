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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7YLJ235%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFy8lAZ4zHdwlxjENMIGUyleRSIspoaJDZNM0MQi5eQIgbAtkicHEr6%2FEkUiVsPF36WbwVgFKAQXtxc4TIoqAK%2BUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc%2Fz1aIdKvtF%2BYnUSrcA7NJdQpDZOhe9mRlWfNk9iy2gnvn8Sxyfdldg2aUCOnGBNy9jxUa0hkZxidiKsEBSQ%2BRM%2FOMFQqQutR6zkfBvdH7lNiG76da6Bsf9DEH%2Fn4B2yyYgzBiD14gmTlRdumghMA68W2erEg1c6jBpQSfqNU0fT1J%2BFAwgKxupr0UTssTqxCNmyo7HdbzAmyatp9PyPw90b1jiOR83Al4%2B1JBLpaJ8EuX3ug%2FF0anq632k%2BpakfDoa8TJuuR1pn3FVbBtcZ1wuSP3S%2BwebqaFkgIoZjuQGtzDNvsQDrZp5i5tR1VL9norI9%2BhWJqJWqaSm9%2FsQTqzq8LPDLHtuEWa7AZT1Z2qNI1Tz%2BvMjQI4%2FBNCaLYkricRTLnpH%2B8RxFcquU4nPF7zOM%2F18p0COxAvOubMweDFY%2B%2FOnWohYuOv%2BRgZQ9aEcz%2FYLdsISi8xLemoQZxEIniUEo%2B0UHe43cN3Fs%2BA4qnBN5oe141EAC%2BAMgdN2ljTc7FFNylKwQuac7PW0RKhWCMD6rzafDqpY3VLQNoZAD6Cvw3B1eVdVluPtpMEurJvWI6toUyUi%2BXdiKljfOyN4WYBW0lZSfxmHkYuppvmgHYJ%2FpkwLFf45Op2PmA3Y6joY%2F3A5IP3gCP16AsRMMau3skGOqUBxrXc6pckEjgU8eG07SBTu4aeUerCVvwmBnQphPx9MTvlD4CdpNwM9zDy8G38vz1XBZ4stwF3mvxz1fdAHrM1cFjY5JzFewmCWgU%2BkF0GjLCaS%2Bckna7wW8Qbnh%2FIbm451%2BolabM%2F4EnDuiQPH1roC2t6eawfY7prwYe50jb2r7vfZWp8EmN38awD8QCabt86hFA%2BmH8P77esYcBtO3D4Cpyogd8b&X-Amz-Signature=61ed1e3b33c89a99306b237e1fe980bc6eb6e67889a07c62eee0467f51f37350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

