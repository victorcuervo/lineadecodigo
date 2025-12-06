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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHBK27B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH%2F%2F1LrmXG%2Bz6i%2BEkhUANrMe0E8pwruFoJKXQ%2BW7akzAiEAtYvrEewyqMpy8asdH%2FxaTWB0yG78SYG3fKpirINeZ2wq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEfkZqjU4t8PagG1%2BircA4vafuPPIgDp0Np6AcXDqxfyih0TE9cNHXFRlX9XIXKS3uOPk%2FHsoyS2VCVwOCKqu%2F%2BDNG4ptg3Y59JJiXgqKwER%2FqQErTKJRxrFKjPKhXEkoWhV4ZUQPatPuKL17seX96ad5VUgYYgrphfBJMdlR1RgtIvIaKf1xUK8qKg%2B1%2BHENO9OsmgfzZfR0o%2FBi600K72t68Y2xoTR4Cl%2B9TCHCqQ1aAAbuAgdLOhOEZ%2BQviFKG40Xqh0nXm74O6NGu5tElxddebhGBX6bp7uadrh3xQnlHxwynzFGNZBorIKC2spYd%2BUIfjq9tYMMsMhdz76MS3nf%2BCRVI5lQoES1SRh%2BCi%2FilwSsTQWfANUffZmKEfk38vImM0RP1%2FFIgJN0u6Lh%2FOjHS3kq7I%2BNHkenvDV3Wagi%2BydYQtaWgjg%2BZxmfxl8%2B2LMOMLYpbG6nAl2VLpLYeKma2XhXJLsCigGK24cBu0fix%2BNwa9zkPvKa6xSP0hQz8JsKTUWS5UcOgt37IP9hizMmXxSIq%2B3JSkwidiamUHm8E2q0pm4baTntHKN5tu1cD60EWxZqpX3xfxNoIn7e7SECjuaqaeZDYDPJcrv2Yp34e8KbVfaJDxgFCh364wpmCx5os1k8IWY9zQnoMNeJ0MkGOqUB7gxU7kIXkX8VmFMwZwr1BYatO6jMRTzh83eLT9PogMyZW6HGeuaeltOidfEDIzM0eswzWEN63n%2BApMOUSCdKsOkB%2BwiFkr76g1e8ggPpSdqo4huinOAmVc0X5hvq2jjRcgeUymY9djn%2FM%2B3MVOQIn%2BI%2BgIy5Bu0AsTNojN0bRYhLWZG6Bu6kb%2FlklWaLz8vZLGrNWFJ1%2FCNzQOwDmLYhldg47MGP&X-Amz-Signature=1827193b56c13a053f73242bac8729b08de2d255171b58f68745a2377ea29ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

