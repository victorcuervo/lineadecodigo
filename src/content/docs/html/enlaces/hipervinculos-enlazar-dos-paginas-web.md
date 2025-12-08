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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKRHSNW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDi0IA4oku%2ByVn0QgXzATXXdaclAIb18p%2FmMMRYgz8uxAiAOEdbGs%2BGQASduZGqkh6dLkJIidbtwdAYsYiooFex8OSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyE%2F3qyAr7bugZ5n%2BKtwDaa2pVaIAQ%2FZ40sC6mPt4njaAiWOFVcS4BmW72ljuRZI2zo1dGy11vYdOoMLP9N2G%2BtVWnNNxwLUNcM2Y6HqOfjMTYmj29T8LPnHsrZvBXZK2EqNoG8RCwfohfON0gA0daKsd2lLr5EETvoNStQ9JOWOUFiuK9aCfxAQMtZFWg%2BlZrozCPXYYr32cSs324imzV6eBZNpEhAZNpnpJ2slXk%2B05q%2FkruMHuw2j7fRsm%2BVi1naSBTVciJ5C8WVbdcBNsBGCeXtLa7an%2Fa0xIS2DYEvjjkweD%2F3uqokOT3%2FfONQdYbPxfos7ztdf8FODICQZLRVaTW5EzFZZV1iW%2FI8urHQ%2B%2BUdpVb%2FLXGjogf%2FQJBg8hYCrRmFrnhGujQGdjTx65dTBBr66tBH%2FiHpPOJQFloGTm34B%2BxIdG3HZEwJ7YIVXZreUG0BjR8DGvHGD0GaBY5UNkXi%2Fc6OelvBlGt%2F%2FXZ%2Be6LvBO%2Fz1wnxKe4l1MtX9GQMsRIlAs9dyPIqoGXk8%2BpiIK4%2FmFpV0t9H9MTcM%2Fdn6lmdQgH5WPZVAit6C7qrdWkQMjX9ILacz132Kv18awSai7mB2bubLiV94ls75qfLVkupZC3hr2xFE3%2FWROB0WVpnBsX9kpg2yZ79UwxaHdyQY6pgEh8Rvrn%2FW84Hj4Gk23FZgHKfGgAWUIWQvVEDjKJ9zSzeVWR1IirBo9EMzNqV5ImXNHfLYh8WyKMgTOR2C1%2BkTgEE71%2BMBSv5WK9s8Z9jkNBeDt3HBFQ8SO9Hoq4N%2FhfhgcSz2BrUGBxNqgiSHIjgwn2kkVKVXDKWI3PQHR2sUUe5KeOGVR0Sjp85MST92Sym5NJosa0ZS0HaFK2T97fgEcqi7T9UnV&X-Amz-Signature=cdb71bc453d3c03e473f3b0e26fa37cfa05b25b295cd1492296543c0cfb6c558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

