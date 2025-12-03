---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGQSUO2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBTVxNb2su0qN6bguSFAj%2Fr5awMPiNc%2F0g%2BoT9289LW8AiBjQPJdpIQOejNoUGqxDNcxdkwlSmNW12IWG6hfl6PFryr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMjSj8vco82RUgmh8YKtwDRUeaWTazXQkJb%2FOLCfXMbwMGC%2F6w3SIcEeIAoJ3mFmE9R5pehX3uKbkmX13i%2FLZkEeLreIXnMtxfZYLaRdo4ErI6zZz71RznpTw02eu%2Fwc%2FKvovtIYl2V4XOvTLMqqp%2BtQ%2FQatHaJS7ivzYFdKQ9Ezwp2ljiZJHHZ0e8JWCvtHrmNqEG8DicoRR2Vp6%2B5g0Clg%2B4ZAuJQR%2FWu0YDYXv%2B2QDPYK1CoykjMI2vXBp9nSGRFLj1hNsn4LWcE39ODuML8iwDeQ5TuLvonVxV3DH60OwNJ5U0%2F1YWOndUNOo%2BpPQI3o%2FDWsDmYdo2WEupVgKGqqZdevF9PdyhaipZG8gFrLZqbY5xjSrpY4FjJijBocPEpLgKTMCzzUyV73VnM7NT82yGYGAk71AumusuVsWBsKUHc7U243Jcb1B9DXLUkcnZScUGoTYteuk4XuLlvfDlnf2E%2FrU10qx5iSBoJ%2FJ6PAXscdStZ6WP6m18wdfELAVoe7ryPwDgusHj0CP4eQyJseMYlZSoi8sYQeKRPjQ2z0uWeIoQhYj%2FLGhM1TaLVDesd%2FWMlsNa4Bf6HR6usvJ5uNB55pZuxWDhetDLL6u3VlgMegPHzf8BvJOjwxwHGwBnSU51TMUA5zPe3eQwzb3CyQY6pgEjL%2BmKwfscZwb41zq4EmycM4CCBqkaqQD1yZ3AyD6FPHCKGAx2TFPIGEx3geAiec6reVRrUo%2BFJfs6I20X5c9ci2mSrui4J15SLeqjFPt7TBIO2kY%2BLS2jmxwQ58z9DBEuKWMBo0kPyNZFPjmkDzF8coO6sYpiJgvO4XmGwtjL8tp9rxtaSfZHeIXQOX9l6ncV6aYulP1xPnZeAHLOZOYeBMGubsJY&X-Amz-Signature=5aad0ede4fb3f99eb0e7bc872535f49f84573c5a633277584cf3fb15633de106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

