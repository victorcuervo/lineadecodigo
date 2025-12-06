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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3U5QKE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHclM8FRVG8xAt%2BfTXspyZvtZ%2B5PBNojxRCZCPLXUpjAiEA7KdY0nlHCxca1YG2W1SOsdLyj2VrJ2Ab1APsnbwbLooq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBA%2BPC4IZFdhTJV0nSrcA01ROeHkdubR5qZLOrjOXol%2FtKNR10LzkBUsA5I%2BkzesjQGEljhYVBDBFdI%2Bd4r1MgpiD8sNO%2FiccB1vvppG%2BHh%2FDZbPd72thyR7TSj0x2eUhw591%2B9AxDZdq%2FW6Fa2xzFf1oFdqUrDVJVWYQwtvFFwI3T5FBw25eiySU19O%2FkopPs8EgoZQRGcpbzprVq0AAFZ5n4Job%2FSAQvxnBtlMfe6fubf3q8PoKN8n%2FfgI5yUTEnJNM1R1JmpR1dQRbNkmIssF9KPPGhpy7ZCTojDffk0MSGa43jApZdFoxq5Y2Qgvwb14IpVQ%2BN5H9E%2B8Sbnl%2F0hrU%2FaffPzOigUnuo3IpNtitsBLATWa6YUNDDqyS6qpDrFTM5kpx9cVRwWpJs9S7PJLV%2FbNfYI4i84EFBvsb659Mbj9WnTe55ebwPAEgRGA2AvVdCDJhLpKrAiS1TFNgdQajkB8OYjVft2YogXc28GKB4xWbdLFWREIS4CpwJt0dBP%2FE8g%2BtKAizlwOe2XLa3fVXZbHMLQ2ON%2BLxw7RLfkVe7vUgDrAyGVS1ODCFqe4xMvIaLvMeeG6Gv2tB8apfpCiEs5DDrqGTBHcfap33mexg7GD0JUorfgcODmZzuLw2XeyyguPvGyYqERyMKLT0skGOqUBk1e5vnyX5sn65XrslLabZ5hgn1IE7vj75n0rKkmh6Z6LMAN5%2BIcqeIt%2FawS6%2F8Oado%2B6S5Z8H%2Bvk%2BrCT82HPSbEjeo3mBSI6kohGPXcVEGsREQ%2BW17PKfQGDTHc9M74xrllVpPHe9g%2FXpGI2LiCf0eeeD0OEGB%2Fhi5poJUiLT9Pxu2Bm53iJ7afwKIM3WhcPbnJJUDXld7c5XUMOPzxYX5MPTF3d&X-Amz-Signature=e065f9b44a77e637cd1d28fb3efb44b3dfc887526da6184b81f9deb759a460c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

