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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOISK36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0adq9G0aSz%2BaDtpkmvAdOtCPUYJWidpEmTmqFrWgevwIhAO2J3mV6yw7In%2FkioGtPZCTD8MhV1LN9%2B7ttovaBsSxrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3qJ9P6bTMGAWOto8q3AO2%2BWvDG%2FOaqors1iaYbytmpfujGHJYhTPU%2Fbp1tA%2BI6qhw0JzV733J5UfC%2FLQeS26eTLKoHQQEX16fiNLV8tNoCYdsEFopQiwah96Ls9wpJwz0zmB9r3DcVWWkQybVuyrOO3t9GuTALmJBsBEve62wBzjsEA7VwqTiU3DN3%2FqDLk%2F%2BqzTDWRvp4Lq54bAyQbpC1NybMMEOhFawAMakmJkcahszx%2Bh%2BGsyA9hv3OfgqoKyLjMrEnt83QtsPDe%2FBbBH9OqAZRFWiYYijr%2FD7ZXgQhvOr%2BJS6AhiTfywKcm%2FwFIUFOe5kG4bTDqAcAMCCGDD2T%2FO8fWGooGQIwn%2BEauPpNtvFbp2tHpo0VUI%2Fs%2BRNow3AkwTpQgBtXPv7s2bWACD3FVnCwEIWdn5pAuaLJyRM8pncvP31PjXEWwwq3lf87o0fsci8bDwFVw8yTWydofCMkIf5HwBFCvXCOEXGrOZYr2boFBC6T5aJqw9Gf9J64PwDBEKGFaDA%2BfS445LvtAKPF6p5s6A9O3ekBtpfFv3es%2FW1ot45MQAesEe%2BpKYWaDJORkct7pKilozE%2BwdqgdaHkpLInPnVmJrPVHcnGJFwegTBWufjr4dhruWMl2tK2hCanGjvK6%2BFth07dTDKmtXJBjqkATtvZcK10V7OekbfYl58TvjRT4dRzmWsZ8KHUDseTE18ypHPxc10fwDmG5UKqKcJCQMyS1W0OjunoWfAhKkxakNrZs58fQwWTclvfzOw3rs5VTMtRfs9DhW4JFGsfFrOr3r4AoRcCSl%2F70zDIVHVxOADPKmIJjn0N8VQAlI9%2FiYltpP%2BDVbk8T%2BSraMeOLBVfqiBGSRF4NC06rNV1WuxOydsA0E6&X-Amz-Signature=23cf3c8243358dce937ec48c0d01785db078073abf0447db451e1c2424a12bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

