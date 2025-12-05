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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCJSROG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH4ZerM3ydQEb5QvVBjhJA%2BQzQfelRPf2ca2vFFWY3oAiEAp4Z%2BKaAXdEAxS2Q%2Bjxlz7hC2CjemRW719A%2FbOzQVb6Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJVEIhDSEUsxA3aImircAyJZ16hn6%2FO%2FvBb5uhZ6kSM4DTuQxtbUaGUYhNasObd9DaINefGAtmeiYsIsqER4Xlt1ca5ixwpxwAXOtTU4GKahWBFRSk1iztEB4ezYUK3ynOGiqU5eG0ReE4791M%2BNv9t0hdCIzNT2phwAX7ueYX4MH%2Fhe2XlwqTsWSI%2BYvO%2BmtOIt4TiWaAn8Lkt8izYecUQbQjNCmTEltSoon21zTDRdh3zLzvhCGPi0tA8rvTp5DgaqAhHyOi8bcAWNNaNwo6DwpIQCSZmOddqs9H2Fce9TtvddnVIp%2FWHHbcIRuLIF7NSCwauIRfk2TEWHft%2FAQ2tqRcMNz8iMpz03idd62MQZVnEeSDRY0g9smVzqFSmbFpThoNxZHdIZ%2FWZfY32bHlxg33SF0jtCXI5ofb8he9A%2FlgxnCdltLDwJd1wrhywGyFOPXz1CFSdS8vscTCFkzutNIabPheH0b7BCc2WjM4UCiivC7p6Fiz%2BkLZ8F%2F7EZfW1Uh53GO77SmszOkWTw6ZggFmxbtu%2BBzs6jUKA9z4A7X1qitJai0peqwW45S1snliRt%2FMH0gvXVd6YBoyWFtVt%2FcGHri78143JBJMiJtch%2F%2FCIw1tcVbvHxpVJaIyGqJGF2RFln2gPHkx%2FPMPWLyMkGOqUBA22vDl72BbKikhQbt8vOIY3xxEUkdBAnJFoXx4Kpykcn6LSAtfx7Iu4Pt3%2FMckb5LDq4SJgLFPeIl9AG%2FFacd51hkbtHzre5yX6lQRU5EWNW6Wbk1oeIZoRFtvAgUaPOz6sOI5CeuFHvGPu0R%2Fsah8HxrBNQpe4RtYhgstY7nclR6JLFNJI7xMNoJR2umjx8Duo8GI5mchiKubO2Wffe7%2BQYbixe&X-Amz-Signature=c718ac51db823baebf620688f63e9e3ceeb19071e0c53cfa886c6462b9635926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

