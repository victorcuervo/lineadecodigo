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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZADOAD4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrpvM2WgAr%2Bv7MHg1O%2Fa3vuBChc4prCfcqIHNaGKSbmwIgR2%2FV2A9s8G5nklZGv5P4ZB%2BNNXflT3uzdTOaBFHqD%2BsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHR5c24zyBqHL54YircA2JYS2KmFUga2b0PThCBOmEzse5WDRSosEE9LAfVKKKyGY%2FmOv%2FavJSL%2Bp4A8PWD69QytbtzfLM33Ae3YE7ai1Z4Tvn3IvVdQWoi5W%2BU6nAGAFzqRfjWEKnsYSs7CL5W%2FfxCN0Lb58SJD7L7L4kxMp624sCgB%2BUmIUntRRW0nvuWiP8eibstUvY8RREJycWJPHjeM8PF42nTnoqwYUTWkltGwFAcD6m%2BZg18CbyMc8J1ywSiYRTKIuk5XARLTSVg1%2BMPHKqSyfaH%2BBV%2BxCaHBdXrvqUCFiU1%2BJrUzAO85DKjtJ7Guz6fGHR4YoF9T0fcH0cuS7yiQrloMIyfuvmNMGKBgj2nxtenLX9iaeiLh9tsQ4qFzqJGKi%2FDxaEJhrtSCEAXDx5B0BUiRcaSG5GQd4ip7LESPmIrLJcCpJ78%2F6GTcpUWFm87u6NcVTw5Gqf2V%2FDE%2Bzehwjw8%2BabRH4yO7rHtnb0wLE%2FUBkFosLgXhL3Z7yUiqnWbnYG%2FmC0gKxSGP%2FjigVK309HU6iJbBaZQvntZFPrNCgu%2FZNk3mtW9RfZ%2BpmREdtc%2BFMdLjwjgBlJbivJCdVNqqMKxENNluWTTK%2FBnmcm6LMsQgrQ8IlgUGWGhnYZsVejwTT0WD9k0MLjR2MkGOqUB5%2BCq38GfwM4q0UFczHfCkUjt%2F0VdKyafBosWLwhById8KkQ3ARLVlFUpLQyp8bBcFGz9BubFEqDPmct2X1LP30fjOp4p6laLe%2BjgEEpVKrKzws5Wx2Cu7n7vQvAR0LCQz4BjZbE14Hc6rPHI6I00CwejE11X%2FTg22nlgrEefPEmJkl4Q5EDbyJiN6Zolce3rKq0X4VhM8PuTTS8xykFs2htTU8ws&X-Amz-Signature=253139e5008d2ca107d883fa8e8b22f1214d40b5e492f2e3d88d2f3019410654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

