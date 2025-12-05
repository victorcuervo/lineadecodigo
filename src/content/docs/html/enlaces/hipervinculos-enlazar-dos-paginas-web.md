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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDXDV5K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZcjG0F2E9BS2ByZMWqkll8L3SOmBznu%2Fcm6FgnjzKsAiAY0QIY%2BWMUapbYWYAhtfJ6ZxcZcTzmER2x4fDpeSbHLSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMwi7uL6%2BkMdsmrzY0KtwD7CRMcjWWgHvN%2BL2R45H5fFzkusQ21s%2FXpXogT7wGpXHLwihb%2BPVFXAvc1UlZVGaHyMCK6WAtn7gpVQRtoh17ESLjbhHM61%2F4wpNBlF0rZ5%2FhDGEEdVBFD3xAf1NlpHbHKzwQ7aas3raVepb%2FBB5HMe8k9AOmfKP%2Ft2jdgke2RcaPJeDdACgAEhDF2gw%2FPfl95TKyhuIE4ZFChHo5urFBkr2%2BwlD2mR150JMe4a07XmSLcODiznfjmOoywZd7UAP8ZMwYhmHbcLInudE02NqXCa8M6eTuPn%2BhblaGQS2PaGrV3ecJWmRanBF6iqwhcz04lsmtZMwQ5jlQKUY6U%2F2DuzoPd56tX0Jsjp2UISnwyhd5Pez4A4ojTIeaC5VuB2PXJR33ua%2F2p7roUFUjVBsnTngRtLir%2BZaMrBzULwT5mZhof%2FuDxNvGaSzBWrT5aRKPf15CCdD%2BGp3tlKRPDySqmsWE3bDxie5ySQeds97zGqaSjW%2BFTm3fnb6FnZw60az0mBuiJS2jNbMjWY8ko1QunS6N8Hapqft8VzKYdNTvmWX7U5xJ4kMbwoK4xFCKPLdZAIdAzKwY50bar4t6JGGmR4l62mNzYc83w%2BEvVoD%2F%2BN5aFKu%2FjhaRm%2FUzFE0wv4zIyQY6pgG%2FWCnVHDrVquGQFultiBbaOtnFvGNi7v%2Br2PFAlX4Czc4pB3IXRQQ%2FMU%2FlTs9pksBf1veoxflP%2F88QNA5b1hVKAvMSlDL8wv8wcH761VfTP2T52XOTZYIvKMB8N6GtQPMSRPInHBArsqoJmVQ3zKmUifidWK5bO2IUwNH%2FTjmH4kbCBMmOdtiDEohEC9A7arGcDYUAE%2BhoRKn4HddWkM1gWwXPKJTs&X-Amz-Signature=0787fd5ece549c7078cf4a6b14489a1209ee89b88d7ea6caaf93591a6df9817c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

