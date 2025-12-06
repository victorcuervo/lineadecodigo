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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWWMU7P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfMat63wvVqvunshFuDTXh5DORXz6RQvgrwTGkLrmKlAiBhOK769SKIU7jx7ZTThrGUyxZoa0ykj9qxM2HJfMI4JSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2Bvx3e%2BbldjzwyYMiKtwD4IaTAuriftTF%2FsGNFc4O1amMiV%2FjW%2BHcKj67ubpGAHrWbWnCBf6o4I%2F946ZWxsng6lyZaprH4dVO4QZ0DAP%2BMYJPKAkc5MiolB4SuIJ%2BK%2F0iPVuEG2j5rjhCBSPTxkyEArnFn8bgPeQU%2F7wZFwiZYjutagzswelhCkGSFPKzBuqWQKmSwoJOqzkbtL6KvnAeYX%2BAIfPoOp68OMp2hSQwX%2Bs5SvoVA6%2BibAV2ZlqoaBZ8wQzbKtyDgyAwWeinHo%2FX3XSxrgah8dQJtoRBzsHeVVco59AdHqPO4STgzI27cWybYRukQJi3hLbv1YnF65m%2FUvMwJEZE68GZpMc63fY7WLjcXglroOnZFGo8eNN71OEXc569LtsB60ItOc4VcFinHiqLAErPn%2FHOu2LSufgYdxEjCXQn7fHjDRWkTN396uKAB2xx2RbvQVOZnuqa6H3ZJiMISD9M%2BnIgOV9BTTZfGfArubZm7LUmINe1hMEG2RwiPqeOiHZyQXNR8W4boaH%2Bu2mQiOOpYxcFqlZZq5%2FrDhO1trGvjHKXJN219Iu%2BtGx0JJDf1aKuE49eiv89h61vgckbgR4S9HEnD%2BRlKtc8YODkmC6Nqf6eCRRqkW827SBybBBn2TZeQbtxhTow47zPyQY6pgFVjTYlVxFTur5SQMyKMPdQaHn4C%2F3QOtkgDJJPGPtsTClR%2FnSRKsfT2j4TqjEGZ%2FAG4wocUE47VAknvUmLYymjYtSdRHOhc4E91VazIPjalk59Djacehu3OsAthR9ZhJn6FvyiQusk6baLu2zkxG49G80FFKTAMsVhUdQHHqZdkfGBEKFzAbWHnjUCEBB8CyjZimFjVe%2FgK%2F2WB4XxggPzW6%2F2Etcu&X-Amz-Signature=bc5a94673681e5b81aad99762aaed42eb2a98bf7888a8e8a7e0c4e2b18173690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

