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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCOWVWR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBASrviCJ01zHvHSFMiECqDPy99eyQe0o%2FAywtMh2oJvAiAPHnwfgLurQ5URvfz9Y%2BXwha8T01VvULBEwlPupE1oliqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKjUjwn%2FiKyenR9kkKtwDpLzoThzlCd%2B3k%2BsgPALdt5N5o2jRHNYCW%2BXWP7CSkR2plEyo3cO2L50FUgkmu9LQ652d2k0%2BciiWKM2avUsdiiWsOF5DOsYHSTdbrlLBncrxTS3avCi9Ky%2F5HWLymcbOgBc1pmpydzgbt%2B7gbuBYmoSmUfJFjuqUysej0NcMHCP68BJVS4tRUx6aF5dvQ1w2hFFuTRnCgSiPTBdDS6PSTkR4wskm1Mwlo2IpIQq3EnlUtCZzmlmcgQEQlhxwnBvbyIQfg4skRc5OIhG%2BwGhJlbaIjyxy9UQCCTQXaqxAoRehs8zwJA7%2Fkno0CQdmGyhmXMAAmBd3mnGhw5oDR3PUVd%2BJv9IOghOpTTfIL%2FNP8u9lUDrpImVHvL1SgpxKCRvp2kRDsc01Xftq4fXhM6tXo8%2BN51e2lOUGwzmnYetnyZ3CrFkq7F1OlFLu6hgzUBcsW4BDvOr7SKdAIsthCJvPumURA%2B7deDLwlECZgmU9mWAZ4CsuGio%2BgAmMy1nbq6AT%2FYbBQ50BeVAvDbj7EEVjtQvUltshOacgP0OrVLfRnPvRilQ7ZS7Rrmi59zHf3xsHZG7%2Bb%2FRYUdLKv%2FquWvIM0E1Zqbc9HDBlhh1T8Ty50Z5Z918%2FVdMD7g933Dwwj%2B7ZyQY6pgG6Wz1PfE4uW%2FT5fNX8WehxJSsI7FyEFJh7uFd1UMHM9iUJ87Uc2qI%2B1i93aXC3AHHqPtnoxhu29PtPvHQI92rFsA3Dr8wdYfrbiOJ8N50TKrd5AAx7luGzzblQw8DCFeplOukehvDnOP3%2Ff4XPLi7EBJHBv7Hcums%2Flfxiz7xzik9T0pBU3O2ib5h6ALY%2FCwBo07T1FfzAl26yVPlUHk%2B2UswzC42P&X-Amz-Signature=ae9ac42f059cf6101f5b70f3320993718346a9e2efbcf9aa799e1ffb4169a148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

