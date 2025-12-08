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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJHYNCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1qwLX29YZYqklqBTZhWiStYE34XXn4cvPquJotZ%2BIQIgQTeg%2BNQs5DWNrF5CINkaTSUOJEg5SAsjj1jVBepxP2EqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHNbZSa7JY%2BNSAn3CrcA%2Bw40j7FiPXSGnteSgrklYEM8g6xn8IHG8W7Lswp%2BLfjAPkRvArpI5yi90tLW3825qxs5kFHDGT3wMVfMHuFRMIQelFJ97OX%2FAfrrMGvvzjVAXUsXIPWRGhYPbMl2n92j345I4nwcK6CSaeg3gAMEz3GwQIA0%2F%2BknARp0fW7hM9LsCbyBflE0Zo4wMa%2Fyts%2FsfbhBcvqSJgvu2mk2hH1tpVPu97b2SxyF2bFTsjBC1v%2BDuRN%2Bq4%2FlWkIrsuOipOGjNfULmt2jC40jjPrRMJnl6C4fvoGupFUPiXaAFHYqkAd12RtHXnD0NhqnbSN3oIVdpW7ASfjhAF8m%2B3mcTWc9L0G3XZH3007isQZozcQuBEcLqSJuQNf5o3oq7bFhJb2b3ICNxCSoXZXcLkB2V3088xJRxEFFj5FHZM8uDJl3m%2BS1rGhMUVT%2BzRbnNNTdyUEJMaTUajDyqetlWp9T1k%2BOJ1Y3ef8CXKzq%2FYRjebYT7Dmog1iOSIPMPzS35GFW%2F5Rhfz3vgN4fAchkt0cEb4TuC1zU4XlEjXOlhi39rFW5GN30I0Fg3DLcDwLK%2FA5XRnYqFS2j7zOwlH7pPVCSbZGQvaD8%2FAa8xyZlGPLlKBFiYXsgaN05%2Fvra30hZ7ZdMMrc3MkGOqUBKdwwq8t7Ulsa4EtKHQMMwL8Zkucbg7F2snkJqjIHaUWlf6RDc3KMGTrAby5KYPDt6Ae1c4Y5I7Uf3iofLrfBYSU9GJ0McprS2CyYXQndbnQ0j%2FxLRvLz%2BA3soliPCuZVUb1gziJ48wshV1JBgoHbfkoJnSd5u6sv7HIxi7ZY%2B%2FuA%2BIglab1rHaI%2Ft%2FOX1IzxdzZLgQsDi9WSm8UiEJFobICLcYu7&X-Amz-Signature=8f8cd379de436d901cb9cc30cc536501d10fe1d05d4a88089a319e32db192d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

