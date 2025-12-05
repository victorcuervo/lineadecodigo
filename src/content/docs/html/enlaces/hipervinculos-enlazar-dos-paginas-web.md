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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHUA6GX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7cZWd03WfXVdrW8YkcRrnylSOadOYFcpnbrNtGPHDDAiBDeFak21d%2BWRm%2FqJWta4NHuHXCIjtmj7jzrT70rmwWhir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMjIexnNBqGirkqiCZKtwDi4KdOaKT7A8009X3T1P08jZbpYNnJPrfb%2FuOoKoccVjIQdA4mEN6SB471U5ikDx6VMWcqz6N%2Bi5Xa%2FjM%2Fo9xso%2FLwE10nnwV0gRVCmND3jKCjW3o5oSBmUWMBs%2FIMVrwpJJ7Iv2jro%2FIGBWxk1guMMZQ3cQiiw7N%2F5aTnL20f77v%2Fe7rp9KCrLAeRCz4Ugy0%2BNRoMYUD1peysqBtUJkMjL4758oxDDDY3b2FXjQXk4s%2FS6QUPrRuFkfwwyL5yub4qOF%2FYJATAUqGMiSjXgw1kk5NFaTfBKjeupSqPSgXMsOJzi5FgGH3en7Y5I500FSBGtk6rgVBO8ytxylH8ZkBKKwUtg%2FNB3daIVLwOrOTPizXwfiH06iQS3YBjN4ixILGHSQyRX3Knj4xSSemSQH0a2KPztferW95T2UsVz9v4Fi7k8VPFlLxrxuNz5Zkx6ngTrptV6CLhqFIXEhfqJjxhoXq5Hsj1l78w%2FYCDSRAwpTKjtiSGeK0L4JXKPeL480HbUllXB7PG%2FtEULNs%2BtnFc2n5ycgGeZzJiF%2F8K6hZZWVGte1GbVYgBDNj2QGBD4XWGtbsvKnIOFAagf%2Fwqj%2BsyMPxv0u1s6%2B7Jf7RqXFkLB3jA5lknGzKTXLqg7gww%2BXMyQY6pgHuFcRrhVJaQuGvD7jP68aMPQ%2B9Zwkd0TWEZScRwqyf3iyFdtoRRB7lGcwdQTpTrKWBvPx0TJ0QMZZ8fY7HoziQOVLPiYbLIXp2OLpJ3k4p%2BaG13M65H6bGnstTg%2BZYtBDLPPGn%2BaNVzaS5okZukSuh8EbctU6OHuFj2gunKn0kfF6V9WC6S%2B0Rl1GCCCaGoQSKQe6Jgr99NUhkq7O5%2FCTkOCk3S7G6&X-Amz-Signature=017e9be5661dcf243a0a06b71f3e70f9cd374db03e4d8dbebf6881066cbfafe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

