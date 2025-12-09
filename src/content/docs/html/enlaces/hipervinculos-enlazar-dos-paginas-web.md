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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEDO43A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyLko5pBb3o9AKnaYra9Kx0cFPIwQgSHms%2BmftB4cwuQIgbIUA%2FLoddH2jfR6ioAFQrfGa%2BPR8TCBTWQIDWk1Y%2BZkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFDuGvYUVUGGw6DwvSrcA%2FjXAHpfwgr%2B5xbH%2FlwaGddDc10WWNVrww4AFHCFSA3tvX5a6qJyyVZxnTqcIatAYrY%2BTqsufOaJ9%2F7MZ8cYuoIO9%2BjTuZiseuxeW60v7AMZFrzwKmBYb8xpPi7rwnj8TRUYMQYZu462oDTXiCZHK18YmmMEW0EKTEbp4Q1bp9k9doiOkJUbFnlwmwXJmqT%2FLW3TPFSyn9NT7vHEEddK8dexD0Hnyjx1OUrchkh5vj5n0dsrqWpumofvt8h5c3FDcnGgoic2p9%2FNvsLL79%2F80vFk7%2BIiohtuJblw2bLKKbauXSS7ML6TAsNqiWtgReHIfIrjzrfmbIEX2KA51NH1YlPrIy0WkUH9fEAvP65%2FYQPNF25cHzdhl9xaThBOI3%2BmbVazmGdeWrqqPjypn0Z06JJURiql6DMaAesmnk3wnuD7O6N0dwHV2YHme6Ca1NLkPckGl6G9xNkwsOLL7I4NBhjtp3kMj061MZXJuOyo%2FxK6n%2F9FkY%2BDav6hwfzKZYI9RL4xOQLILkufO6326cPCKnic8KxSGxc3rVE66AAndyJ9hDst4IwYDPhOmBv79XpTBfGjAUsufG0g1tu3RSiqQRnMCdWO6rBxb0CEr3cPsR%2FTjoDPMbA2HO6EJEwjMPnc4MkGOqUB8fB3v7gXU%2FUOVmoFmFhj27ueKd7SjdUwl7AjBt8JbJXyHnVvI0GweDCMACaIUcCBBt0vCXRq4PFjti35ioFRdh2mofCdj%2F2RS%2BnYPJT5TsyQyAbjCYLjKbdcWtxlHMGwga3ogGF%2F7p6E0l%2F70drLCtO6tve2p9G9wQIvXPSAUYZ3LTxLBJfS8N3boovpAngt0eVaOcKvrzT0Dk6nGsxA4k3DY1jF&X-Amz-Signature=92ff3d3695f5c75080dc660fa3110eb869c9a305c116b5a606fdf259bc2ec393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

