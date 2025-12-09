---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NEJ2EFW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuHAqTIV3VOfdobC%2BBgxUN1vNKyeO06VWhqy74CZkyRAiEAhkEPVEJdzEXa32RJS5QRnkcYmt9ujZAQyeVQ8yf%2FFLUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRuy9vae3EkDf1CyrcA6jMEyLadQmyZ2EQjylCt6pARVU8tTE33fi2baios9jchp0doHh6J5hLvBX8e0ROdhWi1PCyTCX8LGJhD4oI36oHtpsCz%2BkHEL6HgQDYOBZpUNikftwL0l%2FUuphtNYKSWcDaKRkLXzcVtJmX770PaPVXk1S%2B7SMa4Xh%2BEefmeuOI74ISNEj3qSKEed%2BbCqg0ERYBBPNFGW0Fo9UH3Ti4OqEdO%2F6o0aDQvDJVi%2BKsA2uP7Raa7d%2FVEPy8W0FI3ZVs16yQR%2FoByFPCt8wD3fOgo867pHilPbUIgt2tI1ovaaIstSAyUzbZrOypp1Bbo4YYOjki%2FRT5iw7BGePoEd6pWQl8XYP6qP2k%2FFE62vAPSlY8pErnzJWvEC56oN0J3Jt%2Fztx%2BWZNJUBrJIk8Gbl1azkcVb0oG8hGTfkLwm0d8MriNijjD5vxjD2%2BSaftXNjyMpUBv85QYih5BHq7BR8HFpcMc5wpM74kTvO3lBMpxQzW5PHFBa5SctAlCRXWhqC205r%2FjXiFv8mntS5hfvus5M1Q52Hm5%2FM8yNeQC1oJ5JanvL8IB%2BEiX1Qp%2F2enz3EWoDltZ5XH8bHxit2pAtAOoGoduFuX6aPIfZWGeUpD6TP7XCPR8do%2FLF6nya%2BQtMPvc4MkGOqUB9tMr2EI70dCXzX4s7b2wRaoY4L8jmBwHMC3BudL2WKwNh6uUUbzlJVp3wd2XcLsu4FusKAs%2FdEfv399EVaMClCRcKCHZP61pre1tqLIXwYb18CMs7ZF1towgs8ushhFdRIIgDc9p80v%2BqO3Jtgd1ED9UexoV9jV1sJcXDVG4k9x5q9XLjng92n5GqoLJ1iVYKg5yqJzTohAg02nkHCdeHZfR4wE3&X-Amz-Signature=1380658585591656d31ebe560bb13fff4f9a0627ed64277bb1c6c67cd328833d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

