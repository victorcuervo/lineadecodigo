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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO45U2L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL%2FsD3EsrCXkrN56dRQ9XuTj%2Bwbgd2kevzERujoPRttwIgYVld1w%2B37Ur3386mbf65fZOopgcG87Rl1z%2B12tInqZcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMfniTEnjPGcDYrJgyrcAwtaUNU7s0Y6TB0dIlQx7zzDbBSQ0VYh7kOyx1wnd2Km7khcmPAuDD8N3j7f2A6rN%2Bozolzk8i%2F1poK%2B4iWVKyDn9ajkdQuGxjfnTeXTH7ZDoUMmfbCmZ%2F9RqaNUeaDh9VDKTOGryYG9LEwBhwBUXULEEzJnxpR0I%2BEY74s6qRiL54IrF1MwvC7ESnStthZ2mtOlw6ql%2BLwqkRaVaQDzIC2WEdLQVk50YL6c8VxqWzOtu6UMaVWBXdymB8xboyIK%2BwQ5JsXrXA3z5IhpAW80ON%2BSRlWTBenKHMv%2Fnefb7x%2F5lbh3u1k2CAXhvAt5DC%2FREY%2F%2F9K54sXVJeMidnvnIz8q%2FRsUWm1bwmUaXsTziV6AVBnD8hm8fyCzggyG%2Bt5Sp05TsCgYjInE8YvXa%2FIwKbZXDA%2BZcSPHDrMdGq7JduS0vBtMB466G0cDSlnk3ZSpgOGCZW89GbB0D4jXyxFF4%2BXRqQ8hHcUPm8O3BRvYxI2WkEGzBo5a%2F7jKYhXB%2BSJUeUS50b8O8%2BQ%2FNOVtUjdlaaeuHHPSlMI94YO8%2FFiMEHrxN5SfkpoRCWfP24iSxstRKJ967BmiXzRD1xONeIcNIv2xVAlSzIoiVTopF5LIii4Gr%2FWrfZj0n%2Bnlm2Gv3MMjyy8kGOqUB1TlPN7Xe3%2BOvcirzBhXoutI2dHlqQIsiEg49LD6nFfZoPoTRpVdz8LAWUmj%2F5Fjz%2FS7xzPx2jDmmEsdW9e4KWW2LRmZKWb%2F0lXehkhTwbbNPS1ijKvy5cKHske7SeEUJXujEPynrG4DlyzNPnvAsWGxTR2bNS4wMNyFGanDlM5XI%2BbkHe%2FUoKN4AJCsPiInblY8wXnX41NHYNQhaQIJSaj04%2BcDw&X-Amz-Signature=6b393890a66bafc7e8a4751bd2ca39aabe75455c775f6b19240300b3af87d4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

