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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5VTVUSC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApxmDWe%2BHn%2BG8Xt75WaCqPQ4yQPJnIYj0xci5Xpo9E5AiBuDhapa4qMqz%2B4Pmy5MiS95NvPn5jW%2FPPV%2FmEp3hGqYyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMSwx%2F33fN81dMRlTwKtwDxYrdrxoc7CRJnXUDESptkJgKNM9eAFH6QiZkW0wL75V4QQvoPA44OJR%2FlsjD6WBBror0tpPst2MAQwzdkMRolHoCrI3OAJvIXFHTG7wjmLeOBrGsrDwn9gQBznDX70ZYsQV2y6RPonX5jPBnAQIWLkOgOy4%2Bf1jCi7N%2BxHY3p0WEI8y4eXui4ZV76y144K%2BlGJbdoIoLhPo3xul9yTVorY4FPOuPsDzOuFUR6L2xCnpljStgslBA0fwRl064jw3iYDrj%2BqPad34rUCo2QQVNflJ90Kr3ZJn70aw3JQu3sJnm6BzR688b3dBWs%2BMIM7EYBLQXQwtID%2BnlAxt62U9t6zA5joQrWgALh%2FNPoXgGJinn1bqJYFIK27X%2B7CeRbDSN77F1BmiMIEzb5sR5nXeM9kgUb6dIgNZHWVr9AXijkpQGn7JG8JIfVtbKtDS56t9fTexcbfmS9F2S%2Bt%2BIEpU2CaFAxGN2H65d7cfLb5l5DbR%2FczXPD%2F7wLwfCrmdFXYouG%2F4JtlMQyb%2F2xXixZoVAX82mmGZ2NAbLsvSz0EFwtkRAlgH943k5KQZJrM8XimhXm0MNO6vBtBfXdjfuYjLZr%2Br3MsbE4KqhrguygC6FRY0sbRrD6pfKv1LVcjUwgPDMyQY6pgEJe02X1cXGYvD36MWRup9ouHjaRegM0v7qK1G4jvtM2y1x8eszDl8cxCT7GE5Q4nUP%2FPKjeLzEoXUeIr34av1nloCtNA7x7Z5qIJeoEeHivZsUlXK3EpRE6J17wecIVTEZ4KuaU2qVSX5WEuKYvkYf28u4Ggt8gHMCHp%2BnAm5HYem5oo5zZjs2MRnRRcvVSnsvl0GLYIgfheOOePaReekZ6nOULf67&X-Amz-Signature=55a6a5a070195b058feff93b211cf3c12bbda754bb597b5a8e0d2886ac4ecdd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

