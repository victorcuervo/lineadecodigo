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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REZBDU7V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T204308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUEByZcGOg0zEr7uLe21fdV83UWxFKf3x9HD92OGj4vQIgUni8tjsH8bYx%2BIz5Fw3AGq9R4lvQFs4S2UsijjSox5cqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd72jll6nkVjE%2BCFSrcA7S%2F5I8yjv5%2F13Y%2BKdY97lVVVmE8LRCFzveD7N7Ur71rBdk4iQhkRaJECimq6PbNo0WlHFqoD6NI2PIeoOqQXHR90h25J4WrtSC%2B785Dwj6QoOyHcsbBo9YpYJoGwBcQfLvly%2BEJl6VdAgbitn4wArvLwiAeUCxA7nz9I8A8nA13FxqXsO5BioOHdDAxc2Mu8y7ba%2FQ7t6lA93PJvR6qZNGhxAekWBXBlUTbBDxJ2QpMMJpYdlLnyjbxdbKhWWpIiEF08WGTRzd17XqWXJr03d%2BhjWe19M7Hj9%2FkXMfbfvHBNc0J0dW01k1tIz6J6pJ0RXcqk23igwwOn1cCwdjEc5vvawSYG9h1Apb6%2FCT703bcCDih%2Fhq1yaFeR4FbVg%2BtOkIf26GFptI5uJ4ISwNZA7OQ3N2Rxl4l%2BMze07pdjq6qtZVG1dh1FO93Yp%2B%2BRDemcjaYazKQns6QArJJdK2Wzsa3nhveKILI7LyKsEWLQxt%2FWVLZTltH5D3GTl0JERBgEtG6QzI5cP2bEpB%2B9AYvf%2BD8%2FwdBZizXZ3JNGI0ZJvWEZXBgW06GVMYgIB9nVrrB9fhTpRfP9KyPFFsmyeKfFopzLQtHZG5NrDi1yKm3jNE7IzXkxX0Ziw%2BYCXi9MPH%2B4ckGOqUB90uDnrJ5f26zoGcznAbTJCWtvvP%2B4yNSH9%2BXDHVEFw8lqedna%2BfYNW3gF80ld4bF%2FySpTPmvMD7c0XPiSaEWNPjRSV5rAIuJsztnS5okhCIgN9LUwfMAwGHAJi2HdTS9YZc0PGtuziOEzVCgTtoysJEgG1ne094du%2FNOxItGP1T8hk1m3juJBF%2BjZwGpb19J5cD0SPyROi2qwZd80z8EPH%2BFJMGq&X-Amz-Signature=f36a9f59fb0f5418dcc259fdb05aa1f5520e479dfd242ccb39777344d5e23cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

