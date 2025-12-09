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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIM5V2K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPyanv7tQRPGRuIAzSd1u9EFm4j5TiWW8qB13Wl%2FChhgIgbG%2FdYMTNJ0XeD7fld5zVrjHPHFJp4mROYaFrmoBdEEUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHx%2BL3Iw9wqI1TSQircA41jSLqqwIiLOqbCTehkSMQYB1iyLaM44%2BwHt6JktTOOlFGFQ9%2FFfAxxyui2RF9EEejbJwm06D8CFzaDblVd2A5fzrae4W2isSjzN2EP7WfDdwQK92ytm%2F0ctOfR5tQcC7K3SKvnLKyWSPGOG%2FEz3MDXkJnp3GDsxTHvuharcCRuaQKRSmtCn%2ByHihFfHe5Y18FpQ3QI1sykRkffdXD2uC7jLZ93BhVc%2FBtOI1B5b7jF7MieeIpOgNDbnMcRnbeHoj3A9LtO0cXo3V3ljmFGwDULUoYVzkUF9BD3xZ1LjkQLJToS0%2BG%2FEBQT7ug4oM9FOg5PJA1qgV5VSsRamq7sOXcCMVJitNddgUkH8DLSy9UkCJFHO%2Fhg5pzUWKVkajSvOIb%2BNjg7e2DkKFlLOozDcD%2F1VEx9NOCB8pOux5aIWr1O2Av13yhCs2DKLAcdp8iPBA2rUftmH1cSK%2FxFsbogI5RY1Y6Nt6VbQVZ0ORXK4CMILFOgXmuB4dgR21HZ%2BbHT1TcQcICD%2BAd%2BdPRSgIgUycZz7p6PnYTJ96QeRNhdyiP6QbqDJpgBKouEN1jEGxyhqfIOYPrMz0%2BJk6IbpKam%2BNJIkPhk6V%2FUV6iD1dPDEJSrTt93ms2uP1eHlI6wMLSZ4ckGOqUBjRodxWYD7ppTw1gkOssDt%2Bas4PIPXBp2TQ%2FwOB2lIU0y7nDEa43D7MDO4IR10%2F5svg3SWcb0HpoJEIjA0jazCVs%2FdjzHB0ay2bFzT7GPzue5ezza3eFsktclCj9mUjtAOXt7eG22sSmEVsN1ZlGC4%2BRpPBoLzzXdtXqD6hU2xM463DfoLQ7LT%2F8nFOvaeESci8EMWyXi0U17erP7BkreXFb2ogrV&X-Amz-Signature=67b2ba2784c3cea8d369ecff2a81c27968bc15688e4e81b7d4ae95f1a586a386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

