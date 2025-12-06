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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCSYXUP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrqqxdFoDp1a1G%2BvqwaTBSs1GEZGIhbldI4TbE7S%2FwjAiEAvxBb4%2FFGARpPDFR0vQRW9W%2B2y1mB3Or5eM8vp11y5Q0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGnDUqROVmxZzsWTvyrcA53q5M6Ya6EAaXbhyEkK0gR%2B%2BR8%2BGCpQ%2FgACfdSm4%2BncrcPXnRKzVPZ38ROJ7u4eBNFOuepzk8DaC5n1mmFcefxlq927rufG%2FDYmz5E6Lovl7XrMX3eov2fJsOzh5ZRdy%2BOzF2X1LwnaNzT2PPIZnu7V6MJCn9QhGZik1Jwuul%2FjRKOZAVbHpPA8TaXvrHrXWpNOyFGqTn4sGMBw2RS7Bom5w0bKivZcjLv%2FD9n7SSs97AHBbMDDOjln9E3OeiWiwlWGPpNUW8uuvWixP%2FKZGMY5UyTbTxbSP1IyXFU9hDPhAnaci%2BtFLysfEHLu1wZSJnzyITxPLKE9DwMtsqmwaUCP15BPDCLHPhl%2FeHLaUP3as61C2RQXfPUADO%2Fy9OQNIrru6IQQrawQYGhQMhD6SZ5pcylfrRx85MVeR%2FdH8x%2BvLEap3251HaWAkYEIAO7N3g9GrXPVc5GNjUCPk1vVwDGRNVw99sHa8SZuYIBTKBZHcKiMfPA5X7dwcFRBqJtB1IWRW9TIFkOQs9dzBM0VrtnYdk2QswAkdUSqHQiPxIKU%2B4DRvqV%2BLM6cqFCQLlum2WkwSJjLqyY8ZSFLJPXB4Ce4n6DTBg1VxG0xCccSENGmhqRrlI%2BU5%2FNk5AmZMM2nzskGOqUBw7Xpv28kjJVXAflNp%2Fg2rTXqnMu4ybVufe9rvkPKnvOEgcplYm5zLlI0XbHwzeM2yT0w1gXYpCRCJplR9%2FdUC08wQf6iA6YL%2BIeCFA6DKVq5Ruxqk3yNLclDuBy9J2Xt4ZhVYozm02ssv9xcN%2FsgfurBKtc3G8oPeQXz14%2BkXh%2B0tPuN8QOv9UrCgdbeAlAP3McTw3tDI%2FI4Yi37h30970BGt5n5&X-Amz-Signature=fb862f66af14237b29e18aebb0a25eee956bb851c6fbbe796bd440bbcc436502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

