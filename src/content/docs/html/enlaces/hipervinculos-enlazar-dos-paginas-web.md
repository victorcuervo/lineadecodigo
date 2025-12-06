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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPZZRTI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5245C5aIAKdBigiBqO6XKA5EfanIhL9llHUBFiAHe1gIgDFUYua%2BTHhUyNexC5XgcNXk%2F5HTjV8kuX4QFwFowSzUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMQRl3Cc0qiUW95IACrcA8%2Bo7y4u5Hml%2FrKOIDW4R7Png3XfCZmyYpg2Bh1FcxxuaQXxjCjRO7RGUyfbD%2BrlN3%2B4Niv9dSKRbH2KT7lH3gZOE4DC%2FncDfd9GZTxvV5wgr8t4EiJWaOy9BGKqYwn%2FmBaBKSeMLR4KQ9vMWNxpEpuzdWv8YO1wgmZ%2Ft0bcUxrSY9HgAABBxaKXsT3jy9Gif1bu4akyipcju7snCynHTBbnUGyMPH3hZPennkIDFCMSL0s22wclqnsFavldvVcDNNOo2hFvdzpBlyj1DfifaFntg%2F2dnM%2BuHFKTBvMQ9iTP15rEHrFLPnAy6KJegsBuxesh8BFCrTZUgZIay%2BPCpv4n2DlG%2B4H38Lug7KLTbdez2fUMwy7V6JRmqmPty86BvITdUglZZyduW6AVp4ZVWvL4XYbix7SI5BnWI7a%2BXt00Nh36ROvC2YZFnjps7QVrZk90bSoWQlFL%2BRzsxO%2FXqJEbpD%2B4NizjLxLKG2UL3FnKc4xPU9kZG4KgZs8hClBzOBGnFlmwXfQ0DfoIpAQAmOx%2BMCqPCFb%2BVNJoLRCTHs2R9MTypscD0NeJcA59DNAjnu1lrmCfFFGhBtEI5UktOSpwz7mcjSS%2BqXX5AoYeo%2BY5Zv0yll0qwt4qEBMpMITU0skGOqUBH4F3K73D%2Fa3OTkv0DZZPOIWJKnFWiPDyVoPNxnOMTeH3I1HAGWFhVtkx1rWZl%2ByL8aoR5yu8gq68WBgjBQGKKFuD0bCQMeX%2B1WpD%2F2IDye5%2FPcaXqwDTUrUJpXMHeE82Bx8NwyW85zSh0CdDQptdzlTPXpCA7GHrqxNi7ziLcLJIXzh1D8nCqKH%2F8JOGpOLghhm%2Frl5rwzEnbyrLez4dNkIMq84%2F&X-Amz-Signature=5384825e88a02936cba61c3dab59c4705b4a8e6fecb1318f2d58b78c78f53d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

