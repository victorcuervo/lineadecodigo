---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYEDKIT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGnVxfGDNIuJsfIqMHkNFDN1e4DWhORSpDT43q4LTbRaAiEA4ympn9Ma1HZWTBIrvMj8QnZD8kynQqUs14kdXvWSWKYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGhgWpfWI6Z%2F1nDELSrcAx74%2B%2B1%2B%2Bcp4KIOjiT7%2Fw37BN15QI2Yd%2B6yydJSiO9HwpWMeJeBayjBIj%2FNA%2Bg3earP8m6lf1czytS3QMnjl2eCKwGgaHLQ4ok0T%2BzsQJwHwfAvIXl1owxRelbaMpphkleoaYJqf3kf1Rr%2BoE86npsINjxniOdNujPSWIeAW82dajyldQEFtKH7Xqhz2hD8nBfiJK8z9jpXlMZBYZtwMX1ptz6O%2F6FiqyGcu13iF4X8QR1nACxKaq50LSfj8M7ji%2FMtKjYn8OCgOwxSSiZPNoCqoZs9HWCPeaflxLgYkgd7am4neW01S8ZGQTYNxaolMngnx7BswxfpTgkNf0myRrhAqmthoVbSIoImMtAAu5wF33L0zYnz%2Bg92GPzUhM2EbIfex9lzV6H%2FfRD4bcCQZ%2BfqPXeHi%2Fx1BMuGp4sTj2IXSLrnlFPVDtRGrPfHwc5lc7i6LhU84rf4B2gMQ1X%2FWBaG8MldimZsZE64xDgS7bgN8vNNN3H%2BwC11SYenA%2BCep5Tw6v9ej5fLPd79755kFONcWQR6FOCIeccc1YavInk7HNG20iBqMhmW7O1WO7DaNOq7rvI3Dn9noCr5O1vgF%2FeH92pIuT3ogmZrOKHLnBJWN71BCUj%2Byj6rjNckKMPitxMkGOqUB7oKXWOWNDj8hlVkKyyu%2FPExblKHvLVHJAOA458JUv%2FWmydCUyUUYsyEgVHVuOG0kJ7tPcIkSOgrxOAS%2FyfG3OmKAEPpeRil3DEHwNbgMAVFnqLFKHlJ0rgCW9xAP8lm6OolHQ8MWXGrbgddDqDHMJY1eVzD2PEVJSk226kqS55%2FUgzf37NBJ%2BSbDJq%2BXL%2BuQ%2BglBXscrX8X2hzYvS6l184Jv28H5&X-Amz-Signature=d99f2be48537a5e1d98efad0d5ac066daf4e1438d7d53e574a4ee71969966077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

