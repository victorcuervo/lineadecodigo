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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNZXNL6A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQTsksx4oks9eMvbtxMeOwysrPDZJmvkYQuiOA%2FRb44AIgd6ctvmxXAhNYH0u2krd3iIxUTrK0tG6K1H6xLvoVp5IqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmuDP4hiFL2jN4QYCrcA2OXt%2Bg%2FxFcHGqAaWdU3mb8%2FQWyBZUHZ%2FI5bYsicJbRkw7vkrVsXGLyLvEo9j86IDbqi5tKcziL3QKRSn%2BL2qp0MVEBKBGHLAdbBvWYp%2BmFYzFvDqgS90C1NahtgqLRL2CdRA1PlMkn21GljqVYShPBKMPvUXKabJRIaTEVZzREaCUgSWv1%2Bqf3q301qnpf6WTgtyPtJ3NWRZJbfHJqhvFz5qLVsx4aDC%2FO9KhXQ9tb4qlL3r4DsUMeJNw7EXh%2FP0moF2c47fc7ONTz75OlonvTonOY2nB3Xeep%2FmKsEsv3vCVMqbnaswhkEzSdoH6QQT7B5PuXsgtYPx23%2FPFiHaiIcdabGU14kUKW1vEyVXD4%2FlCQbcMJ15tgpk%2FKzAZ7GYxam%2BfcHtgSHtI6ee%2FdCxZKYWTOKE3AhWumBtFTW5jUm3zlz38PnvGdH7LLbyvYnYvMPfD5OdHBs620jITb%2FU7JZDPPBNs4WR6N%2BSsRNKVPWu%2F3b%2FL0SyWlxJmqCLDmrTEzMP020fCmuE4NRvj23f73ZOneU7pg7MKsumn10cnS3P%2FtM9lgsQo6kHkTWbejClpjN9O6PmIIj3tZ602IV8atNxXsgXTVQT0BSJMziXYJTno9C%2FpZjfozzodrVMKzl28kGOqUB6OyJFTmZHKtQSbldRrTdiJP7tee3o17Ceiy65jITlPYniIjtEsyNjws1vm%2FFdPx%2F64Jn1mP5BqTPEdDhGH%2F%2BZF3tDzOaQDYx8a1CZQXRHNpyXMGCJP2AwvUqYxYcgvDJmNtpKps9w8MDz1hvlEJPR8tJpObUBHxim5DRpcwH7XUlUfDBMmc1wSUhp242m%2F38wDsmZGu6UQRdLxKO2k7Tw4fWahGQ&X-Amz-Signature=6c549318549199159cc416b8ddae4a999795ff060d3ca4b9b1e8c68c3025a15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

