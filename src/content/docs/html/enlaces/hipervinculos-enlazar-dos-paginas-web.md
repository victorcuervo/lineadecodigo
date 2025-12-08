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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HX5HDRA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEp9y6wp7FUCv59yvbiKGFuV2psDCWVROwpBRjO8a%2FGnAiEAsSMKOkCgrC%2BPK8Q5qkU7kuagIJHlIwwDsrpRuq%2Bx934qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKe%2B27hWZE9Z2SXETSrcA1kfRye4z8empPIGaETMzNWfEGrKD7HJqolaXawgJO%2BYyF%2BMhWRMMB0Ydb61Hk0EpoDItCIsUcm6RkXFi1tMOgci1wYL8HXNMX8gLO8CEBsOTfDULD1UamoFECyKsvDI6c993EH4S1CWtfWtbS%2BhcB9LOECeZykG7mL9Y50CUe8h%2BlfiSEwkr9cQwUwMBwkDtpqz1CBLYjqL1aToCDHGNc%2BizP87lHHRYIdQsK8i9%2FKJWj7nDx1ekotUWoFMqz8BbXI%2BLcdjsTIPlMEASiY2V6iuwwnUnf14zjtA7KGyDHb5WJ61axfbYAhYmffUeFD4fM1Uo53nJwJ%2FSbcBv%2Bw9E9xZjq4QdNKzRVpDpIGye%2FbQGzr20tW3p6bRa54Ga0SA35m5g%2FROh%2B%2FJ3KxsxZhHijpI96xrK3AuOiIT8deF23LoZRkhMh%2BGYzfwLiP%2Fqh%2BuN8%2BYN%2FPRp7Rn2W0qkkQJfGHol0nCOltpQIjR%2FJGfCcTqSEuPPrWezkE0UlkdkIru3qrjCs6og4AA0x9nFuHC9Fz4Ng79Yh53AFWRbOsbeyo14%2BM%2B8zvay%2BCUVGARiz0kxcsPCQr1siFISgvbQazlECwxaEIRp7adDfB759GKudOfSkz%2BDGBA3TuMT5b5MMCP28kGOqUBb9av%2F8yxPKOkZw471uXDtPylxvpix32X0qIL7Z5X9dUNg%2BT2S9dEtBv6DuljyKR9O%2Fi7J%2F5zUi65TZwq84XesAtL%2FbbzB2jdvTPDGhMz0INmAkVeKvzVB1Y3%2Fm4JnPpebfXe%2F%2FWrWmAOtfZqlbwSC1gyVSM48nPf4B3G4gsK%2Fqo62aCspaieOAFeVdva%2FfpNe1BcZ4YdjNsTzr2eN7lrS0fgqSlb&X-Amz-Signature=59f2311ac7d8310f7d20f4b6e91dbd931602c5a3fd657a4afd2617032e17d16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

