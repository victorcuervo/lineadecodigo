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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKN2NB3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGMxtJa3K0pufDk%2BaCkg6RifeH8OdD2IIMzUp6sVPnpHAiEA2XH%2FM96SLeVyF3aw6wQ%2BG8gLLPRdBCyGo2KI1CszV%2FYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJjSdF%2BB5kSeHxhWQSrcA4WQq8g2FDmISp%2B54BqtjWrzJJkNxOky97nwcd3tS17o%2FdtaQAORTS%2B4yIs%2BNpNEC2AhB%2B8I48lAhr34uMaYd3G62rC4K7duh3mWCqsgJACOM6XbOoGwJNX0pLW1keJWX%2FKg2kDvIfUyswTWKDP3WJ7wMBX5%2BCcRv5q8jnmdKZpH5PGil1vSMPeHl%2Be9c5VKliVs44V9ZeP9cDRCIVlFfu8kkLJm%2FdItlhnUKxGwSJPVClFYnqVz4pzZ9E4c79EPhf42JvLBVABRQcaPwmvl%2Bl20sk4D0SUZjK6NJMhXINoJaJYw82duy4LU3zOe77tneaUIfs71b9epHKKHtMKdfcuHpLhOYhtH2llaBZFOLXQVnhi0%2BWxjJGGJJZeCrLtvircugOz6%2FmVPoGPcN1rjJhMPDqRFT%2FKLblTGaFywg4crveU%2BOSakv97yCumIz4KNL1AO87TNFn%2FI9fCvk0EcYsJSN%2FNsOnyGT8Zo5nh35Jy91z59fToNSjTHEcvRqfU7VMod4wLzW30IatOZGcFKh%2B4EHuQCW7pje%2Bl4WpZA9Ve%2BVO7qsn4B9zu5jjkVlXv74JqmULvi0xQSfLwVvsckYTWIf4EyC3FaXKtIWvTcKtbtp8oXlwQo55rvspXxMOH4wskGOqUBXGKh6ar%2Bum%2ByQ0IJfnmwHLK0qRgt9OfvodBw%2FJ1%2FTaAqRelG%2BxnQYxplS9CqL4Za%2Fv00z%2F5DFf0Fh6N6LdpMgO4Chn0iDWbn%2FdplFWIxpwrF6o4XFP28mrRErk7nEV%2FaXfrkhsfAwcJDQPVnhHHsAwux%2BDD4tQa%2F01gSI1EkHczFWYfHDTG6rZef7zK5DS6%2FMZC8Rq1h5MlqtWywoRRnlR1hKn72&X-Amz-Signature=87a3d8e18a70f78464ba99276242b401033beb47918f847cefc182b4afb47bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

