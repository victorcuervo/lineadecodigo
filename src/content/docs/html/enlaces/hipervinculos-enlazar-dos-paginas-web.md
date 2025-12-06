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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRM67SJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCDhzyJI1x8wD2wJI39rqRSB7wFGgzCk81iH1Nv%2FCwAQIgbJQ%2FxMh2pdR7Rodd54Uz3jmowz%2BfYUvClmX99X2t0H4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMWQO8WC%2Bz4%2BfZjwCyrcAz65aaa9%2BtSQIIAVjjZjGR1PxKfbTdkQgeF2cL9JiWMpTcS2jjJg0XFb4%2BksviP0lnBrjA14kF3yxI%2FGe6BqdMUf%2FDRXnbR%2BwRry5ycxcY8e3c66xjtM1jJl%2FHK896E5NsoUSmdMUxGIdOG5zj2dktuKQVxr4rpgnOvuFuquo5MSoIqnxrzeH8A7Kdusit6svssWn%2F7oNXBtolDiApBm6zslhYLl42H58KIyTxvzAu0JW1olnC%2BkSuK3ChyLOZrr0guGyU3Oe%2BKrRjNyqu7zJznLUrkNE0erln4sMGxSf9lhMqxFbPlXvEKn7lrYZ2Gu2s9PS5LqZPtuLyU4BipapFfBVhB7Bt8fe7ro3yoQ2aB2y%2BxG%2BwOGqKvM%2F2%2Bzp5LkwQdYnT4CbaiuBwYZSsvHQqgyKb5IeR4Nf2xsDFDL5d0cOZZzL28Xx79yiWdw2H%2FI91v3Ej9pHk1mNgnJ0tyC26K%2FnyOCFXOZWgvF2c%2BTDDTK8GVyliQffySxwgM1mnOh6EjPm70S4RVkMZSSJ31hhxCfXLscDUxrhf55dBfDQ8zrWj1dtl%2B%2Bjvlvp90%2FQZyuHr%2BquUnUM8oJuNQISt9eJ%2Br%2BedqwG1%2B24D7L1M1vESYefc9IyJ47dPez4Q7CMIaJ0MkGOqUBRYfdAjO25Va8pgXlrFZ%2BZQahwwuhl2sxKYJRgvaNvpitkrbAaPW99z09bMAQa6tZNujp2%2BfENO1%2B3QYRpItDAJz1TU%2BSm%2FIYAzkrUD1xqzdU%2BATfPA4Fxmq1i9un%2BSf6Ka5fhGlJ2cLOUQLf9pykK8l256CPpjMJJG1L%2F7FB2JcB3WVzm7%2F8JYSn2Dpd%2BPCJvcDbW0xLkdKoBglawKbVmDofL6kh&X-Amz-Signature=32ef78c4c31e1a73cdc2c9c77d05d69837c83c6b8c52bf661b3219b50799b39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

