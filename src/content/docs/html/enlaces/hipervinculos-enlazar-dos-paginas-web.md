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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVVKKRMJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvjepp9wLs1MGS0sLnQR%2F6Y601jZxH79C4rWn0CW4dXQIgcn%2FvIjP2fZ3SHSd4ZBV8u7EKViF34ubruI%2FwlJ7ToREqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECtElcV5OGbaRLW%2BCrcA7Xz5GvmAqV%2FctXhBqh5I00TqpYzIyRdzRcV5tU4bWLRuR4YmiqP3sLhEfU%2BbbCw1ip4wve%2FKwOcOq7HZEi7VkDwMn%2B7%2BQoDHmzHElZ719jAZ%2FMTtZeqGmCduN9x1nuRgVvFpdbICwlr%2B5NEXvcpbtPTaWKZA%2FM3RIw45jv2%2FXHEOj4U3FSRdX%2BnMtePseUTyomHar%2BUVQCWBE5iLaGvwLf5Dptbh%2FqV3jZINdqpW0lmCkl9dmK71J270aRkOzWSPxdvOablFIUxJLmTbmYknRfZ7PhgNqJentJsvYmTQGOLCBYFby3vXd8G1dXN2sYC0%2BIUzU4XZTKmpLKTn2JqiP6mBXPwoGjdoOZPtXlGSxVX%2BDxhBHhFM8BxtSy2Ym451vEW%2BBr8hRC%2B1FYw4n7LLsJm46vQDBlF4BwtFaGKeRQgLzZW379nAGZloVZD7xJIEajzDsEr%2BiV4IeayKkYYIOkUonURYIZD7GTMuQyWu4BopupaZlBwqymporwonA3lotR%2BqydmG7OUfGE9emPWYzBpMaMp4AFW28ssjQzJLMuSmtit55HWt8%2B21o711YDZuIbFZOABXt67%2FHstIeRn9LEIdrLo%2FFEsgKoGnuOb85hNSlQ6HtSPTk6TPINoMO2X4ckGOqUBBEBo6vy3lV3hbyIyL94l2ERKJsLxVe%2B4y3OmESX2pf7bHd5qZWcI42%2FDsELq3VLhM53Y7BouMuO%2BI6xGOGZPe5z94rbLohYljYAfm4FJ%2FRcjtq1msRQQZp35pFcLnzlGyPxhiUakLghFoxl%2BJrOUqSAblWoFvuFlsJyotiEaOJDCBmMiVxLvLvhXese4STXenjghS8FvHW8pQHY3vTbmuITtDXJK&X-Amz-Signature=bc76aa36d8707a26c383c588656e768c2b1a1a1a2a1713a6876223f157c79643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

