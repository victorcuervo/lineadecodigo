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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564OQ4GQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLkQUhNfC3ZSyEpl2IZfAOeSAH7fQNPQLVcJE6YeRk%2FAiAcutW8BLLtY37f3W4wXhGx%2BYFh%2FrMlfEjhI20MpKWivyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM679hqukkZdwfFxIrKtwD6KAMYHpDtmMIC%2FR7Czc%2BO%2BjL4SzX1moU5Ytut1wIcD%2BrJqEMbujhcLVBtj8XX%2BpeoIhtUUmCKM%2FpllAQLk%2Bp1d4Aqy6jcUHOeHwxE%2BoHRTHklC3kEDAjLjDy%2FcAaJVCf2tRW4c6ILmLON4rFLy7Q5CcaMkUgmoHPvc7ODkYoyXZHobSKDcjUx6ftfZMAmDXhETgrRxDN0cbJkzCsFeXJIdj7XRFBo1C7JatcUVT2vuiGMQnoa99slRBZ1PqzQcwhu5Nwfuc%2Fqb3fThApy80bGw0GgeJZJ%2Bqu3xZhMfqQDP5sSGFGaXPatkon4AjzBgj8JWo5aQkv6jzhb4yzRurG8oI3mOgUiiFacffdUM2SsUk5p9gOk6Ro4cSKCxs%2B68dnYoB5uFAdpWC9vVow6Y243nRtqwDWu8993UP9IkuCrFA5TBUN9sNKXlAjtdua%2Fmz9Tbx2cBCMfVDf8XCcgnqwTuFFUVhKsc9XX2vBqv0%2BAtNsho2xwvKc6ykt7aEAtqGLC%2Fsah0tW1FrLjpIbp9MU8Fq%2BdwHC6KTy9kiB4sUoWHmPAYZxS3Z%2FXCC%2FzwcNcFKKjJk60pmb9A7DZvLmfl1oaWqzLrZBg2qFbBMLzXPp6CCAsmmf%2Bqa%2FsCFrsgwwvprNyQY6pgFxv9Z%2BPTFozj34QcFK5EAKn97XYslIpg5lFx7HRrg88WGka1shgwj1V%2Bb5uWGSsadwAHAOqcx6TOfXU1bNnlC9PeTBK32YRr7iQ%2BF8NPjhg%2FvmzTr6FWbMuHujbxxi0qYpImd3YYqPOHnJhXU5rJlkADgNNilp9ZTC%2BqQOARaGESMPfRJ9fxH8YPNyRQ47iBeno8UABJR3effKQ6NbcUnhc%2BIg2PWL&X-Amz-Signature=c8e628a5fe50c938492cac9a5b5dd7ea87fa9143857fe516b8c843118d33f15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

