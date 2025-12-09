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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665IEU2VZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDpTtVL7kB%2FNOW95g2p7wa0afqJM3a%2B4sovE6quSRxAgIgUYro1KAytYwRTC46jjmNld43lorBOCodyta2Jyy%2F0HMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLuOUL%2BlJqbmr5tCrcA3uZsELXSZUtix0FXSV6DnwWi3hl4cZE1OEZq3R4Df%2FIASHzFciCbOR8EzTSNuXyEJc%2BbelO8X1vKXTfkNppKwMrh709%2BqX42v%2B6OfMAo5vnSPFUzFoXhqgb0e7t2OfIGNh%2FvHMHq7wF%2FZLl%2BReg48DqOCil%2BVXl6pRBu4heiu3qT63ZYSU6fSvoq8qc%2BiiL9E4DhC3vW0rwVwZxG7GKGOVvuoWzeJ24kadwFjJwo%2F%2FphrygI2ZY2O9n%2F1bDW0xA51AP9PdmOZ2vrdnePiGPzYJx1A6WHFvyCFkp8XAnNh9BXzgfxzM3YpcoXVWWp0dOsWUO8PJlfuHG2Ni66r1ZnjdoPMrZ5xPSlLelJ3RiTzRdfgwtotphZiwPLqdK6IIjf%2FEKv4zdhyZ3DVj3wfjFbDyH9GQFiKcPHu4AIkNwpd3EU2HSgup0YbNHZj8l3gLvSel%2BW5Oc8%2FfpPBVaS9cpeGu7N25CkPPVBW1Al1OiiZAxMpahtnclNQ5GSjHh5tzbzXPt6vvMZ7bQMFt7Xi2yakRJ214krmjvsPzbWlYHa3M2LtJ6N31qY6TjfhTTJ%2BVBPTXN10zDNaVq4pTMNqYGmKJ6RGXKbT%2BTX%2FGZn5AjoCfN9o%2FrgxtofnDkbWnNMKHD38kGOqUBRKQNxQwEqY7jTSae4zFEd%2Bs9FBj4S1MHEIY5sAN0sq50ZLNbtec8kefOzUOB%2BNw18W62IdGNaDPbmvaPGgmo67Esp%2BcWF49NdCL%2Fd9aYXQZR2TIxJBHnkSLoZjKCusEhLcjHgq8L3qCFac8Lp1pbzuJKRtJ6NKpFSgVG3B93zi4m77h%2BBZetTR1q%2BVF9uzHN02aLX0ykYO2rpcGvkwHjW%2BQNmhyp&X-Amz-Signature=a9e2b6f245c2b50b5da4be35a0162d3b77c96670b5ababbd4c62416e8b47d243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

