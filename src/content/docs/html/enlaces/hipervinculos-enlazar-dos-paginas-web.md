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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DHUO3K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuzyBgQjCLZmG%2F3JD2g1Hk1e4ow6x5IgsvGU%2FDhyBYvAIgby86iUbK3mPXOHw0YMSpWPg%2BxcOpvaCurX4zwAgzJrsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDKL3aCPNpgbCphD1ircA6IMhAm342SbYbABccJ9zpDNjMeuI5sLn%2BBKbC3NmPrIZKvlRCzb0OOqerQZAKecK4d79oin%2F7CDvd67Wny09v5sGJ2DhYZzNUWoVD8YNMtD%2FMxdqHPk58xmm%2BO1rd6%2BhZtEAPLdQs5PVC6T2v1hfacdc0jKIlPcT9uhkfXmdLHVmocID0pu%2B9W4DJpb8SggSQ9h6B94ZY0LHWE5KMtZBP1xv6y%2BbcoSaxvYAjAur8xww3kQjWmmrQjWvnyMngqLG07a7V5wR8QahOzE3NoIvb62DrEdrBTiIfcvM9GTk2%2B84%2B8gASvoQo7fMf8LXsTb8bE6BdZ%2BwVrLY9wwCnKWyj0H%2FyI%2FRrc38%2BxjdLMHEgfv5shXj7cxJ39cO1x0bfUPH08dOBmzok7%2BlyuMakH6hjrbpzE7q31HfOrXZfUeS9pfnVDKmNluC5SDDd%2B9yxILTRwLgYqV7LYHcb8quFHdwlr%2BjA4YGYfCB7TRqbTBOXcSW8vtVl26ATDoho2CZWM9Zodi62XxoCfXegZE%2BJ%2BiR2%2BL2LsoYWkUlPcLR5p7v2Ax3mNG3lzwh2AvFs0v0cQpXZdjTOrldLuX5eREyQ71L5S6R7DlOfT1PV4md5ROM%2FleLyknHWGBX8az38RPMLvDzskGOqUB59gd619FHbA5nI1s9JelRiaofh%2FlIm8MXEMnFDkOuLE7G7mF67eRjeFhwAka4YMR5P4KlCuztw466c07uKN5gRmOiZw6feod9ftJv0SsUPAuH%2BO%2BZIWzt3l5rd9hjP0yabcS2pB70KCYbvus5naWdVCuRCN1TdsT6yrfisctPFRBQTpYKs8%2FZNCcwz1P3Ztmv07FWdDcBzaxI4%2FgqJ8vWPzhnnk9&X-Amz-Signature=cfcf4c873b590c36718797d15311b647cfdd7018f148811c7d625bf808ebebaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

