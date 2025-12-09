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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEZJCWW3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD65U37LO4qCefpybMFBE6e%2FDktt5eKHoEWik5ci1hDawIhAIQPBs1x1iyay1wyt4KcaonWou%2FprNwPqGVGdeVwueQ%2BKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJXCcOLmZYiEjvzkUq3APwt92wvYgC8UfZWy2QpMznkfmbPJS7dtCfD4msPeS9tG%2B5ge8VwVMcUswUF7nLNr9IHDJx0p00rY0Nh47r7oUFdsDmYMTg%2BfjR7aOY8WbwTrjfy%2BKcrQ42jnatKOVdpyxT2gp%2FeLaCuyBcsNpLCjrWFVhO8%2BBLqP1%2BVJ2yChinbOoyO3psj8UnOE0%2FMvki%2F5Dg%2BgJ%2FU2E8%2Fn0LbC3PWdtod%2FntfyVJ64jxsOmIBJ9uoL%2B9HIdbiU%2BGrFn6jZDu%2BW%2BcOTnrEGd5%2F0auiX4DujxFswBIVl6%2FV2D9ZZlzplKpe%2Fuw7%2FKnJr24mkJQn6gX2OdhxrpE%2BpTI35N861C81T5GxwDVtBgppm3qDv5aK0wgQhO0OngWkjHtWvg%2FQt%2BKuolNWUllKQH1HwX1e8T4fVMHcpjSWsiUDRUkl4gIbaOy6TuzxTHkse5Ny%2B6dg2wbCXWcV2bTM2gqpbRaBYRcs43oCGHjUDcRgJ%2FTh%2BI%2FCYxphldZu6Drs%2BVEio4Ba%2F2wTksxUu9wuusV64emRTrnYd8BQCCtIRAIRN6BuvGWAx4x%2BD5IJwgqei1BiEKWqVSWjyzBjEDNbu7I1ARvAlRjoT7BoDs6%2FPp4cNYfvaW%2BuXxbeo%2BUm48YouLZkJZPrzCp6d3JBjqkAd6u6xvp6aMCbtK1H0uZ5qeAxTDCi5mNOFyftue6Kj0vbqGULqdfn6jCkFryQKBfurLJE9JLPJPP4vEDn126EOIMk8QCu0IN5j83KhmLYOTIEOO8KjAggsk%2Fg0gnOGWusWdj6nR%2FnVhdau1mlnmK3BQIR2IqllQODQmAy7mZJFcolQilaHqYgrjb5gtKutt2SnMzQbs6EpJpbGsAAB0ZmIjcFRBt&X-Amz-Signature=902e819d8ca13d8b99b871a9d6476d2d8bc411e28fc635700b546ebbd31a22e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

