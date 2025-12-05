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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242NRVWT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbOvJo6CTAfrLHJrHmpryPwUA3HCyzU6%2F%2FEIEO85zc3gIgYY1VEDtv3w4szVqxfdCMe01%2FSikF2mEs4t%2FMUrCP5nIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEZiil8Dqhwrd71hRSrcA%2F7eDLuawBZppvfde5rzIVAVuWTwGy3yLxiOaWZhLfa%2Bd7dRORfDAIPLLSethMk1An7tAYbe2YDGVRb%2Bai4cnmpmuX70iuukOc7MTwdjSoLsICKoYChyujyQnnwv1Bi5sqE4Q29F89DxenQtKjm%2BkFkwAn3eAnfkQBhobW%2BCYCMcvL0Ib%2BLkkDnaDQRo2QQmNH68WNUsjNNhhKLioRMEKle2hRdBqGNBN%2B6ZW%2Bz7YysavoYSNVdxQtA98cGCKfajOKwLKKftaNRh0diVq4vBexowISJQs3kiYF7ncKzaLzxZD%2FEmRRavJ2a1QgCkYSz8tzn%2Fbyh3u%2BLSj2eH4FpQyDNVY9YEVlD%2FTYhn%2BVdbpnXI04Kt%2FFISBE%2FdZ%2Bh0%2FN%2FHDugr9Nz8%2FOSxuxWO5C2VDfcN71jqROgKPDHebMafY6x2U7VK3dME34q3rI6uDrpCN9V5saXliwyUMvksEC51D8%2Fe%2F%2F3IgHXlElcrMCkYveYG98Ky1N1vFhuQH2e1bSFgaT0p76woxC%2FGW%2FLJFMYLJzwvCz8umKHnO5Dr0OC7FHaFMWQSW9q5kIei%2FsOsTCc2XrJuVkOQQwf%2FV7JaJsBISq%2BnxjSSZVPirWdJvME5caxw%2BCj%2B%2F8HrcMxBn1ayMOiMyMkGOqUBEokoLviOzagrybV%2FP%2BohHEz9XpAliPigBO4Tf2knJ0Pv9e7sfN%2B5RFpha8gNmQiBl9A7tpW2MiK8c0vx2%2B5yy7%2BM2RJOQUBdpQyE2K7QSUuRa9kRzYpbxjr1AynLOdbkbXJ76mK%2FBEWEd%2Fbx3KJsWu7VFzHJfW0Tv%2BxLsTOQIM2Uxx4SliRttUPyz066QWzkcxYUYB2eu%2BGlExF6mHwu%2F6DQbrsq&X-Amz-Signature=0f1b57953e45d35c6f57088ab07a6fa6c6a310cb6ba7570a80795857357e80ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

