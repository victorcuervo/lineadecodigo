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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663553NSOW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIA1H9gkCVi3WKYFqargwsuVsa1QGh7B02dv1AEGDC5cLAiEAsb04U9DPyAFPMY4I7tRSp%2BlHgk0NmvO15IRRTyWp2mQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHsxbOJ9WzCpdloj8SrcA0TH6LAONLbfhNPc0c83dvrX7dBbzBKwt%2BYaEOLTz6bCd5l74kQH08UxQ3PHgVUvK42YJFl4m0fXZVntA3gWhOm4qg%2B1HqqP0PyRNOmmBoITi7mPGCaRFxpqajLqznilbqLdZg7uFNcy%2FRlCTm0MklSWO4NqrwiBFlhydZs2BsPNyV65697uO0SvuHsUZkKqK81Bcb4eBOhR2EbLgoLXNwdaqOaXO9ymjm0YWzxEDTEXk5dn%2BRRsPfo6WyVryYglduBLoW5xUPhpgknV14nIGbEOjro9vPUr3NpEAn2LyPVP0Sa9aHt0vLz37tLCp2BeZm%2FpltltBIP1j3GGuMU5vfA0hNrE1TRgcvEAiEFlEi1PM%2FsNBXwAH2UKxs5Qa3D7%2F4FWFWUae1nWT9a9DSbPh4DIHZQ5cyQRwmCtiJwcXceoBJD9ZmIOxr3x2owpt5333SbKAXeiCddn5rq0qm3Qe0xwKYbblo1Lq7HXNDgaL3B%2FAx4Mtq%2BZBrIXoukCrNSf%2B8zBoDF4ifaNyRHMjIPjTg71y3qys169u7PPWGIwFrb2%2FZfmHR%2BezSIfEC90hQdROT66V2IwZ2NPlriOTL2X%2FI0lqNvt0a9hCTuE6N0LBYv7qmGtQVG5%2BBaNFLPIMLqQxMkGOqUBo7xfa%2BH7CiTUKDwRApISqv%2BABPnQ7Aj7trMXT%2B%2B99ynBu2gJACzY2Cy%2FFVJBkcOxlV98BK9BkvkL3Fur8THjZH%2BKSRcu%2BB7Xv6gvK%2BFDhXY2oBrVvv6TaBiY2%2B9Jjxa23CilQmESayxNAbgjPyIs5T192f%2BwICf2iqVRB8nRolWy4%2BjrwSAT6F20YMq70LRX1ZnFkIRkRqJ%2BNjj%2F6Tmtd6z%2FJ%2F%2BE&X-Amz-Signature=5cc885009a0f21acdfe147349a57330c2acb1b8f48850640c43afb1fba8bce7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

