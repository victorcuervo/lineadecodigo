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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VLKR4P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUo0t5g2%2BDEyzQNEuK%2BaaKm%2FT0qpQIVU5mIyH50iPdfAiEArJ3RFmPHoW2gAAz9Nd8Cq0SPNytyThOCs6%2BmAf5Y4lUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn05Fe8Tl4OKz%2BtWCrcAzV2fcfhxIPuNjU%2Buw0yyRb3QuZxN2px0F2OyHOC3PTD68zR%2BJnfLkXTRJRKdBWOUOHCz1hY8OpEwpK2jth4W2YoK4Sytc0x1aBb3JB1Z8UuRohFMgE7IdcAk2tsOHwrIr7nQbkPweYMV9xmk8V%2BOQb6j1T8MMUg85eg0zhGKRxqoN1rh6HcapMeLymKcoNZiYWPnCxY0Ibcy5vX0lITxOwQ7uGFQCv3QkzKpzYSezS%2B5RJ7eSXyswKW17qzMb2nTLS1KMmmo9OLcMshUz91%2FTSc31TWep0QQ8GkIx7aiQuKq%2Bk0rXHQVqvmXvGlp5kU1HxUbUfavn6NV6Lli3vRFwCPAZtEGpOZk1zGtByHqA9S3EC%2B%2BgdjO8aS2yj%2BsQw%2FdQ5vo39SdJ2iQwziYHaqTB7%2BqPt5t20jPRvYNiKDzWolmK19o43oRK6wdDDnRZmGZdXEMBtlzTXNJ%2BNOVwGZTdCXGKv8XHUCQk2JAISg5creozt%2FKC5lDOTxyR9wJGitiRi%2BVdCN9HuDMsrct275NjqR5CGxc0jW2PYmkC1r8C0JOe6k4uEuUWAbjD7y22vQRixNLi2GkqfcogKumwvFPcp1A2uCOQ22FJBgCB8UCauhBnuh7nowbYB1oAp1MP%2BT2ckGOqUBdJCM2wB%2FWDE4j%2B5odxc5gKA8si0LxJCspNSEP2UaZ%2FT4E%2FQuuq8mntczOJS7n8u43NjsIymsOnZXwIQZDGNF2lVyhpIf6aWPdBm4by2RsaUxvBp11JHDX0mkYw3GwtyM92AV7twJbzbsCs0%2FJWTCTcUtAGbwbdC73dBRQkrOGQM9W0PwSjco%2F7jWI2oAXGGtVsowBQjUMAsL77DrT2YRWF3CyS4x&X-Amz-Signature=ae61e67cfe18ae1692705f9174af8dd6134d23775d49ebdacc10f450c8165061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

