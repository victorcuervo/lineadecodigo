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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY7K5S56%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEtmJ1%2BrieTGHJKsxarZgNIbVdqg%2F4%2F%2FiyTaGAbyZ1bgIgbDRsNX6i5W5dHXzEogc02t5r%2Bz400gwhQqGLrONkA2sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDcRKEi9%2Bvx4DV1KPyrcAwEoWvR1Xmf8qkdXb%2F0sNZ368c34owmjjhyKyKBGrs9IwptBDmt%2FClJywF3Llx3g20GxwXEN9WNmZL6wpNAWmETHN080TUMughJubQsvAlAcS2TlBj9QT06642cBDmTnDWiY2q4mM9T0y2hQ59rZy%2FjsVwvXsWHjeM%2BEEN4NLV66kyRBd4klclX824A%2BRjS6Dr3mo%2BkFg4rvS90ppFWv0d59BzOXa6Ioa9jRnOZ1GptRiXyBT5CtrzDmKm5GKv23njG1n4cG5pIgAWXE1132ZTzOupR6V7iisRzdaKmLzDFFpbBuy5jqBmoww2MgWajzQ1ULxtzZAo7oVatDW2QUc5HmSxfrG%2BTWXKmYOpQIg3K0feOt6pIGFPFZqPGeNFs968y6OHwfzk9p8qIZQAtVuNTMDpg1ZKNP%2BfOnDi%2BKvhJZ6dzQxq5Z5QslgBKpx56gXX4CgMLZd4F2ng6XgJ%2FiLRDjURMUj8to5nSjhriXgdsx6B4TVEZVJ%2F5tw3%2FbrKV30Jeo4soOcavGFRcx%2BJxQgZzV8mFjtneopUSN56MAJzdYi%2BBbdK4NxJ6KHwjGN4MFJ2BfM0xZxncPpAEyjPshN8GmPp4BwLNrM5gm%2FD%2FA9%2Bf8SWEFVPxUoYY3sIwbMKyl0MkGOqUBcT1eOagmi19D2R6JhPAMrWHdENr29EtvoY5s8jGPzozZfDsDBBm%2BrYA4cR2HJLR8oszunFr00EAwMNN6bAGnKAoo5jhlcySaxGBzZmcNmhgJ1%2F1Dv3xDJKdd96lrM83MZSwRYfIiQW7AsnnqDr2h%2BxqahThzv%2BUkOWqxUBlIBLu6ybvmBg8yfyQOS34uRkgYlvMmacebvgJEXrQOJpNhRdTcwxH0&X-Amz-Signature=7beaee459fb72c4790093980479d8dd502bd4ae8326ed0e28cdb681dee94446d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

