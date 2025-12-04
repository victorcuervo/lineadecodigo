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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGPTOG5B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF7kgQzvI%2BsdLuQl7Eeekc2NF6oT%2BuSkHm41geBsUC3DAiEAljckFi2Z0bsSKJQTeI2y1R%2BUB0iGW2Yt0L2V6uUcC4Yq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNs9DFnje2ylABKLXyrcAxRirFgv8J9xE2Byq%2BYs1w5z8h3zPfx7nsq7RlEXMMSarkovYydELc78eXH97TV6cDf6q5YZLO%2FijJb07NW%2BqIzf9TUFpc%2BnLOmKl6pGahSAQHxk5gz7vQgPARkJE4SI36%2FUrv5%2BueTR3jhgXZUcVmY2c0dNWb40f0DOSSuNLvTbGRjosV0aHzI7uV2XBsxbHoAPFudETzAanHwu8V2TAMNpuggNX2b%2BTxEIO1YS6ybSjjdG82DoDPQkPo7c69vp95BOGYz4NsmKBV1mLTAMFheg9b660unHCO84TmNSXfxBykcL0SixM824ew8vqs1gztZe9DK716c0ikVxTQn5P7BHbPob3pxkSKN%2FDKJRVHviE%2BSJsO0BwtohG%2Ft8kPnhkJ5DIhzbVD4b7oioYmbgays31rdF7HTjbrcPsmoHn%2F3kwXWHCRMpFKUG7VUzie%2Bq%2Bhnoz3tCBfscyOFczF%2BWV2mrZE1wW1zZYLW1R2lKVxZynyA%2BdRN8Ptfs4CMuS7Q%2FMvMPm63cyAekWejQRlhCp5T3jNv1ZEaJYTsunyfCNUjwM5adiAepYUMR1gk9aOjIwPfada5qHjuBbetafCL6fmk8GG3YRLEgfpQXKSmFTMWDHQhdPkycosuU0J4nMNqQxMkGOqUBXPuBwjInp3wGKVtNbg9WAW3Yb%2BQlPhQ3wfLEDnGVAYgTw%2BFIIOYZ5nRZTaWaG%2BfzjWV3cRGyWrHYZJi8TZ68O1vsVh06rJYGnwG6MrKe3yH1k2pBlZtyZjunDcL%2F7MpuVE2UxBuGPL6Hh62XangWeegDjrOHrG270wPyjgbSUAA7LfqlG8domjkzNm0eI%2Fg8%2BteUt%2BrOkXK9gdamJ2DUTusDriW1&X-Amz-Signature=dd44f95586586bc9b836a352895c1b9352e5570d97fbfea4d1eb722facc76fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

