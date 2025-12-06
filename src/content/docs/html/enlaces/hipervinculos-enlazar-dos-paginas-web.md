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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4XGLJB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG14Vsd1OslNfmh6ssBvYAsYO1OyTIajCUoaunz60sarAiEAt3x%2FlB6TUacRFs0qUv99JI%2BGRlEsSwm8rG%2B0R4W39OAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMfhkkrFD9RQnd3pcSrcA5Sv3W%2BGILYhzY3uY88kJRehoCn1Iqpik8xMY5a3Wp%2F1o4EIKVPPaXCBFk6G9b816DPH1%2BrMNBR%2FWLHVEIdLEvuB%2FtV6RKGMhG97TpPqP2HYabsI0L7cjYCSPDTCM3M4yGwKn8b6kqRCSTFtqDoNhlcLqjReMtDhwrT8kwmfUpYVIrlx8jihJGHkB2u4%2BimUsT%2FwSrrg6W%2BeV23yhn2InwsR8hyRV79ihlj5y%2BJyIB3iLRCrfX7PUj1DHGExW0DPrUk0zen5ZE60qTk8ZphPp8KMNyKYClStfQzG7pZ99MClOlJWKWEIEr0lXLYqeJq%2BQImnJu8kRHyS%2Bgr%2BEp0of4eg1kVnJkjGrMRdIIA7thcVhTR2Dn4UfCnqOPU8E1zVCYNoJgWpIIYdj44e05XZamjU%2Bs1NdAoLJsOnYFo0zrk8lvYWTWN8y3XjOcnwxgm68JCLUGsaJfirg6XeY1s6VvogzBF0r%2BGW2vupQuTslXP2ZhOgK6gEGVBxEQSAQyQiYMnYtAcPjuotH8rjjfHR6BHLscI4o2cexF%2BeJiv8n%2FG%2BQUjchDKxRxVsxuhPkuIpqxSVRfWN%2F%2FFx%2FKcxg4WzBlgTuBSvgJzF6nglZz45PU%2FPSecIWx%2FK4WO4eVimMIvN0ckGOqUBTcNdqm%2FdcI5UwYI%2BL22dXawmV15bgLFEz1HAp75BO9QyHAxEDRPEGl9wbJBpMTQgid%2BhDKknCgJg2uRjgz0VApIITC09brYBCPCUgC4g2vaYNXwu99hkL9hTWvUof%2B6IJDjlaFxKnjtxAtD%2FdcpyRRw1sKcdN0sxaWnoUK3cFj8dgJYh9bncUkkLvZvEgpCSVKiU7wdye%2F5KGBFeeVlFKSXjnjpv&X-Amz-Signature=2c66b9418fe6993b5f0225b424471de5bed4223c10b55f59bec1b387dc7c91ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

