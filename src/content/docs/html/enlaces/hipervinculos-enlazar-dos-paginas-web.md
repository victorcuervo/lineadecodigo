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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652IY5FRB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAHWTe1XBycQPKG2ceXfWmm6oG0Ye0REQf1bUoW2AbXAiBcjyyIqZ6OTmlgQqkOcwZTxzmW1mIKoNLcnKrshAEyRCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENp%2B%2FCrJI%2F8vaSQCKtwDEQyKUGDNRhO0xj5p28fw%2BWE2YbwbqeDM1SQtK8oRP2JfM78T0a9HVonHZxBI21ztsMDxanvpYdlGjC3sCTh7eHhJYVpsTkywOr4Xkff20Gsn3TFjrz8FmhpAX8BStNLE2jXRWat7p8soZkkZuIsUtJkZjwag%2FpZrrekIizi1f4oDuSxaZCzx6DsxYbeppwpkUTiAZlV5EOWDev9nDtZUyeUwMn2Nwm%2BNis8pKoPFr2KZ00pRzr8YxUEbT4tU6QsCPbcXaVroesgj1QfrtmSTSAozS1QzuAjVQqJ2Yanjk4vqMnoLGaHPhGRVhMDZ19cXhxSew8M0HpGEFmDKSaFwDHbsy%2F6DGpEOs2h1a3YPFwUZvKriIPQyTX4rSZDJGqrgdZn8MGz44sKfh6GgaVt6CpyQIi%2BwkAh%2FOq7PNRWHEfcKhGQnlmMro1fAk7ba%2BQdhuy0x3YYribb7%2FJJOeOB5N18Z6YD2LGtECOOihMh9gmSJjrfDqeoGnPNedM%2B2EqGZi39Rm%2FhkHkh6Hb0NSNJcofu3oiClHOqNqa%2BAgRYFOk6PtHzCFAck2Kzm3VBUmt1tfu6zytP%2FWuNsDvBKy%2BJ8YS0MEVnr7cw5tWgLuDO2f8IfE8yqCYEflcSB9Q4wqpnVyQY6pgFHW7IS8zxPIb5S9nhRTDp%2FMJaQsC3JEILWa%2BFw39q9eOOoDpa9h8sNoT5fnn83K48Y0AXcrEVUl07gc%2FGezttlFToCCvCIWaJR61TLlPk3F1C6tU8P8FG%2FRtnxsfVx2AXHlHqXXpCENY3Q43rrf%2FaKC8h1%2F%2F5dW1wBLUKFvX3RAlO2xunqnB5TLgJ4o53fUU1wyAH6uaJH%2BDRB6c7rtFPLCE11Amn2&X-Amz-Signature=010c78c95a95cee10511b55c3084b2acff4fa0d08e74eaa2533d7465e1128b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

