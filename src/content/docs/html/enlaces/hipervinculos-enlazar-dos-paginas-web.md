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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDZE6PX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBXmpmHSd%2BRHCJS%2BpFewAZxvYiOn3DyOjb9h0itNCUcAiEA0PpBlymops1sSYSafQtqZ%2FQs3B5KU%2F5xwwehcOGcHSoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkYXRw1c8vH7cRN%2BSrcA374clBNwn%2F1JVNTp2frwl69wlfofFPDi8A5Qqigogmb6MiAc1KcrLjHivRHT7I4qSARfDXp1%2FtZCDqBLESf%2BHHg6BJ54QXln2bfhSchgoz3TWqvlFjCsReoWqVshWOuHEj7lo2S6%2BrhiCx1hhWv5YBHJV101ZFOwmIArMtyiQ48rGBqbVEYhC6gWX%2BmH6EyWA3%2BTsGn20HVfhG%2B25Xd7pkz8AecSYkJ9kYrf%2BsF768%2FRovhjjlEm9JJJAof%2FZyp0K6E%2ByXrx3iQS31SMPtBDSdOi12GtHJvc0woHTaTIUauBvlS2NFTggr7aFGNnvGa12F5lvXq9M4CoHYbp5TSDknBs5Rjq3xNx3uFEUlSXhCZ66kE6Bc7POb6Su9CMkAoVg2K9rhoHEP4nSiX0NuEg4jqwNIUXFPWTBw4AbHgLeB6eu3ywO3lUpFkSsvIHQ%2Fqjb3AkYellwU%2F9dlJJaoXPvuZ2VnqWZpJrRN6Qycl0G0DEwr78n05Wr%2FkUI4u0XwuduPte1mzLq3QvHXtezi7KKUfoIK01g8o44ocjj2taYxJHtJUnAJ4d7%2F6T86VtYHlEvmGxC7D29hG%2BIe%2B%2FrijD7W%2FliTfBxebilhZWprwh1fmNjcv%2BGAs3LX7LKFbMOqz2ckGOqUBChmR8m1LhMokRbyV5psHguXWq%2FKCIcSvQxAcQKpFWDCRY4tXiGPkk0a7wJCckNwsubNkdHLmOkz0ZiKQtJPEt1MrydnjzNJj9j3%2B06tWGVRWmGokRsUnbfTl4x1VCrL4gp%2FyVjD2BCjszyyl6%2FttGKXMAKLl8O%2Bp25l6kVochIbYVaBceaxU0t754uay5GrXnByGYhXJDTZxgTSsxZuBm7FrizKb&X-Amz-Signature=c2a4e189a5bebc53a4925578fc43f63d1f258a14496019cea7dc454745599a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

