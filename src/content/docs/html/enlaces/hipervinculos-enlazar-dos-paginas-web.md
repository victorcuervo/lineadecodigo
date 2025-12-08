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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIVITT2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMvb2KIKFoBDcMX%2ByN71OmD89%2FuRmhhAVK3imBffi4MQIgUciq1TYjv7qZhOwNlfXjutLD3IsGZdo%2BkM114k6FBbkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBA9raskCuJh6ghxCrcA2nYU3TrV9MgDHzoQwLrTfGzaGBw7hu1i2Q5wnt%2B6CXS7BrEbeL2gbF9uyRUI3WsSmxUdqU972PjMxL%2FYhTxM3PtJSTqLqi4MzLt5yYfXN8IpI%2FNcqSeNWFELjvsmOInZ3LyMRyew8%2BWE8IPM1jleuKOym8QbbACKboE6f5vuqqbunIVJw6Hyz8z6uHVKGBDCP453O%2Bhnch1fUzB3pZm6J1FQPmlAZeplzfYip5vtUOA0E1DGCl%2Bpfbhjc0wU6MsWR1L5c3OXKGXHNvrJgdSxy2rG1mVvdeOLiaZPD4xNj6UCrXg6pwNZxcuPdEABmIWYR8U1sJFbhbuuAQzC3xTyh6U44JlzsyWz9UDBBv%2FLKuI2YXRY%2FawVNTEBgncdpTMqI03vJo4Brv0DqY4TZnHjlGFMWOxTWZdy%2BTTXQGD1g9HFLH56BWQtDDsU8E%2BSF7FGNLVZ8d%2FzCU8rpAx%2BHABnzjj9ex0Nrh5gzeybvqFzZ05Q0Sd9P5lCUhnCOFb48fJS2hbAK%2FUZyzc2BG%2BozaaUs9ovSOmkAh6JMjhic3lQqWaBQGfdpGWA%2BNvk8Q2ws2TW78A7fchwqoq0YNUgztnLLjxZvNuYZDt11PPK4OT%2B0jH%2B%2FpcMRdTO66buczuMKXv2MkGOqUBNaT6bLwMwaxQh0tV2jWkCXOoirYQ%2BILgRklZW468uf8axRB%2FbHi2%2BhpNMgIFXVP9UrcVm4GyW9qHLTVnLGkObFwb1e2rglka77vCWW5HpOiuH1tb5hLvog9v3a%2FNm9yw22T8G1X4lBAqY1qWQhK7BOip0pPhj3sbBBLMxM9jPtqo7CkqCgtfYVqFQcf187S3YrUwGrbYuKDDfDnfny1e6s7KTbcF&X-Amz-Signature=d78a3aa338893ba286cf9dacf6b94ba8a54a3cf9e002623fd023d3c01a1dc1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

