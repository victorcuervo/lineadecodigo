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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4PC62Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADmsbGMpaD78xr%2BVxv2H5u24IrqlwO5NoxgCtr%2BobRVAiB4O13Q3AgcYFoJzWb%2BFB%2FrIEw5tVJ3GhpgefNP4fs60ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTfi7reg7FcU3Bx5LKtwDbBcdPmflcEzbhrqY0dcS7EiMjlE89Zo6TusbQv2iCIwF%2BnzJbhw8P7CY4cl%2B%2FnYngZlug738vTN0YGExxsY%2BtBgftWWN%2B6rFhhij9E08t%2B%2BZfC7bjpTkl%2BmGjc2jcVSZr4NwroO2iea4BsCTRl0cU10DtUO30stK3%2F6G6j3dXJqd6Eydwg6kLQsL94%2FDqGYF7QIfYyKQT6T6DPn6A%2FO3fndBDy62ohCtczPCoiWb%2FJGCL3UX69Gx6DHanZKBa%2BXPgkoOwe13rIpBO0qYYPB26KspKyHrRjfUivUjmmiB%2Fxd1QbpiRk4R%2BpJFWp%2Bfz19ZrGTcMApTx8wdX3WQWgGCFz8yn0Dexh4nNu69osNALDHn82RHV05U7NIOzY8V5O4%2Bat9BvJEFwh%2Bfp0fVjn%2BuqUh2k8cKBL9Hkp9K2sFCQlnIKUCWwt8fqCg7fyOVAKVI3AUlLE3pWodALDUv%2BFEo2aXHMlC7Es9pcItEkiJG8Sg3B86ys%2BI6Z%2Bu2e%2Fh5TGX2YiUs9zGxzNECbwjtYfKk0C3D%2Bz8OSpuV9e1WPjuDpLX%2BEPqz0v886FOHGOJKn80CUrHBnIMxCBCXFfuhj7uih5%2FakCr%2F5DWdwBLpy0GRCY%2BjiTcdGRAc%2F6obQo0wrcvRyQY6pgFB%2Fj%2FgiCye84D%2Fk59fAEHM6pJcSKuKqjkVfC05jzHNB9TnbhiEF712LWXRXvQQiHCunvJh55DxMIiNMoTw62kuQDxNGolUFho%2FYaffTnIE1WvyXvowiCzJXhcr5bQ%2F1vltaCNQNFb1Ps1lxfdYgf%2FeUKHrYdzI4YryduJ2dYLHfLEUwHwcv9LT9vXV8FPZBCseop3zRBj%2BN1plRh081SvCk%2FR2oeZT&X-Amz-Signature=b412aebe9f829062d744d9fd7599aceab058596626d6848224bb014cc92fb062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

