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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI57W25J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7JZlAH56M%2BZGKnKV%2BquakTKYX2bqtv27pCMfcVS2WqAiEAmOxw0ydqk2NcLWANanJBoIxMnatpDV9ITUfKYrNj97cqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAw6ge%2BzrQpmqRnZgSrcA0eb0PK0pKy98uMgp4oAO1hXYmjVdzQJPfTGoXkjJqhVfJYIEr6PfQPLDUwsdD5jfbD7dtEyJscAUHD8uj43Ozg82CapGsjJJzP5ezG1gpEKyyUiE6XPPcBhcwpA18%2FhdEB7INVLJhZ9HwNLHbbn%2Fj0OOOTfwH8lywsAyH3J%2BLxfr7pnRlJbk3F9HpG8udsJ1nuDhMqbfhR2fY41rjM3o9EcI5z7wu0E7uLkN0FrIH0Bgn2MI0WI%2B%2BG6996Z%2BH%2FR8uzES1PR6Aev4Y5wojjBbndTSl2VriASmV102bSpmbzBQ%2FFimNHU0CQdA5msNX2YYrTOQhjyfhRxJX8GkB4EuVphJemcf%2BQ6p5Tp8INDUE9jIQmtwl1qTQLUxtafHePLhMzgFecrk6gBs5VUQEi9nWrsHGXhD83bpozxYoEFpKQAyzvj2Apj4IZfniu48YZZYaUcRKO0AjFRht90DG%2FmE1BLz9G3oRKqytd6yK2rJE0NzBUbMW5RdW0bhbzbB1zy6f2GE4yaStYO94ycDadXmJa2MX%2FWfIxI9SJiFnAV7Ka69OnwhbKUd57MUldJAz%2BJdiBBhilT%2FZkXJN0IkAT3LgV1ip1C2MQE5gLS7EGAcUjDI40F5bFzDBzkfyAUMOmP28kGOqUBIi7AheWJfdcnhGscR%2BnYWt%2FuMjpzp3aUkGWy6uzroeNcdf0YBkhOYYxJSFCCGuScOzbdAUfbglIBo2xYg2TWPYnJcdbkjRNstbqnWLTfQkzxTuz6Drp7cGIL1WLjS6KlP1ozsYtR4BcX1Mf9zqSPDRcjp3Sx%2BQ%2FhfEw4Pufw0F%2BuiXt%2B9g%2Bt5P20taCIiquDWr6agvfSEcKfrL759m8hD%2BZvDA3d&X-Amz-Signature=d5bef5c5558d05ae5709cc3942b8ad0ad82af02b451071a62d80e9253416e5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

