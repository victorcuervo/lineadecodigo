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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMWY2MZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwNfK%2FghY81ctDkhIoypY573Ojci5wMYcUKKisHBKjRAiEA4u%2FWVZ7Ma1ZYmYCqmYhLkmZAdtU6KNHX%2Ff%2F%2FkxUU%2FHoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKzBZLebHcfuwdbjSircAzpMSKfqDtcGiD520sQW1Ec7Qd2GvdsQnHU57UZZroKeGZ9XGH12lUdjIxT8zAIy76wl%2FwkJNUbQnCrMOu7aCGs9adhoGR5mOLqrJwfWwqPKLmzW7DR0waJHns5CiSWYOgwBZMWrMySXu%2BWRW8j%2BheQ28CQR0l3xgyJm5sMLI0yX0zWgw6lZvokVxeglbNwapHCyjALnOBFx4d7U7WwGg5THT9%2BmOlj8PZlKEA8y19hKf%2FTcJqrhL%2FeqtrU1h0XxztpWhA5VKuddeB%2BqUODHsHegqvakOBuZqS73ixlVr1cQBUAYTKt5BT12GCd5TcWqXZOkzmudK8NxCcHXixTtBqeAY5mwBSQkSCUL4zwFNmUXxsDD5O0Y%2FZwco9PZ%2FSdVJ2DAHIbbX%2B7tGExr9cHTnrS4M6MbYDM73DEaTKFg3V7yIpjqFQqocOlmxQcW6RWJQ1Y2IQBNT%2FJwzpWlpS7jGgJtPEozN69lnJvmqdoGzAq3EnzNPyvZJS%2BB20gJa%2FcEmu8AhKyR%2B%2FCbKUa24CAmtaG4JTz8TMsCS3fdjtt8D%2BKB4GBvDs0YAcgb2%2BxsS0yy4ZAbDSqqxckSV3srwhHLSwwgDL5HHoDiwrRHzXH7jx2LFf%2BY85ztBbfBZ2GXMMTM0ckGOqUBXzf3g4R32HYepVo1WsqZgtAT5iFioITpFw%2BOXtbHNoWArHaIptlxV9OfnQfPHKVqyca3FaF5Lnb%2ByN0PAbfTnHuefvEUIP9kFB2BSPbpW7yxwI4TNZB5wYl8G3ymoOvFbASk6rET1XL%2FgleEyuNI0PHnz8AYX3aqzzQJDTUCnQGL2Pw0c5RqqNlhLAEy9UHGUimg7LpC%2BSQsNFI1pNsf41XUZUn%2F&X-Amz-Signature=da734efca57e45d2013b0ba54fa9085220323964bdd6552518796406b84bd92b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

