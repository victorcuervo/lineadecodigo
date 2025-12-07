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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZPFB4M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlK%2F53dD19zHrGCTjMXX5KdLyiPpFWjEpv6d013WF1%2FAiEAyz9F2lkRWk%2BZQzi%2Fmlz1UBKSq6Pa4uiHWJM8A5ryoIoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOQTsvDTcJEmD4uxyrcA58ddrxwwTrksRfcoSUflCS3tIIgyw%2B78lZe4KXzGIDaELGMuVQ43Qa7VqeAMtGoRX3YZPBXMnBNRwgof6m159oIPoMe6uL0JeCTk3%2F3sF0QP8ch4Y4TKLQ5OA%2FlfGpSl7buMXY1ETHx6sH0Wsx626QYVJ6Mz3qtpecCDyg40keULKKjO9RBLLnDuNv9yNlRtQA9FMsbCJjT40VXrVRhiGn1yHWWh5MBQyoSDykjgyYWp%2B3xjMNzdB7rK4mV469x4ttUI9UmaXCtvT3CAlwV%2F7le5bcyivXu%2B8cvqP8UoWsT9ojzUE9%2B6Z92f0N7MuVX66MiBhQD%2BWUGGnxSNCUk7f85TfLrXF5axYdQbqihsTraS0X5DQL%2BQexy9dv85BM0SaUwYJh1tnyg6l1FRZKK3dgg8KYayBxUWome3mIQF4GZ%2Fw%2FkxXwBYDYAKxLqUMPXHyoL5wDjD392bgW6oeiw%2Bwp0%2BULH6r0ZIheJJTwOSmvcsnThohlfgqMEZYBFYDxdU25rCm%2FKfJcwZtpDIKDqrwfmvJAykFCCI3CKIpCHdjDKXJG%2BB22gcMjLDeqYO7MoP64fgK25XzU6ohYxwkAykhhZXMSZu3mjSLnRhpzP4AjCXk51R%2BA4GOOZ%2BId7MMya1ckGOqUB86eG0%2FXRYiN442nGE252Q73ckwTjCxMSupeqTX8dCk96dYzFcCcLG7eZQVKm7EJYv%2FQlIODKb244Vac%2FTEGFd6%2BI0MWuPPGEkEAnB30mQHZNznql5qI3S0byx0p%2BzOlbV3CWpluEq56oqubjvY9su8UYQQRne3O3mPKwh3lRJ%2FiV0R2aEikVDYnWFrDNAQlV8qfKy3xaGOBW6B%2B0mbkuiJImlJPl&X-Amz-Signature=db2594e2a0ae243b4a7e76a67542c84f86cb123e05705b288a8f73a6e02ca767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

