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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOYQN73%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9%2FQV%2FbhAUJsGuBP4qFZuxV4Cq1IQtgvD5EmvscwiMygIhAJcbB5RyyoHjSRFgEDd5pVJ%2BNR1Cl8MDBoHVvaWshsbAKv8DCE8QABoMNjM3NDIzMTgzODA1IgyO7JPxeAMAIk80pegq3ANQ1LYR5iFEtBG7IT1Aye8vAJ420R%2B8hbNMZpww6ZLv3C5qd47n8yF2OpVOifdC4hfjSwMvYesYyYkOR8cQQq%2BagHB7ErB8zxLbH6x1KyfUjQyJiPY7EEUszs4IXEd5kw5Wmf%2FwE3IpEJh0MVo2nZK1coS4Q2AD4T%2BilbJfsNHmGGWs%2BWHtO66nk2jwHndpdDvcP%2BMLioVDyLRPo%2FKb%2FzM2%2BBPh7xbkrT6KyJmKEI4IQsh1djYBqsxNLiGHgd%2FXlFeijw45ERIGLjA4ZZys5F6krEakgfHPoaPIy0UdPhkhaQBqjMphYrzXmqkE5K7HNtq7vZtb1NO8vSRT4u9u3Bwt4779cWGWdMINTq6eADbTMPq71K9oCFrGvpW0MWW%2BDL9EBp9tEGtXR2IEefr46JNmh2NjuGx%2ByX5xWGL9OZxqA%2BIurVlOl3JWrwvEOxb1Ldf7ehRIut1DE7bCOYktnW9oh2Y%2BcI%2BrqDpMmMD6lBhpvpRyAtjOJh3uBn5FsJaOOBK4JkOfauEFfX1qn9I0EiJD9fL6D2muB1tVjuKqtruYWM9QTD5%2F58YMUD3grlNRq3SQ4vnrC49qG%2Fhc5dREBiFfRHQ%2F3dD0OIZWMNoV6LNY%2B9GwkP2V1MJ6jOOv%2BjCMjMjJBjqkATS961ehbGzDqu1Yv0%2Fbb%2BBPqh0Yb4eVzIsF0TiGrMZkC0L2Vmkq5gmtekw3RhPDvJleR%2B5cMxrhfms%2FINV8GpCtXWHrNEbpZK07rCg1qbjCVPkDIHnWD2EdIvwPnVbNfsXb36fbpTD54piDofgqBAOk8V5YLgbwaF1hS0%2B3LXBrzzpNyG8gl%2BIjFWFi5rB1K2t3JmxCuonZgQ0itF%2Bm6ee4iEm%2F&X-Amz-Signature=b93b34c5f535f181d127158178fd7f2993358ca8a715195ce3989425457219cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

