---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRI4DEEG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0H4iHyb3e1NFXqZJGYeRSzHM8GgS4yuV%2FUKJ7nO08mgIhAJUIMf0t7eH1V5aXBmZzHIXe8Mk%2BYQLNweNk%2Fcasc76bKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfrRACFLv0YitvZtUq3AP%2FA7QRH9kIVjelqrmwUE%2F7YqX1Jgqcyd7ApWblP1r2dUbGBEOuU77n3e7UYMrw3RpLFGm%2F9XAPrMB6VsrL0kK4ltQVABog9fjy5BtX%2BjX0UtJ0uiBu%2BOfOpy44MSeHVcpdF379evvpEnRXumvr%2Bh5RqwTaF2TfgPm1PcweAL8%2F4SS7c15%2FPUUJLUPeZmacrwGYtoKqYpv7HDBrg9lhdT9mEhyCcBT4%2B6%2BvtM6du%2B8tVs35muXJICD2LwhwX%2FoUAv%2FUV6mrlQQX31Z%2FrbxRYdAohTLJ%2BFXg7700BHN1Y3B9m15kUpUnha6MMFmu56JH5t9b8cOeP%2FtqF9BtH70a1Ur0dJR%2BCVz5GvTuO6EQoOjW1%2F2FWnXl6But1ye4KylmadQ6I3%2BNky%2BCVT9fLr9ZhgMSUkxoIPEtLtRJpicgHr5fTEfKM8EvLZNGFmGfaK3dDR0kxzt2jwwsgazxMgLGydHbs3cPppWTute%2BXGIxFGIQI9bi1C%2BdYHwgfbUoudGwdsSeru3whZCGVL%2BuxCvbBl%2Bou%2BVr%2F5VPQJ3v7wPSfsu5KcoVr6JYTiWU7tlJxYlSdXUwX%2B5FVuSRTgB8H6TvIfZ%2BjFn8w6psjSX0erXRcVzASGeO3hAPPGj7LVLkkTCfxOLJBjqkATLuHAKijgIrU84urtXimJJiYBRNgTZWOwqlDT4n5ATy4PBVPYe%2Blb9apYDRVo1WqAwb3b7GsQrR0mtn7q%2BWajidJyGkLl4WCy1p%2BJF8LWFiG9bnxQrAedylXJ5JQ6hMcQV4uK%2BN%2FFo%2B%2Fv7Sbam3DYVVDYon1qgQEA0Qt07eXDccO767DQ2%2BBqWfadnFB5EPkLE43NqX0Yq6h8JFoQxy%2BG6VxtdU&X-Amz-Signature=a1afd48d8dabb0aec6d7fb6b6cbec29a00d3e5b4ecc42af0471061ea85342455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

